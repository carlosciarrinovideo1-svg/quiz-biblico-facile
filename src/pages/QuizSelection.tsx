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
      questions: 20,
      color: 'from-primary/20 to-accent/10',
      description: 'Genesis, Exodus, Leviticus, Numbers, Deuteronomy',
    },
    {
      id: 'minorProphets',
      icon: Users,
      questions: 20,
      color: 'from-accent/20 to-secondary',
      description: 'Hosea, Joel, Amos, Obadiah, Jonah, Micah...',
    },
    {
      id: 'oldTestament',
      icon: Scroll,
      questions: 20,
      color: 'from-secondary to-muted',
      description: 'General knowledge of the Old Testament',
    },
    {
      id: 'fourGospels',
      icon: Cross,
      questions: 20,
      color: 'from-muted to-accent/20',
      description: 'Matthew, Mark, Luke, John',
    },
    {
      id: 'paulineLetters',
      icon: Mail,
      questions: 20,
      color: 'from-accent/30 to-primary/20',
      description: 'Romans, Corinthians, Galatians, Ephesians...',
    },
    {
      id: 'newTestament',
      icon: FileText,
      questions: 20,
      color: 'from-primary/10 to-secondary',
      description: 'General knowledge of the New Testament',
    },
  ];

  const specialQuizzes = [
    {
      id: 'fullQuiz',
      icon: Zap,
      questions: 100,
      color: 'from-warning/20 to-primary/20',
      description: 'Complete challenge with all questions',
    },
    {
      id: 'randomQuiz',
      icon: Shuffle,
      questions: 100,
      color: 'from-info/20 to-accent/20',
      description: 'Random selection from all categories',
    },
  ];

  return (
    <div className="animate-fade-in space-y-8">
      <div className="text-center">
        <h1 className="mb-4 font-serif text-3xl font-bold text-foreground md:text-4xl">
          {t('selectQuiz')}
        </h1>
        <p className="mx-auto max-w-2xl text-muted-foreground">
          Choose a category to test your knowledge. Questions adapt to your level!
        </p>
      </div>

      {/* Category Quizzes */}
      <section>
        <h2 className="mb-4 font-serif text-xl font-semibold text-foreground">
          Thematic Quizzes
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
                    {quiz.description}
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
          Challenge Quizzes
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
                    {quiz.description}
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
              <span>+5 points correct</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="h-3 w-3 rounded-full bg-destructive" />
              <span>-1 point incorrect</span>
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
