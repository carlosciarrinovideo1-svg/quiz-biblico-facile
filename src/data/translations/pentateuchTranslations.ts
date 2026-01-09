import { Language } from '@/contexts/LanguageContext';

interface QuestionTranslation {
  question: string;
  options: string[];
  explanation?: string;
}

type QuestionTranslations = {
  [id: string]: {
    [lang in Language]?: QuestionTranslation;
  };
};

export const pentateuchTranslations: QuestionTranslations = {
  pent1: {
    en: { question: 'What did God say on the first day of creation?', options: ['Let there be water', 'Let there be light', 'Let there be land', 'Let there be life'], explanation: 'God\'s first creative command was "Let there be light," and there was light.' },
    it: { question: 'Cosa disse Dio il primo giorno della creazione?', options: ['Sia la luce', 'Sia l\'acqua', 'Sia la terra', 'Sia la vita'], explanation: 'Il primo comando creativo di Dio fu "Sia la luce", e la luce fu.' },
    es: { question: '¿Qué dijo Dios el primer día de la creación?', options: ['Haya agua', 'Haya luz', 'Haya tierra', 'Haya vida'], explanation: 'El primer mandato creativo de Dios fue "Haya luz", y hubo luz.' },
    pt: { question: 'O que Deus disse no primeiro dia da criação?', options: ['Haja água', 'Haja luz', 'Haja terra', 'Haja vida'], explanation: 'O primeiro comando criativo de Deus foi "Haja luz", e houve luz.' },
    fr: { question: 'Que dit Dieu le premier jour de la création?', options: ['Qu\'il y ait de l\'eau', 'Que la lumière soit', 'Qu\'il y ait la terre', 'Qu\'il y ait la vie'], explanation: 'Le premier commandement créatif de Dieu fut "Que la lumière soit", et la lumière fut.' }
  },
  pent2: {
    en: { question: 'What was the name of Adam\'s third son?', options: ['Abel', 'Cain', 'Seth', 'Enoch'], explanation: 'After Cain killed Abel, Adam and Eve had another son named Seth, through whom the godly line continued.' },
    it: { question: 'Qual era il nome del terzo figlio di Adamo?', options: ['Abele', 'Caino', 'Set', 'Enoc'], explanation: 'Dopo che Caino uccise Abele, Adamo ed Eva ebbero un altro figlio di nome Set, attraverso il quale continuò la linea dei giusti.' },
    es: { question: '¿Cuál era el nombre del tercer hijo de Adán?', options: ['Abel', 'Caín', 'Set', 'Enoc'], explanation: 'Después de que Caín matara a Abel, Adán y Eva tuvieron otro hijo llamado Set, a través de quien continuó la línea piadosa.' },
    pt: { question: 'Qual era o nome do terceiro filho de Adão?', options: ['Abel', 'Caim', 'Sete', 'Enoque'], explanation: 'Depois que Caim matou Abel, Adão e Eva tiveram outro filho chamado Sete, através de quem a linhagem piedosa continuou.' },
    fr: { question: 'Quel était le nom du troisième fils d\'Adam?', options: ['Abel', 'Caïn', 'Seth', 'Énoch'], explanation: 'Après que Caïn ait tué Abel, Adam et Ève eurent un autre fils nommé Seth, par qui la lignée pieuse continua.' }
  },
  pent3: {
    en: { question: 'How old was Methuselah when he died?', options: ['777', '895', '912', '969'], explanation: 'Methuselah lived 969 years, making him the oldest person recorded in the Bible.' },
    it: { question: 'Quanti anni aveva Matusalemme quando morì?', options: ['777', '895', '912', '969'], explanation: 'Matusalemme visse 969 anni, rendendolo la persona più longeva registrata nella Bibbia.' },
    es: { question: '¿Cuántos años tenía Matusalén cuando murió?', options: ['777', '895', '912', '969'], explanation: 'Matusalén vivió 969 años, convirtiéndolo en la persona más longeva registrada en la Biblia.' },
    pt: { question: 'Quantos anos tinha Matusalém quando morreu?', options: ['777', '895', '912', '969'], explanation: 'Matusalém viveu 969 anos, tornando-o a pessoa mais velha registrada na Bíblia.' },
    fr: { question: 'Quel âge avait Mathusalem quand il mourut?', options: ['777', '895', '912', '969'], explanation: 'Mathusalem vécut 969 ans, ce qui en fait la personne la plus âgée mentionnée dans la Bible.' }
  },
  pent4: {
    en: { question: 'What was the name of Noah\'s wife?', options: ['The Bible does not name her', 'Naamah', 'Emzara', 'Adah'], explanation: 'The Bible does not reveal the name of Noah\'s wife. Various traditions have given her different names, but these are not biblical.' },
    it: { question: 'Qual era il nome della moglie di Noè?', options: ['La Bibbia non la nomina', 'Naama', 'Emzara', 'Ada'], explanation: 'La Bibbia non rivela il nome della moglie di Noè. Varie tradizioni le hanno dato nomi diversi, ma questi non sono biblici.' },
    es: { question: '¿Cuál era el nombre de la esposa de Noé?', options: ['La Biblia no la nombra', 'Naama', 'Emzara', 'Ada'], explanation: 'La Biblia no revela el nombre de la esposa de Noé. Varias tradiciones le han dado diferentes nombres, pero estos no son bíblicos.' },
    pt: { question: 'Qual era o nome da esposa de Noé?', options: ['A Bíblia não a nomeia', 'Naamá', 'Emzara', 'Ada'], explanation: 'A Bíblia não revela o nome da esposa de Noé. Várias tradições lhe deram nomes diferentes, mas estes não são bíblicos.' },
    fr: { question: 'Quel était le nom de la femme de Noé?', options: ['La Bible ne la nomme pas', 'Naama', 'Emzara', 'Ada'], explanation: 'La Bible ne révèle pas le nom de la femme de Noé. Diverses traditions lui ont donné différents noms, mais ceux-ci ne sont pas bibliques.' }
  },
  pent5: {
    en: { question: 'How many of each clean animal did Noah take on the ark?', options: ['2', '7', '5', '14'], explanation: 'God commanded Noah to take seven pairs of each clean animal onto the ark, but only one pair of unclean animals.' },
    it: { question: 'Quanti animali puri di ogni specie portò Noè sull\'arca?', options: ['2', '7', '5', '14'], explanation: 'Dio comandò a Noè di prendere sette coppie di ogni animale puro sull\'arca, ma solo una coppia di animali impuri.' },
    es: { question: '¿Cuántos animales limpios de cada especie llevó Noé al arca?', options: ['2', '7', '5', '14'], explanation: 'Dios ordenó a Noé tomar siete parejas de cada animal limpio en el arca, pero solo una pareja de animales inmundos.' },
    pt: { question: 'Quantos animais limpos de cada espécie Noé levou na arca?', options: ['2', '7', '5', '14'], explanation: 'Deus ordenou a Noé levar sete pares de cada animal limpo na arca, mas apenas um par de animais impuros.' },
    fr: { question: 'Combien d\'animaux purs de chaque espèce Noé a-t-il pris dans l\'arche?', options: ['2', '7', '5', '14'], explanation: 'Dieu ordonna à Noé de prendre sept couples de chaque animal pur dans l\'arche, mais seulement un couple d\'animaux impurs.' }
  },
  pent6: {
    en: { question: 'Where did Noah\'s ark rest after the flood?', options: ['Mount Sinai', 'Mount Carmel', 'Mount Ararat', 'Mount Nebo'], explanation: 'After the flood waters receded, Noah\'s ark came to rest on the mountains of Ararat.' },
    it: { question: 'Dove si posò l\'arca di Noè dopo il diluvio?', options: ['Monte Sinai', 'Monte Carmelo', 'Monte Ararat', 'Monte Nebo'], explanation: 'Dopo che le acque del diluvio si ritirarono, l\'arca di Noè si posò sui monti dell\'Ararat.' },
    es: { question: '¿Dónde reposó el arca de Noé después del diluvio?', options: ['Monte Sinaí', 'Monte Carmelo', 'Monte Ararat', 'Monte Nebo'], explanation: 'Después de que las aguas del diluvio bajaron, el arca de Noé reposó sobre los montes de Ararat.' },
    pt: { question: 'Onde a arca de Noé repousou após o dilúvio?', options: ['Monte Sinai', 'Monte Carmelo', 'Monte Ararate', 'Monte Nebo'], explanation: 'Depois que as águas do dilúvio baixaram, a arca de Noé repousou sobre os montes de Ararate.' },
    fr: { question: 'Où l\'arche de Noé s\'est-elle posée après le déluge?', options: ['Mont Sinaï', 'Mont Carmel', 'Mont Ararat', 'Mont Nébo'], explanation: 'Après que les eaux du déluge se soient retirées, l\'arche de Noé se posa sur les montagnes d\'Ararat.' }
  },
  pent7: {
    en: { question: 'What was the original name of Abraham?', options: ['Abram', 'Abimelech', 'Ahab', 'Abner'], explanation: 'Abraham was originally named Abram, meaning "exalted father." God changed his name to Abraham, meaning "father of many."' },
    it: { question: 'Qual era il nome originale di Abramo?', options: ['Abramo', 'Abimelec', 'Acab', 'Abner'], explanation: 'Abramo si chiamava originariamente Abramo (Abram), che significa "padre esaltato". Dio cambiò il suo nome in Abramo, che significa "padre di molti".' },
    es: { question: '¿Cuál era el nombre original de Abraham?', options: ['Abram', 'Abimelec', 'Acab', 'Abner'], explanation: 'Abraham se llamaba originalmente Abram, que significa "padre exaltado". Dios cambió su nombre a Abraham, que significa "padre de muchos".' },
    pt: { question: 'Qual era o nome original de Abraão?', options: ['Abrão', 'Abimeleque', 'Acabe', 'Abner'], explanation: 'Abraão chamava-se originalmente Abrão, que significa "pai exaltado". Deus mudou seu nome para Abraão, que significa "pai de muitos".' },
    fr: { question: 'Quel était le nom original d\'Abraham?', options: ['Abram', 'Abimélec', 'Achab', 'Abner'], explanation: 'Abraham s\'appelait à l\'origine Abram, signifiant "père exalté". Dieu changea son nom en Abraham, signifiant "père de beaucoup".' }
  },
  pent8: {
    en: { question: 'Which son of Noah was the ancestor of the Semitic peoples?', options: ['Ham', 'Japheth', 'Shem', 'Canaan'], explanation: 'Shem was the ancestor of the Semitic peoples, including the Hebrews. The word "Semitic" comes from his name.' },
    it: { question: 'Quale figlio di Noè fu l\'antenato dei popoli semitici?', options: ['Cam', 'Iafet', 'Sem', 'Canaan'], explanation: 'Sem fu l\'antenato dei popoli semitici, inclusi gli Ebrei. La parola "semitico" deriva dal suo nome.' },
    es: { question: '¿Qué hijo de Noé fue el ancestro de los pueblos semíticos?', options: ['Cam', 'Jafet', 'Sem', 'Canaán'], explanation: 'Sem fue el ancestro de los pueblos semíticos, incluyendo los hebreos. La palabra "semítico" proviene de su nombre.' },
    pt: { question: 'Qual filho de Noé foi o ancestral dos povos semíticos?', options: ['Cam', 'Jafé', 'Sem', 'Canaã'], explanation: 'Sem foi o ancestral dos povos semíticos, incluindo os hebreus. A palavra "semítico" vem de seu nome.' },
    fr: { question: 'Quel fils de Noé fut l\'ancêtre des peuples sémitiques?', options: ['Cham', 'Japhet', 'Sem', 'Canaan'], explanation: 'Sem fut l\'ancêtre des peuples sémitiques, y compris les Hébreux. Le mot "sémitique" vient de son nom.' }
  },
  pent9: {
    en: { question: 'What did God use to confuse the builders of the Tower of Babel?', options: ['A flood', 'Language confusion', 'Fire from heaven', 'An earthquake'], explanation: 'God confused the language of the people building the tower, so they could no longer understand each other and scattered across the earth.' },
    it: { question: 'Cosa usò Dio per confondere i costruttori della Torre di Babele?', options: ['Un diluvio', 'Confusione delle lingue', 'Fuoco dal cielo', 'Un terremoto'], explanation: 'Dio confuse la lingua delle persone che costruivano la torre, così non potevano più capirsi e si dispersero sulla terra.' },
    es: { question: '¿Qué usó Dios para confundir a los constructores de la Torre de Babel?', options: ['Un diluvio', 'Confusión de idiomas', 'Fuego del cielo', 'Un terremoto'], explanation: 'Dios confundió el idioma de las personas que construían la torre, para que ya no pudieran entenderse y se dispersaran por la tierra.' },
    pt: { question: 'O que Deus usou para confundir os construtores da Torre de Babel?', options: ['Um dilúvio', 'Confusão de línguas', 'Fogo do céu', 'Um terremoto'], explanation: 'Deus confundiu a língua das pessoas que construíam a torre, para que não pudessem mais se entender e se espalharam pela terra.' },
    fr: { question: 'Qu\'est-ce que Dieu a utilisé pour confondre les bâtisseurs de la Tour de Babel?', options: ['Un déluge', 'La confusion des langues', 'Le feu du ciel', 'Un tremblement de terre'], explanation: 'Dieu confondit le langage des gens qui construisaient la tour, de sorte qu\'ils ne pouvaient plus se comprendre et se dispersèrent sur la terre.' }
  },
  pent10: {
    en: { question: 'Who was Lot\'s uncle?', options: ['Isaac', 'Abraham', 'Jacob', 'Terah'], explanation: 'Lot was the son of Haran, Abraham\'s brother. Therefore, Abraham was Lot\'s uncle.' },
    it: { question: 'Chi era lo zio di Lot?', options: ['Isacco', 'Abramo', 'Giacobbe', 'Tera'], explanation: 'Lot era figlio di Aran, fratello di Abramo. Pertanto, Abramo era lo zio di Lot.' },
    es: { question: '¿Quién era el tío de Lot?', options: ['Isaac', 'Abraham', 'Jacob', 'Taré'], explanation: 'Lot era hijo de Harán, hermano de Abraham. Por lo tanto, Abraham era el tío de Lot.' },
    pt: { question: 'Quem era o tio de Ló?', options: ['Isaque', 'Abraão', 'Jacó', 'Terá'], explanation: 'Ló era filho de Harã, irmão de Abraão. Portanto, Abraão era o tio de Ló.' },
    fr: { question: 'Qui était l\'oncle de Lot?', options: ['Isaac', 'Abraham', 'Jacob', 'Térah'], explanation: 'Lot était le fils de Haran, le frère d\'Abraham. Par conséquent, Abraham était l\'oncle de Lot.' }
  },
  pent11: {
    en: { question: 'What cities did God destroy with fire and brimstone?', options: ['Jerusalem and Bethlehem', 'Sodom and Gomorrah', 'Nineveh and Babylon', 'Tyre and Sidon'], explanation: 'God destroyed Sodom and Gomorrah because of their great wickedness, raining down fire and sulfur from heaven.' },
    it: { question: 'Quali città distrusse Dio con fuoco e zolfo?', options: ['Gerusalemme e Betlemme', 'Sodoma e Gomorra', 'Ninive e Babilonia', 'Tiro e Sidone'], explanation: 'Dio distrusse Sodoma e Gomorra a causa della loro grande malvagità, facendo piovere fuoco e zolfo dal cielo.' },
    es: { question: '¿Qué ciudades destruyó Dios con fuego y azufre?', options: ['Jerusalén y Belén', 'Sodoma y Gomorra', 'Nínive y Babilonia', 'Tiro y Sidón'], explanation: 'Dios destruyó Sodoma y Gomorra debido a su gran maldad, haciendo llover fuego y azufre del cielo.' },
    pt: { question: 'Quais cidades Deus destruiu com fogo e enxofre?', options: ['Jerusalém e Belém', 'Sodoma e Gomorra', 'Nínive e Babilônia', 'Tiro e Sidom'], explanation: 'Deus destruiu Sodoma e Gomorra por causa de sua grande maldade, fazendo chover fogo e enxofre do céu.' },
    fr: { question: 'Quelles villes Dieu a-t-il détruites par le feu et le soufre?', options: ['Jérusalem et Bethléem', 'Sodome et Gomorrhe', 'Ninive et Babylone', 'Tyr et Sidon'], explanation: 'Dieu détruisit Sodome et Gomorrhe à cause de leur grande méchanceté, faisant pleuvoir du feu et du soufre du ciel.' }
  },
  pent12: {
    en: { question: 'What was the name of Abraham\'s servant girl who bore Ishmael?', options: ['Keturah', 'Hagar', 'Bilhah', 'Zilpah'], explanation: 'Hagar was Sarah\'s Egyptian maidservant who bore Ishmael to Abraham when Sarah was unable to conceive.' },
    it: { question: 'Qual era il nome della serva di Abramo che partorì Ismaele?', options: ['Chetura', 'Agar', 'Bila', 'Zilpa'], explanation: 'Agar era la serva egiziana di Sara che partorì Ismaele ad Abramo quando Sara non poteva concepire.' },
    es: { question: '¿Cuál era el nombre de la sierva de Abraham que dio a luz a Ismael?', options: ['Cetura', 'Agar', 'Bilha', 'Zilpa'], explanation: 'Agar era la sierva egipcia de Sara que dio a luz a Ismael para Abraham cuando Sara no podía concebir.' },
    pt: { question: 'Qual era o nome da serva de Abraão que deu à luz Ismael?', options: ['Quetura', 'Agar', 'Bila', 'Zilpa'], explanation: 'Agar era a serva egípcia de Sara que deu à luz Ismael para Abraão quando Sara não podia conceber.' },
    fr: { question: 'Quel était le nom de la servante d\'Abraham qui enfanta Ismaël?', options: ['Ketura', 'Agar', 'Bilha', 'Zilpa'], explanation: 'Agar était la servante égyptienne de Sara qui enfanta Ismaël pour Abraham quand Sara ne pouvait pas concevoir.' }
  },
  pent13: {
    en: { question: 'What did Abraham almost sacrifice on Mount Moriah?', options: ['A lamb', 'A ram', 'Isaac his son', 'An ox'], explanation: 'God tested Abraham by asking him to sacrifice Isaac, but stopped him at the last moment and provided a ram instead.' },
    it: { question: 'Chi stava per sacrificare Abramo sul Monte Moria?', options: ['Un agnello', 'Un ariete', 'Isacco suo figlio', 'Un bue'], explanation: 'Dio mise alla prova Abramo chiedendogli di sacrificare Isacco, ma lo fermò all\'ultimo momento e provvide un ariete al suo posto.' },
    es: { question: '¿A quién estuvo a punto de sacrificar Abraham en el Monte Moriah?', options: ['Un cordero', 'Un carnero', 'Isaac su hijo', 'Un buey'], explanation: 'Dios probó a Abraham pidiéndole que sacrificara a Isaac, pero lo detuvo en el último momento y proveyó un carnero en su lugar.' },
    pt: { question: 'Quem Abraão quase sacrificou no Monte Moriá?', options: ['Um cordeiro', 'Um carneiro', 'Isaque seu filho', 'Um boi'], explanation: 'Deus testou Abraão pedindo-lhe que sacrificasse Isaque, mas o deteve no último momento e providenciou um carneiro em seu lugar.' },
    fr: { question: 'Qui Abraham a-t-il failli sacrifier sur le Mont Moriah?', options: ['Un agneau', 'Un bélier', 'Isaac son fils', 'Un bœuf'], explanation: 'Dieu éprouva Abraham en lui demandant de sacrifier Isaac, mais l\'arrêta au dernier moment et fournit un bélier à la place.' }
  },
  pent14: {
    en: { question: 'Who did Jacob deceive to receive the firstborn blessing?', options: ['His mother', 'His father Isaac', 'His brother Esau', 'His uncle Laban'], explanation: 'Jacob, with his mother Rebekah\'s help, deceived his blind father Isaac to receive the blessing meant for Esau.' },
    it: { question: 'Chi ingannò Giacobbe per ricevere la benedizione del primogenito?', options: ['Sua madre', 'Suo padre Isacco', 'Suo fratello Esaù', 'Suo zio Labano'], explanation: 'Giacobbe, con l\'aiuto di sua madre Rebecca, ingannò suo padre cieco Isacco per ricevere la benedizione destinata a Esaù.' },
    es: { question: '¿A quién engañó Jacob para recibir la bendición del primogénito?', options: ['A su madre', 'A su padre Isaac', 'A su hermano Esaú', 'A su tío Labán'], explanation: 'Jacob, con la ayuda de su madre Rebeca, engañó a su padre ciego Isaac para recibir la bendición destinada a Esaú.' },
    pt: { question: 'Quem Jacó enganou para receber a bênção do primogênito?', options: ['Sua mãe', 'Seu pai Isaque', 'Seu irmão Esaú', 'Seu tio Labão'], explanation: 'Jacó, com a ajuda de sua mãe Rebeca, enganou seu pai cego Isaque para receber a bênção destinada a Esaú.' },
    fr: { question: 'Qui Jacob a-t-il trompé pour recevoir la bénédiction du premier-né?', options: ['Sa mère', 'Son père Isaac', 'Son frère Ésaü', 'Son oncle Laban'], explanation: 'Jacob, avec l\'aide de sa mère Rébecca, trompa son père aveugle Isaac pour recevoir la bénédiction destinée à Ésaü.' }
  },
  pent15: {
    en: { question: 'What did Jacob see in his dream at Bethel?', options: ['A burning bush', 'A ladder to heaven', 'A talking donkey', 'A chariot of fire'], explanation: 'Jacob dreamed of a ladder reaching to heaven with angels ascending and descending on it, and God spoke to him there.' },
    it: { question: 'Cosa vide Giacobbe nel suo sogno a Betel?', options: ['Un roveto ardente', 'Una scala verso il cielo', 'Un asino parlante', 'Un carro di fuoco'], explanation: 'Giacobbe sognò una scala che raggiungeva il cielo con angeli che salivano e scendevano su di essa, e Dio gli parlò lì.' },
    es: { question: '¿Qué vio Jacob en su sueño en Betel?', options: ['Una zarza ardiente', 'Una escalera al cielo', 'Un asno que hablaba', 'Un carro de fuego'], explanation: 'Jacob soñó con una escalera que llegaba al cielo con ángeles subiendo y bajando por ella, y Dios le habló allí.' },
    pt: { question: 'O que Jacó viu em seu sonho em Betel?', options: ['Uma sarça ardente', 'Uma escada para o céu', 'Um burro falante', 'Uma carruagem de fogo'], explanation: 'Jacó sonhou com uma escada que chegava ao céu com anjos subindo e descendo por ela, e Deus falou com ele ali.' },
    fr: { question: 'Que vit Jacob dans son rêve à Béthel?', options: ['Un buisson ardent', 'Une échelle vers le ciel', 'Un âne qui parlait', 'Un char de feu'], explanation: 'Jacob rêva d\'une échelle atteignant le ciel avec des anges montant et descendant dessus, et Dieu lui parla là.' }
  },
  pent16: {
    en: { question: 'How many years did Jacob work for Rachel?', options: ['7', '14', '21', '10'], explanation: 'Jacob worked 7 years for Rachel, but was tricked into marrying Leah first, so he worked another 7 years for Rachel - 14 total.' },
    it: { question: 'Per quanti anni lavorò Giacobbe per Rachele?', options: ['7', '14', '21', '10'], explanation: 'Giacobbe lavorò 7 anni per Rachele, ma fu ingannato e sposò prima Lia, così lavorò altri 7 anni per Rachele - 14 in totale.' },
    es: { question: '¿Cuántos años trabajó Jacob por Raquel?', options: ['7', '14', '21', '10'], explanation: 'Jacob trabajó 7 años por Raquel, pero fue engañado para casarse primero con Lea, así que trabajó otros 7 años por Raquel - 14 en total.' },
    pt: { question: 'Quantos anos Jacó trabalhou por Raquel?', options: ['7', '14', '21', '10'], explanation: 'Jacó trabalhou 7 anos por Raquel, mas foi enganado e casou-se primeiro com Lia, então trabalhou mais 7 anos por Raquel - 14 no total.' },
    fr: { question: 'Combien d\'années Jacob a-t-il travaillé pour Rachel?', options: ['7', '14', '21', '10'], explanation: 'Jacob travailla 7 ans pour Rachel, mais fut trompé et épousa d\'abord Léa, alors il travailla encore 7 ans pour Rachel - 14 au total.' }
  },
  pent17: {
    en: { question: 'What new name did God give to Jacob?', options: ['Abraham', 'Israel', 'Judah', 'Joseph'], explanation: 'After wrestling with God, Jacob received the name Israel, meaning "he struggles with God" or "prince of God."' },
    it: { question: 'Quale nuovo nome diede Dio a Giacobbe?', options: ['Abramo', 'Israele', 'Giuda', 'Giuseppe'], explanation: 'Dopo aver lottato con Dio, Giacobbe ricevette il nome Israele, che significa "egli lotta con Dio" o "principe di Dio".' },
    es: { question: '¿Qué nuevo nombre le dio Dios a Jacob?', options: ['Abraham', 'Israel', 'Judá', 'José'], explanation: 'Después de luchar con Dios, Jacob recibió el nombre de Israel, que significa "él lucha con Dios" o "príncipe de Dios".' },
    pt: { question: 'Qual novo nome Deus deu a Jacó?', options: ['Abraão', 'Israel', 'Judá', 'José'], explanation: 'Depois de lutar com Deus, Jacó recebeu o nome Israel, que significa "ele luta com Deus" ou "príncipe de Deus".' },
    fr: { question: 'Quel nouveau nom Dieu donna-t-il à Jacob?', options: ['Abraham', 'Israël', 'Juda', 'Joseph'], explanation: 'Après avoir lutté avec Dieu, Jacob reçut le nom d\'Israël, signifiant "il lutte avec Dieu" ou "prince de Dieu".' }
  },
  pent18: {
    en: { question: 'Which of Joseph\'s brothers suggested selling him instead of killing him?', options: ['Reuben', 'Judah', 'Simeon', 'Levi'], explanation: 'When the brothers wanted to kill Joseph, Judah suggested selling him to the Ishmaelite traders instead.' },
    it: { question: 'Quale dei fratelli di Giuseppe suggerì di venderlo invece di ucciderlo?', options: ['Ruben', 'Giuda', 'Simeone', 'Levi'], explanation: 'Quando i fratelli volevano uccidere Giuseppe, Giuda suggerì di venderlo ai mercanti ismaeliti.' },
    es: { question: '¿Cuál de los hermanos de José sugirió venderlo en lugar de matarlo?', options: ['Rubén', 'Judá', 'Simeón', 'Leví'], explanation: 'Cuando los hermanos querían matar a José, Judá sugirió venderlo a los comerciantes ismaelitas.' },
    pt: { question: 'Qual dos irmãos de José sugeriu vendê-lo em vez de matá-lo?', options: ['Rúben', 'Judá', 'Simeão', 'Levi'], explanation: 'Quando os irmãos queriam matar José, Judá sugeriu vendê-lo aos mercadores ismaelitas.' },
    fr: { question: 'Lequel des frères de Joseph suggéra de le vendre au lieu de le tuer?', options: ['Ruben', 'Juda', 'Siméon', 'Lévi'], explanation: 'Quand les frères voulaient tuer Joseph, Juda suggéra de le vendre aux marchands ismaélites.' }
  },
  pent19: {
    en: { question: 'What was Joseph\'s position in Egypt before becoming second in command?', options: ['Baker', 'Cupbearer', 'Prisoner', 'Scribe'], explanation: 'Joseph was imprisoned after being falsely accused by Potiphar\'s wife, but God used this to eventually elevate him to power.' },
    it: { question: 'Qual era la posizione di Giuseppe in Egitto prima di diventare secondo in comando?', options: ['Panettiere', 'Coppiere', 'Prigioniero', 'Scriba'], explanation: 'Giuseppe fu imprigionato dopo essere stato falsamente accusato dalla moglie di Potifar, ma Dio usò questo per elevarlo al potere.' },
    es: { question: '¿Cuál era la posición de José en Egipto antes de convertirse en segundo al mando?', options: ['Panadero', 'Copero', 'Prisionero', 'Escriba'], explanation: 'José fue encarcelado después de ser falsamente acusado por la esposa de Potifar, pero Dios usó esto para eventualmente elevarlo al poder.' },
    pt: { question: 'Qual era a posição de José no Egito antes de se tornar o segundo no comando?', options: ['Padeiro', 'Copeiro', 'Prisioneiro', 'Escriba'], explanation: 'José foi preso após ser falsamente acusado pela esposa de Potifar, mas Deus usou isso para eventualmente elevá-lo ao poder.' },
    fr: { question: 'Quelle était la position de Joseph en Égypte avant de devenir second?', options: ['Boulanger', 'Échanson', 'Prisonnier', 'Scribe'], explanation: 'Joseph fut emprisonné après avoir été faussement accusé par la femme de Potiphar, mais Dieu utilisa cela pour finalement l\'élever au pouvoir.' }
  },
  pent20: {
    en: { question: 'How many years of famine did Joseph predict?', options: ['3', '5', '7', '10'], explanation: 'Joseph interpreted Pharaoh\'s dream to mean there would be seven years of plenty followed by seven years of severe famine.' },
    it: { question: 'Quanti anni di carestia predisse Giuseppe?', options: ['3', '5', '7', '10'], explanation: 'Giuseppe interpretò il sogno del Faraone come sette anni di abbondanza seguiti da sette anni di grave carestia.' },
    es: { question: '¿Cuántos años de hambruna predijo José?', options: ['3', '5', '7', '10'], explanation: 'José interpretó el sueño de Faraón como siete años de abundancia seguidos de siete años de hambruna severa.' },
    pt: { question: 'Quantos anos de fome José previu?', options: ['3', '5', '7', '10'], explanation: 'José interpretou o sonho do Faraó como sete anos de abundância seguidos por sete anos de fome severa.' },
    fr: { question: 'Combien d\'années de famine Joseph a-t-il prédit?', options: ['3', '5', '7', '10'], explanation: 'Joseph interpréta le rêve de Pharaon comme sept années d\'abondance suivies de sept années de famine sévère.' }
  },
  pent21: {
    en: { question: 'In what did Moses\' mother place him as a baby?', options: ['A wooden crate', 'A basket of reeds', 'A clay pot', 'A leather bag'], explanation: 'To save Moses from Pharaoh\'s decree to kill Hebrew baby boys, his mother placed him in a waterproof basket of reeds on the Nile.' },
    it: { question: 'In cosa mise la madre di Mosè il bambino?', options: ['Una cassa di legno', 'Un cesto di giunchi', 'Un vaso di argilla', 'Una borsa di pelle'], explanation: 'Per salvare Mosè dal decreto del Faraone di uccidere i neonati ebrei maschi, sua madre lo mise in un cesto impermeabile di giunchi sul Nilo.' },
    es: { question: '¿En qué puso la madre de Moisés al bebé?', options: ['Una caja de madera', 'Una canasta de juncos', 'Una vasija de barro', 'Una bolsa de cuero'], explanation: 'Para salvar a Moisés del decreto de Faraón de matar a los bebés hebreos varones, su madre lo puso en una canasta impermeable de juncos en el Nilo.' },
    pt: { question: 'Em que a mãe de Moisés colocou o bebê?', options: ['Uma caixa de madeira', 'Um cesto de juncos', 'Um vaso de barro', 'Uma bolsa de couro'], explanation: 'Para salvar Moisés do decreto do Faraó de matar os bebês hebreus do sexo masculino, sua mãe o colocou em um cesto impermeável de juncos no Nilo.' },
    fr: { question: 'Dans quoi la mère de Moïse a-t-elle placé le bébé?', options: ['Une caisse en bois', 'Un panier de roseaux', 'Un pot d\'argile', 'Un sac en cuir'], explanation: 'Pour sauver Moïse du décret de Pharaon de tuer les bébés hébreux mâles, sa mère le plaça dans un panier imperméable de roseaux sur le Nil.' }
  },
  pent22: {
    en: { question: 'Who found baby Moses in the Nile?', options: ['A Hebrew midwife', 'Pharaoh\'s daughter', 'Miriam', 'Jochebed'], explanation: 'Pharaoh\'s daughter found Moses in the basket when she came to bathe in the Nile, and she adopted him as her own son.' },
    it: { question: 'Chi trovò il bambino Mosè nel Nilo?', options: ['Una levatrice ebrea', 'La figlia del Faraone', 'Miriam', 'Iochebed'], explanation: 'La figlia del Faraone trovò Mosè nel cesto quando venne a fare il bagno nel Nilo, e lo adottò come suo figlio.' },
    es: { question: '¿Quién encontró al bebé Moisés en el Nilo?', options: ['Una partera hebrea', 'La hija de Faraón', 'Miriam', 'Jocabed'], explanation: 'La hija de Faraón encontró a Moisés en la canasta cuando vino a bañarse en el Nilo, y lo adoptó como su propio hijo.' },
    pt: { question: 'Quem encontrou o bebê Moisés no Nilo?', options: ['Uma parteira hebreia', 'A filha do Faraó', 'Miriã', 'Joquebede'], explanation: 'A filha do Faraó encontrou Moisés no cesto quando veio banhar-se no Nilo, e o adotou como seu próprio filho.' },
    fr: { question: 'Qui a trouvé le bébé Moïse dans le Nil?', options: ['Une sage-femme hébraïque', 'La fille de Pharaon', 'Miriam', 'Jokébed'], explanation: 'La fille de Pharaon trouva Moïse dans le panier quand elle vint se baigner dans le Nil, et elle l\'adopta comme son propre fils.' }
  },
  pent23: {
    en: { question: 'Why did Moses flee to Midian?', options: ['He was seeking a wife', 'He killed an Egyptian', 'Pharaoh banished him', 'He went to find God'], explanation: 'Moses killed an Egyptian who was beating a Hebrew, and when Pharaoh found out, Moses fled to Midian for his life.' },
    it: { question: 'Perché Mosè fuggì a Madian?', options: ['Stava cercando moglie', 'Uccise un egiziano', 'Il Faraone lo bandì', 'Andò a cercare Dio'], explanation: 'Mosè uccise un egiziano che stava picchiando un ebreo, e quando il Faraone lo scoprì, Mosè fuggì a Madian per salvarsi la vita.' },
    es: { question: '¿Por qué Moisés huyó a Madián?', options: ['Buscaba esposa', 'Mató a un egipcio', 'Faraón lo desterró', 'Fue a buscar a Dios'], explanation: 'Moisés mató a un egipcio que estaba golpeando a un hebreo, y cuando Faraón se enteró, Moisés huyó a Madián para salvar su vida.' },
    pt: { question: 'Por que Moisés fugiu para Midiã?', options: ['Ele estava procurando uma esposa', 'Ele matou um egípcio', 'O Faraó o baniu', 'Ele foi procurar a Deus'], explanation: 'Moisés matou um egípcio que estava batendo em um hebreu, e quando o Faraó descobriu, Moisés fugiu para Midiã para salvar sua vida.' },
    fr: { question: 'Pourquoi Moïse a-t-il fui à Madian?', options: ['Il cherchait une femme', 'Il tua un Égyptien', 'Pharaon l\'a banni', 'Il alla chercher Dieu'], explanation: 'Moïse tua un Égyptien qui battait un Hébreu, et quand Pharaon l\'apprit, Moïse s\'enfuit à Madian pour sauver sa vie.' }
  },
  pent24: {
    en: { question: 'What was burning but not consumed when God spoke to Moses?', options: ['A tree', 'A bush', 'The altar', 'A rock'], explanation: 'God appeared to Moses in a burning bush that was not consumed by the flames, and called him to lead Israel out of Egypt.' },
    it: { question: 'Cosa bruciava senza consumarsi quando Dio parlò a Mosè?', options: ['Un albero', 'Un cespuglio', 'L\'altare', 'Una roccia'], explanation: 'Dio apparve a Mosè in un roveto ardente che non era consumato dalle fiamme, e lo chiamò a guidare Israele fuori dall\'Egitto.' },
    es: { question: '¿Qué ardía sin consumirse cuando Dios habló a Moisés?', options: ['Un árbol', 'Una zarza', 'El altar', 'Una roca'], explanation: 'Dios se apareció a Moisés en una zarza ardiente que no era consumida por las llamas, y lo llamó a sacar a Israel de Egipto.' },
    pt: { question: 'O que estava queimando mas não se consumia quando Deus falou a Moisés?', options: ['Uma árvore', 'Uma sarça', 'O altar', 'Uma rocha'], explanation: 'Deus apareceu a Moisés em uma sarça ardente que não era consumida pelas chamas, e o chamou para tirar Israel do Egito.' },
    fr: { question: 'Qu\'est-ce qui brûlait sans se consumer quand Dieu parla à Moïse?', options: ['Un arbre', 'Un buisson', 'L\'autel', 'Un rocher'], explanation: 'Dieu apparut à Moïse dans un buisson ardent qui n\'était pas consumé par les flammes, et l\'appela à faire sortir Israël d\'Égypte.' }
  },
  pent25: {
    en: { question: 'What name did God reveal to Moses at the burning bush?', options: ['El Shaddai', 'Adonai', 'I AM WHO I AM', 'Jehovah Jireh'], explanation: 'When Moses asked God\'s name, God revealed Himself as "I AM WHO I AM" (YHWH), the self-existent eternal God.' },
    it: { question: 'Quale nome rivelò Dio a Mosè presso il roveto ardente?', options: ['El Shaddai', 'Adonai', 'IO SONO COLUI CHE SONO', 'Jehovah Jireh'], explanation: 'Quando Mosè chiese il nome di Dio, Dio si rivelò come "IO SONO COLUI CHE SONO" (YHWH), il Dio eterno auto-esistente.' },
    es: { question: '¿Qué nombre reveló Dios a Moisés en la zarza ardiente?', options: ['El Shaddai', 'Adonai', 'YO SOY EL QUE SOY', 'Jehová Jireh'], explanation: 'Cuando Moisés preguntó el nombre de Dios, Dios se reveló como "YO SOY EL QUE SOY" (YHWH), el Dios eterno autoexistente.' },
    pt: { question: 'Qual nome Deus revelou a Moisés na sarça ardente?', options: ['El Shaddai', 'Adonai', 'EU SOU O QUE SOU', 'Jeová Jiré'], explanation: 'Quando Moisés perguntou o nome de Deus, Deus se revelou como "EU SOU O QUE SOU" (YHWH), o Deus eterno auto-existente.' },
    fr: { question: 'Quel nom Dieu a-t-il révélé à Moïse au buisson ardent?', options: ['El Shaddaï', 'Adonaï', 'JE SUIS CELUI QUI SUIS', 'Jéhovah Jiré'], explanation: 'Quand Moïse demanda le nom de Dieu, Dieu se révéla comme "JE SUIS CELUI QUI SUIS" (YHWH), le Dieu éternel auto-existant.' }
  },
  pent26: {
    en: { question: 'What did Moses\' staff become when he threw it on the ground?', options: ['A rod of fire', 'A serpent', 'A flowering branch', 'A golden staff'], explanation: 'As a sign of God\'s power, Moses\' staff became a serpent when thrown down, and became a staff again when he picked it up.' },
    it: { question: 'Cosa divenne il bastone di Mosè quando lo gettò a terra?', options: ['Una verga di fuoco', 'Un serpente', 'Un ramo fiorito', 'Un bastone d\'oro'], explanation: 'Come segno del potere di Dio, il bastone di Mosè divenne un serpente quando fu gettato a terra, e tornò bastone quando lo raccolse.' },
    es: { question: '¿En qué se convirtió el cayado de Moisés cuando lo arrojó al suelo?', options: ['Una vara de fuego', 'Una serpiente', 'Una rama florecida', 'Un cayado de oro'], explanation: 'Como señal del poder de Dios, el cayado de Moisés se convirtió en serpiente cuando lo arrojó, y volvió a ser cayado cuando lo recogió.' },
    pt: { question: 'Em que se transformou o cajado de Moisés quando ele o jogou no chão?', options: ['Uma vara de fogo', 'Uma serpente', 'Um galho florido', 'Um cajado de ouro'], explanation: 'Como sinal do poder de Deus, o cajado de Moisés se transformou em serpente quando jogado no chão, e voltou a ser cajado quando ele o pegou.' },
    fr: { question: 'En quoi le bâton de Moïse s\'est-il transformé quand il l\'a jeté par terre?', options: ['Une verge de feu', 'Un serpent', 'Une branche fleurie', 'Un bâton d\'or'], explanation: 'Comme signe de la puissance de Dieu, le bâton de Moïse devint un serpent quand il le jeta, et redevint un bâton quand il le ramassa.' }
  },
  pent27: {
    en: { question: 'Which plague involved gnats?', options: ['Second', 'Third', 'Fourth', 'Fifth'], explanation: 'The third plague was gnats (or lice), when Aaron struck the dust and it became gnats throughout Egypt.' },
    it: { question: 'Quale piaga coinvolse le zanzare?', options: ['Seconda', 'Terza', 'Quarta', 'Quinta'], explanation: 'La terza piaga furono le zanzare (o pidocchi), quando Aronne colpì la polvere e questa divenne zanzare in tutto l\'Egitto.' },
    es: { question: '¿Qué plaga involucró mosquitos?', options: ['Segunda', 'Tercera', 'Cuarta', 'Quinta'], explanation: 'La tercera plaga fueron los mosquitos (o piojos), cuando Aarón golpeó el polvo y se convirtió en mosquitos por todo Egipto.' },
    pt: { question: 'Qual praga envolveu mosquitos?', options: ['Segunda', 'Terceira', 'Quarta', 'Quinta'], explanation: 'A terceira praga foram os mosquitos (ou piolhos), quando Arão feriu o pó e ele se transformou em mosquitos por todo o Egito.' },
    fr: { question: 'Quelle plaie impliquait des moustiques?', options: ['Deuxième', 'Troisième', 'Quatrième', 'Cinquième'], explanation: 'La troisième plaie fut les moustiques (ou poux), quand Aaron frappa la poussière et elle devint des moustiques dans toute l\'Égypte.' }
  },
  pent28: {
    en: { question: 'What did the Israelites put on their doorposts during Passover?', options: ['Oil', 'Water', 'Blood of a lamb', 'Flour'], explanation: 'God commanded the Israelites to put the blood of a lamb on their doorposts so the angel of death would pass over their homes.' },
    it: { question: 'Cosa misero gli Israeliti sugli stipiti delle porte durante la Pasqua?', options: ['Olio', 'Acqua', 'Sangue di un agnello', 'Farina'], explanation: 'Dio comandò agli Israeliti di mettere il sangue di un agnello sugli stipiti delle porte affinché l\'angelo della morte passasse oltre le loro case.' },
    es: { question: '¿Qué pusieron los israelitas en los postes de sus puertas durante la Pascua?', options: ['Aceite', 'Agua', 'Sangre de un cordero', 'Harina'], explanation: 'Dios ordenó a los israelitas poner la sangre de un cordero en los postes de sus puertas para que el ángel de la muerte pasara por encima de sus hogares.' },
    pt: { question: 'O que os israelitas colocaram nas ombreiras das portas durante a Páscoa?', options: ['Óleo', 'Água', 'Sangue de um cordeiro', 'Farinha'], explanation: 'Deus ordenou aos israelitas colocar o sangue de um cordeiro nas ombreiras das portas para que o anjo da morte passasse por cima de suas casas.' },
    fr: { question: 'Qu\'est-ce que les Israélites ont mis sur les montants de leurs portes pendant la Pâque?', options: ['De l\'huile', 'De l\'eau', 'Le sang d\'un agneau', 'De la farine'], explanation: 'Dieu ordonna aux Israélites de mettre le sang d\'un agneau sur les montants de leurs portes afin que l\'ange de la mort passe au-dessus de leurs maisons.' }
  },
  pent29: {
    en: { question: 'How did God lead the Israelites by day in the wilderness?', options: ['A pillar of fire', 'A pillar of cloud', 'An angel', 'The ark of the covenant'], explanation: 'God led the Israelites by a pillar of cloud during the day and a pillar of fire by night, guiding their journey through the wilderness.' },
    it: { question: 'Come guidò Dio gli Israeliti di giorno nel deserto?', options: ['Una colonna di fuoco', 'Una colonna di nuvola', 'Un angelo', 'L\'arca dell\'alleanza'], explanation: 'Dio guidò gli Israeliti con una colonna di nuvola di giorno e una colonna di fuoco di notte, guidando il loro viaggio nel deserto.' },
    es: { question: '¿Cómo guió Dios a los israelitas de día en el desierto?', options: ['Una columna de fuego', 'Una columna de nube', 'Un ángel', 'El arca del pacto'], explanation: 'Dios guió a los israelitas con una columna de nube durante el día y una columna de fuego por la noche, guiando su viaje por el desierto.' },
    pt: { question: 'Como Deus guiou os israelitas de dia no deserto?', options: ['Uma coluna de fogo', 'Uma coluna de nuvem', 'Um anjo', 'A arca da aliança'], explanation: 'Deus guiou os israelitas por uma coluna de nuvem durante o dia e uma coluna de fogo à noite, guiando sua jornada pelo deserto.' },
    fr: { question: 'Comment Dieu a-t-il guidé les Israélites le jour dans le désert?', options: ['Une colonne de feu', 'Une colonne de nuée', 'Un ange', 'L\'arche de l\'alliance'], explanation: 'Dieu guida les Israélites par une colonne de nuée le jour et une colonne de feu la nuit, guidant leur voyage à travers le désert.' }
  },
  pent30: {
    en: { question: 'What did God send from heaven to feed the Israelites?', options: ['Quail only', 'Manna and quail', 'Bread and fish', 'Honey and milk'], explanation: 'God provided manna each morning and sent quail in the evening to feed the Israelites in the wilderness for 40 years.' },
    it: { question: 'Cosa mandò Dio dal cielo per nutrire gli Israeliti?', options: ['Solo quaglie', 'Manna e quaglie', 'Pane e pesce', 'Miele e latte'], explanation: 'Dio provvide la manna ogni mattina e mandò quaglie la sera per nutrire gli Israeliti nel deserto per 40 anni.' },
    es: { question: '¿Qué envió Dios del cielo para alimentar a los israelitas?', options: ['Solo codornices', 'Maná y codornices', 'Pan y pescado', 'Miel y leche'], explanation: 'Dios proveyó maná cada mañana y envió codornices por la tarde para alimentar a los israelitas en el desierto durante 40 años.' },
    pt: { question: 'O que Deus enviou do céu para alimentar os israelitas?', options: ['Apenas codornizes', 'Maná e codornizes', 'Pão e peixe', 'Mel e leite'], explanation: 'Deus providenciou maná cada manhã e enviou codornizes à tarde para alimentar os israelitas no deserto por 40 anos.' },
    fr: { question: 'Qu\'est-ce que Dieu a envoyé du ciel pour nourrir les Israélites?', options: ['Des cailles seulement', 'De la manne et des cailles', 'Du pain et du poisson', 'Du miel et du lait'], explanation: 'Dieu fournit de la manne chaque matin et envoya des cailles le soir pour nourrir les Israélites dans le désert pendant 40 ans.' }
  },
  pent31: {
    en: { question: 'Who held up Moses\' hands during the battle with Amalek?', options: ['Joshua and Caleb', 'Aaron and Hur', 'Aaron and Miriam', 'Eleazar and Ithamar'], explanation: 'When Moses\' hands grew tired during the battle, Aaron and Hur held them up, and Israel prevailed against Amalek.' },
    it: { question: 'Chi sostenne le mani di Mosè durante la battaglia contro Amalec?', options: ['Giosuè e Caleb', 'Aronne e Cur', 'Aronne e Miriam', 'Eleazaro e Itamar'], explanation: 'Quando le mani di Mosè si stancarono durante la battaglia, Aronne e Cur le sostennero, e Israele prevalse contro Amalec.' },
    es: { question: '¿Quién sostuvo las manos de Moisés durante la batalla contra Amalec?', options: ['Josué y Caleb', 'Aarón y Hur', 'Aarón y Miriam', 'Eleazar e Itamar'], explanation: 'Cuando las manos de Moisés se cansaron durante la batalla, Aarón y Hur las sostuvieron, e Israel prevaleció contra Amalec.' },
    pt: { question: 'Quem segurou as mãos de Moisés durante a batalha com Amaleque?', options: ['Josué e Calebe', 'Arão e Hur', 'Arão e Miriã', 'Eleazar e Itamar'], explanation: 'Quando as mãos de Moisés ficaram cansadas durante a batalha, Arão e Hur as seguraram, e Israel prevaleceu contra Amaleque.' },
    fr: { question: 'Qui a soutenu les mains de Moïse pendant la bataille contre Amalek?', options: ['Josué et Caleb', 'Aaron et Hur', 'Aaron et Miriam', 'Éléazar et Ithamar'], explanation: 'Quand les mains de Moïse se fatiguèrent pendant la bataille, Aaron et Hur les soutinrent, et Israël l\'emporta contre Amalek.' }
  },
  pent32: {
    en: { question: 'What was kept inside the Ark of the Covenant?', options: ['The scrolls of the law', 'The tablets of the Ten Commandments', 'The priestly garments', 'The temple treasures'], explanation: 'The Ark contained the two stone tablets with the Ten Commandments, along with Aaron\'s budded rod and a jar of manna.' },
    it: { question: 'Cosa era conservato nell\'Arca dell\'Alleanza?', options: ['I rotoli della legge', 'Le tavole dei Dieci Comandamenti', 'Le vesti sacerdotali', 'I tesori del tempio'], explanation: 'L\'Arca conteneva le due tavole di pietra con i Dieci Comandamenti, insieme alla verga di Aronne che aveva germogliato e un vaso di manna.' },
    es: { question: '¿Qué se guardaba dentro del Arca del Pacto?', options: ['Los rollos de la ley', 'Las tablas de los Diez Mandamientos', 'Las vestiduras sacerdotales', 'Los tesoros del templo'], explanation: 'El Arca contenía las dos tablas de piedra con los Diez Mandamientos, junto con la vara de Aarón que había florecido y una vasija de maná.' },
    pt: { question: 'O que era guardado dentro da Arca da Aliança?', options: ['Os rolos da lei', 'As tábuas dos Dez Mandamentos', 'As vestes sacerdotais', 'Os tesouros do templo'], explanation: 'A Arca continha as duas tábuas de pedra com os Dez Mandamentos, junto com a vara de Arão que floresceu e um vaso de maná.' },
    fr: { question: 'Qu\'est-ce qui était gardé dans l\'Arche de l\'Alliance?', options: ['Les rouleaux de la loi', 'Les tables des Dix Commandements', 'Les vêtements sacerdotaux', 'Les trésors du temple'], explanation: 'L\'Arche contenait les deux tables de pierre avec les Dix Commandements, ainsi que le bâton d\'Aaron qui avait fleuri et un pot de manne.' }
  },
  pent33: {
    en: { question: 'How long was Moses on Mount Sinai receiving the law?', options: ['7 days', '40 days and nights', '12 days', '30 days'], explanation: 'Moses was on Mount Sinai for 40 days and 40 nights, receiving the law and the pattern for the tabernacle from God.' },
    it: { question: 'Quanto tempo rimase Mosè sul Monte Sinai a ricevere la legge?', options: ['7 giorni', '40 giorni e 40 notti', '12 giorni', '30 giorni'], explanation: 'Mosè rimase sul Monte Sinai per 40 giorni e 40 notti, ricevendo la legge e il modello per il tabernacolo da Dio.' },
    es: { question: '¿Cuánto tiempo estuvo Moisés en el Monte Sinaí recibiendo la ley?', options: ['7 días', '40 días y 40 noches', '12 días', '30 días'], explanation: 'Moisés estuvo en el Monte Sinaí durante 40 días y 40 noches, recibiendo la ley y el modelo del tabernáculo de Dios.' },
    pt: { question: 'Quanto tempo Moisés ficou no Monte Sinai recebendo a lei?', options: ['7 dias', '40 dias e 40 noites', '12 dias', '30 dias'], explanation: 'Moisés ficou no Monte Sinai por 40 dias e 40 noites, recebendo a lei e o modelo do tabernáculo de Deus.' },
    fr: { question: 'Combien de temps Moïse est-il resté sur le Mont Sinaï pour recevoir la loi?', options: ['7 jours', '40 jours et 40 nuits', '12 jours', '30 jours'], explanation: 'Moïse resta sur le Mont Sinaï pendant 40 jours et 40 nuits, recevant la loi et le modèle du tabernacle de Dieu.' }
  },
  pent34: {
    en: { question: 'What was the name of the portable sanctuary built in the wilderness?', options: ['The Temple', 'The Tabernacle', 'The Synagogue', 'The Holy Place'], explanation: 'The Tabernacle was the portable tent sanctuary where God dwelt among His people during their wilderness wanderings.' },
    it: { question: 'Qual era il nome del santuario portatile costruito nel deserto?', options: ['Il Tempio', 'Il Tabernacolo', 'La Sinagoga', 'Il Luogo Santo'], explanation: 'Il Tabernacolo era il santuario-tenda portatile dove Dio abitava in mezzo al suo popolo durante le loro peregrinazioni nel deserto.' },
    es: { question: '¿Cuál era el nombre del santuario portátil construido en el desierto?', options: ['El Templo', 'El Tabernáculo', 'La Sinagoga', 'El Lugar Santo'], explanation: 'El Tabernáculo era el santuario-tienda portátil donde Dios habitaba entre su pueblo durante sus peregrinaciones en el desierto.' },
    pt: { question: 'Qual era o nome do santuário portátil construído no deserto?', options: ['O Templo', 'O Tabernáculo', 'A Sinagoga', 'O Lugar Santo'], explanation: 'O Tabernáculo era o santuário-tenda portátil onde Deus habitava entre seu povo durante suas peregrinações no deserto.' },
    fr: { question: 'Quel était le nom du sanctuaire portable construit dans le désert?', options: ['Le Temple', 'Le Tabernacle', 'La Synagogue', 'Le Lieu Saint'], explanation: 'Le Tabernacle était le sanctuaire-tente portable où Dieu habitait parmi son peuple pendant leurs errances dans le désert.' }
  },
  pent35: {
    en: { question: 'Who made the golden calf?', options: ['The people themselves', 'Aaron', 'A foreign priest', 'Moses'], explanation: 'While Moses was on Mount Sinai, Aaron collected gold from the people and fashioned a golden calf for them to worship.' },
    it: { question: 'Chi fece il vitello d\'oro?', options: ['Il popolo stesso', 'Aronne', 'Un sacerdote straniero', 'Mosè'], explanation: 'Mentre Mosè era sul Monte Sinai, Aronne raccolse l\'oro dal popolo e fece un vitello d\'oro perché lo adorassero.' },
    es: { question: '¿Quién hizo el becerro de oro?', options: ['El pueblo mismo', 'Aarón', 'Un sacerdote extranjero', 'Moisés'], explanation: 'Mientras Moisés estaba en el Monte Sinaí, Aarón recogió oro del pueblo e hizo un becerro de oro para que lo adoraran.' },
    pt: { question: 'Quem fez o bezerro de ouro?', options: ['O próprio povo', 'Arão', 'Um sacerdote estrangeiro', 'Moisés'], explanation: 'Enquanto Moisés estava no Monte Sinai, Arão coletou ouro do povo e fez um bezerro de ouro para eles adorarem.' },
    fr: { question: 'Qui a fait le veau d\'or?', options: ['Le peuple lui-même', 'Aaron', 'Un prêtre étranger', 'Moïse'], explanation: 'Pendant que Moïse était sur le Mont Sinaï, Aaron collecta de l\'or du peuple et façonna un veau d\'or pour qu\'ils l\'adorent.' }
  },
  pent36: {
    en: { question: 'What was the Day of Atonement called in Hebrew?', options: ['Pesach', 'Sukkot', 'Yom Kippur', 'Shavuot'], explanation: 'Yom Kippur (Day of Atonement) was the holiest day of the year when the high priest made atonement for the sins of all Israel.' },
    it: { question: 'Come si chiamava il Giorno dell\'Espiazione in ebraico?', options: ['Pesach', 'Sukkot', 'Yom Kippur', 'Shavuot'], explanation: 'Yom Kippur (Giorno dell\'Espiazione) era il giorno più santo dell\'anno quando il sommo sacerdote espiava i peccati di tutto Israele.' },
    es: { question: '¿Cómo se llamaba el Día de la Expiación en hebreo?', options: ['Pesaj', 'Sucot', 'Yom Kipur', 'Shavuot'], explanation: 'Yom Kipur (Día de la Expiación) era el día más sagrado del año cuando el sumo sacerdote hacía expiación por los pecados de todo Israel.' },
    pt: { question: 'Como era chamado o Dia da Expiação em hebraico?', options: ['Pessach', 'Sucot', 'Yom Kippur', 'Shavuot'], explanation: 'Yom Kippur (Dia da Expiação) era o dia mais sagrado do ano quando o sumo sacerdote fazia expiação pelos pecados de todo Israel.' },
    fr: { question: 'Comment s\'appelait le Jour des Expiations en hébreu?', options: ['Pessah', 'Souccot', 'Yom Kippour', 'Chavouot'], explanation: 'Yom Kippour (Jour des Expiations) était le jour le plus saint de l\'année quand le grand prêtre faisait l\'expiation pour les péchés de tout Israël.' }
  },
  pent37: {
    en: { question: 'What animal was sent into the wilderness on the Day of Atonement?', options: ['A lamb', 'A bull', 'A goat (scapegoat)', 'A dove'], explanation: 'The scapegoat symbolically carried the sins of the people into the wilderness, representing the removal of sin from Israel.' },
    it: { question: 'Quale animale veniva mandato nel deserto nel Giorno dell\'Espiazione?', options: ['Un agnello', 'Un toro', 'Un capro (capro espiatorio)', 'Una colomba'], explanation: 'Il capro espiatorio portava simbolicamente i peccati del popolo nel deserto, rappresentando la rimozione del peccato da Israele.' },
    es: { question: '¿Qué animal era enviado al desierto en el Día de la Expiación?', options: ['Un cordero', 'Un toro', 'Un macho cabrío (chivo expiatorio)', 'Una paloma'], explanation: 'El chivo expiatorio llevaba simbólicamente los pecados del pueblo al desierto, representando la remoción del pecado de Israel.' },
    pt: { question: 'Qual animal era enviado ao deserto no Dia da Expiação?', options: ['Um cordeiro', 'Um touro', 'Um bode (bode expiatório)', 'Uma pomba'], explanation: 'O bode expiatório levava simbolicamente os pecados do povo para o deserto, representando a remoção do pecado de Israel.' },
    fr: { question: 'Quel animal était envoyé dans le désert le Jour des Expiations?', options: ['Un agneau', 'Un taureau', 'Un bouc (bouc émissaire)', 'Une colombe'], explanation: 'Le bouc émissaire portait symboliquement les péchés du peuple dans le désert, représentant l\'éloignement du péché d\'Israël.' }
  },
  pent38: {
    en: { question: 'What did the Israelites have to do every seventh year?', options: ['Fast for 40 days', 'Let the land rest', 'Rebuild the tabernacle', 'Travel to Jerusalem'], explanation: 'Every seventh year was a Sabbath year when the land was to rest and lie fallow, trusting God for provision.' },
    it: { question: 'Cosa dovevano fare gli Israeliti ogni settimo anno?', options: ['Digiunare per 40 giorni', 'Far riposare la terra', 'Ricostruire il tabernacolo', 'Viaggiare a Gerusalemme'], explanation: 'Ogni settimo anno era un anno sabbatico quando la terra doveva riposare e giacere incolta, confidando in Dio per il sostentamento.' },
    es: { question: '¿Qué tenían que hacer los israelitas cada séptimo año?', options: ['Ayunar 40 días', 'Dejar descansar la tierra', 'Reconstruir el tabernáculo', 'Viajar a Jerusalén'], explanation: 'Cada séptimo año era un año sabático cuando la tierra debía descansar y quedar en barbecho, confiando en Dios para la provisión.' },
    pt: { question: 'O que os israelitas tinham que fazer a cada sétimo ano?', options: ['Jejuar por 40 dias', 'Deixar a terra descansar', 'Reconstruir o tabernáculo', 'Viajar para Jerusalém'], explanation: 'Cada sétimo ano era um ano sabático quando a terra devia descansar e ficar em pousio, confiando em Deus para a provisão.' },
    fr: { question: 'Que devaient faire les Israélites chaque septième année?', options: ['Jeûner pendant 40 jours', 'Laisser la terre se reposer', 'Reconstruire le tabernacle', 'Voyager à Jérusalem'], explanation: 'Chaque septième année était une année sabbatique où la terre devait se reposer et rester en jachère, faisant confiance à Dieu pour la provision.' }
  },
  pent39: {
    en: { question: 'What happened to Nadab and Abihu for offering unauthorized fire?', options: ['They were banished', 'They died by fire from God', 'They became lepers', 'They lost their priesthood'], explanation: 'Nadab and Abihu, Aaron\'s sons, offered unauthorized fire before the Lord and were consumed by fire from God\'s presence.' },
    it: { question: 'Cosa accadde a Nadab e Abiu per aver offerto fuoco non autorizzato?', options: ['Furono banditi', 'Morirono per fuoco da Dio', 'Divennero lebbrosi', 'Persero il sacerdozio'], explanation: 'Nadab e Abiu, figli di Aronne, offrirono fuoco non autorizzato davanti al Signore e furono consumati dal fuoco dalla presenza di Dio.' },
    es: { question: '¿Qué les pasó a Nadab y Abiú por ofrecer fuego no autorizado?', options: ['Fueron desterrados', 'Murieron por fuego de Dios', 'Se volvieron leprosos', 'Perdieron su sacerdocio'], explanation: 'Nadab y Abiú, hijos de Aarón, ofrecieron fuego no autorizado ante el Señor y fueron consumidos por fuego de la presencia de Dios.' },
    pt: { question: 'O que aconteceu com Nadabe e Abiú por oferecerem fogo não autorizado?', options: ['Foram banidos', 'Morreram por fogo de Deus', 'Tornaram-se leprosos', 'Perderam o sacerdócio'], explanation: 'Nadabe e Abiú, filhos de Arão, ofereceram fogo não autorizado perante o Senhor e foram consumidos pelo fogo da presença de Deus.' },
    fr: { question: 'Qu\'est-il arrivé à Nadab et Abihu pour avoir offert un feu non autorisé?', options: ['Ils furent bannis', 'Ils moururent par le feu de Dieu', 'Ils devinrent lépreux', 'Ils perdirent leur sacerdoce'], explanation: 'Nadab et Abihu, fils d\'Aaron, offrirent un feu non autorisé devant l\'Éternel et furent consumés par le feu de la présence de Dieu.' }
  },
  pent40: {
    en: { question: 'What year was the Year of Jubilee?', options: ['Every 7th year', 'Every 25th year', 'Every 50th year', 'Every 100th year'], explanation: 'The Year of Jubilee came every 50th year, when slaves were freed, debts cancelled, and land returned to original owners.' },
    it: { question: 'Quale anno era l\'Anno del Giubileo?', options: ['Ogni 7° anno', 'Ogni 25° anno', 'Ogni 50° anno', 'Ogni 100° anno'], explanation: 'L\'Anno del Giubileo arrivava ogni 50° anno, quando gli schiavi venivano liberati, i debiti cancellati e la terra restituita ai proprietari originali.' },
    es: { question: '¿Qué año era el Año del Jubileo?', options: ['Cada 7° año', 'Cada 25° año', 'Cada 50° año', 'Cada 100° año'], explanation: 'El Año del Jubileo llegaba cada 50° año, cuando los esclavos eran liberados, las deudas canceladas y la tierra devuelta a los propietarios originales.' },
    pt: { question: 'Qual ano era o Ano do Jubileu?', options: ['A cada 7° ano', 'A cada 25° ano', 'A cada 50° ano', 'A cada 100° ano'], explanation: 'O Ano do Jubileu vinha a cada 50° ano, quando os escravos eram libertados, as dívidas canceladas e a terra devolvida aos proprietários originais.' },
    fr: { question: 'Quelle année était l\'Année du Jubilé?', options: ['Chaque 7e année', 'Chaque 25e année', 'Chaque 50e année', 'Chaque 100e année'], explanation: 'L\'Année du Jubilé arrivait chaque 50e année, quand les esclaves étaient libérés, les dettes annulées et les terres rendues aux propriétaires originaux.' }
  },
  pent41: {
    en: { question: 'How many spies were sent to explore Canaan?', options: ['10', '12', '7', '40'], explanation: 'Moses sent twelve spies, one from each tribe, to explore the Promised Land and report back on its inhabitants.' },
    it: { question: 'Quante spie furono mandate a esplorare Canaan?', options: ['10', '12', '7', '40'], explanation: 'Mosè mandò dodici spie, una per ogni tribù, a esplorare la Terra Promessa e riferire sui suoi abitanti.' },
    es: { question: '¿Cuántos espías fueron enviados a explorar Canaán?', options: ['10', '12', '7', '40'], explanation: 'Moisés envió doce espías, uno de cada tribu, para explorar la Tierra Prometida e informar sobre sus habitantes.' },
    pt: { question: 'Quantos espias foram enviados para explorar Canaã?', options: ['10', '12', '7', '40'], explanation: 'Moisés enviou doze espias, um de cada tribo, para explorar a Terra Prometida e relatar sobre seus habitantes.' },
    fr: { question: 'Combien d\'espions furent envoyés pour explorer Canaan?', options: ['10', '12', '7', '40'], explanation: 'Moïse envoya douze espions, un de chaque tribu, pour explorer la Terre Promise et faire un rapport sur ses habitants.' }
  },
  pent42: {
    en: { question: 'Which two spies gave a good report about Canaan?', options: ['Moses and Aaron', 'Joshua and Caleb', 'Eleazar and Ithamar', 'Korah and Dathan'], explanation: 'Only Joshua and Caleb gave a positive report, trusting God could give them the land despite the strong inhabitants.' },
    it: { question: 'Quali due spie diedero un buon rapporto su Canaan?', options: ['Mosè e Aronne', 'Giosuè e Caleb', 'Eleazaro e Itamar', 'Core e Datan'], explanation: 'Solo Giosuè e Caleb diedero un rapporto positivo, confidando che Dio potesse dare loro la terra nonostante gli abitanti forti.' },
    es: { question: '¿Cuáles dos espías dieron un buen informe sobre Canaán?', options: ['Moisés y Aarón', 'Josué y Caleb', 'Eleazar e Itamar', 'Coré y Datán'], explanation: 'Solo Josué y Caleb dieron un informe positivo, confiando en que Dios podría darles la tierra a pesar de los habitantes fuertes.' },
    pt: { question: 'Quais dois espias deram um bom relatório sobre Canaã?', options: ['Moisés e Arão', 'Josué e Calebe', 'Eleazar e Itamar', 'Corá e Datã'], explanation: 'Apenas Josué e Calebe deram um relatório positivo, confiando que Deus poderia dar-lhes a terra apesar dos habitantes fortes.' },
    fr: { question: 'Quels deux espions ont donné un bon rapport sur Canaan?', options: ['Moïse et Aaron', 'Josué et Caleb', 'Éléazar et Ithamar', 'Koré et Dathan'], explanation: 'Seuls Josué et Caleb donnèrent un rapport positif, faisant confiance que Dieu pourrait leur donner le pays malgré les habitants puissants.' }
  },
  pent43: {
    en: { question: 'What happened when Moses struck the rock at Meribah instead of speaking to it?', options: ['The rock split in two', 'He was forbidden to enter Canaan', 'Fire came from the rock', 'Nothing happened'], explanation: 'Because Moses struck the rock in anger instead of speaking to it as God commanded, he was not allowed to enter the Promised Land.' },
    it: { question: 'Cosa accadde quando Mosè colpì la roccia a Meriba invece di parlarle?', options: ['La roccia si spaccò in due', 'Gli fu proibito entrare in Canaan', 'Il fuoco uscì dalla roccia', 'Non accadde nulla'], explanation: 'Poiché Mosè colpì la roccia con rabbia invece di parlarle come Dio aveva comandato, non gli fu permesso entrare nella Terra Promessa.' },
    es: { question: '¿Qué pasó cuando Moisés golpeó la roca en Meriba en lugar de hablarle?', options: ['La roca se partió en dos', 'Se le prohibió entrar en Canaán', 'Salió fuego de la roca', 'No pasó nada'], explanation: 'Debido a que Moisés golpeó la roca con ira en lugar de hablarle como Dios ordenó, no se le permitió entrar en la Tierra Prometida.' },
    pt: { question: 'O que aconteceu quando Moisés bateu na rocha em Meribá em vez de falar com ela?', options: ['A rocha se partiu em dois', 'Foi proibido de entrar em Canaã', 'Fogo saiu da rocha', 'Nada aconteceu'], explanation: 'Porque Moisés bateu na rocha com raiva em vez de falar com ela como Deus ordenou, não lhe foi permitido entrar na Terra Prometida.' },
    fr: { question: 'Que s\'est-il passé quand Moïse a frappé le rocher à Meriba au lieu de lui parler?', options: ['Le rocher se fendit en deux', 'Il lui fut interdit d\'entrer en Canaan', 'Du feu sortit du rocher', 'Rien ne se passa'], explanation: 'Parce que Moïse frappa le rocher avec colère au lieu de lui parler comme Dieu l\'avait ordonné, il ne fut pas autorisé à entrer dans la Terre Promise.' }
  },
  pent44: {
    en: { question: 'What did the bronze serpent heal?', options: ['Leprosy', 'Blindness', 'Snake bites', 'Plague'], explanation: 'When the Israelites were bitten by venomous snakes, God told Moses to make a bronze serpent; anyone who looked at it would live.' },
    it: { question: 'Cosa guariva il serpente di bronzo?', options: ['Lebbra', 'Cecità', 'Morsi di serpente', 'Pestilenza'], explanation: 'Quando gli Israeliti furono morsi da serpenti velenosi, Dio disse a Mosè di fare un serpente di bronzo; chiunque lo guardasse sarebbe vissuto.' },
    es: { question: '¿Qué curaba la serpiente de bronce?', options: ['Lepra', 'Ceguera', 'Mordeduras de serpiente', 'Plaga'], explanation: 'Cuando los israelitas fueron mordidos por serpientes venenosas, Dios le dijo a Moisés que hiciera una serpiente de bronce; quien la mirara viviría.' },
    pt: { question: 'O que a serpente de bronze curava?', options: ['Lepra', 'Cegueira', 'Mordidas de serpente', 'Praga'], explanation: 'Quando os israelitas foram mordidos por serpentes venenosas, Deus disse a Moisés para fazer uma serpente de bronze; quem olhasse para ela viveria.' },
    fr: { question: 'Que guérissait le serpent de bronze?', options: ['La lèpre', 'La cécité', 'Les morsures de serpent', 'La peste'], explanation: 'Quand les Israélites furent mordus par des serpents venimeux, Dieu dit à Moïse de faire un serpent de bronze; quiconque le regarderait vivrait.' }
  },
  pent45: {
    en: { question: 'Who hired Balaam to curse Israel?', options: ['Pharaoh', 'Balak king of Moab', 'The king of Edom', 'The Amalekites'], explanation: 'Balak, king of Moab, was afraid of Israel and hired the prophet Balaam to curse them, but God made him bless them instead.' },
    it: { question: 'Chi assunse Balaam per maledire Israele?', options: ['Faraone', 'Balac re di Moab', 'Il re di Edom', 'Gli Amaleciti'], explanation: 'Balac, re di Moab, aveva paura di Israele e assunse il profeta Balaam per maledirli, ma Dio lo fece benedirli invece.' },
    es: { question: '¿Quién contrató a Balaam para maldecir a Israel?', options: ['Faraón', 'Balac rey de Moab', 'El rey de Edom', 'Los amalecitas'], explanation: 'Balac, rey de Moab, tenía miedo de Israel y contrató al profeta Balaam para maldecirlos, pero Dios lo hizo bendecirlos en su lugar.' },
    pt: { question: 'Quem contratou Balaão para amaldiçoar Israel?', options: ['Faraó', 'Balaque rei de Moabe', 'O rei de Edom', 'Os amalequitas'], explanation: 'Balaque, rei de Moabe, tinha medo de Israel e contratou o profeta Balaão para amaldiçoá-los, mas Deus fez com que ele os abençoasse.' },
    fr: { question: 'Qui a engagé Balaam pour maudire Israël?', options: ['Pharaon', 'Balak roi de Moab', 'Le roi d\'Édom', 'Les Amalécites'], explanation: 'Balak, roi de Moab, avait peur d\'Israël et engagea le prophète Balaam pour les maudire, mais Dieu le fit les bénir à la place.' }
  },
  pent46: {
    en: { question: 'What does "Deuteronomy" mean?', options: ['Laws of God', 'Second law', 'Final words', 'Holy commands'], explanation: 'Deuteronomy means "second law" in Greek, as it records Moses\' restatement of the law to the new generation before entering Canaan.' },
    it: { question: 'Cosa significa "Deuteronomio"?', options: ['Leggi di Dio', 'Seconda legge', 'Ultime parole', 'Comandi santi'], explanation: 'Deuteronomio significa "seconda legge" in greco, poiché registra la riesposizione della legge da parte di Mosè alla nuova generazione prima di entrare in Canaan.' },
    es: { question: '¿Qué significa "Deuteronomio"?', options: ['Leyes de Dios', 'Segunda ley', 'Palabras finales', 'Mandatos santos'], explanation: 'Deuteronomio significa "segunda ley" en griego, ya que registra la reexposición de la ley por Moisés a la nueva generación antes de entrar en Canaán.' },
    pt: { question: 'O que significa "Deuteronômio"?', options: ['Leis de Deus', 'Segunda lei', 'Palavras finais', 'Mandamentos santos'], explanation: 'Deuteronômio significa "segunda lei" em grego, pois registra a reexposição da lei por Moisés à nova geração antes de entrar em Canaã.' },
    fr: { question: 'Que signifie "Deutéronome"?', options: ['Lois de Dieu', 'Seconde loi', 'Dernières paroles', 'Commandements saints'], explanation: 'Deutéronome signifie "seconde loi" en grec, car il enregistre la réexposition de la loi par Moïse à la nouvelle génération avant d\'entrer en Canaan.' }
  },
  pent47: {
    en: { question: 'Where did Moses deliver his farewell speeches?', options: ['Mount Sinai', 'Plains of Moab', 'Kadesh Barnea', 'The wilderness of Sin'], explanation: 'Moses delivered his farewell addresses to Israel on the plains of Moab, east of the Jordan River, before his death.' },
    it: { question: 'Dove pronunciò Mosè i suoi discorsi d\'addio?', options: ['Monte Sinai', 'Pianure di Moab', 'Cades Barnea', 'Il deserto di Sin'], explanation: 'Mosè pronunciò i suoi discorsi d\'addio a Israele nelle pianure di Moab, a est del fiume Giordano, prima della sua morte.' },
    es: { question: '¿Dónde pronunció Moisés sus discursos de despedida?', options: ['Monte Sinaí', 'Llanuras de Moab', 'Cades Barnea', 'El desierto de Sin'], explanation: 'Moisés pronunció sus discursos de despedida a Israel en las llanuras de Moab, al este del río Jordán, antes de su muerte.' },
    pt: { question: 'Onde Moisés proferiu seus discursos de despedida?', options: ['Monte Sinai', 'Planícies de Moabe', 'Cades-Barneia', 'O deserto de Sim'], explanation: 'Moisés proferiu seus discursos de despedida a Israel nas planícies de Moabe, a leste do rio Jordão, antes de sua morte.' },
    fr: { question: 'Où Moïse a-t-il prononcé ses discours d\'adieu?', options: ['Mont Sinaï', 'Plaines de Moab', 'Kadesh Barnéa', 'Le désert de Sin'], explanation: 'Moïse prononça ses discours d\'adieu à Israël dans les plaines de Moab, à l\'est du Jourdain, avant sa mort.' }
  },
  pent48: {
    en: { question: 'What is the "Shema" which begins Deuteronomy 6:4?', options: ['A prayer for forgiveness', 'A declaration of God\'s oneness', 'A blessing for meals', 'A command to sacrifice'], explanation: 'The Shema ("Hear, O Israel: The LORD our God, the LORD is one") is the central declaration of Jewish faith and monotheism.' },
    it: { question: 'Cos\'è lo "Shema" che inizia in Deuteronomio 6:4?', options: ['Una preghiera per il perdono', 'Una dichiarazione dell\'unicità di Dio', 'Una benedizione per i pasti', 'Un comando di sacrificio'], explanation: 'Lo Shema ("Ascolta, Israele: il SIGNORE è il nostro Dio, il SIGNORE è uno") è la dichiarazione centrale della fede ebraica e del monoteismo.' },
    es: { question: '¿Qué es el "Shemá" que comienza en Deuteronomio 6:4?', options: ['Una oración de perdón', 'Una declaración de la unicidad de Dios', 'Una bendición para las comidas', 'Un mandato de sacrificio'], explanation: 'El Shemá ("Oye, Israel: el SEÑOR nuestro Dios, el SEÑOR es uno") es la declaración central de la fe judía y el monoteísmo.' },
    pt: { question: 'O que é o "Shemá" que começa em Deuteronômio 6:4?', options: ['Uma oração de perdão', 'Uma declaração da unicidade de Deus', 'Uma bênção para as refeições', 'Um comando de sacrifício'], explanation: 'O Shemá ("Ouve, Israel: o SENHOR nosso Deus é o único SENHOR") é a declaração central da fé judaica e do monoteísmo.' },
    fr: { question: 'Qu\'est-ce que le "Shema" qui commence Deutéronome 6:4?', options: ['Une prière de pardon', 'Une déclaration de l\'unicité de Dieu', 'Une bénédiction pour les repas', 'Un commandement de sacrifice'], explanation: 'Le Shema ("Écoute, Israël: l\'Éternel notre Dieu est le seul Éternel") est la déclaration centrale de la foi juive et du monothéisme.' }
  },
  pent49: {
    en: { question: 'From which mountain did Moses view the Promised Land before dying?', options: ['Mount Sinai', 'Mount Carmel', 'Mount Nebo', 'Mount Hermon'], explanation: 'God allowed Moses to see the Promised Land from Mount Nebo in Moab before he died, though he could not enter it.' },
    it: { question: 'Da quale monte Mosè vide la Terra Promessa prima di morire?', options: ['Monte Sinai', 'Monte Carmelo', 'Monte Nebo', 'Monte Hermon'], explanation: 'Dio permise a Mosè di vedere la Terra Promessa dal Monte Nebo in Moab prima di morire, anche se non poteva entrarvi.' },
    es: { question: '¿Desde qué monte vio Moisés la Tierra Prometida antes de morir?', options: ['Monte Sinaí', 'Monte Carmelo', 'Monte Nebo', 'Monte Hermón'], explanation: 'Dios permitió a Moisés ver la Tierra Prometida desde el Monte Nebo en Moab antes de morir, aunque no pudo entrar en ella.' },
    pt: { question: 'De qual monte Moisés viu a Terra Prometida antes de morrer?', options: ['Monte Sinai', 'Monte Carmelo', 'Monte Nebo', 'Monte Hermom'], explanation: 'Deus permitiu que Moisés visse a Terra Prometida do Monte Nebo em Moabe antes de morrer, embora não pudesse entrar nela.' },
    fr: { question: 'De quelle montagne Moïse a-t-il vu la Terre Promise avant de mourir?', options: ['Mont Sinaï', 'Mont Carmel', 'Mont Nébo', 'Mont Hermon'], explanation: 'Dieu permit à Moïse de voir la Terre Promise depuis le Mont Nébo en Moab avant sa mort, bien qu\'il ne puisse pas y entrer.' }
  },
  pent50: {
    en: { question: 'Who buried Moses?', options: ['Joshua', 'Aaron', 'The Israelites', 'God Himself'], explanation: 'The Bible says that God Himself buried Moses in an unknown location in Moab, and no one knows where his grave is.' },
    it: { question: 'Chi seppellì Mosè?', options: ['Giosuè', 'Aronne', 'Gli Israeliti', 'Dio stesso'], explanation: 'La Bibbia dice che Dio stesso seppellì Mosè in un luogo sconosciuto in Moab, e nessuno sa dove sia la sua tomba.' },
    es: { question: '¿Quién enterró a Moisés?', options: ['Josué', 'Aarón', 'Los israelitas', 'Dios mismo'], explanation: 'La Biblia dice que Dios mismo enterró a Moisés en un lugar desconocido en Moab, y nadie sabe dónde está su tumba.' },
    pt: { question: 'Quem enterrou Moisés?', options: ['Josué', 'Arão', 'Os israelitas', 'O próprio Deus'], explanation: 'A Bíblia diz que o próprio Deus enterrou Moisés em um local desconhecido em Moabe, e ninguém sabe onde está sua sepultura.' },
    fr: { question: 'Qui a enterré Moïse?', options: ['Josué', 'Aaron', 'Les Israélites', 'Dieu Lui-même'], explanation: 'La Bible dit que Dieu Lui-même enterra Moïse dans un endroit inconnu en Moab, et personne ne sait où se trouve sa tombe.' }
  }
};
