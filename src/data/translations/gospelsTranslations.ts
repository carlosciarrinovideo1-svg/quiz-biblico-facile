import { Language } from '../../contexts/LanguageContext';

interface QuestionTranslation {
  question: string;
  options: string[];
  explanation?: string;
}

type GospelsTranslations = {
  [key: string]: {
    [lang in Language]?: QuestionTranslation;
  };
};

export const gospelsTranslations: GospelsTranslations = {
  'gq1': {
    en: { question: 'What did the wise men bring to baby Jesus?', options: ['Silver, gold, myrrh', 'Gold, frankincense, myrrh', 'Gold, silver, incense', 'Frankincense, spices, oil'] },
    it: { question: 'Cosa portarono i magi al bambino Gesù?', options: ['Argento, oro, mirra', 'Oro, incenso, mirra', 'Oro, argento, incenso', 'Incenso, spezie, olio'] },
    es: { question: '¿Qué trajeron los magos al niño Jesús?', options: ['Plata, oro, mirra', 'Oro, incienso, mirra', 'Oro, plata, incienso', 'Incienso, especias, aceite'] },
    pt: { question: 'O que os magos trouxeram ao menino Jesus?', options: ['Prata, ouro, mirra', 'Ouro, incenso, mirra', 'Ouro, prata, incenso', 'Incenso, especiarias, óleo'] },
    fr: { question: 'Qu\'ont apporté les mages à l\'enfant Jésus?', options: ['Argent, or, myrrhe', 'Or, encens, myrrhe', 'Or, argent, encens', 'Encens, épices, huile'] }
  },
  'gq2': {
    en: { question: 'Where did Jesus grow up?', options: ['Bethlehem', 'Jerusalem', 'Nazareth', 'Capernaum'] },
    it: { question: 'Dove crebbe Gesù?', options: ['Betlemme', 'Gerusalemme', 'Nazaret', 'Cafarnao'] },
    es: { question: '¿Dónde creció Jesús?', options: ['Belén', 'Jerusalén', 'Nazaret', 'Capernaúm'] },
    pt: { question: 'Onde Jesus cresceu?', options: ['Belém', 'Jerusalém', 'Nazaré', 'Cafarnaum'] },
    fr: { question: 'Où Jésus a-t-il grandi?', options: ['Bethléem', 'Jérusalem', 'Nazareth', 'Capharnaüm'] }
  },
  'gq3': {
    en: { question: 'What was Peter\'s original name?', options: ['Simon', 'Saul', 'Cephas', 'Andrew'] },
    it: { question: 'Qual era il nome originale di Pietro?', options: ['Simone', 'Saulo', 'Cefa', 'Andrea'] },
    es: { question: '¿Cuál era el nombre original de Pedro?', options: ['Simón', 'Saulo', 'Cefas', 'Andrés'] },
    pt: { question: 'Qual era o nome original de Pedro?', options: ['Simão', 'Saulo', 'Cefas', 'André'] },
    fr: { question: 'Quel était le nom original de Pierre?', options: ['Simon', 'Saul', 'Céphas', 'André'] }
  },
  'gq4': {
    en: { question: 'Who was the tax collector Jesus called from the tax booth?', options: ['Zacchaeus', 'Matthew', 'Judas', 'Simon'] },
    it: { question: 'Chi era l\'esattore delle tasse che Gesù chiamò dal banco delle imposte?', options: ['Zaccheo', 'Matteo', 'Giuda', 'Simone'] },
    es: { question: '¿Quién era el recaudador de impuestos que Jesús llamó desde la mesa de impuestos?', options: ['Zaqueo', 'Mateo', 'Judas', 'Simón'] },
    pt: { question: 'Quem era o cobrador de impostos que Jesus chamou da banca de impostos?', options: ['Zaqueu', 'Mateus', 'Judas', 'Simão'] },
    fr: { question: 'Qui était le collecteur d\'impôts que Jésus a appelé du bureau des impôts?', options: ['Zachée', 'Matthieu', 'Judas', 'Simon'] }
  },
  'gq5': {
    en: { question: 'What did Jesus say to the storm on the Sea of Galilee?', options: ['Be still', 'Peace, be still', 'Calm down', 'Stop'] },
    it: { question: 'Cosa disse Gesù alla tempesta sul Mar di Galilea?', options: ['Calmati', 'Taci, calmati', 'Fermati', 'Basta'] },
    es: { question: '¿Qué le dijo Jesús a la tormenta en el Mar de Galilea?', options: ['Cálmate', 'Calla, enmudece', 'Tranquilo', 'Para'] },
    pt: { question: 'O que Jesus disse à tempestade no Mar da Galileia?', options: ['Acalma-te', 'Cala-te, aquieta-te', 'Calma', 'Para'] },
    fr: { question: 'Qu\'a dit Jésus à la tempête sur la mer de Galilée?', options: ['Calme-toi', 'Silence, tais-toi', 'Calme', 'Arrête'] }
  },
  'gq6': {
    en: { question: 'How many lepers did Jesus heal, but only one returned to thank Him?', options: ['5', '7', '10', '12'] },
    it: { question: 'Quanti lebbrosi guarì Gesù, ma solo uno tornò a ringraziarlo?', options: ['5', '7', '10', '12'] },
    es: { question: '¿Cuántos leprosos sanó Jesús, pero solo uno volvió a darle gracias?', options: ['5', '7', '10', '12'] },
    pt: { question: 'Quantos leprosos Jesus curou, mas apenas um voltou para agradecer?', options: ['5', '7', '10', '12'] },
    fr: { question: 'Combien de lépreux Jésus a-t-il guéris, mais un seul est revenu le remercier?', options: ['5', '7', '10', '12'] }
  },
  'gq7': {
    en: { question: 'What did Jesus say is "the light of the body"?', options: ['The heart', 'The soul', 'The eye', 'The mind'] },
    it: { question: 'Cosa disse Gesù essere "la lampada del corpo"?', options: ['Il cuore', 'L\'anima', 'L\'occhio', 'La mente'] },
    es: { question: '¿Qué dijo Jesús que es "la lámpara del cuerpo"?', options: ['El corazón', 'El alma', 'El ojo', 'La mente'] },
    pt: { question: 'O que Jesus disse ser "a lâmpada do corpo"?', options: ['O coração', 'A alma', 'O olho', 'A mente'] },
    fr: { question: 'Qu\'est-ce que Jésus a dit être "la lampe du corps"?', options: ['Le cœur', 'L\'âme', 'L\'œil', 'L\'esprit'] }
  },
  'gq8': {
    en: { question: 'Who climbed a tree to see Jesus?', options: ['Matthew', 'Nicodemus', 'Zacchaeus', 'Bartimaeus'] },
    it: { question: 'Chi salì su un albero per vedere Gesù?', options: ['Matteo', 'Nicodemo', 'Zaccheo', 'Bartimeo'] },
    es: { question: '¿Quién subió a un árbol para ver a Jesús?', options: ['Mateo', 'Nicodemo', 'Zaqueo', 'Bartimeo'] },
    pt: { question: 'Quem subiu numa árvore para ver Jesus?', options: ['Mateus', 'Nicodemos', 'Zaqueu', 'Bartimeu'] },
    fr: { question: 'Qui est monté dans un arbre pour voir Jésus?', options: ['Matthieu', 'Nicodème', 'Zachée', 'Bartimée'] }
  },
  'gq9': {
    en: { question: 'What type of tree did Zacchaeus climb?', options: ['Fig tree', 'Olive tree', 'Sycamore tree', 'Palm tree'] },
    it: { question: 'Che tipo di albero scalò Zaccheo?', options: ['Fico', 'Ulivo', 'Sicomoro', 'Palma'] },
    es: { question: '¿Qué tipo de árbol subió Zaqueo?', options: ['Higuera', 'Olivo', 'Sicómoro', 'Palmera'] },
    pt: { question: 'Que tipo de árvore Zaqueu subiu?', options: ['Figueira', 'Oliveira', 'Sicômoro', 'Palmeira'] },
    fr: { question: 'Quel type d\'arbre Zachée a-t-il grimpé?', options: ['Figuier', 'Olivier', 'Sycomore', 'Palmier'] }
  },
  'gq10': {
    en: { question: 'Who came to Jesus at night to ask about being born again?', options: ['Joseph of Arimathea', 'Nicodemus', 'A Pharisee', 'A Sadducee'] },
    it: { question: 'Chi venne da Gesù di notte per chiedere della nuova nascita?', options: ['Giuseppe di Arimatea', 'Nicodemo', 'Un fariseo', 'Un sadduceo'] },
    es: { question: '¿Quién vino a Jesús de noche para preguntar sobre nacer de nuevo?', options: ['José de Arimatea', 'Nicodemo', 'Un fariseo', 'Un saduceo'] },
    pt: { question: 'Quem veio a Jesus à noite para perguntar sobre nascer de novo?', options: ['José de Arimateia', 'Nicodemos', 'Um fariseu', 'Um saduceu'] },
    fr: { question: 'Qui est venu vers Jésus la nuit pour demander comment naître de nouveau?', options: ['Joseph d\'Arimathée', 'Nicodème', 'Un pharisien', 'Un sadducéen'] }
  },
  'gq11': {
    en: { question: 'At what wedding did Jesus perform His first sign?', options: ['Bethlehem', 'Jerusalem', 'Cana', 'Nazareth'] },
    it: { question: 'A quale matrimonio Gesù compì il suo primo segno?', options: ['Betlemme', 'Gerusalemme', 'Cana', 'Nazaret'] },
    es: { question: '¿En qué boda Jesús realizó su primera señal?', options: ['Belén', 'Jerusalén', 'Caná', 'Nazaret'] },
    pt: { question: 'Em qual casamento Jesus realizou seu primeiro sinal?', options: ['Belém', 'Jerusalém', 'Caná', 'Nazaré'] },
    fr: { question: 'À quel mariage Jésus a-t-il accompli son premier signe?', options: ['Bethléem', 'Jérusalem', 'Cana', 'Nazareth'] }
  },
  'gq12': {
    en: { question: 'How many water jars were used at the wedding in Cana?', options: ['4', '6', '7', '12'] },
    it: { question: 'Quante giare d\'acqua furono usate alle nozze di Cana?', options: ['4', '6', '7', '12'] },
    es: { question: '¿Cuántas tinajas de agua se usaron en la boda de Caná?', options: ['4', '6', '7', '12'] },
    pt: { question: 'Quantas talhas de água foram usadas no casamento em Caná?', options: ['4', '6', '7', '12'] },
    fr: { question: 'Combien de jarres d\'eau ont été utilisées aux noces de Cana?', options: ['4', '6', '7', '12'] }
  },
  'gq13': {
    en: { question: 'Who washed Jesus\' feet with her tears and dried them with her hair?', options: ['Mary Magdalene', 'Martha', 'A sinful woman', 'Mary of Bethany'] },
    it: { question: 'Chi lavò i piedi di Gesù con le sue lacrime e li asciugò con i capelli?', options: ['Maria Maddalena', 'Marta', 'Una donna peccatrice', 'Maria di Betania'] },
    es: { question: '¿Quién lavó los pies de Jesús con sus lágrimas y los secó con su cabello?', options: ['María Magdalena', 'Marta', 'Una mujer pecadora', 'María de Betania'] },
    pt: { question: 'Quem lavou os pés de Jesus com suas lágrimas e os enxugou com seus cabelos?', options: ['Maria Madalena', 'Marta', 'Uma mulher pecadora', 'Maria de Betânia'] },
    fr: { question: 'Qui a lavé les pieds de Jésus avec ses larmes et les a essuyés avec ses cheveux?', options: ['Marie-Madeleine', 'Marthe', 'Une femme pécheresse', 'Marie de Béthanie'] }
  },
  'gq14': {
    en: { question: 'What did Jesus tell the Samaritan woman at the well?', options: ['I am the Messiah', 'I give living water', 'Believe in God', 'Follow me'] },
    it: { question: 'Cosa disse Gesù alla donna samaritana al pozzo?', options: ['Io sono il Messia', 'Io do acqua viva', 'Credi in Dio', 'Seguimi'] },
    es: { question: '¿Qué le dijo Jesús a la mujer samaritana junto al pozo?', options: ['Yo soy el Mesías', 'Yo doy agua viva', 'Cree en Dios', 'Sígueme'] },
    pt: { question: 'O que Jesus disse à mulher samaritana no poço?', options: ['Eu sou o Messias', 'Eu dou água viva', 'Creia em Deus', 'Segue-me'] },
    fr: { question: 'Qu\'a dit Jésus à la femme samaritaine au puits?', options: ['Je suis le Messie', 'Je donne l\'eau vive', 'Crois en Dieu', 'Suis-moi'] }
  },
  'gq15': {
    en: { question: 'How many baskets of leftovers were collected after feeding 5000?', options: ['7', '12', '5', '10'] },
    it: { question: 'Quante ceste di avanzi furono raccolte dopo aver sfamato i 5000?', options: ['7', '12', '5', '10'] },
    es: { question: '¿Cuántas canastas de sobras se recogieron después de alimentar a los 5000?', options: ['7', '12', '5', '10'] },
    pt: { question: 'Quantos cestos de sobras foram recolhidos depois de alimentar os 5000?', options: ['7', '12', '5', '10'] },
    fr: { question: 'Combien de paniers de restes ont été recueillis après avoir nourri les 5000?', options: ['7', '12', '5', '10'] }
  },
  'gq16': {
    en: { question: 'How many baskets were collected after feeding 4000?', options: ['5', '7', '12', '10'] },
    it: { question: 'Quante ceste furono raccolte dopo aver sfamato i 4000?', options: ['5', '7', '12', '10'] },
    es: { question: '¿Cuántas canastas se recogieron después de alimentar a los 4000?', options: ['5', '7', '12', '10'] },
    pt: { question: 'Quantos cestos foram recolhidos depois de alimentar os 4000?', options: ['5', '7', '12', '10'] },
    fr: { question: 'Combien de paniers ont été recueillis après avoir nourri les 4000?', options: ['5', '7', '12', '10'] }
  },
  'gq17': {
    en: { question: 'Who did Jesus say was "the rock" on which He would build His church?', options: ['James', 'John', 'Peter', 'Andrew'] },
    it: { question: 'Chi disse Gesù essere "la roccia" su cui avrebbe edificato la sua chiesa?', options: ['Giacomo', 'Giovanni', 'Pietro', 'Andrea'] },
    es: { question: '¿Quién dijo Jesús que era "la roca" sobre la cual edificaría su iglesia?', options: ['Santiago', 'Juan', 'Pedro', 'Andrés'] },
    pt: { question: 'Quem Jesus disse ser "a rocha" sobre a qual edificaria sua igreja?', options: ['Tiago', 'João', 'Pedro', 'André'] },
    fr: { question: 'Qui Jésus a-t-il dit être "le rocher" sur lequel Il bâtirait son Église?', options: ['Jacques', 'Jean', 'Pierre', 'André'] }
  },
  'gq18': {
    en: { question: 'On which mountain was Jesus transfigured?', options: ['Mount Sinai', 'Mount of Olives', 'A high mountain', 'Mount Carmel'] },
    it: { question: 'Su quale monte fu trasfigurato Gesù?', options: ['Monte Sinai', 'Monte degli Ulivi', 'Un alto monte', 'Monte Carmelo'] },
    es: { question: '¿En qué monte fue transfigurado Jesús?', options: ['Monte Sinaí', 'Monte de los Olivos', 'Un monte alto', 'Monte Carmelo'] },
    pt: { question: 'Em qual monte Jesus foi transfigurado?', options: ['Monte Sinai', 'Monte das Oliveiras', 'Um monte alto', 'Monte Carmelo'] },
    fr: { question: 'Sur quelle montagne Jésus a-t-il été transfiguré?', options: ['Mont Sinaï', 'Mont des Oliviers', 'Une haute montagne', 'Mont Carmel'] }
  },
  'gq19': {
    en: { question: 'Who appeared with Jesus at the Transfiguration?', options: ['Abraham and Isaac', 'Moses and Elijah', 'David and Solomon', 'Isaiah and Jeremiah'] },
    it: { question: 'Chi apparve con Gesù alla Trasfigurazione?', options: ['Abramo e Isacco', 'Mosè ed Elia', 'Davide e Salomone', 'Isaia e Geremia'] },
    es: { question: '¿Quién apareció con Jesús en la Transfiguración?', options: ['Abraham e Isaac', 'Moisés y Elías', 'David y Salomón', 'Isaías y Jeremías'] },
    pt: { question: 'Quem apareceu com Jesus na Transfiguração?', options: ['Abraão e Isaque', 'Moisés e Elias', 'Davi e Salomão', 'Isaías e Jeremias'] },
    fr: { question: 'Qui est apparu avec Jésus à la Transfiguration?', options: ['Abraham et Isaac', 'Moïse et Élie', 'David et Salomon', 'Ésaïe et Jérémie'] }
  },
  'gq20': {
    en: { question: 'How much did Judas receive for betraying Jesus?', options: ['20 pieces of silver', '30 pieces of silver', '40 pieces of silver', '50 pieces of silver'] },
    it: { question: 'Quanto ricevette Giuda per tradire Gesù?', options: ['20 sicli d\'argento', '30 sicli d\'argento', '40 sicli d\'argento', '50 sicli d\'argento'] },
    es: { question: '¿Cuánto recibió Judas por traicionar a Jesús?', options: ['20 piezas de plata', '30 piezas de plata', '40 piezas de plata', '50 piezas de plata'] },
    pt: { question: 'Quanto Judas recebeu por trair Jesus?', options: ['20 moedas de prata', '30 moedas de prata', '40 moedas de prata', '50 moedas de prata'] },
    fr: { question: 'Combien Judas a-t-il reçu pour trahir Jésus?', options: ['20 pièces d\'argent', '30 pièces d\'argent', '40 pièces d\'argent', '50 pièces d\'argent'] }
  },
  'gq21': {
    en: { question: 'What did Jesus wash at the Last Supper?', options: ['The disciples\' hands', 'The disciples\' feet', 'The cups', 'The table'] },
    it: { question: 'Cosa lavò Gesù all\'Ultima Cena?', options: ['Le mani dei discepoli', 'I piedi dei discepoli', 'Le coppe', 'La tavola'] },
    es: { question: '¿Qué lavó Jesús en la Última Cena?', options: ['Las manos de los discípulos', 'Los pies de los discípulos', 'Las copas', 'La mesa'] },
    pt: { question: 'O que Jesus lavou na Última Ceia?', options: ['As mãos dos discípulos', 'Os pés dos discípulos', 'As taças', 'A mesa'] },
    fr: { question: 'Qu\'a lavé Jésus lors de la Dernière Cène?', options: ['Les mains des disciples', 'Les pieds des disciples', 'Les coupes', 'La table'] }
  },
  'gq22': {
    en: { question: 'What garden did Jesus pray in before His arrest?', options: ['Garden of Eden', 'Garden of Gethsemane', 'King\'s Garden', 'Garden of the Tomb'] },
    it: { question: 'In quale giardino pregò Gesù prima del suo arresto?', options: ['Giardino dell\'Eden', 'Giardino del Getsemani', 'Giardino del Re', 'Giardino della Tomba'] },
    es: { question: '¿En qué jardín oró Jesús antes de su arresto?', options: ['Jardín del Edén', 'Jardín de Getsemaní', 'Jardín del Rey', 'Jardín del Sepulcro'] },
    pt: { question: 'Em qual jardim Jesus orou antes de sua prisão?', options: ['Jardim do Éden', 'Jardim do Getsêmani', 'Jardim do Rei', 'Jardim do Túmulo'] },
    fr: { question: 'Dans quel jardin Jésus a-t-il prié avant son arrestation?', options: ['Jardin d\'Éden', 'Jardin de Gethsémané', 'Jardin du Roi', 'Jardin du Tombeau'] }
  },
  'gq23': {
    en: { question: 'Who cut off the ear of the high priest\'s servant?', options: ['James', 'John', 'Peter', 'Judas'] },
    it: { question: 'Chi tagliò l\'orecchio del servo del sommo sacerdote?', options: ['Giacomo', 'Giovanni', 'Pietro', 'Giuda'] },
    es: { question: '¿Quién cortó la oreja del siervo del sumo sacerdote?', options: ['Santiago', 'Juan', 'Pedro', 'Judas'] },
    pt: { question: 'Quem cortou a orelha do servo do sumo sacerdote?', options: ['Tiago', 'João', 'Pedro', 'Judas'] },
    fr: { question: 'Qui a coupé l\'oreille du serviteur du grand prêtre?', options: ['Jacques', 'Jean', 'Pierre', 'Judas'] }
  },
  'gq24': {
    en: { question: 'What was the name of the high priest\'s servant whose ear was cut off?', options: ['Malchus', 'Caiaphas', 'Annas', 'Marcus'] },
    it: { question: 'Qual era il nome del servo del sommo sacerdote a cui fu tagliato l\'orecchio?', options: ['Malco', 'Caifa', 'Anna', 'Marco'] },
    es: { question: '¿Cuál era el nombre del siervo del sumo sacerdote cuya oreja fue cortada?', options: ['Malco', 'Caifás', 'Anás', 'Marcos'] },
    pt: { question: 'Qual era o nome do servo do sumo sacerdote cuja orelha foi cortada?', options: ['Malco', 'Caifás', 'Anás', 'Marcos'] },
    fr: { question: 'Quel était le nom du serviteur du grand prêtre dont l\'oreille fut coupée?', options: ['Malchus', 'Caïphe', 'Anne', 'Marcus'] }
  },
  'gq25': {
    en: { question: 'Who released a prisoner instead of Jesus?', options: ['Herod', 'Pilate', 'The Sanhedrin', 'The crowd'] },
    it: { question: 'Chi liberò un prigioniero al posto di Gesù?', options: ['Erode', 'Pilato', 'Il Sinedrio', 'La folla'] },
    es: { question: '¿Quién liberó a un prisionero en lugar de Jesús?', options: ['Herodes', 'Pilato', 'El Sanedrín', 'La multitud'] },
    pt: { question: 'Quem libertou um prisioneiro em vez de Jesus?', options: ['Herodes', 'Pilatos', 'O Sinédrio', 'A multidão'] },
    fr: { question: 'Qui a libéré un prisonnier à la place de Jésus?', options: ['Hérode', 'Pilate', 'Le Sanhédrin', 'La foule'] }
  },
  'gq26': {
    en: { question: 'What was the name of the prisoner released instead of Jesus?', options: ['Barnabas', 'Barabbas', 'Bartholomew', 'Bartimaeus'] },
    it: { question: 'Qual era il nome del prigioniero liberato al posto di Gesù?', options: ['Barnaba', 'Barabba', 'Bartolomeo', 'Bartimeo'] },
    es: { question: '¿Cuál era el nombre del prisionero liberado en lugar de Jesús?', options: ['Bernabé', 'Barrabás', 'Bartolomé', 'Bartimeo'] },
    pt: { question: 'Qual era o nome do prisioneiro libertado em vez de Jesus?', options: ['Barnabé', 'Barrabás', 'Bartolomeu', 'Bartimeu'] },
    fr: { question: 'Quel était le nom du prisonnier libéré à la place de Jésus?', options: ['Barnabas', 'Barabbas', 'Barthélemy', 'Bartimée'] }
  },
  'gq27': {
    en: { question: 'What was written above Jesus on the cross?', options: ['King of the Jews', 'Son of God', 'The Messiah', 'Savior of the World'] },
    it: { question: 'Cosa era scritto sopra Gesù sulla croce?', options: ['Re dei Giudei', 'Figlio di Dio', 'Il Messia', 'Salvatore del Mondo'] },
    es: { question: '¿Qué estaba escrito sobre Jesús en la cruz?', options: ['Rey de los Judíos', 'Hijo de Dios', 'El Mesías', 'Salvador del Mundo'] },
    pt: { question: 'O que estava escrito acima de Jesus na cruz?', options: ['Rei dos Judeus', 'Filho de Deus', 'O Messias', 'Salvador do Mundo'] },
    fr: { question: 'Qu\'était-il écrit au-dessus de Jésus sur la croix?', options: ['Roi des Juifs', 'Fils de Dieu', 'Le Messie', 'Sauveur du Monde'] }
  },
  'gq28': {
    en: { question: 'What did Jesus say on the cross meaning "It is finished"?', options: ['Eloi, Eloi', 'Tetelestai', 'Talitha cumi', 'Maranatha'] },
    it: { question: 'Cosa disse Gesù sulla croce che significa "È compiuto"?', options: ['Eloi, Eloi', 'Tetelestai', 'Talitha cumi', 'Maranatha'] },
    es: { question: '¿Qué dijo Jesús en la cruz que significa "Consumado es"?', options: ['Eloi, Eloi', 'Tetelestai', 'Talitha cumi', 'Maranatha'] },
    pt: { question: 'O que Jesus disse na cruz que significa "Está consumado"?', options: ['Eloi, Eloi', 'Tetelestai', 'Talitha cumi', 'Maranatha'] },
    fr: { question: 'Qu\'a dit Jésus sur la croix signifiant "Tout est accompli"?', options: ['Eloi, Eloi', 'Tetelestai', 'Talitha cumi', 'Maranatha'] }
  },
  'gq29': {
    en: { question: 'Who asked for Jesus\' body to bury it?', options: ['Nicodemus', 'Joseph of Arimathea', 'Peter', 'John'] },
    it: { question: 'Chi chiese il corpo di Gesù per seppellirlo?', options: ['Nicodemo', 'Giuseppe di Arimatea', 'Pietro', 'Giovanni'] },
    es: { question: '¿Quién pidió el cuerpo de Jesús para sepultarlo?', options: ['Nicodemo', 'José de Arimatea', 'Pedro', 'Juan'] },
    pt: { question: 'Quem pediu o corpo de Jesus para sepultá-lo?', options: ['Nicodemos', 'José de Arimateia', 'Pedro', 'João'] },
    fr: { question: 'Qui a demandé le corps de Jésus pour l\'ensevelir?', options: ['Nicodème', 'Joseph d\'Arimathée', 'Pierre', 'Jean'] }
  },
  'gq30': {
    en: { question: 'Who brought spices to anoint Jesus\' body?', options: ['Mary Magdalene', 'Nicodemus', 'Joseph', 'The disciples'] },
    it: { question: 'Chi portò gli aromi per ungere il corpo di Gesù?', options: ['Maria Maddalena', 'Nicodemo', 'Giuseppe', 'I discepoli'] },
    es: { question: '¿Quién trajo especias para ungir el cuerpo de Jesús?', options: ['María Magdalena', 'Nicodemo', 'José', 'Los discípulos'] },
    pt: { question: 'Quem trouxe especiarias para ungir o corpo de Jesus?', options: ['Maria Madalena', 'Nicodemos', 'José', 'Os discípulos'] },
    fr: { question: 'Qui a apporté des aromates pour oindre le corps de Jésus?', options: ['Marie-Madeleine', 'Nicodème', 'Joseph', 'Les disciples'] }
  },
  'gq31': {
    en: { question: 'How many days did Jesus appear to His disciples after resurrection?', options: ['7', '30', '40', '50'] },
    it: { question: 'Per quanti giorni Gesù apparve ai discepoli dopo la risurrezione?', options: ['7', '30', '40', '50'] },
    es: { question: '¿Cuántos días apareció Jesús a sus discípulos después de la resurrección?', options: ['7', '30', '40', '50'] },
    pt: { question: 'Por quantos dias Jesus apareceu aos discípulos após a ressurreição?', options: ['7', '30', '40', '50'] },
    fr: { question: 'Pendant combien de jours Jésus est-il apparu à ses disciples après la résurrection?', options: ['7', '30', '40', '50'] }
  },
  'gq32': {
    en: { question: 'Where did Jesus tell the disciples to wait for the Holy Spirit?', options: ['Galilee', 'Bethlehem', 'Jerusalem', 'Nazareth'] },
    it: { question: 'Dove disse Gesù ai discepoli di aspettare lo Spirito Santo?', options: ['Galilea', 'Betlemme', 'Gerusalemme', 'Nazaret'] },
    es: { question: '¿Dónde les dijo Jesús a los discípulos que esperaran al Espíritu Santo?', options: ['Galilea', 'Belén', 'Jerusalén', 'Nazaret'] },
    pt: { question: 'Onde Jesus disse aos discípulos para esperar pelo Espírito Santo?', options: ['Galileia', 'Belém', 'Jerusalém', 'Nazaré'] },
    fr: { question: 'Où Jésus a-t-il dit aux disciples d\'attendre le Saint-Esprit?', options: ['Galilée', 'Bethléem', 'Jérusalem', 'Nazareth'] }
  },
  'gq33': {
    en: { question: 'Which Gospel does not include Jesus\' birth narrative?', options: ['Matthew', 'Mark', 'Luke', 'John'] },
    it: { question: 'Quale Vangelo non include il racconto della nascita di Gesù?', options: ['Matteo', 'Marco', 'Luca', 'Giovanni'] },
    es: { question: '¿Qué Evangelio no incluye la narrativa del nacimiento de Jesús?', options: ['Mateo', 'Marcos', 'Lucas', 'Juan'] },
    pt: { question: 'Qual Evangelho não inclui a narrativa do nascimento de Jesus?', options: ['Mateus', 'Marcos', 'Lucas', 'João'] },
    fr: { question: 'Quel Évangile n\'inclut pas le récit de la naissance de Jésus?', options: ['Matthieu', 'Marc', 'Luc', 'Jean'] }
  },
  'gq34': {
    en: { question: 'Who announced Jesus\' birth to the shepherds?', options: ['Gabriel', 'Michael', 'An angel of the Lord', 'A multitude of angels'] },
    it: { question: 'Chi annunciò la nascita di Gesù ai pastori?', options: ['Gabriele', 'Michele', 'Un angelo del Signore', 'Una moltitudine di angeli'] },
    es: { question: '¿Quién anunció el nacimiento de Jesús a los pastores?', options: ['Gabriel', 'Miguel', 'Un ángel del Señor', 'Una multitud de ángeles'] },
    pt: { question: 'Quem anunciou o nascimento de Jesus aos pastores?', options: ['Gabriel', 'Miguel', 'Um anjo do Senhor', 'Uma multidão de anjos'] },
    fr: { question: 'Qui a annoncé la naissance de Jésus aux bergers?', options: ['Gabriel', 'Michel', 'Un ange du Seigneur', 'Une multitude d\'anges'] }
  },
  'gq35': {
    en: { question: 'Who prophesied over baby Jesus in the temple?', options: ['Simeon and Anna', 'Zechariah', 'Elizabeth', 'John the Baptist'] },
    it: { question: 'Chi profetizzò sul bambino Gesù nel tempio?', options: ['Simeone e Anna', 'Zaccaria', 'Elisabetta', 'Giovanni Battista'] },
    es: { question: '¿Quién profetizó sobre el niño Jesús en el templo?', options: ['Simeón y Ana', 'Zacarías', 'Elisabet', 'Juan el Bautista'] },
    pt: { question: 'Quem profetizou sobre o menino Jesus no templo?', options: ['Simeão e Ana', 'Zacarias', 'Isabel', 'João Batista'] },
    fr: { question: 'Qui a prophétisé sur l\'enfant Jésus dans le temple?', options: ['Siméon et Anne', 'Zacharie', 'Élisabeth', 'Jean-Baptiste'] }
  },
  'gq36': {
    en: { question: 'How old was Jesus when He was found teaching in the temple?', options: ['10', '12', '14', '16'] },
    it: { question: 'Quanti anni aveva Gesù quando fu trovato a insegnare nel tempio?', options: ['10', '12', '14', '16'] },
    es: { question: '¿Cuántos años tenía Jesús cuando fue encontrado enseñando en el templo?', options: ['10', '12', '14', '16'] },
    pt: { question: 'Quantos anos Jesus tinha quando foi encontrado ensinando no templo?', options: ['10', '12', '14', '16'] },
    fr: { question: 'Quel âge avait Jésus quand Il a été trouvé enseignant dans le temple?', options: ['10', '12', '14', '16'] }
  },
  'gq37': {
    en: { question: 'What was John the Baptist\'s food in the wilderness?', options: ['Bread and fish', 'Locusts and wild honey', 'Figs and dates', 'Manna'] },
    it: { question: 'Qual era il cibo di Giovanni Battista nel deserto?', options: ['Pane e pesce', 'Locuste e miele selvatico', 'Fichi e datteri', 'Manna'] },
    es: { question: '¿Cuál era la comida de Juan el Bautista en el desierto?', options: ['Pan y pescado', 'Langostas y miel silvestre', 'Higos y dátiles', 'Maná'] },
    pt: { question: 'Qual era a comida de João Batista no deserto?', options: ['Pão e peixe', 'Gafanhotos e mel silvestre', 'Figos e tâmaras', 'Maná'] },
    fr: { question: 'Quelle était la nourriture de Jean-Baptiste dans le désert?', options: ['Pain et poisson', 'Sauterelles et miel sauvage', 'Figues et dattes', 'Manne'] }
  },
  'gq38': {
    en: { question: 'What descended on Jesus at His baptism?', options: ['Fire', 'An angel', 'The Holy Spirit as a dove', 'A voice'] },
    it: { question: 'Cosa discese su Gesù al suo battesimo?', options: ['Fuoco', 'Un angelo', 'Lo Spirito Santo come una colomba', 'Una voce'] },
    es: { question: '¿Qué descendió sobre Jesús en su bautismo?', options: ['Fuego', 'Un ángel', 'El Espíritu Santo como una paloma', 'Una voz'] },
    pt: { question: 'O que desceu sobre Jesus em seu batismo?', options: ['Fogo', 'Um anjo', 'O Espírito Santo como uma pomba', 'Uma voz'] },
    fr: { question: 'Qu\'est descendu sur Jésus à son baptême?', options: ['Du feu', 'Un ange', 'Le Saint-Esprit comme une colombe', 'Une voix'] }
  },
  'gq39': {
    en: { question: 'What was the first temptation of Jesus in the wilderness?', options: ['Worship Satan', 'Turn stones to bread', 'Jump from temple', 'Rule the kingdoms'] },
    it: { question: 'Quale fu la prima tentazione di Gesù nel deserto?', options: ['Adorare Satana', 'Trasformare le pietre in pane', 'Gettarsi dal tempio', 'Regnare sui regni'] },
    es: { question: '¿Cuál fue la primera tentación de Jesús en el desierto?', options: ['Adorar a Satanás', 'Convertir piedras en pan', 'Tirarse del templo', 'Gobernar los reinos'] },
    pt: { question: 'Qual foi a primeira tentação de Jesus no deserto?', options: ['Adorar Satanás', 'Transformar pedras em pão', 'Saltar do templo', 'Governar os reinos'] },
    fr: { question: 'Quelle fut la première tentation de Jésus dans le désert?', options: ['Adorer Satan', 'Changer les pierres en pain', 'Sauter du temple', 'Régner sur les royaumes'] }
  },
  'gq40': {
    en: { question: 'Who were the first disciples Jesus called?', options: ['Peter and Andrew', 'James and John', 'Philip and Nathanael', 'Matthew and Thomas'] },
    it: { question: 'Chi furono i primi discepoli che Gesù chiamò?', options: ['Pietro e Andrea', 'Giacomo e Giovanni', 'Filippo e Natanaele', 'Matteo e Tommaso'] },
    es: { question: '¿Quiénes fueron los primeros discípulos que Jesús llamó?', options: ['Pedro y Andrés', 'Santiago y Juan', 'Felipe y Natanael', 'Mateo y Tomás'] },
    pt: { question: 'Quem foram os primeiros discípulos que Jesus chamou?', options: ['Pedro e André', 'Tiago e João', 'Filipe e Natanael', 'Mateus e Tomé'] },
    fr: { question: 'Qui furent les premiers disciples que Jésus a appelés?', options: ['Pierre et André', 'Jacques et Jean', 'Philippe et Nathanaël', 'Matthieu et Thomas'] }
  },
  'gq41': {
    en: { question: 'What did Jesus tell the fishermen disciples He would make them?', options: ['Shepherds of men', 'Fishers of men', 'Teachers of men', 'Leaders of men'] },
    it: { question: 'Cosa disse Gesù ai discepoli pescatori che li avrebbe resi?', options: ['Pastori di uomini', 'Pescatori di uomini', 'Maestri di uomini', 'Capi di uomini'] },
    es: { question: '¿Qué les dijo Jesús a los discípulos pescadores que los haría?', options: ['Pastores de hombres', 'Pescadores de hombres', 'Maestros de hombres', 'Líderes de hombres'] },
    pt: { question: 'O que Jesus disse aos discípulos pescadores que Ele os faria?', options: ['Pastores de homens', 'Pescadores de homens', 'Mestres de homens', 'Líderes de homens'] },
    fr: { question: 'Qu\'a dit Jésus aux disciples pêcheurs qu\'Il ferait d\'eux?', options: ['Bergers d\'hommes', 'Pêcheurs d\'hommes', 'Enseignants d\'hommes', 'Dirigeants d\'hommes'] }
  },
  'gq42': {
    en: { question: 'What did Jesus heal at Capernaum on the Sabbath?', options: ['A blind man', 'A paralytic', 'A man with a withered hand', 'A demon-possessed man'] },
    it: { question: 'Cosa guarì Gesù a Cafarnao di sabato?', options: ['Un cieco', 'Un paralitico', 'Un uomo con la mano secca', 'Un indemoniato'] },
    es: { question: '¿Qué sanó Jesús en Capernaúm en el día de reposo?', options: ['Un ciego', 'Un paralítico', 'Un hombre con la mano seca', 'Un endemoniado'] },
    pt: { question: 'O que Jesus curou em Cafarnaum no sábado?', options: ['Um cego', 'Um paralítico', 'Um homem com a mão ressequida', 'Um endemoninhado'] },
    fr: { question: 'Qu\'a guéri Jésus à Capharnaüm le jour du sabbat?', options: ['Un aveugle', 'Un paralytique', 'Un homme à la main sèche', 'Un démoniaque'] }
  },
  'gq43': {
    en: { question: 'Whose mother-in-law did Jesus heal from fever?', options: ['John\'s', 'James\'', 'Peter\'s', 'Andrew\'s'] },
    it: { question: 'La suocera di chi guarì Gesù dalla febbre?', options: ['Di Giovanni', 'Di Giacomo', 'Di Pietro', 'Di Andrea'] },
    es: { question: '¿A la suegra de quién sanó Jesús de la fiebre?', options: ['De Juan', 'De Santiago', 'De Pedro', 'De Andrés'] },
    pt: { question: 'A sogra de quem Jesus curou da febre?', options: ['De João', 'De Tiago', 'De Pedro', 'De André'] },
    fr: { question: 'La belle-mère de qui Jésus a-t-il guérie de la fièvre?', options: ['De Jean', 'De Jacques', 'De Pierre', 'D\'André'] }
  },
  'gq44': {
    en: { question: 'How was the paralytic lowered to Jesus?', options: ['Through the door', 'Through the roof', 'Through a window', 'By the crowd'] },
    it: { question: 'Come fu calato il paralitico davanti a Gesù?', options: ['Attraverso la porta', 'Dal tetto', 'Attraverso una finestra', 'Dalla folla'] },
    es: { question: '¿Cómo bajaron al paralítico hasta Jesús?', options: ['Por la puerta', 'Por el techo', 'Por una ventana', 'Por la multitud'] },
    pt: { question: 'Como o paralítico foi descido até Jesus?', options: ['Pela porta', 'Pelo telhado', 'Por uma janela', 'Pela multidão'] },
    fr: { question: 'Comment le paralytique a-t-il été descendu vers Jésus?', options: ['Par la porte', 'Par le toit', 'Par une fenêtre', 'Par la foule'] }
  },
  'gq45': {
    en: { question: 'What did Jesus first say to the paralytic?', options: ['Rise and walk', 'Your sins are forgiven', 'Have faith', 'Be healed'] },
    it: { question: 'Cosa disse prima Gesù al paralitico?', options: ['Alzati e cammina', 'I tuoi peccati ti sono perdonati', 'Abbi fede', 'Sii guarito'] },
    es: { question: '¿Qué le dijo primero Jesús al paralítico?', options: ['Levántate y anda', 'Tus pecados te son perdonados', 'Ten fe', 'Sé sanado'] },
    pt: { question: 'O que Jesus disse primeiro ao paralítico?', options: ['Levanta-te e anda', 'Os teus pecados te são perdoados', 'Tenha fé', 'Seja curado'] },
    fr: { question: 'Qu\'a dit Jésus en premier au paralytique?', options: ['Lève-toi et marche', 'Tes péchés te sont pardonnés', 'Aie la foi', 'Sois guéri'] }
  },
  'gq46': {
    en: { question: 'What parable describes seeds falling on different soils?', options: ['The Mustard Seed', 'The Sower', 'The Wheat and Tares', 'The Growing Seed'] },
    it: { question: 'Quale parabola descrive i semi che cadono su diversi terreni?', options: ['Il Granello di Senape', 'Il Seminatore', 'Il Grano e la Zizzania', 'Il Seme che Cresce'] },
    es: { question: '¿Qué parábola describe semillas cayendo en diferentes suelos?', options: ['La Semilla de Mostaza', 'El Sembrador', 'El Trigo y la Cizaña', 'La Semilla que Crece'] },
    pt: { question: 'Qual parábola descreve sementes caindo em diferentes solos?', options: ['O Grão de Mostarda', 'O Semeador', 'O Trigo e o Joio', 'A Semente que Cresce'] },
    fr: { question: 'Quelle parabole décrit des semences tombant sur différents sols?', options: ['La Graine de Moutarde', 'Le Semeur', 'Le Blé et l\'Ivraie', 'La Semence qui Pousse'] }
  },
  'gq47': {
    en: { question: 'In the parable of the Prodigal Son, what did the father give the returning son?', options: ['Money', 'A robe, ring, and sandals', 'A house', 'Servants'] },
    it: { question: 'Nella parabola del Figliol Prodigo, cosa diede il padre al figlio che tornava?', options: ['Denaro', 'Una veste, un anello e sandali', 'Una casa', 'Servi'] },
    es: { question: 'En la parábola del Hijo Pródigo, ¿qué le dio el padre al hijo que regresaba?', options: ['Dinero', 'Una túnica, un anillo y sandalias', 'Una casa', 'Siervos'] },
    pt: { question: 'Na parábola do Filho Pródigo, o que o pai deu ao filho que retornava?', options: ['Dinheiro', 'Uma túnica, um anel e sandálias', 'Uma casa', 'Servos'] },
    fr: { question: 'Dans la parabole du Fils Prodigue, qu\'a donné le père au fils qui revenait?', options: ['De l\'argent', 'Une robe, un anneau et des sandales', 'Une maison', 'Des serviteurs'] }
  },
  'gq48': {
    en: { question: 'Who asked Jesus "Who is my neighbor?"', options: ['A Pharisee', 'A rich young ruler', 'A lawyer', 'A Sadducee'] },
    it: { question: 'Chi chiese a Gesù "Chi è il mio prossimo?"', options: ['Un fariseo', 'Un giovane ricco', 'Un dottore della legge', 'Un sadduceo'] },
    es: { question: '¿Quién preguntó a Jesús "¿Quién es mi prójimo?"', options: ['Un fariseo', 'Un joven rico', 'Un intérprete de la ley', 'Un saduceo'] },
    pt: { question: 'Quem perguntou a Jesus "Quem é o meu próximo?"', options: ['Um fariseu', 'Um jovem rico', 'Um doutor da lei', 'Um saduceu'] },
    fr: { question: 'Qui a demandé à Jésus "Qui est mon prochain?"', options: ['Un pharisien', 'Un jeune homme riche', 'Un docteur de la loi', 'Un sadducéen'] }
  },
  'gq49': {
    en: { question: 'In the Good Samaritan parable, who first passed by the wounded man?', options: ['A Samaritan', 'A priest', 'A Levite', 'A Pharisee'] },
    it: { question: 'Nella parabola del Buon Samaritano, chi passò per primo accanto all\'uomo ferito?', options: ['Un Samaritano', 'Un sacerdote', 'Un Levita', 'Un fariseo'] },
    es: { question: 'En la parábola del Buen Samaritano, ¿quién pasó primero junto al hombre herido?', options: ['Un samaritano', 'Un sacerdote', 'Un levita', 'Un fariseo'] },
    pt: { question: 'Na parábola do Bom Samaritano, quem passou primeiro pelo homem ferido?', options: ['Um samaritano', 'Um sacerdote', 'Um levita', 'Um fariseu'] },
    fr: { question: 'Dans la parabole du Bon Samaritain, qui est passé en premier à côté de l\'homme blessé?', options: ['Un Samaritain', 'Un prêtre', 'Un Lévite', 'Un pharisien'] }
  },
  'gq50': {
    en: { question: 'What did Jesus say to Martha about her worry?', options: ['Work harder', 'One thing is needed', 'Mary is wrong', 'Serve me first'] },
    it: { question: 'Cosa disse Gesù a Marta riguardo alla sua preoccupazione?', options: ['Lavora di più', 'Una cosa sola è necessaria', 'Maria ha torto', 'Servimi prima'] },
    es: { question: '¿Qué le dijo Jesús a Marta sobre su preocupación?', options: ['Trabaja más', 'Solo una cosa es necesaria', 'María está equivocada', 'Sírveme primero'] },
    pt: { question: 'O que Jesus disse a Marta sobre sua preocupação?', options: ['Trabalhe mais', 'Uma só coisa é necessária', 'Maria está errada', 'Sirva-me primeiro'] },
    fr: { question: 'Qu\'a dit Jésus à Marthe concernant son inquiétude?', options: ['Travaille plus', 'Une seule chose est nécessaire', 'Marie a tort', 'Sers-moi d\'abord'] }
  }
};
