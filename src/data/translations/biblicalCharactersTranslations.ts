import { Language } from '../../contexts/LanguageContext';

interface QuestionTranslation {
  question: string;
  options: string[];
  explanation?: string;
}

type BiblicalCharactersTranslations = {
  [key: string]: {
    [lang in Language]?: QuestionTranslation;
  };
};

export const biblicalCharactersTranslations: BiblicalCharactersTranslations = {
  'bc1': {
    en: { question: 'Who was the first man created by God?', options: ['Noah', 'Abraham', 'Adam', 'Moses'] },
    it: { question: 'Chi fu il primo uomo creato da Dio?', options: ['Noè', 'Abramo', 'Adamo', 'Mosè'] },
    es: { question: '¿Quién fue el primer hombre creado por Dios?', options: ['Noé', 'Abraham', 'Adán', 'Moisés'] },
    pt: { question: 'Quem foi o primeiro homem criado por Deus?', options: ['Noé', 'Abraão', 'Adão', 'Moisés'] },
    fr: { question: 'Qui fut le premier homme créé par Dieu?', options: ['Noé', 'Abraham', 'Adam', 'Moïse'] }
  },
  'bc2': {
    en: { question: 'Who was the first woman created by God?', options: ['Sarah', 'Eve', 'Ruth', 'Mary'] },
    it: { question: 'Chi fu la prima donna creata da Dio?', options: ['Sara', 'Eva', 'Ruth', 'Maria'] },
    es: { question: '¿Quién fue la primera mujer creada por Dios?', options: ['Sara', 'Eva', 'Rut', 'María'] },
    pt: { question: 'Quem foi a primeira mulher criada por Deus?', options: ['Sara', 'Eva', 'Rute', 'Maria'] },
    fr: { question: 'Qui fut la première femme créée par Dieu?', options: ['Sara', 'Ève', 'Ruth', 'Marie'] }
  },
  'bc3': {
    en: { question: 'Who killed his brother Abel?', options: ['Seth', 'Cain', 'Enoch', 'Lamech'] },
    it: { question: 'Chi uccise suo fratello Abele?', options: ['Set', 'Caino', 'Enoc', 'Lamec'] },
    es: { question: '¿Quién mató a su hermano Abel?', options: ['Set', 'Caín', 'Enoc', 'Lamec'] },
    pt: { question: 'Quem matou seu irmão Abel?', options: ['Sete', 'Caim', 'Enoque', 'Lameque'] },
    fr: { question: 'Qui a tué son frère Abel?', options: ['Seth', 'Caïn', 'Énoch', 'Lémec'] }
  },
  'bc4': {
    en: { question: 'Who walked with God and was taken up without dying?', options: ['Moses', 'Elijah', 'Enoch', 'Noah'] },
    it: { question: 'Chi camminò con Dio e fu portato via senza morire?', options: ['Mosè', 'Elia', 'Enoc', 'Noè'] },
    es: { question: '¿Quién caminó con Dios y fue llevado sin morir?', options: ['Moisés', 'Elías', 'Enoc', 'Noé'] },
    pt: { question: 'Quem andou com Deus e foi arrebatado sem morrer?', options: ['Moisés', 'Elias', 'Enoque', 'Noé'] },
    fr: { question: 'Qui a marché avec Dieu et a été enlevé sans mourir?', options: ['Moïse', 'Élie', 'Énoch', 'Noé'] }
  },
  'bc5': {
    en: { question: 'Who was the oldest man in the Bible?', options: ['Noah', 'Adam', 'Methuselah', 'Abraham'] },
    it: { question: 'Chi fu l\'uomo più vecchio nella Bibbia?', options: ['Noè', 'Adamo', 'Matusalemme', 'Abramo'] },
    es: { question: '¿Quién fue el hombre más viejo en la Biblia?', options: ['Noé', 'Adán', 'Matusalén', 'Abraham'] },
    pt: { question: 'Quem foi o homem mais velho na Bíblia?', options: ['Noé', 'Adão', 'Matusalém', 'Abraão'] },
    fr: { question: 'Qui était l\'homme le plus vieux dans la Bible?', options: ['Noé', 'Adam', 'Mathusalem', 'Abraham'] }
  },
  'bc6': {
    en: { question: 'Who built an ark to save his family?', options: ['Abraham', 'Moses', 'Noah', 'David'] },
    it: { question: 'Chi costruì un\'arca per salvare la sua famiglia?', options: ['Abramo', 'Mosè', 'Noè', 'Davide'] },
    es: { question: '¿Quién construyó un arca para salvar a su familia?', options: ['Abraham', 'Moisés', 'Noé', 'David'] },
    pt: { question: 'Quem construiu uma arca para salvar sua família?', options: ['Abraão', 'Moisés', 'Noé', 'Davi'] },
    fr: { question: 'Qui a construit une arche pour sauver sa famille?', options: ['Abraham', 'Moïse', 'Noé', 'David'] }
  },
  'bc7': {
    en: { question: 'Who was called the father of many nations?', options: ['Isaac', 'Jacob', 'Abraham', 'Moses'] },
    it: { question: 'Chi fu chiamato il padre di molte nazioni?', options: ['Isacco', 'Giacobbe', 'Abramo', 'Mosè'] },
    es: { question: '¿Quién fue llamado el padre de muchas naciones?', options: ['Isaac', 'Jacob', 'Abraham', 'Moisés'] },
    pt: { question: 'Quem foi chamado o pai de muitas nações?', options: ['Isaque', 'Jacó', 'Abraão', 'Moisés'] },
    fr: { question: 'Qui a été appelé le père de nombreuses nations?', options: ['Isaac', 'Jacob', 'Abraham', 'Moïse'] }
  },
  'bc8': {
    en: { question: 'Who was Abraham\'s wife?', options: ['Rebekah', 'Rachel', 'Sarah', 'Leah'] },
    it: { question: 'Chi era la moglie di Abramo?', options: ['Rebecca', 'Rachele', 'Sara', 'Lea'] },
    es: { question: '¿Quién era la esposa de Abraham?', options: ['Rebeca', 'Raquel', 'Sara', 'Lea'] },
    pt: { question: 'Quem era a esposa de Abraão?', options: ['Rebeca', 'Raquel', 'Sara', 'Lia'] },
    fr: { question: 'Qui était l\'épouse d\'Abraham?', options: ['Rébecca', 'Rachel', 'Sara', 'Léa'] }
  },
  'bc9': {
    en: { question: 'Who was the son of Abraham and Sarah?', options: ['Ishmael', 'Isaac', 'Jacob', 'Joseph'] },
    it: { question: 'Chi era il figlio di Abramo e Sara?', options: ['Ismaele', 'Isacco', 'Giacobbe', 'Giuseppe'] },
    es: { question: '¿Quién era el hijo de Abraham y Sara?', options: ['Ismael', 'Isaac', 'Jacob', 'José'] },
    pt: { question: 'Quem era o filho de Abraão e Sara?', options: ['Ismael', 'Isaque', 'Jacó', 'José'] },
    fr: { question: 'Qui était le fils d\'Abraham et Sara?', options: ['Ismaël', 'Isaac', 'Jacob', 'Joseph'] }
  },
  'bc10': {
    en: { question: 'Who deceived his father to receive the blessing?', options: ['Esau', 'Jacob', 'Joseph', 'Judah'] },
    it: { question: 'Chi ingannò suo padre per ricevere la benedizione?', options: ['Esaù', 'Giacobbe', 'Giuseppe', 'Giuda'] },
    es: { question: '¿Quién engañó a su padre para recibir la bendición?', options: ['Esaú', 'Jacob', 'José', 'Judá'] },
    pt: { question: 'Quem enganou seu pai para receber a bênção?', options: ['Esaú', 'Jacó', 'José', 'Judá'] },
    fr: { question: 'Qui a trompé son père pour recevoir la bénédiction?', options: ['Ésaü', 'Jacob', 'Joseph', 'Juda'] }
  },
  'bc11': {
    en: { question: 'Who sold his birthright for a bowl of stew?', options: ['Jacob', 'Esau', 'Reuben', 'Judah'] },
    it: { question: 'Chi vendette la sua primogenitura per un piatto di minestra?', options: ['Giacobbe', 'Esaù', 'Ruben', 'Giuda'] },
    es: { question: '¿Quién vendió su primogenitura por un plato de guiso?', options: ['Jacob', 'Esaú', 'Rubén', 'Judá'] },
    pt: { question: 'Quem vendeu seu direito de primogenitura por um prato de ensopado?', options: ['Jacó', 'Esaú', 'Rúben', 'Judá'] },
    fr: { question: 'Qui a vendu son droit d\'aînesse pour un plat de potage?', options: ['Jacob', 'Ésaü', 'Ruben', 'Juda'] }
  },
  'bc12': {
    en: { question: 'Who had a dream of a ladder reaching heaven?', options: ['Joseph', 'Jacob', 'Daniel', 'Abraham'] },
    it: { question: 'Chi fece un sogno di una scala che raggiungeva il cielo?', options: ['Giuseppe', 'Giacobbe', 'Daniele', 'Abramo'] },
    es: { question: '¿Quién tuvo un sueño de una escalera que llegaba al cielo?', options: ['José', 'Jacob', 'Daniel', 'Abraham'] },
    pt: { question: 'Quem teve um sonho de uma escada que chegava ao céu?', options: ['José', 'Jacó', 'Daniel', 'Abraão'] },
    fr: { question: 'Qui a eu un rêve d\'une échelle atteignant le ciel?', options: ['Joseph', 'Jacob', 'Daniel', 'Abraham'] }
  },
  'bc13': {
    en: { question: 'Who was sold into slavery by his brothers?', options: ['Benjamin', 'Joseph', 'Judah', 'Reuben'] },
    it: { question: 'Chi fu venduto come schiavo dai suoi fratelli?', options: ['Beniamino', 'Giuseppe', 'Giuda', 'Ruben'] },
    es: { question: '¿Quién fue vendido como esclavo por sus hermanos?', options: ['Benjamín', 'José', 'Judá', 'Rubén'] },
    pt: { question: 'Quem foi vendido como escravo por seus irmãos?', options: ['Benjamim', 'José', 'Judá', 'Rúben'] },
    fr: { question: 'Qui a été vendu comme esclave par ses frères?', options: ['Benjamin', 'Joseph', 'Juda', 'Ruben'] }
  },
  'bc14': {
    en: { question: 'Who interpreted Pharaoh\'s dreams?', options: ['Moses', 'Joseph', 'Daniel', 'Aaron'] },
    it: { question: 'Chi interpretò i sogni del Faraone?', options: ['Mosè', 'Giuseppe', 'Daniele', 'Aronne'] },
    es: { question: '¿Quién interpretó los sueños de Faraón?', options: ['Moisés', 'José', 'Daniel', 'Aarón'] },
    pt: { question: 'Quem interpretou os sonhos de Faraó?', options: ['Moisés', 'José', 'Daniel', 'Arão'] },
    fr: { question: 'Qui a interprété les rêves de Pharaon?', options: ['Moïse', 'Joseph', 'Daniel', 'Aaron'] }
  },
  'bc15': {
    en: { question: 'Who was found in a basket in the Nile River?', options: ['Joseph', 'Moses', 'Samuel', 'David'] },
    it: { question: 'Chi fu trovato in un cesto nel fiume Nilo?', options: ['Giuseppe', 'Mosè', 'Samuele', 'Davide'] },
    es: { question: '¿Quién fue encontrado en una canasta en el río Nilo?', options: ['José', 'Moisés', 'Samuel', 'David'] },
    pt: { question: 'Quem foi encontrado em um cesto no rio Nilo?', options: ['José', 'Moisés', 'Samuel', 'Davi'] },
    fr: { question: 'Qui a été trouvé dans un panier dans le Nil?', options: ['Joseph', 'Moïse', 'Samuel', 'David'] }
  },
  'bc16': {
    en: { question: 'Who was Moses\' brother?', options: ['Joshua', 'Aaron', 'Caleb', 'Eleazar'] },
    it: { question: 'Chi era il fratello di Mosè?', options: ['Giosuè', 'Aronne', 'Caleb', 'Eleazaro'] },
    es: { question: '¿Quién era el hermano de Moisés?', options: ['Josué', 'Aarón', 'Caleb', 'Eleazar'] },
    pt: { question: 'Quem era o irmão de Moisés?', options: ['Josué', 'Arão', 'Calebe', 'Eleazar'] },
    fr: { question: 'Qui était le frère de Moïse?', options: ['Josué', 'Aaron', 'Caleb', 'Éléazar'] }
  },
  'bc17': {
    en: { question: 'Who was Moses\' sister?', options: ['Deborah', 'Miriam', 'Hannah', 'Jochebed'] },
    it: { question: 'Chi era la sorella di Mosè?', options: ['Debora', 'Miriam', 'Anna', 'Iochebed'] },
    es: { question: '¿Quién era la hermana de Moisés?', options: ['Débora', 'Miriam', 'Ana', 'Jocabed'] },
    pt: { question: 'Quem era a irmã de Moisés?', options: ['Débora', 'Miriã', 'Ana', 'Joquebede'] },
    fr: { question: 'Qui était la sœur de Moïse?', options: ['Débora', 'Myriam', 'Anne', 'Jokébed'] }
  },
  'bc18': {
    en: { question: 'Who led Israel after Moses died?', options: ['Aaron', 'Caleb', 'Joshua', 'Samuel'] },
    it: { question: 'Chi guidò Israele dopo la morte di Mosè?', options: ['Aronne', 'Caleb', 'Giosuè', 'Samuele'] },
    es: { question: '¿Quién guió a Israel después de la muerte de Moisés?', options: ['Aarón', 'Caleb', 'Josué', 'Samuel'] },
    pt: { question: 'Quem liderou Israel após a morte de Moisés?', options: ['Arão', 'Calebe', 'Josué', 'Samuel'] },
    fr: { question: 'Qui a dirigé Israël après la mort de Moïse?', options: ['Aaron', 'Caleb', 'Josué', 'Samuel'] }
  },
  'bc19': {
    en: { question: 'Who was the prostitute who helped the Israelite spies?', options: ['Ruth', 'Rahab', 'Tamar', 'Bathsheba'] },
    it: { question: 'Chi era la prostituta che aiutò le spie israelite?', options: ['Ruth', 'Raab', 'Tamar', 'Betsabea'] },
    es: { question: '¿Quién fue la prostituta que ayudó a los espías israelitas?', options: ['Rut', 'Rahab', 'Tamar', 'Betsabé'] },
    pt: { question: 'Quem era a prostituta que ajudou os espias israelitas?', options: ['Rute', 'Raabe', 'Tamar', 'Bate-Seba'] },
    fr: { question: 'Qui était la prostituée qui a aidé les espions israélites?', options: ['Ruth', 'Rahab', 'Tamar', 'Bethsabée'] }
  },
  'bc20': {
    en: { question: 'Who was the only female judge of Israel?', options: ['Ruth', 'Esther', 'Deborah', 'Miriam'] },
    it: { question: 'Chi era l\'unica donna giudice di Israele?', options: ['Ruth', 'Ester', 'Debora', 'Miriam'] },
    es: { question: '¿Quién fue la única jueza mujer de Israel?', options: ['Rut', 'Ester', 'Débora', 'Miriam'] },
    pt: { question: 'Quem foi a única juíza mulher de Israel?', options: ['Rute', 'Ester', 'Débora', 'Miriã'] },
    fr: { question: 'Qui était la seule femme juge d\'Israël?', options: ['Ruth', 'Esther', 'Débora', 'Myriam'] }
  },
  'bc21': {
    en: { question: 'Who killed Sisera with a tent peg?', options: ['Deborah', 'Jael', 'Miriam', 'Ruth'] },
    it: { question: 'Chi uccise Sisara con un piolo della tenda?', options: ['Debora', 'Giaele', 'Miriam', 'Ruth'] },
    es: { question: '¿Quién mató a Sísara con una estaca de tienda?', options: ['Débora', 'Jael', 'Miriam', 'Rut'] },
    pt: { question: 'Quem matou Sísera com uma estaca de tenda?', options: ['Débora', 'Jael', 'Miriã', 'Rute'] },
    fr: { question: 'Qui a tué Sisera avec un piquet de tente?', options: ['Débora', 'Jaël', 'Myriam', 'Ruth'] }
  },
  'bc22': {
    en: { question: 'Who was the mighty judge with supernatural strength?', options: ['Gideon', 'Samson', 'Jephthah', 'Ehud'] },
    it: { question: 'Chi era il potente giudice con forza soprannaturale?', options: ['Gedeone', 'Sansone', 'Iefte', 'Eud'] },
    es: { question: '¿Quién era el poderoso juez con fuerza sobrenatural?', options: ['Gedeón', 'Sansón', 'Jefté', 'Ehúd'] },
    pt: { question: 'Quem era o poderoso juiz com força sobrenatural?', options: ['Gideão', 'Sansão', 'Jefté', 'Eúde'] },
    fr: { question: 'Qui était le puissant juge avec une force surnaturelle?', options: ['Gédéon', 'Samson', 'Jephté', 'Éhud'] }
  },
  'bc23': {
    en: { question: 'Who betrayed Samson?', options: ['Jezebel', 'Delilah', 'Bathsheba', 'Rahab'] },
    it: { question: 'Chi tradì Sansone?', options: ['Gezabele', 'Dalila', 'Betsabea', 'Raab'] },
    es: { question: '¿Quién traicionó a Sansón?', options: ['Jezabel', 'Dalila', 'Betsabé', 'Rahab'] },
    pt: { question: 'Quem traiu Sansão?', options: ['Jezabel', 'Dalila', 'Bate-Seba', 'Raabe'] },
    fr: { question: 'Qui a trahi Samson?', options: ['Jézabel', 'Dalila', 'Bethsabée', 'Rahab'] }
  },
  'bc24': {
    en: { question: 'Who was the Moabite woman who stayed with her mother-in-law?', options: ['Orpah', 'Ruth', 'Naomi', 'Hannah'] },
    it: { question: 'Chi era la donna moabita che rimase con la suocera?', options: ['Orpa', 'Ruth', 'Noemi', 'Anna'] },
    es: { question: '¿Quién era la mujer moabita que se quedó con su suegra?', options: ['Orfa', 'Rut', 'Noemí', 'Ana'] },
    pt: { question: 'Quem era a mulher moabita que ficou com sua sogra?', options: ['Orfa', 'Rute', 'Noemi', 'Ana'] },
    fr: { question: 'Qui était la femme moabite qui est restée avec sa belle-mère?', options: ['Orpa', 'Ruth', 'Naomi', 'Anne'] }
  },
  'bc25': {
    en: { question: 'Who was Ruth\'s mother-in-law?', options: ['Hannah', 'Naomi', 'Elizabeth', 'Sarah'] },
    it: { question: 'Chi era la suocera di Ruth?', options: ['Anna', 'Noemi', 'Elisabetta', 'Sara'] },
    es: { question: '¿Quién era la suegra de Rut?', options: ['Ana', 'Noemí', 'Elisabet', 'Sara'] },
    pt: { question: 'Quem era a sogra de Rute?', options: ['Ana', 'Noemi', 'Isabel', 'Sara'] },
    fr: { question: 'Qui était la belle-mère de Ruth?', options: ['Anne', 'Naomi', 'Élisabeth', 'Sara'] }
  },
  'bc26': {
    en: { question: 'Who was the prophet dedicated to God before birth?', options: ['Elijah', 'Samuel', 'Jeremiah', 'John the Baptist'] },
    it: { question: 'Chi era il profeta consacrato a Dio prima della nascita?', options: ['Elia', 'Samuele', 'Geremia', 'Giovanni Battista'] },
    es: { question: '¿Quién fue el profeta dedicado a Dios antes de nacer?', options: ['Elías', 'Samuel', 'Jeremías', 'Juan el Bautista'] },
    pt: { question: 'Quem foi o profeta dedicado a Deus antes de nascer?', options: ['Elias', 'Samuel', 'Jeremias', 'João Batista'] },
    fr: { question: 'Qui était le prophète consacré à Dieu avant sa naissance?', options: ['Élie', 'Samuel', 'Jérémie', 'Jean-Baptiste'] }
  },
  'bc27': {
    en: { question: 'Who was the first king of Israel?', options: ['David', 'Solomon', 'Saul', 'Samuel'] },
    it: { question: 'Chi fu il primo re di Israele?', options: ['Davide', 'Salomone', 'Saul', 'Samuele'] },
    es: { question: '¿Quién fue el primer rey de Israel?', options: ['David', 'Salomón', 'Saúl', 'Samuel'] },
    pt: { question: 'Quem foi o primeiro rei de Israel?', options: ['Davi', 'Salomão', 'Saul', 'Samuel'] },
    fr: { question: 'Qui fut le premier roi d\'Israël?', options: ['David', 'Salomon', 'Saül', 'Samuel'] }
  },
  'bc28': {
    en: { question: 'Who was the shepherd boy who became king?', options: ['Saul', 'David', 'Solomon', 'Absalom'] },
    it: { question: 'Chi era il pastorello che divenne re?', options: ['Saul', 'Davide', 'Salomone', 'Assalonne'] },
    es: { question: '¿Quién era el niño pastor que se convirtió en rey?', options: ['Saúl', 'David', 'Salomón', 'Absalón'] },
    pt: { question: 'Quem era o menino pastor que se tornou rei?', options: ['Saul', 'Davi', 'Salomão', 'Absalão'] },
    fr: { question: 'Qui était le berger qui est devenu roi?', options: ['Saül', 'David', 'Salomon', 'Absalom'] }
  },
  'bc29': {
    en: { question: 'Who killed the giant Goliath?', options: ['Saul', 'Jonathan', 'David', 'Samuel'] },
    it: { question: 'Chi uccise il gigante Golia?', options: ['Saul', 'Gionata', 'Davide', 'Samuele'] },
    es: { question: '¿Quién mató al gigante Goliat?', options: ['Saúl', 'Jonatán', 'David', 'Samuel'] },
    pt: { question: 'Quem matou o gigante Golias?', options: ['Saul', 'Jônatas', 'Davi', 'Samuel'] },
    fr: { question: 'Qui a tué le géant Goliath?', options: ['Saül', 'Jonathan', 'David', 'Samuel'] }
  },
  'bc30': {
    en: { question: 'Who was David\'s best friend?', options: ['Saul', 'Jonathan', 'Nathan', 'Joab'] },
    it: { question: 'Chi era il migliore amico di Davide?', options: ['Saul', 'Gionata', 'Natan', 'Ioab'] },
    es: { question: '¿Quién era el mejor amigo de David?', options: ['Saúl', 'Jonatán', 'Natán', 'Joab'] },
    pt: { question: 'Quem era o melhor amigo de Davi?', options: ['Saul', 'Jônatas', 'Natã', 'Joabe'] },
    fr: { question: 'Qui était le meilleur ami de David?', options: ['Saül', 'Jonathan', 'Nathan', 'Joab'] }
  },
  'bc31': {
    en: { question: 'Who was the wisest king of Israel?', options: ['David', 'Solomon', 'Hezekiah', 'Josiah'] },
    it: { question: 'Chi fu il re più saggio di Israele?', options: ['Davide', 'Salomone', 'Ezechia', 'Giosia'] },
    es: { question: '¿Quién fue el rey más sabio de Israel?', options: ['David', 'Salomón', 'Ezequías', 'Josías'] },
    pt: { question: 'Quem foi o rei mais sábio de Israel?', options: ['Davi', 'Salomão', 'Ezequias', 'Josias'] },
    fr: { question: 'Qui fut le roi le plus sage d\'Israël?', options: ['David', 'Salomon', 'Ézéchias', 'Josias'] }
  },
  'bc32': {
    en: { question: 'Who built the first temple in Jerusalem?', options: ['David', 'Solomon', 'Moses', 'Nehemiah'] },
    it: { question: 'Chi costruì il primo tempio a Gerusalemme?', options: ['Davide', 'Salomone', 'Mosè', 'Neemia'] },
    es: { question: '¿Quién construyó el primer templo en Jerusalén?', options: ['David', 'Salomón', 'Moisés', 'Nehemías'] },
    pt: { question: 'Quem construiu o primeiro templo em Jerusalém?', options: ['Davi', 'Salomão', 'Moisés', 'Neemias'] },
    fr: { question: 'Qui a construit le premier temple à Jérusalem?', options: ['David', 'Salomon', 'Moïse', 'Néhémie'] }
  },
  'bc33': {
    en: { question: 'Who was the wicked queen who promoted Baal worship?', options: ['Athaliah', 'Jezebel', 'Vashti', 'Delilah'] },
    it: { question: 'Chi era la regina malvagia che promosse il culto di Baal?', options: ['Atalia', 'Gezabele', 'Vasti', 'Dalila'] },
    es: { question: '¿Quién era la reina malvada que promovió el culto a Baal?', options: ['Atalía', 'Jezabel', 'Vasti', 'Dalila'] },
    pt: { question: 'Quem era a rainha perversa que promoveu o culto a Baal?', options: ['Atalia', 'Jezabel', 'Vasti', 'Dalila'] },
    fr: { question: 'Qui était la reine méchante qui a promu le culte de Baal?', options: ['Athalie', 'Jézabel', 'Vasthi', 'Dalila'] }
  },
  'bc34': {
    en: { question: 'Who was the prophet taken up to heaven in a chariot of fire?', options: ['Elisha', 'Elijah', 'Isaiah', 'Ezekiel'] },
    it: { question: 'Chi era il profeta portato in cielo su un carro di fuoco?', options: ['Eliseo', 'Elia', 'Isaia', 'Ezechiele'] },
    es: { question: '¿Quién era el profeta llevado al cielo en un carro de fuego?', options: ['Eliseo', 'Elías', 'Isaías', 'Ezequiel'] },
    pt: { question: 'Quem era o profeta levado ao céu em uma carruagem de fogo?', options: ['Eliseu', 'Elias', 'Isaías', 'Ezequiel'] },
    fr: { question: 'Qui était le prophète enlevé au ciel dans un char de feu?', options: ['Élisée', 'Élie', 'Ésaïe', 'Ézéchiel'] }
  },
  'bc35': {
    en: { question: 'Who succeeded Elijah as prophet?', options: ['Isaiah', 'Elisha', 'Jeremiah', 'Ezekiel'] },
    it: { question: 'Chi succedette a Elia come profeta?', options: ['Isaia', 'Eliseo', 'Geremia', 'Ezechiele'] },
    es: { question: '¿Quién sucedió a Elías como profeta?', options: ['Isaías', 'Eliseo', 'Jeremías', 'Ezequiel'] },
    pt: { question: 'Quem sucedeu Elias como profeta?', options: ['Isaías', 'Eliseu', 'Jeremias', 'Ezequiel'] },
    fr: { question: 'Qui a succédé à Élie comme prophète?', options: ['Ésaïe', 'Élisée', 'Jérémie', 'Ézéchiel'] }
  },
  'bc36': {
    en: { question: 'Who was thrown into the lions\' den?', options: ['Shadrach', 'Daniel', 'Ezekiel', 'Jeremiah'] },
    it: { question: 'Chi fu gettato nella fossa dei leoni?', options: ['Sadrac', 'Daniele', 'Ezechiele', 'Geremia'] },
    es: { question: '¿Quién fue arrojado al foso de los leones?', options: ['Sadrac', 'Daniel', 'Ezequiel', 'Jeremías'] },
    pt: { question: 'Quem foi lançado na cova dos leões?', options: ['Sadraque', 'Daniel', 'Ezequiel', 'Jeremias'] },
    fr: { question: 'Qui a été jeté dans la fosse aux lions?', options: ['Shadrak', 'Daniel', 'Ézéchiel', 'Jérémie'] }
  },
  'bc37': {
    en: { question: 'Who was thrown into the fiery furnace with his friends?', options: ['Daniel', 'Shadrach, Meshach, Abednego', 'Ezekiel', 'Isaiah'] },
    it: { question: 'Chi fu gettato nella fornace ardente con i suoi amici?', options: ['Daniele', 'Sadrac, Mesac, Abednego', 'Ezechiele', 'Isaia'] },
    es: { question: '¿Quién fue arrojado al horno de fuego con sus amigos?', options: ['Daniel', 'Sadrac, Mesac, Abednego', 'Ezequiel', 'Isaías'] },
    pt: { question: 'Quem foi lançado na fornalha de fogo com seus amigos?', options: ['Daniel', 'Sadraque, Mesaque, Abednego', 'Ezequiel', 'Isaías'] },
    fr: { question: 'Qui a été jeté dans la fournaise ardente avec ses amis?', options: ['Daniel', 'Shadrak, Méshak, Abed-Nego', 'Ézéchiel', 'Ésaïe'] }
  },
  'bc38': {
    en: { question: 'Who was the Jewish queen who saved her people?', options: ['Ruth', 'Vashti', 'Esther', 'Deborah'] },
    it: { question: 'Chi era la regina ebrea che salvò il suo popolo?', options: ['Ruth', 'Vasti', 'Ester', 'Debora'] },
    es: { question: '¿Quién era la reina judía que salvó a su pueblo?', options: ['Rut', 'Vasti', 'Ester', 'Débora'] },
    pt: { question: 'Quem era a rainha judia que salvou seu povo?', options: ['Rute', 'Vasti', 'Ester', 'Débora'] },
    fr: { question: 'Qui était la reine juive qui a sauvé son peuple?', options: ['Ruth', 'Vasthi', 'Esther', 'Débora'] }
  },
  'bc39': {
    en: { question: 'Who was Esther\'s cousin who raised her?', options: ['Haman', 'Mordecai', 'Xerxes', 'Nehemiah'] },
    it: { question: 'Chi era il cugino di Ester che la allevò?', options: ['Aman', 'Mardocheo', 'Serse', 'Neemia'] },
    es: { question: '¿Quién era el primo de Ester que la crió?', options: ['Amán', 'Mardoqueo', 'Jerjes', 'Nehemías'] },
    pt: { question: 'Quem era o primo de Ester que a criou?', options: ['Hamã', 'Mordecai', 'Xerxes', 'Neemias'] },
    fr: { question: 'Qui était le cousin d\'Esther qui l\'a élevée?', options: ['Haman', 'Mardochée', 'Xerxès', 'Néhémie'] }
  },
  'bc40': {
    en: { question: 'Who rebuilt the walls of Jerusalem?', options: ['Ezra', 'Nehemiah', 'Zerubbabel', 'Daniel'] },
    it: { question: 'Chi ricostruì le mura di Gerusalemme?', options: ['Esdra', 'Neemia', 'Zorobabele', 'Daniele'] },
    es: { question: '¿Quién reconstruyó los muros de Jerusalén?', options: ['Esdras', 'Nehemías', 'Zorobabel', 'Daniel'] },
    pt: { question: 'Quem reconstruiu os muros de Jerusalém?', options: ['Esdras', 'Neemias', 'Zorobabel', 'Daniel'] },
    fr: { question: 'Qui a reconstruit les murs de Jérusalem?', options: ['Esdras', 'Néhémie', 'Zorobabel', 'Daniel'] }
  },
  'bc41': {
    en: { question: 'Who was the suffering servant in the book of Job?', options: ['Jeremiah', 'Job', 'David', 'Moses'] },
    it: { question: 'Chi era il servo sofferente nel libro di Giobbe?', options: ['Geremia', 'Giobbe', 'Davide', 'Mosè'] },
    es: { question: '¿Quién era el siervo sufriente en el libro de Job?', options: ['Jeremías', 'Job', 'David', 'Moisés'] },
    pt: { question: 'Quem era o servo sofredor no livro de Jó?', options: ['Jeremias', 'Jó', 'Davi', 'Moisés'] },
    fr: { question: 'Qui était le serviteur souffrant dans le livre de Job?', options: ['Jérémie', 'Job', 'David', 'Moïse'] }
  },
  'bc42': {
    en: { question: 'Who was swallowed by a great fish?', options: ['Elijah', 'Jonah', 'Amos', 'Hosea'] },
    it: { question: 'Chi fu inghiottito da un grande pesce?', options: ['Elia', 'Giona', 'Amos', 'Osea'] },
    es: { question: '¿Quién fue tragado por un gran pez?', options: ['Elías', 'Jonás', 'Amós', 'Oseas'] },
    pt: { question: 'Quem foi engolido por um grande peixe?', options: ['Elias', 'Jonas', 'Amós', 'Oséias'] },
    fr: { question: 'Qui a été avalé par un grand poisson?', options: ['Élie', 'Jonas', 'Amos', 'Osée'] }
  },
  'bc43': {
    en: { question: 'Who was the weeping prophet?', options: ['Isaiah', 'Jeremiah', 'Ezekiel', 'Daniel'] },
    it: { question: 'Chi era il profeta piangente?', options: ['Isaia', 'Geremia', 'Ezechiele', 'Daniele'] },
    es: { question: '¿Quién era el profeta llorón?', options: ['Isaías', 'Jeremías', 'Ezequiel', 'Daniel'] },
    pt: { question: 'Quem era o profeta chorão?', options: ['Isaías', 'Jeremias', 'Ezequiel', 'Daniel'] },
    fr: { question: 'Qui était le prophète pleurant?', options: ['Ésaïe', 'Jérémie', 'Ézéchiel', 'Daniel'] }
  },
  'bc44': {
    en: { question: 'Who saw the valley of dry bones?', options: ['Isaiah', 'Jeremiah', 'Ezekiel', 'Daniel'] },
    it: { question: 'Chi vide la valle delle ossa secche?', options: ['Isaia', 'Geremia', 'Ezechiele', 'Daniele'] },
    es: { question: '¿Quién vio el valle de los huesos secos?', options: ['Isaías', 'Jeremías', 'Ezequiel', 'Daniel'] },
    pt: { question: 'Quem viu o vale dos ossos secos?', options: ['Isaías', 'Jeremias', 'Ezequiel', 'Daniel'] },
    fr: { question: 'Qui a vu la vallée des ossements desséchés?', options: ['Ésaïe', 'Jérémie', 'Ézéchiel', 'Daniel'] }
  },
  'bc45': {
    en: { question: 'Who was the angel who announced Jesus\' birth?', options: ['Michael', 'Gabriel', 'Raphael', 'Uriel'] },
    it: { question: 'Chi era l\'angelo che annunciò la nascita di Gesù?', options: ['Michele', 'Gabriele', 'Raffaele', 'Uriele'] },
    es: { question: '¿Quién era el ángel que anunció el nacimiento de Jesús?', options: ['Miguel', 'Gabriel', 'Rafael', 'Uriel'] },
    pt: { question: 'Quem era o anjo que anunciou o nascimento de Jesus?', options: ['Miguel', 'Gabriel', 'Rafael', 'Uriel'] },
    fr: { question: 'Qui était l\'ange qui a annoncé la naissance de Jésus?', options: ['Michel', 'Gabriel', 'Raphaël', 'Uriel'] }
  },
  'bc46': {
    en: { question: 'Who was Jesus\' mother?', options: ['Elizabeth', 'Anna', 'Mary', 'Martha'] },
    it: { question: 'Chi era la madre di Gesù?', options: ['Elisabetta', 'Anna', 'Maria', 'Marta'] },
    es: { question: '¿Quién era la madre de Jesús?', options: ['Elisabet', 'Ana', 'María', 'Marta'] },
    pt: { question: 'Quem era a mãe de Jesus?', options: ['Isabel', 'Ana', 'Maria', 'Marta'] },
    fr: { question: 'Qui était la mère de Jésus?', options: ['Élisabeth', 'Anne', 'Marie', 'Marthe'] }
  },
  'bc47': {
    en: { question: 'Who was Jesus\' earthly father?', options: ['Zechariah', 'Joseph', 'Jacob', 'David'] },
    it: { question: 'Chi era il padre terreno di Gesù?', options: ['Zaccaria', 'Giuseppe', 'Giacobbe', 'Davide'] },
    es: { question: '¿Quién era el padre terrenal de Jesús?', options: ['Zacarías', 'José', 'Jacob', 'David'] },
    pt: { question: 'Quem era o pai terreno de Jesus?', options: ['Zacarias', 'José', 'Jacó', 'Davi'] },
    fr: { question: 'Qui était le père terrestre de Jésus?', options: ['Zacharie', 'Joseph', 'Jacob', 'David'] }
  },
  'bc48': {
    en: { question: 'Who was John the Baptist\'s mother?', options: ['Mary', 'Anna', 'Elizabeth', 'Martha'] },
    it: { question: 'Chi era la madre di Giovanni Battista?', options: ['Maria', 'Anna', 'Elisabetta', 'Marta'] },
    es: { question: '¿Quién era la madre de Juan el Bautista?', options: ['María', 'Ana', 'Elisabet', 'Marta'] },
    pt: { question: 'Quem era a mãe de João Batista?', options: ['Maria', 'Ana', 'Isabel', 'Marta'] },
    fr: { question: 'Qui était la mère de Jean-Baptiste?', options: ['Marie', 'Anne', 'Élisabeth', 'Marthe'] }
  },
  'bc49': {
    en: { question: 'Who baptized Jesus?', options: ['Peter', 'John the Baptist', 'Andrew', 'James'] },
    it: { question: 'Chi battezzò Gesù?', options: ['Pietro', 'Giovanni Battista', 'Andrea', 'Giacomo'] },
    es: { question: '¿Quién bautizó a Jesús?', options: ['Pedro', 'Juan el Bautista', 'Andrés', 'Santiago'] },
    pt: { question: 'Quem batizou Jesus?', options: ['Pedro', 'João Batista', 'André', 'Tiago'] },
    fr: { question: 'Qui a baptisé Jésus?', options: ['Pierre', 'Jean-Baptiste', 'André', 'Jacques'] }
  },
  'bc50': {
    en: { question: 'Who was the first disciple called by Jesus?', options: ['Peter', 'Andrew', 'John', 'James'] },
    it: { question: 'Chi fu il primo discepolo chiamato da Gesù?', options: ['Pietro', 'Andrea', 'Giovanni', 'Giacomo'] },
    es: { question: '¿Quién fue el primer discípulo llamado por Jesús?', options: ['Pedro', 'Andrés', 'Juan', 'Santiago'] },
    pt: { question: 'Quem foi o primeiro discípulo chamado por Jesus?', options: ['Pedro', 'André', 'João', 'Tiago'] },
    fr: { question: 'Qui fut le premier disciple appelé par Jésus?', options: ['Pierre', 'André', 'Jean', 'Jacques'] }
  },
  'bc51': {
    en: { question: 'Who was the disciple whom Jesus loved?', options: ['Peter', 'James', 'John', 'Andrew'] },
    it: { question: 'Chi era il discepolo che Gesù amava?', options: ['Pietro', 'Giacomo', 'Giovanni', 'Andrea'] },
    es: { question: '¿Quién era el discípulo a quien Jesús amaba?', options: ['Pedro', 'Santiago', 'Juan', 'Andrés'] },
    pt: { question: 'Quem era o discípulo a quem Jesus amava?', options: ['Pedro', 'Tiago', 'João', 'André'] },
    fr: { question: 'Qui était le disciple que Jésus aimait?', options: ['Pierre', 'Jacques', 'Jean', 'André'] }
  },
  'bc52': {
    en: { question: 'Who denied Jesus three times?', options: ['Judas', 'Peter', 'Thomas', 'James'] },
    it: { question: 'Chi rinnegò Gesù tre volte?', options: ['Giuda', 'Pietro', 'Tommaso', 'Giacomo'] },
    es: { question: '¿Quién negó a Jesús tres veces?', options: ['Judas', 'Pedro', 'Tomás', 'Santiago'] },
    pt: { question: 'Quem negou Jesus três vezes?', options: ['Judas', 'Pedro', 'Tomé', 'Tiago'] },
    fr: { question: 'Qui a renié Jésus trois fois?', options: ['Judas', 'Pierre', 'Thomas', 'Jacques'] }
  },
  'bc53': {
    en: { question: 'Who betrayed Jesus for 30 pieces of silver?', options: ['Peter', 'Judas Iscariot', 'Thomas', 'Matthew'] },
    it: { question: 'Chi tradì Gesù per 30 denari d\'argento?', options: ['Pietro', 'Giuda Iscariota', 'Tommaso', 'Matteo'] },
    es: { question: '¿Quién traicionó a Jesús por 30 piezas de plata?', options: ['Pedro', 'Judas Iscariote', 'Tomás', 'Mateo'] },
    pt: { question: 'Quem traiu Jesus por 30 moedas de prata?', options: ['Pedro', 'Judas Iscariotes', 'Tomé', 'Mateus'] },
    fr: { question: 'Qui a trahi Jésus pour 30 pièces d\'argent?', options: ['Pierre', 'Judas Iscariote', 'Thomas', 'Matthieu'] }
  },
  'bc54': {
    en: { question: 'Who doubted until he saw Jesus\' wounds?', options: ['Peter', 'John', 'Thomas', 'Philip'] },
    it: { question: 'Chi dubitò finché non vide le ferite di Gesù?', options: ['Pietro', 'Giovanni', 'Tommaso', 'Filippo'] },
    es: { question: '¿Quién dudó hasta que vio las heridas de Jesús?', options: ['Pedro', 'Juan', 'Tomás', 'Felipe'] },
    pt: { question: 'Quem duvidou até ver as feridas de Jesus?', options: ['Pedro', 'João', 'Tomé', 'Filipe'] },
    fr: { question: 'Qui a douté jusqu\'à ce qu\'il voie les blessures de Jésus?', options: ['Pierre', 'Jean', 'Thomas', 'Philippe'] }
  },
  'bc55': {
    en: { question: 'Who was the tax collector who became a disciple?', options: ['Peter', 'Matthew', 'James', 'John'] },
    it: { question: 'Chi era l\'esattore delle tasse che divenne discepolo?', options: ['Pietro', 'Matteo', 'Giacomo', 'Giovanni'] },
    es: { question: '¿Quién era el recaudador de impuestos que se convirtió en discípulo?', options: ['Pedro', 'Mateo', 'Santiago', 'Juan'] },
    pt: { question: 'Quem era o cobrador de impostos que se tornou discípulo?', options: ['Pedro', 'Mateus', 'Tiago', 'João'] },
    fr: { question: 'Qui était le collecteur d\'impôts qui est devenu disciple?', options: ['Pierre', 'Matthieu', 'Jacques', 'Jean'] }
  },
  'bc56': {
    en: { question: 'Who were the sons of Zebedee?', options: ['Peter and Andrew', 'James and John', 'Philip and Bartholomew', 'Thomas and Matthew'] },
    it: { question: 'Chi erano i figli di Zebedeo?', options: ['Pietro e Andrea', 'Giacomo e Giovanni', 'Filippo e Bartolomeo', 'Tommaso e Matteo'] },
    es: { question: '¿Quiénes eran los hijos de Zebedeo?', options: ['Pedro y Andrés', 'Santiago y Juan', 'Felipe y Bartolomé', 'Tomás y Mateo'] },
    pt: { question: 'Quem eram os filhos de Zebedeu?', options: ['Pedro e André', 'Tiago e João', 'Filipe e Bartolomeu', 'Tomé e Mateus'] },
    fr: { question: 'Qui étaient les fils de Zébédée?', options: ['Pierre et André', 'Jacques et Jean', 'Philippe et Barthélemy', 'Thomas et Matthieu'] }
  },
  'bc57': {
    en: { question: 'Who was the sister of Martha and Lazarus?', options: ['Salome', 'Mary', 'Joanna', 'Susanna'] },
    it: { question: 'Chi era la sorella di Marta e Lazzaro?', options: ['Salome', 'Maria', 'Giovanna', 'Susanna'] },
    es: { question: '¿Quién era la hermana de Marta y Lázaro?', options: ['Salomé', 'María', 'Juana', 'Susana'] },
    pt: { question: 'Quem era a irmã de Marta e Lázaro?', options: ['Salomé', 'Maria', 'Joana', 'Susana'] },
    fr: { question: 'Qui était la sœur de Marthe et Lazare?', options: ['Salomé', 'Marie', 'Jeanne', 'Suzanne'] }
  },
  'bc58': {
    en: { question: 'Who was raised from the dead after four days?', options: ['Jairus\' daughter', 'Lazarus', 'The widow\'s son', 'Tabitha'] },
    it: { question: 'Chi fu risuscitato dopo quattro giorni?', options: ['La figlia di Iairo', 'Lazzaro', 'Il figlio della vedova', 'Tabita'] },
    es: { question: '¿Quién fue resucitado después de cuatro días?', options: ['La hija de Jairo', 'Lázaro', 'El hijo de la viuda', 'Tabita'] },
    pt: { question: 'Quem foi ressuscitado após quatro dias?', options: ['A filha de Jairo', 'Lázaro', 'O filho da viúva', 'Tabita'] },
    fr: { question: 'Qui a été ressuscité après quatre jours?', options: ['La fille de Jaïrus', 'Lazare', 'Le fils de la veuve', 'Tabitha'] }
  },
  'bc59': {
    en: { question: 'Who anointed Jesus with expensive perfume?', options: ['Martha', 'Mary of Bethany', 'Mary Magdalene', 'Salome'] },
    it: { question: 'Chi unse Gesù con un profumo costoso?', options: ['Marta', 'Maria di Betania', 'Maria Maddalena', 'Salome'] },
    es: { question: '¿Quién ungió a Jesús con perfume costoso?', options: ['Marta', 'María de Betania', 'María Magdalena', 'Salomé'] },
    pt: { question: 'Quem ungiu Jesus com perfume caro?', options: ['Marta', 'Maria de Betânia', 'Maria Madalena', 'Salomé'] },
    fr: { question: 'Qui a oint Jésus d\'un parfum coûteux?', options: ['Marthe', 'Marie de Béthanie', 'Marie-Madeleine', 'Salomé'] }
  },
  'bc60': {
    en: { question: 'Who was the Roman governor who condemned Jesus?', options: ['Herod', 'Pilate', 'Felix', 'Festus'] },
    it: { question: 'Chi era il governatore romano che condannò Gesù?', options: ['Erode', 'Pilato', 'Felice', 'Festo'] },
    es: { question: '¿Quién era el gobernador romano que condenó a Jesús?', options: ['Herodes', 'Pilato', 'Félix', 'Festo'] },
    pt: { question: 'Quem era o governador romano que condenou Jesus?', options: ['Herodes', 'Pilatos', 'Félix', 'Festo'] },
    fr: { question: 'Qui était le gouverneur romain qui a condamné Jésus?', options: ['Hérode', 'Pilate', 'Félix', 'Festus'] }
  },
  'bc61': {
    en: { question: 'Who helped carry Jesus\' cross?', options: ['Peter', 'Simon of Cyrene', 'John', 'Joseph of Arimathea'] },
    it: { question: 'Chi aiutò a portare la croce di Gesù?', options: ['Pietro', 'Simone di Cirene', 'Giovanni', 'Giuseppe di Arimatea'] },
    es: { question: '¿Quién ayudó a cargar la cruz de Jesús?', options: ['Pedro', 'Simón de Cirene', 'Juan', 'José de Arimatea'] },
    pt: { question: 'Quem ajudou a carregar a cruz de Jesus?', options: ['Pedro', 'Simão de Cirene', 'João', 'José de Arimateia'] },
    fr: { question: 'Qui a aidé à porter la croix de Jésus?', options: ['Pierre', 'Simon de Cyrène', 'Jean', 'Joseph d\'Arimathie'] }
  },
  'bc62': {
    en: { question: 'Who provided the tomb for Jesus?', options: ['Nicodemus', 'Joseph of Arimathea', 'Peter', 'John'] },
    it: { question: 'Chi fornì la tomba per Gesù?', options: ['Nicodemo', 'Giuseppe di Arimatea', 'Pietro', 'Giovanni'] },
    es: { question: '¿Quién proporcionó la tumba para Jesús?', options: ['Nicodemo', 'José de Arimatea', 'Pedro', 'Juan'] },
    pt: { question: 'Quem forneceu o túmulo para Jesus?', options: ['Nicodemos', 'José de Arimateia', 'Pedro', 'João'] },
    fr: { question: 'Qui a fourni le tombeau pour Jésus?', options: ['Nicodème', 'Joseph d\'Arimathie', 'Pierre', 'Jean'] }
  },
  'bc63': {
    en: { question: 'Who was the first to see the risen Jesus?', options: ['Peter', 'John', 'Mary Magdalene', 'Thomas'] },
    it: { question: 'Chi fu il primo a vedere Gesù risorto?', options: ['Pietro', 'Giovanni', 'Maria Maddalena', 'Tommaso'] },
    es: { question: '¿Quién fue el primero en ver a Jesús resucitado?', options: ['Pedro', 'Juan', 'María Magdalena', 'Tomás'] },
    pt: { question: 'Quem foi o primeiro a ver Jesus ressurreto?', options: ['Pedro', 'João', 'Maria Madalena', 'Tomé'] },
    fr: { question: 'Qui a été le premier à voir Jésus ressuscité?', options: ['Pierre', 'Jean', 'Marie-Madeleine', 'Thomas'] }
  },
  'bc64': {
    en: { question: 'Who was chosen to replace Judas?', options: ['Paul', 'Barnabas', 'Matthias', 'Silas'] },
    it: { question: 'Chi fu scelto per sostituire Giuda?', options: ['Paolo', 'Barnaba', 'Mattia', 'Sila'] },
    es: { question: '¿Quién fue elegido para reemplazar a Judas?', options: ['Pablo', 'Bernabé', 'Matías', 'Silas'] },
    pt: { question: 'Quem foi escolhido para substituir Judas?', options: ['Paulo', 'Barnabé', 'Matias', 'Silas'] },
    fr: { question: 'Qui a été choisi pour remplacer Judas?', options: ['Paul', 'Barnabas', 'Matthias', 'Silas'] }
  },
  'bc65': {
    en: { question: 'Who was the first Christian martyr?', options: ['James', 'Stephen', 'Peter', 'Paul'] },
    it: { question: 'Chi fu il primo martire cristiano?', options: ['Giacomo', 'Stefano', 'Pietro', 'Paolo'] },
    es: { question: '¿Quién fue el primer mártir cristiano?', options: ['Santiago', 'Esteban', 'Pedro', 'Pablo'] },
    pt: { question: 'Quem foi o primeiro mártir cristão?', options: ['Tiago', 'Estêvão', 'Pedro', 'Paulo'] },
    fr: { question: 'Qui fut le premier martyr chrétien?', options: ['Jacques', 'Étienne', 'Pierre', 'Paul'] }
  },
  'bc66': {
    en: { question: 'Who was converted on the road to Damascus?', options: ['Peter', 'Paul', 'Barnabas', 'Stephen'] },
    it: { question: 'Chi si convertì sulla via di Damasco?', options: ['Pietro', 'Paolo', 'Barnaba', 'Stefano'] },
    es: { question: '¿Quién se convirtió en el camino a Damasco?', options: ['Pedro', 'Pablo', 'Bernabé', 'Esteban'] },
    pt: { question: 'Quem se converteu no caminho de Damasco?', options: ['Pedro', 'Paulo', 'Barnabé', 'Estêvão'] },
    fr: { question: 'Qui s\'est converti sur le chemin de Damas?', options: ['Pierre', 'Paul', 'Barnabas', 'Étienne'] }
  },
  'bc67': {
    en: { question: 'Who baptized Paul?', options: ['Peter', 'Barnabas', 'Ananias', 'Silas'] },
    it: { question: 'Chi battezzò Paolo?', options: ['Pietro', 'Barnaba', 'Anania', 'Sila'] },
    es: { question: '¿Quién bautizó a Pablo?', options: ['Pedro', 'Bernabé', 'Ananías', 'Silas'] },
    pt: { question: 'Quem batizou Paulo?', options: ['Pedro', 'Barnabé', 'Ananias', 'Silas'] },
    fr: { question: 'Qui a baptisé Paul?', options: ['Pierre', 'Barnabas', 'Ananias', 'Silas'] }
  },
  'bc68': {
    en: { question: 'Who was Paul\'s companion on his first missionary journey?', options: ['Silas', 'Timothy', 'Barnabas', 'Luke'] },
    it: { question: 'Chi era il compagno di Paolo nel suo primo viaggio missionario?', options: ['Sila', 'Timoteo', 'Barnaba', 'Luca'] },
    es: { question: '¿Quién era el compañero de Pablo en su primer viaje misionero?', options: ['Silas', 'Timoteo', 'Bernabé', 'Lucas'] },
    pt: { question: 'Quem era o companheiro de Paulo em sua primeira viagem missionária?', options: ['Silas', 'Timóteo', 'Barnabé', 'Lucas'] },
    fr: { question: 'Qui était le compagnon de Paul lors de son premier voyage missionnaire?', options: ['Silas', 'Timothée', 'Barnabas', 'Luc'] }
  },
  'bc69': {
    en: { question: 'Who was the first Gentile convert?', options: ['Lydia', 'Cornelius', 'Ethiopian eunuch', 'Sergius Paulus'] },
    it: { question: 'Chi fu il primo convertito gentile?', options: ['Lidia', 'Cornelio', 'L\'eunuco etiope', 'Sergio Paolo'] },
    es: { question: '¿Quién fue el primer convertido gentil?', options: ['Lidia', 'Cornelio', 'El eunuco etíope', 'Sergio Paulo'] },
    pt: { question: 'Quem foi o primeiro convertido gentio?', options: ['Lídia', 'Cornélio', 'O eunuco etíope', 'Sérgio Paulo'] },
    fr: { question: 'Qui fut le premier converti païen?', options: ['Lydie', 'Corneille', 'L\'eunuque éthiopien', 'Sergius Paulus'] }
  },
  'bc70': {
    en: { question: 'Who was the first European convert?', options: ['Cornelius', 'Lydia', 'The Philippian jailer', 'Jason'] },
    it: { question: 'Chi fu il primo convertito europeo?', options: ['Cornelio', 'Lidia', 'Il carceriere di Filippi', 'Giasone'] },
    es: { question: '¿Quién fue el primer convertido europeo?', options: ['Cornelio', 'Lidia', 'El carcelero de Filipos', 'Jasón'] },
    pt: { question: 'Quem foi o primeiro convertido europeu?', options: ['Cornélio', 'Lídia', 'O carcereiro de Filipos', 'Jasão'] },
    fr: { question: 'Qui fut le premier converti européen?', options: ['Corneille', 'Lydie', 'Le geôlier de Philippes', 'Jason'] }
  },
  'bc71': {
    en: { question: 'Who was Paul\'s young companion from Lystra?', options: ['Silas', 'Timothy', 'Titus', 'Luke'] },
    it: { question: 'Chi era il giovane compagno di Paolo da Listra?', options: ['Sila', 'Timoteo', 'Tito', 'Luca'] },
    es: { question: '¿Quién era el joven compañero de Pablo de Listra?', options: ['Silas', 'Timoteo', 'Tito', 'Lucas'] },
    pt: { question: 'Quem era o jovem companheiro de Paulo de Listra?', options: ['Silas', 'Timóteo', 'Tito', 'Lucas'] },
    fr: { question: 'Qui était le jeune compagnon de Paul de Lystre?', options: ['Silas', 'Timothée', 'Tite', 'Luc'] }
  },
  'bc72': {
    en: { question: 'Who were Aquila and Priscilla?', options: ['Apostles', 'Tentmakers who helped Paul', 'Jewish leaders', 'Roman officials'] },
    it: { question: 'Chi erano Aquila e Priscilla?', options: ['Apostoli', 'Fabbricanti di tende che aiutarono Paolo', 'Capi ebrei', 'Funzionari romani'] },
    es: { question: '¿Quiénes eran Aquila y Priscila?', options: ['Apóstoles', 'Fabricantes de tiendas que ayudaron a Pablo', 'Líderes judíos', 'Funcionarios romanos'] },
    pt: { question: 'Quem eram Áquila e Priscila?', options: ['Apóstolos', 'Fabricantes de tendas que ajudaram Paulo', 'Líderes judeus', 'Funcionários romanos'] },
    fr: { question: 'Qui étaient Aquilas et Priscille?', options: ['Apôtres', 'Fabricants de tentes qui ont aidé Paul', 'Chefs juifs', 'Fonctionnaires romains'] }
  },
  'bc73': {
    en: { question: 'Who was the eloquent speaker taught by Aquila and Priscilla?', options: ['Timothy', 'Titus', 'Apollos', 'Silas'] },
    it: { question: 'Chi era l\'oratore eloquente istruito da Aquila e Priscilla?', options: ['Timoteo', 'Tito', 'Apollo', 'Sila'] },
    es: { question: '¿Quién era el orador elocuente enseñado por Aquila y Priscila?', options: ['Timoteo', 'Tito', 'Apolos', 'Silas'] },
    pt: { question: 'Quem era o orador eloquente ensinado por Áquila e Priscila?', options: ['Timóteo', 'Tito', 'Apolo', 'Silas'] },
    fr: { question: 'Qui était l\'orateur éloquent enseigné par Aquilas et Priscille?', options: ['Timothée', 'Tite', 'Apollos', 'Silas'] }
  },
  'bc74': {
    en: { question: 'Who was the physician companion of Paul?', options: ['Timothy', 'Silas', 'Luke', 'Mark'] },
    it: { question: 'Chi era il medico compagno di Paolo?', options: ['Timoteo', 'Sila', 'Luca', 'Marco'] },
    es: { question: '¿Quién era el médico compañero de Pablo?', options: ['Timoteo', 'Silas', 'Lucas', 'Marcos'] },
    pt: { question: 'Quem era o médico companheiro de Paulo?', options: ['Timóteo', 'Silas', 'Lucas', 'Marcos'] },
    fr: { question: 'Qui était le médecin compagnon de Paul?', options: ['Timothée', 'Silas', 'Luc', 'Marc'] }
  },
  'bc75': {
    en: { question: 'Who was the runaway slave Paul sent back to his master?', options: ['Tychicus', 'Epaphras', 'Onesimus', 'Archippus'] },
    it: { question: 'Chi era lo schiavo fuggitivo che Paolo rimandò al suo padrone?', options: ['Tichico', 'Epafra', 'Onesimo', 'Archippo'] },
    es: { question: '¿Quién era el esclavo fugitivo que Pablo envió de regreso a su amo?', options: ['Tíquico', 'Epafras', 'Onésimo', 'Arquipo'] },
    pt: { question: 'Quem era o escravo fugitivo que Paulo enviou de volta ao seu senhor?', options: ['Tíquico', 'Epafras', 'Onésimo', 'Arquipo'] },
    fr: { question: 'Qui était l\'esclave fugitif que Paul a renvoyé à son maître?', options: ['Tychique', 'Épaphras', 'Onésime', 'Archippe'] }
  },
  'bc76': {
    en: { question: 'Who was the master of the runaway slave Onesimus?', options: ['Timothy', 'Titus', 'Philemon', 'Epaphras'] },
    it: { question: 'Chi era il padrone dello schiavo fuggitivo Onesimo?', options: ['Timoteo', 'Tito', 'Filemone', 'Epafra'] },
    es: { question: '¿Quién era el amo del esclavo fugitivo Onésimo?', options: ['Timoteo', 'Tito', 'Filemón', 'Epafras'] },
    pt: { question: 'Quem era o senhor do escravo fugitivo Onésimo?', options: ['Timóteo', 'Tito', 'Filemom', 'Epafras'] },
    fr: { question: 'Qui était le maître de l\'esclave fugitif Onésime?', options: ['Timothée', 'Tite', 'Philémon', 'Épaphras'] }
  },
  'bc77': {
    en: { question: 'Who was the king who almost became a Christian?', options: ['Herod', 'Agrippa', 'Felix', 'Festus'] },
    it: { question: 'Chi era il re che quasi divenne cristiano?', options: ['Erode', 'Agrippa', 'Felice', 'Festo'] },
    es: { question: '¿Quién era el rey que casi se hizo cristiano?', options: ['Herodes', 'Agripa', 'Félix', 'Festo'] },
    pt: { question: 'Quem era o rei que quase se tornou cristão?', options: ['Herodes', 'Agripa', 'Félix', 'Festo'] },
    fr: { question: 'Qui était le roi qui est presque devenu chrétien?', options: ['Hérode', 'Agrippa', 'Félix', 'Festus'] }
  },
  'bc78': {
    en: { question: 'Who was Abraham\'s servant who found a wife for Isaac?', options: ['Lot', 'Eliezer', 'Laban', 'Nahor'] },
    it: { question: 'Chi era il servo di Abramo che trovò una moglie per Isacco?', options: ['Lot', 'Eliezer', 'Labano', 'Naor'] },
    es: { question: '¿Quién era el siervo de Abraham que encontró esposa para Isaac?', options: ['Lot', 'Eliezer', 'Labán', 'Nacor'] },
    pt: { question: 'Quem era o servo de Abraão que encontrou uma esposa para Isaque?', options: ['Ló', 'Eliezer', 'Labão', 'Naor'] },
    fr: { question: 'Qui était le serviteur d\'Abraham qui a trouvé une femme pour Isaac?', options: ['Lot', 'Éliézer', 'Laban', 'Nachor'] }
  },
  'bc79': {
    en: { question: 'Who was Isaac\'s wife?', options: ['Sarah', 'Rachel', 'Rebekah', 'Leah'] },
    it: { question: 'Chi era la moglie di Isacco?', options: ['Sara', 'Rachele', 'Rebecca', 'Lea'] },
    es: { question: '¿Quién era la esposa de Isaac?', options: ['Sara', 'Raquel', 'Rebeca', 'Lea'] },
    pt: { question: 'Quem era a esposa de Isaque?', options: ['Sara', 'Raquel', 'Rebeca', 'Lia'] },
    fr: { question: 'Qui était l\'épouse d\'Isaac?', options: ['Sara', 'Rachel', 'Rébecca', 'Léa'] }
  },
  'bc80': {
    en: { question: 'Who was Jacob\'s favorite wife?', options: ['Leah', 'Rachel', 'Bilhah', 'Zilpah'] },
    it: { question: 'Chi era la moglie preferita di Giacobbe?', options: ['Lea', 'Rachele', 'Bila', 'Zilpa'] },
    es: { question: '¿Quién era la esposa favorita de Jacob?', options: ['Lea', 'Raquel', 'Bilha', 'Zilpa'] },
    pt: { question: 'Quem era a esposa favorita de Jacó?', options: ['Lia', 'Raquel', 'Bila', 'Zilpa'] },
    fr: { question: 'Qui était l\'épouse préférée de Jacob?', options: ['Léa', 'Rachel', 'Bilha', 'Zilpa'] }
  },
  'bc81': {
    en: { question: 'Who was Joseph\'s full brother?', options: ['Judah', 'Reuben', 'Benjamin', 'Dan'] },
    it: { question: 'Chi era il fratello germano di Giuseppe?', options: ['Giuda', 'Ruben', 'Beniamino', 'Dan'] },
    es: { question: '¿Quién era el hermano de padre y madre de José?', options: ['Judá', 'Rubén', 'Benjamín', 'Dan'] },
    pt: { question: 'Quem era o irmão legítimo de José?', options: ['Judá', 'Rúben', 'Benjamim', 'Dã'] },
    fr: { question: 'Qui était le frère de même père et mère de Joseph?', options: ['Juda', 'Ruben', 'Benjamin', 'Dan'] }
  },
  'bc82': {
    en: { question: 'Who was the wife of Moses?', options: ['Miriam', 'Zipporah', 'Jochebed', 'Elisheba'] },
    it: { question: 'Chi era la moglie di Mosè?', options: ['Miriam', 'Sefora', 'Iochebed', 'Eliseba'] },
    es: { question: '¿Quién era la esposa de Moisés?', options: ['Miriam', 'Séfora', 'Jocabed', 'Elisabet'] },
    pt: { question: 'Quem era a esposa de Moisés?', options: ['Miriã', 'Zípora', 'Joquebede', 'Eliseba'] },
    fr: { question: 'Qui était l\'épouse de Moïse?', options: ['Myriam', 'Séphora', 'Jokébed', 'Élischéba'] }
  },
  'bc83': {
    en: { question: 'Who was David\'s mighty warrior commander?', options: ['Nathan', 'Joab', 'Uriah', 'Benaiah'] },
    it: { question: 'Chi era il comandante dei valorosi di Davide?', options: ['Natan', 'Ioab', 'Uria', 'Benaia'] },
    es: { question: '¿Quién era el comandante de los valientes de David?', options: ['Natán', 'Joab', 'Urías', 'Benaía'] },
    pt: { question: 'Quem era o comandante dos valentes de Davi?', options: ['Natã', 'Joabe', 'Urias', 'Benaia'] },
    fr: { question: 'Qui était le commandant des vaillants guerriers de David?', options: ['Nathan', 'Joab', 'Urie', 'Benaja'] }
  },
  'bc84': {
    en: { question: 'Whose wife did David take after sending her husband to die?', options: ['Abigail', 'Bathsheba', 'Michal', 'Ahinoam'] },
    it: { question: 'Di chi prese la moglie Davide dopo aver mandato a morte il marito?', options: ['Abigail', 'Betsabea', 'Mical', 'Ainoam'] },
    es: { question: '¿La esposa de quién tomó David después de enviar a su esposo a morir?', options: ['Abigaíl', 'Betsabé', 'Mical', 'Ahinoam'] },
    pt: { question: 'A esposa de quem Davi tomou após enviar seu marido para morrer?', options: ['Abigail', 'Bate-Seba', 'Mical', 'Ainoã'] },
    fr: { question: 'De qui David a-t-il pris la femme après avoir envoyé son mari à la mort?', options: ['Abigaïl', 'Bethsabée', 'Mical', 'Achinoam'] }
  },
  'bc85': {
    en: { question: 'Who was the prophet who confronted David about his sin?', options: ['Samuel', 'Nathan', 'Elijah', 'Elisha'] },
    it: { question: 'Chi era il profeta che affrontò Davide riguardo al suo peccato?', options: ['Samuele', 'Natan', 'Elia', 'Eliseo'] },
    es: { question: '¿Quién era el profeta que confrontó a David sobre su pecado?', options: ['Samuel', 'Natán', 'Elías', 'Eliseo'] },
    pt: { question: 'Quem era o profeta que confrontou Davi sobre seu pecado?', options: ['Samuel', 'Natã', 'Elias', 'Eliseu'] },
    fr: { question: 'Qui était le prophète qui a confronté David au sujet de son péché?', options: ['Samuel', 'Nathan', 'Élie', 'Élisée'] }
  },
  'bc86': {
    en: { question: 'Who was David\'s rebellious son?', options: ['Solomon', 'Absalom', 'Amnon', 'Adonijah'] },
    it: { question: 'Chi era il figlio ribelle di Davide?', options: ['Salomone', 'Assalonne', 'Amnon', 'Adonia'] },
    es: { question: '¿Quién era el hijo rebelde de David?', options: ['Salomón', 'Absalón', 'Amnón', 'Adonías'] },
    pt: { question: 'Quem era o filho rebelde de Davi?', options: ['Salomão', 'Absalão', 'Amnom', 'Adonias'] },
    fr: { question: 'Qui était le fils rebelle de David?', options: ['Salomon', 'Absalom', 'Amnon', 'Adonija'] }
  },
  'bc87': {
    en: { question: 'Who was the queen who visited Solomon?', options: ['Jezebel', 'Queen of Sheba', 'Esther', 'Vashti'] },
    it: { question: 'Chi era la regina che visitò Salomone?', options: ['Gezabele', 'Regina di Saba', 'Ester', 'Vasti'] },
    es: { question: '¿Quién era la reina que visitó a Salomón?', options: ['Jezabel', 'Reina de Saba', 'Ester', 'Vasti'] },
    pt: { question: 'Quem era a rainha que visitou Salomão?', options: ['Jezabel', 'Rainha de Sabá', 'Ester', 'Vasti'] },
    fr: { question: 'Qui était la reine qui a visité Salomon?', options: ['Jézabel', 'Reine de Saba', 'Esther', 'Vasthi'] }
  },
  'bc88': {
    en: { question: 'Who was the Syrian general healed of leprosy?', options: ['Hazael', 'Naaman', 'Ben-Hadad', 'Rezin'] },
    it: { question: 'Chi era il generale siriano guarito dalla lebbra?', options: ['Azael', 'Naaman', 'Ben-Adad', 'Rezin'] },
    es: { question: '¿Quién era el general sirio sanado de lepra?', options: ['Hazael', 'Naamán', 'Ben-adad', 'Rezín'] },
    pt: { question: 'Quem era o general sírio curado da lepra?', options: ['Hazael', 'Naamã', 'Ben-Hadade', 'Rezim'] },
    fr: { question: 'Qui était le général syrien guéri de la lèpre?', options: ['Hazaël', 'Naaman', 'Ben-Hadad', 'Retsin'] }
  },
  'bc89': {
    en: { question: 'Who was the king who saw handwriting on the wall?', options: ['Nebuchadnezzar', 'Belshazzar', 'Darius', 'Cyrus'] },
    it: { question: 'Chi era il re che vide la scrittura sul muro?', options: ['Nabucodonosor', 'Baldassarre', 'Dario', 'Ciro'] },
    es: { question: '¿Quién era el rey que vio la escritura en la pared?', options: ['Nabucodonosor', 'Belsasar', 'Darío', 'Ciro'] },
    pt: { question: 'Quem era o rei que viu a escrita na parede?', options: ['Nabucodonosor', 'Belsazar', 'Dario', 'Ciro'] },
    fr: { question: 'Qui était le roi qui a vu l\'écriture sur le mur?', options: ['Nabuchodonosor', 'Belschatsar', 'Darius', 'Cyrus'] }
  },
  'bc90': {
    en: { question: 'Who was the villain in the book of Esther?', options: ['Mordecai', 'Xerxes', 'Haman', 'Hegai'] },
    it: { question: 'Chi era il cattivo nel libro di Ester?', options: ['Mardocheo', 'Serse', 'Aman', 'Egai'] },
    es: { question: '¿Quién era el villano en el libro de Ester?', options: ['Mardoqueo', 'Jerjes', 'Amán', 'Hegai'] },
    pt: { question: 'Quem era o vilão no livro de Ester?', options: ['Mordecai', 'Xerxes', 'Hamã', 'Hegai'] },
    fr: { question: 'Qui était le méchant dans le livre d\'Esther?', options: ['Mardochée', 'Xerxès', 'Haman', 'Hégaï'] }
  },
  'bc91': {
    en: { question: 'Who was the leader of the return from Babylonian exile?', options: ['Ezra', 'Nehemiah', 'Zerubbabel', 'Daniel'] },
    it: { question: 'Chi era il capo del ritorno dall\'esilio babilonese?', options: ['Esdra', 'Neemia', 'Zorobabele', 'Daniele'] },
    es: { question: '¿Quién era el líder del regreso del exilio babilónico?', options: ['Esdras', 'Nehemías', 'Zorobabel', 'Daniel'] },
    pt: { question: 'Quem era o líder do retorno do exílio babilônico?', options: ['Esdras', 'Neemias', 'Zorobabel', 'Daniel'] },
    fr: { question: 'Qui était le chef du retour de l\'exil babylonien?', options: ['Esdras', 'Néhémie', 'Zorobabel', 'Daniel'] }
  },
  'bc92': {
    en: { question: 'Who was the scribe who read the Law to the people?', options: ['Nehemiah', 'Ezra', 'Zerubbabel', 'Joshua'] },
    it: { question: 'Chi era lo scriba che lesse la Legge al popolo?', options: ['Neemia', 'Esdra', 'Zorobabele', 'Giosuè'] },
    es: { question: '¿Quién era el escriba que leyó la Ley al pueblo?', options: ['Nehemías', 'Esdras', 'Zorobabel', 'Josué'] },
    pt: { question: 'Quem era o escriba que leu a Lei ao povo?', options: ['Neemias', 'Esdras', 'Zorobabel', 'Josué'] },
    fr: { question: 'Qui était le scribe qui a lu la Loi au peuple?', options: ['Néhémie', 'Esdras', 'Zorobabel', 'Josué'] }
  },
  'bc93': {
    en: { question: 'Who was Boaz\'s wife?', options: ['Naomi', 'Ruth', 'Orpah', 'Hannah'] },
    it: { question: 'Chi era la moglie di Boaz?', options: ['Noemi', 'Ruth', 'Orpa', 'Anna'] },
    es: { question: '¿Quién era la esposa de Booz?', options: ['Noemí', 'Rut', 'Orfa', 'Ana'] },
    pt: { question: 'Quem era a esposa de Boaz?', options: ['Noemi', 'Rute', 'Orfa', 'Ana'] },
    fr: { question: 'Qui était l\'épouse de Boaz?', options: ['Naomi', 'Ruth', 'Orpa', 'Anne'] }
  },
  'bc94': {
    en: { question: 'Who was Hannah\'s son?', options: ['Eli', 'Samuel', 'David', 'Saul'] },
    it: { question: 'Chi era il figlio di Anna?', options: ['Eli', 'Samuele', 'Davide', 'Saul'] },
    es: { question: '¿Quién era el hijo de Ana?', options: ['Elí', 'Samuel', 'David', 'Saúl'] },
    pt: { question: 'Quem era o filho de Ana?', options: ['Eli', 'Samuel', 'Davi', 'Saul'] },
    fr: { question: 'Qui était le fils d\'Anne?', options: ['Éli', 'Samuel', 'David', 'Saül'] }
  },
  'bc95': {
    en: { question: 'Who was the priest who raised Samuel?', options: ['Aaron', 'Eli', 'Phinehas', 'Zadok'] },
    it: { question: 'Chi era il sacerdote che allevò Samuele?', options: ['Aronne', 'Eli', 'Fineas', 'Sadoc'] },
    es: { question: '¿Quién era el sacerdote que crió a Samuel?', options: ['Aarón', 'Elí', 'Finees', 'Sadoc'] },
    pt: { question: 'Quem era o sacerdote que criou Samuel?', options: ['Arão', 'Eli', 'Finéias', 'Zadoque'] },
    fr: { question: 'Qui était le prêtre qui a élevé Samuel?', options: ['Aaron', 'Éli', 'Phinées', 'Tsadok'] }
  },
  'bc96': {
    en: { question: 'Who was the prophet who married a prostitute?', options: ['Amos', 'Micah', 'Hosea', 'Joel'] },
    it: { question: 'Chi era il profeta che sposò una prostituta?', options: ['Amos', 'Michea', 'Osea', 'Gioele'] },
    es: { question: '¿Quién era el profeta que se casó con una prostituta?', options: ['Amós', 'Miqueas', 'Oseas', 'Joel'] },
    pt: { question: 'Quem era o profeta que se casou com uma prostituta?', options: ['Amós', 'Miqueias', 'Oséias', 'Joel'] },
    fr: { question: 'Qui était le prophète qui a épousé une prostituée?', options: ['Amos', 'Michée', 'Osée', 'Joël'] }
  },
  'bc97': {
    en: { question: 'Who was Moses\' father-in-law?', options: ['Laban', 'Jethro', 'Lot', 'Balaam'] },
    it: { question: 'Chi era il suocero di Mosè?', options: ['Labano', 'Ietro', 'Lot', 'Balaam'] },
    es: { question: '¿Quién era el suegro de Moisés?', options: ['Labán', 'Jetro', 'Lot', 'Balaam'] },
    pt: { question: 'Quem era o sogro de Moisés?', options: ['Labão', 'Jetro', 'Ló', 'Balaão'] },
    fr: { question: 'Qui était le beau-père de Moïse?', options: ['Laban', 'Jéthro', 'Lot', 'Balaam'] }
  },
  'bc98': {
    en: { question: 'Who was the judge who defeated the Midianites with 300 men?', options: ['Samson', 'Gideon', 'Jephthah', 'Ehud'] },
    it: { question: 'Chi era il giudice che sconfisse i Madianiti con 300 uomini?', options: ['Sansone', 'Gedeone', 'Iefte', 'Eud'] },
    es: { question: '¿Quién era el juez que derrotó a los madianitas con 300 hombres?', options: ['Sansón', 'Gedeón', 'Jefté', 'Ehúd'] },
    pt: { question: 'Quem era o juiz que derrotou os midianitas com 300 homens?', options: ['Sansão', 'Gideão', 'Jefté', 'Eúde'] },
    fr: { question: 'Qui était le juge qui a vaincu les Madianites avec 300 hommes?', options: ['Samson', 'Gédéon', 'Jephté', 'Éhud'] }
  },
  'bc99': {
    en: { question: 'Who was the left-handed judge who killed King Eglon?', options: ['Gideon', 'Samson', 'Ehud', 'Othniel'] },
    it: { question: 'Chi era il giudice mancino che uccise il re Eglon?', options: ['Gedeone', 'Sansone', 'Eud', 'Otniel'] },
    es: { question: '¿Quién era el juez zurdo que mató al rey Eglón?', options: ['Gedeón', 'Sansón', 'Ehúd', 'Otoniel'] },
    pt: { question: 'Quem era o juiz canhoto que matou o rei Eglom?', options: ['Gideão', 'Sansão', 'Eúde', 'Otniel'] },
    fr: { question: 'Qui était le juge gaucher qui a tué le roi Églon?', options: ['Gédéon', 'Samson', 'Éhud', 'Othniel'] }
  },
  'bc100': {
    en: { question: 'Who was the high priest during Jesus\' trial?', options: ['Annas', 'Caiaphas', 'Zechariah', 'Ananias'] },
    it: { question: 'Chi era il sommo sacerdote durante il processo di Gesù?', options: ['Anna', 'Caifa', 'Zaccaria', 'Anania'] },
    es: { question: '¿Quién era el sumo sacerdote durante el juicio de Jesús?', options: ['Anás', 'Caifás', 'Zacarías', 'Ananías'] },
    pt: { question: 'Quem era o sumo sacerdote durante o julgamento de Jesus?', options: ['Anás', 'Caifás', 'Zacarias', 'Ananias'] },
    fr: { question: 'Qui était le grand prêtre lors du procès de Jésus?', options: ['Anne', 'Caïphe', 'Zacharie', 'Ananias'] }
  }
};

export function getBiblicalCharactersTranslation(
  id: string,
  language: Language,
  fallback: { question: string; options: string[]; explanation?: string }
): { question: string; options: string[]; explanation?: string } {
  const translation = biblicalCharactersTranslations[id];
  if (translation) {
    if (translation[language]) {
      return translation[language]!;
    }
    if (translation['en']) {
      return translation['en']!;
    }
  }
  return fallback;
}
