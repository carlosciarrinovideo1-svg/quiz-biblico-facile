import { QuizQuestion } from '../types';

export const historicalBooksQuestions: QuizQuestion[] = [
  // Giosuè
  {
    id: 'hist_001',
    question: 'Who succeeded Moses as the leader of Israel?',
    options: ['Aaron', 'Caleb', 'Joshua', 'Eleazar'],
    correctIndex: 2,
    category: 'historicalBooks',
    difficulty: 'easy',
    reference: 'Joshua 1:1-2',
    explanation: 'Joshua son of Nun was chosen by God to lead Israel into the Promised Land after Moses\' death.'
  },
  {
    id: 'hist_002',
    question: 'What city\'s walls fell down after Israel marched around it?',
    options: ['Jerusalem', 'Jericho', 'Ai', 'Hebron'],
    correctIndex: 1,
    category: 'historicalBooks',
    difficulty: 'easy',
    reference: 'Joshua 6:20',
    explanation: 'The walls of Jericho collapsed after the Israelites marched around the city for seven days.'
  },
  {
    id: 'hist_003',
    question: 'How many days did Israel march around Jericho?',
    options: ['3', '7', '12', '40'],
    correctIndex: 1,
    category: 'historicalBooks',
    difficulty: 'easy',
    reference: 'Joshua 6:14-15',
    explanation: 'Israel marched around Jericho once a day for six days, then seven times on the seventh day.'
  },
  {
    id: 'hist_004',
    question: 'Who was the prostitute who helped the Israelite spies in Jericho?',
    options: ['Ruth', 'Rahab', 'Deborah', 'Tamar'],
    correctIndex: 1,
    category: 'historicalBooks',
    difficulty: 'easy',
    reference: 'Joshua 2:1',
    explanation: 'Rahab hid the spies and helped them escape, and her family was saved when Jericho fell.'
  },
  {
    id: 'hist_005',
    question: 'What did Joshua command the sun to do during battle?',
    options: ['Set quickly', 'Stand still', 'Rise again', 'Darken'],
    correctIndex: 1,
    category: 'historicalBooks',
    difficulty: 'medium',
    reference: 'Joshua 10:12-13',
    explanation: 'Joshua commanded the sun to stand still over Gibeon, and it stopped for about a full day.'
  },
  {
    id: 'hist_006',
    question: 'Who stole devoted things from Jericho, causing Israel\'s defeat at Ai?',
    options: ['Caleb', 'Achan', 'Phinehas', 'Eleazar'],
    correctIndex: 1,
    category: 'historicalBooks',
    difficulty: 'medium',
    reference: 'Joshua 7:1',
    explanation: 'Achan took a beautiful robe, silver, and gold from Jericho, violating God\'s command.'
  },
  {
    id: 'hist_007',
    question: 'What river did Israel cross to enter the Promised Land?',
    options: ['Nile', 'Euphrates', 'Jordan', 'Red Sea'],
    correctIndex: 2,
    category: 'historicalBooks',
    difficulty: 'easy',
    reference: 'Joshua 3:14-17',
    explanation: 'Israel crossed the Jordan River on dry ground, as God stopped the waters.'
  },
  {
    id: 'hist_008',
    question: 'How many stones were taken from the Jordan as a memorial?',
    options: ['7', '10', '12', '40'],
    correctIndex: 2,
    category: 'historicalBooks',
    difficulty: 'medium',
    reference: 'Joshua 4:3',
    explanation: 'Twelve stones were taken, one for each tribe of Israel, as a memorial.'
  },
  // Giudici
  {
    id: 'hist_009',
    question: 'Who was the female judge of Israel?',
    options: ['Ruth', 'Deborah', 'Hannah', 'Miriam'],
    correctIndex: 1,
    category: 'historicalBooks',
    difficulty: 'easy',
    reference: 'Judges 4:4',
    explanation: 'Deborah was a prophetess and judge who led Israel to victory over Sisera.'
  },
  {
    id: 'hist_010',
    question: 'What was the source of Samson\'s great strength?',
    options: ['His muscles', 'His diet', 'His Nazirite vow and the Spirit of God', 'A magic ring'],
    correctIndex: 2,
    category: 'historicalBooks',
    difficulty: 'medium',
    reference: 'Judges 13:5, 14:6',
    explanation: 'Samson\'s strength came from the Spirit of the LORD and his Nazirite vow, symbolized by his uncut hair.'
  },
  {
    id: 'hist_011',
    question: 'Who cut Samson\'s hair, causing him to lose his strength?',
    options: ['Delilah', 'His mother', 'A Philistine soldier', 'A servant'],
    correctIndex: 0,
    category: 'historicalBooks',
    difficulty: 'easy',
    reference: 'Judges 16:19',
    explanation: 'Delilah had a man shave off Samson\'s seven braids while he slept on her lap.'
  },
  {
    id: 'hist_012',
    question: 'What weapon did Samson use to kill 1,000 Philistines?',
    options: ['A sword', 'A donkey\'s jawbone', 'A spear', 'His bare hands'],
    correctIndex: 1,
    category: 'historicalBooks',
    difficulty: 'easy',
    reference: 'Judges 15:15',
    explanation: 'Samson found a fresh jawbone of a donkey and struck down a thousand men.'
  },
  {
    id: 'hist_013',
    question: 'Which judge tested God with a fleece?',
    options: ['Samson', 'Gideon', 'Jephthah', 'Ehud'],
    correctIndex: 1,
    category: 'historicalBooks',
    difficulty: 'medium',
    reference: 'Judges 6:36-40',
    explanation: 'Gideon asked God for a sign with a wool fleece, first wet then dry.'
  },
  {
    id: 'hist_014',
    question: 'How many men did Gideon have in his final army against Midian?',
    options: ['300', '1,000', '10,000', '32,000'],
    correctIndex: 0,
    category: 'historicalBooks',
    difficulty: 'medium',
    reference: 'Judges 7:7',
    explanation: 'God reduced Gideon\'s army from 32,000 to just 300 men to show His power.'
  },
  {
    id: 'hist_015',
    question: 'Who was the left-handed judge who killed King Eglon?',
    options: ['Othniel', 'Ehud', 'Shamgar', 'Gideon'],
    correctIndex: 1,
    category: 'historicalBooks',
    difficulty: 'hard',
    reference: 'Judges 3:15-21',
    explanation: 'Ehud was left-handed and used a hidden sword to assassinate Eglon, king of Moab.'
  },
  {
    id: 'hist_016',
    question: 'What general was killed by Jael with a tent peg?',
    options: ['Sisera', 'Jabin', 'Eglon', 'Abimelech'],
    correctIndex: 0,
    category: 'historicalBooks',
    difficulty: 'medium',
    reference: 'Judges 4:21',
    explanation: 'Jael drove a tent peg through Sisera\'s temple while he slept in her tent.'
  },
  {
    id: 'hist_017',
    question: 'How did Samson die?',
    options: ['In battle', 'Pulling down a temple on the Philistines and himself', 'Old age', 'Executed'],
    correctIndex: 1,
    category: 'historicalBooks',
    difficulty: 'easy',
    reference: 'Judges 16:29-30',
    explanation: 'Samson pushed the pillars of the temple of Dagon, killing himself and more Philistines than during his life.'
  },
  // Ruth
  {
    id: 'hist_018',
    question: 'Who was Ruth\'s mother-in-law?',
    options: ['Hannah', 'Naomi', 'Orpah', 'Deborah'],
    correctIndex: 1,
    category: 'historicalBooks',
    difficulty: 'easy',
    reference: 'Ruth 1:4',
    explanation: 'Naomi was Ruth\'s mother-in-law who returned to Bethlehem from Moab.'
  },
  {
    id: 'hist_019',
    question: 'Where was Ruth originally from?',
    options: ['Israel', 'Egypt', 'Moab', 'Edom'],
    correctIndex: 2,
    category: 'historicalBooks',
    difficulty: 'easy',
    reference: 'Ruth 1:4',
    explanation: 'Ruth was a Moabite woman who married into Naomi\'s family.'
  },
  {
    id: 'hist_020',
    question: 'Who did Ruth marry in Bethlehem?',
    options: ['Boaz', 'Elimelech', 'Mahlon', 'Chilion'],
    correctIndex: 0,
    category: 'historicalBooks',
    difficulty: 'easy',
    reference: 'Ruth 4:13',
    explanation: 'Boaz, a kinsman-redeemer, married Ruth and they became ancestors of King David.'
  },
  {
    id: 'hist_021',
    question: 'What famous declaration did Ruth make to Naomi?',
    options: ['I will return to Moab', 'Your people will be my people, your God my God', 'I will find a new husband', 'I will stay here'],
    correctIndex: 1,
    category: 'historicalBooks',
    difficulty: 'easy',
    reference: 'Ruth 1:16',
    explanation: 'Ruth declared her loyalty to Naomi with these famous words of commitment.'
  },
  {
    id: 'hist_022',
    question: 'What was Ruth doing when Boaz first noticed her?',
    options: ['Drawing water', 'Gleaning in his field', 'Selling bread', 'Praying'],
    correctIndex: 1,
    category: 'historicalBooks',
    difficulty: 'easy',
    reference: 'Ruth 2:5',
    explanation: 'Ruth was gleaning leftover grain in Boaz\'s field when he first noticed her.'
  },
  {
    id: 'hist_023',
    question: 'Who was the son of Ruth and Boaz?',
    options: ['Jesse', 'Obed', 'David', 'Solomon'],
    correctIndex: 1,
    category: 'historicalBooks',
    difficulty: 'medium',
    reference: 'Ruth 4:17',
    explanation: 'Obed was born to Ruth and Boaz, becoming the grandfather of King David.'
  },
  // 1 Samuele
  {
    id: 'hist_024',
    question: 'Who was Samuel\'s mother?',
    options: ['Peninnah', 'Hannah', 'Rachel', 'Miriam'],
    correctIndex: 1,
    category: 'historicalBooks',
    difficulty: 'easy',
    reference: '1 Samuel 1:20',
    explanation: 'Hannah prayed for a son and dedicated Samuel to the LORD\'s service.'
  },
  {
    id: 'hist_025',
    question: 'Who was the first king of Israel?',
    options: ['David', 'Solomon', 'Saul', 'Samuel'],
    correctIndex: 2,
    category: 'historicalBooks',
    difficulty: 'easy',
    reference: '1 Samuel 10:24',
    explanation: 'Saul, son of Kish, was anointed by Samuel as Israel\'s first king.'
  },
  {
    id: 'hist_026',
    question: 'Who killed Goliath?',
    options: ['Saul', 'Jonathan', 'David', 'Samuel'],
    correctIndex: 2,
    category: 'historicalBooks',
    difficulty: 'easy',
    reference: '1 Samuel 17:50',
    explanation: 'David killed Goliath with a stone from his sling, striking him in the forehead.'
  },
  {
    id: 'hist_027',
    question: 'How tall was Goliath according to the Hebrew text?',
    options: ['About 6 feet', 'About 9 feet (6 cubits and a span)', 'About 12 feet', 'About 15 feet'],
    correctIndex: 1,
    category: 'historicalBooks',
    difficulty: 'medium',
    reference: '1 Samuel 17:4',
    explanation: 'Goliath was six cubits and a span tall, approximately 9 feet or 2.9 meters.'
  },
  {
    id: 'hist_028',
    question: 'What weapon did David use to kill Goliath?',
    options: ['Sword', 'Spear', 'Sling and stone', 'Bow and arrow'],
    correctIndex: 2,
    category: 'historicalBooks',
    difficulty: 'easy',
    reference: '1 Samuel 17:49',
    explanation: 'David used his shepherd\'s sling and a smooth stone to strike down Goliath.'
  },
  {
    id: 'hist_029',
    question: 'Who was David\'s best friend?',
    options: ['Saul', 'Jonathan', 'Abner', 'Nathan'],
    correctIndex: 1,
    category: 'historicalBooks',
    difficulty: 'easy',
    reference: '1 Samuel 18:1',
    explanation: 'Jonathan, Saul\'s son, loved David as himself and they made a covenant of friendship.'
  },
  {
    id: 'hist_030',
    question: 'What instrument did David play for Saul?',
    options: ['Flute', 'Trumpet', 'Harp (lyre)', 'Drums'],
    correctIndex: 2,
    category: 'historicalBooks',
    difficulty: 'easy',
    reference: '1 Samuel 16:23',
    explanation: 'David played the lyre to soothe Saul when an evil spirit troubled him.'
  },
  {
    id: 'hist_031',
    question: 'How many stones did David pick up before facing Goliath?',
    options: ['1', '3', '5', '7'],
    correctIndex: 2,
    category: 'historicalBooks',
    difficulty: 'medium',
    reference: '1 Samuel 17:40',
    explanation: 'David chose five smooth stones from the stream, though he only needed one.'
  },
  {
    id: 'hist_032',
    question: 'Who anointed David as king?',
    options: ['Nathan', 'Samuel', 'Eli', 'Moses'],
    correctIndex: 1,
    category: 'historicalBooks',
    difficulty: 'easy',
    reference: '1 Samuel 16:13',
    explanation: 'Samuel anointed David in the presence of his brothers, and the Spirit of the LORD came upon him.'
  },
  // 2 Samuele
  {
    id: 'hist_033',
    question: 'Which city did David conquer and make his capital?',
    options: ['Hebron', 'Bethlehem', 'Jerusalem', 'Shiloh'],
    correctIndex: 2,
    category: 'historicalBooks',
    difficulty: 'medium',
    reference: '2 Samuel 5:6-7',
    explanation: 'David conquered the fortress of Zion (Jerusalem) from the Jebusites and made it the City of David.'
  },
  {
    id: 'hist_034',
    question: 'What woman did David commit adultery with?',
    options: ['Michal', 'Abigail', 'Bathsheba', 'Ahinoam'],
    correctIndex: 2,
    category: 'historicalBooks',
    difficulty: 'easy',
    reference: '2 Samuel 11:4',
    explanation: 'David saw Bathsheba bathing and committed adultery with her while her husband Uriah was at war.'
  },
  {
    id: 'hist_035',
    question: 'Who was Bathsheba\'s husband whom David had killed?',
    options: ['Joab', 'Uriah', 'Abner', 'Nathan'],
    correctIndex: 1,
    category: 'historicalBooks',
    difficulty: 'medium',
    reference: '2 Samuel 11:3',
    explanation: 'Uriah the Hittite was Bathsheba\'s husband; David arranged for him to die in battle.'
  },
  {
    id: 'hist_036',
    question: 'Which prophet confronted David about his sin with Bathsheba?',
    options: ['Samuel', 'Nathan', 'Elijah', 'Gad'],
    correctIndex: 1,
    category: 'historicalBooks',
    difficulty: 'medium',
    reference: '2 Samuel 12:1',
    explanation: 'Nathan told David a parable about a rich man who stole a poor man\'s lamb, revealing David\'s sin.'
  },
  {
    id: 'hist_037',
    question: 'Which son of David rebelled against him?',
    options: ['Solomon', 'Absalom', 'Amnon', 'Adonijah'],
    correctIndex: 1,
    category: 'historicalBooks',
    difficulty: 'medium',
    reference: '2 Samuel 15:10',
    explanation: 'Absalom conspired against David and proclaimed himself king in Hebron.'
  },
  {
    id: 'hist_038',
    question: 'How did Absalom die?',
    options: ['In battle', 'His hair caught in an oak tree and he was killed', 'Poisoned', 'Natural causes'],
    correctIndex: 1,
    category: 'historicalBooks',
    difficulty: 'medium',
    reference: '2 Samuel 18:9-15',
    explanation: 'Absalom\'s head got caught in an oak tree while riding his mule, and Joab killed him.'
  },
  // 1 Re
  {
    id: 'hist_039',
    question: 'Who succeeded David as king of Israel?',
    options: ['Absalom', 'Adonijah', 'Solomon', 'Rehoboam'],
    correctIndex: 2,
    category: 'historicalBooks',
    difficulty: 'easy',
    reference: '1 Kings 1:39',
    explanation: 'Solomon, David\'s son by Bathsheba, was anointed king as David\'s successor.'
  },
  {
    id: 'hist_040',
    question: 'What did Solomon ask God for when God appeared to him?',
    options: ['Long life', 'Wealth', 'Wisdom', 'Victory over enemies'],
    correctIndex: 2,
    category: 'historicalBooks',
    difficulty: 'easy',
    reference: '1 Kings 3:9',
    explanation: 'Solomon asked for wisdom to govern the people, which pleased God who gave him wisdom and much more.'
  },
  {
    id: 'hist_041',
    question: 'How did Solomon resolve the dispute between two mothers claiming the same baby?',
    options: ['Asked witnesses', 'Cast lots', 'Threatened to cut the baby in half', 'Asked the baby'],
    correctIndex: 2,
    category: 'historicalBooks',
    difficulty: 'easy',
    reference: '1 Kings 3:24-27',
    explanation: 'Solomon ordered the baby to be cut in half; the real mother gave up her claim to save the child\'s life.'
  },
  {
    id: 'hist_042',
    question: 'Who built the first temple in Jerusalem?',
    options: ['David', 'Solomon', 'Moses', 'Zerubbabel'],
    correctIndex: 1,
    category: 'historicalBooks',
    difficulty: 'easy',
    reference: '1 Kings 6:1',
    explanation: 'Solomon built the temple that David had wanted to build, using materials David had gathered.'
  },
  {
    id: 'hist_043',
    question: 'How many years did it take to build Solomon\'s temple?',
    options: ['3', '7', '12', '20'],
    correctIndex: 1,
    category: 'historicalBooks',
    difficulty: 'medium',
    reference: '1 Kings 6:38',
    explanation: 'The temple took seven years to complete.'
  },
  {
    id: 'hist_044',
    question: 'Which prophet challenged the prophets of Baal on Mount Carmel?',
    options: ['Elisha', 'Elijah', 'Isaiah', 'Nathan'],
    correctIndex: 1,
    category: 'historicalBooks',
    difficulty: 'easy',
    reference: '1 Kings 18:19',
    explanation: 'Elijah challenged 450 prophets of Baal to a contest to prove who was the true God.'
  },
  {
    id: 'hist_045',
    question: 'How was Elijah taken to heaven?',
    options: ['He died naturally', 'In a chariot of fire and whirlwind', 'Angels carried him', 'He walked into the sea'],
    correctIndex: 1,
    category: 'historicalBooks',
    difficulty: 'easy',
    reference: '2 Kings 2:11',
    explanation: 'A chariot of fire and horses of fire separated Elijah from Elisha, and Elijah went up by a whirlwind.'
  },
  // 2 Re
  {
    id: 'hist_046',
    question: 'Who succeeded Elijah as prophet?',
    options: ['Elisha', 'Isaiah', 'Jeremiah', 'Micah'],
    correctIndex: 0,
    category: 'historicalBooks',
    difficulty: 'easy',
    reference: '2 Kings 2:13-15',
    explanation: 'Elisha received Elijah\'s mantle and a double portion of his spirit.'
  },
  {
    id: 'hist_047',
    question: 'What Syrian commander was healed of leprosy by Elisha?',
    options: ['Ben-Hadad', 'Hazael', 'Naaman', 'Rezin'],
    correctIndex: 2,
    category: 'historicalBooks',
    difficulty: 'medium',
    reference: '2 Kings 5:14',
    explanation: 'Naaman dipped seven times in the Jordan River and was cleansed of his leprosy.'
  },
  {
    id: 'hist_048',
    question: 'How many times did Naaman have to dip in the Jordan to be healed?',
    options: ['3', '5', '7', '10'],
    correctIndex: 2,
    category: 'historicalBooks',
    difficulty: 'easy',
    reference: '2 Kings 5:10',
    explanation: 'Elisha told Naaman to wash seven times in the Jordan River.'
  },
  {
    id: 'hist_049',
    question: 'Which king of Judah found the Book of the Law in the temple?',
    options: ['Hezekiah', 'Josiah', 'Manasseh', 'Amon'],
    correctIndex: 1,
    category: 'historicalBooks',
    difficulty: 'medium',
    reference: '2 Kings 22:8',
    explanation: 'During Josiah\'s reign, Hilkiah the priest found the Book of the Law during temple repairs.'
  },
  {
    id: 'hist_050',
    question: 'Which empire conquered Judah and destroyed the temple in 586 BC?',
    options: ['Assyria', 'Babylon', 'Persia', 'Egypt'],
    correctIndex: 1,
    category: 'historicalBooks',
    difficulty: 'medium',
    reference: '2 Kings 25:8-9',
    explanation: 'Nebuchadnezzar\'s Babylonian army destroyed Jerusalem and Solomon\'s temple.'
  }
];
