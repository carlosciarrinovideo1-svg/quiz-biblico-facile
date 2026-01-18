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
  historicalBooks: { en: 'Historical Books', it: 'Libri Storici', es: 'Libros Históricos', pt: 'Livros Históricos', fr: 'Livres Historiques' },
  wisdomBooks: { en: 'Wisdom Books', it: 'Libri Sapienziali', es: 'Libros Sapienciales', pt: 'Livros Sapienciais', fr: 'Livres de Sagesse' },
  majorProphets: { en: 'Major Prophets', it: 'Profeti Maggiori', es: 'Profetas Mayores', pt: 'Profetas Maiores', fr: 'Grands Prophètes' },
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
  historicalBooksDesc: { en: 'Joshua, Judges, Ruth, Samuel, Kings', it: 'Giosuè, Giudici, Rut, Samuele, Re', es: 'Josué, Jueces, Rut, Samuel, Reyes', pt: 'Josué, Juízes, Rute, Samuel, Reis', fr: 'Josué, Juges, Ruth, Samuel, Rois' },
  wisdomBooksDesc: { en: 'Job, Psalms, Proverbs, Ecclesiastes, Song of Solomon', it: 'Giobbe, Salmi, Proverbi, Ecclesiaste, Cantico', es: 'Job, Salmos, Proverbios, Eclesiastés, Cantar', pt: 'Jó, Salmos, Provérbios, Eclesiastes, Cântico', fr: 'Job, Psaumes, Proverbes, Ecclésiaste, Cantique' },
  majorProphetsDesc: { en: 'Isaiah, Jeremiah, Ezekiel, Daniel', it: 'Isaia, Geremia, Ezechiele, Daniele', es: 'Isaías, Jeremías, Ezequiel, Daniel', pt: 'Isaías, Jeremias, Ezequiel, Daniel', fr: 'Ésaïe, Jérémie, Ézéchiel, Daniel' },
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

  // Challenge Mode
  challengeMode: { en: 'Challenge Mode', it: 'Modalità Sfida', es: 'Modo Desafío', pt: 'Modo Desafio', fr: 'Mode Défi' },
  timeUp: { en: "Time's up!", it: 'Tempo scaduto!', es: '¡Se acabó el tiempo!', pt: 'Tempo esgotado!', fr: 'Temps écoulé!' },
  timerSeconds: { en: 'seconds', it: 'secondi', es: 'segundos', pt: 'segundos', fr: 'secondes' },
  
  // Leaderboard
  leaderboard: { en: 'Challenge Leaderboard', it: 'Classifica Sfide', es: 'Tabla de Clasificación', pt: 'Classificação de Desafios', fr: 'Classement Défis' },
  noLeaderboardScores: { en: 'Complete a challenge mode quiz to see your scores!', it: 'Completa un quiz in modalità sfida per vedere i tuoi punteggi!', es: '¡Completa un quiz en modo desafío para ver tus puntuaciones!', pt: 'Complete um quiz no modo desafio para ver suas pontuações!', fr: 'Complétez un quiz en mode défi pour voir vos scores!' },
  bestTime: { en: 'Best Time', it: 'Miglior Tempo', es: 'Mejor Tiempo', pt: 'Melhor Tempo', fr: 'Meilleur Temps' },
  bestByCategory: { en: 'Best by Category', it: 'Migliori per Categoria', es: 'Mejores por Categoría', pt: 'Melhores por Categoria', fr: 'Meilleurs par Catégorie' },
  recentBest: { en: 'Recent Best', it: 'Migliori Recenti', es: 'Mejores Recientes', pt: 'Melhores Recentes', fr: 'Meilleurs Récents' },
  attempts: { en: 'attempts', it: 'tentativi', es: 'intentos', pt: 'tentativas', fr: 'tentatives' },
  
  // Sound effects
  soundEffects: { en: 'Sound Effects', it: 'Effetti Sonori', es: 'Efectos de Sonido', pt: 'Efeitos Sonoros', fr: 'Effets Sonores' },
  
  // Verification Mode
  verificationMode: { en: 'Verification Mode', it: 'Modalità Verifica', es: 'Modo Verificación', pt: 'Modo Verificação', fr: 'Mode Vérification' },
  showReference: { en: 'Show Biblical Reference', it: 'Mostra Riferimento Biblico', es: 'Mostrar Referencia Bíblica', pt: 'Mostrar Referência Bíblica', fr: 'Afficher la Référence Biblique' },
  verifyInBible: { en: 'Verify in Bible', it: 'Verifica nella Bibbia', es: 'Verificar en la Biblia', pt: 'Verificar na Bíblia', fr: 'Vérifier dans la Bible' },
  verificationHint: { en: 'Click to open the biblical passage and verify the answer', it: 'Clicca per aprire il passaggio biblico e verificare la risposta', es: 'Haz clic para abrir el pasaje bíblico y verificar la respuesta', pt: 'Clique para abrir a passagem bíblica e verificar a resposta', fr: 'Cliquez pour ouvrir le passage biblique et vérifier la réponse' },
  
  // Accessibility
  selectLanguage: { en: 'Select language', it: 'Seleziona lingua', es: 'Seleccionar idioma', pt: 'Selecionar idioma', fr: 'Sélectionner la langue' },

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
  platinum: { en: 'Platinum', it: 'Platino', es: 'Platino', pt: 'Platina', fr: 'Platine' },
  diamond: { en: 'Diamond', it: 'Diamante', es: 'Diamante', pt: 'Diamante', fr: 'Diamant' },
  badgeTier: { en: 'Badge', it: 'Distintivo', es: 'Insignia', pt: 'Distintivo', fr: 'Badge' },

  // Badge category names
  generalBadges: { en: 'General', it: 'Generali', es: 'Generales', pt: 'Gerais', fr: 'Général' },
  speedBadges: { en: 'Speed', it: 'Velocità', es: 'Velocidad', pt: 'Velocidade', fr: 'Vitesse' },
  streakBadges: { en: 'Streak', it: 'Serie', es: 'Racha', pt: 'Sequência', fr: 'Série' },
  masteryBadges: { en: 'Mastery', it: 'Maestria', es: 'Maestría', pt: 'Maestria', fr: 'Maîtrise' },

  // Stats
  currentStreak: { en: 'Day Streak', it: 'Giorni di Fila', es: 'Días Seguidos', pt: 'Dias Seguidos', fr: 'Jours Consécutifs' },
  perfectScores: { en: 'Perfect Scores', it: 'Punteggi Perfetti', es: 'Puntuaciones Perfectas', pt: 'Pontuações Perfeitas', fr: 'Scores Parfaits' },
  settings: { en: 'Settings', it: 'Impostazioni', es: 'Configuración', pt: 'Configurações', fr: 'Paramètres' },

  // New badge names
  speedDemon: { en: 'Speed Demon', it: 'Demone della Velocità', es: 'Demonio de la Velocidad', pt: 'Demônio da Velocidade', fr: 'Démon de la Vitesse' },
  lightningFast: { en: 'Lightning Fast', it: 'Veloce come un Fulmine', es: 'Rápido como un Rayo', pt: 'Rápido como um Raio', fr: 'Rapide comme l\'Éclair' },
  timeMaster: { en: 'Time Master', it: 'Maestro del Tempo', es: 'Maestro del Tiempo', pt: 'Mestre do Tempo', fr: 'Maître du Temps' },
  streak3: { en: '3-Day Streak', it: 'Serie di 3 Giorni', es: 'Racha de 3 Días', pt: 'Sequência de 3 Dias', fr: 'Série de 3 Jours' },
  streak7: { en: '7-Day Streak', it: 'Serie di 7 Giorni', es: 'Racha de 7 Días', pt: 'Sequência de 7 Dias', fr: 'Série de 7 Jours' },
  streak30: { en: '30-Day Streak', it: 'Serie di 30 Giorni', es: 'Racha de 30 Días', pt: 'Sequência de 30 Dias', fr: 'Série de 30 Jours' },
  streak100: { en: '100-Day Streak', it: 'Serie di 100 Giorni', es: 'Racha de 100 Días', pt: 'Sequência de 100 Dias', fr: 'Série de 100 Jours' },
  perfect5: { en: '5 Perfect Scores', it: '5 Punteggi Perfetti', es: '5 Puntuaciones Perfectas', pt: '5 Pontuações Perfeitas', fr: '5 Scores Parfaits' },
  perfect10: { en: '10 Perfect Scores', it: '10 Punteggi Perfetti', es: '10 Puntuaciones Perfectas', pt: '10 Pontuações Perfeitas', fr: '10 Scores Parfaits' },
  perfect25: { en: '25 Perfect Scores', it: '25 Punteggi Perfetti', es: '25 Puntuaciones Perfectas', pt: '25 Pontuações Perfeitas', fr: '25 Scores Parfaits' },
  scriptureScholar: { en: 'Scripture Scholar', it: 'Studioso delle Scritture', es: 'Erudito de las Escrituras', pt: 'Estudioso das Escrituras', fr: 'Érudit des Écritures' },

  // Badge descriptions
  speedDemonDesc: { en: 'Complete a quiz in under 60 seconds', it: 'Completa un quiz in meno di 60 secondi', es: 'Completa un quiz en menos de 60 segundos', pt: 'Complete um quiz em menos de 60 segundos', fr: 'Terminez un quiz en moins de 60 secondes' },
  lightningFastDesc: { en: 'Complete a quiz in under 30 seconds', it: 'Completa un quiz in meno di 30 secondi', es: 'Completa un quiz en menos de 30 segundos', pt: 'Complete um quiz em menos de 30 segundos', fr: 'Terminez un quiz en moins de 30 secondes' },
  timeMasterDesc: { en: 'Complete 10 challenge mode quizzes', it: 'Completa 10 quiz in modalità sfida', es: 'Completa 10 quizzes en modo desafío', pt: 'Complete 10 quizzes no modo desafio', fr: 'Terminez 10 quiz en mode défi' },
  streak3Desc: { en: 'Maintain a 3-day streak', it: 'Mantieni una serie di 3 giorni', es: 'Mantén una racha de 3 días', pt: 'Mantenha uma sequência de 3 dias', fr: 'Maintenez une série de 3 jours' },
  streak7Desc: { en: 'Maintain a 7-day streak', it: 'Mantieni una serie di 7 giorni', es: 'Mantén una racha de 7 días', pt: 'Mantenha uma sequência de 7 dias', fr: 'Maintenez une série de 7 jours' },
  streak30Desc: { en: 'Maintain a 30-day streak', it: 'Mantieni una serie di 30 giorni', es: 'Mantén una racha de 30 días', pt: 'Mantenha uma sequência de 30 dias', fr: 'Maintenez une série de 30 jours' },
  streak100Desc: { en: 'Maintain a 100-day streak', it: 'Mantieni una serie di 100 giorni', es: 'Mantén una racha de 100 días', pt: 'Mantenha uma sequência de 100 dias', fr: 'Maintenez une série de 100 jours' },
  perfect5Desc: { en: 'Get 5 perfect scores', it: 'Ottieni 5 punteggi perfetti', es: 'Obtén 5 puntuaciones perfectas', pt: 'Obtenha 5 pontuações perfeitas', fr: 'Obtenez 5 scores parfaits' },
  perfect10Desc: { en: 'Get 10 perfect scores', it: 'Ottieni 10 punteggi perfetti', es: 'Obtén 10 puntuaciones perfectas', pt: 'Obtenha 10 pontuações perfeitas', fr: 'Obtenez 10 scores parfaits' },
  perfect25Desc: { en: 'Get 25 perfect scores', it: 'Ottieni 25 punteggi perfetti', es: 'Obtén 25 puntuaciones perfectas', pt: 'Obtenha 25 pontuações perfeitas', fr: 'Obtenez 25 scores parfaits' },
  scriptureScholarDesc: { en: 'Complete 100 quizzes', it: 'Completa 100 quiz', es: 'Completa 100 quizzes', pt: 'Complete 100 quizzes', fr: 'Terminez 100 quiz' },

  // Notifications
  notifications: { en: 'Notifications', it: 'Notifiche', es: 'Notificaciones', pt: 'Notificações', fr: 'Notifications' },
  notificationsDescription: { en: 'Set up reminders for daily challenges and Bible study', it: 'Imposta promemoria per sfide giornaliere e studio biblico', es: 'Configura recordatorios para desafíos diarios y estudio bíblico', pt: 'Configure lembretes para desafios diários e estudo bíblico', fr: 'Configurez des rappels pour les défis quotidiens et l\'étude biblique' },
  enableNotifications: { en: 'Enable Notifications', it: 'Abilita Notifiche', es: 'Habilitar Notificaciones', pt: 'Ativar Notificações', fr: 'Activer les Notifications' },
  notificationsEnabled: { en: 'Notifications enabled!', it: 'Notifiche abilitate!', es: '¡Notificaciones habilitadas!', pt: 'Notificações ativadas!', fr: 'Notifications activées!' },
  notificationsDenied: { en: 'Notifications denied', it: 'Notifiche negate', es: 'Notificaciones denegadas', pt: 'Notificações negadas', fr: 'Notifications refusées' },
  dailyChallengeNotification: { en: 'Daily Challenge', it: 'Sfida Giornaliera', es: 'Desafío Diario', pt: 'Desafio Diário', fr: 'Défi Quotidien' },
  dailyChallengeNotificationDesc: { en: 'Get notified about your daily Bible challenge', it: 'Ricevi notifiche sulla tua sfida biblica quotidiana', es: 'Recibe notificaciones sobre tu desafío bíblico diario', pt: 'Receba notificações sobre seu desafio bíblico diário', fr: 'Recevez des notifications sur votre défi biblique quotidien' },
  bibleStudyReminder: { en: 'Bible Study Reminder', it: 'Promemoria Studio Biblico', es: 'Recordatorio de Estudio Bíblico', pt: 'Lembrete de Estudo Bíblico', fr: 'Rappel d\'Étude Biblique' },
  bibleStudyReminderDesc: { en: 'Daily reminder to read Scripture', it: 'Promemoria giornaliero per leggere le Scritture', es: 'Recordatorio diario para leer las Escrituras', pt: 'Lembrete diário para ler as Escrituras', fr: 'Rappel quotidien pour lire les Écritures' },
  notificationsNotSupported: { en: 'Notifications not supported in this browser', it: 'Notifiche non supportate in questo browser', es: 'Notificaciones no soportadas en este navegador', pt: 'Notificações não suportadas neste navegador', fr: 'Notifications non prises en charge dans ce navigateur' },
  notificationsRequestPrompt: { en: 'Enable notifications to receive daily challenges and study reminders', it: 'Abilita le notifiche per ricevere sfide giornaliere e promemoria di studio', es: 'Habilita las notificaciones para recibir desafíos diarios y recordatorios de estudio', pt: 'Ative as notificações para receber desafios diários e lembretes de estudo', fr: 'Activez les notifications pour recevoir des défis quotidiens et des rappels d\'étude' },
  dailyChallengeEnabled: { en: 'Daily challenge notifications enabled', it: 'Notifiche sfida giornaliera abilitate', es: 'Notificaciones de desafío diario habilitadas', pt: 'Notificações de desafio diário ativadas', fr: 'Notifications de défi quotidien activées' },
  dailyChallengeDisabled: { en: 'Daily challenge notifications disabled', it: 'Notifiche sfida giornaliera disabilitate', es: 'Notificaciones de desafío diario deshabilitadas', pt: 'Notificações de desafio diário desativadas', fr: 'Notifications de défi quotidien désactivées' },
  bibleStudyReminderEnabled: { en: 'Bible study reminder enabled', it: 'Promemoria studio biblico abilitato', es: 'Recordatorio de estudio bíblico habilitado', pt: 'Lembrete de estudo bíblico ativado', fr: 'Rappel d\'étude biblique activé' },
  bibleStudyReminderDisabled: { en: 'Bible study reminder disabled', it: 'Promemoria studio biblico disabilitato', es: 'Recordatorio de estudio bíblico deshabilitado', pt: 'Lembrete de estudo bíblico desativado', fr: 'Rappel d\'étude biblique désactivé' },

  // Category Accuracy Stats
  noStatsYet: { en: 'No statistics yet', it: 'Nessuna statistica ancora', es: 'Sin estadísticas aún', pt: 'Sem estatísticas ainda', fr: 'Pas encore de statistiques' },
  completeQuizzesToSeeStats: { en: 'Complete quizzes to see your accuracy statistics', it: 'Completa dei quiz per vedere le tue statistiche di accuratezza', es: 'Completa cuestionarios para ver tus estadísticas de precisión', pt: 'Complete quizzes para ver suas estatísticas de precisão', fr: 'Complétez des quiz pour voir vos statistiques de précision' },
  overallAccuracy: { en: 'Overall Accuracy', it: 'Accuratezza Totale', es: 'Precisión Total', pt: 'Precisão Total', fr: 'Précision Globale' },
  correctAnswers: { en: 'Correct Answers', it: 'Risposte Corrette', es: 'Respuestas Correctas', pt: 'Respostas Corretas', fr: 'Réponses Correctes' },
  wrongAnswers: { en: 'Wrong Answers', it: 'Risposte Sbagliate', es: 'Respuestas Incorrectas', pt: 'Respostas Erradas', fr: 'Mauvaises Réponses' },
  categoriesPlayed: { en: 'Categories Played', it: 'Categorie Giocate', es: 'Categorías Jugadas', pt: 'Categorias Jogadas', fr: 'Catégories Jouées' },
  accuracyByCategory: { en: 'Accuracy by Category', it: 'Accuratezza per Categoria', es: 'Precisión por Categoría', pt: 'Precisão por Categoria', fr: 'Précision par Catégorie' },
  bestScore: { en: 'Best', it: 'Migliore', es: 'Mejor', pt: 'Melhor', fr: 'Meilleur' },
  worstScore: { en: 'Worst', it: 'Peggiore', es: 'Peor', pt: 'Pior', fr: 'Pire' },
  avgTime: { en: 'Avg Time', it: 'Tempo Medio', es: 'Tiempo Medio', pt: 'Tempo Médio', fr: 'Temps Moyen' },
  questionsCorrect: { en: 'correct', it: 'corrette', es: 'correctas', pt: 'corretas', fr: 'correctes' },
  recentTrend: { en: 'Recent', it: 'Recente', es: 'Reciente', pt: 'Recente', fr: 'Récent' },
  accuracyStats: { en: 'Accuracy Stats', it: 'Statistiche Accuratezza', es: 'Estadísticas de Precisión', pt: 'Estatísticas de Precisão', fr: 'Statistiques de Précision' },
  accuracyTrends: { en: 'Accuracy Trends Over Time', it: 'Andamento Accuratezza nel Tempo', es: 'Tendencias de Precisión en el Tiempo', pt: 'Tendências de Precisão ao Longo do Tempo', fr: 'Tendances de Précision dans le Temps' },
  attemptNumber: { en: 'Attempt #', it: 'Tentativo #', es: 'Intento #', pt: 'Tentativa #', fr: 'Tentative #' },
  attempt: { en: 'Attempt', it: 'Tentativo', es: 'Intento', pt: 'Tentativa', fr: 'Tentative' },
  all: { en: 'All', it: 'Tutti', es: 'Todos', pt: 'Todos', fr: 'Tous' },

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
