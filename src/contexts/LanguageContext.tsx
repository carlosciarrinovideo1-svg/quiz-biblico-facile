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
  appTitle: { en: 'Scripture Study', it: 'Studio delle Scritture', es: 'Estudio de las Escrituras', pt: 'Estudo das Escrituras', fr: 'Étude des Écritures' },
  footerText: { en: 'Scripture Study App • Learn, Grow, Believe', it: 'App Studio delle Scritture • Impara, Cresci, Credi', es: 'App Estudio de las Escrituras • Aprende, Crece, Cree', pt: 'App Estudo das Escrituras • Aprenda, Cresça, Creia', fr: 'App Étude des Écritures • Apprendre, Grandir, Croire' },
  welcomeJourney: { en: 'Welcome to your spiritual journey', it: 'Benvenuto nel tuo viaggio spirituale', es: 'Bienvenido a tu viaje espiritual', pt: 'Bem-vindo à sua jornada espiritual', fr: 'Bienvenue dans votre voyage spirituel' },
  quizzesCompletedStat: { en: 'Quizzes Completed', it: 'Quiz Completati', es: 'Cuestionarios Completados', pt: 'Quizzes Completados', fr: 'Quiz Terminés' },
  badgesEarnedStat: { en: 'Badges Earned', it: 'Distintivi Ottenuti', es: 'Insignias Ganadas', pt: 'Distintivos Conquistados', fr: 'Badges Gagnés' },
  favoriteVersesStat: { en: 'Favorite Verses', it: 'Versetti Preferiti', es: 'Versículos Favoritos', pt: 'Versículos Favoritos', fr: 'Versets Favoris' },
  readBibleDescription: { en: 'Read and explore Scripture with multiple versions', it: 'Leggi ed esplora le Scritture con più versioni', es: 'Lee y explora las Escrituras con múltiples versiones', pt: 'Leia e explore as Escrituras com múltiplas versões', fr: 'Lisez et explorez les Écritures avec plusieurs versions' },
  quizDescription2: { en: 'Test your knowledge with adaptive quizzes', it: 'Metti alla prova le tue conoscenze con quiz adattivi', es: 'Pon a prueba tu conocimiento con cuestionarios adaptativos', pt: 'Teste seu conhecimento com quizzes adaptativos', fr: 'Testez vos connaissances avec des quiz adaptatifs' },
  badgesDescription2: { en: 'Earn badges and track your progress', it: 'Guadagna distintivi e monitora i tuoi progressi', es: 'Gana insignias y rastrea tu progreso', pt: 'Ganhe distintivos e acompanhe seu progresso', fr: 'Gagnez des badges et suivez vos progrès' },
  readBibleOnline: { en: 'Want to read the full Bible online?', it: 'Vuoi leggere la Bibbia completa online?', es: '¿Quieres leer la Biblia completa en línea?', pt: 'Quer ler a Bíblia completa online?', fr: 'Voulez-vous lire la Bible complète en ligne?' },

  // Bible Reader
  selectVersion: { en: 'Select Version', it: 'Seleziona Versione', es: 'Seleccionar Versión', pt: 'Selecionar Versão', fr: 'Sélectionner Version' },
  searchBible: { en: 'Search the Bible...', it: 'Cerca nella Bibbia...', es: 'Buscar en la Biblia...', pt: 'Pesquisar na Bíblia...', fr: 'Rechercher dans la Bible...' },
  favorites: { en: 'Favorites', it: 'Preferiti', es: 'Favoritos', pt: 'Favoritos', fr: 'Favoris' },
  addToFavorites: { en: 'Add to Favorites', it: 'Aggiungi ai Preferiti', es: 'Añadir a Favoritos', pt: 'Adicionar aos Favoritos', fr: 'Ajouter aux Favoris' },
  removeFromFavorites: { en: 'Remove from Favorites', it: 'Rimuovi dai Preferiti', es: 'Quitar de Favoritos', pt: 'Remover dos Favoritos', fr: 'Retirer des Favoris' },
  readOnline: { en: 'Read the Bible', it: 'Leggi la Bibbia', es: 'Leer la Biblia', pt: 'Ler a Bíblia', fr: 'Lire la Bible' },
  chapter: { en: 'Chapter', it: 'Capitolo', es: 'Capítulo', pt: 'Capítulo', fr: 'Chapitre' },
  verse: { en: 'Verse', it: 'Versetto', es: 'Versículo', pt: 'Versículo', fr: 'Verset' },
  read: { en: 'Read', it: 'Leggi', es: 'Leer', pt: 'Ler', fr: 'Lire' },
  noFavoritesYet: { en: 'No favorite verses yet.', it: 'Nessun versetto preferito ancora.', es: 'Sin versículos favoritos aún.', pt: 'Sem versículos favoritos ainda.', fr: 'Pas de versets favoris encore.' },
  clickHeartToSave: { en: 'Click the heart icon while reading to save verses.', it: 'Clicca l\'icona del cuore durante la lettura per salvare i versetti.', es: 'Haz clic en el icono del corazón mientras lees para guardar versículos.', pt: 'Clique no ícone do coração enquanto lê para salvar versículos.', fr: 'Cliquez sur l\'icône du cœur pendant la lecture pour sauvegarder les versets.' },

  // Quiz Categories
  selectQuiz: { en: 'Select a Quiz', it: 'Seleziona un Quiz', es: 'Seleccionar un Quiz', pt: 'Selecionar um Quiz', fr: 'Sélectionner un Quiz' },
  pentateuch: { en: 'Pentateuch', it: 'Pentateuco', es: 'Pentateuco', pt: 'Pentateuco', fr: 'Pentateuque' },
  minorProphets: { en: 'Minor Prophets', it: 'Profeti Minori', es: 'Profetas Menores', pt: 'Profetas Menores', fr: 'Petits Prophètes' },
  oldTestament: { en: 'Old Testament', it: 'Antico Testamento', es: 'Antiguo Testamento', pt: 'Antigo Testamento', fr: 'Ancien Testament' },
  fourGospels: { en: 'Four Gospels', it: 'Quattro Vangeli', es: 'Cuatro Evangelios', pt: 'Quatro Evangelhos', fr: 'Quatre Évangiles' },
  paulineLetters: { en: 'Pauline Letters', it: 'Lettere Paoline', es: 'Cartas Paulinas', pt: 'Cartas Paulinas', fr: 'Lettres Pauliniennes' },
  newTestament: { en: 'New Testament', it: 'Nuovo Testamento', es: 'Nuevo Testamento', pt: 'Novo Testamento', fr: 'Nouveau Testament' },
  apocalypse: { en: 'Revelation', it: 'Apocalisse', es: 'Apocalipsis', pt: 'Apocalipse', fr: 'Apocalypse' },
  actsApostles: { en: 'Acts of the Apostles', it: 'Atti degli Apostoli', es: 'Hechos de los Apóstoles', pt: 'Atos dos Apóstolos', fr: 'Actes des Apôtres' },
  biblicalCharacters: { en: 'Biblical Characters', it: 'Personaggi Biblici', es: 'Personajes Bíblicos', pt: 'Personagens Bíblicos', fr: 'Personnages Bibliques' },
  fullQuiz: { en: 'Complete 100 Questions', it: '100 Domande Complete', es: '100 Preguntas Completas', pt: '100 Perguntas Completas', fr: '100 Questions Complètes' },
  randomQuiz: { en: 'Random 100 Questions', it: '100 Domande Casuali', es: '100 Preguntas Aleatorias', pt: '100 Perguntas Aleatórias', fr: '100 Questions Aléatoires' },
  questionsCount: { en: 'questions', it: 'domande', es: 'preguntas', pt: 'perguntas', fr: 'questions' },
  thematicQuizzes: { en: 'Thematic Quizzes', it: 'Quiz Tematici', es: 'Cuestionarios Temáticos', pt: 'Quizzes Temáticos', fr: 'Quiz Thématiques' },
  challengeQuizzes: { en: 'Challenge Quizzes', it: 'Quiz Sfida', es: 'Cuestionarios de Desafío', pt: 'Quizzes Desafio', fr: 'Quiz Défi' },
  quizDescription: { en: 'Choose a category to test your knowledge. Questions adapt to your level!', it: 'Scegli una categoria per mettere alla prova le tue conoscenze. Le domande si adattano al tuo livello!', es: '¡Elige una categoría para poner a prueba tu conocimiento. Las preguntas se adaptan a tu nivel!', pt: 'Escolha uma categoria para testar seu conhecimento. As perguntas se adaptam ao seu nível!', fr: 'Choisissez une catégorie pour tester vos connaissances. Les questions s\'adaptent à votre niveau!' },
  pointsCorrect: { en: '+5 points correct', it: '+5 punti corretti', es: '+5 puntos correctos', pt: '+5 pontos corretos', fr: '+5 points corrects' },
  pointsIncorrect: { en: '-1 point incorrect', it: '-1 punto sbagliato', es: '-1 punto incorrecto', pt: '-1 ponto incorreto', fr: '-1 point incorrect' },
  
  // Quiz categories descriptions
  pentateuchDesc: { en: 'Genesis, Exodus, Leviticus, Numbers, Deuteronomy', it: 'Genesi, Esodo, Levitico, Numeri, Deuteronomio', es: 'Génesis, Éxodo, Levítico, Números, Deuteronomio', pt: 'Gênesis, Êxodo, Levítico, Números, Deuteronômio', fr: 'Genèse, Exode, Lévitique, Nombres, Deutéronome' },
  minorProphetsDesc: { en: 'Hosea, Joel, Amos, Obadiah, Jonah, Micah...', it: 'Osea, Gioele, Amos, Abdia, Giona, Michea...', es: 'Oseas, Joel, Amós, Abdías, Jonás, Miqueas...', pt: 'Oséias, Joel, Amós, Obadias, Jonas, Miquéias...', fr: 'Osée, Joël, Amos, Abdias, Jonas, Michée...' },
  oldTestamentDesc: { en: 'General knowledge of the Old Testament', it: 'Conoscenza generale dell\'Antico Testamento', es: 'Conocimiento general del Antiguo Testamento', pt: 'Conhecimento geral do Antigo Testamento', fr: 'Connaissances générales de l\'Ancien Testament' },
  fourGospelsDesc: { en: 'Matthew, Mark, Luke, John', it: 'Matteo, Marco, Luca, Giovanni', es: 'Mateo, Marcos, Lucas, Juan', pt: 'Mateus, Marcos, Lucas, João', fr: 'Matthieu, Marc, Luc, Jean' },
  paulineLettersDesc: { en: 'Romans, Corinthians, Galatians, Ephesians...', it: 'Romani, Corinzi, Galati, Efesini...', es: 'Romanos, Corintios, Gálatas, Efesios...', pt: 'Romanos, Coríntios, Gálatas, Efésios...', fr: 'Romains, Corinthiens, Galates, Éphésiens...' },
  newTestamentDesc: { en: 'General knowledge of the New Testament', it: 'Conoscenza generale del Nuovo Testamento', es: 'Conocimiento general del Nuevo Testamento', pt: 'Conhecimento geral do Novo Testamento', fr: 'Connaissances générales du Nouveau Testament' },
  apocalypseDesc: { en: 'The Book of Revelation by John', it: 'Il Libro dell\'Apocalisse di Giovanni', es: 'El Libro del Apocalipsis de Juan', pt: 'O Livro do Apocalipse de João', fr: 'Le Livre de l\'Apocalypse de Jean' },
  actsApostlesDesc: { en: 'The early church and apostolic journeys', it: 'La chiesa primitiva e i viaggi apostolici', es: 'La iglesia primitiva y los viajes apostólicos', pt: 'A igreja primitiva e as viagens apostólicas', fr: 'L\'église primitive et les voyages apostoliques' },
  biblicalCharactersDesc: { en: 'Famous people from the Bible', it: 'Personaggi famosi della Bibbia', es: 'Personajes famosos de la Biblia', pt: 'Personagens famosos da Bíblia', fr: 'Personnages célèbres de la Bible' },
  fullQuizDesc: { en: 'Complete challenge with all questions', it: 'Sfida completa con tutte le domande', es: 'Desafío completo con todas las preguntas', pt: 'Desafio completo com todas as perguntas', fr: 'Défi complet avec toutes les questions' },
  randomQuizDesc: { en: 'Random selection from all categories', it: 'Selezione casuale da tutte le categorie', es: 'Selección aleatoria de todas las categorías', pt: 'Seleção aleatória de todas as categorias', fr: 'Sélection aléatoire de toutes les catégories' },

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
  correctAnswer: { en: 'Correct answer', it: 'Risposta corretta', es: 'Respuesta correcta', pt: 'Resposta correta', fr: 'Réponse correcte' },
  reference: { en: 'Reference', it: 'Riferimento', es: 'Referencia', pt: 'Referência', fr: 'Référence' },
  noQuestionsAvailable: { en: 'No questions available for this category.', it: 'Nessuna domanda disponibile per questa categoria.', es: 'No hay preguntas disponibles para esta categoría.', pt: 'Nenhuma pergunta disponível para esta categoria.', fr: 'Aucune question disponible pour cette catégorie.' },

  // Study Mode
  studyMode: { en: 'Study Mode', it: 'Modalità Studio', es: 'Modo Estudio', pt: 'Modo Estudo', fr: 'Mode Étude' },
  studyModeOn: { en: 'Study Mode ON', it: 'Modalità Studio ON', es: 'Modo Estudio ON', pt: 'Modo Estudo ON', fr: 'Mode Étude ON' },
  studyModeOff: { en: 'Study Mode OFF', it: 'Modalità Studio OFF', es: 'Modo Estudio OFF', pt: 'Modo Estudo OFF', fr: 'Mode Étude OFF' },
  biblicalExplanation: { en: 'Biblical Explanation', it: 'Spiegazione Biblica', es: 'Explicación Bíblica', pt: 'Explicação Bíblica', fr: 'Explication Biblique' },
  learnMore: { en: 'Learn More', it: 'Approfondisci', es: 'Aprende Más', pt: 'Saiba Mais', fr: 'En Savoir Plus' },

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

  // Badges page
  badgeEarned: { en: 'Badge Earned!', it: 'Distintivo Ottenuto!', es: '¡Insignia Ganada!', pt: 'Distintivo Conquistado!', fr: 'Badge Gagné!' },
  noBadges: { en: 'No badges yet. Start learning!', it: 'Nessun distintivo ancora. Inizia ad imparare!', es: 'Sin insignias aún. ¡Empieza a aprender!', pt: 'Sem distintivos ainda. Comece a aprender!', fr: 'Pas encore de badges. Commencez à apprendre!' },
  badgesDescription: { en: 'Earn badges by completing quizzes and reading Scripture. Track your progress!', it: 'Guadagna distintivi completando quiz e leggendo le Scritture. Monitora i tuoi progressi!', es: '¡Gana insignias completando cuestionarios y leyendo las Escrituras. Sigue tu progreso!', pt: 'Ganhe distintivos completando quizzes e lendo as Escrituras. Acompanhe seu progresso!', fr: 'Gagnez des badges en complétant des quiz et en lisant les Écritures. Suivez vos progrès!' },
  allBadges: { en: 'All Badges', it: 'Tutti i Distintivi', es: 'Todas las Insignias', pt: 'Todos os Distintivos', fr: 'Tous les Badges' },
  recentResults: { en: 'Recent Quiz Results', it: 'Risultati Quiz Recenti', es: 'Resultados de Quiz Recientes', pt: 'Resultados de Quiz Recentes', fr: 'Résultats de Quiz Récents' },
  quizzesCompleted: { en: 'Quizzes Completed', it: 'Quiz Completati', es: 'Cuestionarios Completados', pt: 'Quizzes Completados', fr: 'Quiz Terminés' },
  chaptersRead: { en: 'Chapters Read', it: 'Capitoli Letti', es: 'Capítulos Leídos', pt: 'Capítulos Lidos', fr: 'Chapitres Lus' },
  earned: { en: 'Earned', it: 'Ottenuto', es: 'Ganado', pt: 'Conquistado', fr: 'Gagné' },
  
  // Badge names
  firstQuiz: { en: 'First Steps', it: 'Primi Passi', es: 'Primeros Pasos', pt: 'Primeiros Passos', fr: 'Premiers Pas' },
  perfectScore: { en: 'Perfect Score', it: 'Punteggio Perfetto', es: 'Puntuación Perfecta', pt: 'Pontuação Perfeita', fr: 'Score Parfait' },
  bibleExplorer: { en: 'Bible Explorer', it: 'Esploratore della Bibbia', es: 'Explorador de la Biblia', pt: 'Explorador da Bíblia', fr: 'Explorateur de la Bible' },
  quizMaster: { en: 'Quiz Master', it: 'Maestro del Quiz', es: 'Maestro del Quiz', pt: 'Mestre do Quiz', fr: 'Maître du Quiz' },
  dedicated: { en: 'Dedicated Learner', it: 'Studente Dedicato', es: 'Estudiante Dedicado', pt: 'Estudante Dedicado', fr: 'Apprenant Dévoué' },
  
  // Badge descriptions
  firstQuizDesc: { en: 'Complete your first quiz', it: 'Completa il tuo primo quiz', es: 'Completa tu primer cuestionario', pt: 'Complete seu primeiro quiz', fr: 'Terminez votre premier quiz' },
  perfectScoreDesc: { en: 'Get 100% on any quiz', it: 'Ottieni il 100% in qualsiasi quiz', es: 'Obtén 100% en cualquier cuestionario', pt: 'Obtenha 100% em qualquer quiz', fr: 'Obtenez 100% à n\'importe quel quiz' },
  bibleExplorerDesc: { en: 'Read 10 chapters', it: 'Leggi 10 capitoli', es: 'Lee 10 capítulos', pt: 'Leia 10 capítulos', fr: 'Lisez 10 chapitres' },
  quizMasterDesc: { en: 'Complete 10 quizzes', it: 'Completa 10 quiz', es: 'Completa 10 cuestionarios', pt: 'Complete 10 quizzes', fr: 'Terminez 10 quiz' },
  dedicatedDesc: { en: 'Complete 25 quizzes', it: 'Completa 25 quiz', es: 'Completa 25 cuestionarios', pt: 'Complete 25 quizzes', fr: 'Terminez 25 quiz' },

  // Badge tiers
  bronze: { en: 'Bronze', it: 'Bronzo', es: 'Bronce', pt: 'Bronze', fr: 'Bronze' },
  silver: { en: 'Silver', it: 'Argento', es: 'Plata', pt: 'Prata', fr: 'Argent' },
  gold: { en: 'Gold', it: 'Oro', es: 'Oro', pt: 'Ouro', fr: 'Or' },
  badgeTier: { en: 'Badge', it: 'Distintivo', es: 'Insignia', pt: 'Distintivo', fr: 'Badge' },

  // Share
  share: { en: 'Share', it: 'Condividi', es: 'Compartir', pt: 'Compartilhar', fr: 'Partager' },
  shareNative: { en: 'Share...', it: 'Condividi...', es: 'Compartir...', pt: 'Compartilhar...', fr: 'Partager...' },
  copyLink: { en: 'Copy Link', it: 'Copia Link', es: 'Copiar Enlace', pt: 'Copiar Link', fr: 'Copier le Lien' },
  linkCopied: { en: 'Link copied!', it: 'Link copiato!', es: '¡Enlace copiado!', pt: 'Link copiado!', fr: 'Lien copié!' },
  shareScore: { en: 'I scored {score}% on the Bible Quiz!', it: 'Ho ottenuto {score}% al Quiz Biblico!', es: '¡Obtuve {score}% en el Quiz Bíblico!', pt: 'Obtive {score}% no Quiz Bíblico!', fr: 'J\'ai obtenu {score}% au Quiz Biblique!' },

  // Theme
  theme: { en: 'Theme', it: 'Tema', es: 'Tema', pt: 'Tema', fr: 'Thème' },
  lightMode: { en: 'Light Mode', it: 'Modalità Chiara', es: 'Modo Claro', pt: 'Modo Claro', fr: 'Mode Clair' },
  darkMode: { en: 'Dark Mode', it: 'Modalità Scura', es: 'Modo Oscuro', pt: 'Modo Escuro', fr: 'Mode Sombre' },
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
