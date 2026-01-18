import React from 'react';
import { Award, Trophy, Star, Book, Target, Gem, Zap, Clock, Flame, Sparkles, Crown, Settings, BarChart3 } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useGame } from '@/contexts/GameContext';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Progress } from '@/components/ui/progress';
import NotificationSettings from '@/components/NotificationSettings';
import CategoryAccuracyStats from '@/components/CategoryAccuracyStats';
import GoalsTracker from '@/components/GoalsTracker';

import bgCharacters from '@/assets/bg-characters.jpg';

const allBadgeDefinitions = [
  // General badges
  { id: 'first-quiz', nameKey: 'firstQuiz', descriptionKey: 'firstQuizDesc', icon: Target, tier: 'bronze' as const, category: 'general' as const },
  { id: 'perfect-score', nameKey: 'perfectScore', descriptionKey: 'perfectScoreDesc', icon: Star, tier: 'gold' as const, category: 'general' as const },
  { id: 'bible-explorer', nameKey: 'bibleExplorer', descriptionKey: 'bibleExplorerDesc', icon: Book, tier: 'bronze' as const, category: 'general' as const },
  { id: 'quiz-master', nameKey: 'quizMaster', descriptionKey: 'quizMasterDesc', icon: Trophy, tier: 'silver' as const, category: 'general' as const },
  { id: 'dedicated', nameKey: 'dedicated', descriptionKey: 'dedicatedDesc', icon: Gem, tier: 'gold' as const, category: 'general' as const },
  
  // Speed badges
  { id: 'speed-demon', nameKey: 'speedDemon', descriptionKey: 'speedDemonDesc', icon: Zap, tier: 'silver' as const, category: 'speed' as const },
  { id: 'lightning-fast', nameKey: 'lightningFast', descriptionKey: 'lightningFastDesc', icon: Zap, tier: 'gold' as const, category: 'speed' as const },
  { id: 'time-master', nameKey: 'timeMaster', descriptionKey: 'timeMasterDesc', icon: Clock, tier: 'platinum' as const, category: 'speed' as const },
  
  // Streak badges
  { id: 'streak-3', nameKey: 'streak3', descriptionKey: 'streak3Desc', icon: Flame, tier: 'bronze' as const, category: 'streak' as const },
  { id: 'streak-7', nameKey: 'streak7', descriptionKey: 'streak7Desc', icon: Flame, tier: 'silver' as const, category: 'streak' as const },
  { id: 'streak-30', nameKey: 'streak30', descriptionKey: 'streak30Desc', icon: Flame, tier: 'gold' as const, category: 'streak' as const },
  { id: 'streak-100', nameKey: 'streak100', descriptionKey: 'streak100Desc', icon: Flame, tier: 'diamond' as const, category: 'streak' as const },
  
  // Mastery badges
  { id: 'perfect-5', nameKey: 'perfect5', descriptionKey: 'perfect5Desc', icon: Sparkles, tier: 'silver' as const, category: 'mastery' as const },
  { id: 'perfect-10', nameKey: 'perfect10', descriptionKey: 'perfect10Desc', icon: Sparkles, tier: 'gold' as const, category: 'mastery' as const },
  { id: 'perfect-25', nameKey: 'perfect25', descriptionKey: 'perfect25Desc', icon: Crown, tier: 'platinum' as const, category: 'mastery' as const },
  { id: 'scripture-scholar', nameKey: 'scriptureScholar', descriptionKey: 'scriptureScholarDesc', icon: Crown, tier: 'diamond' as const, category: 'mastery' as const },
];

const Badges: React.FC = () => {
  const { t } = useLanguage();
  const { state } = useGame();

  const getTierClass = (tier: 'bronze' | 'silver' | 'gold' | 'platinum' | 'diamond') => {
    switch (tier) {
      case 'bronze': return 'bg-gradient-to-br from-amber-600 to-amber-800 text-white';
      case 'silver': return 'bg-gradient-to-br from-slate-300 to-slate-500 text-slate-900';
      case 'gold': return 'bg-gradient-to-br from-yellow-400 to-yellow-600 text-yellow-900';
      case 'platinum': return 'bg-gradient-to-br from-cyan-300 to-cyan-500 text-cyan-900';
      case 'diamond': return 'bg-gradient-to-br from-violet-400 to-violet-600 text-white';
    }
  };

  const getTierGradient = (tier: 'bronze' | 'silver' | 'gold' | 'platinum' | 'diamond') => {
    switch (tier) {
      case 'bronze': return 'from-amber-500/20 to-amber-500/5';
      case 'silver': return 'from-slate-400/20 to-slate-400/5';
      case 'gold': return 'from-yellow-400/20 to-yellow-400/5';
      case 'platinum': return 'from-cyan-400/20 to-cyan-400/5';
      case 'diamond': return 'from-violet-400/20 to-violet-400/5';
    }
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'speed': return Zap;
      case 'streak': return Flame;
      case 'mastery': return Crown;
      default: return Award;
    }
  };

  const earnedBadgeIds = state.badges.map(b => b.id);
  const generalBadges = allBadgeDefinitions.filter(b => b.category === 'general');
  const speedBadges = allBadgeDefinitions.filter(b => b.category === 'speed');
  const streakBadges = allBadgeDefinitions.filter(b => b.category === 'streak');
  const masteryBadges = allBadgeDefinitions.filter(b => b.category === 'mastery');

  const renderBadgeCard = (badge: typeof allBadgeDefinitions[0]) => {
    const isEarned = earnedBadgeIds.includes(badge.id);
    const Icon = badge.icon;

    return (
      <Card 
        key={badge.id}
        className={`overflow-hidden transition-all duration-300 ${
          isEarned 
            ? 'ring-2 ring-primary/50 shadow-lg' 
            : 'opacity-60 grayscale'
        }`}
      >
        <CardHeader className={`bg-gradient-to-br ${getTierGradient(badge.tier)} py-4`}>
          <div className="flex items-center gap-3">
            <div className={`flex h-12 w-12 items-center justify-center rounded-full ${getTierClass(badge.tier)} shadow-md`}>
              <Icon className="h-6 w-6" />
            </div>
            <div className="flex-1">
              <CardTitle className="font-serif text-base">
                {t(badge.nameKey)}
              </CardTitle>
              <CardDescription className="text-xs">
                {t(badge.tier)} {t('badgeTier')}
              </CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="pt-3 pb-4">
          <p className="text-sm text-muted-foreground">
            {t(badge.descriptionKey)}
          </p>
          {isEarned && (
            <p className="mt-2 text-xs font-medium text-success">
              ✓ {t('earned')}
            </p>
          )}
        </CardContent>
      </Card>
    );
  };

  const renderBadgeSection = (badges: typeof allBadgeDefinitions, categoryKey: string) => {
    const earnedCount = badges.filter(b => earnedBadgeIds.includes(b.id)).length;
    const progress = (earnedCount / badges.length) * 100;
    const CategoryIcon = getCategoryIcon(badges[0]?.category || 'general');

    return (
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <CategoryIcon className="h-5 w-5 text-primary" />
            <h3 className="font-serif text-lg font-semibold">{t(categoryKey)}</h3>
          </div>
          <span className="text-sm text-muted-foreground">{earnedCount}/{badges.length}</span>
        </div>
        <Progress value={progress} className="h-2" />
        <div className="grid gap-4 sm:grid-cols-2">
          {badges.map(renderBadgeCard)}
        </div>
      </div>
    );
  };

  return (
    <div 
      className="animate-fade-in -mx-4 -mt-8 px-4 py-8 min-h-screen"
      style={{
        backgroundImage: `linear-gradient(to bottom, hsl(var(--background) / 0.85), hsl(var(--background) / 0.95)), url(${bgCharacters})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
      }}
    >
      <div className="space-y-8">
        <div className="text-center">
          <h1 className="mb-4 font-serif text-3xl font-bold text-foreground md:text-4xl">
            {t('badges')}
          </h1>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            {t('badgesDescription')}
          </p>
        </div>

        {/* Stats */}
        <div className="grid gap-4 sm:grid-cols-4">
          <Card className="glass-card">
            <CardContent className="flex flex-col items-center p-6 text-center">
              <Award className="mb-2 h-8 w-8 text-primary" />
              <span className="text-3xl font-bold text-foreground">
                {state.badges.length}
              </span>
              <span className="text-sm text-muted-foreground">
                / {allBadgeDefinitions.length} {t('badges')}
              </span>
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
          <Card className="glass-card">
            <CardContent className="flex flex-col items-center p-6 text-center">
              <Trophy className="mb-2 h-8 w-8 text-warning" />
              <span className="text-3xl font-bold text-foreground">
                {state.totalQuizzesCompleted}
              </span>
              <span className="text-sm text-muted-foreground">{t('quizzesCompleted')}</span>
            </CardContent>
          </Card>
          <Card className="glass-card">
            <CardContent className="flex flex-col items-center p-6 text-center">
              <Star className="mb-2 h-8 w-8 text-yellow-500" />
              <span className="text-3xl font-bold text-foreground">
                {state.quizResults.filter(r => r.percentage === 100).length}
              </span>
              <span className="text-sm text-muted-foreground">{t('perfectScores')}</span>
            </CardContent>
          </Card>
        </div>

        {/* Tabs for badge categories, stats and settings */}
        <Tabs defaultValue="goals" className="w-full">
          <TabsList className="grid w-full grid-cols-4 lg:grid-cols-8">
            <TabsTrigger value="goals" className="flex items-center gap-1">
              <Target className="h-4 w-4" />
              <span className="hidden sm:inline">{t('goals')}</span>
            </TabsTrigger>
            <TabsTrigger value="all">{t('allBadges')}</TabsTrigger>
            <TabsTrigger value="general">{t('generalBadges')}</TabsTrigger>
            <TabsTrigger value="speed">{t('speedBadges')}</TabsTrigger>
            <TabsTrigger value="streak">{t('streakBadges')}</TabsTrigger>
            <TabsTrigger value="mastery">{t('masteryBadges')}</TabsTrigger>
            <TabsTrigger value="stats" className="flex items-center gap-1">
              <BarChart3 className="h-4 w-4" />
              <span className="hidden sm:inline">{t('accuracyStats')}</span>
            </TabsTrigger>
            <TabsTrigger value="settings" className="flex items-center gap-1">
              <Settings className="h-4 w-4" />
              <span className="hidden sm:inline">{t('settings')}</span>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="goals" className="mt-6">
            <GoalsTracker />
          </TabsContent>

          <TabsContent value="all" className="mt-6 space-y-8">
            {renderBadgeSection(generalBadges, 'generalBadges')}
            {renderBadgeSection(speedBadges, 'speedBadges')}
            {renderBadgeSection(streakBadges, 'streakBadges')}
            {renderBadgeSection(masteryBadges, 'masteryBadges')}
          </TabsContent>

          <TabsContent value="general" className="mt-6">
            {renderBadgeSection(generalBadges, 'generalBadges')}
          </TabsContent>

          <TabsContent value="speed" className="mt-6">
            {renderBadgeSection(speedBadges, 'speedBadges')}
          </TabsContent>

          <TabsContent value="streak" className="mt-6">
            {renderBadgeSection(streakBadges, 'streakBadges')}
          </TabsContent>

          <TabsContent value="mastery" className="mt-6">
            {renderBadgeSection(masteryBadges, 'masteryBadges')}
          </TabsContent>

          <TabsContent value="stats" className="mt-6">
            <CategoryAccuracyStats />
          </TabsContent>

          <TabsContent value="settings" className="mt-6 space-y-6">
            <NotificationSettings />
          </TabsContent>
        </Tabs>

        {/* Recent Quiz Results */}
        {state.quizResults.length > 0 && (
          <section>
            <h2 className="mb-4 font-serif text-xl font-semibold text-foreground">
              {t('recentResults')}
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
                          {t(result.quizType) || result.quizType.replace(/([A-Z])/g, ' $1').trim()}
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
    </div>
  );
};

export default Badges;