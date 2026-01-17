import React, { useMemo } from 'react';
import { BarChart3, Target, TrendingUp, TrendingDown, Minus, CheckCircle, XCircle } from 'lucide-react';
import { useGame } from '@/contexts/GameContext';
import { useLanguage } from '@/contexts/LanguageContext';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';

interface CategoryStats {
  category: string;
  totalAttempts: number;
  totalCorrect: number;
  totalQuestions: number;
  accuracy: number;
  bestScore: number;
  worstScore: number;
  averageTime: number;
  trend: 'up' | 'down' | 'stable';
  recentAccuracy: number;
}

const CategoryAccuracyStats: React.FC = () => {
  const { state } = useGame();
  const { t } = useLanguage();

  const categoryStats = useMemo((): CategoryStats[] => {
    const statsMap = new Map<string, {
      attempts: number;
      correct: number;
      total: number;
      scores: number[];
      times: number[];
      recentScores: number[];
    }>();

    // Process all challenge scores
    state.challengeScores.forEach((score, index) => {
      const existing = statsMap.get(score.category) || {
        attempts: 0,
        correct: 0,
        total: 0,
        scores: [],
        times: [],
        recentScores: [],
      };

      existing.attempts += 1;
      existing.correct += score.score;
      existing.total += score.maxScore;
      existing.scores.push(score.percentage);
      existing.times.push(score.timeUsed);

      // Keep track of last 5 attempts for trend
      if (index >= state.challengeScores.filter(s => s.category === score.category).length - 5) {
        existing.recentScores.push(score.percentage);
      }

      statsMap.set(score.category, existing);
    });

    // Also process quiz results
    state.quizResults.forEach((result, index) => {
      const existing = statsMap.get(result.quizType) || {
        attempts: 0,
        correct: 0,
        total: 0,
        scores: [],
        times: [],
        recentScores: [],
      };

      existing.attempts += 1;
      existing.correct += result.score;
      existing.total += result.maxScore;
      existing.scores.push(result.percentage);

      // Keep track of last 5 attempts for trend
      const categoryResults = state.quizResults.filter(r => r.quizType === result.quizType);
      if (index >= categoryResults.length - 5) {
        existing.recentScores.push(result.percentage);
      }

      statsMap.set(result.quizType, existing);
    });

    // Convert to array and calculate derived stats
    return Array.from(statsMap.entries())
      .map(([category, data]): CategoryStats => {
        const accuracy = data.total > 0 ? (data.correct / data.total) * 100 : 0;
        const bestScore = data.scores.length > 0 ? Math.max(...data.scores) : 0;
        const worstScore = data.scores.length > 0 ? Math.min(...data.scores) : 0;
        const averageTime = data.times.length > 0 
          ? data.times.reduce((a, b) => a + b, 0) / data.times.length 
          : 0;

        // Calculate trend based on recent vs overall performance
        const recentAccuracy = data.recentScores.length > 0
          ? data.recentScores.reduce((a, b) => a + b, 0) / data.recentScores.length
          : accuracy;

        let trend: 'up' | 'down' | 'stable' = 'stable';
        if (data.recentScores.length >= 3) {
          const diff = recentAccuracy - accuracy;
          if (diff > 5) trend = 'up';
          else if (diff < -5) trend = 'down';
        }

        return {
          category,
          totalAttempts: data.attempts,
          totalCorrect: data.correct,
          totalQuestions: data.total,
          accuracy,
          bestScore,
          worstScore,
          averageTime,
          trend,
          recentAccuracy,
        };
      })
      .sort((a, b) => b.accuracy - a.accuracy);
  }, [state.challengeScores, state.quizResults]);

  const overallStats = useMemo(() => {
    const totalCorrect = categoryStats.reduce((sum, cat) => sum + cat.totalCorrect, 0);
    const totalQuestions = categoryStats.reduce((sum, cat) => sum + cat.totalQuestions, 0);
    const totalAttempts = categoryStats.reduce((sum, cat) => sum + cat.totalAttempts, 0);
    
    return {
      overallAccuracy: totalQuestions > 0 ? (totalCorrect / totalQuestions) * 100 : 0,
      totalCorrect,
      totalQuestions,
      totalAttempts,
      categoriesCount: categoryStats.length,
    };
  }, [categoryStats]);

  const formatTime = (seconds: number): string => {
    const mins = Math.floor(seconds / 60);
    const secs = Math.round(seconds % 60);
    return mins > 0 ? `${mins}m ${secs}s` : `${secs}s`;
  };

  const getAccuracyColor = (accuracy: number): string => {
    if (accuracy >= 80) return 'text-success';
    if (accuracy >= 60) return 'text-warning';
    return 'text-destructive';
  };

  const getAccuracyBgColor = (accuracy: number): string => {
    if (accuracy >= 80) return 'bg-success/20';
    if (accuracy >= 60) return 'bg-warning/20';
    return 'bg-destructive/20';
  };

  const getTrendIcon = (trend: 'up' | 'down' | 'stable') => {
    switch (trend) {
      case 'up':
        return <TrendingUp className="h-4 w-4 text-success" />;
      case 'down':
        return <TrendingDown className="h-4 w-4 text-destructive" />;
      default:
        return <Minus className="h-4 w-4 text-muted-foreground" />;
    }
  };

  if (categoryStats.length === 0) {
    return (
      <Card className="glass-card">
        <CardContent className="py-12 text-center">
          <BarChart3 className="mx-auto mb-4 h-16 w-16 text-muted-foreground opacity-50" />
          <p className="text-lg text-muted-foreground">
            {t('noStatsYet')}
          </p>
          <p className="text-sm text-muted-foreground mt-2">
            {t('completeQuizzesToSeeStats')}
          </p>
        </CardContent>
      </Card>
    );
  }

  return (
    <div className="space-y-6">
      {/* Overall Stats Summary */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <Card className="glass-card">
          <CardContent className="flex flex-col items-center p-6 text-center">
            <Target className="mb-2 h-8 w-8 text-primary" />
            <span className={`text-3xl font-bold ${getAccuracyColor(overallStats.overallAccuracy)}`}>
              {overallStats.overallAccuracy.toFixed(1)}%
            </span>
            <span className="text-sm text-muted-foreground">{t('overallAccuracy')}</span>
          </CardContent>
        </Card>
        <Card className="glass-card">
          <CardContent className="flex flex-col items-center p-6 text-center">
            <CheckCircle className="mb-2 h-8 w-8 text-success" />
            <span className="text-3xl font-bold text-foreground">
              {overallStats.totalCorrect}
            </span>
            <span className="text-sm text-muted-foreground">{t('correctAnswers')}</span>
          </CardContent>
        </Card>
        <Card className="glass-card">
          <CardContent className="flex flex-col items-center p-6 text-center">
            <XCircle className="mb-2 h-8 w-8 text-destructive" />
            <span className="text-3xl font-bold text-foreground">
              {overallStats.totalQuestions - overallStats.totalCorrect}
            </span>
            <span className="text-sm text-muted-foreground">{t('wrongAnswers')}</span>
          </CardContent>
        </Card>
        <Card className="glass-card">
          <CardContent className="flex flex-col items-center p-6 text-center">
            <BarChart3 className="mb-2 h-8 w-8 text-primary" />
            <span className="text-3xl font-bold text-foreground">
              {overallStats.categoriesCount}
            </span>
            <span className="text-sm text-muted-foreground">{t('categoriesPlayed')}</span>
          </CardContent>
        </Card>
      </div>

      {/* Category Breakdown */}
      <Card className="glass-card">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 font-serif">
            <BarChart3 className="h-5 w-5 text-primary" />
            {t('accuracyByCategory')}
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {categoryStats.map((cat) => (
            <div 
              key={cat.category}
              className="rounded-lg border border-border/50 p-4 space-y-3"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <h4 className="font-medium capitalize">
                    {t(cat.category) || cat.category.replace(/([A-Z])/g, ' $1').trim()}
                  </h4>
                  {getTrendIcon(cat.trend)}
                </div>
                <span className={`text-lg font-bold ${getAccuracyColor(cat.accuracy)}`}>
                  {cat.accuracy.toFixed(1)}%
                </span>
              </div>

              <Progress 
                value={cat.accuracy} 
                className="h-2"
              />

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-sm">
                <div className={`rounded-md p-2 ${getAccuracyBgColor(cat.accuracy)}`}>
                  <p className="text-muted-foreground text-xs">{t('attempts')}</p>
                  <p className="font-semibold">{cat.totalAttempts}</p>
                </div>
                <div className="rounded-md p-2 bg-success/20">
                  <p className="text-muted-foreground text-xs">{t('bestScore')}</p>
                  <p className="font-semibold text-success">{cat.bestScore.toFixed(0)}%</p>
                </div>
                <div className="rounded-md p-2 bg-destructive/20">
                  <p className="text-muted-foreground text-xs">{t('worstScore')}</p>
                  <p className="font-semibold text-destructive">{cat.worstScore.toFixed(0)}%</p>
                </div>
                {cat.averageTime > 0 && (
                  <div className="rounded-md p-2 bg-primary/20">
                    <p className="text-muted-foreground text-xs">{t('avgTime')}</p>
                    <p className="font-semibold">{formatTime(cat.averageTime)}</p>
                  </div>
                )}
              </div>

              <div className="flex items-center justify-between text-xs text-muted-foreground">
                <span>
                  {cat.totalCorrect} / {cat.totalQuestions} {t('questionsCorrect')}
                </span>
                {cat.trend !== 'stable' && (
                  <span className={cat.trend === 'up' ? 'text-success' : 'text-destructive'}>
                    {cat.trend === 'up' ? '↑' : '↓'} {t('recentTrend')}: {cat.recentAccuracy.toFixed(0)}%
                  </span>
                )}
              </div>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  );
};

export default CategoryAccuracyStats;
