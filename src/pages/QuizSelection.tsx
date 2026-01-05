import React from 'react';
import { Link } from 'react-router-dom';
import { HelpCircle, BookOpen, Users, Scroll, Cross, Mail, FileText, Shuffle, Zap, Flame, Globe, Star } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

// Import background images
import bgPentateuch from '@/assets/bg-pentateuch.jpg';
import bgProphets from '@/assets/bg-prophets.jpg';
import bgOldTestament from '@/assets/bg-oldtestament.jpg';
import bgGospels from '@/assets/bg-gospels.jpg';
import bgPauline from '@/assets/bg-pauline.jpg';
import bgNewTestament from '@/assets/bg-newtestament.jpg';
import bgApocalypse from '@/assets/bg-apocalypse.jpg';
import bgActs from '@/assets/bg-acts.jpg';
import bgCharacters from '@/assets/bg-characters.jpg';
import bgQuizDefault from '@/assets/bg-quiz-default.jpg';

const QuizSelection: React.FC = () => {
  const { t } = useLanguage();

  const quizCategories = [
    {
      id: 'pentateuch',
      icon: BookOpen,
      questions: 100,
      descriptionKey: 'pentateuchDesc',
      bgImage: bgPentateuch,
    },
    {
      id: 'minorProphets',
      icon: Users,
      questions: 100,
      descriptionKey: 'minorProphetsDesc',
      bgImage: bgProphets,
    },
    {
      id: 'oldTestament',
      icon: Scroll,
      questions: 100,
      descriptionKey: 'oldTestamentDesc',
      bgImage: bgOldTestament,
    },
    {
      id: 'fourGospels',
      icon: Cross,
      questions: 100,
      descriptionKey: 'fourGospelsDesc',
      bgImage: bgGospels,
    },
    {
      id: 'paulineLetters',
      icon: Mail,
      questions: 100,
      descriptionKey: 'paulineLettersDesc',
      bgImage: bgPauline,
    },
    {
      id: 'newTestament',
      icon: FileText,
      questions: 100,
      descriptionKey: 'newTestamentDesc',
      bgImage: bgNewTestament,
    },
    {
      id: 'apocalypse',
      icon: Flame,
      questions: 100,
      descriptionKey: 'apocalypseDesc',
      bgImage: bgApocalypse,
    },
    {
      id: 'actsApostles',
      icon: Globe,
      questions: 100,
      descriptionKey: 'actsApostlesDesc',
      bgImage: bgActs,
    },
    {
      id: 'biblicalCharacters',
      icon: Star,
      questions: 100,
      descriptionKey: 'biblicalCharactersDesc',
      bgImage: bgCharacters,
    },
  ];

  const specialQuizzes = [
    {
      id: 'fullQuiz',
      icon: Zap,
      questions: 100,
      descriptionKey: 'fullQuizDesc',
      bgImage: bgQuizDefault,
    },
    {
      id: 'randomQuiz',
      icon: Shuffle,
      questions: 100,
      descriptionKey: 'randomQuizDesc',
      bgImage: bgQuizDefault,
    },
  ];

  return (
    <div 
      className="animate-fade-in min-h-screen -mx-4 -mt-8 px-4 py-8"
      style={{
        backgroundImage: `linear-gradient(to bottom, hsl(var(--background) / 0.85), hsl(var(--background) / 0.95)), url(${bgQuizDefault})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
      }}
    >
      <div className="space-y-8">
        <div className="text-center">
          <h1 className="mb-4 font-serif text-3xl font-bold text-foreground md:text-4xl">
            {t('selectQuiz')}
          </h1>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            {t('quizDescription')}
          </p>
        </div>

        {/* Category Quizzes */}
        <section>
          <h2 className="mb-4 font-serif text-xl font-semibold text-foreground">
            {t('thematicQuizzes')}
          </h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {quizCategories.map((quiz, index) => (
              <Link
                key={quiz.id}
                to={`/quiz/${quiz.id}`}
                className="group"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <Card className="h-full overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                  <CardHeader 
                    className="relative h-32 flex items-end"
                    style={{
                      backgroundImage: `linear-gradient(to top, hsl(var(--background)), transparent), url(${quiz.bgImage})`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                    }}
                  >
                    <div className="absolute top-3 left-3 rounded-xl bg-background/90 p-3 shadow-sm backdrop-blur-sm">
                      <quiz.icon className="h-6 w-6 text-primary" />
                    </div>
                    <Badge variant="secondary" className="absolute top-3 right-3 bg-background/90 backdrop-blur-sm">
                      {quiz.questions} {t('questionsCount')}
                    </Badge>
                  </CardHeader>
                  <CardContent className="pt-4">
                    <CardTitle className="mb-2 font-serif text-lg">
                      {t(quiz.id)}
                    </CardTitle>
                    <CardDescription>
                      {t(quiz.descriptionKey)}
                    </CardDescription>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </section>

        {/* Special Quizzes */}
        <section>
          <h2 className="mb-4 font-serif text-xl font-semibold text-foreground">
            {t('challengeQuizzes')}
          </h2>
          <div className="grid gap-4 sm:grid-cols-2">
            {specialQuizzes.map((quiz) => (
              <Link
                key={quiz.id}
                to={`/quiz/${quiz.id}`}
                className="group"
              >
                <Card className="h-full overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                  <CardHeader 
                    className="relative h-32 flex items-end"
                    style={{
                      backgroundImage: `linear-gradient(to top, hsl(var(--background)), transparent), url(${quiz.bgImage})`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                    }}
                  >
                    <div className="absolute top-3 left-3 rounded-xl bg-background/90 p-3 shadow-sm backdrop-blur-sm">
                      <quiz.icon className="h-6 w-6 text-primary" />
                    </div>
                    <Badge variant="secondary" className="absolute top-3 right-3 bg-background/90 backdrop-blur-sm">
                      {quiz.questions} {t('questionsCount')}
                    </Badge>
                  </CardHeader>
                  <CardContent className="pt-4">
                    <CardTitle className="mb-2 font-serif text-lg">
                      {t(quiz.id)}
                    </CardTitle>
                    <CardDescription>
                      {t(quiz.descriptionKey)}
                    </CardDescription>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </section>

        {/* Scoring Info */}
        <Card className="glass-card">
          <CardContent className="p-6">
            <div className="flex flex-wrap items-center justify-center gap-6 text-center text-sm">
              <div className="flex items-center gap-2">
                <div className="h-3 w-3 rounded-full bg-success" />
                <span>{t('pointsCorrect')}</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="h-3 w-3 rounded-full bg-destructive" />
                <span>{t('pointsIncorrect')}</span>
              </div>
              <div className="flex items-center gap-2">
                <HelpCircle className="h-4 w-4 text-muted-foreground" />
                <span className="text-muted-foreground">{t('difficultyExplanation')}</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default QuizSelection;