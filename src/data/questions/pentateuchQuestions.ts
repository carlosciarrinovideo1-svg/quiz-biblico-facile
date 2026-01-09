import { QuizQuestion } from '../types';

export const pentateuchQuestions: QuizQuestion[] = [
  // Genesis
  { id: 'pent1', question: 'What did God say on the first day of creation?', options: ['Let there be water', 'Let there be light', 'Let there be land', 'Let there be life'], correctIndex: 1, category: 'pentateuch', difficulty: 'easy', reference: 'Genesis 1:3' },
  { id: 'pent2', question: 'What was the name of Adam\'s third son?', options: ['Abel', 'Cain', 'Seth', 'Enoch'], correctIndex: 2, category: 'pentateuch', difficulty: 'medium', reference: 'Genesis 4:25' },
  { id: 'pent3', question: 'How old was Methuselah when he died?', options: ['777', '895', '912', '969'], correctIndex: 3, category: 'pentateuch', difficulty: 'hard', reference: 'Genesis 5:27' },
  { id: 'pent4', question: 'What was the name of Noah\'s wife?', options: ['The Bible does not name her', 'Naamah', 'Emzara', 'Adah'], correctIndex: 0, category: 'pentateuch', difficulty: 'hard', reference: 'Genesis 6-9' },
  { id: 'pent5', question: 'How many of each clean animal did Noah take on the ark?', options: ['2', '7', '5', '14'], correctIndex: 1, category: 'pentateuch', difficulty: 'medium', reference: 'Genesis 7:2' },
  { id: 'pent6', question: 'Where did Noah\'s ark rest after the flood?', options: ['Mount Sinai', 'Mount Carmel', 'Mount Ararat', 'Mount Nebo'], correctIndex: 2, category: 'pentateuch', difficulty: 'medium', reference: 'Genesis 8:4' },
  { id: 'pent7', question: 'What was the original name of Abraham?', options: ['Abram', 'Abimelech', 'Ahab', 'Abner'], correctIndex: 0, category: 'pentateuch', difficulty: 'easy', reference: 'Genesis 17:5' },
  { id: 'pent8', question: 'Which son of Noah was the ancestor of the Semitic peoples?', options: ['Ham', 'Japheth', 'Shem', 'Canaan'], correctIndex: 2, category: 'pentateuch', difficulty: 'medium', reference: 'Genesis 10:21-31' },
  { id: 'pent9', question: 'What did God use to confuse the builders of the Tower of Babel?', options: ['A flood', 'Language confusion', 'Fire from heaven', 'An earthquake'], correctIndex: 1, category: 'pentateuch', difficulty: 'easy', reference: 'Genesis 11:7-9' },
  { id: 'pent10', question: 'Who was Lot\'s uncle?', options: ['Isaac', 'Abraham', 'Jacob', 'Terah'], correctIndex: 1, category: 'pentateuch', difficulty: 'medium', reference: 'Genesis 12:5' },
  
  // More Genesis
  { id: 'pent11', question: 'What cities did God destroy with fire and brimstone?', options: ['Jerusalem and Bethlehem', 'Sodom and Gomorrah', 'Nineveh and Babylon', 'Tyre and Sidon'], correctIndex: 1, category: 'pentateuch', difficulty: 'easy', reference: 'Genesis 19:24-25' },
  { id: 'pent12', question: 'What was the name of Abraham\'s servant girl who bore Ishmael?', options: ['Keturah', 'Hagar', 'Bilhah', 'Zilpah'], correctIndex: 1, category: 'pentateuch', difficulty: 'medium', reference: 'Genesis 16:1-4' },
  { id: 'pent13', question: 'What did Abraham almost sacrifice on Mount Moriah?', options: ['A lamb', 'A ram', 'Isaac his son', 'An ox'], correctIndex: 2, category: 'pentateuch', difficulty: 'easy', reference: 'Genesis 22:1-14' },
  { id: 'pent14', question: 'Who did Jacob deceive to receive the firstborn blessing?', options: ['His mother', 'His father Isaac', 'His brother Esau', 'His uncle Laban'], correctIndex: 1, category: 'pentateuch', difficulty: 'medium', reference: 'Genesis 27:1-29' },
  { id: 'pent15', question: 'What did Jacob see in his dream at Bethel?', options: ['A burning bush', 'A ladder to heaven', 'A talking donkey', 'A chariot of fire'], correctIndex: 1, category: 'pentateuch', difficulty: 'medium', reference: 'Genesis 28:12' },
  { id: 'pent16', question: 'How many years did Jacob work for Rachel?', options: ['7', '14', '21', '10'], correctIndex: 1, category: 'pentateuch', difficulty: 'medium', reference: 'Genesis 29:18-30' },
  { id: 'pent17', question: 'What new name did God give to Jacob?', options: ['Abraham', 'Israel', 'Judah', 'Joseph'], correctIndex: 1, category: 'pentateuch', difficulty: 'easy', reference: 'Genesis 32:28' },
  { id: 'pent18', question: 'Which of Joseph\'s brothers suggested selling him instead of killing him?', options: ['Reuben', 'Judah', 'Simeon', 'Levi'], correctIndex: 1, category: 'pentateuch', difficulty: 'hard', reference: 'Genesis 37:26-27' },
  { id: 'pent19', question: 'What was Joseph\'s position in Egypt before becoming second in command?', options: ['Baker', 'Cupbearer', 'Prisoner', 'Scribe'], correctIndex: 2, category: 'pentateuch', difficulty: 'medium', reference: 'Genesis 39:20' },
  { id: 'pent20', question: 'How many years of famine did Joseph predict?', options: ['3', '5', '7', '10'], correctIndex: 2, category: 'pentateuch', difficulty: 'medium', reference: 'Genesis 41:29-30' },
  
  // Exodus
  { id: 'pent21', question: 'In what did Moses\' mother place him as a baby?', options: ['A wooden crate', 'A basket of reeds', 'A clay pot', 'A leather bag'], correctIndex: 1, category: 'pentateuch', difficulty: 'easy', reference: 'Exodus 2:3' },
  { id: 'pent22', question: 'Who found baby Moses in the Nile?', options: ['A Hebrew midwife', 'Pharaoh\'s daughter', 'Miriam', 'Jochebed'], correctIndex: 1, category: 'pentateuch', difficulty: 'easy', reference: 'Exodus 2:5-6' },
  { id: 'pent23', question: 'Why did Moses flee to Midian?', options: ['He was seeking a wife', 'He killed an Egyptian', 'Pharaoh banished him', 'He went to find God'], correctIndex: 1, category: 'pentateuch', difficulty: 'medium', reference: 'Exodus 2:11-15' },
  { id: 'pent24', question: 'What was burning but not consumed when God spoke to Moses?', options: ['A tree', 'A bush', 'The altar', 'A rock'], correctIndex: 1, category: 'pentateuch', difficulty: 'easy', reference: 'Exodus 3:2' },
  { id: 'pent25', question: 'What name did God reveal to Moses at the burning bush?', options: ['El Shaddai', 'Adonai', 'I AM WHO I AM', 'Jehovah Jireh'], correctIndex: 2, category: 'pentateuch', difficulty: 'medium', reference: 'Exodus 3:14' },
  { id: 'pent26', question: 'What did Moses\' staff become when he threw it on the ground?', options: ['A rod of fire', 'A serpent', 'A flowering branch', 'A golden staff'], correctIndex: 1, category: 'pentateuch', difficulty: 'easy', reference: 'Exodus 4:3' },
  { id: 'pent27', question: 'Which plague involved gnats?', options: ['Second', 'Third', 'Fourth', 'Fifth'], correctIndex: 1, category: 'pentateuch', difficulty: 'hard', reference: 'Exodus 8:16-17' },
  { id: 'pent28', question: 'What did the Israelites put on their doorposts during Passover?', options: ['Oil', 'Water', 'Blood of a lamb', 'Flour'], correctIndex: 2, category: 'pentateuch', difficulty: 'easy', reference: 'Exodus 12:7' },
  { id: 'pent29', question: 'How did God lead the Israelites by day in the wilderness?', options: ['A pillar of fire', 'A pillar of cloud', 'An angel', 'The ark of the covenant'], correctIndex: 1, category: 'pentateuch', difficulty: 'medium', reference: 'Exodus 13:21' },
  { id: 'pent30', question: 'What did God send from heaven to feed the Israelites?', options: ['Quail only', 'Manna and quail', 'Bread and fish', 'Honey and milk'], correctIndex: 1, category: 'pentateuch', difficulty: 'easy', reference: 'Exodus 16:13-15' },
  
  // More Exodus
  { id: 'pent31', question: 'Who held up Moses\' hands during the battle with Amalek?', options: ['Joshua and Caleb', 'Aaron and Hur', 'Aaron and Miriam', 'Eleazar and Ithamar'], correctIndex: 1, category: 'pentateuch', difficulty: 'medium', reference: 'Exodus 17:12' },
  { id: 'pent32', question: 'What was kept inside the Ark of the Covenant?', options: ['The scrolls of the law', 'The tablets of the Ten Commandments', 'The priestly garments', 'The temple treasures'], correctIndex: 1, category: 'pentateuch', difficulty: 'medium', reference: 'Exodus 25:16' },
  { id: 'pent33', question: 'How long was Moses on Mount Sinai receiving the law?', options: ['7 days', '40 days and nights', '12 days', '30 days'], correctIndex: 1, category: 'pentateuch', difficulty: 'medium', reference: 'Exodus 24:18' },
  { id: 'pent34', question: 'What was the name of the portable sanctuary built in the wilderness?', options: ['The Temple', 'The Tabernacle', 'The Synagogue', 'The Holy Place'], correctIndex: 1, category: 'pentateuch', difficulty: 'easy', reference: 'Exodus 25:8-9' },
  { id: 'pent35', question: 'Who made the golden calf?', options: ['The people themselves', 'Aaron', 'A foreign priest', 'Moses'], correctIndex: 1, category: 'pentateuch', difficulty: 'medium', reference: 'Exodus 32:4' },
  
  // Leviticus
  { id: 'pent36', question: 'What was the Day of Atonement called in Hebrew?', options: ['Pesach', 'Sukkot', 'Yom Kippur', 'Shavuot'], correctIndex: 2, category: 'pentateuch', difficulty: 'medium', reference: 'Leviticus 23:27-28' },
  { id: 'pent37', question: 'What animal was sent into the wilderness on the Day of Atonement?', options: ['A lamb', 'A bull', 'A goat (scapegoat)', 'A dove'], correctIndex: 2, category: 'pentateuch', difficulty: 'medium', reference: 'Leviticus 16:20-22' },
  { id: 'pent38', question: 'What did the Israelites have to do every seventh year?', options: ['Fast for 40 days', 'Let the land rest', 'Rebuild the tabernacle', 'Travel to Jerusalem'], correctIndex: 1, category: 'pentateuch', difficulty: 'hard', reference: 'Leviticus 25:4' },
  { id: 'pent39', question: 'What happened to Nadab and Abihu for offering unauthorized fire?', options: ['They were banished', 'They died by fire from God', 'They became lepers', 'They lost their priesthood'], correctIndex: 1, category: 'pentateuch', difficulty: 'hard', reference: 'Leviticus 10:1-2' },
  { id: 'pent40', question: 'What year was the Year of Jubilee?', options: ['Every 7th year', 'Every 25th year', 'Every 50th year', 'Every 100th year'], correctIndex: 2, category: 'pentateuch', difficulty: 'hard', reference: 'Leviticus 25:10' },
  
  // Numbers
  { id: 'pent41', question: 'How many spies were sent to explore Canaan?', options: ['10', '12', '7', '40'], correctIndex: 1, category: 'pentateuch', difficulty: 'easy', reference: 'Numbers 13:1-16' },
  { id: 'pent42', question: 'Which two spies gave a good report about Canaan?', options: ['Moses and Aaron', 'Joshua and Caleb', 'Eleazar and Ithamar', 'Korah and Dathan'], correctIndex: 1, category: 'pentateuch', difficulty: 'easy', reference: 'Numbers 14:6-8' },
  { id: 'pent43', question: 'What happened when Moses struck the rock at Meribah instead of speaking to it?', options: ['The rock split in two', 'He was forbidden to enter Canaan', 'Fire came from the rock', 'Nothing happened'], correctIndex: 1, category: 'pentateuch', difficulty: 'medium', reference: 'Numbers 20:11-12' },
  { id: 'pent44', question: 'What did the bronze serpent heal?', options: ['Leprosy', 'Blindness', 'Snake bites', 'Plague'], correctIndex: 2, category: 'pentateuch', difficulty: 'medium', reference: 'Numbers 21:8-9' },
  { id: 'pent45', question: 'Who hired Balaam to curse Israel?', options: ['Pharaoh', 'Balak king of Moab', 'The king of Edom', 'The Amalekites'], correctIndex: 1, category: 'pentateuch', difficulty: 'medium', reference: 'Numbers 22:4-6' },
  
  // Deuteronomy
  { id: 'pent46', question: 'What does "Deuteronomy" mean?', options: ['Laws of God', 'Second law', 'Final words', 'Holy commands'], correctIndex: 1, category: 'pentateuch', difficulty: 'hard', reference: 'Deuteronomy (title meaning)' },
  { id: 'pent47', question: 'Where did Moses deliver his farewell speeches?', options: ['Mount Sinai', 'Plains of Moab', 'Kadesh Barnea', 'The wilderness of Sin'], correctIndex: 1, category: 'pentateuch', difficulty: 'hard', reference: 'Deuteronomy 1:5' },
  { id: 'pent48', question: 'What is the "Shema" which begins Deuteronomy 6:4?', options: ['A prayer for forgiveness', 'A declaration of God\'s oneness', 'A blessing for meals', 'A command to sacrifice'], correctIndex: 1, category: 'pentateuch', difficulty: 'medium', reference: 'Deuteronomy 6:4' },
  { id: 'pent49', question: 'From which mountain did Moses view the Promised Land before dying?', options: ['Mount Sinai', 'Mount Carmel', 'Mount Nebo', 'Mount Hermon'], correctIndex: 2, category: 'pentateuch', difficulty: 'medium', reference: 'Deuteronomy 34:1' },
  { id: 'pent50', question: 'Who buried Moses?', options: ['Joshua', 'Aaron', 'The Israelites', 'God Himself'], correctIndex: 3, category: 'pentateuch', difficulty: 'hard', reference: 'Deuteronomy 34:5-6' },
];
