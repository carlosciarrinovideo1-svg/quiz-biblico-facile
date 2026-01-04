import React from 'react';
import { Trophy, Medal, Award, Clock } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useLanguage } from '@/contexts/LanguageContext';
import { useGame, ChallengeScore } from '@/contexts/GameContext';

const Leaderboard: React.FC = () => {
  const { t } = useLanguage();
  const { state } = useGame();

  const sortedScores = [...state.challengeScores]
    .sort((a, b) => {
      if (b.percentage !== a.percentage) return b.percentage - a.percentage;
      return a.timeUsed - b.timeUsed; // Lower time is better
    })
    .slice(0, 10);

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

  if (sortedScores.length === 0) {
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
      <CardContent className="space-y-2">
        {sortedScores.map((score, index) => (
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
      </CardContent>
    </Card>
  );
};

export default Leaderboard;
