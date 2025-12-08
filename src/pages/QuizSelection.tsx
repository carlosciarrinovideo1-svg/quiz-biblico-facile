import React from 'react';
import { Link } from 'react-router-dom';
import { HelpCircle, BookOpen, Users, Scroll, Cross, Mail, FileText, Shuffle, Zap } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const QuizSelection: React.FC = () => {
  const { t } = useLanguage();

  const quizCategories = [
    {
      id: 'pentateuch',
      icon: BookOpen,
      questions: 25,
      color: 'from-primary/20 to-accent/10',
      descriptionKey: 'pentateuchDesc',
    },
    {
      id: 'minorProphets',
      icon: Users,
      questions: 25,
      color: 'from-accent/20 to-secondary',
      descriptionKey: 'minorProphetsDesc',
    },
    {
      id: 'oldTestament',
      icon: Scroll,
      questions: 25,
      color: 'from-secondary to-muted',
      descriptionKey: 'oldTestamentDesc',
    },
    {
      id: 'fourGospels',
      icon: Cross,
      questions: 25,
      color: 'from-muted to-accent/20',
      descriptionKey: 'fourGospelsDesc',
    },
    {
      id: 'paulineLetters',
      icon: Mail,
      questions: 25,
      color: 'from-accent/30 to-primary/20',
      descriptionKey: 'paulineLettersDesc',
    },
    {
      id: 'newTestament',
      icon: FileText,
      questions: 25,
      color: 'from-primary/10 to-secondary',
      descriptionKey: 'newTestamentDesc',
    },
  ];

  const specialQuizzes = [
    {
      id: 'fullQuiz',
      icon: Zap,
      questions: 100,
      color: 'from-warning/20 to-primary/20',
      descriptionKey: 'fullQuizDesc',
    },
    {
      id: 'randomQuiz',
      icon: Shuffle,
      questions: 100,
      color: 'from-info/20 to-accent/20',
      descriptionKey: 'randomQuizDesc',
    },
  ];

  return (
    <div className="animate-fade-in space-y-8">
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
                <CardHeader className={`bg-gradient-to-br ${quiz.color}`}>
                  <div className="flex items-start justify-between">
                    <div className="rounded-xl bg-background/80 p-3 shadow-sm">
                      <quiz.icon className="h-6 w-6 text-primary" />
                    </div>
                    <Badge variant="secondary" className="bg-background/80">
                      {quiz.questions} {t('questionsCount')}
                    </Badge>
                  </div>
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
          {specialQuizzes.map((quiz, index) => (
            <Link
              key={quiz.id}
              to={`/quiz/${quiz.id}`}
              className="group"
            >
              <Card className="h-full overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                <CardHeader className={`bg-gradient-to-br ${quiz.color}`}>
                  <div className="flex items-start justify-between">
                    <div className="rounded-xl bg-background/80 p-3 shadow-sm">
                      <quiz.icon className="h-6 w-6 text-primary" />
                    </div>
                    <Badge variant="secondary" className="bg-background/80">
                      {quiz.questions} {t('questionsCount')}
                    </Badge>
                  </div>
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
  );
};

export default QuizSelection;
