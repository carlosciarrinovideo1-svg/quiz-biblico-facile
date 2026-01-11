import React, { createContext, useContext, useState, useCallback, ReactNode, useEffect } from 'react';
import { z } from 'zod';

export interface Badge {
  id: string;
  name: string;
  description: string;
  icon: string;
  tier: 'bronze' | 'silver' | 'gold' | 'platinum' | 'diamond';
  earnedAt?: Date;
  category?: 'general' | 'speed' | 'streak' | 'mastery';
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

export interface DailyStreak {
  currentStreak: number;
  longestStreak: number;
  lastActivityDate: string;
}

export interface GameState {
  badges: Badge[];
  quizResults: QuizResult[];
  challengeScores: ChallengeScore[];
  totalQuizzesCompleted: number;
  totalCorrectAnswers: number;
  favoriteVerses: string[];
  chaptersRead: number;
  dailyStreak: DailyStreak;
  totalTimeSpent: number; // seconds
  fastestQuizTime: number; // seconds
  perfectScoreCount: number;
}

// Zod schemas for validating localStorage data
const BadgeSchema = z.object({
  id: z.string().max(100),
  name: z.string().max(100),
  description: z.string().max(500),
  icon: z.string().max(10),
  tier: z.enum(['bronze', 'silver', 'gold', 'platinum', 'diamond']),
  earnedAt: z.string().optional(),
  category: z.enum(['general', 'speed', 'streak', 'mastery']).optional(),
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

const DailyStreakSchema = z.object({
  currentStreak: z.number().int().min(0).max(10000),
  longestStreak: z.number().int().min(0).max(10000),
  lastActivityDate: z.string(),
});

const GameStateSchema = z.object({
  badges: z.array(BadgeSchema).max(100),
  quizResults: z.array(QuizResultSchema).max(1000),
  challengeScores: z.array(ChallengeScoreSchema).max(1000).optional().default([]),
  totalQuizzesCompleted: z.number().int().min(0).max(100000),
  totalCorrectAnswers: z.number().int().min(0).max(1000000),
  favoriteVerses: z.array(z.string().max(200)).max(1000),
  chaptersRead: z.number().int().min(0).max(100000),
  dailyStreak: DailyStreakSchema.optional().default({ currentStreak: 0, longestStreak: 0, lastActivityDate: '' }),
  totalTimeSpent: z.number().int().min(0).max(100000000).optional().default(0),
  fastestQuizTime: z.number().int().min(0).max(86400).optional().default(0),
  perfectScoreCount: z.number().int().min(0).max(100000).optional().default(0),
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
  updateDailyStreak: () => void;
  addTimeSpent: (seconds: number) => void;
}

const defaultBadges: Omit<Badge, 'earnedAt'>[] = [
  // General badges
  { id: 'first-quiz', name: 'firstQuiz', description: 'Complete your first quiz', icon: '🎯', tier: 'bronze', category: 'general' },
  { id: 'perfect-score', name: 'perfectScore', description: 'Get 100% on any quiz', icon: '⭐', tier: 'gold', category: 'general' },
  { id: 'bible-explorer', name: 'bibleExplorer', description: 'Read 10 chapters', icon: '📖', tier: 'bronze', category: 'general' },
  { id: 'quiz-master', name: 'quizMaster', description: 'Complete 10 quizzes', icon: '🏆', tier: 'silver', category: 'general' },
  { id: 'dedicated', name: 'dedicated', description: 'Complete 25 quizzes', icon: '💎', tier: 'gold', category: 'general' },
  
  // Speed badges
  { id: 'speed-demon', name: 'speedDemon', description: 'Complete a quiz in under 60 seconds', icon: '⚡', tier: 'silver', category: 'speed' },
  { id: 'lightning-fast', name: 'lightningFast', description: 'Complete a quiz in under 30 seconds', icon: '🌩️', tier: 'gold', category: 'speed' },
  { id: 'time-master', name: 'timeMaster', description: 'Complete 10 challenge mode quizzes', icon: '⏱️', tier: 'platinum', category: 'speed' },
  
  // Streak badges
  { id: 'streak-3', name: 'streak3', description: 'Maintain a 3-day streak', icon: '🔥', tier: 'bronze', category: 'streak' },
  { id: 'streak-7', name: 'streak7', description: 'Maintain a 7-day streak', icon: '🔥', tier: 'silver', category: 'streak' },
  { id: 'streak-30', name: 'streak30', description: 'Maintain a 30-day streak', icon: '🔥', tier: 'gold', category: 'streak' },
  { id: 'streak-100', name: 'streak100', description: 'Maintain a 100-day streak', icon: '🔥', tier: 'diamond', category: 'streak' },
  
  // Mastery badges
  { id: 'perfect-5', name: 'perfect5', description: 'Get 5 perfect scores', icon: '🌟', tier: 'silver', category: 'mastery' },
  { id: 'perfect-10', name: 'perfect10', description: 'Get 10 perfect scores', icon: '🌟', tier: 'gold', category: 'mastery' },
  { id: 'perfect-25', name: 'perfect25', description: 'Get 25 perfect scores', icon: '🌟', tier: 'platinum', category: 'mastery' },
  { id: 'scripture-scholar', name: 'scriptureScholar', description: 'Complete 100 quizzes', icon: '📚', tier: 'diamond', category: 'mastery' },
];

const defaultState: GameState = {
  badges: [],
  quizResults: [],
  challengeScores: [],
  totalQuizzesCompleted: 0,
  totalCorrectAnswers: 0,
  favoriteVerses: [],
  chaptersRead: 0,
  dailyStreak: { currentStreak: 0, longestStreak: 0, lastActivityDate: '' },
  totalTimeSpent: 0,
  fastestQuizTime: 0,
  perfectScoreCount: 0,
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
      dailyStreak: {
        currentStreak: validatedData.dailyStreak.currentStreak ?? 0,
        longestStreak: validatedData.dailyStreak.longestStreak ?? 0,
        lastActivityDate: validatedData.dailyStreak.lastActivityDate ?? '',
      },
      totalTimeSpent: validatedData.totalTimeSpent ?? 0,
      fastestQuizTime: validatedData.fastestQuizTime ?? 0,
      perfectScoreCount: validatedData.perfectScoreCount ?? 0,
      badges: validatedData.badges.map((b) => ({
        id: b.id,
        name: b.name,
        description: b.description,
        icon: b.icon,
        tier: b.tier,
        category: b.category,
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

  const updateDailyStreak = useCallback(() => {
    setState(prev => {
      const today = new Date().toISOString().split('T')[0];
      const yesterday = new Date(Date.now() - 86400000).toISOString().split('T')[0];
      
      let newStreak = prev.dailyStreak.currentStreak;
      
      if (prev.dailyStreak.lastActivityDate === today) {
        // Already updated today
        return prev;
      } else if (prev.dailyStreak.lastActivityDate === yesterday) {
        // Consecutive day
        newStreak += 1;
      } else {
        // Streak broken
        newStreak = 1;
      }
      
      return {
        ...prev,
        dailyStreak: {
          currentStreak: newStreak,
          longestStreak: Math.max(prev.dailyStreak.longestStreak, newStreak),
          lastActivityDate: today,
        }
      };
    });
  }, []);

  const addTimeSpent = useCallback((seconds: number) => {
    setState(prev => ({
      ...prev,
      totalTimeSpent: prev.totalTimeSpent + seconds,
      fastestQuizTime: prev.fastestQuizTime === 0 
        ? seconds 
        : Math.min(prev.fastestQuizTime, seconds)
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

    // Speed badges
    if (state.fastestQuizTime > 0 && state.fastestQuizTime <= 60 && !state.badges.some(b => b.id === 'speed-demon')) {
      const badge = { ...defaultBadges.find(b => b.id === 'speed-demon')!, earnedAt: new Date() };
      addBadge(badge);
      newBadge = badge;
    }

    if (state.fastestQuizTime > 0 && state.fastestQuizTime <= 30 && !state.badges.some(b => b.id === 'lightning-fast')) {
      const badge = { ...defaultBadges.find(b => b.id === 'lightning-fast')!, earnedAt: new Date() };
      addBadge(badge);
      newBadge = badge;
    }

    if (state.challengeScores.length >= 10 && !state.badges.some(b => b.id === 'time-master')) {
      const badge = { ...defaultBadges.find(b => b.id === 'time-master')!, earnedAt: new Date() };
      addBadge(badge);
      newBadge = badge;
    }

    // Streak badges
    const streakBadges = [
      { id: 'streak-3', threshold: 3 },
      { id: 'streak-7', threshold: 7 },
      { id: 'streak-30', threshold: 30 },
      { id: 'streak-100', threshold: 100 },
    ];
    
    for (const sb of streakBadges) {
      if (state.dailyStreak.longestStreak >= sb.threshold && !state.badges.some(b => b.id === sb.id)) {
        const badge = { ...defaultBadges.find(b => b.id === sb.id)!, earnedAt: new Date() };
        addBadge(badge);
        newBadge = badge;
      }
    }

    // Perfect score count badges
    const perfectCount = state.quizResults.filter(r => r.percentage === 100).length;
    const perfectBadges = [
      { id: 'perfect-5', threshold: 5 },
      { id: 'perfect-10', threshold: 10 },
      { id: 'perfect-25', threshold: 25 },
    ];
    
    for (const pb of perfectBadges) {
      if (perfectCount >= pb.threshold && !state.badges.some(b => b.id === pb.id)) {
        const badge = { ...defaultBadges.find(b => b.id === pb.id)!, earnedAt: new Date() };
        addBadge(badge);
        newBadge = badge;
      }
    }

    // Scripture scholar badge
    if (state.totalQuizzesCompleted >= 100 && !state.badges.some(b => b.id === 'scripture-scholar')) {
      const badge = { ...defaultBadges.find(b => b.id === 'scripture-scholar')!, earnedAt: new Date() };
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
      checkAndAwardBadges,
      updateDailyStreak,
      addTimeSpent
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
