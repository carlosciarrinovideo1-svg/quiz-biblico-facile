import React, { useState, useMemo, useCallback } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { ArrowLeft, CheckCircle2, XCircle, Trophy, RotateCcw, Sparkles, BookOpen } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useGame } from '@/contexts/GameContext';
import { getQuestionsByCategory } from '@/data/quizQuestions';
import { getTranslatedQuestion } from '@/data/quizQuestionsTranslations';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Switch } from '@/components/ui/switch';
import { toast } from 'sonner';
import ShareButton from '@/components/ShareButton';

// Import background images
import bgDefault from '@/assets/bg-quiz-default.jpg';
import bgApocalypse from '@/assets/bg-apocalypse.jpg';
import bgActs from '@/assets/bg-acts.jpg';
import bgCharacters from '@/assets/bg-characters.jpg';
import bgPentateuch from '@/assets/bg-pentateuch.jpg';
import bgGospels from '@/assets/bg-gospels.jpg';

type Difficulty = 'easy' | 'medium' | 'hard';

const motivationalMessages = ['motivational1', 'motivational2', 'motivational3', 'motivational4', 'motivational5'];

// Map categories to background images
const categoryBackgrounds: Record<string, string> = {
  pentateuch: bgPentateuch,
  minorProphets: bgDefault,
  oldTestament: bgDefault,
  fourGospels: bgGospels,
  paulineLetters: bgGospels,
  newTestament: bgGospels,
  apocalypse: bgApocalypse,
  actsApostles: bgActs,
  biblicalCharacters: bgCharacters,
  fullQuiz: bgDefault,
  randomQuiz: bgDefault,
};

const QuizGame: React.FC = () => {
  const { category } = useParams<{ category: string }>();
  const navigate = useNavigate();
  const { t, language } = useLanguage();
  const { addQuizResult, checkAndAwardBadges } = useGame();

  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [difficulty, setDifficulty] = useState<Difficulty>('easy');
  const [answerHistory, setAnswerHistory] = useState<boolean[]>([]);
  const [consecutiveCorrect, setConsecutiveCorrect] = useState(0);
  const [isComplete, setIsComplete] = useState(false);
  const [studyMode, setStudyMode] = useState(false);

  const backgroundImage = category ? categoryBackgrounds[category] || bgDefault : bgDefault;

  const allQuestions = useMemo(() => {
    if (!category) return [];
    return getQuestionsByCategory(category);
  }, [category]);

  const questions = useMemo(() => {
    const filtered = allQuestions.filter(q => q.difficulty === difficulty);
    if (filtered.length === 0) return allQuestions;
    return filtered.sort(() => Math.random() - 0.5);
  }, [allQuestions, difficulty]);

  const currentQuestionData = questions[currentIndex % questions.length];
  const translatedQ = currentQuestionData ? getTranslatedQuestion(
    currentQuestionData.id,
    language,
    { question: currentQuestionData.question, options: currentQuestionData.options, explanation: currentQuestionData.explanation }
  ) : null;
  const currentQuestion = currentQuestionData ? {
    ...currentQuestionData,
    question: translatedQ?.question || currentQuestionData.question,
    options: translatedQ?.options || currentQuestionData.options,
    explanation: translatedQ?.explanation || currentQuestionData.explanation
  } : null;
  const progress = ((currentIndex + 1) / Math.min(questions.length, 20)) * 100;
  const maxPossibleScore = Math.min(questions.length, 20) * 5;

  const updateDifficulty = useCallback((wasCorrect: boolean) => {
    const newHistory = [...answerHistory, wasCorrect].slice(-5);
    setAnswerHistory(newHistory);

    if (wasCorrect) {
      setConsecutiveCorrect(prev => prev + 1);
      if (consecutiveCorrect + 1 >= 3) {
        if (difficulty === 'easy') setDifficulty('medium');
        else if (difficulty === 'medium') setDifficulty('hard');
        setConsecutiveCorrect(0);
      }
    } else {
      setConsecutiveCorrect(0);
      const recentErrors = newHistory.filter(h => !h).length;
      if (recentErrors >= 2) {
        if (difficulty === 'hard') setDifficulty('medium');
        else if (difficulty === 'medium') setDifficulty('easy');
      }
    }
  }, [answerHistory, consecutiveCorrect, difficulty]);

  const handleAnswer = (answerIndex: number) => {
    if (isAnswered) return;
    setSelectedAnswer(answerIndex);
    setIsAnswered(true);
    const isCorrect = answerIndex === currentQuestion.correctIndex;
    if (isCorrect) setScore(prev => prev + 5);
    else setScore(prev => Math.max(0, prev - 1));
    updateDifficulty(isCorrect);
    if ((currentIndex + 1) % 3 === 0) {
      const randomMessage = motivationalMessages[Math.floor(Math.random() * motivationalMessages.length)];
      toast.success(t(randomMessage), { icon: <Sparkles className="h-4 w-4" /> });
    }
  };

  const handleNext = () => {
    const questionsLimit = Math.min(questions.length, 20);
    if (currentIndex + 1 >= questionsLimit) {
      const percentage = Math.round((score / maxPossibleScore) * 100);
      addQuizResult({ quizType: category || 'unknown', score, maxScore: maxPossibleScore, percentage });
      setTimeout(() => {
        const newBadge = checkAndAwardBadges();
        if (newBadge) toast.success(`${t('badgeEarned')} ${newBadge.icon} ${t(newBadge.name)}`);
      }, 500);
      setIsComplete(true);
    } else {
      setCurrentIndex(prev => prev + 1);
      setSelectedAnswer(null);
      setIsAnswered(false);
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
          <p className="text-muted-foreground">{t('noQuestionsAvailable')}</p>
          <Button asChild className="mt-4">
            <Link to="/quiz">{t('backToQuizzes')}</Link>
          </Button>
        </Card>
      </div>
    );
  }

  if (isComplete) {
    const percentage = Math.round((score / maxPossibleScore) * 100);
    return (
      <div 
        className="min-h-screen -m-4 p-4 bg-cover bg-center bg-fixed"
        style={{ backgroundImage: `linear-gradient(to bottom, hsl(var(--background) / 0.85), hsl(var(--background) / 0.95)), url(${backgroundImage})` }}
      >
        <div className="animate-fade-in mx-auto max-w-2xl pt-8">
          <Card className="glass-card overflow-hidden border-2 border-border/50">
            <CardHeader className="bg-gradient-to-br from-primary/20 to-accent/20 text-center">
              <Trophy className="mx-auto mb-4 h-16 w-16 text-warning animate-bounce-gentle" />
              <CardTitle className="font-serif text-3xl">{t('quizComplete')}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6 p-8">
              <div className="grid gap-4 text-center sm:grid-cols-2">
                <div className="rounded-xl bg-muted/50 p-6 border border-border">
                  <p className="text-sm text-muted-foreground font-medium">{t('yourScore')}</p>
                  <p className="text-4xl font-bold text-primary">{score}</p>
                  <p className="text-sm text-muted-foreground">/ {maxPossibleScore}</p>
                </div>
                <div className="rounded-xl bg-muted/50 p-6 border border-border">
                  <p className="text-sm text-muted-foreground font-medium">{t('percentage')}</p>
                  <p className={`text-4xl font-bold ${percentage >= 80 ? 'text-success' : percentage >= 50 ? 'text-warning' : 'text-destructive'}`}>{percentage}%</p>
                </div>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row">
                <Button onClick={handleRestart} variant="hero" className="flex-1">
                  <RotateCcw className="h-4 w-4" />{t('tryAgain')}
                </Button>
                <ShareButton title={t('appTitle')} text={`${t('shareScore').replace('{score}', String(percentage))}`} />
                <Button asChild variant="outline" className="flex-1 border-2">
                  <Link to="/quiz"><ArrowLeft className="h-4 w-4" />{t('backToQuizzes')}</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <div 
      className="min-h-screen -m-4 p-4 bg-cover bg-center bg-fixed"
      style={{ backgroundImage: `linear-gradient(to bottom, hsl(var(--background) / 0.88), hsl(var(--background) / 0.95)), url(${backgroundImage})` }}
    >
      <div className="animate-fade-in mx-auto max-w-3xl space-y-6 pt-4">
        <div className="flex items-center justify-between">
          <Button asChild variant="ghost" size="sm" className="bg-background/50 backdrop-blur-sm">
            <Link to="/quiz"><ArrowLeft className="h-4 w-4" />{t('backToQuizzes')}</Link>
          </Button>
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2 bg-background/50 backdrop-blur-sm rounded-lg px-3 py-1">
              <BookOpen className="h-4 w-4 text-muted-foreground" />
              <Switch checked={studyMode} onCheckedChange={setStudyMode} />
            </div>
            <Badge className={`${getDifficultyColor(difficulty)} font-semibold`}>{t(difficulty)}</Badge>
            <Badge variant="secondary" className="bg-background/80 font-semibold">{t('score')}: {score}</Badge>
          </div>
        </div>

        <div className="space-y-2 bg-background/60 backdrop-blur-sm rounded-xl p-4">
          <div className="flex justify-between text-sm font-medium text-foreground">
            <span>{t('question')} {currentIndex + 1} / {Math.min(questions.length, 20)}</span>
            <span>{Math.round(progress)}%</span>
          </div>
          <Progress value={progress} className="h-3" />
        </div>

        <Card className="glass-card animate-scale-in border-2 border-border/50">
          <CardHeader className="bg-gradient-to-r from-primary/10 to-accent/10">
            <CardTitle className="font-serif text-xl leading-relaxed">{currentQuestion.question}</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3 pt-4">
            {currentQuestion.options.map((option, index) => {
              let variant: 'quiz' | 'quizSelected' | 'quizCorrect' | 'quizIncorrect' = 'quiz';
              if (isAnswered) {
                if (index === currentQuestion.correctIndex) variant = 'quizCorrect';
                else if (index === selectedAnswer) variant = 'quizIncorrect';
              } else if (selectedAnswer === index) variant = 'quizSelected';

              return (
                <Button key={index} variant={variant} onClick={() => handleAnswer(index)} disabled={isAnswered} className="w-full justify-start text-left h-auto py-4 px-5 font-medium">
                  <span className="mr-3 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full border-2 border-current text-sm font-bold">{String.fromCharCode(65 + index)}</span>
                  <span className="flex-1">{option}</span>
                  {isAnswered && index === currentQuestion.correctIndex && <CheckCircle2 className="h-5 w-5 flex-shrink-0 text-success-foreground" />}
                  {isAnswered && index === selectedAnswer && index !== currentQuestion.correctIndex && <XCircle className="h-5 w-5 flex-shrink-0 text-destructive-foreground" />}
                </Button>
              );
            })}
          </CardContent>
        </Card>

        {isAnswered && (
          <div className="animate-slide-up space-y-4">
            <div className={`rounded-xl p-4 text-center border-2 ${selectedAnswer === currentQuestion.correctIndex ? 'bg-success/20 text-success border-success/30' : 'bg-destructive/20 text-destructive border-destructive/30'}`}>
              {selectedAnswer === currentQuestion.correctIndex ? <p className="font-bold text-lg">{t('correct')} +5</p> : (
                <div><p className="font-bold text-lg">{t('incorrect')} -1</p><p className="text-sm mt-1 font-medium">{t('correctAnswer')}: {currentQuestion.options[currentQuestion.correctIndex]}</p></div>
              )}
              <p className="text-xs mt-2 opacity-80 font-medium">{t('reference')}: {currentQuestion.reference}</p>
            </div>
            
            {studyMode && currentQuestion.explanation && (
              <Card className="bg-accent/20 border-2 border-accent">
                <CardContent className="p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <BookOpen className="h-4 w-4 text-accent-foreground" />
                    <span className="font-bold text-accent-foreground">{t('biblicalExplanation')}</span>
                  </div>
                  <p className="text-sm text-foreground/90">{currentQuestion.explanation}</p>
                </CardContent>
              </Card>
            )}

            <Button onClick={handleNext} variant="hero" className="w-full" size="lg">
              {currentIndex + 1 >= Math.min(questions.length, 20) ? t('finishQuiz') : t('nextQuestion')}
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default QuizGame;