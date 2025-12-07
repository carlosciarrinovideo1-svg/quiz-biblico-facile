export interface QuizQuestion {
  id: string;
  question: string;
  options: string[];
  correctIndex: number;
  category: string;
  difficulty: 'easy' | 'medium' | 'hard';
}

export const quizCategories = [
  { id: 'pentateuch', questions: 20 },
  { id: 'minorProphets', questions: 20 },
  { id: 'oldTestament', questions: 20 },
  { id: 'fourGospels', questions: 20 },
  { id: 'paulineLetters', questions: 20 },
  { id: 'newTestament', questions: 20 },
  { id: 'fullQuiz', questions: 100 },
  { id: 'randomQuiz', questions: 100 },
];

// Sample questions - in a real app, these would come from a database
export const allQuestions: QuizQuestion[] = [
  // Pentateuch (Genesis, Exodus, Leviticus, Numbers, Deuteronomy)
  { id: 'p1', question: 'Who built the ark in Genesis?', options: ['Abraham', 'Moses', 'Noah', 'David'], correctIndex: 2, category: 'pentateuch', difficulty: 'easy' },
  { id: 'p2', question: 'How many days did God take to create the world?', options: ['5', '6', '7', '10'], correctIndex: 1, category: 'pentateuch', difficulty: 'easy' },
  { id: 'p3', question: 'What was the first plague of Egypt?', options: ['Frogs', 'Blood', 'Locusts', 'Darkness'], correctIndex: 1, category: 'pentateuch', difficulty: 'medium' },
  { id: 'p4', question: 'Who was sold into slavery by his brothers?', options: ['Benjamin', 'Joseph', 'Reuben', 'Judah'], correctIndex: 1, category: 'pentateuch', difficulty: 'easy' },
  { id: 'p5', question: 'What mountain did Moses receive the Ten Commandments on?', options: ['Mount Carmel', 'Mount Sinai', 'Mount Zion', 'Mount Nebo'], correctIndex: 1, category: 'pentateuch', difficulty: 'medium' },
  { id: 'p6', question: 'Who was the wife of Abraham?', options: ['Rachel', 'Leah', 'Sarah', 'Rebekah'], correctIndex: 2, category: 'pentateuch', difficulty: 'easy' },
  { id: 'p7', question: 'How many tribes of Israel were there?', options: ['10', '12', '14', '7'], correctIndex: 1, category: 'pentateuch', difficulty: 'easy' },
  { id: 'p8', question: 'What was the name of Moses\' brother?', options: ['Joshua', 'Aaron', 'Caleb', 'Eleazar'], correctIndex: 1, category: 'pentateuch', difficulty: 'easy' },
  { id: 'p9', question: 'Which book contains the Ten Commandments?', options: ['Genesis', 'Exodus', 'Leviticus', 'Numbers'], correctIndex: 1, category: 'pentateuch', difficulty: 'medium' },
  { id: 'p10', question: 'What did God create on the fourth day?', options: ['Animals', 'Sun, moon and stars', 'Man', 'Sea creatures'], correctIndex: 1, category: 'pentateuch', difficulty: 'medium' },
  { id: 'p11', question: 'Who was the father of Jacob and Esau?', options: ['Abraham', 'Isaac', 'Noah', 'Adam'], correctIndex: 1, category: 'pentateuch', difficulty: 'easy' },
  { id: 'p12', question: 'What was the last plague of Egypt?', options: ['Death of firstborn', 'Darkness', 'Locusts', 'Boils'], correctIndex: 0, category: 'pentateuch', difficulty: 'medium' },
  { id: 'p13', question: 'How many years did the Israelites wander in the wilderness?', options: ['20', '30', '40', '50'], correctIndex: 2, category: 'pentateuch', difficulty: 'medium' },
  { id: 'p14', question: 'Who was chosen to lead Israel after Moses?', options: ['Aaron', 'Caleb', 'Joshua', 'Eleazar'], correctIndex: 2, category: 'pentateuch', difficulty: 'medium' },
  { id: 'p15', question: 'What was the name of the garden where Adam and Eve lived?', options: ['Paradise', 'Eden', 'Canaan', 'Babylon'], correctIndex: 1, category: 'pentateuch', difficulty: 'easy' },
  { id: 'p16', question: 'How old was Abraham when Isaac was born?', options: ['75', '90', '100', '120'], correctIndex: 2, category: 'pentateuch', difficulty: 'hard' },
  { id: 'p17', question: 'What did Esau sell his birthright for?', options: ['Gold', 'A bowl of stew', 'Land', 'Sheep'], correctIndex: 1, category: 'pentateuch', difficulty: 'medium' },
  { id: 'p18', question: 'Who was thrown into a pit by his brothers?', options: ['Benjamin', 'Joseph', 'Judah', 'Dan'], correctIndex: 1, category: 'pentateuch', difficulty: 'easy' },
  { id: 'p19', question: 'What was the sign of the covenant with Noah?', options: ['Circumcision', 'Rainbow', 'Sabbath', 'Passover'], correctIndex: 1, category: 'pentateuch', difficulty: 'medium' },
  { id: 'p20', question: 'How many plagues were sent upon Egypt?', options: ['7', '10', '12', '15'], correctIndex: 1, category: 'pentateuch', difficulty: 'easy' },

  // Minor Prophets
  { id: 'm1', question: 'Which prophet was swallowed by a great fish?', options: ['Amos', 'Jonah', 'Micah', 'Hosea'], correctIndex: 1, category: 'minorProphets', difficulty: 'easy' },
  { id: 'm2', question: 'Who prophesied "The Lord will be king over the whole earth"?', options: ['Zechariah', 'Malachi', 'Haggai', 'Joel'], correctIndex: 0, category: 'minorProphets', difficulty: 'hard' },
  { id: 'm3', question: 'Which prophet married a prostitute as commanded by God?', options: ['Amos', 'Micah', 'Hosea', 'Joel'], correctIndex: 2, category: 'minorProphets', difficulty: 'medium' },
  { id: 'm4', question: 'Who said "But let justice roll on like a river"?', options: ['Amos', 'Micah', 'Habakkuk', 'Nahum'], correctIndex: 0, category: 'minorProphets', difficulty: 'medium' },
  { id: 'm5', question: 'Which city did Jonah try to avoid going to?', options: ['Babylon', 'Jerusalem', 'Nineveh', 'Tarshish'], correctIndex: 2, category: 'minorProphets', difficulty: 'easy' },
  { id: 'm6', question: 'Which prophet spoke of locusts as a sign of judgment?', options: ['Joel', 'Amos', 'Micah', 'Nahum'], correctIndex: 0, category: 'minorProphets', difficulty: 'medium' },
  { id: 'm7', question: 'Who prophesied the birth of the Messiah in Bethlehem?', options: ['Zechariah', 'Micah', 'Malachi', 'Haggai'], correctIndex: 1, category: 'minorProphets', difficulty: 'medium' },
  { id: 'm8', question: 'Which book is the shortest in the Old Testament?', options: ['Jonah', 'Obadiah', 'Nahum', 'Habakkuk'], correctIndex: 1, category: 'minorProphets', difficulty: 'hard' },
  { id: 'm9', question: 'Who encouraged the rebuilding of the temple?', options: ['Haggai', 'Malachi', 'Amos', 'Hosea'], correctIndex: 0, category: 'minorProphets', difficulty: 'medium' },
  { id: 'm10', question: 'Which prophet is known for visions of horsemen?', options: ['Zechariah', 'Joel', 'Amos', 'Micah'], correctIndex: 0, category: 'minorProphets', difficulty: 'hard' },
  { id: 'm11', question: 'The last book of the Old Testament is written by which prophet?', options: ['Zechariah', 'Haggai', 'Malachi', 'Joel'], correctIndex: 2, category: 'minorProphets', difficulty: 'medium' },
  { id: 'm12', question: 'Which prophet spoke against Edom?', options: ['Obadiah', 'Nahum', 'Habakkuk', 'Zephaniah'], correctIndex: 0, category: 'minorProphets', difficulty: 'hard' },
  { id: 'm13', question: 'Who said "The just shall live by faith"?', options: ['Micah', 'Habakkuk', 'Amos', 'Hosea'], correctIndex: 1, category: 'minorProphets', difficulty: 'medium' },
  { id: 'm14', question: 'Which prophet foretold judgment on Assyria?', options: ['Nahum', 'Amos', 'Joel', 'Micah'], correctIndex: 0, category: 'minorProphets', difficulty: 'hard' },
  { id: 'm15', question: 'How many days was Jonah in the fish?', options: ['1', '2', '3', '7'], correctIndex: 2, category: 'minorProphets', difficulty: 'easy' },
  { id: 'm16', question: 'Which prophet spoke of the Day of the Lord?', options: ['Zephaniah', 'Haggai', 'Zechariah', 'All of these'], correctIndex: 3, category: 'minorProphets', difficulty: 'medium' },
  { id: 'm17', question: 'Who was a shepherd before becoming a prophet?', options: ['Amos', 'Hosea', 'Micah', 'Joel'], correctIndex: 0, category: 'minorProphets', difficulty: 'medium' },
  { id: 'm18', question: 'Which prophet promised God would send Elijah?', options: ['Malachi', 'Zechariah', 'Joel', 'Haggai'], correctIndex: 0, category: 'minorProphets', difficulty: 'hard' },
  { id: 'm19', question: 'Who had a vision of a plumb line?', options: ['Amos', 'Micah', 'Hosea', 'Joel'], correctIndex: 0, category: 'minorProphets', difficulty: 'hard' },
  { id: 'm20', question: 'What plant grew to shade Jonah?', options: ['Fig tree', 'Vine', 'Gourd', 'Palm tree'], correctIndex: 2, category: 'minorProphets', difficulty: 'medium' },

  // Old Testament General
  { id: 'o1', question: 'Who killed Goliath?', options: ['Saul', 'David', 'Jonathan', 'Samuel'], correctIndex: 1, category: 'oldTestament', difficulty: 'easy' },
  { id: 'o2', question: 'Who was known as the wisest king?', options: ['David', 'Solomon', 'Saul', 'Hezekiah'], correctIndex: 1, category: 'oldTestament', difficulty: 'easy' },
  { id: 'o3', question: 'Who was thrown into the lion\'s den?', options: ['Elijah', 'Elisha', 'Daniel', 'Ezekiel'], correctIndex: 2, category: 'oldTestament', difficulty: 'easy' },
  { id: 'o4', question: 'What did Samson use to kill 1000 Philistines?', options: ['Sword', 'Donkey\'s jawbone', 'Spear', 'His bare hands'], correctIndex: 1, category: 'oldTestament', difficulty: 'medium' },
  { id: 'o5', question: 'Who was the first king of Israel?', options: ['David', 'Solomon', 'Saul', 'Samuel'], correctIndex: 2, category: 'oldTestament', difficulty: 'medium' },
  { id: 'o6', question: 'Who was Job\'s comforter who gave the best advice?', options: ['Eliphaz', 'Bildad', 'Zophar', 'Elihu'], correctIndex: 3, category: 'oldTestament', difficulty: 'hard' },
  { id: 'o7', question: 'How many books are in the Old Testament?', options: ['27', '39', '46', '66'], correctIndex: 1, category: 'oldTestament', difficulty: 'medium' },
  { id: 'o8', question: 'Who rebuilt the walls of Jerusalem?', options: ['Ezra', 'Nehemiah', 'Zerubbabel', 'Daniel'], correctIndex: 1, category: 'oldTestament', difficulty: 'medium' },
  { id: 'o9', question: 'What book comes after Psalms?', options: ['Ecclesiastes', 'Song of Solomon', 'Proverbs', 'Isaiah'], correctIndex: 2, category: 'oldTestament', difficulty: 'medium' },
  { id: 'o10', question: 'Who wrote most of the Psalms?', options: ['Solomon', 'David', 'Moses', 'Asaph'], correctIndex: 1, category: 'oldTestament', difficulty: 'easy' },
  { id: 'o11', question: 'Who was the female judge of Israel?', options: ['Ruth', 'Deborah', 'Esther', 'Hannah'], correctIndex: 1, category: 'oldTestament', difficulty: 'medium' },
  { id: 'o12', question: 'What was the source of Samson\'s strength?', options: ['His muscles', 'His faith', 'His hair', 'God\'s spirit'], correctIndex: 2, category: 'oldTestament', difficulty: 'easy' },
  { id: 'o13', question: 'Who interpreted Nebuchadnezzar\'s dreams?', options: ['Isaiah', 'Jeremiah', 'Daniel', 'Ezekiel'], correctIndex: 2, category: 'oldTestament', difficulty: 'medium' },
  { id: 'o14', question: 'Who became queen and saved her people?', options: ['Ruth', 'Deborah', 'Esther', 'Bathsheba'], correctIndex: 2, category: 'oldTestament', difficulty: 'easy' },
  { id: 'o15', question: 'What prophet was taken to heaven in a chariot of fire?', options: ['Elisha', 'Elijah', 'Isaiah', 'Ezekiel'], correctIndex: 1, category: 'oldTestament', difficulty: 'medium' },
  { id: 'o16', question: 'How many friends came to comfort Job?', options: ['2', '3', '4', '5'], correctIndex: 1, category: 'oldTestament', difficulty: 'medium' },
  { id: 'o17', question: 'Who was Ruth\'s mother-in-law?', options: ['Hannah', 'Naomi', 'Sarah', 'Rachel'], correctIndex: 1, category: 'oldTestament', difficulty: 'easy' },
  { id: 'o18', question: 'Which king had 700 wives?', options: ['David', 'Solomon', 'Ahab', 'Herod'], correctIndex: 1, category: 'oldTestament', difficulty: 'medium' },
  { id: 'o19', question: 'Who anointed David as king?', options: ['Eli', 'Nathan', 'Samuel', 'Elijah'], correctIndex: 2, category: 'oldTestament', difficulty: 'medium' },
  { id: 'o20', question: 'What did the Hebrew children refuse to worship in Babylon?', options: ['The king', 'A golden statue', 'The sun', 'Other gods'], correctIndex: 1, category: 'oldTestament', difficulty: 'medium' },

  // Four Gospels
  { id: 'g1', question: 'Where was Jesus born?', options: ['Nazareth', 'Jerusalem', 'Bethlehem', 'Capernaum'], correctIndex: 2, category: 'fourGospels', difficulty: 'easy' },
  { id: 'g2', question: 'How many disciples did Jesus have?', options: ['10', '12', '14', '7'], correctIndex: 1, category: 'fourGospels', difficulty: 'easy' },
  { id: 'g3', question: 'Who baptized Jesus?', options: ['Peter', 'John the Baptist', 'John the Apostle', 'James'], correctIndex: 1, category: 'fourGospels', difficulty: 'easy' },
  { id: 'g4', question: 'What was Jesus\' first miracle?', options: ['Healing a blind man', 'Walking on water', 'Turning water into wine', 'Feeding 5000'], correctIndex: 2, category: 'fourGospels', difficulty: 'medium' },
  { id: 'g5', question: 'Who betrayed Jesus?', options: ['Peter', 'Thomas', 'Judas', 'John'], correctIndex: 2, category: 'fourGospels', difficulty: 'easy' },
  { id: 'g6', question: 'How many loaves fed 5000 people?', options: ['3', '5', '7', '12'], correctIndex: 1, category: 'fourGospels', difficulty: 'medium' },
  { id: 'g7', question: 'Who denied Jesus three times?', options: ['Judas', 'Peter', 'Thomas', 'James'], correctIndex: 1, category: 'fourGospels', difficulty: 'easy' },
  { id: 'g8', question: 'Where did Jesus give the Sermon on the Mount?', options: ['Jerusalem', 'A mountain', 'The temple', 'A boat'], correctIndex: 1, category: 'fourGospels', difficulty: 'easy' },
  { id: 'g9', question: 'Who was raised from the dead after four days?', options: ['Jairus\' daughter', 'Lazarus', 'The widow\'s son', 'Tabitha'], correctIndex: 1, category: 'fourGospels', difficulty: 'medium' },
  { id: 'g10', question: 'What did Jesus ride into Jerusalem?', options: ['Horse', 'Camel', 'Donkey', 'Chariot'], correctIndex: 2, category: 'fourGospels', difficulty: 'easy' },
  { id: 'g11', question: 'Which Gospel begins with "In the beginning was the Word"?', options: ['Matthew', 'Mark', 'Luke', 'John'], correctIndex: 3, category: 'fourGospels', difficulty: 'medium' },
  { id: 'g12', question: 'Who helped Jesus carry His cross?', options: ['Peter', 'John', 'Simon of Cyrene', 'Barabbas'], correctIndex: 2, category: 'fourGospels', difficulty: 'medium' },
  { id: 'g13', question: 'How many days was Jesus tempted in the wilderness?', options: ['7', '30', '40', '50'], correctIndex: 2, category: 'fourGospels', difficulty: 'medium' },
  { id: 'g14', question: 'Who was the Roman governor who sentenced Jesus?', options: ['Herod', 'Caesar', 'Pilate', 'Felix'], correctIndex: 2, category: 'fourGospels', difficulty: 'medium' },
  { id: 'g15', question: 'Which disciple doubted the resurrection?', options: ['Peter', 'Thomas', 'John', 'Andrew'], correctIndex: 1, category: 'fourGospels', difficulty: 'easy' },
  { id: 'g16', question: 'What was Matthew\'s profession before following Jesus?', options: ['Fisherman', 'Tax collector', 'Carpenter', 'Shepherd'], correctIndex: 1, category: 'fourGospels', difficulty: 'medium' },
  { id: 'g17', question: 'Which Gospel was written primarily for Jewish readers?', options: ['Matthew', 'Mark', 'Luke', 'John'], correctIndex: 0, category: 'fourGospels', difficulty: 'hard' },
  { id: 'g18', question: 'How many beatitudes are in Matthew\'s Gospel?', options: ['5', '7', '8', '10'], correctIndex: 2, category: 'fourGospels', difficulty: 'hard' },
  { id: 'g19', question: 'Who asked Jesus "What is truth?"', options: ['Herod', 'Pilate', 'Caiaphas', 'Nicodemus'], correctIndex: 1, category: 'fourGospels', difficulty: 'medium' },
  { id: 'g20', question: 'Where was Jesus crucified?', options: ['The temple', 'Golgotha', 'Bethany', 'The garden'], correctIndex: 1, category: 'fourGospels', difficulty: 'easy' },

  // Pauline Letters
  { id: 'l1', question: 'Who wrote most of the New Testament letters?', options: ['Peter', 'John', 'Paul', 'James'], correctIndex: 2, category: 'paulineLetters', difficulty: 'easy' },
  { id: 'l2', question: 'What was Paul\'s name before conversion?', options: ['Simon', 'Saul', 'Samuel', 'Stephen'], correctIndex: 1, category: 'paulineLetters', difficulty: 'easy' },
  { id: 'l3', question: 'Which letter describes love in chapter 13?', options: ['Romans', '1 Corinthians', 'Ephesians', 'Philippians'], correctIndex: 1, category: 'paulineLetters', difficulty: 'medium' },
  { id: 'l4', question: 'What city was Paul from?', options: ['Jerusalem', 'Tarsus', 'Damascus', 'Antioch'], correctIndex: 1, category: 'paulineLetters', difficulty: 'medium' },
  { id: 'l5', question: 'Who did Paul write to about the armor of God?', options: ['Romans', 'Corinthians', 'Ephesians', 'Philippians'], correctIndex: 2, category: 'paulineLetters', difficulty: 'medium' },
  { id: 'l6', question: 'Which letter was written to a runaway slave\'s master?', options: ['Philemon', 'Titus', 'Timothy', 'Colossians'], correctIndex: 0, category: 'paulineLetters', difficulty: 'hard' },
  { id: 'l7', question: '"For me to live is Christ, to die is gain" is from?', options: ['Romans', 'Galatians', 'Philippians', 'Colossians'], correctIndex: 2, category: 'paulineLetters', difficulty: 'hard' },
  { id: 'l8', question: 'Which letter emphasizes justification by faith?', options: ['Romans', '1 Corinthians', 'Ephesians', '1 Timothy'], correctIndex: 0, category: 'paulineLetters', difficulty: 'medium' },
  { id: 'l9', question: 'Who was Timothy\'s mentor?', options: ['Peter', 'Paul', 'Barnabas', 'Silas'], correctIndex: 1, category: 'paulineLetters', difficulty: 'easy' },
  { id: 'l10', question: 'How many letters did Paul write to the Corinthians?', options: ['1', '2', '3', '4'], correctIndex: 1, category: 'paulineLetters', difficulty: 'easy' },
  { id: 'l11', question: 'Which letter warns against legalism?', options: ['Romans', 'Galatians', 'Ephesians', 'Philippians'], correctIndex: 1, category: 'paulineLetters', difficulty: 'medium' },
  { id: 'l12', question: '"I can do all things through Christ" is from which letter?', options: ['Romans', 'Galatians', 'Philippians', 'Colossians'], correctIndex: 2, category: 'paulineLetters', difficulty: 'medium' },
  { id: 'l13', question: 'Which letters were written to church leaders?', options: ['Ephesians', 'Philippians', '1 & 2 Timothy, Titus', 'Colossians'], correctIndex: 2, category: 'paulineLetters', difficulty: 'medium' },
  { id: 'l14', question: 'What does Paul call the church in Ephesians?', options: ['The Kingdom', 'The Body of Christ', 'The Temple', 'The Family'], correctIndex: 1, category: 'paulineLetters', difficulty: 'medium' },
  { id: 'l15', question: 'Which letter discusses the resurrection most?', options: ['Romans', '1 Corinthians', 'Galatians', 'Ephesians'], correctIndex: 1, category: 'paulineLetters', difficulty: 'hard' },
  { id: 'l16', question: 'Who was the companion of Titus?', options: ['Timothy', 'Silas', 'Paul', 'Barnabas'], correctIndex: 2, category: 'paulineLetters', difficulty: 'medium' },
  { id: 'l17', question: '"The fruit of the Spirit" is found in which letter?', options: ['Romans', 'Galatians', 'Ephesians', 'Colossians'], correctIndex: 1, category: 'paulineLetters', difficulty: 'medium' },
  { id: 'l18', question: 'Which letter was written from prison?', options: ['Romans', 'Galatians', 'Philippians', 'All of Paul\'s letters'], correctIndex: 2, category: 'paulineLetters', difficulty: 'hard' },
  { id: 'l19', question: 'What is the longest of Paul\'s letters?', options: ['Romans', '1 Corinthians', 'Ephesians', 'Galatians'], correctIndex: 0, category: 'paulineLetters', difficulty: 'medium' },
  { id: 'l20', question: '"Work out your salvation with fear and trembling" is from?', options: ['Romans', 'Galatians', 'Ephesians', 'Philippians'], correctIndex: 3, category: 'paulineLetters', difficulty: 'hard' },

  // New Testament General
  { id: 'n1', question: 'Who wrote the book of Revelation?', options: ['Paul', 'Peter', 'John', 'James'], correctIndex: 2, category: 'newTestament', difficulty: 'easy' },
  { id: 'n2', question: 'Who was the first Christian martyr?', options: ['Peter', 'Stephen', 'James', 'Paul'], correctIndex: 1, category: 'newTestament', difficulty: 'medium' },
  { id: 'n3', question: 'How many books are in the New Testament?', options: ['21', '27', '33', '39'], correctIndex: 1, category: 'newTestament', difficulty: 'medium' },
  { id: 'n4', question: 'Who wrote the book of Acts?', options: ['Paul', 'Peter', 'Luke', 'John'], correctIndex: 2, category: 'newTestament', difficulty: 'medium' },
  { id: 'n5', question: 'Where was John when he wrote Revelation?', options: ['Rome', 'Jerusalem', 'Patmos', 'Ephesus'], correctIndex: 2, category: 'newTestament', difficulty: 'medium' },
  { id: 'n6', question: 'What was the first church council about?', options: ['Baptism', 'Circumcision', 'Communion', 'Leadership'], correctIndex: 1, category: 'newTestament', difficulty: 'hard' },
  { id: 'n7', question: 'Who said "Faith without works is dead"?', options: ['Paul', 'Peter', 'James', 'John'], correctIndex: 2, category: 'newTestament', difficulty: 'medium' },
  { id: 'n8', question: 'What fell on believers at Pentecost?', options: ['Fire', 'The Holy Spirit', 'Tongues', 'All of these'], correctIndex: 3, category: 'newTestament', difficulty: 'medium' },
  { id: 'n9', question: 'Who was shipwrecked on Malta?', options: ['Peter', 'John', 'Paul', 'James'], correctIndex: 2, category: 'newTestament', difficulty: 'medium' },
  { id: 'n10', question: 'What is the last book of the Bible?', options: ['Jude', '3 John', 'Revelation', 'Hebrews'], correctIndex: 2, category: 'newTestament', difficulty: 'easy' },
  { id: 'n11', question: 'Who wrote about being "born again"?', options: ['Paul', 'Peter', 'John', 'James'], correctIndex: 1, category: 'newTestament', difficulty: 'hard' },
  { id: 'n12', question: 'Where did the early church first meet?', options: ['Synagogues', 'Temples', 'Homes', 'Outdoor areas'], correctIndex: 2, category: 'newTestament', difficulty: 'medium' },
  { id: 'n13', question: 'Who wrote the letter to the Hebrews?', options: ['Paul', 'Peter', 'Unknown', 'Luke'], correctIndex: 2, category: 'newTestament', difficulty: 'hard' },
  { id: 'n14', question: 'How many churches are addressed in Revelation?', options: ['5', '7', '10', '12'], correctIndex: 1, category: 'newTestament', difficulty: 'medium' },
  { id: 'n15', question: 'Who was Barnabas\'s cousin?', options: ['Timothy', 'Silas', 'Mark', 'Luke'], correctIndex: 2, category: 'newTestament', difficulty: 'hard' },
  { id: 'n16', question: 'What was the name of the street where Ananias found Saul?', options: ['Main Street', 'Straight', 'Damascus Road', 'Temple Way'], correctIndex: 1, category: 'newTestament', difficulty: 'hard' },
  { id: 'n17', question: 'Who was the tentmaker who traveled with Paul?', options: ['Silas', 'Barnabas', 'Aquila', 'Timothy'], correctIndex: 2, category: 'newTestament', difficulty: 'hard' },
  { id: 'n18', question: 'What book comes before Revelation?', options: ['Jude', '3 John', 'Hebrews', '2 Peter'], correctIndex: 0, category: 'newTestament', difficulty: 'medium' },
  { id: 'n19', question: 'Who fell asleep and fell out of a window during Paul\'s sermon?', options: ['Timothy', 'Eutychus', 'Trophimus', 'Aristarchus'], correctIndex: 1, category: 'newTestament', difficulty: 'hard' },
  { id: 'n20', question: 'What city was called "the place of two seas"?', options: ['Corinth', 'Ephesus', 'Malta', 'Rome'], correctIndex: 2, category: 'newTestament', difficulty: 'hard' },
];

export const getQuestionsByCategory = (category: string): QuizQuestion[] => {
  if (category === 'fullQuiz') {
    return [...allQuestions];
  }
  if (category === 'randomQuiz') {
    return shuffleArray([...allQuestions]).slice(0, 100);
  }
  return allQuestions.filter(q => q.category === category);
};

export const getQuestionsByDifficulty = (questions: QuizQuestion[], difficulty: 'easy' | 'medium' | 'hard'): QuizQuestion[] => {
  return questions.filter(q => q.difficulty === difficulty);
};

function shuffleArray<T>(array: T[]): T[] {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}
