import { Language } from '@/contexts/LanguageContext';

interface QuestionTranslation {
  question: string;
  options: string[];
  explanation?: string;
}

type QuestionTranslations = {
  [id: string]: {
    [lang in Language]: QuestionTranslation;
  };
};

export const questionTranslations: QuestionTranslations = {
  // Pentateuch
  p1: {
    en: { question: 'Who built the ark in Genesis?', options: ['Abraham', 'Moses', 'Noah', 'David'], explanation: 'God commanded Noah to build an ark to save his family and animals from the flood that would destroy the earth due to human wickedness.' },
    it: { question: 'Chi costruì l\'arca in Genesi?', options: ['Abramo', 'Mosè', 'Noè', 'Davide'], explanation: 'Dio comandò a Noè di costruire un\'arca per salvare la sua famiglia e gli animali dal diluvio che avrebbe distrutto la terra a causa della malvagità umana.' },
    es: { question: '¿Quién construyó el arca en Génesis?', options: ['Abraham', 'Moisés', 'Noé', 'David'], explanation: 'Dios ordenó a Noé construir un arca para salvar a su familia y los animales del diluvio que destruiría la tierra debido a la maldad humana.' },
    pt: { question: 'Quem construiu a arca em Gênesis?', options: ['Abraão', 'Moisés', 'Noé', 'Davi'], explanation: 'Deus ordenou a Noé construir uma arca para salvar sua família e os animais do dilúvio que destruiria a terra devido à maldade humana.' },
    fr: { question: 'Qui a construit l\'arche dans la Genèse?', options: ['Abraham', 'Moïse', 'Noé', 'David'], explanation: 'Dieu a ordonné à Noé de construire une arche pour sauver sa famille et les animaux du déluge qui détruirait la terre à cause de la méchanceté humaine.' }
  },
  p2: {
    en: { question: 'How many days did God take to create the world?', options: ['5', '6', '7', '10'], explanation: 'God created the world in six days and rested on the seventh day, establishing the Sabbath as a day of rest.' },
    it: { question: 'Quanti giorni impiegò Dio per creare il mondo?', options: ['5', '6', '7', '10'], explanation: 'Dio creò il mondo in sei giorni e si riposò il settimo giorno, stabilendo il Sabato come giorno di riposo.' },
    es: { question: '¿Cuántos días tardó Dios en crear el mundo?', options: ['5', '6', '7', '10'], explanation: 'Dios creó el mundo en seis días y descansó el séptimo día, estableciendo el Sábado como día de descanso.' },
    pt: { question: 'Quantos dias Deus levou para criar o mundo?', options: ['5', '6', '7', '10'], explanation: 'Deus criou o mundo em seis dias e descansou no sétimo dia, estabelecendo o Sábado como dia de descanso.' },
    fr: { question: 'Combien de jours Dieu a-t-il mis pour créer le monde?', options: ['5', '6', '7', '10'], explanation: 'Dieu a créé le monde en six jours et s\'est reposé le septième jour, établissant le Sabbat comme jour de repos.' }
  },
  p3: {
    en: { question: 'What was the first plague of Egypt?', options: ['Frogs', 'Blood', 'Locusts', 'Darkness'], explanation: 'The first plague turned the Nile River and all water in Egypt into blood, killing the fish and making the water undrinkable.' },
    it: { question: 'Quale fu la prima piaga d\'Egitto?', options: ['Rane', 'Sangue', 'Locuste', 'Tenebre'], explanation: 'La prima piaga trasformò il fiume Nilo e tutta l\'acqua in Egitto in sangue, uccidendo i pesci e rendendo l\'acqua imbevibile.' },
    es: { question: '¿Cuál fue la primera plaga de Egipto?', options: ['Ranas', 'Sangre', 'Langostas', 'Oscuridad'], explanation: 'La primera plaga convirtió el río Nilo y toda el agua de Egipto en sangre, matando los peces y haciendo el agua imposible de beber.' },
    pt: { question: 'Qual foi a primeira praga do Egito?', options: ['Rãs', 'Sangue', 'Gafanhotos', 'Trevas'], explanation: 'A primeira praga transformou o rio Nilo e toda a água no Egito em sangue, matando os peixes e tornando a água impossível de beber.' },
    fr: { question: 'Quelle fut la première plaie d\'Égypte?', options: ['Grenouilles', 'Sang', 'Sauterelles', 'Ténèbres'], explanation: 'La première plaie transforma le Nil et toute l\'eau en Égypte en sang, tuant les poissons et rendant l\'eau imbuvable.' }
  },
  p4: {
    en: { question: 'Who was sold into slavery by his brothers?', options: ['Benjamin', 'Joseph', 'Reuben', 'Judah'], explanation: 'Joseph\'s brothers were jealous of his coat of many colors and his dreams, so they sold him to merchants who took him to Egypt.' },
    it: { question: 'Chi fu venduto come schiavo dai suoi fratelli?', options: ['Beniamino', 'Giuseppe', 'Ruben', 'Giuda'], explanation: 'I fratelli di Giuseppe erano gelosi della sua tunica colorata e dei suoi sogni, così lo vendettero a mercanti che lo portarono in Egitto.' },
    es: { question: '¿Quién fue vendido como esclavo por sus hermanos?', options: ['Benjamín', 'José', 'Rubén', 'Judá'], explanation: 'Los hermanos de José estaban celosos de su túnica de colores y sus sueños, así que lo vendieron a mercaderes que lo llevaron a Egipto.' },
    pt: { question: 'Quem foi vendido como escravo pelos seus irmãos?', options: ['Benjamim', 'José', 'Rúben', 'Judá'], explanation: 'Os irmãos de José tinham inveja de sua túnica colorida e seus sonhos, então o venderam a mercadores que o levaram ao Egito.' },
    fr: { question: 'Qui a été vendu comme esclave par ses frères?', options: ['Benjamin', 'Joseph', 'Ruben', 'Juda'], explanation: 'Les frères de Joseph étaient jaloux de sa tunique multicolore et de ses rêves, alors ils l\'ont vendu à des marchands qui l\'ont emmené en Égypte.' }
  },
  p5: {
    en: { question: 'What mountain did Moses receive the Ten Commandments on?', options: ['Mount Carmel', 'Mount Sinai', 'Mount Zion', 'Mount Nebo'], explanation: 'God called Moses to Mount Sinai where He gave him the Ten Commandments written on stone tablets.' },
    it: { question: 'Su quale monte Mosè ricevette i Dieci Comandamenti?', options: ['Monte Carmelo', 'Monte Sinai', 'Monte Sion', 'Monte Nebo'], explanation: 'Dio chiamò Mosè sul Monte Sinai dove gli diede i Dieci Comandamenti scritti su tavole di pietra.' },
    es: { question: '¿En qué monte Moisés recibió los Diez Mandamientos?', options: ['Monte Carmelo', 'Monte Sinaí', 'Monte Sión', 'Monte Nebo'], explanation: 'Dios llamó a Moisés al Monte Sinaí donde le dio los Diez Mandamientos escritos en tablas de piedra.' },
    pt: { question: 'Em qual monte Moisés recebeu os Dez Mandamentos?', options: ['Monte Carmelo', 'Monte Sinai', 'Monte Sião', 'Monte Nebo'], explanation: 'Deus chamou Moisés ao Monte Sinai onde lhe deu os Dez Mandamentos escritos em tábuas de pedra.' },
    fr: { question: 'Sur quelle montagne Moïse a-t-il reçu les Dix Commandements?', options: ['Mont Carmel', 'Mont Sinaï', 'Mont Sion', 'Mont Nébo'], explanation: 'Dieu a appelé Moïse sur le Mont Sinaï où Il lui a donné les Dix Commandements écrits sur des tablettes de pierre.' }
  },
  p6: {
    en: { question: 'Who was the wife of Abraham?', options: ['Rachel', 'Leah', 'Sarah', 'Rebekah'], explanation: 'Sarah was Abraham\'s wife and the mother of Isaac. Despite being barren, she miraculously gave birth at age 90.' },
    it: { question: 'Chi era la moglie di Abramo?', options: ['Rachele', 'Lia', 'Sara', 'Rebecca'], explanation: 'Sara era la moglie di Abramo e la madre di Isacco. Nonostante fosse sterile, diede miracolosamente alla luce a 90 anni.' },
    es: { question: '¿Quién era la esposa de Abraham?', options: ['Raquel', 'Lea', 'Sara', 'Rebeca'], explanation: 'Sara era la esposa de Abraham y la madre de Isaac. A pesar de ser estéril, dio a luz milagrosamente a los 90 años.' },
    pt: { question: 'Quem era a esposa de Abraão?', options: ['Raquel', 'Lia', 'Sara', 'Rebeca'], explanation: 'Sara era a esposa de Abraão e mãe de Isaque. Apesar de ser estéril, ela deu à luz milagrosamente aos 90 anos.' },
    fr: { question: 'Qui était la femme d\'Abraham?', options: ['Rachel', 'Léa', 'Sara', 'Rébecca'], explanation: 'Sara était la femme d\'Abraham et la mère d\'Isaac. Malgré sa stérilité, elle donna miraculeusement naissance à 90 ans.' }
  },
  p7: {
    en: { question: 'How many tribes of Israel were there?', options: ['10', '12', '14', '7'], explanation: 'The twelve tribes descended from Jacob\'s twelve sons, forming the nation of Israel.' },
    it: { question: 'Quante erano le tribù d\'Israele?', options: ['10', '12', '14', '7'], explanation: 'Le dodici tribù discendevano dai dodici figli di Giacobbe, formando la nazione d\'Israele.' },
    es: { question: '¿Cuántas tribus de Israel había?', options: ['10', '12', '14', '7'], explanation: 'Las doce tribus descendían de los doce hijos de Jacob, formando la nación de Israel.' },
    pt: { question: 'Quantas tribos de Israel existiam?', options: ['10', '12', '14', '7'], explanation: 'As doze tribos descendiam dos doze filhos de Jacó, formando a nação de Israel.' },
    fr: { question: 'Combien de tribus d\'Israël y avait-il?', options: ['10', '12', '14', '7'], explanation: 'Les douze tribus descendaient des douze fils de Jacob, formant la nation d\'Israël.' }
  },
  p8: {
    en: { question: 'What was the name of Moses\' brother?', options: ['Joshua', 'Aaron', 'Caleb', 'Eleazar'], explanation: 'Aaron was Moses\' older brother who served as his spokesman before Pharaoh and later became the first High Priest of Israel.' },
    it: { question: 'Qual era il nome del fratello di Mosè?', options: ['Giosuè', 'Aronne', 'Caleb', 'Eleazaro'], explanation: 'Aronne era il fratello maggiore di Mosè che servì come suo portavoce davanti al Faraone e in seguito divenne il primo Sommo Sacerdote d\'Israele.' },
    es: { question: '¿Cuál era el nombre del hermano de Moisés?', options: ['Josué', 'Aarón', 'Caleb', 'Eleazar'], explanation: 'Aarón era el hermano mayor de Moisés que sirvió como su portavoz ante Faraón y luego se convirtió en el primer Sumo Sacerdote de Israel.' },
    pt: { question: 'Qual era o nome do irmão de Moisés?', options: ['Josué', 'Arão', 'Calebe', 'Eleazar'], explanation: 'Arão era o irmão mais velho de Moisés que serviu como seu porta-voz diante do Faraó e depois se tornou o primeiro Sumo Sacerdote de Israel.' },
    fr: { question: 'Quel était le nom du frère de Moïse?', options: ['Josué', 'Aaron', 'Caleb', 'Éléazar'], explanation: 'Aaron était le frère aîné de Moïse qui servit de porte-parole devant Pharaon et devint ensuite le premier Grand Prêtre d\'Israël.' }
  },
  p9: {
    en: { question: 'Which book contains the Ten Commandments?', options: ['Genesis', 'Exodus', 'Leviticus', 'Numbers'], explanation: 'The Ten Commandments are found in Exodus chapter 20, given by God to Moses on Mount Sinai.' },
    it: { question: 'Quale libro contiene i Dieci Comandamenti?', options: ['Genesi', 'Esodo', 'Levitico', 'Numeri'], explanation: 'I Dieci Comandamenti si trovano in Esodo capitolo 20, dati da Dio a Mosè sul Monte Sinai.' },
    es: { question: '¿Qué libro contiene los Diez Mandamientos?', options: ['Génesis', 'Éxodo', 'Levítico', 'Números'], explanation: 'Los Diez Mandamientos se encuentran en Éxodo capítulo 20, dados por Dios a Moisés en el Monte Sinaí.' },
    pt: { question: 'Qual livro contém os Dez Mandamentos?', options: ['Gênesis', 'Êxodo', 'Levítico', 'Números'], explanation: 'Os Dez Mandamentos são encontrados em Êxodo capítulo 20, dados por Deus a Moisés no Monte Sinai.' },
    fr: { question: 'Quel livre contient les Dix Commandements?', options: ['Genèse', 'Exode', 'Lévitique', 'Nombres'], explanation: 'Les Dix Commandements se trouvent dans Exode chapitre 20, donnés par Dieu à Moïse sur le Mont Sinaï.' }
  },
  p10: {
    en: { question: 'What did God create on the fourth day?', options: ['Animals', 'Sun, moon and stars', 'Man', 'Sea creatures'], explanation: 'On the fourth day, God created the sun to govern the day, the moon to govern the night, and the stars.' },
    it: { question: 'Cosa creò Dio il quarto giorno?', options: ['Animali', 'Sole, luna e stelle', 'Uomo', 'Creature marine'], explanation: 'Il quarto giorno, Dio creò il sole per governare il giorno, la luna per governare la notte, e le stelle.' },
    es: { question: '¿Qué creó Dios el cuarto día?', options: ['Animales', 'Sol, luna y estrellas', 'Hombre', 'Criaturas marinas'], explanation: 'El cuarto día, Dios creó el sol para gobernar el día, la luna para gobernar la noche, y las estrellas.' },
    pt: { question: 'O que Deus criou no quarto dia?', options: ['Animais', 'Sol, lua e estrelas', 'Homem', 'Criaturas marinhas'], explanation: 'No quarto dia, Deus criou o sol para governar o dia, a lua para governar a noite, e as estrelas.' },
    fr: { question: 'Qu\'est-ce que Dieu a créé le quatrième jour?', options: ['Animaux', 'Soleil, lune et étoiles', 'Homme', 'Créatures marines'], explanation: 'Le quatrième jour, Dieu créa le soleil pour dominer le jour, la lune pour dominer la nuit, et les étoiles.' }
  },
  p11: {
    en: { question: 'Who was the father of Jacob and Esau?', options: ['Abraham', 'Isaac', 'Noah', 'Adam'], explanation: 'Isaac was the son of Abraham and the father of twins Jacob and Esau, born to his wife Rebekah.' },
    it: { question: 'Chi era il padre di Giacobbe ed Esaù?', options: ['Abramo', 'Isacco', 'Noè', 'Adamo'], explanation: 'Isacco era figlio di Abramo e padre dei gemelli Giacobbe ed Esaù, nati dalla moglie Rebecca.' },
    es: { question: '¿Quién era el padre de Jacob y Esaú?', options: ['Abraham', 'Isaac', 'Noé', 'Adán'], explanation: 'Isaac era hijo de Abraham y padre de los gemelos Jacob y Esaú, nacidos de su esposa Rebeca.' },
    pt: { question: 'Quem era o pai de Jacó e Esaú?', options: ['Abraão', 'Isaque', 'Noé', 'Adão'], explanation: 'Isaque era filho de Abraão e pai dos gêmeos Jacó e Esaú, nascidos de sua esposa Rebeca.' },
    fr: { question: 'Qui était le père de Jacob et Ésaü?', options: ['Abraham', 'Isaac', 'Noé', 'Adam'], explanation: 'Isaac était le fils d\'Abraham et le père des jumeaux Jacob et Ésaü, nés de sa femme Rébecca.' }
  },
  p12: {
    en: { question: 'What was the last plague of Egypt?', options: ['Death of firstborn', 'Darkness', 'Locusts', 'Boils'], explanation: 'The tenth and final plague was the death of all firstborn in Egypt, which finally convinced Pharaoh to let the Israelites go.' },
    it: { question: 'Quale fu l\'ultima piaga d\'Egitto?', options: ['Morte dei primogeniti', 'Tenebre', 'Locuste', 'Ulcere'], explanation: 'La decima e ultima piaga fu la morte di tutti i primogeniti in Egitto, che finalmente convinse il Faraone a lasciar andare gli Israeliti.' },
    es: { question: '¿Cuál fue la última plaga de Egipto?', options: ['Muerte de primogénitos', 'Oscuridad', 'Langostas', 'Úlceras'], explanation: 'La décima y última plaga fue la muerte de todos los primogénitos en Egipto, que finalmente convenció a Faraón de dejar ir a los israelitas.' },
    pt: { question: 'Qual foi a última praga do Egito?', options: ['Morte dos primogênitos', 'Trevas', 'Gafanhotos', 'Úlceras'], explanation: 'A décima e última praga foi a morte de todos os primogênitos no Egito, que finalmente convenceu Faraó a deixar os israelitas irem.' },
    fr: { question: 'Quelle fut la dernière plaie d\'Égypte?', options: ['Mort des premiers-nés', 'Ténèbres', 'Sauterelles', 'Ulcères'], explanation: 'La dixième et dernière plaie fut la mort de tous les premiers-nés en Égypte, ce qui convainquit enfin Pharaon de laisser partir les Israélites.' }
  },
  p13: {
    en: { question: 'How many years did the Israelites wander in the wilderness?', options: ['20', '30', '40', '50'], explanation: 'Due to their lack of faith, God decreed that the Israelites would wander 40 years in the wilderness until that generation passed away.' },
    it: { question: 'Per quanti anni gli Israeliti vagarono nel deserto?', options: ['20', '30', '40', '50'], explanation: 'A causa della loro mancanza di fede, Dio decretò che gli Israeliti avrebbero vagato 40 anni nel deserto fino a quando quella generazione non fosse scomparsa.' },
    es: { question: '¿Cuántos años vagaron los israelitas en el desierto?', options: ['20', '30', '40', '50'], explanation: 'Debido a su falta de fe, Dios decretó que los israelitas vagarían 40 años en el desierto hasta que esa generación pasara.' },
    pt: { question: 'Quantos anos os israelitas vagaram no deserto?', options: ['20', '30', '40', '50'], explanation: 'Devido à sua falta de fé, Deus decretou que os israelitas vagariam 40 anos no deserto até que aquela geração passasse.' },
    fr: { question: 'Combien d\'années les Israélites ont-ils erré dans le désert?', options: ['20', '30', '40', '50'], explanation: 'À cause de leur manque de foi, Dieu décréta que les Israélites erreraient 40 ans dans le désert jusqu\'à ce que cette génération disparaisse.' }
  },
  p14: {
    en: { question: 'Who was chosen to lead Israel after Moses?', options: ['Aaron', 'Caleb', 'Joshua', 'Eleazar'], explanation: 'Joshua was Moses\' assistant and was chosen by God to lead Israel into the Promised Land after Moses\' death.' },
    it: { question: 'Chi fu scelto per guidare Israele dopo Mosè?', options: ['Aronne', 'Caleb', 'Giosuè', 'Eleazaro'], explanation: 'Giosuè era l\'assistente di Mosè e fu scelto da Dio per guidare Israele nella Terra Promessa dopo la morte di Mosè.' },
    es: { question: '¿Quién fue elegido para liderar Israel después de Moisés?', options: ['Aarón', 'Caleb', 'Josué', 'Eleazar'], explanation: 'Josué era el asistente de Moisés y fue elegido por Dios para liderar a Israel hacia la Tierra Prometida después de la muerte de Moisés.' },
    pt: { question: 'Quem foi escolhido para liderar Israel depois de Moisés?', options: ['Arão', 'Calebe', 'Josué', 'Eleazar'], explanation: 'Josué era o assistente de Moisés e foi escolhido por Deus para liderar Israel à Terra Prometida após a morte de Moisés.' },
    fr: { question: 'Qui a été choisi pour diriger Israël après Moïse?', options: ['Aaron', 'Caleb', 'Josué', 'Éléazar'], explanation: 'Josué était l\'assistant de Moïse et fut choisi par Dieu pour mener Israël en Terre Promise après la mort de Moïse.' }
  },
  p15: {
    en: { question: 'What was the name of the garden where Adam and Eve lived?', options: ['Paradise', 'Eden', 'Canaan', 'Babylon'], explanation: 'God planted the Garden of Eden and placed Adam there to tend it. It was a perfect paradise where Adam and Eve lived before the fall.' },
    it: { question: 'Qual era il nome del giardino dove vivevano Adamo ed Eva?', options: ['Paradiso', 'Eden', 'Canaan', 'Babilonia'], explanation: 'Dio piantò il Giardino dell\'Eden e vi pose Adamo per coltivarlo. Era un paradiso perfetto dove Adamo ed Eva vissero prima della caduta.' },
    es: { question: '¿Cuál era el nombre del jardín donde vivían Adán y Eva?', options: ['Paraíso', 'Edén', 'Canaán', 'Babilonia'], explanation: 'Dios plantó el Jardín del Edén y puso a Adán allí para cultivarlo. Era un paraíso perfecto donde Adán y Eva vivieron antes de la caída.' },
    pt: { question: 'Qual era o nome do jardim onde Adão e Eva viviam?', options: ['Paraíso', 'Éden', 'Canaã', 'Babilônia'], explanation: 'Deus plantou o Jardim do Éden e colocou Adão lá para cultivá-lo. Era um paraíso perfeito onde Adão e Eva viveram antes da queda.' },
    fr: { question: 'Quel était le nom du jardin où vivaient Adam et Ève?', options: ['Paradis', 'Éden', 'Canaan', 'Babylone'], explanation: 'Dieu planta le Jardin d\'Éden et y plaça Adam pour le cultiver. C\'était un paradis parfait où Adam et Ève vécurent avant la chute.' }
  },
  p16: {
    en: { question: 'How old was Abraham when Isaac was born?', options: ['75', '90', '100', '120'], explanation: 'Abraham was 100 years old when his son Isaac was born, fulfilling God\'s promise despite Sarah\'s old age.' },
    it: { question: 'Quanti anni aveva Abramo quando nacque Isacco?', options: ['75', '90', '100', '120'], explanation: 'Abramo aveva 100 anni quando nacque suo figlio Isacco, adempiendo la promessa di Dio nonostante la vecchiaia di Sara.' },
    es: { question: '¿Cuántos años tenía Abraham cuando nació Isaac?', options: ['75', '90', '100', '120'], explanation: 'Abraham tenía 100 años cuando nació su hijo Isaac, cumpliendo la promesa de Dios a pesar de la vejez de Sara.' },
    pt: { question: 'Quantos anos tinha Abraão quando Isaque nasceu?', options: ['75', '90', '100', '120'], explanation: 'Abraão tinha 100 anos quando seu filho Isaque nasceu, cumprindo a promessa de Deus apesar da idade avançada de Sara.' },
    fr: { question: 'Quel âge avait Abraham quand Isaac est né?', options: ['75', '90', '100', '120'], explanation: 'Abraham avait 100 ans quand son fils Isaac est né, accomplissant la promesse de Dieu malgré l\'âge avancé de Sara.' }
  },
  p17: {
    en: { question: 'What did Esau sell his birthright for?', options: ['Gold', 'A bowl of stew', 'Land', 'Sheep'], explanation: 'Esau, being hungry, sold his birthright to Jacob for a bowl of red lentil stew, despising his inheritance.' },
    it: { question: 'Per cosa Esaù vendette la sua primogenitura?', options: ['Oro', 'Un piatto di minestra', 'Terra', 'Pecore'], explanation: 'Esaù, essendo affamato, vendette la sua primogenitura a Giacobbe per un piatto di minestra di lenticchie rosse, disprezzando la sua eredità.' },
    es: { question: '¿Por qué vendió Esaú su primogenitura?', options: ['Oro', 'Un plato de guiso', 'Tierra', 'Ovejas'], explanation: 'Esaú, estando hambriento, vendió su primogenitura a Jacob por un plato de guiso de lentejas rojas, despreciando su herencia.' },
    pt: { question: 'Pelo que Esaú vendeu sua primogenitura?', options: ['Ouro', 'Um prato de ensopado', 'Terra', 'Ovelhas'], explanation: 'Esaú, com fome, vendeu sua primogenitura a Jacó por um prato de ensopado de lentilhas vermelhas, desprezando sua herança.' },
    fr: { question: 'Contre quoi Ésaü a-t-il vendu son droit d\'aînesse?', options: ['Or', 'Un plat de potage', 'Terre', 'Moutons'], explanation: 'Ésaü, ayant faim, vendit son droit d\'aînesse à Jacob pour un plat de potage de lentilles rouges, méprisant son héritage.' }
  },
  p18: {
    en: { question: 'Who was thrown into a pit by his brothers?', options: ['Benjamin', 'Joseph', 'Judah', 'Dan'], explanation: 'Joseph\'s brothers threw him into an empty pit before selling him to merchants, out of jealousy for their father\'s favoritism.' },
    it: { question: 'Chi fu gettato in una cisterna dai suoi fratelli?', options: ['Beniamino', 'Giuseppe', 'Giuda', 'Dan'], explanation: 'I fratelli di Giuseppe lo gettarono in una cisterna vuota prima di venderlo ai mercanti, per gelosia del favoritismo del padre.' },
    es: { question: '¿Quién fue arrojado a un pozo por sus hermanos?', options: ['Benjamín', 'José', 'Judá', 'Dan'], explanation: 'Los hermanos de José lo arrojaron a un pozo vacío antes de venderlo a los mercaderes, por celos del favoritismo de su padre.' },
    pt: { question: 'Quem foi jogado em uma cisterna pelos seus irmãos?', options: ['Benjamim', 'José', 'Judá', 'Dã'], explanation: 'Os irmãos de José o jogaram em uma cisterna vazia antes de vendê-lo aos mercadores, por ciúme do favoritismo do pai.' },
    fr: { question: 'Qui a été jeté dans une citerne par ses frères?', options: ['Benjamin', 'Joseph', 'Juda', 'Dan'], explanation: 'Les frères de Joseph l\'ont jeté dans une citerne vide avant de le vendre aux marchands, par jalousie du favoritisme de leur père.' }
  },
  p19: {
    en: { question: 'What was the sign of the covenant with Noah?', options: ['Circumcision', 'Rainbow', 'Sabbath', 'Passover'], explanation: 'God placed a rainbow in the sky as a sign of His covenant never to destroy the earth by flood again.' },
    it: { question: 'Quale fu il segno dell\'alleanza con Noè?', options: ['Circoncisione', 'Arcobaleno', 'Sabato', 'Pasqua'], explanation: 'Dio pose l\'arcobaleno nel cielo come segno della Sua alleanza di non distruggere mai più la terra con un diluvio.' },
    es: { question: '¿Cuál fue la señal del pacto con Noé?', options: ['Circuncisión', 'Arcoíris', 'Sábado', 'Pascua'], explanation: 'Dios puso un arcoíris en el cielo como señal de Su pacto de nunca más destruir la tierra con un diluvio.' },
    pt: { question: 'Qual foi o sinal da aliança com Noé?', options: ['Circuncisão', 'Arco-íris', 'Sábado', 'Páscoa'], explanation: 'Deus colocou um arco-íris no céu como sinal de Sua aliança de nunca mais destruir a terra com um dilúvio.' },
    fr: { question: 'Quel était le signe de l\'alliance avec Noé?', options: ['Circoncision', 'Arc-en-ciel', 'Sabbat', 'Pâque'], explanation: 'Dieu plaça un arc-en-ciel dans le ciel comme signe de Son alliance de ne plus jamais détruire la terre par un déluge.' }
  },
  p20: {
    en: { question: 'How many plagues were sent upon Egypt?', options: ['7', '10', '12', '15'], explanation: 'God sent ten plagues upon Egypt to convince Pharaoh to release the Israelites from slavery.' },
    it: { question: 'Quante piaghe furono inviate sull\'Egitto?', options: ['7', '10', '12', '15'], explanation: 'Dio mandò dieci piaghe sull\'Egitto per convincere il Faraone a liberare gli Israeliti dalla schiavitù.' },
    es: { question: '¿Cuántas plagas fueron enviadas sobre Egipto?', options: ['7', '10', '12', '15'], explanation: 'Dios envió diez plagas sobre Egipto para convencer a Faraón de liberar a los israelitas de la esclavitud.' },
    pt: { question: 'Quantas pragas foram enviadas sobre o Egito?', options: ['7', '10', '12', '15'], explanation: 'Deus enviou dez pragas sobre o Egito para convencer Faraó a libertar os israelitas da escravidão.' },
    fr: { question: 'Combien de plaies ont été envoyées sur l\'Égypte?', options: ['7', '10', '12', '15'], explanation: 'Dieu envoya dix plaies sur l\'Égypte pour convaincre Pharaon de libérer les Israélites de l\'esclavage.' }
  },
  p21: {
    en: { question: 'What animal spoke to Balaam?', options: ['Serpent', 'Lion', 'Donkey', 'Raven'], explanation: 'God miraculously enabled Balaam\'s donkey to speak when an angel blocked their path, rebuking Balaam for his stubbornness.' },
    it: { question: 'Quale animale parlò a Balaam?', options: ['Serpente', 'Leone', 'Asina', 'Corvo'], explanation: 'Dio miracolosamente fece parlare l\'asina di Balaam quando un angelo bloccò il loro cammino, rimproverando Balaam per la sua ostinazione.' },
    es: { question: '¿Qué animal habló a Balaam?', options: ['Serpiente', 'León', 'Burra', 'Cuervo'], explanation: 'Dios milagrosamente permitió que la burra de Balaam hablara cuando un ángel bloqueó su camino, reprendiendo a Balaam por su terquedad.' },
    pt: { question: 'Qual animal falou com Balaão?', options: ['Serpente', 'Leão', 'Jumenta', 'Corvo'], explanation: 'Deus milagrosamente permitiu que a jumenta de Balaão falasse quando um anjo bloqueou seu caminho, repreendendo Balaão por sua teimosia.' },
    fr: { question: 'Quel animal a parlé à Balaam?', options: ['Serpent', 'Lion', 'Ânesse', 'Corbeau'], explanation: 'Dieu permit miraculeusement à l\'ânesse de Balaam de parler quand un ange bloqua leur chemin, réprimandant Balaam pour son entêtement.' }
  },
  p22: {
    en: { question: 'Who was Moses\' father-in-law?', options: ['Jethro', 'Laban', 'Lot', 'Nahor'], explanation: 'Jethro was a Midianite priest whose daughter Zipporah became Moses\' wife. He later gave Moses wise counsel on leadership.' },
    it: { question: 'Chi era il suocero di Mosè?', options: ['Ietro', 'Labano', 'Lot', 'Nahor'], explanation: 'Ietro era un sacerdote madianita la cui figlia Sefora divenne moglie di Mosè. In seguito diede a Mosè saggi consigli sulla leadership.' },
    es: { question: '¿Quién era el suegro de Moisés?', options: ['Jetro', 'Labán', 'Lot', 'Nacor'], explanation: 'Jetro era un sacerdote madianita cuya hija Séfora se convirtió en esposa de Moisés. Más tarde dio a Moisés sabios consejos sobre liderazgo.' },
    pt: { question: 'Quem era o sogro de Moisés?', options: ['Jetro', 'Labão', 'Ló', 'Naor'], explanation: 'Jetro era um sacerdote midianita cuja filha Zípora se tornou esposa de Moisés. Mais tarde ele deu a Moisés sábios conselhos sobre liderança.' },
    fr: { question: 'Qui était le beau-père de Moïse?', options: ['Jéthro', 'Laban', 'Lot', 'Nachor'], explanation: 'Jéthro était un prêtre madianite dont la fille Séphora devint l\'épouse de Moïse. Il donna plus tard à Moïse de sages conseils sur le leadership.' }
  },
  p23: {
    en: { question: 'What was the name of Moses\' sister?', options: ['Miriam', 'Deborah', 'Ruth', 'Hannah'], explanation: 'Miriam was the older sister of Moses and Aaron. She watched over baby Moses in the Nile and later led Israel in worship.' },
    it: { question: 'Qual era il nome della sorella di Mosè?', options: ['Miriam', 'Debora', 'Rut', 'Anna'], explanation: 'Miriam era la sorella maggiore di Mosè e Aronne. Vegliò sul piccolo Mosè nel Nilo e in seguito guidò Israele nell\'adorazione.' },
    es: { question: '¿Cuál era el nombre de la hermana de Moisés?', options: ['Miriam', 'Débora', 'Rut', 'Ana'], explanation: 'Miriam era la hermana mayor de Moisés y Aarón. Vigiló al bebé Moisés en el Nilo y más tarde dirigió a Israel en la adoración.' },
    pt: { question: 'Qual era o nome da irmã de Moisés?', options: ['Miriã', 'Débora', 'Rute', 'Ana'], explanation: 'Miriã era a irmã mais velha de Moisés e Arão. Ela cuidou do bebê Moisés no Nilo e mais tarde liderou Israel na adoração.' },
    fr: { question: 'Quel était le nom de la sœur de Moïse?', options: ['Myriam', 'Débora', 'Ruth', 'Anne'], explanation: 'Myriam était la sœur aînée de Moïse et Aaron. Elle veilla sur le bébé Moïse dans le Nil et dirigea plus tard Israël dans l\'adoration.' }
  },
  p24: {
    en: { question: 'What did the Israelites worship while Moses was on the mountain?', options: ['Bronze serpent', 'Golden calf', 'Stone pillar', 'Wooden idol'], explanation: 'While Moses received the Ten Commandments, the impatient Israelites made Aaron create a golden calf idol to worship.' },
    it: { question: 'Cosa adorarono gli Israeliti mentre Mosè era sulla montagna?', options: ['Serpente di bronzo', 'Vitello d\'oro', 'Colonna di pietra', 'Idolo di legno'], explanation: 'Mentre Mosè riceveva i Dieci Comandamenti, gli Israeliti impazienti fecero creare ad Aronne un idolo a forma di vitello d\'oro da adorare.' },
    es: { question: '¿Qué adoraron los israelitas mientras Moisés estaba en la montaña?', options: ['Serpiente de bronce', 'Becerro de oro', 'Pilar de piedra', 'Ídolo de madera'], explanation: 'Mientras Moisés recibía los Diez Mandamientos, los impacientes israelitas hicieron que Aarón creara un ídolo de becerro de oro para adorar.' },
    pt: { question: 'O que os israelitas adoraram enquanto Moisés estava na montanha?', options: ['Serpente de bronze', 'Bezerro de ouro', 'Pilar de pedra', 'Ídolo de madeira'], explanation: 'Enquanto Moisés recebia os Dez Mandamentos, os impacientes israelitas fizeram Arão criar um ídolo de bezerro de ouro para adorar.' },
    fr: { question: 'Qu\'ont adoré les Israélites pendant que Moïse était sur la montagne?', options: ['Serpent d\'airain', 'Veau d\'or', 'Pilier de pierre', 'Idole de bois'], explanation: 'Pendant que Moïse recevait les Dix Commandements, les Israélites impatients firent créer à Aaron un veau d\'or à adorer.' }
  },
  p25: {
    en: { question: 'Who was the firstborn son of Adam and Eve?', options: ['Seth', 'Abel', 'Cain', 'Enoch'], explanation: 'Cain was the first child born to Adam and Eve. He became a farmer but later killed his brother Abel out of jealousy.' },
    it: { question: 'Chi fu il figlio primogenito di Adamo ed Eva?', options: ['Set', 'Abele', 'Caino', 'Enoc'], explanation: 'Caino fu il primo figlio nato da Adamo ed Eva. Divenne agricoltore ma in seguito uccise suo fratello Abele per gelosia.' },
    es: { question: '¿Quién fue el hijo primogénito de Adán y Eva?', options: ['Set', 'Abel', 'Caín', 'Enoc'], explanation: 'Caín fue el primer hijo nacido de Adán y Eva. Se convirtió en agricultor pero luego mató a su hermano Abel por celos.' },
    pt: { question: 'Quem foi o filho primogênito de Adão e Eva?', options: ['Sete', 'Abel', 'Caim', 'Enoque'], explanation: 'Caim foi o primeiro filho nascido de Adão e Eva. Ele se tornou agricultor, mas depois matou seu irmão Abel por ciúme.' },
    fr: { question: 'Qui était le fils premier-né d\'Adam et Ève?', options: ['Seth', 'Abel', 'Caïn', 'Énoch'], explanation: 'Caïn fut le premier enfant né d\'Adam et Ève. Il devint agriculteur mais tua plus tard son frère Abel par jalousie.' }
  },

  // Minor Prophets
  m1: {
    en: { question: 'Which prophet was swallowed by a great fish?', options: ['Amos', 'Jonah', 'Micah', 'Hosea'], explanation: 'Jonah fled from God\'s command to preach to Nineveh. God sent a great fish to swallow him for three days until he repented.' },
    it: { question: 'Quale profeta fu inghiottito da un grande pesce?', options: ['Amos', 'Giona', 'Michea', 'Osea'], explanation: 'Giona fuggì dal comando di Dio di predicare a Ninive. Dio mandò un grande pesce per inghiottirlo per tre giorni finché non si pentì.' },
    es: { question: '¿Qué profeta fue tragado por un gran pez?', options: ['Amós', 'Jonás', 'Miqueas', 'Oseas'], explanation: 'Jonás huyó del mandato de Dios de predicar a Nínive. Dios envió un gran pez para tragarlo por tres días hasta que se arrepintió.' },
    pt: { question: 'Qual profeta foi engolido por um grande peixe?', options: ['Amós', 'Jonas', 'Miquéias', 'Oséias'], explanation: 'Jonas fugiu do comando de Deus de pregar a Nínive. Deus enviou um grande peixe para engoli-lo por três dias até que se arrependesse.' },
    fr: { question: 'Quel prophète a été avalé par un grand poisson?', options: ['Amos', 'Jonas', 'Michée', 'Osée'], explanation: 'Jonas a fui le commandement de Dieu de prêcher à Ninive. Dieu envoya un grand poisson pour l\'avaler pendant trois jours jusqu\'à ce qu\'il se repente.' }
  },
  m2: {
    en: { question: 'Who prophesied "The Lord will be king over the whole earth"?', options: ['Zechariah', 'Malachi', 'Haggai', 'Joel'], explanation: 'Zechariah prophesied about the coming messianic kingdom when God will reign over the whole earth from Jerusalem.' },
    it: { question: 'Chi profetizzò "Il Signore sarà re su tutta la terra"?', options: ['Zaccaria', 'Malachia', 'Aggeo', 'Gioele'], explanation: 'Zaccaria profetizzò sul regno messianico a venire quando Dio regnerà su tutta la terra da Gerusalemme.' },
    es: { question: '¿Quién profetizó "El Señor será rey sobre toda la tierra"?', options: ['Zacarías', 'Malaquías', 'Hageo', 'Joel'], explanation: 'Zacarías profetizó sobre el reino mesiánico venidero cuando Dios reinará sobre toda la tierra desde Jerusalén.' },
    pt: { question: 'Quem profetizou "O Senhor será rei sobre toda a terra"?', options: ['Zacarias', 'Malaquias', 'Ageu', 'Joel'], explanation: 'Zacarias profetizou sobre o reino messiânico vindouro quando Deus reinará sobre toda a terra a partir de Jerusalém.' },
    fr: { question: 'Qui a prophétisé "L\'Éternel sera roi sur toute la terre"?', options: ['Zacharie', 'Malachie', 'Aggée', 'Joël'], explanation: 'Zacharie a prophétisé le royaume messianique à venir quand Dieu régnera sur toute la terre depuis Jérusalem.' }
  },
  m3: {
    en: { question: 'Which prophet married a prostitute as commanded by God?', options: ['Amos', 'Micah', 'Hosea', 'Joel'], explanation: 'God commanded Hosea to marry Gomer as a living illustration of God\'s faithful love for unfaithful Israel.' },
    it: { question: 'Quale profeta sposò una prostituta come comandato da Dio?', options: ['Amos', 'Michea', 'Osea', 'Gioele'], explanation: 'Dio comandò a Osea di sposare Gomer come illustrazione vivente dell\'amore fedele di Dio per Israele infedele.' },
    es: { question: '¿Qué profeta se casó con una prostituta por mandato de Dios?', options: ['Amós', 'Miqueas', 'Oseas', 'Joel'], explanation: 'Dios ordenó a Oseas casarse con Gomer como ilustración viva del amor fiel de Dios hacia Israel infiel.' },
    pt: { question: 'Qual profeta se casou com uma prostituta como ordenado por Deus?', options: ['Amós', 'Miquéias', 'Oséias', 'Joel'], explanation: 'Deus ordenou a Oséias se casar com Gômer como ilustração viva do amor fiel de Deus por Israel infiel.' },
    fr: { question: 'Quel prophète a épousé une prostituée sur l\'ordre de Dieu?', options: ['Amos', 'Michée', 'Osée', 'Joël'], explanation: 'Dieu ordonna à Osée d\'épouser Gomer comme illustration vivante de l\'amour fidèle de Dieu envers Israël infidèle.' }
  },
  m4: {
    en: { question: 'Who said "But let justice roll on like a river"?', options: ['Amos', 'Micah', 'Habakkuk', 'Nahum'], explanation: 'Amos called Israel to abandon empty religious rituals and pursue genuine justice and righteousness.' },
    it: { question: 'Chi disse "Ma scorra la giustizia come un fiume"?', options: ['Amos', 'Michea', 'Abacuc', 'Naum'], explanation: 'Amos chiamò Israele ad abbandonare i vuoti rituali religiosi e perseguire la vera giustizia e rettitudine.' },
    es: { question: '¿Quién dijo "Pero corra la justicia como un río"?', options: ['Amós', 'Miqueas', 'Habacuc', 'Nahúm'], explanation: 'Amós llamó a Israel a abandonar los rituales religiosos vacíos y buscar la verdadera justicia y rectitud.' },
    pt: { question: 'Quem disse "Mas corra a justiça como um rio"?', options: ['Amós', 'Miquéias', 'Habacuque', 'Naum'], explanation: 'Amós chamou Israel a abandonar os rituais religiosos vazios e buscar a verdadeira justiça e retidão.' },
    fr: { question: 'Qui a dit "Mais que la justice coule comme un fleuve"?', options: ['Amos', 'Michée', 'Habacuc', 'Nahum'], explanation: 'Amos a appelé Israël à abandonner les rituels religieux vides et à poursuivre une véritable justice et droiture.' }
  },
  m5: {
    en: { question: 'Which city did Jonah try to avoid going to?', options: ['Babylon', 'Jerusalem', 'Nineveh', 'Tarshish'], explanation: 'God commanded Jonah to preach repentance to Nineveh, the capital of Assyria, but Jonah fled toward Tarshish instead.' },
    it: { question: 'Quale città Giona cercò di evitare?', options: ['Babilonia', 'Gerusalemme', 'Ninive', 'Tarsis'], explanation: 'Dio comandò a Giona di predicare il pentimento a Ninive, la capitale dell\'Assiria, ma Giona fuggì verso Tarsis invece.' },
    es: { question: '¿Qué ciudad Jonás trató de evitar?', options: ['Babilonia', 'Jerusalén', 'Nínive', 'Tarsis'], explanation: 'Dios ordenó a Jonás predicar arrepentimiento a Nínive, la capital de Asiria, pero Jonás huyó hacia Tarsis.' },
    pt: { question: 'Qual cidade Jonas tentou evitar?', options: ['Babilônia', 'Jerusalém', 'Nínive', 'Társis'], explanation: 'Deus ordenou a Jonas pregar arrependimento a Nínive, a capital da Assíria, mas Jonas fugiu para Társis.' },
    fr: { question: 'Quelle ville Jonas a-t-il essayé d\'éviter?', options: ['Babylone', 'Jérusalem', 'Ninive', 'Tarsis'], explanation: 'Dieu ordonna à Jonas de prêcher la repentance à Ninive, capitale de l\'Assyrie, mais Jonas s\'enfuit vers Tarsis.' }
  },

  // Four Gospels
  g1: {
    en: { question: 'Where was Jesus born?', options: ['Nazareth', 'Jerusalem', 'Bethlehem', 'Capernaum'], explanation: 'Jesus was born in Bethlehem, fulfilling the prophecy of Micah 5:2 about the Messiah\'s birthplace.' },
    it: { question: 'Dove nacque Gesù?', options: ['Nazaret', 'Gerusalemme', 'Betlemme', 'Cafarnao'], explanation: 'Gesù nacque a Betlemme, adempiendo la profezia di Michea 5:2 sul luogo di nascita del Messia.' },
    es: { question: '¿Dónde nació Jesús?', options: ['Nazaret', 'Jerusalén', 'Belén', 'Capernaúm'], explanation: 'Jesús nació en Belén, cumpliendo la profecía de Miqueas 5:2 sobre el lugar de nacimiento del Mesías.' },
    pt: { question: 'Onde Jesus nasceu?', options: ['Nazaré', 'Jerusalém', 'Belém', 'Cafarnaum'], explanation: 'Jesus nasceu em Belém, cumprindo a profecia de Miquéias 5:2 sobre o local de nascimento do Messias.' },
    fr: { question: 'Où Jésus est-il né?', options: ['Nazareth', 'Jérusalem', 'Bethléem', 'Capharnaüm'], explanation: 'Jésus est né à Bethléem, accomplissant la prophétie de Michée 5:2 sur le lieu de naissance du Messie.' }
  },
  g2: {
    en: { question: 'How many disciples did Jesus have?', options: ['10', '12', '14', '7'], explanation: 'Jesus chose twelve disciples (apostles) to be His closest followers and to continue His ministry after His ascension.' },
    it: { question: 'Quanti discepoli aveva Gesù?', options: ['10', '12', '14', '7'], explanation: 'Gesù scelse dodici discepoli (apostoli) per essere i suoi seguaci più stretti e continuare il suo ministero dopo la sua ascensione.' },
    es: { question: '¿Cuántos discípulos tenía Jesús?', options: ['10', '12', '14', '7'], explanation: 'Jesús eligió doce discípulos (apóstoles) para ser sus seguidores más cercanos y continuar su ministerio después de su ascensión.' },
    pt: { question: 'Quantos discípulos Jesus tinha?', options: ['10', '12', '14', '7'], explanation: 'Jesus escolheu doze discípulos (apóstolos) para serem seus seguidores mais próximos e continuarem seu ministério após sua ascensão.' },
    fr: { question: 'Combien de disciples Jésus avait-il?', options: ['10', '12', '14', '7'], explanation: 'Jésus a choisi douze disciples (apôtres) pour être ses plus proches disciples et poursuivre son ministère après son ascension.' }
  },
  g3: {
    en: { question: 'Who baptized Jesus?', options: ['Peter', 'John the Baptist', 'John the Apostle', 'James'], explanation: 'John the Baptist baptized Jesus in the Jordan River, marking the beginning of Jesus\' public ministry.' },
    it: { question: 'Chi battezzò Gesù?', options: ['Pietro', 'Giovanni Battista', 'Giovanni Apostolo', 'Giacomo'], explanation: 'Giovanni Battista battezzò Gesù nel fiume Giordano, segnando l\'inizio del ministero pubblico di Gesù.' },
    es: { question: '¿Quién bautizó a Jesús?', options: ['Pedro', 'Juan el Bautista', 'Juan el Apóstol', 'Santiago'], explanation: 'Juan el Bautista bautizó a Jesús en el río Jordán, marcando el comienzo del ministerio público de Jesús.' },
    pt: { question: 'Quem batizou Jesus?', options: ['Pedro', 'João Batista', 'João Apóstolo', 'Tiago'], explanation: 'João Batista batizou Jesus no rio Jordão, marcando o início do ministério público de Jesus.' },
    fr: { question: 'Qui a baptisé Jésus?', options: ['Pierre', 'Jean-Baptiste', 'Jean l\'Apôtre', 'Jacques'], explanation: 'Jean-Baptiste a baptisé Jésus dans le fleuve Jourdain, marquant le début du ministère public de Jésus.' }
  },
  g4: {
    en: { question: 'What was Jesus\' first miracle?', options: ['Healing a blind man', 'Walking on water', 'Turning water into wine', 'Feeding 5000'], explanation: 'At a wedding in Cana, Jesus turned water into wine at His mother\'s request, revealing His glory to His disciples.' },
    it: { question: 'Quale fu il primo miracolo di Gesù?', options: ['Guarire un cieco', 'Camminare sulle acque', 'Trasformare l\'acqua in vino', 'Sfamare 5000'], explanation: 'A un matrimonio a Cana, Gesù trasformò l\'acqua in vino su richiesta di sua madre, rivelando la sua gloria ai suoi discepoli.' },
    es: { question: '¿Cuál fue el primer milagro de Jesús?', options: ['Sanar a un ciego', 'Caminar sobre el agua', 'Convertir agua en vino', 'Alimentar a 5000'], explanation: 'En una boda en Caná, Jesús convirtió el agua en vino a petición de su madre, revelando su gloria a sus discípulos.' },
    pt: { question: 'Qual foi o primeiro milagre de Jesus?', options: ['Curar um cego', 'Andar sobre as águas', 'Transformar água em vinho', 'Alimentar 5000'], explanation: 'Em um casamento em Caná, Jesus transformou água em vinho a pedido de sua mãe, revelando sua glória aos seus discípulos.' },
    fr: { question: 'Quel a été le premier miracle de Jésus?', options: ['Guérir un aveugle', 'Marcher sur l\'eau', 'Changer l\'eau en vin', 'Nourrir 5000'], explanation: 'À des noces à Cana, Jésus a changé l\'eau en vin à la demande de sa mère, révélant sa gloire à ses disciples.' }
  },
  g5: {
    en: { question: 'Who betrayed Jesus?', options: ['Peter', 'Thomas', 'Judas', 'John'], explanation: 'Judas Iscariot betrayed Jesus for thirty pieces of silver, leading the soldiers to arrest Him in the Garden of Gethsemane.' },
    it: { question: 'Chi tradì Gesù?', options: ['Pietro', 'Tommaso', 'Giuda', 'Giovanni'], explanation: 'Giuda Iscariota tradì Gesù per trenta monete d\'argento, guidando i soldati ad arrestarlo nel Giardino del Getsemani.' },
    es: { question: '¿Quién traicionó a Jesús?', options: ['Pedro', 'Tomás', 'Judas', 'Juan'], explanation: 'Judas Iscariote traicionó a Jesús por treinta monedas de plata, guiando a los soldados para arrestarlo en el Huerto de Getsemaní.' },
    pt: { question: 'Quem traiu Jesus?', options: ['Pedro', 'Tomé', 'Judas', 'João'], explanation: 'Judas Iscariotes traiu Jesus por trinta moedas de prata, guiando os soldados para prendê-lo no Jardim do Getsêmani.' },
    fr: { question: 'Qui a trahi Jésus?', options: ['Pierre', 'Thomas', 'Judas', 'Jean'], explanation: 'Judas Iscariote a trahi Jésus pour trente pièces d\'argent, menant les soldats pour l\'arrêter au Jardin de Gethsémané.' }
  },
  g6: {
    en: { question: 'How many loaves fed 5000 people?', options: ['3', '5', '7', '12'], explanation: 'Jesus miraculously multiplied five loaves of bread and two fish to feed over 5000 people, with twelve baskets left over.' },
    it: { question: 'Quanti pani sfamarono 5000 persone?', options: ['3', '5', '7', '12'], explanation: 'Gesù moltiplicò miracolosamente cinque pani e due pesci per sfamare oltre 5000 persone, con dodici ceste avanzate.' },
    es: { question: '¿Cuántos panes alimentaron a 5000 personas?', options: ['3', '5', '7', '12'], explanation: 'Jesús multiplicó milagrosamente cinco panes y dos peces para alimentar a más de 5000 personas, sobrando doce canastas.' },
    pt: { question: 'Quantos pães alimentaram 5000 pessoas?', options: ['3', '5', '7', '12'], explanation: 'Jesus multiplicou milagrosamente cinco pães e dois peixes para alimentar mais de 5000 pessoas, sobrando doze cestos.' },
    fr: { question: 'Combien de pains ont nourri 5000 personnes?', options: ['3', '5', '7', '12'], explanation: 'Jésus a miraculeusement multiplié cinq pains et deux poissons pour nourrir plus de 5000 personnes, avec douze paniers restants.' }
  },
  g7: {
    en: { question: 'Who denied Jesus three times?', options: ['Judas', 'Peter', 'Thomas', 'James'], explanation: 'Peter denied knowing Jesus three times on the night of His arrest, fulfilling Jesus\' prediction, but was later restored.' },
    it: { question: 'Chi rinnegò Gesù tre volte?', options: ['Giuda', 'Pietro', 'Tommaso', 'Giacomo'], explanation: 'Pietro rinnegò di conoscere Gesù tre volte nella notte del suo arresto, adempiendo la predizione di Gesù, ma fu poi riabilitato.' },
    es: { question: '¿Quién negó a Jesús tres veces?', options: ['Judas', 'Pedro', 'Tomás', 'Santiago'], explanation: 'Pedro negó conocer a Jesús tres veces la noche de su arresto, cumpliendo la predicción de Jesús, pero fue restaurado después.' },
    pt: { question: 'Quem negou Jesus três vezes?', options: ['Judas', 'Pedro', 'Tomé', 'Tiago'], explanation: 'Pedro negou conhecer Jesus três vezes na noite de sua prisão, cumprindo a predição de Jesus, mas foi restaurado depois.' },
    fr: { question: 'Qui a renié Jésus trois fois?', options: ['Judas', 'Pierre', 'Thomas', 'Jacques'], explanation: 'Pierre a renié connaître Jésus trois fois la nuit de son arrestation, accomplissant la prédiction de Jésus, mais fut restauré plus tard.' }
  },
  g8: {
    en: { question: 'Where did Jesus give the Sermon on the Mount?', options: ['Jerusalem', 'A mountain', 'The temple', 'A boat'], explanation: 'Jesus delivered the Sermon on the Mount on a hillside near Capernaum, teaching about the Kingdom of God.' },
    it: { question: 'Dove Gesù pronunciò il Sermone della Montagna?', options: ['Gerusalemme', 'Una montagna', 'Il tempio', 'Una barca'], explanation: 'Gesù pronunciò il Sermone della Montagna su una collina vicino a Cafarnao, insegnando sul Regno di Dio.' },
    es: { question: '¿Dónde dio Jesús el Sermón del Monte?', options: ['Jerusalén', 'Una montaña', 'El templo', 'Un barco'], explanation: 'Jesús pronunció el Sermón del Monte en una ladera cerca de Capernaúm, enseñando sobre el Reino de Dios.' },
    pt: { question: 'Onde Jesus fez o Sermão da Montanha?', options: ['Jerusalém', 'Uma montanha', 'O templo', 'Um barco'], explanation: 'Jesus pronunciou o Sermão da Montanha em uma encosta perto de Cafarnaum, ensinando sobre o Reino de Deus.' },
    fr: { question: 'Où Jésus a-t-il prononcé le Sermon sur la Montagne?', options: ['Jérusalem', 'Une montagne', 'Le temple', 'Un bateau'], explanation: 'Jésus a prononcé le Sermon sur la Montagne sur une colline près de Capharnaüm, enseignant sur le Royaume de Dieu.' }
  },
  g9: {
    en: { question: 'Who was raised from the dead after four days?', options: ['Jairus\' daughter', 'Lazarus', 'The widow\'s son', 'Tabitha'], explanation: 'Jesus raised Lazarus from the dead after four days in the tomb, demonstrating His power over death.' },
    it: { question: 'Chi fu risuscitato dopo quattro giorni?', options: ['La figlia di Giairo', 'Lazzaro', 'Il figlio della vedova', 'Tabita'], explanation: 'Gesù risuscitò Lazzaro dopo quattro giorni nella tomba, dimostrando il suo potere sulla morte.' },
    es: { question: '¿Quién fue resucitado después de cuatro días?', options: ['La hija de Jairo', 'Lázaro', 'El hijo de la viuda', 'Tabita'], explanation: 'Jesús resucitó a Lázaro después de cuatro días en la tumba, demostrando su poder sobre la muerte.' },
    pt: { question: 'Quem foi ressuscitado depois de quatro dias?', options: ['A filha de Jairo', 'Lázaro', 'O filho da viúva', 'Tabita'], explanation: 'Jesus ressuscitou Lázaro depois de quatro dias no túmulo, demonstrando seu poder sobre a morte.' },
    fr: { question: 'Qui a été ressuscité après quatre jours?', options: ['La fille de Jaïrus', 'Lazare', 'Le fils de la veuve', 'Tabitha'], explanation: 'Jésus a ressuscité Lazare après quatre jours dans le tombeau, démontrant son pouvoir sur la mort.' }
  },
  g10: {
    en: { question: 'What did Jesus ride into Jerusalem?', options: ['Horse', 'Camel', 'Donkey', 'Chariot'], explanation: 'Jesus rode into Jerusalem on a donkey on Palm Sunday, fulfilling the prophecy of Zechariah 9:9.' },
    it: { question: 'Su cosa entrò Gesù a Gerusalemme?', options: ['Cavallo', 'Cammello', 'Asino', 'Carro'], explanation: 'Gesù entrò a Gerusalemme su un asino la Domenica delle Palme, adempiendo la profezia di Zaccaria 9:9.' },
    es: { question: '¿En qué entró Jesús a Jerusalén?', options: ['Caballo', 'Camello', 'Burro', 'Carro'], explanation: 'Jesús entró a Jerusalén montado en un burro el Domingo de Ramos, cumpliendo la profecía de Zacarías 9:9.' },
    pt: { question: 'Em que Jesus entrou em Jerusalém?', options: ['Cavalo', 'Camelo', 'Jumento', 'Carruagem'], explanation: 'Jesus entrou em Jerusalém montado em um jumento no Domingo de Ramos, cumprindo a profecia de Zacarias 9:9.' },
    fr: { question: 'Sur quoi Jésus est-il entré à Jérusalem?', options: ['Cheval', 'Chameau', 'Âne', 'Chariot'], explanation: 'Jésus est entré à Jérusalem sur un âne le Dimanche des Rameaux, accomplissant la prophétie de Zacharie 9:9.' }
  }
};

export function getTranslatedQuestion(
  id: string,
  language: Language,
  fallback: { question: string; options: string[]; explanation?: string }
): { question: string; options: string[]; explanation?: string } {
  const translation = questionTranslations[id];
  if (translation && translation[language]) {
    return translation[language];
  }
  // Return English if available, otherwise fallback
  if (translation && translation.en) {
    return translation.en;
  }
  return fallback;
}
