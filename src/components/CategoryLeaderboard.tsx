import React from 'react';
import { Trophy, Medal, Award, Clock, Star } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useLanguage } from '@/contexts/LanguageContext';
import { useGame, ChallengeScore } from '@/contexts/GameContext';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

interface CategoryBestScore {
  category: string;
  bestPercentage: number;
  bestScore: number;
  maxScore: number;
  bestTime: number;
  date: Date;
  attempts: number;
}

const CategoryLeaderboard: React.FC = () => {
  const { t } = useLanguage();
  const { state } = useGame();

  // Get best scores per category
  const categoryBestScores = React.useMemo(() => {
    const categoryMap = new Map<string, CategoryBestScore>();
    
    state.challengeScores.forEach((score) => {
      const existing = categoryMap.get(score.category);
      
      if (!existing) {
        categoryMap.set(score.category, {
          category: score.category,
          bestPercentage: score.percentage,
          bestScore: score.score,
          maxScore: score.maxScore,
          bestTime: score.timeUsed,
          date: score.date,
          attempts: 1,
        });
      } else {
        // Update best if this score is better
        const isBetter = score.percentage > existing.bestPercentage ||
          (score.percentage === existing.bestPercentage && score.timeUsed < existing.bestTime);
        
        categoryMap.set(score.category, {
          ...existing,
          attempts: existing.attempts + 1,
          ...(isBetter ? {
            bestPercentage: score.percentage,
            bestScore: score.score,
            maxScore: score.maxScore,
            bestTime: score.timeUsed,
            date: score.date,
          } : {}),
        });
      }
    });
    
    return Array.from(categoryMap.values()).sort((a, b) => {
      if (b.bestPercentage !== a.bestPercentage) return b.bestPercentage - a.bestPercentage;
      return a.bestTime - b.bestTime;
    });
  }, [state.challengeScores]);

  // Recent top scores (last 10)
  const recentTopScores = React.useMemo(() => {
    return [...state.challengeScores]
      .sort((a, b) => {
        if (b.percentage !== a.percentage) return b.percentage - a.percentage;
        return a.timeUsed - b.timeUsed;
      })
      .slice(0, 10);
  }, [state.challengeScores]);

  const getRankIcon = (index: number) => {
    switch (index) {
      case 0: return <Trophy className="h-5 w-5 text-warning" />;
      case 1: return <Medal className="h-5 w-5 text-muted-foreground" />;
      case 2: return <Award className="h-5 w-5 text-amber-600" />;
      default: return <span className="w-5 text-center font-bold text-muted-foreground">{index + 1}</span>;
    }
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return mins > 0 ? `${mins}m ${secs}s` : `${secs}s`;
  };

  const formatDate = (date: Date) => {
    return new Date(date).toLocaleDateString(undefined, { 
      month: 'short', 
      day: 'numeric' 
    });
  };

  if (state.challengeScores.length === 0) {
    return (
      <Card className="glass-card border-2 border-border/50">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 font-serif">
            <Trophy className="h-5 w-5 text-warning" />
            {t('leaderboard')}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground text-center py-4">
            {t('noLeaderboardScores')}
          </p>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="glass-card border-2 border-border/50">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 font-serif">
          <Trophy className="h-5 w-5 text-warning" />
          {t('leaderboard')}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="categories" className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-4">
            <TabsTrigger value="categories">{t('bestByCategory')}</TabsTrigger>
            <TabsTrigger value="recent">{t('recentBest')}</TabsTrigger>
          </TabsList>
          
          <TabsContent value="categories" className="space-y-2">
            {categoryBestScores.map((score, index) => (
              <div 
                key={score.category}
                className={`flex items-center gap-3 p-3 rounded-lg transition-colors ${
                  index === 0 ? 'bg-warning/10 border border-warning/30' : 'bg-muted/30'
                }`}
              >
                <div className="flex-shrink-0 w-6 flex justify-center">
                  {getRankIcon(index)}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-semibold truncate text-foreground">
                    {t(score.category) || score.category}
                  </p>
                  <p className="text-xs text-muted-foreground flex items-center gap-2">
                    <span className="flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      {formatTime(score.bestTime)}
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <Star className="h-3 w-3" />
                      {score.attempts} {t('attempts')}
                    </span>
                  </p>
                </div>
                <div className="flex-shrink-0 text-right">
                  <p className={`font-bold text-lg ${
                    score.bestPercentage >= 80 ? 'text-success' : 
                    score.bestPercentage >= 50 ? 'text-warning' : 'text-destructive'
                  }`}>
                    {score.bestPercentage}%
                  </p>
                  <p className="text-xs text-muted-foreground">
                    {score.bestScore}/{score.maxScore}
                  </p>
                </div>
              </div>
            ))}
          </TabsContent>
          
          <TabsContent value="recent" className="space-y-2">
            {recentTopScores.map((score, index) => (
              <div 
                key={`${score.date}-${index}`}
                className={`flex items-center gap-3 p-3 rounded-lg transition-colors ${
                  index === 0 ? 'bg-warning/10 border border-warning/30' : 'bg-muted/30'
                }`}
              >
                <div className="flex-shrink-0 w-6 flex justify-center">
                  {getRankIcon(index)}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-semibold truncate text-foreground">
                    {t(score.category) || score.category}
                  </p>
                  <p className="text-xs text-muted-foreground flex items-center gap-1">
                    <Clock className="h-3 w-3" />
                    {formatTime(score.timeUsed)} • {formatDate(score.date)}
                  </p>
                </div>
                <div className="flex-shrink-0 text-right">
                  <p className={`font-bold text-lg ${
                    score.percentage >= 80 ? 'text-success' : 
                    score.percentage >= 50 ? 'text-warning' : 'text-destructive'
                  }`}>
                    {score.percentage}%
                  </p>
                  <p className="text-xs text-muted-foreground">
                    {score.score}/{score.maxScore}
                  </p>
                </div>
              </div>
            ))}
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
};

export default CategoryLeaderboard;
