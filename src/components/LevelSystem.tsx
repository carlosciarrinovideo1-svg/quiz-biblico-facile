import React, { useMemo } from 'react';
import { Star, TrendingUp, Award, Sparkles, Crown, Gem } from 'lucide-react';
import { useGame } from '@/contexts/GameContext';
import { useLanguage } from '@/contexts/LanguageContext';
import { Card, CardContent } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';

interface Level {
  level: number;
  name: string;
  nameKey: string;
  minPoints: number;
  maxPoints: number;
  icon: React.ReactNode;
  color: string;
  bgColor: string;
}

const LEVELS: Omit<Level, 'minPoints' | 'maxPoints'>[] = [
  { level: 1, name: 'Beginner', nameKey: 'levelBeginner', icon: <Star className="h-6 w-6" />, color: 'text-slate-500', bgColor: 'bg-slate-500/10' },
  { level: 2, name: 'Apprentice', nameKey: 'levelApprentice', icon: <Star className="h-6 w-6" />, color: 'text-green-500', bgColor: 'bg-green-500/10' },
  { level: 3, name: 'Student', nameKey: 'levelStudent', icon: <TrendingUp className="h-6 w-6" />, color: 'text-blue-500', bgColor: 'bg-blue-500/10' },
  { level: 4, name: 'Scholar', nameKey: 'levelScholar', icon: <TrendingUp className="h-6 w-6" />, color: 'text-indigo-500', bgColor: 'bg-indigo-500/10' },
  { level: 5, name: 'Expert', nameKey: 'levelExpert', icon: <Award className="h-6 w-6" />, color: 'text-purple-500', bgColor: 'bg-purple-500/10' },
  { level: 6, name: 'Master', nameKey: 'levelMaster', icon: <Award className="h-6 w-6" />, color: 'text-amber-500', bgColor: 'bg-amber-500/10' },
  { level: 7, name: 'Sage', nameKey: 'levelSage', icon: <Sparkles className="h-6 w-6" />, color: 'text-orange-500', bgColor: 'bg-orange-500/10' },
  { level: 8, name: 'Prophet', nameKey: 'levelProphet', icon: <Sparkles className="h-6 w-6" />, color: 'text-rose-500', bgColor: 'bg-rose-500/10' },
  { level: 9, name: 'Apostle', nameKey: 'levelApostle', icon: <Crown className="h-6 w-6" />, color: 'text-yellow-500', bgColor: 'bg-yellow-500/10' },
  { level: 10, name: 'Saint', nameKey: 'levelSaint', icon: <Gem className="h-6 w-6" />, color: 'text-cyan-400', bgColor: 'bg-gradient-to-r from-cyan-500/10 to-purple-500/10' },
];

// Points required for each level (cumulative)
const LEVEL_THRESHOLDS = [0, 50, 150, 300, 500, 800, 1200, 1800, 2500, 3500, Infinity];

const getLevelWithProgress = (totalPoints: number): { currentLevel: Level; progress: number; pointsInLevel: number; pointsNeeded: number } => {
  let levelIndex = 0;
  
  for (let i = 0; i < LEVEL_THRESHOLDS.length - 1; i++) {
    if (totalPoints >= LEVEL_THRESHOLDS[i] && totalPoints < LEVEL_THRESHOLDS[i + 1]) {
      levelIndex = i;
      break;
    }
    if (totalPoints >= LEVEL_THRESHOLDS[LEVEL_THRESHOLDS.length - 2]) {
      levelIndex = LEVEL_THRESHOLDS.length - 2;
    }
  }

  const levelData = LEVELS[Math.min(levelIndex, LEVELS.length - 1)];
  const minPoints = LEVEL_THRESHOLDS[levelIndex];
  const maxPoints = LEVEL_THRESHOLDS[levelIndex + 1] === Infinity 
    ? LEVEL_THRESHOLDS[levelIndex] + 1000 
    : LEVEL_THRESHOLDS[levelIndex + 1];
  
  const pointsInLevel = totalPoints - minPoints;
  const pointsNeeded = maxPoints - minPoints;
  const progress = Math.min((pointsInLevel / pointsNeeded) * 100, 100);

  return {
    currentLevel: { ...levelData, minPoints, maxPoints },
    progress,
    pointsInLevel,
    pointsNeeded,
  };
};

const LevelSystem: React.FC = () => {
  const { state } = useGame();
  const { t } = useLanguage();

  const totalPoints = useMemo(() => {
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

    const startOfDay = getStartOfDay();
    const startOfWeek = getStartOfWeek();
    const today = new Date().toISOString().split('T')[0];

    // Calculate points from goals
    let points = 0;

    // Daily goals points
    const todayQuizzes = state.quizResults.filter(r => 
      new Date(r.date) >= startOfDay
    ).length + state.challengeScores.filter(s => 
      new Date(s.date) >= startOfDay
    ).length;
    if (todayQuizzes >= 3) points += 10;

    const hasPlayedToday = state.dailyStreak.lastActivityDate === today;
    if (hasPlayedToday) points += 5;

    const todayCorrect = state.quizResults.filter(r => 
      new Date(r.date) >= startOfDay
    ).reduce((sum, r) => sum + r.score, 0);
    if (todayCorrect >= 20) points += 15;

    const todayPerfect = state.quizResults.filter(r => 
      new Date(r.date) >= startOfDay && r.percentage === 100
    ).length;
    if (todayPerfect >= 1) points += 20;

    // Weekly goals points
    const weekQuizzes = state.quizResults.filter(r => 
      new Date(r.date) >= startOfWeek
    ).length + state.challengeScores.filter(s => 
      new Date(s.date) >= startOfWeek
    ).length;
    if (weekQuizzes >= 15) points += 50;

    const weekCorrect = state.quizResults.filter(r => 
      new Date(r.date) >= startOfWeek
    ).reduce((sum, r) => sum + r.score, 0);
    if (weekCorrect >= 100) points += 75;

    const weekPerfect = state.quizResults.filter(r => 
      new Date(r.date) >= startOfWeek && r.percentage === 100
    ).length;
    if (weekPerfect >= 5) points += 100;

    if (state.dailyStreak.currentStreak >= 7) points += 150;

    // Historical points (based on total activity)
    points += state.totalQuizzesCompleted * 5;
    points += state.quizResults.filter(r => r.percentage === 100).length * 10;
    points += Math.floor(state.dailyStreak.longestStreak / 7) * 25;
    points += state.badges.length * 15;

    return points;
  }, [state]);

  const { currentLevel, progress, pointsInLevel, pointsNeeded } = useMemo(
    () => getLevelWithProgress(totalPoints),
    [totalPoints]
  );

  const nextLevel = LEVELS[Math.min(currentLevel.level, LEVELS.length - 1)];
  const isMaxLevel = currentLevel.level >= LEVELS.length;

  return (
    <Card className="glass-card overflow-hidden">
      <div className={`absolute inset-0 ${currentLevel.bgColor} opacity-50`} />
      <CardContent className="relative p-6">
        <div className="flex items-center gap-4">
          {/* Level Icon */}
          <div className={`rounded-full p-4 ${currentLevel.bgColor} ${currentLevel.color}`}>
            {currentLevel.icon}
          </div>

          {/* Level Info */}
          <div className="flex-1 min-w-0">
            <div className="flex items-center justify-between gap-2 mb-1">
              <div>
                <span className="text-sm text-muted-foreground">{t('level')} {currentLevel.level}</span>
                <h3 className={`font-bold text-xl ${currentLevel.color}`}>
                  {t(currentLevel.nameKey)}
                </h3>
              </div>
              <div className="text-right">
                <span className="text-2xl font-bold text-foreground">{totalPoints}</span>
                <p className="text-xs text-muted-foreground">{t('totalPoints')}</p>
              </div>
            </div>

            {/* Progress Bar */}
            <div className="space-y-2">
              <Progress value={progress} className="h-3" />
              <div className="flex items-center justify-between text-xs">
                {isMaxLevel ? (
                  <span className={`${currentLevel.color} font-medium`}>
                    {t('maxLevelReached')}
                  </span>
                ) : (
                  <>
                    <span className="text-muted-foreground">
                      {pointsInLevel} / {pointsNeeded} {t('points')}
                    </span>
                    <span className="text-muted-foreground">
                      {t('nextLevel')}: <span className={nextLevel.color}>{t(nextLevel.nameKey)}</span>
                    </span>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Level Benefits Preview */}
        <div className="mt-4 pt-4 border-t border-border/50">
          <p className="text-xs text-muted-foreground mb-2">{t('allLevels')}</p>
          <div className="flex gap-1 overflow-x-auto pb-1">
            {LEVELS.map((level, index) => (
              <div
                key={level.level}
                className={`flex-shrink-0 rounded-lg p-2 transition-all ${
                  index < currentLevel.level 
                    ? `${level.bgColor} ${level.color}` 
                    : index === currentLevel.level - 1
                    ? `${level.bgColor} ${level.color} ring-2 ring-primary`
                    : 'bg-muted/30 text-muted-foreground/50'
                }`}
                title={t(level.nameKey)}
              >
                {level.icon}
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default LevelSystem;