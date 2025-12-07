import React from 'react';
import { Link } from 'react-router-dom';
import { Book, HelpCircle, Award, ExternalLink, Sparkles } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useGame } from '@/contexts/GameContext';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const Index: React.FC = () => {
  const { t } = useLanguage();
  const { state } = useGame();

  const features = [
    {
      icon: Book,
      title: t('bible'),
      description: 'Read and explore Scripture with multiple versions',
      link: '/bible',
      color: 'from-primary/20 to-accent/20',
    },
    {
      icon: HelpCircle,
      title: t('quiz'),
      description: 'Test your knowledge with adaptive quizzes',
      link: '/quiz',
      color: 'from-accent/20 to-secondary',
    },
    {
      icon: Award,
      title: t('badges'),
      description: 'Earn badges and track your progress',
      link: '/badges',
      color: 'from-secondary to-muted',
    },
  ];

  return (
    <div className="animate-fade-in space-y-12">
      {/* Hero Section */}
      <section className="relative overflow-hidden rounded-3xl gradient-hero p-8 md:p-12 lg:p-16">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/10" />
        <div className="relative z-10 mx-auto max-w-3xl text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm text-primary">
            <Sparkles className="h-4 w-4" />
            <span>Welcome to your spiritual journey</span>
          </div>
          
          <h1 className="mb-6 font-serif text-4xl font-bold leading-tight text-foreground md:text-5xl lg:text-6xl">
            {t('welcome')}
          </h1>
          
          <p className="mb-8 text-lg text-muted-foreground md:text-xl">
            {t('subtitle')}
          </p>
          
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button asChild variant="hero" size="xl">
              <Link to="/bible">
                <Book className="h-5 w-5" />
                {t('startReading')}
              </Link>
            </Button>
            <Button asChild variant="pastel" size="xl">
              <Link to="/quiz">
                <HelpCircle className="h-5 w-5" />
                {t('takeQuiz')}
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      {(state.totalQuizzesCompleted > 0 || state.chaptersRead > 0) && (
        <section className="grid gap-4 sm:grid-cols-3">
          <Card className="glass-card">
            <CardContent className="flex flex-col items-center p-6 text-center">
              <span className="text-3xl font-bold text-primary">{state.totalQuizzesCompleted}</span>
              <span className="text-sm text-muted-foreground">Quizzes Completed</span>
            </CardContent>
          </Card>
          <Card className="glass-card">
            <CardContent className="flex flex-col items-center p-6 text-center">
              <span className="text-3xl font-bold text-primary">{state.badges.length}</span>
              <span className="text-sm text-muted-foreground">Badges Earned</span>
            </CardContent>
          </Card>
          <Card className="glass-card">
            <CardContent className="flex flex-col items-center p-6 text-center">
              <span className="text-3xl font-bold text-primary">{state.favoriteVerses.length}</span>
              <span className="text-sm text-muted-foreground">Favorite Verses</span>
            </CardContent>
          </Card>
        </section>
      )}

      {/* Features Grid */}
      <section className="grid gap-6 md:grid-cols-3">
        {features.map((feature, index) => (
          <Link
            key={feature.title}
            to={feature.link}
            className="group"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <Card className="h-full overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
              <CardContent className={`p-6 bg-gradient-to-br ${feature.color}`}>
                <div className="mb-4 inline-flex rounded-xl bg-background/80 p-3 shadow-sm">
                  <feature.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="mb-2 font-serif text-xl font-semibold text-foreground">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          </Link>
        ))}
      </section>

      {/* External Link */}
      <section className="text-center">
        <Card className="inline-block glass-card">
          <CardContent className="p-6">
            <p className="mb-4 text-muted-foreground">
              Want to read the full Bible online?
            </p>
            <Button asChild variant="outline">
              <a 
                href="https://www.bible.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2"
              >
                <ExternalLink className="h-4 w-4" />
                {t('readOnline')}
              </a>
            </Button>
          </CardContent>
        </Card>
      </section>
    </div>
  );
};

export default Index;
