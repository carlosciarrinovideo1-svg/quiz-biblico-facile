import React, { useState, useEffect, useMemo, useCallback } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { ArrowLeft, CheckCircle2, XCircle, Trophy, RotateCcw, Sparkles } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useGame } from '@/contexts/GameContext';
import { getQuestionsByCategory, QuizQuestion } from '@/data/quizQuestions';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { toast } from 'sonner';

type Difficulty = 'easy' | 'medium' | 'hard';

const motivationalMessages = [
  'motivational1',
  'motivational2',
  'motivational3',
  'motivational4',
  'motivational5',
];

const QuizGame: React.FC = () => {
  const { category } = useParams<{ category: string }>();
  const navigate = useNavigate();
  const { t } = useLanguage();
  const { addQuizResult, checkAndAwardBadges } = useGame();

  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [difficulty, setDifficulty] = useState<Difficulty>('easy');
  const [answerHistory, setAnswerHistory] = useState<boolean[]>([]);
  const [consecutiveCorrect, setConsecutiveCorrect] = useState(0);
  const [isComplete, setIsComplete] = useState(false);
  const [showMotivation, setShowMotivation] = useState(false);

  const allQuestions = useMemo(() => {
    if (!category) return [];
    return getQuestionsByCategory(category);
  }, [category]);

  // Filter questions by difficulty and shuffle
  const questions = useMemo(() => {
    const filtered = allQuestions.filter(q => q.difficulty === difficulty);
    if (filtered.length === 0) return allQuestions;
    return filtered.sort(() => Math.random() - 0.5);
  }, [allQuestions, difficulty]);

  const currentQuestion = questions[currentIndex % questions.length];
  const progress = ((currentIndex + 1) / Math.min(questions.length, 20)) * 100;
  const maxPossibleScore = Math.min(questions.length, 20) * 5;

  // Adaptive difficulty logic
  const updateDifficulty = useCallback((wasCorrect: boolean) => {
    const newHistory = [...answerHistory, wasCorrect].slice(-5);
    setAnswerHistory(newHistory);

    if (wasCorrect) {
      setConsecutiveCorrect(prev => prev + 1);
      if (consecutiveCorrect + 1 >= 3) {
        if (difficulty === 'easy') {
          setDifficulty('medium');
          toast.info('Difficulty increased to Medium!');
        } else if (difficulty === 'medium') {
          setDifficulty('hard');
          toast.info('Difficulty increased to Hard!');
        }
        setConsecutiveCorrect(0);
      }
    } else {
      setConsecutiveCorrect(0);
      const recentErrors = newHistory.filter(h => !h).length;
      if (recentErrors >= 2) {
        if (difficulty === 'hard') {
          setDifficulty('medium');
          toast.info('Difficulty decreased to Medium');
        } else if (difficulty === 'medium') {
          setDifficulty('easy');
          toast.info('Difficulty decreased to Easy');
        }
      }
    }
  }, [answerHistory, consecutiveCorrect, difficulty]);

  const handleAnswer = (answerIndex: number) => {
    if (isAnswered) return;

    setSelectedAnswer(answerIndex);
    setIsAnswered(true);

    const isCorrect = answerIndex === currentQuestion.correctIndex;
    
    if (isCorrect) {
      setScore(prev => prev + 5);
    } else {
      setScore(prev => Math.max(0, prev - 1));
    }

    updateDifficulty(isCorrect);

    // Show motivation every 3 questions
    if ((currentIndex + 1) % 3 === 0 && !showMotivation) {
      setShowMotivation(true);
      const randomMessage = motivationalMessages[Math.floor(Math.random() * motivationalMessages.length)];
      toast.success(t(randomMessage), { icon: <Sparkles className="h-4 w-4" /> });
    }
  };

  const handleNext = () => {
    const questionsLimit = Math.min(questions.length, 20);
    
    if (currentIndex + 1 >= questionsLimit) {
      // Quiz complete
      const percentage = Math.round((score / maxPossibleScore) * 100);
      addQuizResult({
        quizType: category || 'unknown',
        score,
        maxScore: maxPossibleScore,
        percentage,
      });
      
      // Check for badges
      setTimeout(() => {
        const newBadge = checkAndAwardBadges();
        if (newBadge) {
          toast.success(`${t('badgeEarned')} ${newBadge.icon} ${t(newBadge.name)}`);
        }
      }, 500);

      setIsComplete(true);
    } else {
      setCurrentIndex(prev => prev + 1);
      setSelectedAnswer(null);
      setIsAnswered(false);
      setShowMotivation(false);
    }
  };

  const handleRestart = () => {
    setCurrentIndex(0);
    setScore(0);
    setSelectedAnswer(null);
    setIsAnswered(false);
    setDifficulty('easy');
    setAnswerHistory([]);
    setConsecutiveCorrect(0);
    setIsComplete(false);
    setShowMotivation(false);
  };

  const getDifficultyColor = (diff: Difficulty) => {
    switch (diff) {
      case 'easy': return 'difficulty-easy';
      case 'medium': return 'difficulty-medium';
      case 'hard': return 'difficulty-hard';
    }
  };

  if (!currentQuestion) {
    return (
      <div className="flex min-h-[400px] items-center justify-center">
        <Card className="glass-card p-8 text-center">
          <p className="text-muted-foreground">No questions available for this category.</p>
          <Button asChild className="mt-4">
            <Link to="/quiz">Back to Quizzes</Link>
          </Button>
        </Card>
      </div>
    );
  }

  if (isComplete) {
    const percentage = Math.round((score / maxPossibleScore) * 100);
    
    return (
      <div className="animate-fade-in mx-auto max-w-2xl">
        <Card className="glass-card overflow-hidden">
          <CardHeader className="bg-gradient-to-br from-primary/20 to-accent/20 text-center">
            <Trophy className="mx-auto mb-4 h-16 w-16 text-warning animate-bounce-gentle" />
            <CardTitle className="font-serif text-3xl">
              {t('quizComplete')}
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6 p-8">
            <div className="grid gap-4 text-center sm:grid-cols-2">
              <div className="rounded-xl bg-muted/50 p-6">
                <p className="text-sm text-muted-foreground">{t('yourScore')}</p>
                <p className="text-4xl font-bold text-primary">{score}</p>
                <p className="text-sm text-muted-foreground">/ {maxPossibleScore}</p>
              </div>
              <div className="rounded-xl bg-muted/50 p-6">
                <p className="text-sm text-muted-foreground">{t('percentage')}</p>
                <p className={`text-4xl font-bold ${
                  percentage >= 80 ? 'text-success' : 
                  percentage >= 50 ? 'text-warning' : 'text-destructive'
                }`}>
                  {percentage}%
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
              <Button onClick={handleRestart} variant="hero" className="flex-1">
                <RotateCcw className="h-4 w-4" />
                {t('tryAgain')}
              </Button>
              <Button asChild variant="outline" className="flex-1">
                <Link to="/quiz">
                  <ArrowLeft className="h-4 w-4" />
                  {t('backToQuizzes')}
                </Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="animate-fade-in mx-auto max-w-3xl space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <Button asChild variant="ghost" size="sm">
          <Link to="/quiz">
            <ArrowLeft className="h-4 w-4" />
            Back
          </Link>
        </Button>
        <div className="flex items-center gap-3">
          <Badge className={getDifficultyColor(difficulty)}>
            {t(difficulty)}
          </Badge>
          <Badge variant="secondary">
            {t('score')}: {score}
          </Badge>
        </div>
      </div>

      {/* Progress */}
      <div className="space-y-2">
        <div className="flex justify-between text-sm text-muted-foreground">
          <span>{t('question')} {currentIndex + 1} / {Math.min(questions.length, 20)}</span>
          <span>{Math.round(progress)}%</span>
        </div>
        <Progress value={progress} className="h-2" />
      </div>

      {/* Difficulty explanation */}
      <p className="text-center text-xs text-muted-foreground">
        {t('difficultyExplanation')}
      </p>

      {/* Question Card */}
      <Card className="glass-card animate-scale-in">
        <CardHeader>
          <CardTitle className="font-serif text-xl leading-relaxed">
            {currentQuestion.question}
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          {currentQuestion.options.map((option, index) => {
            let variant: 'quiz' | 'quizSelected' | 'quizCorrect' | 'quizIncorrect' = 'quiz';
            
            if (isAnswered) {
              if (index === currentQuestion.correctIndex) {
                variant = 'quizCorrect';
              } else if (index === selectedAnswer && index !== currentQuestion.correctIndex) {
                variant = 'quizIncorrect';
              }
            } else if (selectedAnswer === index) {
              variant = 'quizSelected';
            }

            return (
              <Button
                key={index}
                variant={variant}
                onClick={() => handleAnswer(index)}
                disabled={isAnswered}
                className="w-full justify-start text-left h-auto py-4 px-5"
              >
                <span className="mr-3 flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full border border-current text-sm font-medium">
                  {String.fromCharCode(65 + index)}
                </span>
                <span className="flex-1">{option}</span>
                {isAnswered && index === currentQuestion.correctIndex && (
                  <CheckCircle2 className="h-5 w-5 flex-shrink-0 text-success-foreground" />
                )}
                {isAnswered && index === selectedAnswer && index !== currentQuestion.correctIndex && (
                  <XCircle className="h-5 w-5 flex-shrink-0 text-destructive-foreground" />
                )}
              </Button>
            );
          })}
        </CardContent>
      </Card>

      {/* Feedback and Next */}
      {isAnswered && (
        <div className="animate-slide-up space-y-4">
          <div className={`rounded-xl p-4 text-center ${
            selectedAnswer === currentQuestion.correctIndex
              ? 'bg-success/20 text-success'
              : 'bg-destructive/20 text-destructive'
          }`}>
            {selectedAnswer === currentQuestion.correctIndex ? (
              <p className="font-semibold">{t('correct')} +5 points</p>
            ) : (
              <p className="font-semibold">{t('incorrect')} -1 point</p>
            )}
          </div>
          <Button onClick={handleNext} variant="hero" className="w-full" size="lg">
            {currentIndex + 1 >= Math.min(questions.length, 20) 
              ? t('finishQuiz')
              : t('nextQuestion')
            }
          </Button>
        </div>
      )}
    </div>
  );
};

export default QuizGame;
