import React, { createContext, useContext, useState, useCallback, ReactNode, useEffect } from 'react';
import { z } from 'zod';

export interface Badge {
  id: string;
  name: string;
  description: string;
  icon: string;
  tier: 'bronze' | 'silver' | 'gold';
  earnedAt?: Date;
}

export interface QuizResult {
  quizType: string;
  score: number;
  maxScore: number;
  percentage: number;
  date: Date;
}

export interface ChallengeScore {
  category: string;
  score: number;
  maxScore: number;
  percentage: number;
  timeUsed: number; // seconds
  date: Date;
}

export interface GameState {
  badges: Badge[];
  quizResults: QuizResult[];
  challengeScores: ChallengeScore[];
  totalQuizzesCompleted: number;
  totalCorrectAnswers: number;
  favoriteVerses: string[];
  chaptersRead: number;
}

// Zod schemas for validating localStorage data
const BadgeSchema = z.object({
  id: z.string().max(100),
  name: z.string().max(100),
  description: z.string().max(500),
  icon: z.string().max(10),
  tier: z.enum(['bronze', 'silver', 'gold']),
  earnedAt: z.string().optional(),
});

const QuizResultSchema = z.object({
  quizType: z.string().max(100),
  score: z.number().int().min(0).max(10000),
  maxScore: z.number().int().min(1).max(10000),
  percentage: z.number().min(0).max(100),
  date: z.string(),
});

const ChallengeScoreSchema = z.object({
  category: z.string().max(100),
  score: z.number().int().min(0).max(10000),
  maxScore: z.number().int().min(1).max(10000),
  percentage: z.number().min(0).max(100),
  timeUsed: z.number().min(0).max(86400), // max 24 hours
  date: z.string(),
});

const GameStateSchema = z.object({
  badges: z.array(BadgeSchema).max(100),
  quizResults: z.array(QuizResultSchema).max(1000),
  challengeScores: z.array(ChallengeScoreSchema).max(1000).optional().default([]),
  totalQuizzesCompleted: z.number().int().min(0).max(100000),
  totalCorrectAnswers: z.number().int().min(0).max(1000000),
  favoriteVerses: z.array(z.string().max(200)).max(1000),
  chaptersRead: z.number().int().min(0).max(100000),
});

interface GameContextType {
  state: GameState;
  addBadge: (badge: Badge) => void;
  addQuizResult: (result: Omit<QuizResult, 'date'>) => void;
  addChallengeScore: (result: Omit<ChallengeScore, 'date'>) => void;
  addFavoriteVerse: (verseId: string) => void;
  removeFavoriteVerse: (verseId: string) => void;
  incrementChaptersRead: () => void;
  checkAndAwardBadges: () => Badge | null;
}

const defaultBadges: Omit<Badge, 'earnedAt'>[] = [
  { id: 'first-quiz', name: 'firstQuiz', description: 'Complete your first quiz', icon: '🎯', tier: 'bronze' },
  { id: 'perfect-score', name: 'perfectScore', description: 'Get 100% on any quiz', icon: '⭐', tier: 'gold' },
  { id: 'bible-explorer', name: 'bibleExplorer', description: 'Read 10 chapters', icon: '📖', tier: 'bronze' },
  { id: 'quiz-master', name: 'quizMaster', description: 'Complete 10 quizzes', icon: '🏆', tier: 'silver' },
  { id: 'dedicated', name: 'dedicated', description: 'Complete 25 quizzes', icon: '💎', tier: 'gold' },
];

const defaultState: GameState = {
  badges: [],
  quizResults: [],
  challengeScores: [],
  totalQuizzesCompleted: 0,
  totalCorrectAnswers: 0,
  favoriteVerses: [],
  chaptersRead: 0,
};

const GameContext = createContext<GameContextType | undefined>(undefined);

const loadState = (): GameState => {
  try {
    const saved = localStorage.getItem('bible-app-game-state');
    if (!saved) {
      return defaultState;
    }
    
    // Parse JSON safely
    let parsed: unknown;
    try {
      parsed = JSON.parse(saved);
    } catch {
      console.error('Invalid JSON in localStorage, resetting state');
      localStorage.removeItem('bible-app-game-state');
      return defaultState;
    }
    
    // Validate with Zod schema
    const validationResult = GameStateSchema.safeParse(parsed);
    if (!validationResult.success) {
      console.error('Invalid game state structure in localStorage:', validationResult.error.message);
      localStorage.removeItem('bible-app-game-state');
      return defaultState;
    }
    
    const validatedData = validationResult.data;
    
    // Transform validated data - convert date strings to Date objects
    const result: GameState = {
      totalQuizzesCompleted: validatedData.totalQuizzesCompleted,
      totalCorrectAnswers: validatedData.totalCorrectAnswers,
      favoriteVerses: validatedData.favoriteVerses,
      chaptersRead: validatedData.chaptersRead,
      badges: validatedData.badges.map((b) => ({
        id: b.id,
        name: b.name,
        description: b.description,
        icon: b.icon,
        tier: b.tier,
        earnedAt: b.earnedAt ? new Date(b.earnedAt) : undefined
      })),
      quizResults: validatedData.quizResults.map((r) => ({
        quizType: r.quizType,
        score: r.score,
        maxScore: r.maxScore,
        percentage: r.percentage,
        date: new Date(r.date)
      })),
      challengeScores: validatedData.challengeScores.map((s) => ({
        category: s.category,
        score: s.score,
        maxScore: s.maxScore,
        percentage: s.percentage,
        timeUsed: s.timeUsed,
        date: new Date(s.date)
      }))
    };
    return result;
  } catch (e) {
    console.error('Error loading game state:', e);
    return defaultState;
  }
};

export const GameProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [state, setState] = useState<GameState>(loadState);

  useEffect(() => {
    localStorage.setItem('bible-app-game-state', JSON.stringify(state));
  }, [state]);

  const addBadge = useCallback((badge: Badge) => {
    setState(prev => {
      if (prev.badges.some(b => b.id === badge.id)) return prev;
      return {
        ...prev,
        badges: [...prev.badges, { ...badge, earnedAt: new Date() }]
      };
    });
  }, []);

  const addQuizResult = useCallback((result: Omit<QuizResult, 'date'>) => {
    setState(prev => ({
      ...prev,
      quizResults: [...prev.quizResults, { ...result, date: new Date() }],
      totalQuizzesCompleted: prev.totalQuizzesCompleted + 1,
      totalCorrectAnswers: prev.totalCorrectAnswers + Math.floor(result.score / 5)
    }));
  }, []);

  const addChallengeScore = useCallback((result: Omit<ChallengeScore, 'date'>) => {
    setState(prev => ({
      ...prev,
      challengeScores: [...prev.challengeScores, { ...result, date: new Date() }]
    }));
  }, []);

  const addFavoriteVerse = useCallback((verseId: string) => {
    setState(prev => {
      if (prev.favoriteVerses.includes(verseId)) return prev;
      return {
        ...prev,
        favoriteVerses: [...prev.favoriteVerses, verseId]
      };
    });
  }, []);

  const removeFavoriteVerse = useCallback((verseId: string) => {
    setState(prev => ({
      ...prev,
      favoriteVerses: prev.favoriteVerses.filter(v => v !== verseId)
    }));
  }, []);

  const incrementChaptersRead = useCallback(() => {
    setState(prev => ({
      ...prev,
      chaptersRead: prev.chaptersRead + 1
    }));
  }, []);

  const checkAndAwardBadges = useCallback((): Badge | null => {
    let newBadge: Badge | null = null;

    // First quiz badge
    if (state.totalQuizzesCompleted >= 1 && !state.badges.some(b => b.id === 'first-quiz')) {
      const badge = { ...defaultBadges.find(b => b.id === 'first-quiz')!, earnedAt: new Date() };
      addBadge(badge);
      newBadge = badge;
    }

    // Perfect score badge
    const hasPerfect = state.quizResults.some(r => r.percentage === 100);
    if (hasPerfect && !state.badges.some(b => b.id === 'perfect-score')) {
      const badge = { ...defaultBadges.find(b => b.id === 'perfect-score')!, earnedAt: new Date() };
      addBadge(badge);
      newBadge = badge;
    }

    // Bible explorer badge
    if (state.chaptersRead >= 10 && !state.badges.some(b => b.id === 'bible-explorer')) {
      const badge = { ...defaultBadges.find(b => b.id === 'bible-explorer')!, earnedAt: new Date() };
      addBadge(badge);
      newBadge = badge;
    }

    // Quiz master badge
    if (state.totalQuizzesCompleted >= 10 && !state.badges.some(b => b.id === 'quiz-master')) {
      const badge = { ...defaultBadges.find(b => b.id === 'quiz-master')!, earnedAt: new Date() };
      addBadge(badge);
      newBadge = badge;
    }

    // Dedicated learner badge
    if (state.totalQuizzesCompleted >= 25 && !state.badges.some(b => b.id === 'dedicated')) {
      const badge = { ...defaultBadges.find(b => b.id === 'dedicated')!, earnedAt: new Date() };
      addBadge(badge);
      newBadge = badge;
    }

    return newBadge;
  }, [state, addBadge]);

  return (
    <GameContext.Provider value={{
      state,
      addBadge,
      addQuizResult,
      addChallengeScore,
      addFavoriteVerse,
      removeFavoriteVerse,
      incrementChaptersRead,
      checkAndAwardBadges
    }}>
      {children}
    </GameContext.Provider>
  );
};

export const useGame = (): GameContextType => {
  const context = useContext(GameContext);
  if (!context) {
    throw new Error('useGame must be used within a GameProvider');
  }
  return context;
};
