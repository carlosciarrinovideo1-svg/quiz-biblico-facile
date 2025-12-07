import React from 'react';
import { Award, Trophy, Star, Book, Target, Gem } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useGame } from '@/contexts/GameContext';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const allBadgeDefinitions = [
  { id: 'first-quiz', name: 'firstQuiz', description: 'Complete your first quiz', icon: Target, tier: 'bronze' as const },
  { id: 'perfect-score', name: 'perfectScore', description: 'Get 100% on any quiz', icon: Star, tier: 'gold' as const },
  { id: 'bible-explorer', name: 'bibleExplorer', description: 'Read 10 chapters', icon: Book, tier: 'bronze' as const },
  { id: 'quiz-master', name: 'quizMaster', description: 'Complete 10 quizzes', icon: Trophy, tier: 'silver' as const },
  { id: 'dedicated', name: 'dedicated', description: 'Complete 25 quizzes', icon: Gem, tier: 'gold' as const },
];

const Badges: React.FC = () => {
  const { t } = useLanguage();
  const { state } = useGame();

  const getTierClass = (tier: 'bronze' | 'silver' | 'gold') => {
    switch (tier) {
      case 'bronze': return 'badge-bronze';
      case 'silver': return 'badge-silver';
      case 'gold': return 'badge-gold';
    }
  };

  const getTierGradient = (tier: 'bronze' | 'silver' | 'gold') => {
    switch (tier) {
      case 'bronze': return 'from-badge-bronze/20 to-badge-bronze/5';
      case 'silver': return 'from-badge-silver/20 to-badge-silver/5';
      case 'gold': return 'from-badge-gold/20 to-badge-gold/5';
    }
  };

  const earnedBadgeIds = state.badges.map(b => b.id);

  return (
    <div className="animate-fade-in space-y-8">
      <div className="text-center">
        <h1 className="mb-4 font-serif text-3xl font-bold text-foreground md:text-4xl">
          {t('badges')}
        </h1>
        <p className="mx-auto max-w-2xl text-muted-foreground">
          Earn badges by completing quizzes and reading Scripture. Track your progress!
        </p>
      </div>

      {/* Stats */}
      <div className="grid gap-4 sm:grid-cols-3">
        <Card className="glass-card">
          <CardContent className="flex flex-col items-center p-6 text-center">
            <Award className="mb-2 h-8 w-8 text-primary" />
            <span className="text-3xl font-bold text-foreground">
              {state.badges.length}
            </span>
            <span className="text-sm text-muted-foreground">
              / {allBadgeDefinitions.length} Badges
            </span>
          </CardContent>
        </Card>
        <Card className="glass-card">
          <CardContent className="flex flex-col items-center p-6 text-center">
            <Trophy className="mb-2 h-8 w-8 text-warning" />
            <span className="text-3xl font-bold text-foreground">
              {state.totalQuizzesCompleted}
            </span>
            <span className="text-sm text-muted-foreground">Quizzes Completed</span>
          </CardContent>
        </Card>
        <Card className="glass-card">
          <CardContent className="flex flex-col items-center p-6 text-center">
            <Book className="mb-2 h-8 w-8 text-info" />
            <span className="text-3xl font-bold text-foreground">
              {state.chaptersRead}
            </span>
            <span className="text-sm text-muted-foreground">Chapters Read</span>
          </CardContent>
        </Card>
      </div>

      {/* All Badges */}
      <section>
        <h2 className="mb-4 font-serif text-xl font-semibold text-foreground">
          All Badges
        </h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {allBadgeDefinitions.map((badge) => {
            const isEarned = earnedBadgeIds.includes(badge.id);
            const Icon = badge.icon;

            return (
              <Card 
                key={badge.id}
                className={`overflow-hidden transition-all duration-300 ${
                  isEarned 
                    ? 'ring-2 ring-primary/50' 
                    : 'opacity-60 grayscale'
                }`}
              >
                <CardHeader className={`bg-gradient-to-br ${getTierGradient(badge.tier)}`}>
                  <div className="flex items-center gap-4">
                    <div className={`flex h-14 w-14 items-center justify-center rounded-full ${getTierClass(badge.tier)}`}>
                      <Icon className="h-7 w-7" />
                    </div>
                    <div>
                      <CardTitle className="font-serif text-lg">
                        {t(badge.name)}
                      </CardTitle>
                      <CardDescription>
                        {badge.tier.charAt(0).toUpperCase() + badge.tier.slice(1)} Badge
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="pt-4">
                  <p className="text-sm text-muted-foreground">
                    {badge.description}
                  </p>
                  {isEarned && (
                    <p className="mt-2 text-xs font-medium text-success">
                      ✓ Earned
                    </p>
                  )}
                </CardContent>
              </Card>
            );
          })}
        </div>
      </section>

      {/* Recent Quiz Results */}
      {state.quizResults.length > 0 && (
        <section>
          <h2 className="mb-4 font-serif text-xl font-semibold text-foreground">
            Recent Quiz Results
          </h2>
          <Card className="glass-card">
            <CardContent className="p-0">
              <div className="divide-y divide-border">
                {state.quizResults.slice(-5).reverse().map((result, index) => (
                  <div 
                    key={index}
                    className="flex items-center justify-between p-4"
                  >
                    <div>
                      <p className="font-medium capitalize">
                        {result.quizType.replace(/([A-Z])/g, ' $1').trim()}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {new Date(result.date).toLocaleDateString()}
                      </p>
                    </div>
                    <div className="text-right">
                      <p className={`text-lg font-bold ${
                        result.percentage >= 80 ? 'text-success' :
                        result.percentage >= 50 ? 'text-warning' : 'text-destructive'
                      }`}>
                        {result.percentage}%
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {result.score} / {result.maxScore}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </section>
      )}

      {state.badges.length === 0 && (
        <Card className="glass-card">
          <CardContent className="py-12 text-center">
            <Award className="mx-auto mb-4 h-16 w-16 text-muted-foreground opacity-50" />
            <p className="text-lg text-muted-foreground">
              {t('noBadges')}
            </p>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default Badges;
