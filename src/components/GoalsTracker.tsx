import React, { useMemo } from 'react';
import { Target, CheckCircle2, Circle, Trophy, Flame, BookOpen, Clock, Star } from 'lucide-react';
import { useGame } from '@/contexts/GameContext';
import { useLanguage } from '@/contexts/LanguageContext';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import LevelSystem from '@/components/LevelSystem';

interface Goal {
  id: string;
  titleKey: string;
  descriptionKey: string;
  icon: React.ReactNode;
  current: number;
  target: number;
  type: 'daily' | 'weekly';
  rewardPoints: number;
}

const GoalsTracker: React.FC = () => {
  const { state } = useGame();
  const { t } = useLanguage();

  const getStartOfDay = () => {
    const now = new Date();
    now.setHours(0, 0, 0, 0);
    return now;
  };

  const getStartOfWeek = () => {
    const now = new Date();
    const dayOfWeek = now.getDay();
    const diff = now.getDate() - dayOfWeek + (dayOfWeek === 0 ? -6 : 1);
    const monday = new Date(now.setDate(diff));
    monday.setHours(0, 0, 0, 0);
    return monday;
  };

  const goals = useMemo((): Goal[] => {
    const startOfDay = getStartOfDay();
    const startOfWeek = getStartOfWeek();

    // Count today's quizzes
    const todayQuizzes = state.quizResults.filter(r => 
      new Date(r.date) >= startOfDay
    ).length + state.challengeScores.filter(s => 
      new Date(s.date) >= startOfDay
    ).length;

    // Count this week's quizzes
    const weekQuizzes = state.quizResults.filter(r => 
      new Date(r.date) >= startOfWeek
    ).length + state.challengeScores.filter(s => 
      new Date(s.date) >= startOfWeek
    ).length;

    // Count today's perfect scores
    const todayPerfect = state.quizResults.filter(r => 
      new Date(r.date) >= startOfDay && r.percentage === 100
    ).length;

    // Count week's perfect scores
    const weekPerfect = state.quizResults.filter(r => 
      new Date(r.date) >= startOfWeek && r.percentage === 100
    ).length;

    // Count today's correct answers
    const todayCorrect = state.quizResults.filter(r => 
      new Date(r.date) >= startOfDay
    ).reduce((sum, r) => sum + r.score, 0);

    // Count week's correct answers
    const weekCorrect = state.quizResults.filter(r => 
      new Date(r.date) >= startOfWeek
    ).reduce((sum, r) => sum + r.score, 0);

    // Current streak check
    const today = new Date().toISOString().split('T')[0];
    const hasPlayedToday = state.dailyStreak.lastActivityDate === today;

    return [
      // Daily Goals
      {
        id: 'daily-quiz',
        titleKey: 'dailyQuizGoal',
        descriptionKey: 'dailyQuizGoalDesc',
        icon: <Target className="h-5 w-5 text-primary" />,
        current: todayQuizzes,
        target: 3,
        type: 'daily',
        rewardPoints: 10,
      },
      {
        id: 'daily-streak',
        titleKey: 'dailyStreakGoal',
        descriptionKey: 'dailyStreakGoalDesc',
        icon: <Flame className="h-5 w-5 text-orange-500" />,
        current: hasPlayedToday ? 1 : 0,
        target: 1,
        type: 'daily',
        rewardPoints: 5,
      },
      {
        id: 'daily-correct',
        titleKey: 'dailyCorrectGoal',
        descriptionKey: 'dailyCorrectGoalDesc',
        icon: <CheckCircle2 className="h-5 w-5 text-success" />,
        current: Math.min(todayCorrect, 20),
        target: 20,
        type: 'daily',
        rewardPoints: 15,
      },
      {
        id: 'daily-perfect',
        titleKey: 'dailyPerfectGoal',
        descriptionKey: 'dailyPerfectGoalDesc',
        icon: <Star className="h-5 w-5 text-yellow-500" />,
        current: todayPerfect,
        target: 1,
        type: 'daily',
        rewardPoints: 20,
      },
      // Weekly Goals
      {
        id: 'weekly-quiz',
        titleKey: 'weeklyQuizGoal',
        descriptionKey: 'weeklyQuizGoalDesc',
        icon: <BookOpen className="h-5 w-5 text-blue-500" />,
        current: weekQuizzes,
        target: 15,
        type: 'weekly',
        rewardPoints: 50,
      },
      {
        id: 'weekly-correct',
        titleKey: 'weeklyCorrectGoal',
        descriptionKey: 'weeklyCorrectGoalDesc',
        icon: <Trophy className="h-5 w-5 text-amber-500" />,
        current: Math.min(weekCorrect, 100),
        target: 100,
        type: 'weekly',
        rewardPoints: 75,
      },
      {
        id: 'weekly-perfect',
        titleKey: 'weeklyPerfectGoal',
        descriptionKey: 'weeklyPerfectGoalDesc',
        icon: <Star className="h-5 w-5 text-purple-500" />,
        current: weekPerfect,
        target: 5,
        type: 'weekly',
        rewardPoints: 100,
      },
      {
        id: 'weekly-streak',
        titleKey: 'weeklyStreakGoal',
        descriptionKey: 'weeklyStreakGoalDesc',
        icon: <Clock className="h-5 w-5 text-teal-500" />,
        current: Math.min(state.dailyStreak.currentStreak, 7),
        target: 7,
        type: 'weekly',
        rewardPoints: 150,
      },
    ];
  }, [state.quizResults, state.challengeScores, state.dailyStreak]);

  const dailyGoals = goals.filter(g => g.type === 'daily');
  const weeklyGoals = goals.filter(g => g.type === 'weekly');

  const dailyProgress = useMemo(() => {
    const completed = dailyGoals.filter(g => g.current >= g.target).length;
    return (completed / dailyGoals.length) * 100;
  }, [dailyGoals]);

  const weeklyProgress = useMemo(() => {
    const completed = weeklyGoals.filter(g => g.current >= g.target).length;
    return (completed / weeklyGoals.length) * 100;
  }, [weeklyGoals]);

  const totalPointsEarned = useMemo(() => {
    return goals
      .filter(g => g.current >= g.target)
      .reduce((sum, g) => sum + g.rewardPoints, 0);
  }, [goals]);

  const totalPointsPossible = useMemo(() => {
    return goals.reduce((sum, g) => sum + g.rewardPoints, 0);
  }, [goals]);

  const renderGoalCard = (goal: Goal) => {
    const isComplete = goal.current >= goal.target;
    const progress = Math.min((goal.current / goal.target) * 100, 100);

    return (
      <div 
        key={goal.id}
        className={`rounded-lg border p-4 transition-all ${
          isComplete 
            ? 'border-success/50 bg-success/10' 
            : 'border-border/50 bg-card/50'
        }`}
      >
        <div className="flex items-start gap-3">
          <div className={`rounded-lg p-2 ${isComplete ? 'bg-success/20' : 'bg-muted'}`}>
            {goal.icon}
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex items-center justify-between gap-2">
              <h4 className="font-medium text-sm truncate">{t(goal.titleKey)}</h4>
              {isComplete ? (
                <CheckCircle2 className="h-5 w-5 text-success flex-shrink-0" />
              ) : (
                <Circle className="h-5 w-5 text-muted-foreground flex-shrink-0" />
              )}
            </div>
            <p className="text-xs text-muted-foreground mt-1">
              {t(goal.descriptionKey)}
            </p>
            <div className="mt-3 space-y-2">
              <Progress value={progress} className="h-2" />
              <div className="flex items-center justify-between text-xs">
                <span className={isComplete ? 'text-success font-medium' : 'text-muted-foreground'}>
                  {goal.current} / {goal.target}
                </span>
                <span className="text-primary font-medium">
                  +{goal.rewardPoints} {t('points')}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="space-y-6">
      {/* Level System */}
      <LevelSystem />

      {/* Summary Cards */}
      <div className="grid gap-4 sm:grid-cols-3">
        <Card className="glass-card">
          <CardContent className="flex flex-col items-center p-6 text-center">
            <Target className="mb-2 h-8 w-8 text-primary" />
            <span className="text-3xl font-bold text-foreground">
              {goals.filter(g => g.current >= g.target).length}/{goals.length}
            </span>
            <span className="text-sm text-muted-foreground">{t('goalsCompleted')}</span>
          </CardContent>
        </Card>
        <Card className="glass-card">
          <CardContent className="flex flex-col items-center p-6 text-center">
            <Trophy className="mb-2 h-8 w-8 text-amber-500" />
            <span className="text-3xl font-bold text-foreground">
              {totalPointsEarned}
            </span>
            <span className="text-sm text-muted-foreground">{t('pointsEarned')}</span>
          </CardContent>
        </Card>
        <Card className="glass-card">
          <CardContent className="flex flex-col items-center p-6 text-center">
            <Flame className="mb-2 h-8 w-8 text-orange-500" />
            <span className="text-3xl font-bold text-foreground">
              {state.dailyStreak.currentStreak}
            </span>
            <span className="text-sm text-muted-foreground">{t('currentStreak')}</span>
          </CardContent>
        </Card>
      </div>

      {/* Daily Goals */}
      <Card className="glass-card">
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle className="flex items-center gap-2 font-serif">
              <Flame className="h-5 w-5 text-orange-500" />
              {t('dailyGoals')}
            </CardTitle>
            <span className="text-sm font-medium text-muted-foreground">
              {Math.round(dailyProgress)}% {t('complete')}
            </span>
          </div>
          <Progress value={dailyProgress} className="h-2 mt-2" />
        </CardHeader>
        <CardContent className="grid gap-3 sm:grid-cols-2">
          {dailyGoals.map(renderGoalCard)}
        </CardContent>
      </Card>

      {/* Weekly Goals */}
      <Card className="glass-card">
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle className="flex items-center gap-2 font-serif">
              <Trophy className="h-5 w-5 text-amber-500" />
              {t('weeklyGoals')}
            </CardTitle>
            <span className="text-sm font-medium text-muted-foreground">
              {Math.round(weeklyProgress)}% {t('complete')}
            </span>
          </div>
          <Progress value={weeklyProgress} className="h-2 mt-2" />
        </CardHeader>
        <CardContent className="grid gap-3 sm:grid-cols-2">
          {weeklyGoals.map(renderGoalCard)}
        </CardContent>
      </Card>

      {/* Potential Rewards Info */}
      <Card className="glass-card border-primary/20 bg-primary/5">
        <CardContent className="flex items-center justify-between p-4">
          <div className="flex items-center gap-3">
            <Star className="h-6 w-6 text-primary" />
            <div>
              <p className="font-medium">{t('potentialRewards')}</p>
              <p className="text-sm text-muted-foreground">{t('completeAllGoals')}</p>
            </div>
          </div>
          <span className="text-2xl font-bold text-primary">
            {totalPointsPossible} {t('points')}
          </span>
        </CardContent>
      </Card>
    </div>
  );
};

export default GoalsTracker;
