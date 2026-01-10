import { apocalypseQuestions } from './questions/apocalypseQuestions';
import { actsQuestions } from './questions/actsQuestions';
import { biblicalCharactersQuestions } from './questions/biblicalCharactersQuestions';
import { gospelsQuestions } from './questions/gospelsQuestions';
import { prophetsQuestions } from './questions/prophetsQuestions';
import { pentateuchQuestions } from './questions/pentateuchQuestions';
import { paulineQuestions } from './questions/paulineQuestions';
import { historicalBooksQuestions } from './questions/historicalBooksQuestions';
import { QuizQuestion } from './types';

export type { QuizQuestion } from './types';

export const quizCategories = [
  { id: 'pentateuch', questions: 100 },
  { id: 'historicalBooks', questions: 100 },
  { id: 'minorProphets', questions: 100 },
  { id: 'oldTestament', questions: 100 },
  { id: 'fourGospels', questions: 100 },
  { id: 'paulineLetters', questions: 100 },
  { id: 'newTestament', questions: 100 },
  { id: 'apocalypse', questions: 100 },
  { id: 'actsApostles', questions: 100 },
  { id: 'biblicalCharacters', questions: 100 },
  { id: 'fullQuiz', questions: 100 },
  { id: 'randomQuiz', questions: 100 },
];

export const allQuestions: QuizQuestion[] = [
  // Pentateuch (Genesis, Exodus, Leviticus, Numbers, Deuteronomy) - 25 questions
  { id: 'p1', question: 'Who built the ark in Genesis?', options: ['Abraham', 'Moses', 'Noah', 'David'], correctIndex: 2, category: 'pentateuch', difficulty: 'easy', reference: 'Genesis 6:14-22' },
  { id: 'p2', question: 'How many days did God take to create the world?', options: ['5', '6', '7', '10'], correctIndex: 1, category: 'pentateuch', difficulty: 'easy', reference: 'Genesis 1:31-2:2' },
  { id: 'p3', question: 'What was the first plague of Egypt?', options: ['Frogs', 'Blood', 'Locusts', 'Darkness'], correctIndex: 1, category: 'pentateuch', difficulty: 'medium', reference: 'Exodus 7:20' },
  { id: 'p4', question: 'Who was sold into slavery by his brothers?', options: ['Benjamin', 'Joseph', 'Reuben', 'Judah'], correctIndex: 1, category: 'pentateuch', difficulty: 'easy', reference: 'Genesis 37:28' },
  { id: 'p5', question: 'What mountain did Moses receive the Ten Commandments on?', options: ['Mount Carmel', 'Mount Sinai', 'Mount Zion', 'Mount Nebo'], correctIndex: 1, category: 'pentateuch', difficulty: 'medium', reference: 'Exodus 19:20' },
  { id: 'p6', question: 'Who was the wife of Abraham?', options: ['Rachel', 'Leah', 'Sarah', 'Rebekah'], correctIndex: 2, category: 'pentateuch', difficulty: 'easy', reference: 'Genesis 17:15' },
  { id: 'p7', question: 'How many tribes of Israel were there?', options: ['10', '12', '14', '7'], correctIndex: 1, category: 'pentateuch', difficulty: 'easy', reference: 'Genesis 49:28' },
  { id: 'p8', question: 'What was the name of Moses\' brother?', options: ['Joshua', 'Aaron', 'Caleb', 'Eleazar'], correctIndex: 1, category: 'pentateuch', difficulty: 'easy', reference: 'Exodus 4:14' },
  { id: 'p9', question: 'Which book contains the Ten Commandments?', options: ['Genesis', 'Exodus', 'Leviticus', 'Numbers'], correctIndex: 1, category: 'pentateuch', difficulty: 'medium', reference: 'Exodus 20:1-17' },
  { id: 'p10', question: 'What did God create on the fourth day?', options: ['Animals', 'Sun, moon and stars', 'Man', 'Sea creatures'], correctIndex: 1, category: 'pentateuch', difficulty: 'medium', reference: 'Genesis 1:14-19' },
  { id: 'p11', question: 'Who was the father of Jacob and Esau?', options: ['Abraham', 'Isaac', 'Noah', 'Adam'], correctIndex: 1, category: 'pentateuch', difficulty: 'easy', reference: 'Genesis 25:21-26' },
  { id: 'p12', question: 'What was the last plague of Egypt?', options: ['Death of firstborn', 'Darkness', 'Locusts', 'Boils'], correctIndex: 0, category: 'pentateuch', difficulty: 'medium', reference: 'Exodus 12:29' },
  { id: 'p13', question: 'How many years did the Israelites wander in the wilderness?', options: ['20', '30', '40', '50'], correctIndex: 2, category: 'pentateuch', difficulty: 'medium', reference: 'Numbers 14:33' },
  { id: 'p14', question: 'Who was chosen to lead Israel after Moses?', options: ['Aaron', 'Caleb', 'Joshua', 'Eleazar'], correctIndex: 2, category: 'pentateuch', difficulty: 'medium', reference: 'Deuteronomy 31:7-8' },
  { id: 'p15', question: 'What was the name of the garden where Adam and Eve lived?', options: ['Paradise', 'Eden', 'Canaan', 'Babylon'], correctIndex: 1, category: 'pentateuch', difficulty: 'easy', reference: 'Genesis 2:8' },
  { id: 'p16', question: 'How old was Abraham when Isaac was born?', options: ['75', '90', '100', '120'], correctIndex: 2, category: 'pentateuch', difficulty: 'hard', reference: 'Genesis 21:5' },
  { id: 'p17', question: 'What did Esau sell his birthright for?', options: ['Gold', 'A bowl of stew', 'Land', 'Sheep'], correctIndex: 1, category: 'pentateuch', difficulty: 'medium', reference: 'Genesis 25:29-34' },
  { id: 'p18', question: 'Who was thrown into a pit by his brothers?', options: ['Benjamin', 'Joseph', 'Judah', 'Dan'], correctIndex: 1, category: 'pentateuch', difficulty: 'easy', reference: 'Genesis 37:24' },
  { id: 'p19', question: 'What was the sign of the covenant with Noah?', options: ['Circumcision', 'Rainbow', 'Sabbath', 'Passover'], correctIndex: 1, category: 'pentateuch', difficulty: 'medium', reference: 'Genesis 9:13' },
  { id: 'p20', question: 'How many plagues were sent upon Egypt?', options: ['7', '10', '12', '15'], correctIndex: 1, category: 'pentateuch', difficulty: 'easy', reference: 'Exodus 7-12' },
  { id: 'p21', question: 'What animal spoke to Balaam?', options: ['Serpent', 'Lion', 'Donkey', 'Raven'], correctIndex: 2, category: 'pentateuch', difficulty: 'medium', reference: 'Numbers 22:28' },
  { id: 'p22', question: 'Who was Moses\' father-in-law?', options: ['Jethro', 'Laban', 'Lot', 'Nahor'], correctIndex: 0, category: 'pentateuch', difficulty: 'medium', reference: 'Exodus 3:1' },
  { id: 'p23', question: 'What was the name of Moses\' sister?', options: ['Miriam', 'Deborah', 'Ruth', 'Hannah'], correctIndex: 0, category: 'pentateuch', difficulty: 'medium', reference: 'Exodus 15:20' },
  { id: 'p24', question: 'What did the Israelites worship while Moses was on the mountain?', options: ['Bronze serpent', 'Golden calf', 'Stone pillar', 'Wooden idol'], correctIndex: 1, category: 'pentateuch', difficulty: 'easy', reference: 'Exodus 32:4' },
  { id: 'p25', question: 'Who was the firstborn son of Adam and Eve?', options: ['Seth', 'Abel', 'Cain', 'Enoch'], correctIndex: 2, category: 'pentateuch', difficulty: 'easy', reference: 'Genesis 4:1' },

  // Minor Prophets - 25 questions
  { id: 'm1', question: 'Which prophet was swallowed by a great fish?', options: ['Amos', 'Jonah', 'Micah', 'Hosea'], correctIndex: 1, category: 'minorProphets', difficulty: 'easy', reference: 'Jonah 1:17' },
  { id: 'm2', question: 'Who prophesied "The Lord will be king over the whole earth"?', options: ['Zechariah', 'Malachi', 'Haggai', 'Joel'], correctIndex: 0, category: 'minorProphets', difficulty: 'hard', reference: 'Zechariah 14:9' },
  { id: 'm3', question: 'Which prophet married a prostitute as commanded by God?', options: ['Amos', 'Micah', 'Hosea', 'Joel'], correctIndex: 2, category: 'minorProphets', difficulty: 'medium', reference: 'Hosea 1:2' },
  { id: 'm4', question: 'Who said "But let justice roll on like a river"?', options: ['Amos', 'Micah', 'Habakkuk', 'Nahum'], correctIndex: 0, category: 'minorProphets', difficulty: 'medium', reference: 'Amos 5:24' },
  { id: 'm5', question: 'Which city did Jonah try to avoid going to?', options: ['Babylon', 'Jerusalem', 'Nineveh', 'Tarshish'], correctIndex: 2, category: 'minorProphets', difficulty: 'easy', reference: 'Jonah 1:2-3' },
  { id: 'm6', question: 'Which prophet spoke of locusts as a sign of judgment?', options: ['Joel', 'Amos', 'Micah', 'Nahum'], correctIndex: 0, category: 'minorProphets', difficulty: 'medium', reference: 'Joel 1:4' },
  { id: 'm7', question: 'Who prophesied the birth of the Messiah in Bethlehem?', options: ['Zechariah', 'Micah', 'Malachi', 'Haggai'], correctIndex: 1, category: 'minorProphets', difficulty: 'medium', reference: 'Micah 5:2' },
  { id: 'm8', question: 'Which book is the shortest in the Old Testament?', options: ['Jonah', 'Obadiah', 'Nahum', 'Habakkuk'], correctIndex: 1, category: 'minorProphets', difficulty: 'hard', reference: 'Obadiah (21 verses)' },
  { id: 'm9', question: 'Who encouraged the rebuilding of the temple?', options: ['Haggai', 'Malachi', 'Amos', 'Hosea'], correctIndex: 0, category: 'minorProphets', difficulty: 'medium', reference: 'Haggai 1:8' },
  { id: 'm10', question: 'Which prophet is known for visions of horsemen?', options: ['Zechariah', 'Joel', 'Amos', 'Micah'], correctIndex: 0, category: 'minorProphets', difficulty: 'hard', reference: 'Zechariah 1:8' },
  { id: 'm11', question: 'The last book of the Old Testament is written by which prophet?', options: ['Zechariah', 'Haggai', 'Malachi', 'Joel'], correctIndex: 2, category: 'minorProphets', difficulty: 'medium', reference: 'Malachi 1:1' },
  { id: 'm12', question: 'Which prophet spoke against Edom?', options: ['Obadiah', 'Nahum', 'Habakkuk', 'Zephaniah'], correctIndex: 0, category: 'minorProphets', difficulty: 'hard', reference: 'Obadiah 1:1' },
  { id: 'm13', question: 'Who said "The just shall live by faith"?', options: ['Micah', 'Habakkuk', 'Amos', 'Hosea'], correctIndex: 1, category: 'minorProphets', difficulty: 'medium', reference: 'Habakkuk 2:4' },
  { id: 'm14', question: 'Which prophet foretold judgment on Assyria?', options: ['Nahum', 'Amos', 'Joel', 'Micah'], correctIndex: 0, category: 'minorProphets', difficulty: 'hard', reference: 'Nahum 1:1' },
  { id: 'm15', question: 'How many days was Jonah in the fish?', options: ['1', '2', '3', '7'], correctIndex: 2, category: 'minorProphets', difficulty: 'easy', reference: 'Jonah 1:17' },
  { id: 'm16', question: 'Which prophet spoke of the Day of the Lord?', options: ['Zephaniah', 'Haggai', 'Zechariah', 'All of these'], correctIndex: 3, category: 'minorProphets', difficulty: 'medium', reference: 'Joel 2:1, Zephaniah 1:14' },
  { id: 'm17', question: 'Who was a shepherd before becoming a prophet?', options: ['Amos', 'Hosea', 'Micah', 'Joel'], correctIndex: 0, category: 'minorProphets', difficulty: 'medium', reference: 'Amos 1:1' },
  { id: 'm18', question: 'Which prophet promised God would send Elijah?', options: ['Malachi', 'Zechariah', 'Joel', 'Haggai'], correctIndex: 0, category: 'minorProphets', difficulty: 'hard', reference: 'Malachi 4:5' },
  { id: 'm19', question: 'Who had a vision of a plumb line?', options: ['Amos', 'Micah', 'Hosea', 'Joel'], correctIndex: 0, category: 'minorProphets', difficulty: 'hard', reference: 'Amos 7:7-8' },
  { id: 'm20', question: 'What plant grew to shade Jonah?', options: ['Fig tree', 'Vine', 'Ricinus/Castor plant', 'Palm tree'], correctIndex: 2, category: 'minorProphets', difficulty: 'medium', reference: 'Jonah 4:6' },
  { id: 'm21', question: 'What was the name of Hosea\'s wife?', options: ['Gomer', 'Rahab', 'Tamar', 'Bathsheba'], correctIndex: 0, category: 'minorProphets', difficulty: 'hard', reference: 'Hosea 1:3' },
  { id: 'm22', question: 'Which prophet said "I will pour out my Spirit on all people"?', options: ['Joel', 'Amos', 'Micah', 'Zechariah'], correctIndex: 0, category: 'minorProphets', difficulty: 'medium', reference: 'Joel 2:28' },
  { id: 'm23', question: 'Who prophesied that God hates robbery and wrongdoing?', options: ['Malachi', 'Amos', 'Micah', 'Habakkuk'], correctIndex: 2, category: 'minorProphets', difficulty: 'medium', reference: 'Micah 6:8' },
  { id: 'm24', question: 'Which prophet wrote about the fall of Nineveh?', options: ['Jonah', 'Nahum', 'Obadiah', 'Zephaniah'], correctIndex: 1, category: 'minorProphets', difficulty: 'hard', reference: 'Nahum 3:7' },
  { id: 'm25', question: 'Who prophesied during the reign of King Josiah?', options: ['Zephaniah', 'Haggai', 'Malachi', 'Zechariah'], correctIndex: 0, category: 'minorProphets', difficulty: 'hard', reference: 'Zephaniah 1:1' },

  // Old Testament General - 25 questions
  { id: 'o1', question: 'Who killed Goliath?', options: ['Saul', 'David', 'Jonathan', 'Samuel'], correctIndex: 1, category: 'oldTestament', difficulty: 'easy', reference: '1 Samuel 17:50' },
  { id: 'o2', question: 'Who was known as the wisest king?', options: ['David', 'Solomon', 'Saul', 'Hezekiah'], correctIndex: 1, category: 'oldTestament', difficulty: 'easy', reference: '1 Kings 4:29-31' },
  { id: 'o3', question: 'Who was thrown into the lion\'s den?', options: ['Elijah', 'Elisha', 'Daniel', 'Ezekiel'], correctIndex: 2, category: 'oldTestament', difficulty: 'easy', reference: 'Daniel 6:16' },
  { id: 'o4', question: 'What did Samson use to kill 1000 Philistines?', options: ['Sword', 'Donkey\'s jawbone', 'Spear', 'His bare hands'], correctIndex: 1, category: 'oldTestament', difficulty: 'medium', reference: 'Judges 15:15' },
  { id: 'o5', question: 'Who was the first king of Israel?', options: ['David', 'Solomon', 'Saul', 'Samuel'], correctIndex: 2, category: 'oldTestament', difficulty: 'medium', reference: '1 Samuel 10:24' },
  { id: 'o6', question: 'Who was Job\'s comforter who gave the best advice?', options: ['Eliphaz', 'Bildad', 'Zophar', 'Elihu'], correctIndex: 3, category: 'oldTestament', difficulty: 'hard', reference: 'Job 32-37' },
  { id: 'o7', question: 'How many books are in the Old Testament?', options: ['27', '39', '46', '66'], correctIndex: 1, category: 'oldTestament', difficulty: 'medium', reference: 'Old Testament Canon' },
  { id: 'o8', question: 'Who rebuilt the walls of Jerusalem?', options: ['Ezra', 'Nehemiah', 'Zerubbabel', 'Daniel'], correctIndex: 1, category: 'oldTestament', difficulty: 'medium', reference: 'Nehemiah 6:15' },
  { id: 'o9', question: 'What book comes after Psalms?', options: ['Ecclesiastes', 'Song of Solomon', 'Proverbs', 'Isaiah'], correctIndex: 2, category: 'oldTestament', difficulty: 'medium', reference: 'Old Testament Order' },
  { id: 'o10', question: 'Who wrote most of the Psalms?', options: ['Solomon', 'David', 'Moses', 'Asaph'], correctIndex: 1, category: 'oldTestament', difficulty: 'easy', reference: 'Psalms (various)' },
  { id: 'o11', question: 'Who was the female judge of Israel?', options: ['Ruth', 'Deborah', 'Esther', 'Hannah'], correctIndex: 1, category: 'oldTestament', difficulty: 'medium', reference: 'Judges 4:4' },
  { id: 'o12', question: 'What was the source of Samson\'s strength?', options: ['His muscles', 'His faith', 'His hair (Nazirite vow)', 'The Spirit of God'], correctIndex: 3, category: 'oldTestament', difficulty: 'easy', reference: 'Judges 14:6, 15:14' },
  { id: 'o13', question: 'Who interpreted Nebuchadnezzar\'s dreams?', options: ['Isaiah', 'Jeremiah', 'Daniel', 'Ezekiel'], correctIndex: 2, category: 'oldTestament', difficulty: 'medium', reference: 'Daniel 2:19-45' },
  { id: 'o14', question: 'Who became queen and saved her people?', options: ['Ruth', 'Deborah', 'Esther', 'Bathsheba'], correctIndex: 2, category: 'oldTestament', difficulty: 'easy', reference: 'Esther 7:3' },
  { id: 'o15', question: 'What prophet was taken to heaven in a chariot of fire?', options: ['Elisha', 'Elijah', 'Isaiah', 'Ezekiel'], correctIndex: 1, category: 'oldTestament', difficulty: 'medium', reference: '2 Kings 2:11' },
  { id: 'o16', question: 'How many friends came to comfort Job?', options: ['2', '3', '4', '5'], correctIndex: 1, category: 'oldTestament', difficulty: 'medium', reference: 'Job 2:11' },
  { id: 'o17', question: 'Who was Ruth\'s mother-in-law?', options: ['Hannah', 'Naomi', 'Sarah', 'Rachel'], correctIndex: 1, category: 'oldTestament', difficulty: 'easy', reference: 'Ruth 1:4' },
  { id: 'o18', question: 'Which king had 700 wives?', options: ['David', 'Solomon', 'Ahab', 'Herod'], correctIndex: 1, category: 'oldTestament', difficulty: 'medium', reference: '1 Kings 11:3' },
  { id: 'o19', question: 'Who anointed David as king?', options: ['Eli', 'Nathan', 'Samuel', 'Elijah'], correctIndex: 2, category: 'oldTestament', difficulty: 'medium', reference: '1 Samuel 16:13' },
  { id: 'o20', question: 'What did the Hebrew children refuse to worship in Babylon?', options: ['The king', 'A golden statue', 'The sun', 'Other gods'], correctIndex: 1, category: 'oldTestament', difficulty: 'medium', reference: 'Daniel 3:12' },
  { id: 'o21', question: 'Who was the prophet that succeeded Elijah?', options: ['Elisha', 'Isaiah', 'Jeremiah', 'Ezekiel'], correctIndex: 0, category: 'oldTestament', difficulty: 'medium', reference: '2 Kings 2:15' },
  { id: 'o22', question: 'What river did Naaman wash in to be healed?', options: ['Nile', 'Euphrates', 'Jordan', 'Tigris'], correctIndex: 2, category: 'oldTestament', difficulty: 'medium', reference: '2 Kings 5:14' },
  { id: 'o23', question: 'Who built the first temple in Jerusalem?', options: ['David', 'Solomon', 'Moses', 'Nehemiah'], correctIndex: 1, category: 'oldTestament', difficulty: 'medium', reference: '1 Kings 6:1' },
  { id: 'o24', question: 'What was the name of David\'s best friend?', options: ['Saul', 'Jonathan', 'Nathan', 'Joab'], correctIndex: 1, category: 'oldTestament', difficulty: 'easy', reference: '1 Samuel 18:1' },
  { id: 'o25', question: 'Who was the son of David and Bathsheba who became king?', options: ['Absalom', 'Amnon', 'Solomon', 'Adonijah'], correctIndex: 2, category: 'oldTestament', difficulty: 'medium', reference: '2 Samuel 12:24' },

  // Four Gospels - 25 questions
  { id: 'g1', question: 'Where was Jesus born?', options: ['Nazareth', 'Jerusalem', 'Bethlehem', 'Capernaum'], correctIndex: 2, category: 'fourGospels', difficulty: 'easy', reference: 'Matthew 2:1' },
  { id: 'g2', question: 'How many disciples did Jesus have?', options: ['10', '12', '14', '7'], correctIndex: 1, category: 'fourGospels', difficulty: 'easy', reference: 'Matthew 10:1-4' },
  { id: 'g3', question: 'Who baptized Jesus?', options: ['Peter', 'John the Baptist', 'John the Apostle', 'James'], correctIndex: 1, category: 'fourGospels', difficulty: 'easy', reference: 'Matthew 3:13' },
  { id: 'g4', question: 'What was Jesus\' first sign in John\'s Gospel?', options: ['Healing a blind man', 'Walking on water', 'Turning water into wine', 'Feeding 5000'], correctIndex: 2, category: 'fourGospels', difficulty: 'medium', reference: 'John 2:1-11' },
  { id: 'g5', question: 'Who betrayed Jesus?', options: ['Peter', 'Thomas', 'Judas', 'John'], correctIndex: 2, category: 'fourGospels', difficulty: 'easy', reference: 'Matthew 26:14-16' },
  { id: 'g6', question: 'How many loaves fed 5000 people?', options: ['3', '5', '7', '12'], correctIndex: 1, category: 'fourGospels', difficulty: 'medium', reference: 'John 6:9' },
  { id: 'g7', question: 'Who denied Jesus three times?', options: ['Judas', 'Peter', 'Thomas', 'James'], correctIndex: 1, category: 'fourGospels', difficulty: 'easy', reference: 'Matthew 26:69-75' },
  { id: 'g8', question: 'Where did Jesus give the Sermon on the Mount?', options: ['Jerusalem', 'A mountain', 'The temple', 'A boat'], correctIndex: 1, category: 'fourGospels', difficulty: 'easy', reference: 'Matthew 5:1' },
  { id: 'g9', question: 'Who was raised from the dead after four days?', options: ['Jairus\' daughter', 'Lazarus', 'The widow\'s son', 'Tabitha'], correctIndex: 1, category: 'fourGospels', difficulty: 'medium', reference: 'John 11:39-44' },
  { id: 'g10', question: 'What did Jesus ride into Jerusalem?', options: ['Horse', 'Camel', 'Donkey', 'Chariot'], correctIndex: 2, category: 'fourGospels', difficulty: 'easy', reference: 'Matthew 21:5-7' },
  { id: 'g11', question: 'Which Gospel begins with "In the beginning was the Word"?', options: ['Matthew', 'Mark', 'Luke', 'John'], correctIndex: 3, category: 'fourGospels', difficulty: 'medium', reference: 'John 1:1' },
  { id: 'g12', question: 'Who helped Jesus carry His cross?', options: ['Peter', 'John', 'Simon of Cyrene', 'Barabbas'], correctIndex: 2, category: 'fourGospels', difficulty: 'medium', reference: 'Matthew 27:32' },
  { id: 'g13', question: 'How many days was Jesus tempted in the wilderness?', options: ['7', '30', '40', '50'], correctIndex: 2, category: 'fourGospels', difficulty: 'medium', reference: 'Matthew 4:2' },
  { id: 'g14', question: 'Who was the Roman governor who sentenced Jesus?', options: ['Herod', 'Caesar', 'Pilate', 'Felix'], correctIndex: 2, category: 'fourGospels', difficulty: 'medium', reference: 'Matthew 27:2' },
  { id: 'g15', question: 'Which disciple doubted the resurrection?', options: ['Peter', 'Thomas', 'John', 'Andrew'], correctIndex: 1, category: 'fourGospels', difficulty: 'easy', reference: 'John 20:25' },
  { id: 'g16', question: 'What was Matthew\'s profession before following Jesus?', options: ['Fisherman', 'Tax collector', 'Carpenter', 'Shepherd'], correctIndex: 1, category: 'fourGospels', difficulty: 'medium', reference: 'Matthew 9:9' },
  { id: 'g17', question: 'Which Gospel was written primarily for Jewish readers?', options: ['Matthew', 'Mark', 'Luke', 'John'], correctIndex: 0, category: 'fourGospels', difficulty: 'hard', reference: 'Matthew (genealogy from Abraham)' },
  { id: 'g18', question: 'How many beatitudes are in Matthew\'s Gospel?', options: ['5', '7', '8', '10'], correctIndex: 2, category: 'fourGospels', difficulty: 'hard', reference: 'Matthew 5:3-12' },
  { id: 'g19', question: 'Who asked Jesus "What is truth?"', options: ['Herod', 'Pilate', 'Caiaphas', 'Nicodemus'], correctIndex: 1, category: 'fourGospels', difficulty: 'medium', reference: 'John 18:38' },
  { id: 'g20', question: 'Where was Jesus crucified?', options: ['The temple', 'Golgotha', 'Bethany', 'The garden'], correctIndex: 1, category: 'fourGospels', difficulty: 'easy', reference: 'Matthew 27:33' },
  { id: 'g21', question: 'Who was the first person to see the risen Jesus?', options: ['Peter', 'John', 'Mary Magdalene', 'The disciples'], correctIndex: 2, category: 'fourGospels', difficulty: 'medium', reference: 'John 20:14-16' },
  { id: 'g22', question: 'What did Jesus say are the two greatest commandments?', options: ['Love God and neighbor', 'Pray and fast', 'Give and receive', 'Work and rest'], correctIndex: 0, category: 'fourGospels', difficulty: 'medium', reference: 'Matthew 22:37-39' },
  { id: 'g23', question: 'How many fish did Peter catch after the resurrection?', options: ['100', '120', '153', '200'], correctIndex: 2, category: 'fourGospels', difficulty: 'hard', reference: 'John 21:11' },
  { id: 'g24', question: 'Who was the father of James and John?', options: ['Zebedee', 'Alphaeus', 'Jonah', 'Simon'], correctIndex: 0, category: 'fourGospels', difficulty: 'medium', reference: 'Matthew 4:21' },
  { id: 'g25', question: 'What did Jesus write in the sand?', options: ['Names of accusers', 'The law', 'Unknown', 'Forgiveness'], correctIndex: 2, category: 'fourGospels', difficulty: 'hard', reference: 'John 8:6' },

  // Pauline Letters - 25 questions
  { id: 'l1', question: 'Who wrote most of the New Testament letters?', options: ['Peter', 'John', 'Paul', 'James'], correctIndex: 2, category: 'paulineLetters', difficulty: 'easy', reference: 'Multiple Epistles' },
  { id: 'l2', question: 'What was Paul\'s name before conversion?', options: ['Simon', 'Saul', 'Samuel', 'Stephen'], correctIndex: 1, category: 'paulineLetters', difficulty: 'easy', reference: 'Acts 13:9' },
  { id: 'l3', question: 'Which letter describes love in chapter 13?', options: ['Romans', '1 Corinthians', 'Ephesians', 'Philippians'], correctIndex: 1, category: 'paulineLetters', difficulty: 'medium', reference: '1 Corinthians 13:1-13' },
  { id: 'l4', question: 'What city was Paul from?', options: ['Jerusalem', 'Tarsus', 'Damascus', 'Antioch'], correctIndex: 1, category: 'paulineLetters', difficulty: 'medium', reference: 'Acts 21:39' },
  { id: 'l5', question: 'Who did Paul write to about the armor of God?', options: ['Romans', 'Corinthians', 'Ephesians', 'Philippians'], correctIndex: 2, category: 'paulineLetters', difficulty: 'medium', reference: 'Ephesians 6:10-18' },
  { id: 'l6', question: 'Which letter was written to a runaway slave\'s master?', options: ['Philemon', 'Titus', 'Timothy', 'Colossians'], correctIndex: 0, category: 'paulineLetters', difficulty: 'hard', reference: 'Philemon 1:10-18' },
  { id: 'l7', question: '"For me to live is Christ, to die is gain" is from?', options: ['Romans', 'Galatians', 'Philippians', 'Colossians'], correctIndex: 2, category: 'paulineLetters', difficulty: 'hard', reference: 'Philippians 1:21' },
  { id: 'l8', question: 'Which letter emphasizes justification by faith?', options: ['Romans', '1 Corinthians', 'Ephesians', '1 Timothy'], correctIndex: 0, category: 'paulineLetters', difficulty: 'medium', reference: 'Romans 3:28' },
  { id: 'l9', question: 'Who was Timothy\'s mentor?', options: ['Peter', 'Paul', 'Barnabas', 'Silas'], correctIndex: 1, category: 'paulineLetters', difficulty: 'easy', reference: '1 Timothy 1:2' },
  { id: 'l10', question: 'How many letters did Paul write to the Corinthians?', options: ['1', '2', '3', '4'], correctIndex: 1, category: 'paulineLetters', difficulty: 'easy', reference: '1 & 2 Corinthians' },
  { id: 'l11', question: 'Which letter warns against legalism?', options: ['Romans', 'Galatians', 'Ephesians', 'Philippians'], correctIndex: 1, category: 'paulineLetters', difficulty: 'medium', reference: 'Galatians 2:16' },
  { id: 'l12', question: '"I can do all things through Christ" is from which letter?', options: ['Romans', 'Galatians', 'Philippians', 'Colossians'], correctIndex: 2, category: 'paulineLetters', difficulty: 'medium', reference: 'Philippians 4:13' },
  { id: 'l13', question: 'Which letters were written to church leaders?', options: ['Ephesians', 'Philippians', '1 & 2 Timothy, Titus', 'Colossians'], correctIndex: 2, category: 'paulineLetters', difficulty: 'medium', reference: 'Pastoral Epistles' },
  { id: 'l14', question: 'What does Paul call the church in Ephesians?', options: ['The Kingdom', 'The Body of Christ', 'The Temple', 'The Family'], correctIndex: 1, category: 'paulineLetters', difficulty: 'medium', reference: 'Ephesians 1:22-23' },
  { id: 'l15', question: 'Which letter discusses the resurrection most?', options: ['Romans', '1 Corinthians', 'Galatians', 'Ephesians'], correctIndex: 1, category: 'paulineLetters', difficulty: 'hard', reference: '1 Corinthians 15' },
  { id: 'l16', question: 'Who was the companion of Titus?', options: ['Timothy', 'Silas', 'Paul', 'Barnabas'], correctIndex: 2, category: 'paulineLetters', difficulty: 'medium', reference: 'Titus 1:4' },
  { id: 'l17', question: '"The fruit of the Spirit" is found in which letter?', options: ['Romans', 'Galatians', 'Ephesians', 'Colossians'], correctIndex: 1, category: 'paulineLetters', difficulty: 'medium', reference: 'Galatians 5:22-23' },
  { id: 'l18', question: 'Which letter was written from prison?', options: ['Romans', 'Galatians', 'Philippians', 'All of Paul\'s letters'], correctIndex: 2, category: 'paulineLetters', difficulty: 'hard', reference: 'Philippians 1:13' },
  { id: 'l19', question: 'How many letters did Paul write to Timothy?', options: ['1', '2', '3', '4'], correctIndex: 1, category: 'paulineLetters', difficulty: 'easy', reference: '1 & 2 Timothy' },
  { id: 'l20', question: 'Which church was known for its divisions?', options: ['Rome', 'Corinth', 'Ephesus', 'Philippi'], correctIndex: 1, category: 'paulineLetters', difficulty: 'medium', reference: '1 Corinthians 1:11-12' },
  { id: 'l21', question: 'What is the longest of Paul\'s letters?', options: ['1 Corinthians', 'Romans', 'Ephesians', 'Galatians'], correctIndex: 1, category: 'paulineLetters', difficulty: 'hard', reference: 'Romans (16 chapters)' },
  { id: 'l22', question: '"All Scripture is God-breathed" is from which letter?', options: ['Romans', '1 Corinthians', '2 Timothy', 'Titus'], correctIndex: 2, category: 'paulineLetters', difficulty: 'hard', reference: '2 Timothy 3:16' },
  { id: 'l23', question: 'Who delivered the letter to the Romans?', options: ['Phoebe', 'Timothy', 'Silas', 'Titus'], correctIndex: 0, category: 'paulineLetters', difficulty: 'hard', reference: 'Romans 16:1' },
  { id: 'l24', question: 'Which letter mentions the rapture?', options: ['Romans', 'Galatians', '1 Thessalonians', 'Colossians'], correctIndex: 2, category: 'paulineLetters', difficulty: 'hard', reference: '1 Thessalonians 4:17' },
  { id: 'l25', question: '"Christ is the head of the church" is found in which letter?', options: ['Romans', 'Ephesians', 'Philippians', 'Both B and D (Ephesians and Colossians)'], correctIndex: 3, category: 'paulineLetters', difficulty: 'medium', reference: 'Ephesians 5:23, Colossians 1:18' },

  // New Testament General - 25 questions
  { id: 'n1', question: 'Who wrote the book of Revelation?', options: ['Paul', 'Peter', 'John', 'James'], correctIndex: 2, category: 'newTestament', difficulty: 'easy', reference: 'Revelation 1:1' },
  { id: 'n2', question: 'How many books are in the New Testament?', options: ['22', '25', '27', '30'], correctIndex: 2, category: 'newTestament', difficulty: 'easy', reference: 'New Testament Canon' },
  { id: 'n3', question: 'Who was the first Christian martyr?', options: ['Peter', 'Stephen', 'James', 'Paul'], correctIndex: 1, category: 'newTestament', difficulty: 'medium', reference: 'Acts 7:59' },
  { id: 'n4', question: 'Where was Paul going when he was converted?', options: ['Jerusalem', 'Damascus', 'Antioch', 'Rome'], correctIndex: 1, category: 'newTestament', difficulty: 'medium', reference: 'Acts 9:3' },
  { id: 'n5', question: 'Who was the author of Acts?', options: ['Paul', 'Luke', 'Mark', 'Matthew'], correctIndex: 1, category: 'newTestament', difficulty: 'medium', reference: 'Acts 1:1 (Luke)' },
  { id: 'n6', question: 'How many churches are addressed in Revelation?', options: ['5', '7', '10', '12'], correctIndex: 1, category: 'newTestament', difficulty: 'medium', reference: 'Revelation 2-3' },
  { id: 'n7', question: 'Who wrote the letter to the Hebrews?', options: ['Paul', 'Peter', 'Luke', 'Unknown'], correctIndex: 3, category: 'newTestament', difficulty: 'hard', reference: 'Hebrews (authorship debated)' },
  { id: 'n8', question: 'What does "Pentecost" mean?', options: ['Passover', 'Fifty days', 'New beginning', 'Harvest'], correctIndex: 1, category: 'newTestament', difficulty: 'medium', reference: 'Acts 2:1' },
  { id: 'n9', question: 'Who was converted at Pentecost (approximately)?', options: ['120', '500', '3000', '5000'], correctIndex: 2, category: 'newTestament', difficulty: 'medium', reference: 'Acts 2:41' },
  { id: 'n10', question: 'Who wrote "faith without works is dead"?', options: ['Paul', 'Peter', 'James', 'John'], correctIndex: 2, category: 'newTestament', difficulty: 'medium', reference: 'James 2:26' },
  { id: 'n11', question: 'Where was Paul when he saw the "Macedonian vision"?', options: ['Corinth', 'Troas', 'Athens', 'Philippi'], correctIndex: 1, category: 'newTestament', difficulty: 'hard', reference: 'Acts 16:9' },
  { id: 'n12', question: 'Who fell asleep during Paul\'s sermon and fell from a window?', options: ['Timothy', 'Eutychus', 'Lydia', 'Silas'], correctIndex: 1, category: 'newTestament', difficulty: 'hard', reference: 'Acts 20:9' },
  { id: 'n13', question: 'What island was Paul shipwrecked on?', options: ['Cyprus', 'Crete', 'Malta', 'Patmos'], correctIndex: 2, category: 'newTestament', difficulty: 'medium', reference: 'Acts 28:1' },
  { id: 'n14', question: 'Who was the Roman centurion that was converted?', options: ['Cornelius', 'Julius', 'Claudius', 'Felix'], correctIndex: 0, category: 'newTestament', difficulty: 'medium', reference: 'Acts 10:1' },
  { id: 'n15', question: 'What is the last word in the Bible?', options: ['Amen', 'Forever', 'Jesus', 'Glory'], correctIndex: 0, category: 'newTestament', difficulty: 'medium', reference: 'Revelation 22:21' },
  { id: 'n16', question: 'Who wrote three letters in the New Testament?', options: ['Peter', 'John', 'Paul', 'James'], correctIndex: 1, category: 'newTestament', difficulty: 'hard', reference: '1, 2, 3 John' },
  { id: 'n17', question: 'Where was the first church established?', options: ['Jerusalem', 'Antioch', 'Rome', 'Ephesus'], correctIndex: 0, category: 'newTestament', difficulty: 'medium', reference: 'Acts 2:41-47' },
  { id: 'n18', question: 'Which is the shortest letter in the New Testament?', options: ['Philemon', '2 John', '3 John', 'Jude'], correctIndex: 2, category: 'newTestament', difficulty: 'hard', reference: '3 John (14 verses in Greek, shortest by word count)' },
  { id: 'n19', question: 'What was the first Gentile church?', options: ['Rome', 'Corinth', 'Antioch', 'Ephesus'], correctIndex: 2, category: 'newTestament', difficulty: 'hard', reference: 'Acts 11:20-26' },
  { id: 'n20', question: 'Who was the brother of Jesus who wrote a letter?', options: ['John', 'James', 'Jude', 'Both James and Jude'], correctIndex: 3, category: 'newTestament', difficulty: 'medium', reference: 'James 1:1, Jude 1:1' },
  { id: 'n21', question: 'Where did Paul spend two years under house arrest?', options: ['Jerusalem', 'Caesarea', 'Rome', 'Ephesus'], correctIndex: 2, category: 'newTestament', difficulty: 'hard', reference: 'Acts 28:30' },
  { id: 'n22', question: 'Who was the silversmith who opposed Paul in Ephesus?', options: ['Demetrius', 'Alexander', 'Tertullus', 'Apollos'], correctIndex: 0, category: 'newTestament', difficulty: 'hard', reference: 'Acts 19:24' },
  { id: 'n23', question: 'What does "Maranatha" mean?', options: ['Praise God', 'Come, Lord', 'Amen', 'Hallelujah'], correctIndex: 1, category: 'newTestament', difficulty: 'hard', reference: '1 Corinthians 16:22' },
  { id: 'n24', question: 'Who was the first European convert?', options: ['Cornelius', 'Lydia', 'Timothy', 'Phoebe'], correctIndex: 1, category: 'newTestament', difficulty: 'medium', reference: 'Acts 16:14' },
  { id: 'n25', question: 'What number represents the beast in Revelation?', options: ['555', '616', '666', '777'], correctIndex: 2, category: 'newTestament', difficulty: 'easy', reference: 'Revelation 13:18' },
];

// Merge all questions including new categories
const allMergedQuestions: QuizQuestion[] = [
  ...allQuestions,
  ...apocalypseQuestions,
  ...actsQuestions,
  ...biblicalCharactersQuestions,
  ...gospelsQuestions
];

export function getQuestionsByCategory(category: string): QuizQuestion[] {
  if (category === 'fullQuiz') {
    return [...allMergedQuestions];
  }
  if (category === 'randomQuiz') {
    return shuffleArray([...allMergedQuestions]).slice(0, 100);
  }
  if (category === 'apocalypse') {
    return apocalypseQuestions;
  }
  if (category === 'actsApostles') {
    return actsQuestions;
  }
  if (category === 'biblicalCharacters') {
    return biblicalCharactersQuestions;
  }
  if (category === 'minorProphets') {
    return prophetsQuestions;
  }
  if (category === 'pentateuch') {
    return [...allMergedQuestions.filter(q => q.category === 'pentateuch'), ...pentateuchQuestions];
  }
  if (category === 'historicalBooks') {
    return historicalBooksQuestions;
  }
  if (category === 'paulineLetters') {
    return paulineQuestions;
  }
  return allMergedQuestions.filter(q => q.category === category);
}

export function getQuestionsByDifficulty(questions: QuizQuestion[], difficulty: 'easy' | 'medium' | 'hard'): QuizQuestion[] {
  return questions.filter(q => q.difficulty === difficulty);
}

function shuffleArray<T>(array: T[]): T[] {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}
