import { Language } from '@/contexts/LanguageContext';
import { apocalypseTranslations } from './translations/apocalypseTranslations';
import { actsTranslations } from './translations/actsTranslations';
import { biblicalCharactersTranslations } from './translations/biblicalCharactersTranslations';
import { gospelsTranslations } from './translations/gospelsTranslations';

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
  },
  g11: {
    en: { question: 'Which Gospel begins with "In the beginning was the Word"?', options: ['Matthew', 'Mark', 'Luke', 'John'], explanation: 'John\'s Gospel opens with a theological prologue identifying Jesus as the eternal Word who was with God from the beginning.' },
    it: { question: 'Quale Vangelo inizia con "In principio era il Verbo"?', options: ['Matteo', 'Marco', 'Luca', 'Giovanni'], explanation: 'Il Vangelo di Giovanni si apre con un prologo teologico che identifica Gesù come il Verbo eterno che era con Dio fin dal principio.' },
    es: { question: '¿Qué Evangelio comienza con "En el principio era el Verbo"?', options: ['Mateo', 'Marcos', 'Lucas', 'Juan'], explanation: 'El Evangelio de Juan abre con un prólogo teológico identificando a Jesús como el Verbo eterno que estaba con Dios desde el principio.' },
    pt: { question: 'Qual Evangelho começa com "No princípio era o Verbo"?', options: ['Mateus', 'Marcos', 'Lucas', 'João'], explanation: 'O Evangelho de João abre com um prólogo teológico identificando Jesus como o Verbo eterno que estava com Deus desde o princípio.' },
    fr: { question: 'Quel Évangile commence par "Au commencement était la Parole"?', options: ['Matthieu', 'Marc', 'Luc', 'Jean'], explanation: 'L\'Évangile de Jean s\'ouvre avec un prologue théologique identifiant Jésus comme la Parole éternelle qui était avec Dieu dès le commencement.' }
  },
  g12: {
    en: { question: 'Who helped Jesus carry His cross?', options: ['Peter', 'John', 'Simon of Cyrene', 'Barabbas'], explanation: 'Simon of Cyrene was compelled by Roman soldiers to carry Jesus\' cross when He became too weak from the beatings.' },
    it: { question: 'Chi aiutò Gesù a portare la croce?', options: ['Pietro', 'Giovanni', 'Simone di Cirene', 'Barabba'], explanation: 'Simone di Cirene fu costretto dai soldati romani a portare la croce di Gesù quando Egli divenne troppo debole per le percosse.' },
    es: { question: '¿Quién ayudó a Jesús a llevar su cruz?', options: ['Pedro', 'Juan', 'Simón de Cirene', 'Barrabás'], explanation: 'Simón de Cirene fue obligado por los soldados romanos a llevar la cruz de Jesús cuando Él se debilitó demasiado por los golpes.' },
    pt: { question: 'Quem ajudou Jesus a carregar sua cruz?', options: ['Pedro', 'João', 'Simão Cireneu', 'Barrabás'], explanation: 'Simão Cireneu foi obrigado pelos soldados romanos a carregar a cruz de Jesus quando Ele ficou muito fraco pelos açoites.' },
    fr: { question: 'Qui a aidé Jésus à porter sa croix?', options: ['Pierre', 'Jean', 'Simon de Cyrène', 'Barabbas'], explanation: 'Simon de Cyrène fut contraint par les soldats romains à porter la croix de Jésus quand Il devint trop faible à cause des coups.' }
  },
  g13: {
    en: { question: 'How many days was Jesus tempted in the wilderness?', options: ['7', '30', '40', '50'], explanation: 'Jesus fasted and was tempted by Satan for 40 days in the wilderness before beginning His public ministry.' },
    it: { question: 'Per quanti giorni Gesù fu tentato nel deserto?', options: ['7', '30', '40', '50'], explanation: 'Gesù digiunò e fu tentato da Satana per 40 giorni nel deserto prima di iniziare il suo ministero pubblico.' },
    es: { question: '¿Cuántos días fue tentado Jesús en el desierto?', options: ['7', '30', '40', '50'], explanation: 'Jesús ayunó y fue tentado por Satanás durante 40 días en el desierto antes de comenzar su ministerio público.' },
    pt: { question: 'Por quantos dias Jesus foi tentado no deserto?', options: ['7', '30', '40', '50'], explanation: 'Jesus jejuou e foi tentado por Satanás por 40 dias no deserto antes de iniciar seu ministério público.' },
    fr: { question: 'Combien de jours Jésus a-t-il été tenté dans le désert?', options: ['7', '30', '40', '50'], explanation: 'Jésus a jeûné et a été tenté par Satan pendant 40 jours dans le désert avant de commencer son ministère public.' }
  },
  g14: {
    en: { question: 'Who was the Roman governor who sentenced Jesus?', options: ['Herod', 'Caesar', 'Pilate', 'Felix'], explanation: 'Pontius Pilate was the Roman governor who, despite finding no fault in Jesus, sentenced Him to crucifixion under pressure from the crowd.' },
    it: { question: 'Chi era il governatore romano che condannò Gesù?', options: ['Erode', 'Cesare', 'Pilato', 'Felice'], explanation: 'Ponzio Pilato era il governatore romano che, pur non trovando colpa in Gesù, lo condannò alla crocifissione sotto la pressione della folla.' },
    es: { question: '¿Quién era el gobernador romano que sentenció a Jesús?', options: ['Herodes', 'César', 'Pilato', 'Félix'], explanation: 'Poncio Pilato era el gobernador romano que, a pesar de no encontrar culpa en Jesús, lo sentenció a la crucifixión bajo presión de la multitud.' },
    pt: { question: 'Quem era o governador romano que sentenciou Jesus?', options: ['Herodes', 'César', 'Pilatos', 'Félix'], explanation: 'Pôncio Pilatos era o governador romano que, apesar de não encontrar culpa em Jesus, o sentenciou à crucificação sob pressão da multidão.' },
    fr: { question: 'Qui était le gouverneur romain qui a condamné Jésus?', options: ['Hérode', 'César', 'Pilate', 'Félix'], explanation: 'Ponce Pilate était le gouverneur romain qui, bien qu\'il n\'ait trouvé aucune faute en Jésus, l\'a condamné à la crucifixion sous la pression de la foule.' }
  },
  g15: {
    en: { question: 'Which disciple doubted the resurrection?', options: ['Peter', 'Thomas', 'John', 'Andrew'], explanation: 'Thomas refused to believe Jesus had risen until he could see and touch His wounds, earning him the nickname "Doubting Thomas."' },
    it: { question: 'Quale discepolo dubitò della risurrezione?', options: ['Pietro', 'Tommaso', 'Giovanni', 'Andrea'], explanation: 'Tommaso si rifiutò di credere che Gesù fosse risorto finché non poté vedere e toccare le sue ferite, guadagnandosi il soprannome di "Tommaso incredulo."' },
    es: { question: '¿Qué discípulo dudó de la resurrección?', options: ['Pedro', 'Tomás', 'Juan', 'Andrés'], explanation: 'Tomás se negó a creer que Jesús había resucitado hasta poder ver y tocar sus heridas, ganándose el apodo de "Tomás el incrédulo."' },
    pt: { question: 'Qual discípulo duvidou da ressurreição?', options: ['Pedro', 'Tomé', 'João', 'André'], explanation: 'Tomé recusou-se a acreditar que Jesus havia ressuscitado até poder ver e tocar suas feridas, ganhando o apelido de "Tomé incrédulo."' },
    fr: { question: 'Quel disciple a douté de la résurrection?', options: ['Pierre', 'Thomas', 'Jean', 'André'], explanation: 'Thomas refusa de croire que Jésus était ressuscité jusqu\'à ce qu\'il puisse voir et toucher ses blessures, ce qui lui valut le surnom de "Thomas l\'incrédule."' }
  },
  g16: {
    en: { question: 'What was Matthew\'s profession before following Jesus?', options: ['Fisherman', 'Tax collector', 'Carpenter', 'Shepherd'], explanation: 'Matthew (also called Levi) was a tax collector, a profession despised by Jews for collaborating with Rome.' },
    it: { question: 'Qual era la professione di Matteo prima di seguire Gesù?', options: ['Pescatore', 'Esattore delle tasse', 'Falegname', 'Pastore'], explanation: 'Matteo (chiamato anche Levi) era un esattore delle tasse, una professione disprezzata dagli Ebrei per la collaborazione con Roma.' },
    es: { question: '¿Cuál era la profesión de Mateo antes de seguir a Jesús?', options: ['Pescador', 'Recaudador de impuestos', 'Carpintero', 'Pastor'], explanation: 'Mateo (también llamado Leví) era recaudador de impuestos, una profesión despreciada por los judíos por colaborar con Roma.' },
    pt: { question: 'Qual era a profissão de Mateus antes de seguir Jesus?', options: ['Pescador', 'Cobrador de impostos', 'Carpinteiro', 'Pastor'], explanation: 'Mateus (também chamado Levi) era cobrador de impostos, uma profissão desprezada pelos judeus por colaborar com Roma.' },
    fr: { question: 'Quelle était la profession de Matthieu avant de suivre Jésus?', options: ['Pêcheur', 'Collecteur d\'impôts', 'Charpentier', 'Berger'], explanation: 'Matthieu (aussi appelé Lévi) était collecteur d\'impôts, une profession méprisée par les Juifs pour sa collaboration avec Rome.' }
  },
  g17: {
    en: { question: 'Which Gospel was written primarily for Jewish readers?', options: ['Matthew', 'Mark', 'Luke', 'John'], explanation: 'Matthew\'s Gospel emphasizes Jesus as the fulfillment of Old Testament prophecy and traces His genealogy to Abraham.' },
    it: { question: 'Quale Vangelo fu scritto principalmente per i lettori ebrei?', options: ['Matteo', 'Marco', 'Luca', 'Giovanni'], explanation: 'Il Vangelo di Matteo enfatizza Gesù come compimento della profezia dell\'Antico Testamento e traccia la sua genealogia fino ad Abramo.' },
    es: { question: '¿Qué Evangelio fue escrito principalmente para lectores judíos?', options: ['Mateo', 'Marcos', 'Lucas', 'Juan'], explanation: 'El Evangelio de Mateo enfatiza a Jesús como el cumplimiento de la profecía del Antiguo Testamento y traza su genealogía hasta Abraham.' },
    pt: { question: 'Qual Evangelho foi escrito principalmente para leitores judeus?', options: ['Mateus', 'Marcos', 'Lucas', 'João'], explanation: 'O Evangelho de Mateus enfatiza Jesus como o cumprimento da profecia do Antigo Testamento e traça sua genealogia até Abraão.' },
    fr: { question: 'Quel Évangile a été écrit principalement pour les lecteurs juifs?', options: ['Matthieu', 'Marc', 'Luc', 'Jean'], explanation: 'L\'Évangile de Matthieu met l\'accent sur Jésus comme l\'accomplissement de la prophétie de l\'Ancien Testament et retrace sa généalogie jusqu\'à Abraham.' }
  },
  g18: {
    en: { question: 'How many beatitudes are in Matthew\'s Gospel?', options: ['5', '7', '8', '10'], explanation: 'The eight Beatitudes in Matthew 5:3-12 describe the characteristics and blessings of those who belong to God\'s kingdom.' },
    it: { question: 'Quante beatitudini ci sono nel Vangelo di Matteo?', options: ['5', '7', '8', '10'], explanation: 'Le otto Beatitudini in Matteo 5:3-12 descrivono le caratteristiche e le benedizioni di coloro che appartengono al regno di Dio.' },
    es: { question: '¿Cuántas bienaventuranzas hay en el Evangelio de Mateo?', options: ['5', '7', '8', '10'], explanation: 'Las ocho Bienaventuranzas en Mateo 5:3-12 describen las características y bendiciones de quienes pertenecen al reino de Dios.' },
    pt: { question: 'Quantas bem-aventuranças há no Evangelho de Mateus?', options: ['5', '7', '8', '10'], explanation: 'As oito Bem-aventuranças em Mateus 5:3-12 descrevem as características e bênçãos daqueles que pertencem ao reino de Deus.' },
    fr: { question: 'Combien de béatitudes y a-t-il dans l\'Évangile de Matthieu?', options: ['5', '7', '8', '10'], explanation: 'Les huit Béatitudes dans Matthieu 5:3-12 décrivent les caractéristiques et les bénédictions de ceux qui appartiennent au royaume de Dieu.' }
  },
  g19: {
    en: { question: 'Who asked Jesus "What is truth?"', options: ['Herod', 'Pilate', 'Caiaphas', 'Nicodemus'], explanation: 'Pilate asked this philosophical question during Jesus\' trial, but did not wait for an answer, showing his indifference to truth.' },
    it: { question: 'Chi chiese a Gesù "Cos\'è la verità?"', options: ['Erode', 'Pilato', 'Caifa', 'Nicodemo'], explanation: 'Pilato pose questa domanda filosofica durante il processo di Gesù, ma non aspettò una risposta, mostrando la sua indifferenza alla verità.' },
    es: { question: '¿Quién preguntó a Jesús "¿Qué es la verdad?"', options: ['Herodes', 'Pilato', 'Caifás', 'Nicodemo'], explanation: 'Pilato hizo esta pregunta filosófica durante el juicio de Jesús, pero no esperó una respuesta, mostrando su indiferencia hacia la verdad.' },
    pt: { question: 'Quem perguntou a Jesus "O que é a verdade?"', options: ['Herodes', 'Pilatos', 'Caifás', 'Nicodemos'], explanation: 'Pilatos fez esta pergunta filosófica durante o julgamento de Jesus, mas não esperou uma resposta, mostrando sua indiferença à verdade.' },
    fr: { question: 'Qui a demandé à Jésus "Qu\'est-ce que la vérité?"', options: ['Hérode', 'Pilate', 'Caïphe', 'Nicodème'], explanation: 'Pilate a posé cette question philosophique pendant le procès de Jésus, mais n\'a pas attendu de réponse, montrant son indifférence à la vérité.' }
  },
  g20: {
    en: { question: 'Where was Jesus crucified?', options: ['The temple', 'Golgotha', 'Bethany', 'The garden'], explanation: 'Golgotha (also called Calvary) means "Place of the Skull" and was the hill outside Jerusalem where Jesus was crucified.' },
    it: { question: 'Dove fu crocifisso Gesù?', options: ['Il tempio', 'Golgota', 'Betania', 'Il giardino'], explanation: 'Il Golgota (chiamato anche Calvario) significa "Luogo del Teschio" ed era la collina fuori Gerusalemme dove Gesù fu crocifisso.' },
    es: { question: '¿Dónde fue crucificado Jesús?', options: ['El templo', 'Gólgota', 'Betania', 'El jardín'], explanation: 'El Gólgota (también llamado Calvario) significa "Lugar de la Calavera" y era el monte fuera de Jerusalén donde Jesús fue crucificado.' },
    pt: { question: 'Onde Jesus foi crucificado?', options: ['O templo', 'Gólgota', 'Betânia', 'O jardim'], explanation: 'O Gólgota (também chamado Calvário) significa "Lugar da Caveira" e era o monte fora de Jerusalém onde Jesus foi crucificado.' },
    fr: { question: 'Où Jésus a-t-il été crucifié?', options: ['Le temple', 'Golgotha', 'Béthanie', 'Le jardin'], explanation: 'Le Golgotha (aussi appelé Calvaire) signifie "Lieu du Crâne" et était la colline hors de Jérusalem où Jésus fut crucifié.' }
  },
  g21: {
    en: { question: 'Who was the first person to see the risen Jesus?', options: ['Peter', 'John', 'Mary Magdalene', 'The disciples'], explanation: 'Mary Magdalene was the first to see Jesus after His resurrection, near the empty tomb, and was sent to tell the disciples.' },
    it: { question: 'Chi fu la prima persona a vedere Gesù risorto?', options: ['Pietro', 'Giovanni', 'Maria Maddalena', 'I discepoli'], explanation: 'Maria Maddalena fu la prima a vedere Gesù dopo la sua risurrezione, vicino alla tomba vuota, e fu mandata a dirlo ai discepoli.' },
    es: { question: '¿Quién fue la primera persona en ver a Jesús resucitado?', options: ['Pedro', 'Juan', 'María Magdalena', 'Los discípulos'], explanation: 'María Magdalena fue la primera en ver a Jesús después de su resurrección, cerca de la tumba vacía, y fue enviada a decírselo a los discípulos.' },
    pt: { question: 'Quem foi a primeira pessoa a ver Jesus ressuscitado?', options: ['Pedro', 'João', 'Maria Madalena', 'Os discípulos'], explanation: 'Maria Madalena foi a primeira a ver Jesus após sua ressurreição, perto do túmulo vazio, e foi enviada para contar aos discípulos.' },
    fr: { question: 'Qui a été la première personne à voir Jésus ressuscité?', options: ['Pierre', 'Jean', 'Marie-Madeleine', 'Les disciples'], explanation: 'Marie-Madeleine fut la première à voir Jésus après sa résurrection, près du tombeau vide, et fut envoyée le dire aux disciples.' }
  },
  g22: {
    en: { question: 'What did Jesus say are the two greatest commandments?', options: ['Love God and neighbor', 'Pray and fast', 'Give and receive', 'Work and rest'], explanation: 'Jesus summarized all the Law and Prophets into loving God with all your heart and loving your neighbor as yourself.' },
    it: { question: 'Quali disse Gesù essere i due più grandi comandamenti?', options: ['Amare Dio e il prossimo', 'Pregare e digiunare', 'Dare e ricevere', 'Lavorare e riposare'], explanation: 'Gesù riassunse tutta la Legge e i Profeti nell\'amare Dio con tutto il cuore e amare il prossimo come se stessi.' },
    es: { question: '¿Cuáles dijo Jesús que son los dos mandamientos más grandes?', options: ['Amar a Dios y al prójimo', 'Orar y ayunar', 'Dar y recibir', 'Trabajar y descansar'], explanation: 'Jesús resumió toda la Ley y los Profetas en amar a Dios con todo el corazón y amar al prójimo como a uno mismo.' },
    pt: { question: 'Quais Jesus disse serem os dois maiores mandamentos?', options: ['Amar a Deus e ao próximo', 'Orar e jejuar', 'Dar e receber', 'Trabalhar e descansar'], explanation: 'Jesus resumiu toda a Lei e os Profetas em amar a Deus de todo o coração e amar o próximo como a si mesmo.' },
    fr: { question: 'Quels sont les deux plus grands commandements selon Jésus?', options: ['Aimer Dieu et son prochain', 'Prier et jeûner', 'Donner et recevoir', 'Travailler et se reposer'], explanation: 'Jésus a résumé toute la Loi et les Prophètes en aimant Dieu de tout son cœur et son prochain comme soi-même.' }
  },
  g23: {
    en: { question: 'How many fish did Peter catch after the resurrection?', options: ['100', '120', '153', '200'], explanation: 'After Jesus\' resurrection, Peter and the disciples caught exactly 153 large fish in a miraculous catch directed by Jesus.' },
    it: { question: 'Quanti pesci catturò Pietro dopo la risurrezione?', options: ['100', '120', '153', '200'], explanation: 'Dopo la risurrezione di Gesù, Pietro e i discepoli catturarono esattamente 153 grandi pesci in una pesca miracolosa guidata da Gesù.' },
    es: { question: '¿Cuántos peces atrapó Pedro después de la resurrección?', options: ['100', '120', '153', '200'], explanation: 'Después de la resurrección de Jesús, Pedro y los discípulos atraparon exactamente 153 peces grandes en una pesca milagrosa dirigida por Jesús.' },
    pt: { question: 'Quantos peixes Pedro pescou após a ressurreição?', options: ['100', '120', '153', '200'], explanation: 'Após a ressurreição de Jesus, Pedro e os discípulos pescaram exatamente 153 grandes peixes em uma pesca milagrosa dirigida por Jesus.' },
    fr: { question: 'Combien de poissons Pierre a-t-il attrapés après la résurrection?', options: ['100', '120', '153', '200'], explanation: 'Après la résurrection de Jésus, Pierre et les disciples ont attrapé exactement 153 gros poissons dans une pêche miraculeuse dirigée par Jésus.' }
  },
  g24: {
    en: { question: 'Who was the father of James and John?', options: ['Zebedee', 'Alphaeus', 'Jonah', 'Simon'], explanation: 'Zebedee was a fisherman whose sons James and John left their nets to follow Jesus. They were called "Sons of Thunder."' },
    it: { question: 'Chi era il padre di Giacomo e Giovanni?', options: ['Zebedeo', 'Alfeo', 'Giona', 'Simone'], explanation: 'Zebedeo era un pescatore i cui figli Giacomo e Giovanni lasciarono le reti per seguire Gesù. Furono chiamati "Figli del Tuono."' },
    es: { question: '¿Quién era el padre de Santiago y Juan?', options: ['Zebedeo', 'Alfeo', 'Jonás', 'Simón'], explanation: 'Zebedeo era un pescador cuyos hijos Santiago y Juan dejaron sus redes para seguir a Jesús. Fueron llamados "Hijos del Trueno."' },
    pt: { question: 'Quem era o pai de Tiago e João?', options: ['Zebedeu', 'Alfeu', 'Jonas', 'Simão'], explanation: 'Zebedeu era um pescador cujos filhos Tiago e João deixaram suas redes para seguir Jesus. Foram chamados "Filhos do Trovão."' },
    fr: { question: 'Qui était le père de Jacques et Jean?', options: ['Zébédée', 'Alphée', 'Jonas', 'Simon'], explanation: 'Zébédée était un pêcheur dont les fils Jacques et Jean ont quitté leurs filets pour suivre Jésus. Ils furent appelés "Fils du Tonnerre."' }
  },
  g25: {
    en: { question: 'What did Jesus write in the sand?', options: ['Names of accusers', 'The law', 'Unknown', 'Forgiveness'], explanation: 'The Bible does not reveal what Jesus wrote when the adulterous woman was brought to Him, leaving it a mystery.' },
    it: { question: 'Cosa scrisse Gesù nella sabbia?', options: ['Nomi degli accusatori', 'La legge', 'Sconosciuto', 'Perdono'], explanation: 'La Bibbia non rivela cosa scrisse Gesù quando gli fu portata la donna adultera, lasciandolo un mistero.' },
    es: { question: '¿Qué escribió Jesús en la arena?', options: ['Nombres de acusadores', 'La ley', 'Desconocido', 'Perdón'], explanation: 'La Biblia no revela qué escribió Jesús cuando le trajeron a la mujer adúltera, dejándolo como un misterio.' },
    pt: { question: 'O que Jesus escreveu na areia?', options: ['Nomes dos acusadores', 'A lei', 'Desconhecido', 'Perdão'], explanation: 'A Bíblia não revela o que Jesus escreveu quando a mulher adúltera foi trazida a Ele, deixando isso como um mistério.' },
    fr: { question: 'Qu\'a écrit Jésus dans le sable?', options: ['Noms des accusateurs', 'La loi', 'Inconnu', 'Pardon'], explanation: 'La Bible ne révèle pas ce que Jésus a écrit quand la femme adultère lui fut amenée, laissant cela comme un mystère.' }
  },

  // Minor Prophets (remaining)
  m6: {
    en: { question: 'Which prophet spoke of locusts as a sign of judgment?', options: ['Joel', 'Amos', 'Micah', 'Nahum'], explanation: 'Joel described a devastating locust plague as a warning of God\'s judgment and a call to repentance.' },
    it: { question: 'Quale profeta parlò delle locuste come segno di giudizio?', options: ['Gioele', 'Amos', 'Michea', 'Naum'], explanation: 'Gioele descrisse una devastante piaga di locuste come avvertimento del giudizio di Dio e chiamata al pentimento.' },
    es: { question: '¿Qué profeta habló de las langostas como señal de juicio?', options: ['Joel', 'Amós', 'Miqueas', 'Nahúm'], explanation: 'Joel describió una devastadora plaga de langostas como advertencia del juicio de Dios y llamado al arrepentimiento.' },
    pt: { question: 'Qual profeta falou dos gafanhotos como sinal de julgamento?', options: ['Joel', 'Amós', 'Miquéias', 'Naum'], explanation: 'Joel descreveu uma devastadora praga de gafanhotos como aviso do julgamento de Deus e chamado ao arrependimento.' },
    fr: { question: 'Quel prophète a parlé des sauterelles comme signe de jugement?', options: ['Joël', 'Amos', 'Michée', 'Nahum'], explanation: 'Joël a décrit une dévastatrice invasion de sauterelles comme avertissement du jugement de Dieu et appel à la repentance.' }
  },
  m7: {
    en: { question: 'Who prophesied the birth of the Messiah in Bethlehem?', options: ['Zechariah', 'Micah', 'Malachi', 'Haggai'], explanation: 'Micah prophesied 700 years before Jesus that the Messiah would be born in Bethlehem Ephrathah.' },
    it: { question: 'Chi profetizzò la nascita del Messia a Betlemme?', options: ['Zaccaria', 'Michea', 'Malachia', 'Aggeo'], explanation: 'Michea profetizzò 700 anni prima di Gesù che il Messia sarebbe nato a Betlemme Efrata.' },
    es: { question: '¿Quién profetizó el nacimiento del Mesías en Belén?', options: ['Zacarías', 'Miqueas', 'Malaquías', 'Hageo'], explanation: 'Miqueas profetizó 700 años antes de Jesús que el Mesías nacería en Belén Efrata.' },
    pt: { question: 'Quem profetizou o nascimento do Messias em Belém?', options: ['Zacarias', 'Miquéias', 'Malaquias', 'Ageu'], explanation: 'Miquéias profetizou 700 anos antes de Jesus que o Messias nasceria em Belém Efrata.' },
    fr: { question: 'Qui a prophétisé la naissance du Messie à Bethléem?', options: ['Zacharie', 'Michée', 'Malachie', 'Aggée'], explanation: 'Michée a prophétisé 700 ans avant Jésus que le Messie naîtrait à Bethléem Éphrata.' }
  },
  m8: {
    en: { question: 'Which book is the shortest in the Old Testament?', options: ['Jonah', 'Obadiah', 'Nahum', 'Habakkuk'], explanation: 'Obadiah with only 21 verses is the shortest book in the Old Testament, prophesying against Edom.' },
    it: { question: 'Qual è il libro più corto dell\'Antico Testamento?', options: ['Giona', 'Abdia', 'Naum', 'Abacuc'], explanation: 'Abdia con solo 21 versetti è il libro più corto dell\'Antico Testamento, che profetizza contro Edom.' },
    es: { question: '¿Cuál es el libro más corto del Antiguo Testamento?', options: ['Jonás', 'Abdías', 'Nahúm', 'Habacuc'], explanation: 'Abdías con solo 21 versículos es el libro más corto del Antiguo Testamento, profetizando contra Edom.' },
    pt: { question: 'Qual é o livro mais curto do Antigo Testamento?', options: ['Jonas', 'Obadias', 'Naum', 'Habacuque'], explanation: 'Obadias com apenas 21 versículos é o livro mais curto do Antigo Testamento, profetizando contra Edom.' },
    fr: { question: 'Quel est le livre le plus court de l\'Ancien Testament?', options: ['Jonas', 'Abdias', 'Nahum', 'Habacuc'], explanation: 'Abdias avec seulement 21 versets est le livre le plus court de l\'Ancien Testament, prophétisant contre Édom.' }
  },
  m9: {
    en: { question: 'Who encouraged the rebuilding of the temple?', options: ['Haggai', 'Malachi', 'Amos', 'Hosea'], explanation: 'Haggai urged the Jews who returned from exile to prioritize rebuilding God\'s temple over their own houses.' },
    it: { question: 'Chi incoraggiò la ricostruzione del tempio?', options: ['Aggeo', 'Malachia', 'Amos', 'Osea'], explanation: 'Aggeo esortò gli Ebrei tornati dall\'esilio a dare priorità alla ricostruzione del tempio di Dio rispetto alle proprie case.' },
    es: { question: '¿Quién animó la reconstrucción del templo?', options: ['Hageo', 'Malaquías', 'Amós', 'Oseas'], explanation: 'Hageo instó a los judíos que regresaron del exilio a priorizar la reconstrucción del templo de Dios sobre sus propias casas.' },
    pt: { question: 'Quem encorajou a reconstrução do templo?', options: ['Ageu', 'Malaquias', 'Amós', 'Oséias'], explanation: 'Ageu exortou os judeus que retornaram do exílio a priorizar a reconstrução do templo de Deus sobre suas próprias casas.' },
    fr: { question: 'Qui a encouragé la reconstruction du temple?', options: ['Aggée', 'Malachie', 'Amos', 'Osée'], explanation: 'Aggée a exhorté les Juifs revenus d\'exil à donner la priorité à la reconstruction du temple de Dieu plutôt qu\'à leurs propres maisons.' }
  },
  m10: {
    en: { question: 'Which prophet is known for visions of horsemen?', options: ['Zechariah', 'Joel', 'Amos', 'Micah'], explanation: 'Zechariah received eight night visions including horsemen patrolling the earth, symbolizing God\'s watchfulness.' },
    it: { question: 'Quale profeta è noto per le visioni di cavalieri?', options: ['Zaccaria', 'Gioele', 'Amos', 'Michea'], explanation: 'Zaccaria ricevette otto visioni notturne inclusi cavalieri che pattugliavano la terra, simboleggiando la vigilanza di Dio.' },
    es: { question: '¿Qué profeta es conocido por visiones de jinetes?', options: ['Zacarías', 'Joel', 'Amós', 'Miqueas'], explanation: 'Zacarías recibió ocho visiones nocturnas incluyendo jinetes patrullando la tierra, simbolizando la vigilancia de Dios.' },
    pt: { question: 'Qual profeta é conhecido por visões de cavaleiros?', options: ['Zacarias', 'Joel', 'Amós', 'Miquéias'], explanation: 'Zacarias recebeu oito visões noturnas incluindo cavaleiros patrulhando a terra, simbolizando a vigilância de Deus.' },
    fr: { question: 'Quel prophète est connu pour ses visions de cavaliers?', options: ['Zacharie', 'Joël', 'Amos', 'Michée'], explanation: 'Zacharie a reçu huit visions nocturnes incluant des cavaliers patrouillant la terre, symbolisant la vigilance de Dieu.' }
  },
  m11: {
    en: { question: 'The last book of the Old Testament is written by which prophet?', options: ['Zechariah', 'Haggai', 'Malachi', 'Joel'], explanation: 'Malachi wrote the final book of the Old Testament, ending with the promise of Elijah\'s return before the Day of the Lord.' },
    it: { question: 'L\'ultimo libro dell\'Antico Testamento è scritto da quale profeta?', options: ['Zaccaria', 'Aggeo', 'Malachia', 'Gioele'], explanation: 'Malachia scrisse l\'ultimo libro dell\'Antico Testamento, terminando con la promessa del ritorno di Elia prima del Giorno del Signore.' },
    es: { question: '¿El último libro del Antiguo Testamento fue escrito por qué profeta?', options: ['Zacarías', 'Hageo', 'Malaquías', 'Joel'], explanation: 'Malaquías escribió el último libro del Antiguo Testamento, terminando con la promesa del regreso de Elías antes del Día del Señor.' },
    pt: { question: 'O último livro do Antigo Testamento foi escrito por qual profeta?', options: ['Zacarias', 'Ageu', 'Malaquias', 'Joel'], explanation: 'Malaquias escreveu o último livro do Antigo Testamento, terminando com a promessa do retorno de Elias antes do Dia do Senhor.' },
    fr: { question: 'Le dernier livre de l\'Ancien Testament est écrit par quel prophète?', options: ['Zacharie', 'Aggée', 'Malachie', 'Joël'], explanation: 'Malachie a écrit le dernier livre de l\'Ancien Testament, se terminant par la promesse du retour d\'Élie avant le Jour du Seigneur.' }
  },
  m12: {
    en: { question: 'Which prophet spoke against Edom?', options: ['Obadiah', 'Nahum', 'Habakkuk', 'Zephaniah'], explanation: 'Obadiah\'s entire prophecy is directed against Edom for their pride and hostility toward Israel, their brother nation.' },
    it: { question: 'Quale profeta parlò contro Edom?', options: ['Abdia', 'Naum', 'Abacuc', 'Sofonia'], explanation: 'L\'intera profezia di Abdia è diretta contro Edom per il loro orgoglio e ostilità verso Israele, loro nazione fratella.' },
    es: { question: '¿Qué profeta habló contra Edom?', options: ['Abdías', 'Nahúm', 'Habacuc', 'Sofonías'], explanation: 'Toda la profecía de Abdías está dirigida contra Edom por su orgullo y hostilidad hacia Israel, su nación hermana.' },
    pt: { question: 'Qual profeta falou contra Edom?', options: ['Obadias', 'Naum', 'Habacuque', 'Sofonias'], explanation: 'Toda a profecia de Obadias é dirigida contra Edom por seu orgulho e hostilidade para com Israel, sua nação irmã.' },
    fr: { question: 'Quel prophète a parlé contre Édom?', options: ['Abdias', 'Nahum', 'Habacuc', 'Sophonie'], explanation: 'Toute la prophétie d\'Abdias est dirigée contre Édom pour leur orgueil et leur hostilité envers Israël, leur nation sœur.' }
  },
  m13: {
    en: { question: 'Who said "The just shall live by faith"?', options: ['Micah', 'Habakkuk', 'Amos', 'Hosea'], explanation: 'Habakkuk received this foundational truth that later inspired Paul\'s teaching on justification by faith in Romans.' },
    it: { question: 'Chi disse "Il giusto vivrà per la sua fede"?', options: ['Michea', 'Abacuc', 'Amos', 'Osea'], explanation: 'Abacuc ricevette questa verità fondamentale che in seguito ispirò l\'insegnamento di Paolo sulla giustificazione per fede in Romani.' },
    es: { question: '¿Quién dijo "El justo por la fe vivirá"?', options: ['Miqueas', 'Habacuc', 'Amós', 'Oseas'], explanation: 'Habacuc recibió esta verdad fundamental que luego inspiró la enseñanza de Pablo sobre la justificación por fe en Romanos.' },
    pt: { question: 'Quem disse "O justo viverá pela fé"?', options: ['Miquéias', 'Habacuque', 'Amós', 'Oséias'], explanation: 'Habacuque recebeu esta verdade fundamental que mais tarde inspirou o ensino de Paulo sobre justificação pela fé em Romanos.' },
    fr: { question: 'Qui a dit "Le juste vivra par sa foi"?', options: ['Michée', 'Habacuc', 'Amos', 'Osée'], explanation: 'Habacuc a reçu cette vérité fondamentale qui a ensuite inspiré l\'enseignement de Paul sur la justification par la foi dans Romains.' }
  },
  m14: {
    en: { question: 'Which prophet foretold judgment on Assyria?', options: ['Nahum', 'Amos', 'Joel', 'Micah'], explanation: 'Nahum prophesied the complete destruction of Nineveh, the capital of the cruel Assyrian empire.' },
    it: { question: 'Quale profeta predisse il giudizio sull\'Assiria?', options: ['Naum', 'Amos', 'Gioele', 'Michea'], explanation: 'Naum profetizzò la completa distruzione di Ninive, la capitale del crudele impero assiro.' },
    es: { question: '¿Qué profeta predijo el juicio sobre Asiria?', options: ['Nahúm', 'Amós', 'Joel', 'Miqueas'], explanation: 'Nahúm profetizó la completa destrucción de Nínive, la capital del cruel imperio asirio.' },
    pt: { question: 'Qual profeta predisse o julgamento sobre a Assíria?', options: ['Naum', 'Amós', 'Joel', 'Miquéias'], explanation: 'Naum profetizou a completa destruição de Nínive, a capital do cruel império assírio.' },
    fr: { question: 'Quel prophète a prédit le jugement sur l\'Assyrie?', options: ['Nahum', 'Amos', 'Joël', 'Michée'], explanation: 'Nahum a prophétisé la destruction complète de Ninive, la capitale du cruel empire assyrien.' }
  },
  m15: {
    en: { question: 'How many days was Jonah in the fish?', options: ['1', '2', '3', '7'], explanation: 'Jonah was in the belly of the great fish for three days and three nights, a sign Jesus used to predict His resurrection.' },
    it: { question: 'Per quanti giorni Giona fu nel pesce?', options: ['1', '2', '3', '7'], explanation: 'Giona fu nel ventre del grande pesce per tre giorni e tre notti, un segno che Gesù usò per predire la sua risurrezione.' },
    es: { question: '¿Cuántos días estuvo Jonás en el pez?', options: ['1', '2', '3', '7'], explanation: 'Jonás estuvo en el vientre del gran pez por tres días y tres noches, una señal que Jesús usó para predecir su resurrección.' },
    pt: { question: 'Quantos dias Jonas ficou no peixe?', options: ['1', '2', '3', '7'], explanation: 'Jonas ficou no ventre do grande peixe por três dias e três noites, um sinal que Jesus usou para predizer sua ressurreição.' },
    fr: { question: 'Combien de jours Jonas est-il resté dans le poisson?', options: ['1', '2', '3', '7'], explanation: 'Jonas est resté dans le ventre du grand poisson pendant trois jours et trois nuits, un signe que Jésus a utilisé pour prédire sa résurrection.' }
  },
  m16: {
    en: { question: 'Which prophet spoke of the Day of the Lord?', options: ['Zephaniah', 'Haggai', 'Zechariah', 'All of these'], explanation: 'Multiple prophets spoke of the Day of the Lord, including Joel, Zephaniah, and others, describing God\'s future judgment.' },
    it: { question: 'Quale profeta parlò del Giorno del Signore?', options: ['Sofonia', 'Aggeo', 'Zaccaria', 'Tutti questi'], explanation: 'Più profeti parlarono del Giorno del Signore, inclusi Gioele, Sofonia e altri, descrivendo il futuro giudizio di Dio.' },
    es: { question: '¿Qué profeta habló del Día del Señor?', options: ['Sofonías', 'Hageo', 'Zacarías', 'Todos estos'], explanation: 'Múltiples profetas hablaron del Día del Señor, incluyendo Joel, Sofonías y otros, describiendo el futuro juicio de Dios.' },
    pt: { question: 'Qual profeta falou do Dia do Senhor?', options: ['Sofonias', 'Ageu', 'Zacarias', 'Todos estes'], explanation: 'Múltiplos profetas falaram do Dia do Senhor, incluindo Joel, Sofonias e outros, descrevendo o futuro julgamento de Deus.' },
    fr: { question: 'Quel prophète a parlé du Jour du Seigneur?', options: ['Sophonie', 'Aggée', 'Zacharie', 'Tous ceux-ci'], explanation: 'Plusieurs prophètes ont parlé du Jour du Seigneur, dont Joël, Sophonie et d\'autres, décrivant le jugement futur de Dieu.' }
  },
  m17: {
    en: { question: 'Who was a shepherd before becoming a prophet?', options: ['Amos', 'Hosea', 'Micah', 'Joel'], explanation: 'Amos was a shepherd and fig tree farmer from Tekoa whom God called to prophesy against Israel\'s injustice.' },
    it: { question: 'Chi era un pastore prima di diventare profeta?', options: ['Amos', 'Osea', 'Michea', 'Gioele'], explanation: 'Amos era un pastore e coltivatore di sicomori di Tekoa che Dio chiamò a profetizzare contro l\'ingiustizia di Israele.' },
    es: { question: '¿Quién era pastor antes de convertirse en profeta?', options: ['Amós', 'Oseas', 'Miqueas', 'Joel'], explanation: 'Amós era un pastor y cultivador de higos de Tecoa a quien Dios llamó a profetizar contra la injusticia de Israel.' },
    pt: { question: 'Quem era pastor antes de se tornar profeta?', options: ['Amós', 'Oséias', 'Miquéias', 'Joel'], explanation: 'Amós era um pastor e cultivador de sicômoros de Tecoa que Deus chamou para profetizar contra a injustiça de Israel.' },
    fr: { question: 'Qui était berger avant de devenir prophète?', options: ['Amos', 'Osée', 'Michée', 'Joël'], explanation: 'Amos était un berger et cultivateur de sycomores de Tekoa que Dieu a appelé à prophétiser contre l\'injustice d\'Israël.' }
  },
  m18: {
    en: { question: 'Which prophet promised God would send Elijah?', options: ['Malachi', 'Zechariah', 'Joel', 'Haggai'], explanation: 'Malachi prophesied that Elijah would come before the great Day of the Lord, fulfilled in John the Baptist.' },
    it: { question: 'Quale profeta promise che Dio avrebbe mandato Elia?', options: ['Malachia', 'Zaccaria', 'Gioele', 'Aggeo'], explanation: 'Malachia profetizzò che Elia sarebbe venuto prima del grande Giorno del Signore, adempiuto in Giovanni Battista.' },
    es: { question: '¿Qué profeta prometió que Dios enviaría a Elías?', options: ['Malaquías', 'Zacarías', 'Joel', 'Hageo'], explanation: 'Malaquías profetizó que Elías vendría antes del gran Día del Señor, cumplido en Juan el Bautista.' },
    pt: { question: 'Qual profeta prometeu que Deus enviaria Elias?', options: ['Malaquias', 'Zacarias', 'Joel', 'Ageu'], explanation: 'Malaquias profetizou que Elias viria antes do grande Dia do Senhor, cumprido em João Batista.' },
    fr: { question: 'Quel prophète a promis que Dieu enverrait Élie?', options: ['Malachie', 'Zacharie', 'Joël', 'Aggée'], explanation: 'Malachie a prophétisé qu\'Élie viendrait avant le grand Jour du Seigneur, accompli en Jean-Baptiste.' }
  },
  m19: {
    en: { question: 'Who had a vision of a plumb line?', options: ['Amos', 'Micah', 'Hosea', 'Joel'], explanation: 'God showed Amos a plumb line to illustrate how He would measure Israel against His standard of righteousness.' },
    it: { question: 'Chi ebbe una visione di un filo a piombo?', options: ['Amos', 'Michea', 'Osea', 'Gioele'], explanation: 'Dio mostrò ad Amos un filo a piombo per illustrare come avrebbe misurato Israele secondo il suo standard di giustizia.' },
    es: { question: '¿Quién tuvo una visión de una plomada?', options: ['Amós', 'Miqueas', 'Oseas', 'Joel'], explanation: 'Dios mostró a Amós una plomada para ilustrar cómo mediría a Israel según su estándar de justicia.' },
    pt: { question: 'Quem teve uma visão de um prumo?', options: ['Amós', 'Miquéias', 'Oséias', 'Joel'], explanation: 'Deus mostrou a Amós um prumo para ilustrar como Ele mediria Israel segundo seu padrão de justiça.' },
    fr: { question: 'Qui a eu une vision d\'un fil à plomb?', options: ['Amos', 'Michée', 'Osée', 'Joël'], explanation: 'Dieu a montré à Amos un fil à plomb pour illustrer comment Il mesurerait Israël selon Son standard de justice.' }
  },
  m20: {
    en: { question: 'What plant grew to shade Jonah?', options: ['Fig tree', 'Vine', 'Gourd', 'Palm tree'], explanation: 'God caused a gourd plant to grow rapidly to shade Jonah, then destroyed it to teach him about compassion.' },
    it: { question: 'Quale pianta crebbe per fare ombra a Giona?', options: ['Fico', 'Vite', 'Zucca', 'Palma'], explanation: 'Dio fece crescere rapidamente una pianta di zucca per fare ombra a Giona, poi la distrusse per insegnargli la compassione.' },
    es: { question: '¿Qué planta creció para dar sombra a Jonás?', options: ['Higuera', 'Vid', 'Calabaza', 'Palmera'], explanation: 'Dios hizo crecer rápidamente una planta de calabaza para dar sombra a Jonás, luego la destruyó para enseñarle sobre la compasión.' },
    pt: { question: 'Qual planta cresceu para dar sombra a Jonas?', options: ['Figueira', 'Videira', 'Aboboreira', 'Palmeira'], explanation: 'Deus fez uma aboboreira crescer rapidamente para dar sombra a Jonas, depois a destruiu para ensiná-lo sobre compaixão.' },
    fr: { question: 'Quelle plante a poussé pour ombrager Jonas?', options: ['Figuier', 'Vigne', 'Ricin', 'Palmier'], explanation: 'Dieu fit pousser rapidement une plante de ricin pour ombrager Jonas, puis la détruisit pour lui enseigner la compassion.' }
  },
  m21: {
    en: { question: 'What was the name of Hosea\'s wife?', options: ['Gomer', 'Rahab', 'Tamar', 'Bathsheba'], explanation: 'God commanded Hosea to marry Gomer, an unfaithful woman, as a living illustration of Israel\'s unfaithfulness to God.' },
    it: { question: 'Qual era il nome della moglie di Osea?', options: ['Gomer', 'Raab', 'Tamar', 'Betsabea'], explanation: 'Dio comandò a Osea di sposare Gomer, una donna infedele, come illustrazione vivente dell\'infedeltà di Israele verso Dio.' },
    es: { question: '¿Cuál era el nombre de la esposa de Oseas?', options: ['Gomer', 'Rahab', 'Tamar', 'Betsabé'], explanation: 'Dios ordenó a Oseas casarse con Gomer, una mujer infiel, como ilustración viva de la infidelidad de Israel hacia Dios.' },
    pt: { question: 'Qual era o nome da esposa de Oséias?', options: ['Gômer', 'Raabe', 'Tamar', 'Bate-Seba'], explanation: 'Deus ordenou a Oséias se casar com Gômer, uma mulher infiel, como ilustração viva da infidelidade de Israel para com Deus.' },
    fr: { question: 'Quel était le nom de la femme d\'Osée?', options: ['Gomer', 'Rahab', 'Tamar', 'Bethsabée'], explanation: 'Dieu ordonna à Osée d\'épouser Gomer, une femme infidèle, comme illustration vivante de l\'infidélité d\'Israël envers Dieu.' }
  },
  m22: {
    en: { question: 'Which prophet said "I will pour out my Spirit on all people"?', options: ['Joel', 'Amos', 'Micah', 'Zechariah'], explanation: 'Joel prophesied the outpouring of the Holy Spirit, which was fulfilled on the Day of Pentecost.' },
    it: { question: 'Quale profeta disse "Effonderò il mio Spirito su ogni carne"?', options: ['Gioele', 'Amos', 'Michea', 'Zaccaria'], explanation: 'Gioele profetizzò l\'effusione dello Spirito Santo, che si adempì nel giorno di Pentecoste.' },
    es: { question: '¿Qué profeta dijo "Derramaré mi Espíritu sobre toda carne"?', options: ['Joel', 'Amós', 'Miqueas', 'Zacarías'], explanation: 'Joel profetizó el derramamiento del Espíritu Santo, que se cumplió en el día de Pentecostés.' },
    pt: { question: 'Qual profeta disse "Derramarei o meu Espírito sobre toda a carne"?', options: ['Joel', 'Amós', 'Miquéias', 'Zacarias'], explanation: 'Joel profetizou o derramamento do Espírito Santo, que se cumpriu no dia de Pentecostes.' },
    fr: { question: 'Quel prophète a dit "Je répandrai mon Esprit sur toute chair"?', options: ['Joël', 'Amos', 'Michée', 'Zacharie'], explanation: 'Joël a prophétisé l\'effusion du Saint-Esprit, qui s\'est accomplie le jour de la Pentecôte.' }
  },
  m23: {
    en: { question: 'Who prophesied that God hates robbery and wrongdoing?', options: ['Malachi', 'Amos', 'Micah', 'Habakkuk'], explanation: 'Micah proclaimed what God requires: to act justly, love mercy, and walk humbly with God.' },
    it: { question: 'Chi profetizzò che Dio odia la rapina e l\'ingiustizia?', options: ['Malachia', 'Amos', 'Michea', 'Abacuc'], explanation: 'Michea proclamò ciò che Dio richiede: agire con giustizia, amare la misericordia e camminare umilmente con Dio.' },
    es: { question: '¿Quién profetizó que Dios odia el robo y la maldad?', options: ['Malaquías', 'Amós', 'Miqueas', 'Habacuc'], explanation: 'Miqueas proclamó lo que Dios requiere: actuar con justicia, amar la misericordia y caminar humildemente con Dios.' },
    pt: { question: 'Quem profetizou que Deus odeia o roubo e a maldade?', options: ['Malaquias', 'Amós', 'Miquéias', 'Habacuque'], explanation: 'Miquéias proclamou o que Deus requer: agir com justiça, amar a misericórdia e andar humildemente com Deus.' },
    fr: { question: 'Qui a prophétisé que Dieu hait le vol et l\'injustice?', options: ['Malachie', 'Amos', 'Michée', 'Habacuc'], explanation: 'Michée a proclamé ce que Dieu exige: pratiquer la justice, aimer la miséricorde et marcher humblement avec Dieu.' }
  },
  m24: {
    en: { question: 'Which prophet wrote about the fall of Nineveh?', options: ['Jonah', 'Nahum', 'Obadiah', 'Zephaniah'], explanation: 'Nahum prophesied the complete destruction of Nineveh, which fell in 612 BC to the Babylonians and Medes.' },
    it: { question: 'Quale profeta scrisse della caduta di Ninive?', options: ['Giona', 'Naum', 'Abdia', 'Sofonia'], explanation: 'Naum profetizzò la completa distruzione di Ninive, che cadde nel 612 a.C. per mano dei Babilonesi e dei Medi.' },
    es: { question: '¿Qué profeta escribió sobre la caída de Nínive?', options: ['Jonás', 'Nahúm', 'Abdías', 'Sofonías'], explanation: 'Nahúm profetizó la destrucción completa de Nínive, que cayó en el 612 a.C. ante los babilonios y medos.' },
    pt: { question: 'Qual profeta escreveu sobre a queda de Nínive?', options: ['Jonas', 'Naum', 'Obadias', 'Sofonias'], explanation: 'Naum profetizou a completa destruição de Nínive, que caiu em 612 a.C. para os babilônios e medos.' },
    fr: { question: 'Quel prophète a écrit sur la chute de Ninive?', options: ['Jonas', 'Nahum', 'Abdias', 'Sophonie'], explanation: 'Nahum a prophétisé la destruction complète de Ninive, qui est tombée en 612 av. J.-C. aux mains des Babyloniens et des Mèdes.' }
  },
  m25: {
    en: { question: 'Who prophesied during the reign of King Josiah?', options: ['Zephaniah', 'Haggai', 'Malachi', 'Zechariah'], explanation: 'Zephaniah prophesied during King Josiah\'s reign, calling Judah to repentance before the coming judgment.' },
    it: { question: 'Chi profetizzò durante il regno del re Giosia?', options: ['Sofonia', 'Aggeo', 'Malachia', 'Zaccaria'], explanation: 'Sofonia profetizzò durante il regno del re Giosia, chiamando Giuda al pentimento prima del giudizio imminente.' },
    es: { question: '¿Quién profetizó durante el reinado del rey Josías?', options: ['Sofonías', 'Hageo', 'Malaquías', 'Zacarías'], explanation: 'Sofonías profetizó durante el reinado del rey Josías, llamando a Judá al arrepentimiento antes del juicio venidero.' },
    pt: { question: 'Quem profetizou durante o reinado do rei Josias?', options: ['Sofonias', 'Ageu', 'Malaquias', 'Zacarias'], explanation: 'Sofonias profetizou durante o reinado do rei Josias, chamando Judá ao arrependimento antes do julgamento vindouro.' },
    fr: { question: 'Qui a prophétisé pendant le règne du roi Josias?', options: ['Sophonie', 'Aggée', 'Malachie', 'Zacharie'], explanation: 'Sophonie a prophétisé pendant le règne du roi Josias, appelant Juda à la repentance avant le jugement à venir.' }
  },

  // Old Testament
  o1: {
    en: { question: 'Who killed Goliath?', options: ['Saul', 'David', 'Jonathan', 'Samuel'], explanation: 'Young David killed the giant Goliath with a sling and stone, trusting in God rather than armor.' },
    it: { question: 'Chi uccise Golia?', options: ['Saul', 'Davide', 'Gionatan', 'Samuele'], explanation: 'Il giovane Davide uccise il gigante Golia con una fionda e una pietra, confidando in Dio piuttosto che nell\'armatura.' },
    es: { question: '¿Quién mató a Goliat?', options: ['Saúl', 'David', 'Jonatán', 'Samuel'], explanation: 'El joven David mató al gigante Goliat con una honda y una piedra, confiando en Dios en lugar de la armadura.' },
    pt: { question: 'Quem matou Golias?', options: ['Saul', 'Davi', 'Jônatas', 'Samuel'], explanation: 'O jovem Davi matou o gigante Golias com uma funda e uma pedra, confiando em Deus em vez de armadura.' },
    fr: { question: 'Qui a tué Goliath?', options: ['Saül', 'David', 'Jonathan', 'Samuel'], explanation: 'Le jeune David a tué le géant Goliath avec une fronde et une pierre, faisant confiance à Dieu plutôt qu\'à une armure.' }
  },
  o2: {
    en: { question: 'Who was known as the wisest king?', options: ['David', 'Solomon', 'Saul', 'Hezekiah'], explanation: 'God gave Solomon wisdom that surpassed all others because he asked for wisdom to govern rather than riches.' },
    it: { question: 'Chi era noto come il re più saggio?', options: ['Davide', 'Salomone', 'Saul', 'Ezechia'], explanation: 'Dio diede a Salomone una saggezza che superava tutti gli altri perché chiese saggezza per governare piuttosto che ricchezze.' },
    es: { question: '¿Quién era conocido como el rey más sabio?', options: ['David', 'Salomón', 'Saúl', 'Ezequías'], explanation: 'Dios dio a Salomón sabiduría que superaba a todos los demás porque pidió sabiduría para gobernar en lugar de riquezas.' },
    pt: { question: 'Quem era conhecido como o rei mais sábio?', options: ['Davi', 'Salomão', 'Saul', 'Ezequias'], explanation: 'Deus deu a Salomão sabedoria que superou todos os outros porque ele pediu sabedoria para governar em vez de riquezas.' },
    fr: { question: 'Qui était connu comme le roi le plus sage?', options: ['David', 'Salomon', 'Saül', 'Ézéchias'], explanation: 'Dieu donna à Salomon une sagesse qui surpassait tous les autres parce qu\'il demanda la sagesse pour gouverner plutôt que des richesses.' }
  },
  o3: {
    en: { question: 'Who was thrown into the lion\'s den?', options: ['Elijah', 'Elisha', 'Daniel', 'Ezekiel'], explanation: 'Daniel was thrown into the lions\' den for praying to God, but God shut the lions\' mouths and protected him.' },
    it: { question: 'Chi fu gettato nella fossa dei leoni?', options: ['Elia', 'Eliseo', 'Daniele', 'Ezechiele'], explanation: 'Daniele fu gettato nella fossa dei leoni per aver pregato Dio, ma Dio chiuse la bocca dei leoni e lo protesse.' },
    es: { question: '¿Quién fue arrojado al foso de los leones?', options: ['Elías', 'Eliseo', 'Daniel', 'Ezequiel'], explanation: 'Daniel fue arrojado al foso de los leones por orar a Dios, pero Dios cerró la boca de los leones y lo protegió.' },
    pt: { question: 'Quem foi lançado na cova dos leões?', options: ['Elias', 'Eliseu', 'Daniel', 'Ezequiel'], explanation: 'Daniel foi lançado na cova dos leões por orar a Deus, mas Deus fechou a boca dos leões e o protegeu.' },
    fr: { question: 'Qui a été jeté dans la fosse aux lions?', options: ['Élie', 'Élisée', 'Daniel', 'Ézéchiel'], explanation: 'Daniel a été jeté dans la fosse aux lions pour avoir prié Dieu, mais Dieu a fermé la gueule des lions et l\'a protégé.' }
  },
  o4: {
    en: { question: 'What did Samson use to kill 1000 Philistines?', options: ['Sword', 'Donkey\'s jawbone', 'Spear', 'His bare hands'], explanation: 'The Spirit of the Lord empowered Samson to kill 1000 Philistines with the jawbone of a donkey.' },
    it: { question: 'Cosa usò Sansone per uccidere 1000 Filistei?', options: ['Spada', 'Mascella d\'asino', 'Lancia', 'Le sue mani nude'], explanation: 'Lo Spirito del Signore diede a Sansone la forza di uccidere 1000 Filistei con la mascella di un asino.' },
    es: { question: '¿Qué usó Sansón para matar a 1000 filisteos?', options: ['Espada', 'Quijada de burro', 'Lanza', 'Sus propias manos'], explanation: 'El Espíritu del Señor capacitó a Sansón para matar a 1000 filisteos con la quijada de un burro.' },
    pt: { question: 'O que Sansão usou para matar 1000 filisteus?', options: ['Espada', 'Queixada de jumento', 'Lança', 'Suas próprias mãos'], explanation: 'O Espírito do Senhor capacitou Sansão a matar 1000 filisteus com a queixada de um jumento.' },
    fr: { question: 'Qu\'a utilisé Samson pour tuer 1000 Philistins?', options: ['Épée', 'Mâchoire d\'âne', 'Lance', 'Ses mains nues'], explanation: 'L\'Esprit du Seigneur a donné à Samson le pouvoir de tuer 1000 Philistins avec une mâchoire d\'âne.' }
  },
  o5: {
    en: { question: 'Who was the first king of Israel?', options: ['David', 'Solomon', 'Saul', 'Samuel'], explanation: 'Saul was anointed by Samuel as the first king of Israel when the people demanded a king like other nations.' },
    it: { question: 'Chi fu il primo re d\'Israele?', options: ['Davide', 'Salomone', 'Saul', 'Samuele'], explanation: 'Saul fu unto da Samuele come primo re d\'Israele quando il popolo chiese un re come le altre nazioni.' },
    es: { question: '¿Quién fue el primer rey de Israel?', options: ['David', 'Salomón', 'Saúl', 'Samuel'], explanation: 'Saúl fue ungido por Samuel como el primer rey de Israel cuando el pueblo pidió un rey como otras naciones.' },
    pt: { question: 'Quem foi o primeiro rei de Israel?', options: ['Davi', 'Salomão', 'Saul', 'Samuel'], explanation: 'Saul foi ungido por Samuel como o primeiro rei de Israel quando o povo exigiu um rei como outras nações.' },
    fr: { question: 'Qui fut le premier roi d\'Israël?', options: ['David', 'Salomon', 'Saül', 'Samuel'], explanation: 'Saül fut oint par Samuel comme premier roi d\'Israël quand le peuple demanda un roi comme les autres nations.' }
  },
  o6: {
    en: { question: 'Who was Job\'s comforter who gave the best advice?', options: ['Eliphaz', 'Bildad', 'Zophar', 'Elihu'], explanation: 'Elihu, the youngest, spoke last and came closest to the truth by emphasizing God\'s sovereignty and justice.' },
    it: { question: 'Chi tra i consolatori di Giobbe diede il miglior consiglio?', options: ['Elifaz', 'Bildad', 'Zofar', 'Eliu'], explanation: 'Eliu, il più giovane, parlò per ultimo e si avvicinò di più alla verità enfatizzando la sovranità e la giustizia di Dio.' },
    es: { question: '¿Cuál de los consoladores de Job dio el mejor consejo?', options: ['Elifaz', 'Bildad', 'Zofar', 'Eliú'], explanation: 'Eliú, el más joven, habló último y se acercó más a la verdad al enfatizar la soberanía y justicia de Dios.' },
    pt: { question: 'Qual dos consoladores de Jó deu o melhor conselho?', options: ['Elifaz', 'Bildade', 'Zofar', 'Eliú'], explanation: 'Eliú, o mais jovem, falou por último e chegou mais perto da verdade ao enfatizar a soberania e justiça de Deus.' },
    fr: { question: 'Lequel des consolateurs de Job a donné le meilleur conseil?', options: ['Éliphaz', 'Bildad', 'Tsophar', 'Élihu'], explanation: 'Élihu, le plus jeune, parla en dernier et se rapprocha le plus de la vérité en soulignant la souveraineté et la justice de Dieu.' }
  },
  o7: {
    en: { question: 'How many books are in the Old Testament?', options: ['27', '39', '46', '66'], explanation: 'The Protestant Old Testament contains 39 books, from Genesis to Malachi.' },
    it: { question: 'Quanti libri ci sono nell\'Antico Testamento?', options: ['27', '39', '46', '66'], explanation: 'L\'Antico Testamento protestante contiene 39 libri, da Genesi a Malachia.' },
    es: { question: '¿Cuántos libros hay en el Antiguo Testamento?', options: ['27', '39', '46', '66'], explanation: 'El Antiguo Testamento protestante contiene 39 libros, desde Génesis hasta Malaquías.' },
    pt: { question: 'Quantos livros há no Antigo Testamento?', options: ['27', '39', '46', '66'], explanation: 'O Antigo Testamento protestante contém 39 livros, de Gênesis a Malaquias.' },
    fr: { question: 'Combien de livres y a-t-il dans l\'Ancien Testament?', options: ['27', '39', '46', '66'], explanation: 'L\'Ancien Testament protestant contient 39 livres, de la Genèse à Malachie.' }
  },
  o8: {
    en: { question: 'Who rebuilt the walls of Jerusalem?', options: ['Ezra', 'Nehemiah', 'Zerubbabel', 'Daniel'], explanation: 'Nehemiah led the Jews to rebuild Jerusalem\'s walls in just 52 days despite opposition.' },
    it: { question: 'Chi ricostruì le mura di Gerusalemme?', options: ['Esdra', 'Neemia', 'Zorobabele', 'Daniele'], explanation: 'Neemia guidò gli Ebrei a ricostruire le mura di Gerusalemme in soli 52 giorni nonostante l\'opposizione.' },
    es: { question: '¿Quién reconstruyó los muros de Jerusalén?', options: ['Esdras', 'Nehemías', 'Zorobabel', 'Daniel'], explanation: 'Nehemías lideró a los judíos para reconstruir los muros de Jerusalén en solo 52 días a pesar de la oposición.' },
    pt: { question: 'Quem reconstruiu os muros de Jerusalém?', options: ['Esdras', 'Neemias', 'Zorobabel', 'Daniel'], explanation: 'Neemias liderou os judeus na reconstrução dos muros de Jerusalém em apenas 52 dias apesar da oposição.' },
    fr: { question: 'Qui a reconstruit les murs de Jérusalem?', options: ['Esdras', 'Néhémie', 'Zorobabel', 'Daniel'], explanation: 'Néhémie a conduit les Juifs à reconstruire les murs de Jérusalem en seulement 52 jours malgré l\'opposition.' }
  },
  o9: {
    en: { question: 'What book comes after Psalms?', options: ['Ecclesiastes', 'Song of Solomon', 'Proverbs', 'Isaiah'], explanation: 'Proverbs follows Psalms in the Old Testament order, both attributed primarily to David and Solomon.' },
    it: { question: 'Quale libro viene dopo i Salmi?', options: ['Ecclesiaste', 'Cantico dei Cantici', 'Proverbi', 'Isaia'], explanation: 'Proverbi segue i Salmi nell\'ordine dell\'Antico Testamento, entrambi attribuiti principalmente a Davide e Salomone.' },
    es: { question: '¿Qué libro viene después de Salmos?', options: ['Eclesiastés', 'Cantar de los Cantares', 'Proverbios', 'Isaías'], explanation: 'Proverbios sigue a Salmos en el orden del Antiguo Testamento, ambos atribuidos principalmente a David y Salomón.' },
    pt: { question: 'Qual livro vem depois de Salmos?', options: ['Eclesiastes', 'Cântico dos Cânticos', 'Provérbios', 'Isaías'], explanation: 'Provérbios segue Salmos na ordem do Antigo Testamento, ambos atribuídos principalmente a Davi e Salomão.' },
    fr: { question: 'Quel livre vient après les Psaumes?', options: ['Ecclésiaste', 'Cantique des Cantiques', 'Proverbes', 'Ésaïe'], explanation: 'Les Proverbes suivent les Psaumes dans l\'ordre de l\'Ancien Testament, tous deux attribués principalement à David et Salomon.' }
  },
  o10: {
    en: { question: 'Who wrote most of the Psalms?', options: ['Solomon', 'David', 'Moses', 'Asaph'], explanation: 'David wrote about half of the 150 Psalms, expressing praise, lament, and trust in God.' },
    it: { question: 'Chi scrisse la maggior parte dei Salmi?', options: ['Salomone', 'Davide', 'Mosè', 'Asaf'], explanation: 'Davide scrisse circa la metà dei 150 Salmi, esprimendo lode, lamento e fiducia in Dio.' },
    es: { question: '¿Quién escribió la mayoría de los Salmos?', options: ['Salomón', 'David', 'Moisés', 'Asaf'], explanation: 'David escribió aproximadamente la mitad de los 150 Salmos, expresando alabanza, lamento y confianza en Dios.' },
    pt: { question: 'Quem escreveu a maioria dos Salmos?', options: ['Salomão', 'Davi', 'Moisés', 'Asafe'], explanation: 'Davi escreveu cerca de metade dos 150 Salmos, expressando louvor, lamento e confiança em Deus.' },
    fr: { question: 'Qui a écrit la plupart des Psaumes?', options: ['Salomon', 'David', 'Moïse', 'Asaph'], explanation: 'David a écrit environ la moitié des 150 Psaumes, exprimant louange, lamentation et confiance en Dieu.' }
  },
  o11: {
    en: { question: 'Who was the female judge of Israel?', options: ['Ruth', 'Deborah', 'Esther', 'Hannah'], explanation: 'Deborah was a prophetess and the only female judge of Israel, who led them to victory over the Canaanites.' },
    it: { question: 'Chi era la giudice donna d\'Israele?', options: ['Rut', 'Debora', 'Ester', 'Anna'], explanation: 'Debora era una profetessa e l\'unica giudice donna d\'Israele, che li guidò alla vittoria sui Cananei.' },
    es: { question: '¿Quién era la jueza de Israel?', options: ['Rut', 'Débora', 'Ester', 'Ana'], explanation: 'Débora era una profetisa y la única jueza de Israel, quien los lideró a la victoria sobre los cananeos.' },
    pt: { question: 'Quem era a juíza de Israel?', options: ['Rute', 'Débora', 'Ester', 'Ana'], explanation: 'Débora era uma profetisa e a única juíza de Israel, que os liderou à vitória sobre os cananeus.' },
    fr: { question: 'Qui était la juge d\'Israël?', options: ['Ruth', 'Débora', 'Esther', 'Anne'], explanation: 'Débora était une prophétesse et la seule juge d\'Israël, qui les a conduits à la victoire sur les Cananéens.' }
  },
  o12: {
    en: { question: 'What was the source of Samson\'s strength?', options: ['His muscles', 'His faith', 'His hair', 'God\'s spirit'], explanation: 'Samson\'s uncut hair was the sign of his Nazirite vow to God, through which the Spirit gave him supernatural strength.' },
    it: { question: 'Qual era la fonte della forza di Sansone?', options: ['I suoi muscoli', 'La sua fede', 'I suoi capelli', 'Lo Spirito di Dio'], explanation: 'I capelli non tagliati di Sansone erano il segno del suo voto nazireo a Dio, attraverso il quale lo Spirito gli dava forza soprannaturale.' },
    es: { question: '¿Cuál era la fuente de la fuerza de Sansón?', options: ['Sus músculos', 'Su fe', 'Su cabello', 'El Espíritu de Dios'], explanation: 'El cabello sin cortar de Sansón era la señal de su voto nazareo a Dios, a través del cual el Espíritu le daba fuerza sobrenatural.' },
    pt: { question: 'Qual era a fonte da força de Sansão?', options: ['Seus músculos', 'Sua fé', 'Seu cabelo', 'O Espírito de Deus'], explanation: 'O cabelo não cortado de Sansão era o sinal de seu voto nazireu a Deus, através do qual o Espírito lhe dava força sobrenatural.' },
    fr: { question: 'Quelle était la source de la force de Samson?', options: ['Ses muscles', 'Sa foi', 'Ses cheveux', 'L\'Esprit de Dieu'], explanation: 'Les cheveux non coupés de Samson étaient le signe de son vœu de naziréat à Dieu, par lequel l\'Esprit lui donnait une force surnaturelle.' }
  },
  o13: {
    en: { question: 'Who interpreted Nebuchadnezzar\'s dreams?', options: ['Isaiah', 'Jeremiah', 'Daniel', 'Ezekiel'], explanation: 'God revealed Nebuchadnezzar\'s dreams and their meanings to Daniel, elevating him to a position of power in Babylon.' },
    it: { question: 'Chi interpretò i sogni di Nabucodonosor?', options: ['Isaia', 'Geremia', 'Daniele', 'Ezechiele'], explanation: 'Dio rivelò a Daniele i sogni di Nabucodonosor e i loro significati, elevandolo a una posizione di potere in Babilonia.' },
    es: { question: '¿Quién interpretó los sueños de Nabucodonosor?', options: ['Isaías', 'Jeremías', 'Daniel', 'Ezequiel'], explanation: 'Dios reveló a Daniel los sueños de Nabucodonosor y sus significados, elevándolo a una posición de poder en Babilonia.' },
    pt: { question: 'Quem interpretou os sonhos de Nabucodonosor?', options: ['Isaías', 'Jeremias', 'Daniel', 'Ezequiel'], explanation: 'Deus revelou a Daniel os sonhos de Nabucodonosor e seus significados, elevando-o a uma posição de poder na Babilônia.' },
    fr: { question: 'Qui a interprété les rêves de Nabuchodonosor?', options: ['Ésaïe', 'Jérémie', 'Daniel', 'Ézéchiel'], explanation: 'Dieu a révélé à Daniel les rêves de Nabuchodonosor et leurs significations, l\'élevant à une position de pouvoir à Babylone.' }
  },
  o14: {
    en: { question: 'Who became queen and saved her people?', options: ['Ruth', 'Deborah', 'Esther', 'Bathsheba'], explanation: 'Esther became queen of Persia and risked her life to save the Jewish people from Haman\'s plot to destroy them.' },
    it: { question: 'Chi divenne regina e salvò il suo popolo?', options: ['Rut', 'Debora', 'Ester', 'Betsabea'], explanation: 'Ester divenne regina di Persia e rischiò la vita per salvare il popolo ebraico dal complotto di Aman per distruggerlo.' },
    es: { question: '¿Quién se convirtió en reina y salvó a su pueblo?', options: ['Rut', 'Débora', 'Ester', 'Betsabé'], explanation: 'Ester se convirtió en reina de Persia y arriesgó su vida para salvar al pueblo judío del complot de Amán para destruirlos.' },
    pt: { question: 'Quem se tornou rainha e salvou seu povo?', options: ['Rute', 'Débora', 'Ester', 'Bate-Seba'], explanation: 'Ester se tornou rainha da Pérsia e arriscou sua vida para salvar o povo judeu do plano de Hamã para destruí-los.' },
    fr: { question: 'Qui est devenue reine et a sauvé son peuple?', options: ['Ruth', 'Débora', 'Esther', 'Bethsabée'], explanation: 'Esther est devenue reine de Perse et a risqué sa vie pour sauver le peuple juif du complot d\'Haman pour les détruire.' }
  },
  o15: {
    en: { question: 'What prophet was taken to heaven in a chariot of fire?', options: ['Elisha', 'Elijah', 'Isaiah', 'Ezekiel'], explanation: 'Elijah was taken up to heaven in a whirlwind with a chariot of fire, passing his prophetic mantle to Elisha.' },
    it: { question: 'Quale profeta fu portato in cielo su un carro di fuoco?', options: ['Eliseo', 'Elia', 'Isaia', 'Ezechiele'], explanation: 'Elia fu portato in cielo in un turbine con un carro di fuoco, passando il suo mantello profetico a Eliseo.' },
    es: { question: '¿Qué profeta fue llevado al cielo en un carro de fuego?', options: ['Eliseo', 'Elías', 'Isaías', 'Ezequiel'], explanation: 'Elías fue llevado al cielo en un torbellino con un carro de fuego, pasando su manto profético a Eliseo.' },
    pt: { question: 'Qual profeta foi levado ao céu em uma carruagem de fogo?', options: ['Eliseu', 'Elias', 'Isaías', 'Ezequiel'], explanation: 'Elias foi levado ao céu em um redemoinho com uma carruagem de fogo, passando seu manto profético a Eliseu.' },
    fr: { question: 'Quel prophète a été enlevé au ciel dans un char de feu?', options: ['Élisée', 'Élie', 'Ésaïe', 'Ézéchiel'], explanation: 'Élie a été enlevé au ciel dans un tourbillon avec un char de feu, transmettant son manteau prophétique à Élisée.' }
  },
  o16: {
    en: { question: 'How many friends came to comfort Job?', options: ['2', '3', '4', '5'], explanation: 'Three friends - Eliphaz, Bildad, and Zophar - came to comfort Job, later joined by a fourth, Elihu.' },
    it: { question: 'Quanti amici vennero a consolare Giobbe?', options: ['2', '3', '4', '5'], explanation: 'Tre amici - Elifaz, Bildad e Zofar - vennero a consolare Giobbe, successivamente raggiunti da un quarto, Eliu.' },
    es: { question: '¿Cuántos amigos vinieron a consolar a Job?', options: ['2', '3', '4', '5'], explanation: 'Tres amigos - Elifaz, Bildad y Zofar - vinieron a consolar a Job, luego se les unió un cuarto, Eliú.' },
    pt: { question: 'Quantos amigos vieram consolar Jó?', options: ['2', '3', '4', '5'], explanation: 'Três amigos - Elifaz, Bildade e Zofar - vieram consolar Jó, depois se juntou um quarto, Eliú.' },
    fr: { question: 'Combien d\'amis sont venus consoler Job?', options: ['2', '3', '4', '5'], explanation: 'Trois amis - Éliphaz, Bildad et Tsophar - sont venus consoler Job, rejoints plus tard par un quatrième, Élihu.' }
  },
  o17: {
    en: { question: 'Who was Ruth\'s mother-in-law?', options: ['Hannah', 'Naomi', 'Sarah', 'Rachel'], explanation: 'Naomi was Ruth\'s mother-in-law who Ruth faithfully followed back to Bethlehem after their husbands died.' },
    it: { question: 'Chi era la suocera di Rut?', options: ['Anna', 'Noemi', 'Sara', 'Rachele'], explanation: 'Noemi era la suocera di Rut, che Rut seguì fedelmente a Betlemme dopo la morte dei loro mariti.' },
    es: { question: '¿Quién era la suegra de Rut?', options: ['Ana', 'Noemí', 'Sara', 'Raquel'], explanation: 'Noemí era la suegra de Rut, a quien Rut siguió fielmente de regreso a Belén después de que murieron sus esposos.' },
    pt: { question: 'Quem era a sogra de Rute?', options: ['Ana', 'Noemi', 'Sara', 'Raquel'], explanation: 'Noemi era a sogra de Rute, a quem Rute seguiu fielmente de volta a Belém depois que seus maridos morreram.' },
    fr: { question: 'Qui était la belle-mère de Ruth?', options: ['Anne', 'Naomi', 'Sara', 'Rachel'], explanation: 'Naomi était la belle-mère de Ruth, que Ruth a fidèlement suivie à Bethléem après la mort de leurs maris.' }
  },
  o18: {
    en: { question: 'Which king had 700 wives?', options: ['David', 'Solomon', 'Ahab', 'Herod'], explanation: 'Solomon had 700 wives and 300 concubines, who eventually turned his heart away from God.' },
    it: { question: 'Quale re aveva 700 mogli?', options: ['Davide', 'Salomone', 'Acab', 'Erode'], explanation: 'Salomone aveva 700 mogli e 300 concubine, che alla fine allontanarono il suo cuore da Dio.' },
    es: { question: '¿Qué rey tenía 700 esposas?', options: ['David', 'Salomón', 'Acab', 'Herodes'], explanation: 'Salomón tenía 700 esposas y 300 concubinas, quienes eventualmente alejaron su corazón de Dios.' },
    pt: { question: 'Qual rei tinha 700 esposas?', options: ['Davi', 'Salomão', 'Acabe', 'Herodes'], explanation: 'Salomão tinha 700 esposas e 300 concubinas, que eventualmente afastaram seu coração de Deus.' },
    fr: { question: 'Quel roi avait 700 épouses?', options: ['David', 'Salomon', 'Achab', 'Hérode'], explanation: 'Salomon avait 700 épouses et 300 concubines, qui ont fini par détourner son cœur de Dieu.' }
  },
  o19: {
    en: { question: 'Who anointed David as king?', options: ['Eli', 'Nathan', 'Samuel', 'Elijah'], explanation: 'Samuel anointed David as the future king of Israel while he was still a young shepherd boy.' },
    it: { question: 'Chi unse Davide come re?', options: ['Eli', 'Natan', 'Samuele', 'Elia'], explanation: 'Samuele unse Davide come futuro re d\'Israele quando era ancora un giovane pastorello.' },
    es: { question: '¿Quién ungió a David como rey?', options: ['Elí', 'Natán', 'Samuel', 'Elías'], explanation: 'Samuel ungió a David como el futuro rey de Israel cuando todavía era un joven pastor.' },
    pt: { question: 'Quem ungiu Davi como rei?', options: ['Eli', 'Natã', 'Samuel', 'Elias'], explanation: 'Samuel ungiu Davi como o futuro rei de Israel quando ele ainda era um jovem pastor.' },
    fr: { question: 'Qui a oint David comme roi?', options: ['Éli', 'Nathan', 'Samuel', 'Élie'], explanation: 'Samuel a oint David comme futur roi d\'Israël alors qu\'il était encore un jeune berger.' }
  },
  o20: {
    en: { question: 'What did the Hebrew children refuse to worship in Babylon?', options: ['The king', 'A golden statue', 'The sun', 'Other gods'], explanation: 'Shadrach, Meshach, and Abednego refused to bow to Nebuchadnezzar\'s golden statue and were thrown into a fiery furnace.' },
    it: { question: 'Cosa rifiutarono di adorare i giovani ebrei a Babilonia?', options: ['Il re', 'Una statua d\'oro', 'Il sole', 'Altri dei'], explanation: 'Sadrac, Mesac e Abednego rifiutarono di prostrarsi davanti alla statua d\'oro di Nabucodonosor e furono gettati in una fornace ardente.' },
    es: { question: '¿Qué se negaron a adorar los jóvenes hebreos en Babilonia?', options: ['Al rey', 'Una estatua de oro', 'El sol', 'Otros dioses'], explanation: 'Sadrac, Mesac y Abednego se negaron a inclinarse ante la estatua de oro de Nabucodonosor y fueron arrojados a un horno de fuego.' },
    pt: { question: 'O que os jovens hebreus se recusaram a adorar na Babilônia?', options: ['O rei', 'Uma estátua de ouro', 'O sol', 'Outros deuses'], explanation: 'Sadraque, Mesaque e Abede-Nego recusaram-se a se curvar diante da estátua de ouro de Nabucodonosor e foram lançados em uma fornalha ardente.' },
    fr: { question: 'Qu\'ont refusé d\'adorer les jeunes Hébreux à Babylone?', options: ['Le roi', 'Une statue d\'or', 'Le soleil', 'D\'autres dieux'], explanation: 'Shadrac, Méshac et Abed-Nego ont refusé de se prosterner devant la statue d\'or de Nabuchodonosor et furent jetés dans une fournaise ardente.' }
  },
  o21: {
    en: { question: 'Who was the prophet that succeeded Elijah?', options: ['Elisha', 'Isaiah', 'Jeremiah', 'Ezekiel'], explanation: 'Elisha received a double portion of Elijah\'s spirit and performed twice as many miracles as his mentor.' },
    it: { question: 'Chi fu il profeta che succedette a Elia?', options: ['Eliseo', 'Isaia', 'Geremia', 'Ezechiele'], explanation: 'Eliseo ricevette una doppia porzione dello spirito di Elia e compì il doppio dei miracoli del suo maestro.' },
    es: { question: '¿Quién fue el profeta que sucedió a Elías?', options: ['Eliseo', 'Isaías', 'Jeremías', 'Ezequiel'], explanation: 'Eliseo recibió una doble porción del espíritu de Elías y realizó el doble de milagros que su mentor.' },
    pt: { question: 'Quem foi o profeta que sucedeu Elias?', options: ['Eliseu', 'Isaías', 'Jeremias', 'Ezequiel'], explanation: 'Eliseu recebeu uma porção dobrada do espírito de Elias e realizou o dobro dos milagres de seu mentor.' },
    fr: { question: 'Qui fut le prophète qui succéda à Élie?', options: ['Élisée', 'Ésaïe', 'Jérémie', 'Ézéchiel'], explanation: 'Élisée a reçu une double portion de l\'esprit d\'Élie et a accompli deux fois plus de miracles que son mentor.' }
  },
  o22: {
    en: { question: 'What river did Naaman wash in to be healed?', options: ['Nile', 'Euphrates', 'Jordan', 'Tigris'], explanation: 'Naaman, the Syrian commander with leprosy, was healed after washing seven times in the Jordan River as Elisha instructed.' },
    it: { question: 'In quale fiume si lavò Naaman per essere guarito?', options: ['Nilo', 'Eufrate', 'Giordano', 'Tigri'], explanation: 'Naaman, il comandante siriano lebbroso, fu guarito dopo essersi lavato sette volte nel fiume Giordano come Eliseo aveva ordinato.' },
    es: { question: '¿En qué río se lavó Naamán para ser sanado?', options: ['Nilo', 'Éufrates', 'Jordán', 'Tigris'], explanation: 'Naamán, el comandante sirio con lepra, fue sanado después de lavarse siete veces en el río Jordán como Eliseo instruyó.' },
    pt: { question: 'Em qual rio Naamã se lavou para ser curado?', options: ['Nilo', 'Eufrates', 'Jordão', 'Tigre'], explanation: 'Naamã, o comandante sírio com lepra, foi curado depois de se lavar sete vezes no rio Jordão como Eliseu instruiu.' },
    fr: { question: 'Dans quelle rivière Naaman s\'est-il lavé pour être guéri?', options: ['Nil', 'Euphrate', 'Jourdain', 'Tigre'], explanation: 'Naaman, le commandant syrien lépreux, fut guéri après s\'être lavé sept fois dans le Jourdain comme Élisée l\'avait instruit.' }
  },
  o23: {
    en: { question: 'Who built the first temple in Jerusalem?', options: ['David', 'Solomon', 'Moses', 'Nehemiah'], explanation: 'Solomon built the first temple in Jerusalem, fulfilling his father David\'s dream. It took seven years to complete.' },
    it: { question: 'Chi costruì il primo tempio a Gerusalemme?', options: ['Davide', 'Salomone', 'Mosè', 'Neemia'], explanation: 'Salomone costruì il primo tempio a Gerusalemme, realizzando il sogno di suo padre Davide. Ci vollero sette anni per completarlo.' },
    es: { question: '¿Quién construyó el primer templo en Jerusalén?', options: ['David', 'Salomón', 'Moisés', 'Nehemías'], explanation: 'Salomón construyó el primer templo en Jerusalén, cumpliendo el sueño de su padre David. Tomó siete años completarlo.' },
    pt: { question: 'Quem construiu o primeiro templo em Jerusalém?', options: ['Davi', 'Salomão', 'Moisés', 'Neemias'], explanation: 'Salomão construiu o primeiro templo em Jerusalém, realizando o sonho de seu pai Davi. Levou sete anos para ser concluído.' },
    fr: { question: 'Qui a construit le premier temple à Jérusalem?', options: ['David', 'Salomon', 'Moïse', 'Néhémie'], explanation: 'Salomon a construit le premier temple à Jérusalem, réalisant le rêve de son père David. Il a fallu sept ans pour le terminer.' }
  },
  o24: {
    en: { question: 'What was the name of David\'s best friend?', options: ['Saul', 'Jonathan', 'Nathan', 'Joab'], explanation: 'Jonathan, King Saul\'s son, had a deep friendship with David despite knowing David would become king instead of him.' },
    it: { question: 'Qual era il nome del migliore amico di Davide?', options: ['Saul', 'Gionatan', 'Natan', 'Ioab'], explanation: 'Gionatan, figlio del re Saul, aveva una profonda amicizia con Davide nonostante sapesse che Davide sarebbe diventato re al suo posto.' },
    es: { question: '¿Cuál era el nombre del mejor amigo de David?', options: ['Saúl', 'Jonatán', 'Natán', 'Joab'], explanation: 'Jonatán, hijo del rey Saúl, tenía una profunda amistad con David a pesar de saber que David sería rey en su lugar.' },
    pt: { question: 'Qual era o nome do melhor amigo de Davi?', options: ['Saul', 'Jônatas', 'Natã', 'Joabe'], explanation: 'Jônatas, filho do rei Saul, tinha uma profunda amizade com Davi apesar de saber que Davi se tornaria rei em seu lugar.' },
    fr: { question: 'Quel était le nom du meilleur ami de David?', options: ['Saül', 'Jonathan', 'Nathan', 'Joab'], explanation: 'Jonathan, fils du roi Saül, avait une profonde amitié avec David bien qu\'il sache que David deviendrait roi à sa place.' }
  },
  o25: {
    en: { question: 'Who was the son of David and Bathsheba who became king?', options: ['Absalom', 'Amnon', 'Solomon', 'Adonijah'], explanation: 'Solomon was the son of David and Bathsheba who succeeded David as king and built the temple in Jerusalem.' },
    it: { question: 'Chi era il figlio di Davide e Betsabea che divenne re?', options: ['Assalonne', 'Amnon', 'Salomone', 'Adonia'], explanation: 'Salomone era il figlio di Davide e Betsabea che succedette a Davide come re e costruì il tempio a Gerusalemme.' },
    es: { question: '¿Quién fue el hijo de David y Betsabé que llegó a ser rey?', options: ['Absalón', 'Amnón', 'Salomón', 'Adonías'], explanation: 'Salomón fue el hijo de David y Betsabé que sucedió a David como rey y construyó el templo en Jerusalén.' },
    pt: { question: 'Quem foi o filho de Davi e Bate-Seba que se tornou rei?', options: ['Absalão', 'Amnon', 'Salomão', 'Adonias'], explanation: 'Salomão foi o filho de Davi e Bate-Seba que sucedeu Davi como rei e construiu o templo em Jerusalém.' },
    fr: { question: 'Qui était le fils de David et Bethsabée qui devint roi?', options: ['Absalom', 'Amnon', 'Salomon', 'Adonija'], explanation: 'Salomon était le fils de David et Bethsabée qui succéda à David comme roi et construisit le temple à Jérusalem.' }
  },

  // Pauline Letters
  l1: {
    en: { question: 'Who wrote most of the New Testament letters?', options: ['Peter', 'John', 'Paul', 'James'], explanation: 'Paul wrote 13 of the 27 New Testament books, spreading the gospel and teaching throughout the Roman Empire.' },
    it: { question: 'Chi scrisse la maggior parte delle lettere del Nuovo Testamento?', options: ['Pietro', 'Giovanni', 'Paolo', 'Giacomo'], explanation: 'Paolo scrisse 13 dei 27 libri del Nuovo Testamento, diffondendo il vangelo e insegnando in tutto l\'Impero Romano.' },
    es: { question: '¿Quién escribió la mayoría de las cartas del Nuevo Testamento?', options: ['Pedro', 'Juan', 'Pablo', 'Santiago'], explanation: 'Pablo escribió 13 de los 27 libros del Nuevo Testamento, difundiendo el evangelio y enseñando por todo el Imperio Romano.' },
    pt: { question: 'Quem escreveu a maioria das cartas do Novo Testamento?', options: ['Pedro', 'João', 'Paulo', 'Tiago'], explanation: 'Paulo escreveu 13 dos 27 livros do Novo Testamento, espalhando o evangelho e ensinando por todo o Império Romano.' },
    fr: { question: 'Qui a écrit la plupart des lettres du Nouveau Testament?', options: ['Pierre', 'Jean', 'Paul', 'Jacques'], explanation: 'Paul a écrit 13 des 27 livres du Nouveau Testament, répandant l\'évangile et enseignant dans tout l\'Empire romain.' }
  },
  l2: {
    en: { question: 'What was Paul\'s name before conversion?', options: ['Simon', 'Saul', 'Samuel', 'Stephen'], explanation: 'Before his conversion on the road to Damascus, Paul was known as Saul, a Pharisee who persecuted Christians.' },
    it: { question: 'Qual era il nome di Paolo prima della conversione?', options: ['Simone', 'Saulo', 'Samuele', 'Stefano'], explanation: 'Prima della sua conversione sulla via di Damasco, Paolo era noto come Saulo, un fariseo che perseguitava i cristiani.' },
    es: { question: '¿Cuál era el nombre de Pablo antes de su conversión?', options: ['Simón', 'Saulo', 'Samuel', 'Esteban'], explanation: 'Antes de su conversión en el camino a Damasco, Pablo era conocido como Saulo, un fariseo que perseguía a los cristianos.' },
    pt: { question: 'Qual era o nome de Paulo antes da conversão?', options: ['Simão', 'Saulo', 'Samuel', 'Estêvão'], explanation: 'Antes de sua conversão no caminho de Damasco, Paulo era conhecido como Saulo, um fariseu que perseguia os cristãos.' },
    fr: { question: 'Quel était le nom de Paul avant sa conversion?', options: ['Simon', 'Saul', 'Samuel', 'Étienne'], explanation: 'Avant sa conversion sur le chemin de Damas, Paul était connu sous le nom de Saul, un pharisien qui persécutait les chrétiens.' }
  },
  l3: {
    en: { question: 'Which letter describes love in chapter 13?', options: ['Romans', '1 Corinthians', 'Ephesians', 'Philippians'], explanation: '1 Corinthians 13 is known as the "Love Chapter," describing love as patient, kind, and the greatest of all virtues.' },
    it: { question: 'Quale lettera descrive l\'amore nel capitolo 13?', options: ['Romani', '1 Corinzi', 'Efesini', 'Filippesi'], explanation: '1 Corinzi 13 è noto come il "Capitolo dell\'Amore," descrivendo l\'amore come paziente, gentile e la più grande di tutte le virtù.' },
    es: { question: '¿Qué carta describe el amor en el capítulo 13?', options: ['Romanos', '1 Corintios', 'Efesios', 'Filipenses'], explanation: '1 Corintios 13 es conocido como el "Capítulo del Amor," describiendo el amor como paciente, bondadoso y la mayor de todas las virtudes.' },
    pt: { question: 'Qual carta descreve o amor no capítulo 13?', options: ['Romanos', '1 Coríntios', 'Efésios', 'Filipenses'], explanation: '1 Coríntios 13 é conhecido como o "Capítulo do Amor," descrevendo o amor como paciente, bondoso e a maior de todas as virtudes.' },
    fr: { question: 'Quelle lettre décrit l\'amour au chapitre 13?', options: ['Romains', '1 Corinthiens', 'Éphésiens', 'Philippiens'], explanation: '1 Corinthiens 13 est connu comme le "Chapitre de l\'Amour," décrivant l\'amour comme patient, bon et la plus grande de toutes les vertus.' }
  },
  l4: {
    en: { question: 'What city was Paul from?', options: ['Jerusalem', 'Tarsus', 'Damascus', 'Antioch'], explanation: 'Paul was born in Tarsus, a major city in Cilicia (modern-day Turkey), which made him a Roman citizen by birth.' },
    it: { question: 'Di quale città era Paolo?', options: ['Gerusalemme', 'Tarso', 'Damasco', 'Antiochia'], explanation: 'Paolo nacque a Tarso, una grande città della Cilicia (l\'odierna Turchia), il che lo rendeva cittadino romano per nascita.' },
    es: { question: '¿De qué ciudad era Pablo?', options: ['Jerusalén', 'Tarso', 'Damasco', 'Antioquía'], explanation: 'Pablo nació en Tarso, una ciudad importante de Cilicia (la actual Turquía), lo que lo hacía ciudadano romano de nacimiento.' },
    pt: { question: 'De qual cidade Paulo era?', options: ['Jerusalém', 'Tarso', 'Damasco', 'Antioquia'], explanation: 'Paulo nasceu em Tarso, uma grande cidade da Cilícia (atual Turquia), o que o tornava cidadão romano de nascimento.' },
    fr: { question: 'De quelle ville était Paul?', options: ['Jérusalem', 'Tarse', 'Damas', 'Antioche'], explanation: 'Paul est né à Tarse, une grande ville de Cilicie (actuelle Turquie), ce qui faisait de lui un citoyen romain de naissance.' }
  },
  l5: {
    en: { question: 'Who did Paul write to about the armor of God?', options: ['Romans', 'Corinthians', 'Ephesians', 'Philippians'], explanation: 'Paul wrote to the Ephesians about putting on the full armor of God to stand against spiritual warfare.' },
    it: { question: 'A chi scrisse Paolo riguardo all\'armatura di Dio?', options: ['Romani', 'Corinzi', 'Efesini', 'Filippesi'], explanation: 'Paolo scrisse agli Efesini di indossare l\'armatura completa di Dio per resistere alla guerra spirituale.' },
    es: { question: '¿A quién escribió Pablo sobre la armadura de Dios?', options: ['Romanos', 'Corintios', 'Efesios', 'Filipenses'], explanation: 'Pablo escribió a los Efesios sobre ponerse toda la armadura de Dios para resistir la guerra espiritual.' },
    pt: { question: 'Para quem Paulo escreveu sobre a armadura de Deus?', options: ['Romanos', 'Coríntios', 'Efésios', 'Filipenses'], explanation: 'Paulo escreveu aos Efésios sobre vestir toda a armadura de Deus para resistir à guerra espiritual.' },
    fr: { question: 'À qui Paul a-t-il écrit au sujet de l\'armure de Dieu?', options: ['Romains', 'Corinthiens', 'Éphésiens', 'Philippiens'], explanation: 'Paul a écrit aux Éphésiens de revêtir toutes les armes de Dieu pour résister au combat spirituel.' }
  },
  l6: {
    en: { question: 'Which letter was written to a runaway slave\'s master?', options: ['Philemon', 'Titus', 'Timothy', 'Colossians'], explanation: 'Paul wrote to Philemon on behalf of Onesimus, a runaway slave who had become a Christian, asking Philemon to receive him as a brother.' },
    it: { question: 'Quale lettera fu scritta al padrone di uno schiavo fuggitivo?', options: ['Filemone', 'Tito', 'Timoteo', 'Colossesi'], explanation: 'Paolo scrisse a Filemone a favore di Onesimo, uno schiavo fuggitivo che era diventato cristiano, chiedendo a Filemone di accoglierlo come fratello.' },
    es: { question: '¿Qué carta fue escrita al amo de un esclavo fugitivo?', options: ['Filemón', 'Tito', 'Timoteo', 'Colosenses'], explanation: 'Pablo escribió a Filemón en nombre de Onésimo, un esclavo fugitivo que se había convertido al cristianismo, pidiéndole que lo recibiera como hermano.' },
    pt: { question: 'Qual carta foi escrita ao senhor de um escravo fugitivo?', options: ['Filemom', 'Tito', 'Timóteo', 'Colossenses'], explanation: 'Paulo escreveu a Filemom em nome de Onésimo, um escravo fugitivo que se tornou cristão, pedindo a Filemom que o recebesse como irmão.' },
    fr: { question: 'Quelle lettre a été écrite au maître d\'un esclave en fuite?', options: ['Philémon', 'Tite', 'Timothée', 'Colossiens'], explanation: 'Paul a écrit à Philémon au nom d\'Onésime, un esclave en fuite devenu chrétien, demandant à Philémon de le recevoir comme un frère.' }
  },
  l7: {
    en: { question: '"For me to live is Christ, to die is gain" is from?', options: ['Romans', 'Galatians', 'Philippians', 'Colossians'], explanation: 'Paul expressed this profound statement of faith in Philippians 1:21, showing his complete devotion to Christ.' },
    it: { question: '"Per me vivere è Cristo, morire è un guadagno" è da?', options: ['Romani', 'Galati', 'Filippesi', 'Colossesi'], explanation: 'Paolo espresse questa profonda dichiarazione di fede in Filippesi 1:21, mostrando la sua completa devozione a Cristo.' },
    es: { question: '"Para mí el vivir es Cristo, y el morir es ganancia" es de?', options: ['Romanos', 'Gálatas', 'Filipenses', 'Colosenses'], explanation: 'Pablo expresó esta profunda declaración de fe en Filipenses 1:21, mostrando su completa devoción a Cristo.' },
    pt: { question: '"Para mim o viver é Cristo, e o morrer é lucro" é de?', options: ['Romanos', 'Gálatas', 'Filipenses', 'Colossenses'], explanation: 'Paulo expressou esta profunda declaração de fé em Filipenses 1:21, mostrando sua completa devoção a Cristo.' },
    fr: { question: '"Pour moi, vivre c\'est Christ, et mourir est un gain" vient de?', options: ['Romains', 'Galates', 'Philippiens', 'Colossiens'], explanation: 'Paul a exprimé cette profonde déclaration de foi dans Philippiens 1:21, montrant sa dévotion complète au Christ.' }
  },
  l8: {
    en: { question: 'Which letter emphasizes justification by faith?', options: ['Romans', '1 Corinthians', 'Ephesians', '1 Timothy'], explanation: 'Romans is Paul\'s most systematic explanation of how people are justified by faith in Christ, not by works of the law.' },
    it: { question: 'Quale lettera enfatizza la giustificazione per fede?', options: ['Romani', '1 Corinzi', 'Efesini', '1 Timoteo'], explanation: 'Romani è la spiegazione più sistematica di Paolo su come le persone sono giustificate per fede in Cristo, non per le opere della legge.' },
    es: { question: '¿Qué carta enfatiza la justificación por fe?', options: ['Romanos', '1 Corintios', 'Efesios', '1 Timoteo'], explanation: 'Romanos es la explicación más sistemática de Pablo sobre cómo las personas son justificadas por fe en Cristo, no por obras de la ley.' },
    pt: { question: 'Qual carta enfatiza a justificação pela fé?', options: ['Romanos', '1 Coríntios', 'Efésios', '1 Timóteo'], explanation: 'Romanos é a explicação mais sistemática de Paulo sobre como as pessoas são justificadas pela fé em Cristo, não pelas obras da lei.' },
    fr: { question: 'Quelle lettre met l\'accent sur la justification par la foi?', options: ['Romains', '1 Corinthiens', 'Éphésiens', '1 Timothée'], explanation: 'Romains est l\'explication la plus systématique de Paul sur la façon dont les gens sont justifiés par la foi en Christ, et non par les œuvres de la loi.' }
  },
  l9: {
    en: { question: 'Who was Timothy\'s mentor?', options: ['Peter', 'Paul', 'Barnabas', 'Silas'], explanation: 'Paul mentored Timothy from a young age and wrote two letters to guide him in leading the church at Ephesus.' },
    it: { question: 'Chi era il mentore di Timoteo?', options: ['Pietro', 'Paolo', 'Barnaba', 'Sila'], explanation: 'Paolo fu il mentore di Timoteo fin da giovane e gli scrisse due lettere per guidarlo nella guida della chiesa di Efeso.' },
    es: { question: '¿Quién fue el mentor de Timoteo?', options: ['Pedro', 'Pablo', 'Bernabé', 'Silas'], explanation: 'Pablo fue mentor de Timoteo desde joven y le escribió dos cartas para guiarlo en el liderazgo de la iglesia en Éfeso.' },
    pt: { question: 'Quem foi o mentor de Timóteo?', options: ['Pedro', 'Paulo', 'Barnabé', 'Silas'], explanation: 'Paulo foi mentor de Timóteo desde jovem e escreveu duas cartas para guiá-lo na liderança da igreja em Éfeso.' },
    fr: { question: 'Qui était le mentor de Timothée?', options: ['Pierre', 'Paul', 'Barnabas', 'Silas'], explanation: 'Paul a été le mentor de Timothée dès son jeune âge et lui a écrit deux lettres pour le guider dans la direction de l\'église d\'Éphèse.' }
  },
  l10: {
    en: { question: 'How many letters did Paul write to the Corinthians?', options: ['1', '2', '3', '4'], explanation: 'Paul wrote two canonical letters to the Corinthians, addressing divisions, immorality, and spiritual gifts in the church.' },
    it: { question: 'Quante lettere scrisse Paolo ai Corinzi?', options: ['1', '2', '3', '4'], explanation: 'Paolo scrisse due lettere canoniche ai Corinzi, affrontando divisioni, immoralità e doni spirituali nella chiesa.' },
    es: { question: '¿Cuántas cartas escribió Pablo a los Corintios?', options: ['1', '2', '3', '4'], explanation: 'Pablo escribió dos cartas canónicas a los Corintios, abordando divisiones, inmoralidad y dones espirituales en la iglesia.' },
    pt: { question: 'Quantas cartas Paulo escreveu aos Coríntios?', options: ['1', '2', '3', '4'], explanation: 'Paulo escreveu duas cartas canônicas aos Coríntios, abordando divisões, imoralidade e dons espirituais na igreja.' },
    fr: { question: 'Combien de lettres Paul a-t-il écrites aux Corinthiens?', options: ['1', '2', '3', '4'], explanation: 'Paul a écrit deux lettres canoniques aux Corinthiens, abordant les divisions, l\'immoralité et les dons spirituels dans l\'église.' }
  },
  l11: {
    en: { question: 'Which letter warns against legalism?', options: ['Romans', 'Galatians', 'Ephesians', 'Philippians'], explanation: 'Galatians strongly warns against returning to legalism, emphasizing that salvation is by grace through faith alone.' },
    it: { question: 'Quale lettera mette in guardia contro il legalismo?', options: ['Romani', 'Galati', 'Efesini', 'Filippesi'], explanation: 'Galati mette fortemente in guardia contro il ritorno al legalismo, enfatizzando che la salvezza è per grazia mediante la sola fede.' },
    es: { question: '¿Qué carta advierte contra el legalismo?', options: ['Romanos', 'Gálatas', 'Efesios', 'Filipenses'], explanation: 'Gálatas advierte fuertemente contra volver al legalismo, enfatizando que la salvación es por gracia mediante la fe solamente.' },
    pt: { question: 'Qual carta adverte contra o legalismo?', options: ['Romanos', 'Gálatas', 'Efésios', 'Filipenses'], explanation: 'Gálatas adverte fortemente contra voltar ao legalismo, enfatizando que a salvação é pela graça mediante a fé somente.' },
    fr: { question: 'Quelle lettre met en garde contre le légalisme?', options: ['Romains', 'Galates', 'Éphésiens', 'Philippiens'], explanation: 'Galates met fortement en garde contre le retour au légalisme, soulignant que le salut est par la grâce au moyen de la foi seule.' }
  },
  l12: {
    en: { question: '"I can do all things through Christ" is from which letter?', options: ['Romans', 'Galatians', 'Philippians', 'Colossians'], explanation: 'This famous verse from Philippians 4:13 speaks of finding strength in Christ to face any circumstance.' },
    it: { question: '"Io posso ogni cosa in Cristo" è da quale lettera?', options: ['Romani', 'Galati', 'Filippesi', 'Colossesi'], explanation: 'Questo famoso versetto di Filippesi 4:13 parla di trovare forza in Cristo per affrontare qualsiasi circostanza.' },
    es: { question: '"Todo lo puedo en Cristo" es de cuál carta?', options: ['Romanos', 'Gálatas', 'Filipenses', 'Colosenses'], explanation: 'Este famoso versículo de Filipenses 4:13 habla de encontrar fortaleza en Cristo para enfrentar cualquier circunstancia.' },
    pt: { question: '"Tudo posso naquele que me fortalece" é de qual carta?', options: ['Romanos', 'Gálatas', 'Filipenses', 'Colossenses'], explanation: 'Este famoso versículo de Filipenses 4:13 fala sobre encontrar força em Cristo para enfrentar qualquer circunstância.' },
    fr: { question: '"Je puis tout par celui qui me fortifie" vient de quelle lettre?', options: ['Romains', 'Galates', 'Philippiens', 'Colossiens'], explanation: 'Ce verset célèbre de Philippiens 4:13 parle de trouver la force en Christ pour faire face à toute circonstance.' }
  },
  l13: {
    en: { question: 'Which letters were written to church leaders?', options: ['Ephesians', 'Philippians', '1 & 2 Timothy, Titus', 'Colossians'], explanation: 'The Pastoral Epistles (1 & 2 Timothy and Titus) were written to help church leaders in their ministry.' },
    it: { question: 'Quali lettere furono scritte ai leader della chiesa?', options: ['Efesini', 'Filippesi', '1 e 2 Timoteo, Tito', 'Colossesi'], explanation: 'Le Epistole Pastorali (1 e 2 Timoteo e Tito) furono scritte per aiutare i leader della chiesa nel loro ministero.' },
    es: { question: '¿Qué cartas fueron escritas a líderes de iglesia?', options: ['Efesios', 'Filipenses', '1 y 2 Timoteo, Tito', 'Colosenses'], explanation: 'Las Epístolas Pastorales (1 y 2 Timoteo y Tito) fueron escritas para ayudar a los líderes de la iglesia en su ministerio.' },
    pt: { question: 'Quais cartas foram escritas para líderes de igreja?', options: ['Efésios', 'Filipenses', '1 e 2 Timóteo, Tito', 'Colossenses'], explanation: 'As Epístolas Pastorais (1 e 2 Timóteo e Tito) foram escritas para ajudar os líderes da igreja em seu ministério.' },
    fr: { question: 'Quelles lettres ont été écrites aux dirigeants d\'église?', options: ['Éphésiens', 'Philippiens', '1 et 2 Timothée, Tite', 'Colossiens'], explanation: 'Les Épîtres Pastorales (1 et 2 Timothée et Tite) ont été écrites pour aider les dirigeants d\'église dans leur ministère.' }
  },
  l14: {
    en: { question: 'What does Paul call the church in Ephesians?', options: ['The Kingdom', 'The Body of Christ', 'The Temple', 'The Family'], explanation: 'Paul describes the church as the Body of Christ in Ephesians, with Christ as the head and believers as members.' },
    it: { question: 'Come chiama Paolo la chiesa in Efesini?', options: ['Il Regno', 'Il Corpo di Cristo', 'Il Tempio', 'La Famiglia'], explanation: 'Paolo descrive la chiesa come il Corpo di Cristo in Efesini, con Cristo come capo e i credenti come membra.' },
    es: { question: '¿Cómo llama Pablo a la iglesia en Efesios?', options: ['El Reino', 'El Cuerpo de Cristo', 'El Templo', 'La Familia'], explanation: 'Pablo describe a la iglesia como el Cuerpo de Cristo en Efesios, con Cristo como cabeza y los creyentes como miembros.' },
    pt: { question: 'Como Paulo chama a igreja em Efésios?', options: ['O Reino', 'O Corpo de Cristo', 'O Templo', 'A Família'], explanation: 'Paulo descreve a igreja como o Corpo de Cristo em Efésios, com Cristo como a cabeça e os crentes como membros.' },
    fr: { question: 'Comment Paul appelle-t-il l\'église dans Éphésiens?', options: ['Le Royaume', 'Le Corps du Christ', 'Le Temple', 'La Famille'], explanation: 'Paul décrit l\'église comme le Corps du Christ dans Éphésiens, avec Christ comme tête et les croyants comme membres.' }
  },
  l15: {
    en: { question: 'Which letter discusses the resurrection most?', options: ['Romans', '1 Corinthians', 'Galatians', 'Ephesians'], explanation: '1 Corinthians 15 provides the most detailed teaching on the resurrection of Christ and believers in Paul\'s letters.' },
    it: { question: 'Quale lettera discute di più la risurrezione?', options: ['Romani', '1 Corinzi', 'Galati', 'Efesini'], explanation: '1 Corinzi 15 fornisce l\'insegnamento più dettagliato sulla risurrezione di Cristo e dei credenti nelle lettere di Paolo.' },
    es: { question: '¿Qué carta discute más la resurrección?', options: ['Romanos', '1 Corintios', 'Gálatas', 'Efesios'], explanation: '1 Corintios 15 proporciona la enseñanza más detallada sobre la resurrección de Cristo y los creyentes en las cartas de Pablo.' },
    pt: { question: 'Qual carta discute mais a ressurreição?', options: ['Romanos', '1 Coríntios', 'Gálatas', 'Efésios'], explanation: '1 Coríntios 15 fornece o ensino mais detalhado sobre a ressurreição de Cristo e dos crentes nas cartas de Paulo.' },
    fr: { question: 'Quelle lettre traite le plus de la résurrection?', options: ['Romains', '1 Corinthiens', 'Galates', 'Éphésiens'], explanation: '1 Corinthiens 15 fournit l\'enseignement le plus détaillé sur la résurrection du Christ et des croyants dans les lettres de Paul.' }
  },
  l16: {
    en: { question: 'Who was the companion of Titus?', options: ['Timothy', 'Silas', 'Paul', 'Barnabas'], explanation: 'Paul was Titus\'s mentor and companion, sending him to organize the church in Crete.' },
    it: { question: 'Chi era il compagno di Tito?', options: ['Timoteo', 'Sila', 'Paolo', 'Barnaba'], explanation: 'Paolo era il mentore e compagno di Tito, inviandolo a organizzare la chiesa a Creta.' },
    es: { question: '¿Quién era el compañero de Tito?', options: ['Timoteo', 'Silas', 'Pablo', 'Bernabé'], explanation: 'Pablo era el mentor y compañero de Tito, enviándolo a organizar la iglesia en Creta.' },
    pt: { question: 'Quem era o companheiro de Tito?', options: ['Timóteo', 'Silas', 'Paulo', 'Barnabé'], explanation: 'Paulo era o mentor e companheiro de Tito, enviando-o para organizar a igreja em Creta.' },
    fr: { question: 'Qui était le compagnon de Tite?', options: ['Timothée', 'Silas', 'Paul', 'Barnabas'], explanation: 'Paul était le mentor et compagnon de Tite, l\'envoyant organiser l\'église en Crète.' }
  },
  l17: {
    en: { question: '"The fruit of the Spirit" is found in which letter?', options: ['Romans', 'Galatians', 'Ephesians', 'Colossians'], explanation: 'Galatians 5:22-23 lists the fruit of the Spirit: love, joy, peace, patience, kindness, goodness, faithfulness, gentleness, and self-control.' },
    it: { question: '"Il frutto dello Spirito" si trova in quale lettera?', options: ['Romani', 'Galati', 'Efesini', 'Colossesi'], explanation: 'Galati 5:22-23 elenca il frutto dello Spirito: amore, gioia, pace, pazienza, benevolenza, bontà, fedeltà, mansuetudine e dominio di sé.' },
    es: { question: '"El fruto del Espíritu" se encuentra en cuál carta?', options: ['Romanos', 'Gálatas', 'Efesios', 'Colosenses'], explanation: 'Gálatas 5:22-23 enumera el fruto del Espíritu: amor, gozo, paz, paciencia, benignidad, bondad, fe, mansedumbre y templanza.' },
    pt: { question: '"O fruto do Espírito" é encontrado em qual carta?', options: ['Romanos', 'Gálatas', 'Efésios', 'Colossenses'], explanation: 'Gálatas 5:22-23 lista o fruto do Espírito: amor, alegria, paz, paciência, amabilidade, bondade, fidelidade, mansidão e domínio próprio.' },
    fr: { question: '"Le fruit de l\'Esprit" se trouve dans quelle lettre?', options: ['Romains', 'Galates', 'Éphésiens', 'Colossiens'], explanation: 'Galates 5:22-23 énumère le fruit de l\'Esprit: amour, joie, paix, patience, bonté, bienveillance, fidélité, douceur et maîtrise de soi.' }
  },
  l18: {
    en: { question: 'Which letter was written from prison?', options: ['Romans', 'Galatians', 'Philippians', 'All of Paul\'s letters'], explanation: 'Philippians is one of Paul\'s "Prison Epistles," written during his imprisonment in Rome, yet filled with joy.' },
    it: { question: 'Quale lettera fu scritta dalla prigione?', options: ['Romani', 'Galati', 'Filippesi', 'Tutte le lettere di Paolo'], explanation: 'Filippesi è una delle "Epistole della Prigionia" di Paolo, scritta durante la sua prigionia a Roma, eppure piena di gioia.' },
    es: { question: '¿Qué carta fue escrita desde la prisión?', options: ['Romanos', 'Gálatas', 'Filipenses', 'Todas las cartas de Pablo'], explanation: 'Filipenses es una de las "Epístolas de la Prisión" de Pablo, escrita durante su encarcelamiento en Roma, pero llena de gozo.' },
    pt: { question: 'Qual carta foi escrita da prisão?', options: ['Romanos', 'Gálatas', 'Filipenses', 'Todas as cartas de Paulo'], explanation: 'Filipenses é uma das "Epístolas da Prisão" de Paulo, escrita durante sua prisão em Roma, mas cheia de alegria.' },
    fr: { question: 'Quelle lettre a été écrite depuis la prison?', options: ['Romains', 'Galates', 'Philippiens', 'Toutes les lettres de Paul'], explanation: 'Philippiens est l\'une des "Épîtres de la Prison" de Paul, écrite pendant son emprisonnement à Rome, mais remplie de joie.' }
  },
  l19: {
    en: { question: 'How many letters did Paul write to Timothy?', options: ['1', '2', '3', '4'], explanation: 'Paul wrote two letters to Timothy, his spiritual son, to guide him in leading the church at Ephesus.' },
    it: { question: 'Quante lettere scrisse Paolo a Timoteo?', options: ['1', '2', '3', '4'], explanation: 'Paolo scrisse due lettere a Timoteo, suo figlio spirituale, per guidarlo nella guida della chiesa di Efeso.' },
    es: { question: '¿Cuántas cartas escribió Pablo a Timoteo?', options: ['1', '2', '3', '4'], explanation: 'Pablo escribió dos cartas a Timoteo, su hijo espiritual, para guiarlo en el liderazgo de la iglesia en Éfeso.' },
    pt: { question: 'Quantas cartas Paulo escreveu a Timóteo?', options: ['1', '2', '3', '4'], explanation: 'Paulo escreveu duas cartas a Timóteo, seu filho espiritual, para guiá-lo na liderança da igreja em Éfeso.' },
    fr: { question: 'Combien de lettres Paul a-t-il écrites à Timothée?', options: ['1', '2', '3', '4'], explanation: 'Paul a écrit deux lettres à Timothée, son fils spirituel, pour le guider dans la direction de l\'église d\'Éphèse.' }
  },
  l20: {
    en: { question: 'Which church was known for its divisions?', options: ['Rome', 'Corinth', 'Ephesus', 'Philippi'], explanation: 'The church at Corinth was plagued by divisions, with people claiming allegiance to Paul, Apollos, or Peter.' },
    it: { question: 'Quale chiesa era nota per le sue divisioni?', options: ['Roma', 'Corinto', 'Efeso', 'Filippi'], explanation: 'La chiesa di Corinto era afflitta da divisioni, con persone che rivendicavano fedeltà a Paolo, Apollo o Pietro.' },
    es: { question: '¿Qué iglesia era conocida por sus divisiones?', options: ['Roma', 'Corinto', 'Éfeso', 'Filipos'], explanation: 'La iglesia de Corinto estaba plagada de divisiones, con personas proclamando lealtad a Pablo, Apolos o Pedro.' },
    pt: { question: 'Qual igreja era conhecida por suas divisões?', options: ['Roma', 'Corinto', 'Éfeso', 'Filipos'], explanation: 'A igreja em Corinto era assolada por divisões, com pessoas alegando lealdade a Paulo, Apolo ou Pedro.' },
    fr: { question: 'Quelle église était connue pour ses divisions?', options: ['Rome', 'Corinthe', 'Éphèse', 'Philippes'], explanation: 'L\'église de Corinthe était en proie aux divisions, avec des gens revendiquant leur allégeance à Paul, Apollos ou Pierre.' }
  },
  l21: {
    en: { question: 'What is the longest of Paul\'s letters?', options: ['1 Corinthians', 'Romans', 'Ephesians', 'Galatians'], explanation: 'Romans is Paul\'s longest letter with 16 chapters, providing his most complete theological exposition.' },
    it: { question: 'Qual è la più lunga delle lettere di Paolo?', options: ['1 Corinzi', 'Romani', 'Efesini', 'Galati'], explanation: 'Romani è la lettera più lunga di Paolo con 16 capitoli, fornendo la sua esposizione teologica più completa.' },
    es: { question: '¿Cuál es la carta más larga de Pablo?', options: ['1 Corintios', 'Romanos', 'Efesios', 'Gálatas'], explanation: 'Romanos es la carta más larga de Pablo con 16 capítulos, proporcionando su exposición teológica más completa.' },
    pt: { question: 'Qual é a carta mais longa de Paulo?', options: ['1 Coríntios', 'Romanos', 'Efésios', 'Gálatas'], explanation: 'Romanos é a carta mais longa de Paulo com 16 capítulos, fornecendo sua exposição teológica mais completa.' },
    fr: { question: 'Quelle est la plus longue des lettres de Paul?', options: ['1 Corinthiens', 'Romains', 'Éphésiens', 'Galates'], explanation: 'Romains est la plus longue lettre de Paul avec 16 chapitres, fournissant son exposé théologique le plus complet.' }
  },
  l22: {
    en: { question: '"All Scripture is God-breathed" is from which letter?', options: ['Romans', '1 Corinthians', '2 Timothy', 'Titus'], explanation: '2 Timothy 3:16 declares that all Scripture is inspired by God and useful for teaching and training in righteousness.' },
    it: { question: '"Tutta la Scrittura è ispirata da Dio" è da quale lettera?', options: ['Romani', '1 Corinzi', '2 Timoteo', 'Tito'], explanation: '2 Timoteo 3:16 dichiara che tutta la Scrittura è ispirata da Dio e utile per insegnare e formare nella giustizia.' },
    es: { question: '"Toda la Escritura es inspirada por Dios" es de cuál carta?', options: ['Romanos', '1 Corintios', '2 Timoteo', 'Tito'], explanation: '2 Timoteo 3:16 declara que toda la Escritura es inspirada por Dios y útil para enseñar y educar en justicia.' },
    pt: { question: '"Toda a Escritura é inspirada por Deus" é de qual carta?', options: ['Romanos', '1 Coríntios', '2 Timóteo', 'Tito'], explanation: '2 Timóteo 3:16 declara que toda a Escritura é inspirada por Deus e útil para ensinar e treinar em justiça.' },
    fr: { question: '"Toute Écriture est inspirée de Dieu" vient de quelle lettre?', options: ['Romains', '1 Corinthiens', '2 Timothée', 'Tite'], explanation: '2 Timothée 3:16 déclare que toute Écriture est inspirée de Dieu et utile pour enseigner et former dans la justice.' }
  },
  l23: {
    en: { question: 'Who delivered the letter to the Romans?', options: ['Phoebe', 'Timothy', 'Silas', 'Titus'], explanation: 'Phoebe, a deaconess from Cenchreae, is believed to have delivered Paul\'s letter to the Romans.' },
    it: { question: 'Chi consegnò la lettera ai Romani?', options: ['Febe', 'Timoteo', 'Sila', 'Tito'], explanation: 'Febe, una diaconessa di Cencrea, si ritiene abbia consegnato la lettera di Paolo ai Romani.' },
    es: { question: '¿Quién entregó la carta a los Romanos?', options: ['Febe', 'Timoteo', 'Silas', 'Tito'], explanation: 'Febe, una diaconisa de Cencrea, se cree que entregó la carta de Pablo a los Romanos.' },
    pt: { question: 'Quem entregou a carta aos Romanos?', options: ['Febe', 'Timóteo', 'Silas', 'Tito'], explanation: 'Febe, uma diaconisa de Cencreia, acredita-se ter entregado a carta de Paulo aos Romanos.' },
    fr: { question: 'Qui a livré la lettre aux Romains?', options: ['Phoebé', 'Timothée', 'Silas', 'Tite'], explanation: 'Phoebé, une diaconesse de Cenchrées, aurait livré la lettre de Paul aux Romains.' }
  },
  l24: {
    en: { question: 'Which letter mentions the rapture?', options: ['Romans', 'Galatians', '1 Thessalonians', 'Colossians'], explanation: '1 Thessalonians 4:17 describes believers being "caught up" to meet the Lord in the air at His return.' },
    it: { question: 'Quale lettera menziona il rapimento?', options: ['Romani', 'Galati', '1 Tessalonicesi', 'Colossesi'], explanation: '1 Tessalonicesi 4:17 descrive i credenti che vengono "rapiti" per incontrare il Signore nell\'aria al Suo ritorno.' },
    es: { question: '¿Qué carta menciona el arrebatamiento?', options: ['Romanos', 'Gálatas', '1 Tesalonicenses', 'Colosenses'], explanation: '1 Tesalonicenses 4:17 describe a los creyentes siendo "arrebatados" para encontrarse con el Señor en el aire a Su regreso.' },
    pt: { question: 'Qual carta menciona o arrebatamento?', options: ['Romanos', 'Gálatas', '1 Tessalonicenses', 'Colossenses'], explanation: '1 Tessalonicenses 4:17 descreve os crentes sendo "arrebatados" para encontrar o Senhor nos ares em Seu retorno.' },
    fr: { question: 'Quelle lettre mentionne l\'enlèvement?', options: ['Romains', 'Galates', '1 Thessaloniciens', 'Colossiens'], explanation: '1 Thessaloniciens 4:17 décrit les croyants étant "enlevés" pour rencontrer le Seigneur dans les airs à Son retour.' }
  },
  l25: {
    en: { question: '"Christ is the head of the church" is from?', options: ['Romans', 'Ephesians', 'Philippians', 'Colossians'], explanation: 'Colossians 1:18 declares Christ as the head of the body, the church, emphasizing His supremacy in all things.' },
    it: { question: '"Cristo è il capo della chiesa" è da?', options: ['Romani', 'Efesini', 'Filippesi', 'Colossesi'], explanation: 'Colossesi 1:18 dichiara Cristo come il capo del corpo, la chiesa, enfatizzando la Sua supremazia in tutte le cose.' },
    es: { question: '"Cristo es la cabeza de la iglesia" es de?', options: ['Romanos', 'Efesios', 'Filipenses', 'Colosenses'], explanation: 'Colosenses 1:18 declara a Cristo como la cabeza del cuerpo, la iglesia, enfatizando Su supremacía en todas las cosas.' },
    pt: { question: '"Cristo é a cabeça da igreja" é de?', options: ['Romanos', 'Efésios', 'Filipenses', 'Colossenses'], explanation: 'Colossenses 1:18 declara Cristo como a cabeça do corpo, a igreja, enfatizando Sua supremacia em todas as coisas.' },
    fr: { question: '"Christ est la tête de l\'église" vient de?', options: ['Romains', 'Éphésiens', 'Philippiens', 'Colossiens'], explanation: 'Colossiens 1:18 déclare Christ comme la tête du corps, l\'église, soulignant Sa suprématie en toutes choses.' }
  },

  // New Testament
  n1: {
    en: { question: 'Who wrote the book of Revelation?', options: ['Paul', 'Peter', 'John', 'James'], explanation: 'The apostle John wrote Revelation while exiled on the island of Patmos, receiving visions of the end times.' },
    it: { question: 'Chi scrisse il libro dell\'Apocalisse?', options: ['Paolo', 'Pietro', 'Giovanni', 'Giacomo'], explanation: 'L\'apostolo Giovanni scrisse l\'Apocalisse mentre era esiliato sull\'isola di Patmos, ricevendo visioni degli ultimi tempi.' },
    es: { question: '¿Quién escribió el libro de Apocalipsis?', options: ['Pablo', 'Pedro', 'Juan', 'Santiago'], explanation: 'El apóstol Juan escribió Apocalipsis mientras estaba exiliado en la isla de Patmos, recibiendo visiones de los últimos tiempos.' },
    pt: { question: 'Quem escreveu o livro de Apocalipse?', options: ['Paulo', 'Pedro', 'João', 'Tiago'], explanation: 'O apóstolo João escreveu Apocalipse enquanto estava exilado na ilha de Patmos, recebendo visões dos últimos tempos.' },
    fr: { question: 'Qui a écrit le livre de l\'Apocalypse?', options: ['Paul', 'Pierre', 'Jean', 'Jacques'], explanation: 'L\'apôtre Jean a écrit l\'Apocalypse alors qu\'il était exilé sur l\'île de Patmos, recevant des visions de la fin des temps.' }
  },
  n2: {
    en: { question: 'How many books are in the New Testament?', options: ['22', '25', '27', '30'], explanation: 'The New Testament contains 27 books: 4 Gospels, Acts, 21 letters, and Revelation.' },
    it: { question: 'Quanti libri ci sono nel Nuovo Testamento?', options: ['22', '25', '27', '30'], explanation: 'Il Nuovo Testamento contiene 27 libri: 4 Vangeli, Atti, 21 lettere e Apocalisse.' },
    es: { question: '¿Cuántos libros hay en el Nuevo Testamento?', options: ['22', '25', '27', '30'], explanation: 'El Nuevo Testamento contiene 27 libros: 4 Evangelios, Hechos, 21 cartas y Apocalipsis.' },
    pt: { question: 'Quantos livros há no Novo Testamento?', options: ['22', '25', '27', '30'], explanation: 'O Novo Testamento contém 27 livros: 4 Evangelhos, Atos, 21 cartas e Apocalipse.' },
    fr: { question: 'Combien de livres y a-t-il dans le Nouveau Testament?', options: ['22', '25', '27', '30'], explanation: 'Le Nouveau Testament contient 27 livres: 4 Évangiles, Actes, 21 lettres et Apocalypse.' }
  },
  n3: {
    en: { question: 'Who was the first Christian martyr?', options: ['Peter', 'Stephen', 'James', 'Paul'], explanation: 'Stephen was stoned to death for his faith in Christ, becoming the first Christian martyr as recorded in Acts 7.' },
    it: { question: 'Chi fu il primo martire cristiano?', options: ['Pietro', 'Stefano', 'Giacomo', 'Paolo'], explanation: 'Stefano fu lapidato a morte per la sua fede in Cristo, diventando il primo martire cristiano come registrato in Atti 7.' },
    es: { question: '¿Quién fue el primer mártir cristiano?', options: ['Pedro', 'Esteban', 'Santiago', 'Pablo'], explanation: 'Esteban fue apedreado hasta la muerte por su fe en Cristo, convirtiéndose en el primer mártir cristiano como se registra en Hechos 7.' },
    pt: { question: 'Quem foi o primeiro mártir cristão?', options: ['Pedro', 'Estêvão', 'Tiago', 'Paulo'], explanation: 'Estêvão foi apedrejado até a morte por sua fé em Cristo, tornando-se o primeiro mártir cristão como registrado em Atos 7.' },
    fr: { question: 'Qui fut le premier martyr chrétien?', options: ['Pierre', 'Étienne', 'Jacques', 'Paul'], explanation: 'Étienne fut lapidé pour sa foi en Christ, devenant le premier martyr chrétien comme relaté dans Actes 7.' }
  },
  n4: {
    en: { question: 'Where was Paul going when he was converted?', options: ['Jerusalem', 'Damascus', 'Antioch', 'Rome'], explanation: 'Paul was on his way to Damascus to persecute Christians when Jesus appeared to him in a blinding light.' },
    it: { question: 'Dove stava andando Paolo quando si convertì?', options: ['Gerusalemme', 'Damasco', 'Antiochia', 'Roma'], explanation: 'Paolo stava andando a Damasco per perseguitare i cristiani quando Gesù gli apparve in una luce accecante.' },
    es: { question: '¿A dónde iba Pablo cuando se convirtió?', options: ['Jerusalén', 'Damasco', 'Antioquía', 'Roma'], explanation: 'Pablo iba camino a Damasco para perseguir a los cristianos cuando Jesús se le apareció en una luz cegadora.' },
    pt: { question: 'Para onde Paulo ia quando se converteu?', options: ['Jerusalém', 'Damasco', 'Antioquia', 'Roma'], explanation: 'Paulo estava a caminho de Damasco para perseguir cristãos quando Jesus apareceu a ele em uma luz ofuscante.' },
    fr: { question: 'Où allait Paul quand il s\'est converti?', options: ['Jérusalem', 'Damas', 'Antioche', 'Rome'], explanation: 'Paul était en route pour Damas pour persécuter les chrétiens quand Jésus lui apparut dans une lumière aveuglante.' }
  },
  n5: {
    en: { question: 'Who was the author of Acts?', options: ['Paul', 'Luke', 'Mark', 'Matthew'], explanation: 'Luke, the physician and companion of Paul, wrote both the Gospel of Luke and the book of Acts.' },
    it: { question: 'Chi fu l\'autore degli Atti?', options: ['Paolo', 'Luca', 'Marco', 'Matteo'], explanation: 'Luca, il medico e compagno di Paolo, scrisse sia il Vangelo di Luca che il libro degli Atti.' },
    es: { question: '¿Quién fue el autor de Hechos?', options: ['Pablo', 'Lucas', 'Marcos', 'Mateo'], explanation: 'Lucas, el médico y compañero de Pablo, escribió tanto el Evangelio de Lucas como el libro de Hechos.' },
    pt: { question: 'Quem foi o autor de Atos?', options: ['Paulo', 'Lucas', 'Marcos', 'Mateus'], explanation: 'Lucas, o médico e companheiro de Paulo, escreveu tanto o Evangelho de Lucas quanto o livro de Atos.' },
    fr: { question: 'Qui était l\'auteur des Actes?', options: ['Paul', 'Luc', 'Marc', 'Matthieu'], explanation: 'Luc, le médecin et compagnon de Paul, a écrit à la fois l\'Évangile de Luc et le livre des Actes.' }
  },
  n6: {
    en: { question: 'How many churches are addressed in Revelation?', options: ['5', '7', '10', '12'], explanation: 'Jesus addressed seven churches in Asia Minor in Revelation 2-3: Ephesus, Smyrna, Pergamum, Thyatira, Sardis, Philadelphia, and Laodicea.' },
    it: { question: 'Quante chiese sono indirizzate nell\'Apocalisse?', options: ['5', '7', '10', '12'], explanation: 'Gesù si rivolse a sette chiese in Asia Minore in Apocalisse 2-3: Efeso, Smirne, Pergamo, Tiatira, Sardi, Filadelfia e Laodicea.' },
    es: { question: '¿Cuántas iglesias se dirigen en Apocalipsis?', options: ['5', '7', '10', '12'], explanation: 'Jesús se dirigió a siete iglesias en Asia Menor en Apocalipsis 2-3: Éfeso, Esmirna, Pérgamo, Tiatira, Sardis, Filadelfia y Laodicea.' },
    pt: { question: 'Quantas igrejas são endereçadas em Apocalipse?', options: ['5', '7', '10', '12'], explanation: 'Jesus se dirigiu a sete igrejas na Ásia Menor em Apocalipse 2-3: Éfeso, Esmirna, Pérgamo, Tiatira, Sardes, Filadélfia e Laodiceia.' },
    fr: { question: 'Combien d\'églises sont adressées dans l\'Apocalypse?', options: ['5', '7', '10', '12'], explanation: 'Jésus s\'est adressé à sept églises d\'Asie Mineure dans Apocalypse 2-3: Éphèse, Smyrne, Pergame, Thyatire, Sardes, Philadelphie et Laodicée.' }
  },
  n7: {
    en: { question: 'Who wrote the letter to the Hebrews?', options: ['Paul', 'Peter', 'Luke', 'Unknown'], explanation: 'The authorship of Hebrews is debated and unknown. Various candidates include Paul, Apollos, Barnabas, or Luke.' },
    it: { question: 'Chi scrisse la lettera agli Ebrei?', options: ['Paolo', 'Pietro', 'Luca', 'Sconosciuto'], explanation: 'La paternità di Ebrei è dibattuta e sconosciuta. Vari candidati includono Paolo, Apollo, Barnaba o Luca.' },
    es: { question: '¿Quién escribió la carta a los Hebreos?', options: ['Pablo', 'Pedro', 'Lucas', 'Desconocido'], explanation: 'La autoría de Hebreos es debatida y desconocida. Varios candidatos incluyen a Pablo, Apolos, Bernabé o Lucas.' },
    pt: { question: 'Quem escreveu a carta aos Hebreus?', options: ['Paulo', 'Pedro', 'Lucas', 'Desconhecido'], explanation: 'A autoria de Hebreus é debatida e desconhecida. Vários candidatos incluem Paulo, Apolo, Barnabé ou Lucas.' },
    fr: { question: 'Qui a écrit la lettre aux Hébreux?', options: ['Paul', 'Pierre', 'Luc', 'Inconnu'], explanation: 'L\'auteur d\'Hébreux est débattu et inconnu. Divers candidats incluent Paul, Apollos, Barnabas ou Luc.' }
  },
  n8: {
    en: { question: 'What does "Pentecost" mean?', options: ['Passover', 'Fifty days', 'New beginning', 'Harvest'], explanation: 'Pentecost means "fiftieth day," occurring 50 days after Passover. The Holy Spirit came on this Jewish feast day.' },
    it: { question: 'Cosa significa "Pentecoste"?', options: ['Pasqua', 'Cinquanta giorni', 'Nuovo inizio', 'Raccolto'], explanation: 'Pentecoste significa "cinquantesimo giorno," che si verifica 50 giorni dopo la Pasqua. Lo Spirito Santo venne in questo giorno di festa ebraica.' },
    es: { question: '¿Qué significa "Pentecostés"?', options: ['Pascua', 'Cincuenta días', 'Nuevo comienzo', 'Cosecha'], explanation: 'Pentecostés significa "quincuagésimo día," ocurriendo 50 días después de la Pascua. El Espíritu Santo vino en este día de fiesta judía.' },
    pt: { question: 'O que significa "Pentecostes"?', options: ['Páscoa', 'Cinquenta dias', 'Novo começo', 'Colheita'], explanation: 'Pentecostes significa "quinquagésimo dia," ocorrendo 50 dias após a Páscoa. O Espírito Santo veio neste dia de festa judaica.' },
    fr: { question: 'Que signifie "Pentecôte"?', options: ['Pâque', 'Cinquante jours', 'Nouveau départ', 'Moisson'], explanation: 'Pentecôte signifie "cinquantième jour," se produisant 50 jours après la Pâque. Le Saint-Esprit est venu ce jour de fête juive.' }
  },
  n9: {
    en: { question: 'Who was converted at Pentecost (approximately)?', options: ['120', '500', '3000', '5000'], explanation: 'About 3000 people were converted and baptized on the Day of Pentecost after Peter\'s sermon.' },
    it: { question: 'Quanti si convertirono a Pentecoste (circa)?', options: ['120', '500', '3000', '5000'], explanation: 'Circa 3000 persone si convertirono e furono battezzate il giorno di Pentecoste dopo il sermone di Pietro.' },
    es: { question: '¿Cuántos se convirtieron en Pentecostés (aproximadamente)?', options: ['120', '500', '3000', '5000'], explanation: 'Aproximadamente 3000 personas se convirtieron y fueron bautizadas en el día de Pentecostés después del sermón de Pedro.' },
    pt: { question: 'Quantos se converteram em Pentecostes (aproximadamente)?', options: ['120', '500', '3000', '5000'], explanation: 'Cerca de 3000 pessoas se converteram e foram batizadas no dia de Pentecostes após o sermão de Pedro.' },
    fr: { question: 'Combien se sont convertis à la Pentecôte (environ)?', options: ['120', '500', '3000', '5000'], explanation: 'Environ 3000 personnes se sont converties et ont été baptisées le jour de la Pentecôte après le sermon de Pierre.' }
  },
  n10: {
    en: { question: 'Who wrote "faith without works is dead"?', options: ['Paul', 'Peter', 'James', 'John'], explanation: 'James wrote this in his letter, emphasizing that genuine faith naturally produces good works as evidence.' },
    it: { question: 'Chi scrisse "la fede senza le opere è morta"?', options: ['Paolo', 'Pietro', 'Giacomo', 'Giovanni'], explanation: 'Giacomo scrisse questo nella sua lettera, enfatizzando che la fede genuina produce naturalmente buone opere come evidenza.' },
    es: { question: '¿Quién escribió "la fe sin obras está muerta"?', options: ['Pablo', 'Pedro', 'Santiago', 'Juan'], explanation: 'Santiago escribió esto en su carta, enfatizando que la fe genuina naturalmente produce buenas obras como evidencia.' },
    pt: { question: 'Quem escreveu "a fé sem obras é morta"?', options: ['Paulo', 'Pedro', 'Tiago', 'João'], explanation: 'Tiago escreveu isso em sua carta, enfatizando que a fé genuína naturalmente produz boas obras como evidência.' },
    fr: { question: 'Qui a écrit "la foi sans les œuvres est morte"?', options: ['Paul', 'Pierre', 'Jacques', 'Jean'], explanation: 'Jacques a écrit cela dans sa lettre, soulignant que la foi authentique produit naturellement de bonnes œuvres comme preuve.' }
  },
  n11: {
    en: { question: 'Where was Paul when he saw the "Macedonian vision"?', options: ['Corinth', 'Troas', 'Athens', 'Philippi'], explanation: 'Paul was in Troas when he had a vision of a Macedonian man begging him to come and help them.' },
    it: { question: 'Dove era Paolo quando ebbe la "visione macedone"?', options: ['Corinto', 'Troade', 'Atene', 'Filippi'], explanation: 'Paolo era a Troade quando ebbe una visione di un uomo macedone che lo supplicava di venire ad aiutarli.' },
    es: { question: '¿Dónde estaba Pablo cuando vio la "visión macedonia"?', options: ['Corinto', 'Troas', 'Atenas', 'Filipos'], explanation: 'Pablo estaba en Troas cuando tuvo una visión de un hombre macedonio rogándole que viniera a ayudarles.' },
    pt: { question: 'Onde estava Paulo quando viu a "visão macedônia"?', options: ['Corinto', 'Trôade', 'Atenas', 'Filipos'], explanation: 'Paulo estava em Trôade quando teve uma visão de um homem macedônio implorando que viesse ajudá-los.' },
    fr: { question: 'Où était Paul quand il a eu la "vision macédonienne"?', options: ['Corinthe', 'Troas', 'Athènes', 'Philippes'], explanation: 'Paul était à Troas quand il eut une vision d\'un homme macédonien le suppliant de venir les aider.' }
  },
  n12: {
    en: { question: 'Who fell asleep during Paul\'s sermon and fell from a window?', options: ['Timothy', 'Eutychus', 'Lydia', 'Silas'], explanation: 'Eutychus fell asleep during Paul\'s long sermon in Troas, fell from a third-story window, and was raised from the dead by Paul.' },
    it: { question: 'Chi si addormentò durante il sermone di Paolo e cadde dalla finestra?', options: ['Timoteo', 'Eutico', 'Lidia', 'Sila'], explanation: 'Eutico si addormentò durante il lungo sermone di Paolo a Troade, cadde dal terzo piano e fu risuscitato da Paolo.' },
    es: { question: '¿Quién se durmió durante el sermón de Pablo y cayó de una ventana?', options: ['Timoteo', 'Eutico', 'Lidia', 'Silas'], explanation: 'Eutico se durmió durante el largo sermón de Pablo en Troas, cayó desde un tercer piso y fue resucitado por Pablo.' },
    pt: { question: 'Quem adormeceu durante o sermão de Paulo e caiu da janela?', options: ['Timóteo', 'Êutico', 'Lídia', 'Silas'], explanation: 'Êutico adormeceu durante o longo sermão de Paulo em Trôade, caiu do terceiro andar e foi ressuscitado por Paulo.' },
    fr: { question: 'Qui s\'est endormi pendant le sermon de Paul et est tombé d\'une fenêtre?', options: ['Timothée', 'Eutyche', 'Lydie', 'Silas'], explanation: 'Eutyche s\'est endormi pendant le long sermon de Paul à Troas, est tombé du troisième étage et a été ressuscité par Paul.' }
  },
  n13: {
    en: { question: 'What island was Paul shipwrecked on?', options: ['Cyprus', 'Crete', 'Malta', 'Patmos'], explanation: 'Paul\'s ship was wrecked on the island of Malta on his voyage to Rome as a prisoner.' },
    it: { question: 'Su quale isola naufragò Paolo?', options: ['Cipro', 'Creta', 'Malta', 'Patmos'], explanation: 'La nave di Paolo naufragò sull\'isola di Malta durante il viaggio verso Roma come prigioniero.' },
    es: { question: '¿En qué isla naufragó Pablo?', options: ['Chipre', 'Creta', 'Malta', 'Patmos'], explanation: 'El barco de Pablo naufragó en la isla de Malta en su viaje a Roma como prisionero.' },
    pt: { question: 'Em qual ilha Paulo naufragou?', options: ['Chipre', 'Creta', 'Malta', 'Patmos'], explanation: 'O navio de Paulo naufragou na ilha de Malta em sua viagem a Roma como prisioneiro.' },
    fr: { question: 'Sur quelle île Paul a-t-il fait naufrage?', options: ['Chypre', 'Crète', 'Malte', 'Patmos'], explanation: 'Le navire de Paul a fait naufrage sur l\'île de Malte lors de son voyage vers Rome en tant que prisonnier.' }
  },
  n14: {
    en: { question: 'Who was the Roman centurion that was converted?', options: ['Cornelius', 'Julius', 'Claudius', 'Felix'], explanation: 'Cornelius, a centurion in Caesarea, was the first Gentile convert, baptized by Peter after a vision from God.' },
    it: { question: 'Chi era il centurione romano che si convertì?', options: ['Cornelio', 'Giulio', 'Claudio', 'Felice'], explanation: 'Cornelio, un centurione a Cesarea, fu il primo convertito gentile, battezzato da Pietro dopo una visione da Dio.' },
    es: { question: '¿Quién era el centurión romano que se convirtió?', options: ['Cornelio', 'Julio', 'Claudio', 'Félix'], explanation: 'Cornelio, un centurión en Cesarea, fue el primer converso gentil, bautizado por Pedro después de una visión de Dios.' },
    pt: { question: 'Quem era o centurião romano que se converteu?', options: ['Cornélio', 'Júlio', 'Cláudio', 'Félix'], explanation: 'Cornélio, um centurião em Cesareia, foi o primeiro convertido gentio, batizado por Pedro após uma visão de Deus.' },
    fr: { question: 'Qui était le centurion romain qui s\'est converti?', options: ['Corneille', 'Jules', 'Claude', 'Félix'], explanation: 'Corneille, un centurion à Césarée, fut le premier converti païen, baptisé par Pierre après une vision de Dieu.' }
  },
  n15: {
    en: { question: 'What is the last word in the Bible?', options: ['Amen', 'Forever', 'Jesus', 'Glory'], explanation: 'The Bible ends with "Amen" in Revelation 22:21, affirming the prayer that the grace of Jesus be with all believers.' },
    it: { question: 'Qual è l\'ultima parola della Bibbia?', options: ['Amen', 'Per sempre', 'Gesù', 'Gloria'], explanation: 'La Bibbia termina con "Amen" in Apocalisse 22:21, affermando la preghiera che la grazia di Gesù sia con tutti i credenti.' },
    es: { question: '¿Cuál es la última palabra de la Biblia?', options: ['Amén', 'Para siempre', 'Jesús', 'Gloria'], explanation: 'La Biblia termina con "Amén" en Apocalipsis 22:21, afirmando la oración de que la gracia de Jesús esté con todos los creyentes.' },
    pt: { question: 'Qual é a última palavra da Bíblia?', options: ['Amém', 'Para sempre', 'Jesus', 'Glória'], explanation: 'A Bíblia termina com "Amém" em Apocalipse 22:21, afirmando a oração de que a graça de Jesus esteja com todos os crentes.' },
    fr: { question: 'Quel est le dernier mot de la Bible?', options: ['Amen', 'À jamais', 'Jésus', 'Gloire'], explanation: 'La Bible se termine par "Amen" dans Apocalypse 22:21, affirmant la prière que la grâce de Jésus soit avec tous les croyants.' }
  },
  n16: {
    en: { question: 'Who wrote three letters in the New Testament?', options: ['Peter', 'John', 'Paul', 'James'], explanation: 'John wrote three letters: 1, 2, and 3 John, dealing with love, truth, and warnings against false teachers.' },
    it: { question: 'Chi scrisse tre lettere nel Nuovo Testamento?', options: ['Pietro', 'Giovanni', 'Paolo', 'Giacomo'], explanation: 'Giovanni scrisse tre lettere: 1, 2 e 3 Giovanni, trattando amore, verità e avvertimenti contro i falsi maestri.' },
    es: { question: '¿Quién escribió tres cartas en el Nuevo Testamento?', options: ['Pedro', 'Juan', 'Pablo', 'Santiago'], explanation: 'Juan escribió tres cartas: 1, 2 y 3 Juan, tratando sobre amor, verdad y advertencias contra falsos maestros.' },
    pt: { question: 'Quem escreveu três cartas no Novo Testamento?', options: ['Pedro', 'João', 'Paulo', 'Tiago'], explanation: 'João escreveu três cartas: 1, 2 e 3 João, tratando de amor, verdade e avisos contra falsos mestres.' },
    fr: { question: 'Qui a écrit trois lettres dans le Nouveau Testament?', options: ['Pierre', 'Jean', 'Paul', 'Jacques'], explanation: 'Jean a écrit trois lettres: 1, 2 et 3 Jean, traitant de l\'amour, de la vérité et des avertissements contre les faux enseignants.' }
  },
  n17: {
    en: { question: 'Where was the first church established?', options: ['Jerusalem', 'Antioch', 'Rome', 'Ephesus'], explanation: 'The first church was established in Jerusalem after Pentecost, when 3000 believers were baptized.' },
    it: { question: 'Dove fu fondata la prima chiesa?', options: ['Gerusalemme', 'Antiochia', 'Roma', 'Efeso'], explanation: 'La prima chiesa fu fondata a Gerusalemme dopo la Pentecoste, quando 3000 credenti furono battezzati.' },
    es: { question: '¿Dónde se estableció la primera iglesia?', options: ['Jerusalén', 'Antioquía', 'Roma', 'Éfeso'], explanation: 'La primera iglesia se estableció en Jerusalén después de Pentecostés, cuando 3000 creyentes fueron bautizados.' },
    pt: { question: 'Onde a primeira igreja foi estabelecida?', options: ['Jerusalém', 'Antioquia', 'Roma', 'Éfeso'], explanation: 'A primeira igreja foi estabelecida em Jerusalém após o Pentecostes, quando 3000 crentes foram batizados.' },
    fr: { question: 'Où la première église a-t-elle été établie?', options: ['Jérusalem', 'Antioche', 'Rome', 'Éphèse'], explanation: 'La première église a été établie à Jérusalem après la Pentecôte, quand 3000 croyants ont été baptisés.' }
  },
  n18: {
    en: { question: 'Who wrote the shortest letter in the New Testament?', options: ['Paul', 'John', 'Peter', 'Jude'], explanation: '2 John is the shortest book in the New Testament with only 13 verses, written by the apostle John.' },
    it: { question: 'Chi scrisse la lettera più corta del Nuovo Testamento?', options: ['Paolo', 'Giovanni', 'Pietro', 'Giuda'], explanation: '2 Giovanni è il libro più corto del Nuovo Testamento con solo 13 versetti, scritto dall\'apostolo Giovanni.' },
    es: { question: '¿Quién escribió la carta más corta del Nuevo Testamento?', options: ['Pablo', 'Juan', 'Pedro', 'Judas'], explanation: '2 Juan es el libro más corto del Nuevo Testamento con solo 13 versículos, escrito por el apóstol Juan.' },
    pt: { question: 'Quem escreveu a carta mais curta do Novo Testamento?', options: ['Paulo', 'João', 'Pedro', 'Judas'], explanation: '2 João é o livro mais curto do Novo Testamento com apenas 13 versículos, escrito pelo apóstolo João.' },
    fr: { question: 'Qui a écrit la lettre la plus courte du Nouveau Testament?', options: ['Paul', 'Jean', 'Pierre', 'Jude'], explanation: '2 Jean est le livre le plus court du Nouveau Testament avec seulement 13 versets, écrit par l\'apôtre Jean.' }
  },
  n19: {
    en: { question: 'What was the first Gentile church?', options: ['Rome', 'Corinth', 'Antioch', 'Ephesus'], explanation: 'The church at Antioch was the first predominantly Gentile church and where believers were first called Christians.' },
    it: { question: 'Quale fu la prima chiesa dei Gentili?', options: ['Roma', 'Corinto', 'Antiochia', 'Efeso'], explanation: 'La chiesa di Antiochia fu la prima chiesa prevalentemente gentile e dove i credenti furono chiamati cristiani per la prima volta.' },
    es: { question: '¿Cuál fue la primera iglesia gentil?', options: ['Roma', 'Corinto', 'Antioquía', 'Éfeso'], explanation: 'La iglesia en Antioquía fue la primera iglesia predominantemente gentil y donde los creyentes fueron llamados cristianos por primera vez.' },
    pt: { question: 'Qual foi a primeira igreja gentílica?', options: ['Roma', 'Corinto', 'Antioquia', 'Éfeso'], explanation: 'A igreja em Antioquia foi a primeira igreja predominantemente gentílica e onde os crentes foram chamados de cristãos pela primeira vez.' },
    fr: { question: 'Quelle fut la première église païenne?', options: ['Rome', 'Corinthe', 'Antioche', 'Éphèse'], explanation: 'L\'église d\'Antioche fut la première église à prédominance païenne et où les croyants furent appelés chrétiens pour la première fois.' }
  },
  n20: {
    en: { question: 'Who was the brother of Jesus who wrote a letter?', options: ['John', 'James', 'Jude', 'Both James and Jude'], explanation: 'Both James and Jude were half-brothers of Jesus who each wrote a letter that became part of the New Testament.' },
    it: { question: 'Chi era il fratello di Gesù che scrisse una lettera?', options: ['Giovanni', 'Giacomo', 'Giuda', 'Sia Giacomo che Giuda'], explanation: 'Sia Giacomo che Giuda erano fratellastri di Gesù che scrissero ciascuno una lettera che divenne parte del Nuovo Testamento.' },
    es: { question: '¿Quién era el hermano de Jesús que escribió una carta?', options: ['Juan', 'Santiago', 'Judas', 'Tanto Santiago como Judas'], explanation: 'Tanto Santiago como Judas eran medio hermanos de Jesús, cada uno escribió una carta que se convirtió en parte del Nuevo Testamento.' },
    pt: { question: 'Quem era o irmão de Jesus que escreveu uma carta?', options: ['João', 'Tiago', 'Judas', 'Tanto Tiago quanto Judas'], explanation: 'Tanto Tiago quanto Judas eram meio-irmãos de Jesus que escreveram cada um uma carta que se tornou parte do Novo Testamento.' },
    fr: { question: 'Qui était le frère de Jésus qui a écrit une lettre?', options: ['Jean', 'Jacques', 'Jude', 'Jacques et Jude'], explanation: 'Jacques et Jude étaient tous deux demi-frères de Jésus et chacun a écrit une lettre qui fait partie du Nouveau Testament.' }
  },
  n21: {
    en: { question: 'Where did Paul spend two years under house arrest?', options: ['Jerusalem', 'Caesarea', 'Rome', 'Ephesus'], explanation: 'Paul spent two years under house arrest in Rome, where he continued to preach and write letters.' },
    it: { question: 'Dove Paolo trascorse due anni agli arresti domiciliari?', options: ['Gerusalemme', 'Cesarea', 'Roma', 'Efeso'], explanation: 'Paolo trascorse due anni agli arresti domiciliari a Roma, dove continuò a predicare e scrivere lettere.' },
    es: { question: '¿Dónde pasó Pablo dos años bajo arresto domiciliario?', options: ['Jerusalén', 'Cesarea', 'Roma', 'Éfeso'], explanation: 'Pablo pasó dos años bajo arresto domiciliario en Roma, donde continuó predicando y escribiendo cartas.' },
    pt: { question: 'Onde Paulo passou dois anos em prisão domiciliar?', options: ['Jerusalém', 'Cesareia', 'Roma', 'Éfeso'], explanation: 'Paulo passou dois anos em prisão domiciliar em Roma, onde continuou a pregar e escrever cartas.' },
    fr: { question: 'Où Paul a-t-il passé deux ans en résidence surveillée?', options: ['Jérusalem', 'Césarée', 'Rome', 'Éphèse'], explanation: 'Paul a passé deux ans en résidence surveillée à Rome, où il a continué à prêcher et à écrire des lettres.' }
  },
  n22: {
    en: { question: 'Who was the silversmith who opposed Paul in Ephesus?', options: ['Demetrius', 'Alexander', 'Tertullus', 'Apollos'], explanation: 'Demetrius, a silversmith who made shrines to Artemis, started a riot against Paul because his preaching hurt their business.' },
    it: { question: 'Chi era l\'argentiere che si oppose a Paolo a Efeso?', options: ['Demetrio', 'Alessandro', 'Tertullo', 'Apollo'], explanation: 'Demetrio, un argentiere che fabbricava tempietti di Artemide, provocò una sommossa contro Paolo perché la sua predicazione danneggiava i loro affari.' },
    es: { question: '¿Quién era el platero que se opuso a Pablo en Éfeso?', options: ['Demetrio', 'Alejandro', 'Tértulo', 'Apolos'], explanation: 'Demetrio, un platero que hacía templos a Artemisa, inició un motín contra Pablo porque su predicación perjudicaba su negocio.' },
    pt: { question: 'Quem era o ourives que se opôs a Paulo em Éfeso?', options: ['Demétrio', 'Alexandre', 'Tértulo', 'Apolo'], explanation: 'Demétrio, um ourives que fazia santuários para Ártemis, iniciou uma revolta contra Paulo porque sua pregação prejudicava seus negócios.' },
    fr: { question: 'Qui était l\'orfèvre qui s\'est opposé à Paul à Éphèse?', options: ['Démétrius', 'Alexandre', 'Tertullus', 'Apollos'], explanation: 'Démétrius, un orfèvre qui fabriquait des temples à Artémis, a déclenché une émeute contre Paul parce que sa prédication nuisait à leurs affaires.' }
  },
  n23: {
    en: { question: 'What does "Maranatha" mean?', options: ['Praise God', 'Come, Lord', 'Amen', 'Hallelujah'], explanation: 'Maranatha is an Aramaic phrase meaning "Come, Lord" or "Our Lord comes," expressing hope in Christ\'s return.' },
    it: { question: 'Cosa significa "Maranatha"?', options: ['Lode a Dio', 'Vieni, Signore', 'Amen', 'Alleluia'], explanation: 'Maranatha è una frase aramaica che significa "Vieni, Signore" o "Il nostro Signore viene," esprimendo speranza nel ritorno di Cristo.' },
    es: { question: '¿Qué significa "Maranatha"?', options: ['Alabado sea Dios', 'Ven, Señor', 'Amén', 'Aleluya'], explanation: 'Maranatha es una frase aramea que significa "Ven, Señor" o "Nuestro Señor viene," expresando esperanza en el regreso de Cristo.' },
    pt: { question: 'O que significa "Maranata"?', options: ['Louvado seja Deus', 'Vem, Senhor', 'Amém', 'Aleluia'], explanation: 'Maranata é uma frase aramaica que significa "Vem, Senhor" ou "Nosso Senhor vem," expressando esperança no retorno de Cristo.' },
    fr: { question: 'Que signifie "Maranatha"?', options: ['Louange à Dieu', 'Viens, Seigneur', 'Amen', 'Alléluia'], explanation: 'Maranatha est une expression araméenne signifiant "Viens, Seigneur" ou "Notre Seigneur vient," exprimant l\'espoir du retour du Christ.' }
  },
  n24: {
    en: { question: 'Who was the first European convert?', options: ['Cornelius', 'Lydia', 'Timothy', 'Phoebe'], explanation: 'Lydia, a seller of purple cloth from Thyatira, was Paul\'s first convert in Europe, in the city of Philippi.' },
    it: { question: 'Chi fu il primo convertito europeo?', options: ['Cornelio', 'Lidia', 'Timoteo', 'Febe'], explanation: 'Lidia, una venditrice di porpora di Tiatira, fu la prima convertita di Paolo in Europa, nella città di Filippi.' },
    es: { question: '¿Quién fue el primer converso europeo?', options: ['Cornelio', 'Lidia', 'Timoteo', 'Febe'], explanation: 'Lidia, una vendedora de púrpura de Tiatira, fue la primera conversa de Pablo en Europa, en la ciudad de Filipos.' },
    pt: { question: 'Quem foi o primeiro convertido europeu?', options: ['Cornélio', 'Lídia', 'Timóteo', 'Febe'], explanation: 'Lídia, uma vendedora de púrpura de Tiatira, foi a primeira convertida de Paulo na Europa, na cidade de Filipos.' },
    fr: { question: 'Qui fut le premier converti européen?', options: ['Corneille', 'Lydie', 'Timothée', 'Phoebé'], explanation: 'Lydie, une marchande de pourpre de Thyatire, fut la première convertie de Paul en Europe, dans la ville de Philippes.' }
  },
  n25: {
    en: { question: 'What number represents the beast in Revelation?', options: ['555', '616', '666', '777'], explanation: '666 is the number of the beast in Revelation 13:18, representing ultimate human rebellion against God.' },
    it: { question: 'Quale numero rappresenta la bestia nell\'Apocalisse?', options: ['555', '616', '666', '777'], explanation: '666 è il numero della bestia in Apocalisse 13:18, che rappresenta la ribellione umana definitiva contro Dio.' },
    es: { question: '¿Qué número representa a la bestia en Apocalipsis?', options: ['555', '616', '666', '777'], explanation: '666 es el número de la bestia en Apocalipsis 13:18, representando la rebelión humana definitiva contra Dios.' },
    pt: { question: 'Qual número representa a besta no Apocalipse?', options: ['555', '616', '666', '777'], explanation: '666 é o número da besta em Apocalipse 13:18, representando a rebelião humana definitiva contra Deus.' },
    fr: { question: 'Quel nombre représente la bête dans l\'Apocalypse?', options: ['555', '616', '666', '777'], explanation: '666 est le nombre de la bête dans Apocalypse 13:18, représentant la rébellion humaine ultime contre Dieu.' }
  }
};

// Merged translations including all categories
const allTranslations: QuestionTranslations = {
  ...questionTranslations,
  ...apocalypseTranslations,
  ...actsTranslations,
  ...biblicalCharactersTranslations
};

export function getTranslatedQuestion(
  id: string,
  language: Language,
  fallback: { question: string; options: string[]; explanation?: string }
): { question: string; options: string[]; explanation?: string } {
  const translation = allTranslations[id];
  if (translation && translation[language]) {
    return translation[language];
  }
  // Return English if available, otherwise fallback
  if (translation && translation.en) {
    return translation.en;
  }
  return fallback;
}
