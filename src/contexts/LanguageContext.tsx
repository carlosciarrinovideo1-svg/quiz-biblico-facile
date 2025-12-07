import React, { createContext, useContext, useState, useCallback, ReactNode } from 'react';

export type Language = 'en' | 'it' | 'es' | 'pt' | 'fr';

interface Translations {
  [key: string]: {
    [lang in Language]: string;
  };
}

const translations: Translations = {
  // Navigation
  home: { en: 'Home', it: 'Home', es: 'Inicio', pt: 'Início', fr: 'Accueil' },
  bible: { en: 'Bible', it: 'Bibbia', es: 'Biblia', pt: 'Bíblia', fr: 'Bible' },
  quiz: { en: 'Quiz', it: 'Quiz', es: 'Cuestionario', pt: 'Quiz', fr: 'Quiz' },
  badges: { en: 'Badges', it: 'Distintivi', es: 'Insignias', pt: 'Distintivos', fr: 'Badges' },
  
  // Home
  welcome: { en: 'Welcome to Scripture Study', it: 'Benvenuto allo Studio delle Scritture', es: 'Bienvenido al Estudio de las Escrituras', pt: 'Bem-vindo ao Estudo das Escrituras', fr: 'Bienvenue à l\'Étude des Écritures' },
  subtitle: { en: 'Explore the Bible, test your knowledge, and grow in faith', it: 'Esplora la Bibbia, metti alla prova le tue conoscenze e cresci nella fede', es: 'Explora la Biblia, pon a prueba tu conocimiento y crece en la fe', pt: 'Explore a Bíblia, teste seu conhecimento e cresça na fé', fr: 'Explorez la Bible, testez vos connaissances et grandissez dans la foi' },
  startReading: { en: 'Start Reading', it: 'Inizia a Leggere', es: 'Comenzar a Leer', pt: 'Começar a Ler', fr: 'Commencer à Lire' },
  takeQuiz: { en: 'Take a Quiz', it: 'Fai un Quiz', es: 'Hacer un Quiz', pt: 'Fazer um Quiz', fr: 'Faire un Quiz' },

  // Bible Reader
  selectVersion: { en: 'Select Version', it: 'Seleziona Versione', es: 'Seleccionar Versión', pt: 'Selecionar Versão', fr: 'Sélectionner Version' },
  searchBible: { en: 'Search the Bible...', it: 'Cerca nella Bibbia...', es: 'Buscar en la Biblia...', pt: 'Pesquisar na Bíblia...', fr: 'Rechercher dans la Bible...' },
  favorites: { en: 'Favorites', it: 'Preferiti', es: 'Favoritos', pt: 'Favoritos', fr: 'Favoris' },
  addToFavorites: { en: 'Add to Favorites', it: 'Aggiungi ai Preferiti', es: 'Añadir a Favoritos', pt: 'Adicionar aos Favoritos', fr: 'Ajouter aux Favoris' },
  removeFromFavorites: { en: 'Remove from Favorites', it: 'Rimuovi dai Preferiti', es: 'Quitar de Favoritos', pt: 'Remover dos Favoritos', fr: 'Retirer des Favoris' },
  readOnline: { en: 'Read the Bible Online', it: 'Leggi la Bibbia Online', es: 'Leer la Biblia en Línea', pt: 'Ler a Bíblia Online', fr: 'Lire la Bible en Ligne' },
  chapter: { en: 'Chapter', it: 'Capitolo', es: 'Capítulo', pt: 'Capítulo', fr: 'Chapitre' },
  verse: { en: 'Verse', it: 'Versetto', es: 'Versículo', pt: 'Versículo', fr: 'Verset' },

  // Quiz
  selectQuiz: { en: 'Select a Quiz', it: 'Seleziona un Quiz', es: 'Seleccionar un Quiz', pt: 'Selecionar um Quiz', fr: 'Sélectionner un Quiz' },
  pentateuch: { en: 'Pentateuch', it: 'Pentateuco', es: 'Pentateuco', pt: 'Pentateuco', fr: 'Pentateuque' },
  minorProphets: { en: 'Minor Prophets', it: 'Profeti Minori', es: 'Profetas Menores', pt: 'Profetas Menores', fr: 'Petits Prophètes' },
  oldTestament: { en: 'Old Testament', it: 'Antico Testamento', es: 'Antiguo Testamento', pt: 'Antigo Testamento', fr: 'Ancien Testament' },
  fourGospels: { en: 'Four Gospels', it: 'Quattro Vangeli', es: 'Cuatro Evangelios', pt: 'Quatro Evangelhos', fr: 'Quatre Évangiles' },
  paulineLetters: { en: 'Pauline Letters', it: 'Lettere Paoline', es: 'Cartas Paulinas', pt: 'Cartas Paulinas', fr: 'Lettres Pauliniennes' },
  newTestament: { en: 'New Testament', it: 'Nuovo Testamento', es: 'Nuevo Testamento', pt: 'Novo Testamento', fr: 'Nouveau Testament' },
  fullQuiz: { en: 'Complete 100 Questions', it: '100 Domande Complete', es: '100 Preguntas Completas', pt: '100 Perguntas Completas', fr: '100 Questions Complètes' },
  randomQuiz: { en: 'Random 100 Questions', it: '100 Domande Casuali', es: '100 Preguntas Aleatorias', pt: '100 Perguntas Aleatórias', fr: '100 Questions Aléatoires' },
  questionsCount: { en: 'questions', it: 'domande', es: 'preguntas', pt: 'perguntas', fr: 'questions' },

  // Quiz Game
  question: { en: 'Question', it: 'Domanda', es: 'Pregunta', pt: 'Pergunta', fr: 'Question' },
  score: { en: 'Score', it: 'Punteggio', es: 'Puntuación', pt: 'Pontuação', fr: 'Score' },
  difficulty: { en: 'Difficulty', it: 'Difficoltà', es: 'Dificultad', pt: 'Dificuldade', fr: 'Difficulté' },
  easy: { en: 'Easy', it: 'Facile', es: 'Fácil', pt: 'Fácil', fr: 'Facile' },
  medium: { en: 'Medium', it: 'Medio', es: 'Medio', pt: 'Médio', fr: 'Moyen' },
  hard: { en: 'Hard', it: 'Difficile', es: 'Difícil', pt: 'Difícil', fr: 'Difficile' },
  correct: { en: 'Correct!', it: 'Corretto!', es: '¡Correcto!', pt: 'Correto!', fr: 'Correct!' },
  incorrect: { en: 'Incorrect', it: 'Sbagliato', es: 'Incorrecto', pt: 'Incorreto', fr: 'Incorrect' },
  nextQuestion: { en: 'Next Question', it: 'Prossima Domanda', es: 'Siguiente Pregunta', pt: 'Próxima Pergunta', fr: 'Question Suivante' },
  finishQuiz: { en: 'Finish Quiz', it: 'Termina Quiz', es: 'Terminar Quiz', pt: 'Terminar Quiz', fr: 'Terminer Quiz' },
  quizComplete: { en: 'Quiz Complete!', it: 'Quiz Completato!', es: '¡Quiz Completado!', pt: 'Quiz Completo!', fr: 'Quiz Terminé!' },
  yourScore: { en: 'Your Score', it: 'Il Tuo Punteggio', es: 'Tu Puntuación', pt: 'Sua Pontuação', fr: 'Votre Score' },
  percentage: { en: 'Percentage', it: 'Percentuale', es: 'Porcentaje', pt: 'Porcentagem', fr: 'Pourcentage' },
  tryAgain: { en: 'Try Again', it: 'Riprova', es: 'Intentar de Nuevo', pt: 'Tentar Novamente', fr: 'Réessayer' },
  backToQuizzes: { en: 'Back to Quizzes', it: 'Torna ai Quiz', es: 'Volver a Quizzes', pt: 'Voltar aos Quizzes', fr: 'Retour aux Quiz' },

  // Difficulty explanation
  difficultyExplanation: { 
    en: 'Difficulty adapts: +3 correct in a row → harder, 2 errors in last 5 → easier', 
    it: 'Difficoltà adattiva: +3 corrette di fila → più difficile, 2 errori nelle ultime 5 → più facile',
    es: 'Dificultad adaptativa: +3 correctas seguidas → más difícil, 2 errores en las últimas 5 → más fácil',
    pt: 'Dificuldade adaptativa: +3 corretas seguidas → mais difícil, 2 erros nas últimas 5 → mais fácil',
    fr: 'Difficulté adaptative: +3 correctes d\'affilée → plus difficile, 2 erreurs sur les 5 dernières → plus facile'
  },

  // Motivational messages
  motivational1: { en: 'Keep going! You\'re doing great!', it: 'Continua così! Stai andando alla grande!', es: '¡Sigue así! ¡Lo estás haciendo genial!', pt: 'Continue assim! Você está indo muito bem!', fr: 'Continuez! Vous vous en sortez très bien!' },
  motivational2: { en: 'The Lord is your strength!', it: 'Il Signore è la tua forza!', es: '¡El Señor es tu fortaleza!', pt: 'O Senhor é a sua força!', fr: 'Le Seigneur est votre force!' },
  motivational3: { en: 'Faith moves mountains!', it: 'La fede muove le montagne!', es: '¡La fe mueve montañas!', pt: 'A fé move montanhas!', fr: 'La foi déplace les montagnes!' },
  motivational4: { en: 'Wisdom comes from above!', it: 'La saggezza viene dall\'alto!', es: '¡La sabiduría viene de lo alto!', pt: 'A sabedoria vem do alto!', fr: 'La sagesse vient d\'en haut!' },
  motivational5: { en: 'You are blessed!', it: 'Sei benedetto!', es: '¡Eres bendecido!', pt: 'Você é abençoado!', fr: 'Vous êtes béni!' },

  // Badges
  badgeEarned: { en: 'Badge Earned!', it: 'Distintivo Ottenuto!', es: '¡Insignia Ganada!', pt: 'Distintivo Conquistado!', fr: 'Badge Gagné!' },
  noBadges: { en: 'No badges yet. Start learning!', it: 'Nessun distintivo ancora. Inizia ad imparare!', es: 'Sin insignias aún. ¡Empieza a aprender!', pt: 'Sem distintivos ainda. Comece a aprender!', fr: 'Pas encore de badges. Commencez à apprendre!' },
  
  // Badge names
  firstQuiz: { en: 'First Steps', it: 'Primi Passi', es: 'Primeros Pasos', pt: 'Primeiros Passos', fr: 'Premiers Pas' },
  perfectScore: { en: 'Perfect Score', it: 'Punteggio Perfetto', es: 'Puntuación Perfecta', pt: 'Pontuação Perfeita', fr: 'Score Parfait' },
  bibleExplorer: { en: 'Bible Explorer', it: 'Esploratore della Bibbia', es: 'Explorador de la Biblia', pt: 'Explorador da Bíblia', fr: 'Explorateur de la Bible' },
  quizMaster: { en: 'Quiz Master', it: 'Maestro del Quiz', es: 'Maestro del Quiz', pt: 'Mestre do Quiz', fr: 'Maître du Quiz' },
  dedicated: { en: 'Dedicated Learner', it: 'Studente Dedicato', es: 'Estudiante Dedicado', pt: 'Estudante Dedicado', fr: 'Apprenant Dévoué' },
};

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
  languages: { code: Language; name: string; flag: string }[];
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const languageOptions: { code: Language; name: string; flag: string }[] = [
  { code: 'en', name: 'English', flag: '🇬🇧' },
  { code: 'it', name: 'Italiano', flag: '🇮🇹' },
  { code: 'es', name: 'Español', flag: '🇪🇸' },
  { code: 'pt', name: 'Português', flag: '🇧🇷' },
  { code: 'fr', name: 'Français', flag: '🇫🇷' },
];

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>(() => {
    const saved = localStorage.getItem('bible-app-language');
    return (saved as Language) || 'en';
  });

  const handleSetLanguage = useCallback((lang: Language) => {
    setLanguage(lang);
    localStorage.setItem('bible-app-language', lang);
  }, []);

  const t = useCallback((key: string): string => {
    return translations[key]?.[language] || key;
  }, [language]);

  return (
    <LanguageContext.Provider value={{ 
      language, 
      setLanguage: handleSetLanguage, 
      t,
      languages: languageOptions 
    }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
