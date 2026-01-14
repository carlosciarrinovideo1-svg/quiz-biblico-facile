import { Language } from '@/contexts/LanguageContext';

type QuestionTranslation = {
  question: string;
  options: string[];
  explanation?: string;
};

type TranslationMap = {
  [lang in Language]?: QuestionTranslation;
};

export const minorProphetsTranslations: Record<string, TranslationMap> = {
  // Osea (Hosea)
  minp1: {
    en: { question: 'Who was Hosea\'s wife according to God\'s command?', options: ['Ruth', 'Gomer', 'Esther', 'Deborah'] },
    it: { question: 'Chi fu la moglie di Osea secondo il comando di Dio?', options: ['Rut', 'Gomer', 'Ester', 'Debora'] },
    es: { question: '¿Quién fue la esposa de Oseas según el mandato de Dios?', options: ['Rut', 'Gomer', 'Ester', 'Débora'] },
    pt: { question: 'Quem foi a esposa de Oséias segundo o comando de Deus?', options: ['Rute', 'Gômer', 'Ester', 'Débora'] },
    fr: { question: 'Qui était la femme d\'Osée selon l\'ordre de Dieu?', options: ['Ruth', 'Gomer', 'Esther', 'Débora'] },
  },
  minp2: {
    en: { question: 'What did Hosea\'s marriage to Gomer represent?', options: ['Israel\'s faithfulness', 'Israel\'s unfaithfulness to God', 'Prosperity', 'War'] },
    it: { question: 'Cosa rappresentava il matrimonio di Osea con Gomer?', options: ['La fedeltà di Israele', 'L\'infedeltà di Israele verso Dio', 'La prosperità', 'La guerra'] },
    es: { question: '¿Qué representaba el matrimonio de Oseas con Gomer?', options: ['La fidelidad de Israel', 'La infidelidad de Israel hacia Dios', 'La prosperidad', 'La guerra'] },
    pt: { question: 'O que o casamento de Oséias com Gômer representava?', options: ['A fidelidade de Israel', 'A infidelidade de Israel para com Deus', 'A prosperidade', 'A guerra'] },
    fr: { question: 'Que représentait le mariage d\'Osée avec Gomer?', options: ['La fidélité d\'Israël', 'L\'infidélité d\'Israël envers Dieu', 'La prospérité', 'La guerre'] },
  },
  minp3: {
    en: { question: 'What was the name of Hosea\'s first child?', options: ['Lo-Ammi', 'Lo-Ruhamah', 'Jezreel', 'Ephraim'] },
    it: { question: 'Come si chiamava il primo figlio di Osea?', options: ['Lo-Ammi', 'Lo-Rucama', 'Izreel', 'Efraim'] },
    es: { question: '¿Cómo se llamaba el primer hijo de Oseas?', options: ['Lo-ammi', 'Lo-ruhama', 'Jezreel', 'Efraín'] },
    pt: { question: 'Qual era o nome do primeiro filho de Oséias?', options: ['Lo-Ami', 'Lo-Ruama', 'Jizreel', 'Efraim'] },
    fr: { question: 'Quel était le nom du premier enfant d\'Osée?', options: ['Lo-Ammi', 'Lo-Ruchama', 'Jizréel', 'Éphraïm'] },
  },
  minp4: {
    en: { question: 'According to Hosea 6:6, what does God desire more than sacrifices?', options: ['Burnt offerings', 'Mercy', 'Offerings', 'Fasting'] },
    it: { question: 'Secondo Osea 6:6, cosa desidera Dio più dei sacrifici?', options: ['Olocausti', 'Misericordia', 'Offerte', 'Digiuni'] },
    es: { question: 'Según Oseas 6:6, ¿qué desea Dios más que los sacrificios?', options: ['Holocaustos', 'Misericordia', 'Ofrendas', 'Ayunos'] },
    pt: { question: 'Segundo Oséias 6:6, o que Deus deseja mais do que sacrifícios?', options: ['Holocaustos', 'Misericórdia', 'Ofertas', 'Jejuns'] },
    fr: { question: 'Selon Osée 6:6, que désire Dieu plus que les sacrifices?', options: ['Des holocaustes', 'La miséricorde', 'Des offrandes', 'Des jeûnes'] },
  },
  minp5: {
    en: { question: 'According to Hosea 11:1, who did God call out of Egypt?', options: ['Moses', 'His son', 'Abraham', 'Jacob'] },
    it: { question: 'Secondo Osea 11:1, chi chiamò Dio fuori dall\'Egitto?', options: ['Mosè', 'Suo figlio', 'Abramo', 'Giacobbe'] },
    es: { question: 'Según Oseas 11:1, ¿a quién llamó Dios fuera de Egipto?', options: ['Moisés', 'Su hijo', 'Abraham', 'Jacob'] },
    pt: { question: 'Segundo Oséias 11:1, quem Deus chamou do Egito?', options: ['Moisés', 'Seu filho', 'Abraão', 'Jacó'] },
    fr: { question: 'Selon Osée 11:1, qui Dieu a-t-il appelé hors d\'Égypte?', options: ['Moïse', 'Son fils', 'Abraham', 'Jacob'] },
  },

  // Gioele (Joel)
  minp6: {
    en: { question: 'What plague did Joel describe in chapter 1?', options: ['Drought', 'Locusts', 'Hail', 'Earthquakes'] },
    it: { question: 'Quale piaga descrisse Gioele nel capitolo 1?', options: ['La siccità', 'Le locuste', 'La grandine', 'I terremoti'] },
    es: { question: '¿Qué plaga describió Joel en el capítulo 1?', options: ['La sequía', 'Las langostas', 'El granizo', 'Los terremotos'] },
    pt: { question: 'Qual praga Joel descreveu no capítulo 1?', options: ['A seca', 'Os gafanhotos', 'A saraiva', 'Os terremotos'] },
    fr: { question: 'Quelle plaie Joël a-t-il décrite au chapitre 1?', options: ['La sécheresse', 'Les sauterelles', 'La grêle', 'Les tremblements de terre'] },
  },
  minp7: {
    en: { question: 'According to Joel 2:28, what will God pour out on all flesh?', options: ['His wrath', 'His Spirit', 'His blessing', 'Rain'] },
    it: { question: 'Secondo Gioele 2:28, cosa spanderà Dio su ogni carne?', options: ['La sua ira', 'Il suo Spirito', 'La sua benedizione', 'La pioggia'] },
    es: { question: 'Según Joel 2:28, ¿qué derramará Dios sobre toda carne?', options: ['Su ira', 'Su Espíritu', 'Su bendición', 'La lluvia'] },
    pt: { question: 'Segundo Joel 2:28, o que Deus derramará sobre toda carne?', options: ['Sua ira', 'Seu Espírito', 'Sua bênção', 'A chuva'] },
    fr: { question: 'Selon Joël 2:28, que Dieu répandra-t-il sur toute chair?', options: ['Sa colère', 'Son Esprit', 'Sa bénédiction', 'La pluie'] },
  },
  minp8: {
    en: { question: 'What will sons and daughters do according to Joel?', options: ['Judge', 'Prophesy', 'Sing', 'Lament'] },
    it: { question: 'Cosa profetizzeranno i figli e le figlie secondo Gioele?', options: ['Giudizio', 'Profezie', 'Canti', 'Lamenti'] },
    es: { question: '¿Qué harán los hijos y las hijas según Joel?', options: ['Juzgar', 'Profetizar', 'Cantar', 'Lamentar'] },
    pt: { question: 'O que os filhos e filhas farão segundo Joel?', options: ['Julgar', 'Profetizar', 'Cantar', 'Lamentar'] },
    fr: { question: 'Que feront les fils et les filles selon Joël?', options: ['Juger', 'Prophétiser', 'Chanter', 'Se lamenter'] },
  },
  minp9: {
    en: { question: 'Which valley does Joel mention for the final judgment?', options: ['Valley of Jehoshaphat', 'Valley of Jezreel', 'Valley of Achor', 'Valley of Elah'] },
    it: { question: 'Quale valle menziona Gioele per il giudizio finale?', options: ['Valle di Giosafat', 'Valle di Izreel', 'Valle di Acor', 'Valle di Ela'] },
    es: { question: '¿Qué valle menciona Joel para el juicio final?', options: ['Valle de Josafat', 'Valle de Jezreel', 'Valle de Acor', 'Valle de Ela'] },
    pt: { question: 'Qual vale Joel menciona para o juízo final?', options: ['Vale de Josafá', 'Vale de Jezreel', 'Vale de Acor', 'Vale de Elá'] },
    fr: { question: 'Quelle vallée Joël mentionne-t-il pour le jugement final?', options: ['Vallée de Josaphat', 'Vallée de Jizréel', 'Vallée d\'Acor', 'Vallée d\'Éla'] },
  },

  // Amos
  minp10: {
    en: { question: 'What was Amos\'s profession before becoming a prophet?', options: ['Priest', 'Shepherd and sycamore fig farmer', 'Fisherman', 'Scribe'] },
    it: { question: 'Qual era la professione di Amos prima di essere profeta?', options: ['Sacerdote', 'Pastore e coltivatore di sicomori', 'Pescatore', 'Scriba'] },
    es: { question: '¿Cuál era la profesión de Amós antes de ser profeta?', options: ['Sacerdote', 'Pastor y cultivador de sicómoros', 'Pescador', 'Escriba'] },
    pt: { question: 'Qual era a profissão de Amós antes de ser profeta?', options: ['Sacerdote', 'Pastor e cultivador de sicômoros', 'Pescador', 'Escriba'] },
    fr: { question: 'Quelle était la profession d\'Amos avant d\'être prophète?', options: ['Prêtre', 'Berger et cultivateur de sycomores', 'Pêcheur', 'Scribe'] },
  },
  minp11: {
    en: { question: 'From which city did Amos come?', options: ['Jerusalem', 'Samaria', 'Tekoa', 'Bethlehem'] },
    it: { question: 'Da quale città proveniva Amos?', options: ['Gerusalemme', 'Samaria', 'Tecoa', 'Betlemme'] },
    es: { question: '¿De qué ciudad era Amós?', options: ['Jerusalén', 'Samaria', 'Tecoa', 'Belén'] },
    pt: { question: 'De qual cidade era Amós?', options: ['Jerusalém', 'Samaria', 'Tecoa', 'Belém'] },
    fr: { question: 'De quelle ville venait Amos?', options: ['Jérusalem', 'Samarie', 'Tekoa', 'Bethléem'] },
  },
  minp12: {
    en: { question: 'Against which kingdom did Amos mainly prophesy?', options: ['Judah', 'Israel', 'Edom', 'Moab'] },
    it: { question: 'Contro quale regno profetizzò principalmente Amos?', options: ['Giuda', 'Israele', 'Edom', 'Moab'] },
    es: { question: '¿Contra qué reino profetizó principalmente Amós?', options: ['Judá', 'Israel', 'Edom', 'Moab'] },
    pt: { question: 'Contra qual reino Amós profetizou principalmente?', options: ['Judá', 'Israel', 'Edom', 'Moabe'] },
    fr: { question: 'Contre quel royaume Amos a-t-il principalement prophétisé?', options: ['Juda', 'Israël', 'Édom', 'Moab'] },
  },
  minp13: {
    en: { question: 'According to Amos 5:24, what should flow like waters?', options: ['Mercy', 'Justice', 'Peace', 'Love'] },
    it: { question: 'Secondo Amos 5:24, cosa deve scorrere come acque?', options: ['La misericordia', 'La giustizia', 'La pace', 'L\'amore'] },
    es: { question: 'Según Amós 5:24, ¿qué debe fluir como las aguas?', options: ['La misericordia', 'La justicia', 'La paz', 'El amor'] },
    pt: { question: 'Segundo Amós 5:24, o que deve correr como as águas?', options: ['A misericórdia', 'A justiça', 'A paz', 'O amor'] },
    fr: { question: 'Selon Amos 5:24, qu\'est-ce qui doit couler comme les eaux?', options: ['La miséricorde', 'La justice', 'La paix', 'L\'amour'] },
  },
  minp14: {
    en: { question: 'What did Amos see in the vision of chapter 7?', options: ['A basket of fruit', 'A plumb line', 'Four chariots', 'A scroll'] },
    it: { question: 'Cosa vide Amos nella visione del capitolo 7?', options: ['Un canestro di frutta', 'Un filo a piombo', 'Quattro carri', 'Un rotolo'] },
    es: { question: '¿Qué vio Amós en la visión del capítulo 7?', options: ['Una canasta de frutas', 'Una plomada', 'Cuatro carros', 'Un rollo'] },
    pt: { question: 'O que Amós viu na visão do capítulo 7?', options: ['Um cesto de frutas', 'Um prumo', 'Quatro carros', 'Um rolo'] },
    fr: { question: 'Que vit Amos dans la vision du chapitre 7?', options: ['Une corbeille de fruits', 'Un fil à plomb', 'Quatre chars', 'Un rouleau'] },
  },

  // Abdia (Obadiah)
  minp15: {
    en: { question: 'Against which nation did Obadiah prophesy?', options: ['Moab', 'Ammon', 'Edom', 'Philistia'] },
    it: { question: 'Contro quale nazione profetizzò Abdia?', options: ['Moab', 'Ammon', 'Edom', 'Filistia'] },
    es: { question: '¿Contra qué nación profetizó Abdías?', options: ['Moab', 'Amón', 'Edom', 'Filistea'] },
    pt: { question: 'Contra qual nação Obadias profetizou?', options: ['Moabe', 'Amom', 'Edom', 'Filístia'] },
    fr: { question: 'Contre quelle nation Abdias a-t-il prophétisé?', options: ['Moab', 'Ammon', 'Édom', 'Philistie'] },
  },
  minp16: {
    en: { question: 'From whom did the people of Edom descend?', options: ['Ishmael', 'Esau', 'Lot', 'Moab'] },
    it: { question: 'Da chi discendeva il popolo di Edom?', options: ['Ismaele', 'Esaù', 'Lot', 'Moab'] },
    es: { question: '¿De quién descendía el pueblo de Edom?', options: ['Ismael', 'Esaú', 'Lot', 'Moab'] },
    pt: { question: 'De quem descendia o povo de Edom?', options: ['Ismael', 'Esaú', 'Ló', 'Moabe'] },
    fr: { question: 'De qui descendait le peuple d\'Édom?', options: ['Ismaël', 'Ésaü', 'Lot', 'Moab'] },
  },
  minp17: {
    en: { question: 'Which is the shortest book of the Old Testament?', options: ['Nahum', 'Obadiah', 'Haggai', 'Malachi'] },
    it: { question: 'Qual è il libro più corto dell\'Antico Testamento?', options: ['Naum', 'Abdia', 'Aggeo', 'Malachia'] },
    es: { question: '¿Cuál es el libro más corto del Antiguo Testamento?', options: ['Nahúm', 'Abdías', 'Hageo', 'Malaquías'] },
    pt: { question: 'Qual é o livro mais curto do Antigo Testamento?', options: ['Naum', 'Obadias', 'Ageu', 'Malaquias'] },
    fr: { question: 'Quel est le livre le plus court de l\'Ancien Testament?', options: ['Nahum', 'Abdias', 'Aggée', 'Malachie'] },
  },

  // Giona (Jonah)
  minp18: {
    en: { question: 'To which city did God send Jonah to preach?', options: ['Babylon', 'Nineveh', 'Tarshish', 'Damascus'] },
    it: { question: 'In quale città Dio mandò Giona a predicare?', options: ['Babilonia', 'Ninive', 'Tarsis', 'Damasco'] },
    es: { question: '¿A qué ciudad envió Dios a Jonás a predicar?', options: ['Babilonia', 'Nínive', 'Tarsis', 'Damasco'] },
    pt: { question: 'Para qual cidade Deus enviou Jonas pregar?', options: ['Babilônia', 'Nínive', 'Társis', 'Damasco'] },
    fr: { question: 'Dans quelle ville Dieu envoya-t-il Jonas prêcher?', options: ['Babylone', 'Ninive', 'Tarsis', 'Damas'] },
  },
  minp19: {
    en: { question: 'Where did Jonah flee instead of going to Nineveh?', options: ['To Egypt', 'Toward Tarshish', 'To Damascus', 'To Babylon'] },
    it: { question: 'Dove fuggì Giona invece di andare a Ninive?', options: ['In Egitto', 'Verso Tarsis', 'A Damasco', 'A Babilonia'] },
    es: { question: '¿Adónde huyó Jonás en vez de ir a Nínive?', options: ['A Egipto', 'Hacia Tarsis', 'A Damasco', 'A Babilonia'] },
    pt: { question: 'Para onde Jonas fugiu em vez de ir a Nínive?', options: ['Para o Egito', 'Para Társis', 'Para Damasco', 'Para Babilônia'] },
    fr: { question: 'Où Jonas s\'est-il enfui au lieu d\'aller à Ninive?', options: ['En Égypte', 'Vers Tarsis', 'À Damas', 'À Babylone'] },
  },
  minp20: {
    en: { question: 'How long did Jonah stay in the belly of the fish?', options: ['One day', 'Two days', 'Three days and three nights', 'Seven days'] },
    it: { question: 'Quanto tempo rimase Giona nel ventre del pesce?', options: ['Un giorno', 'Due giorni', 'Tre giorni e tre notti', 'Sette giorni'] },
    es: { question: '¿Cuánto tiempo estuvo Jonás en el vientre del pez?', options: ['Un día', 'Dos días', 'Tres días y tres noches', 'Siete días'] },
    pt: { question: 'Quanto tempo Jonas ficou no ventre do peixe?', options: ['Um dia', 'Dois dias', 'Três dias e três noites', 'Sete dias'] },
    fr: { question: 'Combien de temps Jonas est-il resté dans le ventre du poisson?', options: ['Un jour', 'Deux jours', 'Trois jours et trois nuits', 'Sept jours'] },
  },
  minp21: {
    en: { question: 'How did the people of Nineveh react to Jonah\'s preaching?', options: ['They drove him away', 'They repented', 'They ignored him', 'They imprisoned him'] },
    it: { question: 'Come reagirono gli abitanti di Ninive alla predicazione di Giona?', options: ['Lo cacciarono', 'Si ravvidero', 'Lo ignorarono', 'Lo imprigionarono'] },
    es: { question: '¿Cómo reaccionaron los habitantes de Nínive a la predicación de Jonás?', options: ['Lo echaron', 'Se arrepintieron', 'Lo ignoraron', 'Lo encarcelaron'] },
    pt: { question: 'Como os habitantes de Nínive reagiram à pregação de Jonas?', options: ['O expulsaram', 'Se arrependeram', 'O ignoraram', 'O prenderam'] },
    fr: { question: 'Comment les habitants de Ninive ont-ils réagi à la prédication de Jonas?', options: ['Ils l\'ont chassé', 'Ils se sont repentis', 'Ils l\'ont ignoré', 'Ils l\'ont emprisonné'] },
  },
  minp22: {
    en: { question: 'Which plant did God make grow to give shade to Jonah?', options: ['A fig tree', 'A castor bean plant', 'A palm tree', 'A sycamore'] },
    it: { question: 'Quale pianta fece crescere Dio per dare ombra a Giona?', options: ['Un fico', 'Un ricino', 'Una palma', 'Un sicomoro'] },
    es: { question: '¿Qué planta hizo crecer Dios para dar sombra a Jonás?', options: ['Una higuera', 'Una calabacera', 'Una palmera', 'Un sicómoro'] },
    pt: { question: 'Qual planta Deus fez crescer para dar sombra a Jonas?', options: ['Uma figueira', 'Uma aboboreira', 'Uma palmeira', 'Um sicômoro'] },
    fr: { question: 'Quelle plante Dieu fit-il pousser pour donner de l\'ombre à Jonas?', options: ['Un figuier', 'Un ricin', 'Un palmier', 'Un sycomore'] },
  },

  // Michea (Micah)
  minp23: {
    en: { question: 'According to Micah 5:2, where would the future ruler of Israel be born?', options: ['Jerusalem', 'Nazareth', 'Bethlehem', 'Hebron'] },
    it: { question: 'Secondo Michea 5:1, dove sarebbe nato il futuro sovrano d\'Israele?', options: ['Gerusalemme', 'Nazaret', 'Betlemme', 'Ebron'] },
    es: { question: 'Según Miqueas 5:2, ¿dónde nacería el futuro gobernante de Israel?', options: ['Jerusalén', 'Nazaret', 'Belén', 'Hebrón'] },
    pt: { question: 'Segundo Miquéias 5:2, onde nasceria o futuro governante de Israel?', options: ['Jerusalém', 'Nazaré', 'Belém', 'Hebrom'] },
    fr: { question: 'Selon Michée 5:1, où naîtrait le futur souverain d\'Israël?', options: ['Jérusalem', 'Nazareth', 'Bethléem', 'Hébron'] },
  },
  minp24: {
    en: { question: 'From which city did the prophet Micah come?', options: ['Jerusalem', 'Moresheth', 'Samaria', 'Gath'] },
    it: { question: 'Da quale città proveniva il profeta Michea?', options: ['Gerusalemme', 'Moreset', 'Samaria', 'Gat'] },
    es: { question: '¿De qué ciudad era el profeta Miqueas?', options: ['Jerusalén', 'Moreset', 'Samaria', 'Gat'] },
    pt: { question: 'De qual cidade era o profeta Miquéias?', options: ['Jerusalém', 'Moresete', 'Samaria', 'Gate'] },
    fr: { question: 'De quelle ville venait le prophète Michée?', options: ['Jérusalem', 'Moréscheth', 'Samarie', 'Gath'] },
  },
  minp25: {
    en: { question: 'According to Micah 6:8, what does the LORD require?', options: ['Sacrifices and offerings', 'To act justly, love mercy, walk humbly', 'Fasting and prayers', 'Building temples'] },
    it: { question: 'Secondo Michea 6:8, cosa chiede il SIGNORE?', options: ['Sacrifici e offerte', 'Praticare la giustizia, amare la misericordia, camminare umilmente', 'Digiuni e preghiere', 'Costruire templi'] },
    es: { question: 'Según Miqueas 6:8, ¿qué requiere el SEÑOR?', options: ['Sacrificios y ofrendas', 'Hacer justicia, amar misericordia, caminar humildemente', 'Ayunos y oraciones', 'Construir templos'] },
    pt: { question: 'Segundo Miquéias 6:8, o que o SENHOR requer?', options: ['Sacrifícios e ofertas', 'Praticar a justiça, amar a misericórdia, andar humildemente', 'Jejuns e orações', 'Construir templos'] },
    fr: { question: 'Selon Michée 6:8, qu\'est-ce que l\'Éternel demande?', options: ['Des sacrifices et des offrandes', 'Pratiquer la justice, aimer la miséricorde, marcher humblement', 'Des jeûnes et des prières', 'Construire des temples'] },
  },
  minp26: {
    en: { question: 'What image does Micah use to describe future peace?', options: ['Wolves and lambs together', 'Swords into plowshares', 'A river of honey', 'A rainbow'] },
    it: { question: 'Quale immagine usa Michea per descrivere la pace futura?', options: ['Lupi e agnelli insieme', 'Spade trasformate in vomeri', 'Un fiume di miele', 'Un arcobaleno'] },
    es: { question: '¿Qué imagen usa Miqueas para describir la paz futura?', options: ['Lobos y corderos juntos', 'Espadas convertidas en rejas de arado', 'Un río de miel', 'Un arcoíris'] },
    pt: { question: 'Qual imagem Miquéias usa para descrever a paz futura?', options: ['Lobos e cordeiros juntos', 'Espadas transformadas em arados', 'Um rio de mel', 'Um arco-íris'] },
    fr: { question: 'Quelle image Michée utilise-t-il pour décrire la paix future?', options: ['Loups et agneaux ensemble', 'Épées changées en socs', 'Un fleuve de miel', 'Un arc-en-ciel'] },
  },
  minp27: {
    en: { question: 'According to Micah 7:19, where will God cast our sins?', options: ['In the desert', 'In the depths of the sea', 'In the fire', 'In the abyss'] },
    it: { question: 'Secondo Michea 7:19, dove getterà Dio i nostri peccati?', options: ['Nel deserto', 'Nel fondo del mare', 'Nel fuoco', 'Nell\'abisso'] },
    es: { question: 'Según Miqueas 7:19, ¿dónde echará Dios nuestros pecados?', options: ['En el desierto', 'En lo profundo del mar', 'En el fuego', 'En el abismo'] },
    pt: { question: 'Segundo Miquéias 7:19, onde Deus lançará nossos pecados?', options: ['No deserto', 'Nas profundezas do mar', 'No fogo', 'No abismo'] },
    fr: { question: 'Selon Michée 7:19, où Dieu jettera-t-il nos péchés?', options: ['Dans le désert', 'Au fond de la mer', 'Dans le feu', 'Dans l\'abîme'] },
  },

  // Naum (Nahum)
  minp28: {
    en: { question: 'Against which city did Nahum prophesy?', options: ['Babylon', 'Nineveh', 'Damascus', 'Tyre'] },
    it: { question: 'Contro quale città profetizzò Naum?', options: ['Babilonia', 'Ninive', 'Damasco', 'Tiro'] },
    es: { question: '¿Contra qué ciudad profetizó Nahúm?', options: ['Babilonia', 'Nínive', 'Damasco', 'Tiro'] },
    pt: { question: 'Contra qual cidade Naum profetizou?', options: ['Babilônia', 'Nínive', 'Damasco', 'Tiro'] },
    fr: { question: 'Contre quelle ville Nahum a-t-il prophétisé?', options: ['Babylone', 'Ninive', 'Damas', 'Tyr'] },
  },
  minp29: {
    en: { question: 'How is the LORD described in Nahum 1:2?', options: ['Patient', 'Jealous and avenging', 'Merciful', 'Silent'] },
    it: { question: 'Come viene descritto il SIGNORE in Naum 1:2?', options: ['Paziente', 'Geloso e vendicatore', 'Misericordioso', 'Silenzioso'] },
    es: { question: '¿Cómo se describe al SEÑOR en Nahúm 1:2?', options: ['Paciente', 'Celoso y vengador', 'Misericordioso', 'Silencioso'] },
    pt: { question: 'Como o SENHOR é descrito em Naum 1:2?', options: ['Paciente', 'Zeloso e vingador', 'Misericordioso', 'Silencioso'] },
    fr: { question: 'Comment l\'Éternel est-il décrit dans Nahum 1:2?', options: ['Patient', 'Jaloux et vengeur', 'Miséricordieux', 'Silencieux'] },
  },
  minp30: {
    en: { question: 'From which city did Nahum come?', options: ['Elkosh', 'Jerusalem', 'Samaria', 'Moresheth'] },
    it: { question: 'Da quale città proveniva Naum?', options: ['Elcos', 'Gerusalemme', 'Samaria', 'Moreset'] },
    es: { question: '¿De qué ciudad era Nahúm?', options: ['Elcos', 'Jerusalén', 'Samaria', 'Moreset'] },
    pt: { question: 'De qual cidade era Naum?', options: ['Elcós', 'Jerusalém', 'Samaria', 'Moresete'] },
    fr: { question: 'De quelle ville venait Nahum?', options: ['Elkosch', 'Jérusalem', 'Samarie', 'Moréscheth'] },
  },

  // Abacuc (Habakkuk)
  minp31: {
    en: { question: 'Which people would God use to judge Judah according to Habakkuk?', options: ['The Assyrians', 'The Chaldeans', 'The Egyptians', 'The Philistines'] },
    it: { question: 'Quale popolo Dio avrebbe usato per giudicare Giuda secondo Abacuc?', options: ['Gli Assiri', 'I Caldei', 'Gli Egiziani', 'I Filistei'] },
    es: { question: '¿Qué pueblo usaría Dios para juzgar a Judá según Habacuc?', options: ['Los asirios', 'Los caldeos', 'Los egipcios', 'Los filisteos'] },
    pt: { question: 'Qual povo Deus usaria para julgar Judá segundo Habacuque?', options: ['Os assírios', 'Os caldeus', 'Os egípcios', 'Os filisteus'] },
    fr: { question: 'Quel peuple Dieu utiliserait-il pour juger Juda selon Habacuc?', options: ['Les Assyriens', 'Les Chaldéens', 'Les Égyptiens', 'Les Philistins'] },
  },
  minp32: {
    en: { question: 'According to Habakkuk 2:4, how will the righteous live?', options: ['By works', 'By faith', 'By the law', 'By grace'] },
    it: { question: 'Secondo Abacuc 2:4, come vivrà il giusto?', options: ['Per opere', 'Per fede', 'Per la legge', 'Per grazia'] },
    es: { question: 'Según Habacuc 2:4, ¿cómo vivirá el justo?', options: ['Por obras', 'Por fe', 'Por la ley', 'Por gracia'] },
    pt: { question: 'Segundo Habacuque 2:4, como viverá o justo?', options: ['Pelas obras', 'Pela fé', 'Pela lei', 'Pela graça'] },
    fr: { question: 'Selon Habacuc 2:4, comment le juste vivra-t-il?', options: ['Par les œuvres', 'Par la foi', 'Par la loi', 'Par la grâce'] },
  },
  minp33: {
    en: { question: 'What should all the earth do according to Habakkuk 2:20?', options: ['Rejoice', 'Be silent before the LORD', 'Cry out', 'Pray'] },
    it: { question: 'Cosa deve fare tutta la terra secondo Abacuc 2:20?', options: ['Gioire', 'Stare in silenzio davanti al SIGNORE', 'Gridare', 'Pregare'] },
    es: { question: '¿Qué debe hacer toda la tierra según Habacuc 2:20?', options: ['Regocijarse', 'Callar delante del SEÑOR', 'Gritar', 'Orar'] },
    pt: { question: 'O que toda a terra deve fazer segundo Habacuque 2:20?', options: ['Alegrar-se', 'Ficar em silêncio diante do SENHOR', 'Clamar', 'Orar'] },
    fr: { question: 'Que doit faire toute la terre selon Habacuc 2:20?', options: ['Se réjouir', 'Faire silence devant l\'Éternel', 'Crier', 'Prier'] },
  },
  minp34: {
    en: { question: 'How does Habakkuk\'s prayer end in chapter 3?', options: ['With lament', 'With joy in the LORD despite difficulties', 'With anger', 'With silence'] },
    it: { question: 'Come si conclude la preghiera di Abacuc nel capitolo 3?', options: ['Con lamento', 'Con gioia nel SIGNORE nonostante le difficoltà', 'Con rabbia', 'Con silenzio'] },
    es: { question: '¿Cómo termina la oración de Habacuc en el capítulo 3?', options: ['Con lamento', 'Con gozo en el SEÑOR a pesar de las dificultades', 'Con enojo', 'Con silencio'] },
    pt: { question: 'Como termina a oração de Habacuque no capítulo 3?', options: ['Com lamento', 'Com alegria no SENHOR apesar das dificuldades', 'Com raiva', 'Com silêncio'] },
    fr: { question: 'Comment se termine la prière d\'Habacuc au chapitre 3?', options: ['Par une lamentation', 'Par la joie en l\'Éternel malgré les difficultés', 'Par la colère', 'Par le silence'] },
  },

  // Sofonia (Zephaniah)
  minp35: {
    en: { question: 'During which king\'s reign did Zephaniah prophesy?', options: ['Manasseh', 'Josiah', 'Zedekiah', 'Ahaz'] },
    it: { question: 'Durante il regno di quale re profetizzò Sofonia?', options: ['Manasse', 'Giosia', 'Sedecia', 'Acaz'] },
    es: { question: '¿Durante el reinado de qué rey profetizó Sofonías?', options: ['Manasés', 'Josías', 'Sedequías', 'Acaz'] },
    pt: { question: 'Durante o reinado de qual rei Sofonias profetizou?', options: ['Manassés', 'Josias', 'Zedequias', 'Acaz'] },
    fr: { question: 'Sous le règne de quel roi Sophonie a-t-il prophétisé?', options: ['Manassé', 'Josias', 'Sédécias', 'Achaz'] },
  },
  minp36: {
    en: { question: 'What does Zephaniah announce about the "day of the LORD"?', options: ['A day of celebration', 'A day of wrath', 'A day of rest', 'A day of harvest'] },
    it: { question: 'Cosa annuncia Sofonia riguardo al "giorno del SIGNORE"?', options: ['Un giorno di festa', 'Un giorno di ira', 'Un giorno di riposo', 'Un giorno di raccolta'] },
    es: { question: '¿Qué anuncia Sofonías sobre el "día del SEÑOR"?', options: ['Un día de fiesta', 'Un día de ira', 'Un día de descanso', 'Un día de cosecha'] },
    pt: { question: 'O que Sofonias anuncia sobre o "dia do SENHOR"?', options: ['Um dia de festa', 'Um dia de ira', 'Um dia de descanso', 'Um dia de colheita'] },
    fr: { question: 'Qu\'annonce Sophonie concernant le "jour de l\'Éternel"?', options: ['Un jour de fête', 'Un jour de colère', 'Un jour de repos', 'Un jour de moisson'] },
  },
  minp37: {
    en: { question: 'According to Zephaniah 3:17, what will the LORD do for His people?', options: ['Punish them', 'Rejoice over them with singing', 'Abandon them', 'Scatter them'] },
    it: { question: 'Secondo Sofonia 3:17, cosa farà il SIGNORE per il suo popolo?', options: ['Lo punirà', 'Gioirà per esso con canti di gioia', 'Lo abbandonerà', 'Lo dispererà'] },
    es: { question: 'Según Sofonías 3:17, ¿qué hará el SEÑOR por su pueblo?', options: ['Lo castigará', 'Se regocijará por él con cánticos', 'Lo abandonará', 'Lo esparcirá'] },
    pt: { question: 'Segundo Sofonias 3:17, o que o SENHOR fará por seu povo?', options: ['O castigará', 'Se alegrará por ele com cânticos', 'O abandonará', 'O dispersará'] },
    fr: { question: 'Selon Sophonie 3:17, que fera l\'Éternel pour son peuple?', options: ['Le punir', 'Se réjouir à son sujet avec des chants de joie', 'L\'abandonner', 'Le disperser'] },
  },

  // Aggeo (Haggai)
  minp38: {
    en: { question: 'What task did Haggai encourage to complete?', options: ['Building the walls', 'Rebuilding the temple', 'Writing the law', 'Conquering Babylon'] },
    it: { question: 'Quale compito incoraggiò Aggeo a completare?', options: ['Costruire le mura', 'Ricostruire il tempio', 'Scrivere la legge', 'Conquistare Babilonia'] },
    es: { question: '¿Qué tarea animó Hageo a completar?', options: ['Construir los muros', 'Reconstruir el templo', 'Escribir la ley', 'Conquistar Babilonia'] },
    pt: { question: 'Qual tarefa Ageu encorajou a completar?', options: ['Construir os muros', 'Reconstruir o templo', 'Escrever a lei', 'Conquistar Babilônia'] },
    fr: { question: 'Quelle tâche Aggée a-t-il encouragé à accomplir?', options: ['Construire les murs', 'Reconstruire le temple', 'Écrire la loi', 'Conquérir Babylone'] },
  },
  minp39: {
    en: { question: 'Who was the governor of Judah in Haggai\'s time?', options: ['Nehemiah', 'Ezra', 'Zerubbabel', 'Joshua'] },
    it: { question: 'Chi era il governatore di Giuda ai tempi di Aggeo?', options: ['Neemia', 'Esdra', 'Zorobabele', 'Giosuè'] },
    es: { question: '¿Quién era el gobernador de Judá en tiempos de Hageo?', options: ['Nehemías', 'Esdras', 'Zorobabel', 'Josué'] },
    pt: { question: 'Quem era o governador de Judá nos tempos de Ageu?', options: ['Neemias', 'Esdras', 'Zorobabel', 'Josué'] },
    fr: { question: 'Qui était le gouverneur de Juda à l\'époque d\'Aggée?', options: ['Néhémie', 'Esdras', 'Zorobabel', 'Josué'] },
  },
  minp40: {
    en: { question: 'Who was the high priest in Haggai\'s time?', options: ['Aaron', 'Eli', 'Joshua son of Jehozadak', 'Zadok'] },
    it: { question: 'Chi era il sommo sacerdote ai tempi di Aggeo?', options: ['Aaronne', 'Eli', 'Giosuè figlio di Iosadac', 'Sadoc'] },
    es: { question: '¿Quién era el sumo sacerdote en tiempos de Hageo?', options: ['Aarón', 'Elí', 'Josué hijo de Josadac', 'Sadoc'] },
    pt: { question: 'Quem era o sumo sacerdote nos tempos de Ageu?', options: ['Arão', 'Eli', 'Josué filho de Jozadaque', 'Zadoque'] },
    fr: { question: 'Qui était le grand prêtre à l\'époque d\'Aggée?', options: ['Aaron', 'Éli', 'Josué fils de Jotsadak', 'Tsadok'] },
  },
  minp41: {
    en: { question: 'What did God promise in Haggai 2:9 about the new temple?', options: ['It will be destroyed', 'Its glory will surpass the former', 'It will be empty', 'It will never be completed'] },
    it: { question: 'Cosa promise Dio secondo Aggeo 2:9 riguardo al nuovo tempio?', options: ['Sarà distrutto', 'La sua gloria supererà quella del primo', 'Sarà vuoto', 'Non sarà mai completato'] },
    es: { question: '¿Qué prometió Dios según Hageo 2:9 sobre el nuevo templo?', options: ['Será destruido', 'Su gloria superará a la del primero', 'Estará vacío', 'Nunca será completado'] },
    pt: { question: 'O que Deus prometeu segundo Ageu 2:9 sobre o novo templo?', options: ['Será destruído', 'Sua glória superará a do primeiro', 'Estará vazio', 'Nunca será completado'] },
    fr: { question: 'Que Dieu a-t-il promis selon Aggée 2:9 concernant le nouveau temple?', options: ['Il sera détruit', 'Sa gloire surpassera celle du premier', 'Il sera vide', 'Il ne sera jamais achevé'] },
  },

  // Zaccaria (Zechariah)
  minp42: {
    en: { question: 'How many visions did Zechariah have in the first part of his book?', options: ['Four', 'Eight', 'Twelve', 'Seven'] },
    it: { question: 'Quante visioni ebbe Zaccaria nella prima parte del suo libro?', options: ['Quattro', 'Otto', 'Dodici', 'Sette'] },
    es: { question: '¿Cuántas visiones tuvo Zacarías en la primera parte de su libro?', options: ['Cuatro', 'Ocho', 'Doce', 'Siete'] },
    pt: { question: 'Quantas visões Zacarias teve na primeira parte de seu livro?', options: ['Quatro', 'Oito', 'Doze', 'Sete'] },
    fr: { question: 'Combien de visions Zacharie a-t-il eues dans la première partie de son livre?', options: ['Quatre', 'Huit', 'Douze', 'Sept'] },
  },
  minp43: {
    en: { question: 'According to Zechariah 9:9, how will the king enter Jerusalem?', options: ['On a horse', 'On a donkey', 'On foot', 'In a chariot'] },
    it: { question: 'Secondo Zaccaria 9:9, come entrerà il re a Gerusalemme?', options: ['Su un cavallo', 'Su un asino', 'A piedi', 'Su un carro'] },
    es: { question: 'Según Zacarías 9:9, ¿cómo entrará el rey en Jerusalén?', options: ['Sobre un caballo', 'Sobre un asno', 'A pie', 'En un carro'] },
    pt: { question: 'Segundo Zacarias 9:9, como o rei entrará em Jerusalém?', options: ['Num cavalo', 'Num jumento', 'A pé', 'Numa carruagem'] },
    fr: { question: 'Selon Zacharie 9:9, comment le roi entrera-t-il à Jérusalem?', options: ['Sur un cheval', 'Sur un âne', 'À pied', 'Sur un char'] },
  },
  minp44: {
    en: { question: 'For how many shekels was the shepherd valued in Zechariah 11?', options: ['Ten', 'Twenty', 'Thirty', 'Forty'] },
    it: { question: 'Per quanti sicli fu valutato il pastore in Zaccaria 11?', options: ['Dieci', 'Venti', 'Trenta', 'Quaranta'] },
    es: { question: '¿Por cuántos siclos fue valorado el pastor en Zacarías 11?', options: ['Diez', 'Veinte', 'Treinta', 'Cuarenta'] },
    pt: { question: 'Por quantos siclos o pastor foi avaliado em Zacarias 11?', options: ['Dez', 'Vinte', 'Trinta', 'Quarenta'] },
    fr: { question: 'Pour combien de sicles le berger a-t-il été estimé dans Zacharie 11?', options: ['Dix', 'Vingt', 'Trente', 'Quarante'] },
  },
  minp45: {
    en: { question: 'According to Zechariah 4:6, not by might nor by power, but by what?', options: ['By grace', 'By my Spirit', 'By faith', 'By works'] },
    it: { question: 'Secondo Zaccaria 4:6, non per potenza né per forza, ma per cosa?', options: ['Per grazia', 'Per lo Spirito mio', 'Per fede', 'Per opere'] },
    es: { question: 'Según Zacarías 4:6, no con ejército ni con fuerza, ¿sino con qué?', options: ['Con gracia', 'Con mi Espíritu', 'Con fe', 'Con obras'] },
    pt: { question: 'Segundo Zacarias 4:6, não por força nem por poder, mas por quê?', options: ['Pela graça', 'Pelo meu Espírito', 'Pela fé', 'Pelas obras'] },
    fr: { question: 'Selon Zacharie 4:6, ni par la puissance ni par la force, mais par quoi?', options: ['Par la grâce', 'Par mon Esprit', 'Par la foi', 'Par les œuvres'] },
  },
  minp46: {
    en: { question: 'Which prophecy about the one they pierced is found in Zechariah?', options: ['They will look on him', 'They will ignore him', 'They will forget him', 'They will honor him'] },
    it: { question: 'Quale profezia su colui che hanno trafitto si trova in Zaccaria?', options: ['Guarderanno a lui', 'Lo ignoreranno', 'Lo dimenticheranno', 'Lo onoreranno'] },
    es: { question: '¿Qué profecía sobre aquel a quien traspasaron se encuentra en Zacarías?', options: ['Mirarán a él', 'Lo ignorarán', 'Lo olvidarán', 'Lo honrarán'] },
    pt: { question: 'Qual profecia sobre aquele que traspassaram se encontra em Zacarias?', options: ['Olharão para ele', 'O ignorarão', 'O esquecerão', 'O honrarão'] },
    fr: { question: 'Quelle prophétie sur celui qu\'ils ont percé se trouve dans Zacharie?', options: ['Ils tourneront les regards vers lui', 'Ils l\'ignoreront', 'Ils l\'oublieront', 'Ils l\'honoreront'] },
  },

  // Malachia (Malachi)
  minp47: {
    en: { question: 'Of what did Malachi accuse the people regarding tithes?', options: ['Being too generous', 'Robbing God', 'Being poor', 'Having nothing'] },
    it: { question: 'Di cosa accusò Malachia il popolo riguardo alle decime?', options: ['Di essere troppo generosi', 'Di derubare Dio', 'Di essere poveri', 'Di non avere nulla'] },
    es: { question: '¿De qué acusó Malaquías al pueblo respecto a los diezmos?', options: ['De ser demasiado generosos', 'De robar a Dios', 'De ser pobres', 'De no tener nada'] },
    pt: { question: 'De que Malaquias acusou o povo em relação aos dízimos?', options: ['De serem muito generosos', 'De roubarem a Deus', 'De serem pobres', 'De não terem nada'] },
    fr: { question: 'De quoi Malachie a-t-il accusé le peuple concernant les dîmes?', options: ['D\'être trop généreux', 'De voler Dieu', 'D\'être pauvres', 'De n\'avoir rien'] },
  },
  minp48: {
    en: { question: 'Who will God send before the great day of the LORD according to Malachi?', options: ['Moses', 'Elijah', 'David', 'Samuel'] },
    it: { question: 'Chi manderà Dio prima del grande giorno del SIGNORE secondo Malachia?', options: ['Mosè', 'Elia', 'Davide', 'Samuele'] },
    es: { question: '¿A quién enviará Dios antes del gran día del SEÑOR según Malaquías?', options: ['Moisés', 'Elías', 'David', 'Samuel'] },
    pt: { question: 'Quem Deus enviará antes do grande dia do SENHOR segundo Malaquias?', options: ['Moisés', 'Elias', 'Davi', 'Samuel'] },
    fr: { question: 'Qui Dieu enverra-t-il avant le grand jour de l\'Éternel selon Malachie?', options: ['Moïse', 'Élie', 'David', 'Samuel'] },
  },
  minp49: {
    en: { question: 'According to Malachi 3:6, what does God say about Himself?', options: ['I am powerful', 'I do not change', 'I am just', 'I am holy'] },
    it: { question: 'Secondo Malachia 3:6, cosa dice Dio di sé stesso?', options: ['Sono potente', 'Io non cambio', 'Sono giusto', 'Sono santo'] },
    es: { question: 'Según Malaquías 3:6, ¿qué dice Dios de sí mismo?', options: ['Soy poderoso', 'Yo no cambio', 'Soy justo', 'Soy santo'] },
    pt: { question: 'Segundo Malaquias 3:6, o que Deus diz sobre si mesmo?', options: ['Sou poderoso', 'Eu não mudo', 'Sou justo', 'Sou santo'] },
    fr: { question: 'Selon Malachie 3:6, que dit Dieu de lui-même?', options: ['Je suis puissant', 'Je ne change pas', 'Je suis juste', 'Je suis saint'] },
  },
  minp50: {
    en: { question: 'How is the Messiah called in Malachi 3:1?', options: ['Son of David', 'Messenger of the covenant', 'King of Kings', 'Son of Man'] },
    it: { question: 'Come viene chiamato il Messia in Malachia 3:1?', options: ['Figlio di Davide', 'Angelo del patto', 'Re dei Re', 'Figlio dell\'uomo'] },
    es: { question: '¿Cómo se llama al Mesías en Malaquías 3:1?', options: ['Hijo de David', 'Ángel del pacto', 'Rey de Reyes', 'Hijo del hombre'] },
    pt: { question: 'Como o Messias é chamado em Malaquias 3:1?', options: ['Filho de Davi', 'Anjo da aliança', 'Rei dos Reis', 'Filho do Homem'] },
    fr: { question: 'Comment le Messie est-il appelé dans Malachie 3:1?', options: ['Fils de David', 'Ange de l\'alliance', 'Roi des Rois', 'Fils de l\'homme'] },
  },
};
