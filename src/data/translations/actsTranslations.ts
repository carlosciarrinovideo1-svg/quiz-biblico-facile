import { Language } from '../../contexts/LanguageContext';

interface QuestionTranslation {
  question: string;
  options: string[];
  explanation?: string;
}

type ActsTranslations = {
  [key: string]: {
    [lang in Language]?: QuestionTranslation;
  };
};

export const actsTranslations: ActsTranslations = {
  'acts1': {
    en: { question: 'To whom is the Book of Acts addressed?', options: ['Timothy', 'Theophilus', 'Titus', 'Philemon'] },
    it: { question: 'A chi è indirizzato il libro degli Atti?', options: ['Timoteo', 'Teofilo', 'Tito', 'Filemone'] },
    es: { question: '¿A quién está dirigido el libro de los Hechos?', options: ['Timoteo', 'Teófilo', 'Tito', 'Filemón'] },
    pt: { question: 'A quem é dirigido o livro de Atos?', options: ['Timóteo', 'Teófilo', 'Tito', 'Filemom'] },
    fr: { question: 'À qui le livre des Actes est-il adressé?', options: ['Timothée', 'Théophile', 'Tite', 'Philémon'] }
  },
  'acts2': {
    en: { question: 'Who wrote the Book of Acts?', options: ['Paul', 'Peter', 'Luke', 'John'] },
    it: { question: 'Chi ha scritto il libro degli Atti?', options: ['Paolo', 'Pietro', 'Luca', 'Giovanni'] },
    es: { question: '¿Quién escribió el libro de los Hechos?', options: ['Pablo', 'Pedro', 'Lucas', 'Juan'] },
    pt: { question: 'Quem escreveu o livro de Atos?', options: ['Paulo', 'Pedro', 'Lucas', 'João'] },
    fr: { question: 'Qui a écrit le livre des Actes?', options: ['Paul', 'Pierre', 'Luc', 'Jean'] }
  },
  'acts3': {
    en: { question: 'On what day did the Holy Spirit descend?', options: ['Passover', 'Pentecost', 'Tabernacles', 'Purim'] },
    it: { question: 'In quale giorno discese lo Spirito Santo?', options: ['Pasqua', 'Pentecoste', 'Tabernacoli', 'Purim'] },
    es: { question: '¿En qué día descendió el Espíritu Santo?', options: ['Pascua', 'Pentecostés', 'Tabernáculos', 'Purim'] },
    pt: { question: 'Em que dia o Espírito Santo desceu?', options: ['Páscoa', 'Pentecostes', 'Tabernáculos', 'Purim'] },
    fr: { question: 'Quel jour le Saint-Esprit est-il descendu?', options: ['Pâque', 'Pentecôte', 'Tabernacles', 'Pourim'] }
  },
  'acts4': {
    en: { question: 'Who was chosen to replace Judas?', options: ['Paul', 'Barnabas', 'Matthias', 'Silas'] },
    it: { question: 'Chi fu scelto per sostituire Giuda?', options: ['Paolo', 'Barnaba', 'Mattia', 'Sila'] },
    es: { question: '¿Quién fue elegido para reemplazar a Judas?', options: ['Pablo', 'Bernabé', 'Matías', 'Silas'] },
    pt: { question: 'Quem foi escolhido para substituir Judas?', options: ['Paulo', 'Barnabé', 'Matias', 'Silas'] },
    fr: { question: 'Qui a été choisi pour remplacer Judas?', options: ['Paul', 'Barnabas', 'Matthias', 'Silas'] }
  },
  'acts5': {
    en: { question: 'How many people were added to the church on Pentecost?', options: ['1000', '2000', '3000', '5000'] },
    it: { question: 'Quante persone furono aggiunte alla chiesa a Pentecoste?', options: ['1000', '2000', '3000', '5000'] },
    es: { question: '¿Cuántas personas fueron añadidas a la iglesia en Pentecostés?', options: ['1000', '2000', '3000', '5000'] },
    pt: { question: 'Quantas pessoas foram acrescentadas à igreja no Pentecostes?', options: ['1000', '2000', '3000', '5000'] },
    fr: { question: 'Combien de personnes ont été ajoutées à l\'église à la Pentecôte?', options: ['1000', '2000', '3000', '5000'] }
  },
  'acts6': {
    en: { question: 'Who was the first Christian martyr?', options: ['James', 'Stephen', 'Peter', 'Paul'] },
    it: { question: 'Chi fu il primo martire cristiano?', options: ['Giacomo', 'Stefano', 'Pietro', 'Paolo'] },
    es: { question: '¿Quién fue el primer mártir cristiano?', options: ['Santiago', 'Esteban', 'Pedro', 'Pablo'] },
    pt: { question: 'Quem foi o primeiro mártir cristão?', options: ['Tiago', 'Estêvão', 'Pedro', 'Paulo'] },
    fr: { question: 'Qui fut le premier martyr chrétien?', options: ['Jacques', 'Étienne', 'Pierre', 'Paul'] }
  },
  'acts7': {
    en: { question: 'What was Paul\'s name before conversion?', options: ['Simon', 'Saul', 'Samuel', 'Seth'] },
    it: { question: 'Qual era il nome di Paolo prima della conversione?', options: ['Simone', 'Saulo', 'Samuele', 'Set'] },
    es: { question: '¿Cuál era el nombre de Pablo antes de su conversión?', options: ['Simón', 'Saulo', 'Samuel', 'Set'] },
    pt: { question: 'Qual era o nome de Paulo antes da conversão?', options: ['Simão', 'Saulo', 'Samuel', 'Sete'] },
    fr: { question: 'Quel était le nom de Paul avant sa conversion?', options: ['Simon', 'Saul', 'Samuel', 'Seth'] }
  },
  'acts8': {
    en: { question: 'On what road did Paul encounter Jesus?', options: ['Road to Jerusalem', 'Road to Damascus', 'Road to Jericho', 'Road to Emmaus'] },
    it: { question: 'Su quale strada Paolo incontrò Gesù?', options: ['Via di Gerusalemme', 'Via di Damasco', 'Via di Gerico', 'Via di Emmaus'] },
    es: { question: '¿En qué camino Pablo encontró a Jesús?', options: ['Camino de Jerusalén', 'Camino de Damasco', 'Camino de Jericó', 'Camino de Emaús'] },
    pt: { question: 'Em que estrada Paulo encontrou Jesus?', options: ['Estrada de Jerusalém', 'Estrada de Damasco', 'Estrada de Jericó', 'Estrada de Emaús'] },
    fr: { question: 'Sur quelle route Paul a-t-il rencontré Jésus?', options: ['Route de Jérusalem', 'Route de Damas', 'Route de Jéricho', 'Route d\'Emmaüs'] }
  },
  'acts9': {
    en: { question: 'Who baptized Paul?', options: ['Peter', 'Barnabas', 'Ananias', 'Silas'] },
    it: { question: 'Chi battezzò Paolo?', options: ['Pietro', 'Barnaba', 'Anania', 'Sila'] },
    es: { question: '¿Quién bautizó a Pablo?', options: ['Pedro', 'Bernabé', 'Ananías', 'Silas'] },
    pt: { question: 'Quem batizou Paulo?', options: ['Pedro', 'Barnabé', 'Ananias', 'Silas'] },
    fr: { question: 'Qui a baptisé Paul?', options: ['Pierre', 'Barnabas', 'Ananias', 'Silas'] }
  },
  'acts10': {
    en: { question: 'What was Peter\'s vision about?', options: ['A sheet with animals', 'A ladder to heaven', 'A burning bush', 'A river of fire'] },
    it: { question: 'Cosa riguardava la visione di Pietro?', options: ['Un lenzuolo con animali', 'Una scala verso il cielo', 'Un roveto ardente', 'Un fiume di fuoco'] },
    es: { question: '¿De qué trataba la visión de Pedro?', options: ['Una sábana con animales', 'Una escalera al cielo', 'Una zarza ardiente', 'Un río de fuego'] },
    pt: { question: 'Sobre o que era a visão de Pedro?', options: ['Um lençol com animais', 'Uma escada para o céu', 'Uma sarça ardente', 'Um rio de fogo'] },
    fr: { question: 'De quoi parlait la vision de Pierre?', options: ['Un drap avec des animaux', 'Une échelle vers le ciel', 'Un buisson ardent', 'Un fleuve de feu'] }
  },
  'acts11': {
    en: { question: 'Who was the first Gentile convert?', options: ['Cornelius', 'Lydia', 'The Ethiopian eunuch', 'Sergius Paulus'] },
    it: { question: 'Chi fu il primo convertito gentile?', options: ['Cornelio', 'Lidia', 'L\'eunuco etiope', 'Sergio Paolo'] },
    es: { question: '¿Quién fue el primer convertido gentil?', options: ['Cornelio', 'Lidia', 'El eunuco etíope', 'Sergio Paulo'] },
    pt: { question: 'Quem foi o primeiro convertido gentio?', options: ['Cornélio', 'Lídia', 'O eunuco etíope', 'Sérgio Paulo'] },
    fr: { question: 'Qui fut le premier converti païen?', options: ['Corneille', 'Lydie', 'L\'eunuque éthiopien', 'Sergius Paulus'] }
  },
  'acts12': {
    en: { question: 'Where were believers first called Christians?', options: ['Jerusalem', 'Antioch', 'Rome', 'Ephesus'] },
    it: { question: 'Dove i credenti furono chiamati cristiani per la prima volta?', options: ['Gerusalemme', 'Antiochia', 'Roma', 'Efeso'] },
    es: { question: '¿Dónde fueron llamados cristianos por primera vez los creyentes?', options: ['Jerusalén', 'Antioquía', 'Roma', 'Éfeso'] },
    pt: { question: 'Onde os crentes foram chamados de cristãos pela primeira vez?', options: ['Jerusalém', 'Antioquia', 'Roma', 'Éfeso'] },
    fr: { question: 'Où les croyants ont-ils été appelés chrétiens pour la première fois?', options: ['Jérusalem', 'Antioche', 'Rome', 'Éphèse'] }
  },
  'acts13': {
    en: { question: 'Who accompanied Paul on his first missionary journey?', options: ['Peter', 'Silas', 'Barnabas', 'Timothy'] },
    it: { question: 'Chi accompagnò Paolo nel suo primo viaggio missionario?', options: ['Pietro', 'Sila', 'Barnaba', 'Timoteo'] },
    es: { question: '¿Quién acompañó a Pablo en su primer viaje misionero?', options: ['Pedro', 'Silas', 'Bernabé', 'Timoteo'] },
    pt: { question: 'Quem acompanhou Paulo em sua primeira viagem missionária?', options: ['Pedro', 'Silas', 'Barnabé', 'Timóteo'] },
    fr: { question: 'Qui a accompagné Paul lors de son premier voyage missionnaire?', options: ['Pierre', 'Silas', 'Barnabas', 'Timothée'] }
  },
  'acts14': {
    en: { question: 'Who did Philip baptize on the road to Gaza?', options: ['Cornelius', 'Ethiopian eunuch', 'Simon the sorcerer', 'Lydia'] },
    it: { question: 'Chi battezzò Filippo sulla strada per Gaza?', options: ['Cornelio', 'L\'eunuco etiope', 'Simon mago', 'Lidia'] },
    es: { question: '¿A quién bautizó Felipe en el camino a Gaza?', options: ['Cornelio', 'El eunuco etíope', 'Simón el mago', 'Lidia'] },
    pt: { question: 'Quem Filipe batizou no caminho para Gaza?', options: ['Cornélio', 'O eunuco etíope', 'Simão o mago', 'Lídia'] },
    fr: { question: 'Qui Philippe a-t-il baptisé sur le chemin de Gaza?', options: ['Corneille', 'L\'eunuque éthiopien', 'Simon le magicien', 'Lydie'] }
  },
  'acts15': {
    en: { question: 'Who was raised from the dead by Peter?', options: ['Eutychus', 'Dorcas/Tabitha', 'Lazarus', 'Jairus\' daughter'] },
    it: { question: 'Chi fu risuscitato da Pietro?', options: ['Eutico', 'Dorca/Tabita', 'Lazzaro', 'La figlia di Iairo'] },
    es: { question: '¿Quién fue resucitado por Pedro?', options: ['Eutico', 'Dorcas/Tabita', 'Lázaro', 'La hija de Jairo'] },
    pt: { question: 'Quem foi ressuscitado por Pedro?', options: ['Êutico', 'Dorcas/Tabita', 'Lázaro', 'A filha de Jairo'] },
    fr: { question: 'Qui a été ressuscité par Pierre?', options: ['Eutychus', 'Dorcas/Tabitha', 'Lazare', 'La fille de Jaïrus'] }
  },
  'acts16': {
    en: { question: 'Which apostle was imprisoned by Herod?', options: ['Paul', 'Peter', 'James', 'John'] },
    it: { question: 'Quale apostolo fu imprigionato da Erode?', options: ['Paolo', 'Pietro', 'Giacomo', 'Giovanni'] },
    es: { question: '¿Qué apóstol fue encarcelado por Herodes?', options: ['Pablo', 'Pedro', 'Santiago', 'Juan'] },
    pt: { question: 'Qual apóstolo foi preso por Herodes?', options: ['Paulo', 'Pedro', 'Tiago', 'João'] },
    fr: { question: 'Quel apôtre a été emprisonné par Hérode?', options: ['Paul', 'Pierre', 'Jacques', 'Jean'] }
  },
  'acts17': {
    en: { question: 'Who freed Peter from prison?', options: ['An earthquake', 'An angel', 'The disciples', 'A guard'] },
    it: { question: 'Chi liberò Pietro dalla prigione?', options: ['Un terremoto', 'Un angelo', 'I discepoli', 'Una guardia'] },
    es: { question: '¿Quién liberó a Pedro de la prisión?', options: ['Un terremoto', 'Un ángel', 'Los discípulos', 'Un guardia'] },
    pt: { question: 'Quem libertou Pedro da prisão?', options: ['Um terremoto', 'Um anjo', 'Os discípulos', 'Um guarda'] },
    fr: { question: 'Qui a libéré Pierre de prison?', options: ['Un tremblement de terre', 'Un ange', 'Les disciples', 'Un garde'] }
  },
  'acts18': {
    en: { question: 'Who struck Elymas the sorcerer blind?', options: ['Peter', 'Paul', 'Barnabas', 'An angel'] },
    it: { question: 'Chi rese cieco Elima il mago?', options: ['Pietro', 'Paolo', 'Barnaba', 'Un angelo'] },
    es: { question: '¿Quién dejó ciego a Elimas el mago?', options: ['Pedro', 'Pablo', 'Bernabé', 'Un ángel'] },
    pt: { question: 'Quem cegou Elimas o mago?', options: ['Pedro', 'Paulo', 'Barnabé', 'Um anjo'] },
    fr: { question: 'Qui a rendu aveugle Élymas le magicien?', options: ['Pierre', 'Paul', 'Barnabas', 'Un ange'] }
  },
  'acts19': {
    en: { question: 'At what city were Paul and Barnabas mistaken for gods?', options: ['Athens', 'Lystra', 'Derbe', 'Iconium'] },
    it: { question: 'In quale città Paolo e Barnaba furono scambiati per dei?', options: ['Atene', 'Listra', 'Derbe', 'Iconio'] },
    es: { question: '¿En qué ciudad Pablo y Bernabé fueron confundidos con dioses?', options: ['Atenas', 'Listra', 'Derbe', 'Iconio'] },
    pt: { question: 'Em que cidade Paulo e Barnabé foram confundidos com deuses?', options: ['Atenas', 'Listra', 'Derbe', 'Icônio'] },
    fr: { question: 'Dans quelle ville Paul et Barnabas ont-ils été pris pour des dieux?', options: ['Athènes', 'Lystre', 'Derbe', 'Iconium'] }
  },
  'acts20': {
    en: { question: 'What was the main issue at the Jerusalem Council?', options: ['Circumcision', 'Baptism', 'Sabbath', 'Temple worship'] },
    it: { question: 'Qual era la questione principale al Concilio di Gerusalemme?', options: ['Circoncisione', 'Battesimo', 'Sabato', 'Culto nel tempio'] },
    es: { question: '¿Cuál fue el tema principal en el Concilio de Jerusalén?', options: ['Circuncisión', 'Bautismo', 'Sábado', 'Adoración en el templo'] },
    pt: { question: 'Qual foi a questão principal no Concílio de Jerusalém?', options: ['Circuncisão', 'Batismo', 'Sábado', 'Adoração no templo'] },
    fr: { question: 'Quel était le sujet principal au Concile de Jérusalem?', options: ['Circoncision', 'Baptême', 'Sabbat', 'Culte au temple'] }
  },
  'acts21': {
    en: { question: 'Who accompanied Paul after the split with Barnabas?', options: ['Timothy', 'Silas', 'Luke', 'Mark'] },
    it: { question: 'Chi accompagnò Paolo dopo la separazione da Barnaba?', options: ['Timoteo', 'Sila', 'Luca', 'Marco'] },
    es: { question: '¿Quién acompañó a Pablo después de la separación de Bernabé?', options: ['Timoteo', 'Silas', 'Lucas', 'Marcos'] },
    pt: { question: 'Quem acompanhou Paulo após a separação de Barnabé?', options: ['Timóteo', 'Silas', 'Lucas', 'Marcos'] },
    fr: { question: 'Qui a accompagné Paul après la séparation d\'avec Barnabas?', options: ['Timothée', 'Silas', 'Luc', 'Marc'] }
  },
  'acts22': {
    en: { question: 'Who was the first European convert?', options: ['Cornelius', 'Lydia', 'The Philippian jailer', 'Jason'] },
    it: { question: 'Chi fu il primo convertito europeo?', options: ['Cornelio', 'Lidia', 'Il carceriere di Filippi', 'Giasone'] },
    es: { question: '¿Quién fue el primer convertido europeo?', options: ['Cornelio', 'Lidia', 'El carcelero de Filipos', 'Jasón'] },
    pt: { question: 'Quem foi o primeiro convertido europeu?', options: ['Cornélio', 'Lídia', 'O carcereiro de Filipos', 'Jasão'] },
    fr: { question: 'Qui fut le premier converti européen?', options: ['Corneille', 'Lydie', 'Le geôlier de Philippes', 'Jason'] }
  },
  'acts23': {
    en: { question: 'What was Lydia\'s profession?', options: ['Tentmaker', 'Seller of purple', 'Farmer', 'Fisherman'] },
    it: { question: 'Qual era la professione di Lidia?', options: ['Fabbricante di tende', 'Venditrice di porpora', 'Contadina', 'Pescatrice'] },
    es: { question: '¿Cuál era la profesión de Lidia?', options: ['Fabricante de tiendas', 'Vendedora de púrpura', 'Agricultora', 'Pescadora'] },
    pt: { question: 'Qual era a profissão de Lídia?', options: ['Fabricante de tendas', 'Vendedora de púrpura', 'Agricultora', 'Pescadora'] },
    fr: { question: 'Quelle était la profession de Lydie?', options: ['Fabricante de tentes', 'Marchande de pourpre', 'Agricultrice', 'Pêcheuse'] }
  },
  'acts24': {
    en: { question: 'What happened after Paul and Silas sang in prison?', options: ['Guards fell asleep', 'An earthquake', 'They escaped', 'Angels appeared'] },
    it: { question: 'Cosa accadde dopo che Paolo e Sila cantarono in prigione?', options: ['Le guardie si addormentarono', 'Un terremoto', 'Fuggirono', 'Apparvero angeli'] },
    es: { question: '¿Qué sucedió después de que Pablo y Silas cantaron en la prisión?', options: ['Los guardias se durmieron', 'Un terremoto', 'Escaparon', 'Aparecieron ángeles'] },
    pt: { question: 'O que aconteceu depois que Paulo e Silas cantaram na prisão?', options: ['Os guardas adormeceram', 'Um terremoto', 'Eles escaparam', 'Anjos apareceram'] },
    fr: { question: 'Que s\'est-il passé après que Paul et Silas ont chanté en prison?', options: ['Les gardes se sont endormis', 'Un tremblement de terre', 'Ils se sont échappés', 'Des anges sont apparus'] }
  },
  'acts25': {
    en: { question: 'What did the Philippian jailer ask Paul and Silas?', options: ['Who are you?', 'What must I do to be saved?', 'Why are you here?', 'What is your god?'] },
    it: { question: 'Cosa chiese il carceriere di Filippi a Paolo e Sila?', options: ['Chi siete?', 'Cosa devo fare per essere salvato?', 'Perché siete qui?', 'Chi è il vostro dio?'] },
    es: { question: '¿Qué preguntó el carcelero de Filipos a Pablo y Silas?', options: ['¿Quiénes son?', '¿Qué debo hacer para ser salvo?', '¿Por qué están aquí?', '¿Cuál es su dios?'] },
    pt: { question: 'O que o carcereiro de Filipos perguntou a Paulo e Silas?', options: ['Quem são vocês?', 'O que devo fazer para ser salvo?', 'Por que estão aqui?', 'Qual é o seu deus?'] },
    fr: { question: 'Qu\'a demandé le geôlier de Philippes à Paul et Silas?', options: ['Qui êtes-vous?', 'Que dois-je faire pour être sauvé?', 'Pourquoi êtes-vous ici?', 'Quel est votre dieu?'] }
  },
  'acts26': {
    en: { question: 'In what city did Paul preach at the Areopagus?', options: ['Rome', 'Corinth', 'Athens', 'Ephesus'] },
    it: { question: 'In quale città Paolo predicò all\'Areopago?', options: ['Roma', 'Corinto', 'Atene', 'Efeso'] },
    es: { question: '¿En qué ciudad Pablo predicó en el Areópago?', options: ['Roma', 'Corinto', 'Atenas', 'Éfeso'] },
    pt: { question: 'Em que cidade Paulo pregou no Areópago?', options: ['Roma', 'Corinto', 'Atenas', 'Éfeso'] },
    fr: { question: 'Dans quelle ville Paul a-t-il prêché à l\'Aréopage?', options: ['Rome', 'Corinthe', 'Athènes', 'Éphèse'] }
  },
  'acts27': {
    en: { question: 'What was Paul\'s profession?', options: ['Fisherman', 'Carpenter', 'Tentmaker', 'Farmer'] },
    it: { question: 'Qual era la professione di Paolo?', options: ['Pescatore', 'Carpentiere', 'Fabbricante di tende', 'Contadino'] },
    es: { question: '¿Cuál era la profesión de Pablo?', options: ['Pescador', 'Carpintero', 'Fabricante de tiendas', 'Agricultor'] },
    pt: { question: 'Qual era a profissão de Paulo?', options: ['Pescador', 'Carpinteiro', 'Fabricante de tendas', 'Agricultor'] },
    fr: { question: 'Quelle était la profession de Paul?', options: ['Pêcheur', 'Charpentier', 'Fabricant de tentes', 'Agriculteur'] }
  },
  'acts28': {
    en: { question: 'Who were Aquila and Priscilla?', options: ['A married couple who worked with Paul', 'Brother and sister', 'Father and daughter', 'Two apostles'] },
    it: { question: 'Chi erano Aquila e Priscilla?', options: ['Una coppia sposata che lavorava con Paolo', 'Fratello e sorella', 'Padre e figlia', 'Due apostoli'] },
    es: { question: '¿Quiénes eran Aquila y Priscila?', options: ['Un matrimonio que trabajaba con Pablo', 'Hermano y hermana', 'Padre e hija', 'Dos apóstoles'] },
    pt: { question: 'Quem eram Áquila e Priscila?', options: ['Um casal que trabalhava com Paulo', 'Irmão e irmã', 'Pai e filha', 'Dois apóstolos'] },
    fr: { question: 'Qui étaient Aquilas et Priscille?', options: ['Un couple marié qui travaillait avec Paul', 'Frère et sœur', 'Père et fille', 'Deux apôtres'] }
  },
  'acts29': {
    en: { question: 'In which city was there a riot of silversmiths?', options: ['Athens', 'Corinth', 'Ephesus', 'Philippi'] },
    it: { question: 'In quale città ci fu una rivolta degli argentieri?', options: ['Atene', 'Corinto', 'Efeso', 'Filippi'] },
    es: { question: '¿En qué ciudad hubo un motín de plateros?', options: ['Atenas', 'Corinto', 'Éfeso', 'Filipos'] },
    pt: { question: 'Em que cidade houve um tumulto de ourives?', options: ['Atenas', 'Corinto', 'Éfeso', 'Filipos'] },
    fr: { question: 'Dans quelle ville y a-t-il eu une émeute d\'orfèvres?', options: ['Athènes', 'Corinthe', 'Éphèse', 'Philippes'] }
  },
  'acts30': {
    en: { question: 'Who fell from a window while Paul was preaching?', options: ['Timothy', 'Eutychus', 'Tychicus', 'Sopater'] },
    it: { question: 'Chi cadde dalla finestra mentre Paolo predicava?', options: ['Timoteo', 'Eutico', 'Tichico', 'Sopatro'] },
    es: { question: '¿Quién cayó de una ventana mientras Pablo predicaba?', options: ['Timoteo', 'Eutico', 'Tíquico', 'Sópatro'] },
    pt: { question: 'Quem caiu de uma janela enquanto Paulo pregava?', options: ['Timóteo', 'Êutico', 'Tíquico', 'Sópatro'] },
    fr: { question: 'Qui est tombé d\'une fenêtre pendant que Paul prêchait?', options: ['Timothée', 'Eutychus', 'Tychique', 'Sopater'] }
  },
  'acts31': {
    en: { question: 'Where did Paul give his farewell speech to the Ephesian elders?', options: ['Ephesus', 'Miletus', 'Troas', 'Philippi'] },
    it: { question: 'Dove Paolo tenne il suo discorso di addio agli anziani di Efeso?', options: ['Efeso', 'Mileto', 'Troade', 'Filippi'] },
    es: { question: '¿Dónde Pablo dio su discurso de despedida a los ancianos de Éfeso?', options: ['Éfeso', 'Mileto', 'Troas', 'Filipos'] },
    pt: { question: 'Onde Paulo fez seu discurso de despedida aos anciãos de Éfeso?', options: ['Éfeso', 'Mileto', 'Trôade', 'Filipos'] },
    fr: { question: 'Où Paul a-t-il prononcé son discours d\'adieu aux anciens d\'Éphèse?', options: ['Éphèse', 'Milet', 'Troas', 'Philippes'] }
  },
  'acts32': {
    en: { question: 'Who warned Paul not to go to Jerusalem?', options: ['Peter', 'Agabus', 'Barnabas', 'Silas'] },
    it: { question: 'Chi avvertì Paolo di non andare a Gerusalemme?', options: ['Pietro', 'Agabo', 'Barnaba', 'Sila'] },
    es: { question: '¿Quién advirtió a Pablo que no fuera a Jerusalén?', options: ['Pedro', 'Ágabo', 'Bernabé', 'Silas'] },
    pt: { question: 'Quem advertiu Paulo para não ir a Jerusalém?', options: ['Pedro', 'Ágabo', 'Barnabé', 'Silas'] },
    fr: { question: 'Qui a averti Paul de ne pas aller à Jérusalem?', options: ['Pierre', 'Agabus', 'Barnabas', 'Silas'] }
  },
  'acts33': {
    en: { question: 'What was Paul\'s Roman citizenship useful for?', options: ['Avoiding beatings', 'Free travel', 'Appealing to Caesar', 'All of these'] },
    it: { question: 'A cosa servì la cittadinanza romana di Paolo?', options: ['Evitare percosse', 'Viaggiare gratis', 'Appellarsi a Cesare', 'Tutte queste'] },
    es: { question: '¿Para qué fue útil la ciudadanía romana de Pablo?', options: ['Evitar golpizas', 'Viajar gratis', 'Apelar a César', 'Todas estas'] },
    pt: { question: 'Para que serviu a cidadania romana de Paulo?', options: ['Evitar espancamentos', 'Viajar de graça', 'Apelar a César', 'Todas essas'] },
    fr: { question: 'À quoi servait la citoyenneté romaine de Paul?', options: ['Éviter les coups', 'Voyager gratuitement', 'Faire appel à César', 'Tout cela'] }
  },
  'acts34': {
    en: { question: 'Before which king did Paul make his defense?', options: ['Herod', 'Agrippa', 'Caesar', 'Festus'] },
    it: { question: 'Davanti a quale re Paolo fece la sua difesa?', options: ['Erode', 'Agrippa', 'Cesare', 'Festo'] },
    es: { question: '¿Ante qué rey Pablo hizo su defensa?', options: ['Herodes', 'Agripa', 'César', 'Festo'] },
    pt: { question: 'Diante de qual rei Paulo fez sua defesa?', options: ['Herodes', 'Agripa', 'César', 'Festo'] },
    fr: { question: 'Devant quel roi Paul a-t-il fait sa défense?', options: ['Hérode', 'Agrippa', 'César', 'Festus'] }
  },
  'acts35': {
    en: { question: 'On which island was Paul shipwrecked?', options: ['Cyprus', 'Crete', 'Malta', 'Sicily'] },
    it: { question: 'Su quale isola Paolo naufragò?', options: ['Cipro', 'Creta', 'Malta', 'Sicilia'] },
    es: { question: '¿En qué isla naufragó Pablo?', options: ['Chipre', 'Creta', 'Malta', 'Sicilia'] },
    pt: { question: 'Em que ilha Paulo naufragou?', options: ['Chipre', 'Creta', 'Malta', 'Sicília'] },
    fr: { question: 'Sur quelle île Paul a-t-il fait naufrage?', options: ['Chypre', 'Crète', 'Malte', 'Sicile'] }
  },
  'acts36': {
    en: { question: 'What bit Paul on the island after the shipwreck?', options: ['A scorpion', 'A snake', 'A spider', 'A dog'] },
    it: { question: 'Cosa morse Paolo sull\'isola dopo il naufragio?', options: ['Uno scorpione', 'Un serpente', 'Un ragno', 'Un cane'] },
    es: { question: '¿Qué mordió a Pablo en la isla después del naufragio?', options: ['Un escorpión', 'Una serpiente', 'Una araña', 'Un perro'] },
    pt: { question: 'O que mordeu Paulo na ilha após o naufrágio?', options: ['Um escorpião', 'Uma serpente', 'Uma aranha', 'Um cão'] },
    fr: { question: 'Qu\'est-ce qui a mordu Paul sur l\'île après le naufrage?', options: ['Un scorpion', 'Un serpent', 'Une araignée', 'Un chien'] }
  },
  'acts37': {
    en: { question: 'How long did Paul stay in Rome under house arrest?', options: ['6 months', '1 year', '2 years', '5 years'] },
    it: { question: 'Quanto tempo Paolo rimase a Roma agli arresti domiciliari?', options: ['6 mesi', '1 anno', '2 anni', '5 anni'] },
    es: { question: '¿Cuánto tiempo Pablo permaneció en Roma bajo arresto domiciliario?', options: ['6 meses', '1 año', '2 años', '5 años'] },
    pt: { question: 'Quanto tempo Paulo ficou em Roma em prisão domiciliar?', options: ['6 meses', '1 ano', '2 anos', '5 anos'] },
    fr: { question: 'Combien de temps Paul est-il resté à Rome en résidence surveillée?', options: ['6 mois', '1 an', '2 ans', '5 ans'] }
  },
  'acts38': {
    en: { question: 'Who was the high priest when Stephen was martyred?', options: ['Annas', 'Caiaphas', 'Ananias', 'Gamaliel'] },
    it: { question: 'Chi era il sommo sacerdote quando Stefano fu martirizzato?', options: ['Anna', 'Caifa', 'Anania', 'Gamaliele'] },
    es: { question: '¿Quién era el sumo sacerdote cuando Esteban fue martirizado?', options: ['Anás', 'Caifás', 'Ananías', 'Gamaliel'] },
    pt: { question: 'Quem era o sumo sacerdote quando Estêvão foi martirizado?', options: ['Anás', 'Caifás', 'Ananias', 'Gamaliel'] },
    fr: { question: 'Qui était le grand prêtre quand Étienne a été martyrisé?', options: ['Anne', 'Caïphe', 'Ananias', 'Gamaliel'] }
  },
  'acts39': {
    en: { question: 'What did Ananias and Sapphira lie about?', options: ['Their age', 'The price of their land', 'Their nationality', 'Their faith'] },
    it: { question: 'Su cosa mentirono Anania e Saffira?', options: ['La loro età', 'Il prezzo del loro terreno', 'La loro nazionalità', 'La loro fede'] },
    es: { question: '¿Sobre qué mintieron Ananías y Safira?', options: ['Su edad', 'El precio de su tierra', 'Su nacionalidad', 'Su fe'] },
    pt: { question: 'Sobre o que Ananias e Safira mentiram?', options: ['Sua idade', 'O preço de sua terra', 'Sua nacionalidade', 'Sua fé'] },
    fr: { question: 'Sur quoi Ananias et Saphira ont-ils menti?', options: ['Leur âge', 'Le prix de leur terre', 'Leur nationalité', 'Leur foi'] }
  },
  'acts40': {
    en: { question: 'What happened to Ananias and Sapphira?', options: ['They were imprisoned', 'They were exiled', 'They died', 'They repented'] },
    it: { question: 'Cosa accadde ad Anania e Saffira?', options: ['Furono imprigionati', 'Furono esiliati', 'Morirono', 'Si pentirono'] },
    es: { question: '¿Qué les pasó a Ananías y Safira?', options: ['Fueron encarcelados', 'Fueron exiliados', 'Murieron', 'Se arrepintieron'] },
    pt: { question: 'O que aconteceu com Ananias e Safira?', options: ['Foram presos', 'Foram exilados', 'Morreram', 'Arrependeram-se'] },
    fr: { question: 'Qu\'est-il arrivé à Ananias et Saphira?', options: ['Ils ont été emprisonnés', 'Ils ont été exilés', 'Ils sont morts', 'Ils se sont repentis'] }
  },
  'acts41': {
    en: { question: 'Who was the Pharisee who advised caution regarding the apostles?', options: ['Nicodemus', 'Gamaliel', 'Joseph of Arimathea', 'Caiaphas'] },
    it: { question: 'Chi era il fariseo che consigliò prudenza riguardo agli apostoli?', options: ['Nicodemo', 'Gamaliele', 'Giuseppe di Arimatea', 'Caifa'] },
    es: { question: '¿Quién era el fariseo que aconsejó cautela respecto a los apóstoles?', options: ['Nicodemo', 'Gamaliel', 'José de Arimatea', 'Caifás'] },
    pt: { question: 'Quem era o fariseu que aconselhou cautela em relação aos apóstolos?', options: ['Nicodemos', 'Gamaliel', 'José de Arimateia', 'Caifás'] },
    fr: { question: 'Qui était le pharisien qui a conseillé la prudence concernant les apôtres?', options: ['Nicodème', 'Gamaliel', 'Joseph d\'Arimathie', 'Caïphe'] }
  },
  'acts42': {
    en: { question: 'How many deacons were chosen to serve tables?', options: ['5', '7', '12', '70'] },
    it: { question: 'Quanti diaconi furono scelti per servire alle mense?', options: ['5', '7', '12', '70'] },
    es: { question: '¿Cuántos diáconos fueron elegidos para servir a las mesas?', options: ['5', '7', '12', '70'] },
    pt: { question: 'Quantos diáconos foram escolhidos para servir às mesas?', options: ['5', '7', '12', '70'] },
    fr: { question: 'Combien de diacres ont été choisis pour servir aux tables?', options: ['5', '7', '12', '70'] }
  },
  'acts43': {
    en: { question: 'Who was one of the seven deacons who later became an evangelist?', options: ['Stephen', 'Philip', 'Prochorus', 'Timon'] },
    it: { question: 'Chi era uno dei sette diaconi che divenne poi evangelista?', options: ['Stefano', 'Filippo', 'Procoro', 'Timone'] },
    es: { question: '¿Quién fue uno de los siete diáconos que luego se convirtió en evangelista?', options: ['Esteban', 'Felipe', 'Prócoro', 'Timón'] },
    pt: { question: 'Quem foi um dos sete diáconos que depois se tornou evangelista?', options: ['Estêvão', 'Filipe', 'Prócoro', 'Timão'] },
    fr: { question: 'Qui était l\'un des sept diacres qui est devenu plus tard évangéliste?', options: ['Étienne', 'Philippe', 'Prochore', 'Timon'] }
  },
  'acts44': {
    en: { question: 'Who tried to buy the power of the Holy Spirit?', options: ['Elymas', 'Simon the sorcerer', 'Bar-Jesus', 'Demetrius'] },
    it: { question: 'Chi cercò di comprare il potere dello Spirito Santo?', options: ['Elima', 'Simon mago', 'Bar-Gesù', 'Demetrio'] },
    es: { question: '¿Quién intentó comprar el poder del Espíritu Santo?', options: ['Elimas', 'Simón el mago', 'Bar-Jesús', 'Demetrio'] },
    pt: { question: 'Quem tentou comprar o poder do Espírito Santo?', options: ['Elimas', 'Simão o mago', 'Bar-Jesus', 'Demétrio'] },
    fr: { question: 'Qui a essayé d\'acheter le pouvoir du Saint-Esprit?', options: ['Élymas', 'Simon le magicien', 'Bar-Jésus', 'Démétrius'] }
  },
  'acts45': {
    en: { question: 'What Scripture was the Ethiopian eunuch reading?', options: ['Psalms', 'Isaiah', 'Jeremiah', 'Daniel'] },
    it: { question: 'Quale Scrittura stava leggendo l\'eunuco etiope?', options: ['Salmi', 'Isaia', 'Geremia', 'Daniele'] },
    es: { question: '¿Qué Escritura estaba leyendo el eunuco etíope?', options: ['Salmos', 'Isaías', 'Jeremías', 'Daniel'] },
    pt: { question: 'Que Escritura o eunuco etíope estava lendo?', options: ['Salmos', 'Isaías', 'Jeremias', 'Daniel'] },
    fr: { question: 'Quelle Écriture l\'eunuque éthiopien lisait-il?', options: ['Psaumes', 'Ésaïe', 'Jérémie', 'Daniel'] }
  },
  'acts46': {
    en: { question: 'How many days was Paul blind after meeting Jesus?', options: ['1', '3', '7', '40'] },
    it: { question: 'Quanti giorni Paolo rimase cieco dopo aver incontrato Gesù?', options: ['1', '3', '7', '40'] },
    es: { question: '¿Cuántos días Pablo estuvo ciego después de encontrar a Jesús?', options: ['1', '3', '7', '40'] },
    pt: { question: 'Quantos dias Paulo ficou cego após encontrar Jesus?', options: ['1', '3', '7', '40'] },
    fr: { question: 'Combien de jours Paul est-il resté aveugle après avoir rencontré Jésus?', options: ['1', '3', '7', '40'] }
  },
  'acts47': {
    en: { question: 'How did Paul escape from Damascus?', options: ['Through a gate', 'In a basket through the wall', 'By boat', 'In disguise'] },
    it: { question: 'Come Paolo fuggì da Damasco?', options: ['Attraverso una porta', 'In una cesta attraverso il muro', 'In barca', 'Travestito'] },
    es: { question: '¿Cómo escapó Pablo de Damasco?', options: ['Por una puerta', 'En una canasta por el muro', 'En barco', 'Disfrazado'] },
    pt: { question: 'Como Paulo escapou de Damasco?', options: ['Por um portão', 'Em um cesto pela muralha', 'De barco', 'Disfarçado'] },
    fr: { question: 'Comment Paul s\'est-il échappé de Damas?', options: ['Par une porte', 'Dans un panier à travers le mur', 'En bateau', 'Déguisé'] }
  },
  'acts48': {
    en: { question: 'Who introduced Paul to the apostles in Jerusalem?', options: ['Peter', 'Barnabas', 'James', 'John'] },
    it: { question: 'Chi presentò Paolo agli apostoli a Gerusalemme?', options: ['Pietro', 'Barnaba', 'Giacomo', 'Giovanni'] },
    es: { question: '¿Quién presentó a Pablo a los apóstoles en Jerusalén?', options: ['Pedro', 'Bernabé', 'Santiago', 'Juan'] },
    pt: { question: 'Quem apresentou Paulo aos apóstolos em Jerusalém?', options: ['Pedro', 'Barnabé', 'Tiago', 'João'] },
    fr: { question: 'Qui a présenté Paul aux apôtres à Jérusalem?', options: ['Pierre', 'Barnabas', 'Jacques', 'Jean'] }
  },
  'acts49': {
    en: { question: 'What was Cornelius\' occupation?', options: ['Merchant', 'Centurion', 'Fisherman', 'Tax collector'] },
    it: { question: 'Qual era l\'occupazione di Cornelio?', options: ['Mercante', 'Centurione', 'Pescatore', 'Esattore delle tasse'] },
    es: { question: '¿Cuál era la ocupación de Cornelio?', options: ['Comerciante', 'Centurión', 'Pescador', 'Recaudador de impuestos'] },
    pt: { question: 'Qual era a ocupação de Cornélio?', options: ['Comerciante', 'Centurião', 'Pescador', 'Cobrador de impostos'] },
    fr: { question: 'Quelle était l\'occupation de Corneille?', options: ['Marchand', 'Centurion', 'Pêcheur', 'Collecteur d\'impôts'] }
  },
  'acts50': {
    en: { question: 'Which apostle James was killed by Herod?', options: ['James son of Zebedee', 'James son of Alphaeus', 'James the brother of Jesus', 'None of them'] },
    it: { question: 'Quale apostolo Giacomo fu ucciso da Erode?', options: ['Giacomo figlio di Zebedeo', 'Giacomo figlio di Alfeo', 'Giacomo fratello di Gesù', 'Nessuno di loro'] },
    es: { question: '¿Qué apóstol Santiago fue asesinado por Herodes?', options: ['Santiago hijo de Zebedeo', 'Santiago hijo de Alfeo', 'Santiago hermano de Jesús', 'Ninguno de ellos'] },
    pt: { question: 'Qual apóstolo Tiago foi morto por Herodes?', options: ['Tiago filho de Zebedeu', 'Tiago filho de Alfeu', 'Tiago irmão de Jesus', 'Nenhum deles'] },
    fr: { question: 'Quel apôtre Jacques a été tué par Hérode?', options: ['Jacques fils de Zébédée', 'Jacques fils d\'Alphée', 'Jacques le frère de Jésus', 'Aucun d\'eux'] }
  },
  'acts51': {
    en: { question: 'Who opened the door when Peter knocked after escaping prison?', options: ['Mary', 'Rhoda', 'Martha', 'Lydia'] },
    it: { question: 'Chi aprì la porta quando Pietro bussò dopo essere fuggito dalla prigione?', options: ['Maria', 'Rode', 'Marta', 'Lidia'] },
    es: { question: '¿Quién abrió la puerta cuando Pedro llamó después de escapar de la prisión?', options: ['María', 'Rode', 'Marta', 'Lidia'] },
    pt: { question: 'Quem abriu a porta quando Pedro bateu após escapar da prisão?', options: ['Maria', 'Rode', 'Marta', 'Lídia'] },
    fr: { question: 'Qui a ouvert la porte quand Pierre a frappé après s\'être échappé de prison?', options: ['Marie', 'Rhode', 'Marthe', 'Lydie'] }
  },
  'acts52': {
    en: { question: 'What happened to Herod after he accepted worship?', options: ['He repented', 'He was struck by an angel and died', 'He converted', 'Nothing'] },
    it: { question: 'Cosa accadde a Erode dopo aver accettato l\'adorazione?', options: ['Si pentì', 'Fu colpito da un angelo e morì', 'Si convertì', 'Niente'] },
    es: { question: '¿Qué le pasó a Herodes después de aceptar la adoración?', options: ['Se arrepintió', 'Fue herido por un ángel y murió', 'Se convirtió', 'Nada'] },
    pt: { question: 'O que aconteceu com Herodes depois que ele aceitou adoração?', options: ['Ele se arrependeu', 'Foi ferido por um anjo e morreu', 'Ele se converteu', 'Nada'] },
    fr: { question: 'Qu\'est-il arrivé à Hérode après avoir accepté l\'adoration?', options: ['Il s\'est repenti', 'Il a été frappé par un ange et est mort', 'Il s\'est converti', 'Rien'] }
  },
  'acts53': {
    en: { question: 'Who was John Mark\'s cousin?', options: ['Paul', 'Barnabas', 'Peter', 'Silas'] },
    it: { question: 'Chi era il cugino di Giovanni Marco?', options: ['Paolo', 'Barnaba', 'Pietro', 'Sila'] },
    es: { question: '¿Quién era el primo de Juan Marcos?', options: ['Pablo', 'Bernabé', 'Pedro', 'Silas'] },
    pt: { question: 'Quem era o primo de João Marcos?', options: ['Paulo', 'Barnabé', 'Pedro', 'Silas'] },
    fr: { question: 'Qui était le cousin de Jean-Marc?', options: ['Paul', 'Barnabas', 'Pierre', 'Silas'] }
  },
  'acts54': {
    en: { question: 'Why did Paul and Barnabas separate?', options: ['Doctrinal disagreement', 'Disagreement about John Mark', 'Different mission fields', 'Personal conflict'] },
    it: { question: 'Perché Paolo e Barnaba si separarono?', options: ['Disaccordo dottrinale', 'Disaccordo su Giovanni Marco', 'Campi di missione diversi', 'Conflitto personale'] },
    es: { question: '¿Por qué Pablo y Bernabé se separaron?', options: ['Desacuerdo doctrinal', 'Desacuerdo sobre Juan Marcos', 'Diferentes campos misioneros', 'Conflicto personal'] },
    pt: { question: 'Por que Paulo e Barnabé se separaram?', options: ['Desacordo doutrinário', 'Desacordo sobre João Marcos', 'Diferentes campos missionários', 'Conflito pessoal'] },
    fr: { question: 'Pourquoi Paul et Barnabas se sont-ils séparés?', options: ['Désaccord doctrinal', 'Désaccord sur Jean-Marc', 'Différents champs de mission', 'Conflit personnel'] }
  },
  'acts55': {
    en: { question: 'Where did Paul have Timothy circumcised?', options: ['Jerusalem', 'Antioch', 'Lystra', 'Derbe'] },
    it: { question: 'Dove Paolo fece circoncidere Timoteo?', options: ['Gerusalemme', 'Antiochia', 'Listra', 'Derbe'] },
    es: { question: '¿Dónde Pablo hizo circuncidar a Timoteo?', options: ['Jerusalén', 'Antioquía', 'Listra', 'Derbe'] },
    pt: { question: 'Onde Paulo fez Timóteo ser circuncidado?', options: ['Jerusalém', 'Antioquia', 'Listra', 'Derbe'] },
    fr: { question: 'Où Paul a-t-il fait circoncire Timothée?', options: ['Jérusalem', 'Antioche', 'Lystre', 'Derbe'] }
  },
  'acts56': {
    en: { question: 'What vision called Paul to Macedonia?', options: ['A man asking for help', 'An angel', 'Jesus Christ', 'A voice from heaven'] },
    it: { question: 'Quale visione chiamò Paolo in Macedonia?', options: ['Un uomo che chiedeva aiuto', 'Un angelo', 'Gesù Cristo', 'Una voce dal cielo'] },
    es: { question: '¿Qué visión llamó a Pablo a Macedonia?', options: ['Un hombre pidiendo ayuda', 'Un ángel', 'Jesucristo', 'Una voz del cielo'] },
    pt: { question: 'Que visão chamou Paulo para a Macedônia?', options: ['Um homem pedindo ajuda', 'Um anjo', 'Jesus Cristo', 'Uma voz do céu'] },
    fr: { question: 'Quelle vision a appelé Paul en Macédoine?', options: ['Un homme demandant de l\'aide', 'Un ange', 'Jésus-Christ', 'Une voix du ciel'] }
  },
  'acts57': {
    en: { question: 'What did Paul and Silas do at midnight in prison?', options: ['Slept', 'Prayed and sang hymns', 'Tried to escape', 'Argued with guards'] },
    it: { question: 'Cosa fecero Paolo e Sila a mezzanotte in prigione?', options: ['Dormirono', 'Pregarono e cantarono inni', 'Cercarono di fuggire', 'Discussero con le guardie'] },
    es: { question: '¿Qué hicieron Pablo y Silas a medianoche en la prisión?', options: ['Durmieron', 'Oraron y cantaron himnos', 'Intentaron escapar', 'Discutieron con los guardias'] },
    pt: { question: 'O que Paulo e Silas fizeram à meia-noite na prisão?', options: ['Dormiram', 'Oraram e cantaram hinos', 'Tentaram escapar', 'Discutiram com os guardas'] },
    fr: { question: 'Qu\'ont fait Paul et Silas à minuit en prison?', options: ['Ils ont dormi', 'Ils ont prié et chanté des hymnes', 'Ils ont essayé de s\'échapper', 'Ils ont discuté avec les gardes'] }
  },
  'acts58': {
    en: { question: 'What did the Bereans do after hearing Paul\'s message?', options: ['Rejected it', 'Searched the Scriptures', 'Asked for miracles', 'Reported him to authorities'] },
    it: { question: 'Cosa fecero i Bereani dopo aver ascoltato il messaggio di Paolo?', options: ['Lo rifiutarono', 'Esaminarono le Scritture', 'Chiesero miracoli', 'Lo denunciarono alle autorità'] },
    es: { question: '¿Qué hicieron los bereanos después de escuchar el mensaje de Pablo?', options: ['Lo rechazaron', 'Escudriñaron las Escrituras', 'Pidieron milagros', 'Lo reportaron a las autoridades'] },
    pt: { question: 'O que os bereanos fizeram depois de ouvir a mensagem de Paulo?', options: ['Rejeitaram', 'Examinaram as Escrituras', 'Pediram milagres', 'Denunciaram às autoridades'] },
    fr: { question: 'Qu\'ont fait les Béréens après avoir entendu le message de Paul?', options: ['Ils l\'ont rejeté', 'Ils ont examiné les Écritures', 'Ils ont demandé des miracles', 'Ils l\'ont signalé aux autorités'] }
  },
  'acts59': {
    en: { question: 'What altar did Paul reference in Athens?', options: ['Altar to Zeus', 'Altar to the Unknown God', 'Altar to Athena', 'Altar to Apollo'] },
    it: { question: 'Quale altare Paolo menzionò ad Atene?', options: ['Altare a Zeus', 'Altare al Dio sconosciuto', 'Altare ad Atena', 'Altare ad Apollo'] },
    es: { question: '¿Qué altar mencionó Pablo en Atenas?', options: ['Altar a Zeus', 'Altar al Dios desconocido', 'Altar a Atenea', 'Altar a Apolo'] },
    pt: { question: 'Que altar Paulo mencionou em Atenas?', options: ['Altar a Zeus', 'Altar ao Deus desconhecido', 'Altar a Atena', 'Altar a Apolo'] },
    fr: { question: 'Quel autel Paul a-t-il mentionné à Athènes?', options: ['Autel à Zeus', 'Autel au Dieu inconnu', 'Autel à Athéna', 'Autel à Apollon'] }
  },
  'acts60': {
    en: { question: 'How long did Paul stay in Corinth?', options: ['6 months', '18 months', '2 years', '3 years'] },
    it: { question: 'Quanto tempo Paolo rimase a Corinto?', options: ['6 mesi', '18 mesi', '2 anni', '3 anni'] },
    es: { question: '¿Cuánto tiempo Pablo permaneció en Corinto?', options: ['6 meses', '18 meses', '2 años', '3 años'] },
    pt: { question: 'Quanto tempo Paulo ficou em Corinto?', options: ['6 meses', '18 meses', '2 anos', '3 anos'] },
    fr: { question: 'Combien de temps Paul est-il resté à Corinthe?', options: ['6 mois', '18 mois', '2 ans', '3 ans'] }
  },
  'acts61': {
    en: { question: 'Who was the proconsul of Achaia who dismissed charges against Paul?', options: ['Felix', 'Festus', 'Gallio', 'Agrippa'] },
    it: { question: 'Chi era il proconsole dell\'Acaia che respinse le accuse contro Paolo?', options: ['Felice', 'Festo', 'Gallione', 'Agrippa'] },
    es: { question: '¿Quién era el procónsul de Acaya que desestimó los cargos contra Pablo?', options: ['Félix', 'Festo', 'Galión', 'Agripa'] },
    pt: { question: 'Quem era o procônsul da Acaia que rejeitou as acusações contra Paulo?', options: ['Félix', 'Festo', 'Gálio', 'Agripa'] },
    fr: { question: 'Qui était le proconsul d\'Achaïe qui a rejeté les accusations contre Paul?', options: ['Félix', 'Festus', 'Gallion', 'Agrippa'] }
  },
  'acts62': {
    en: { question: 'Who did Aquila and Priscilla teach more accurately?', options: ['Timothy', 'Titus', 'Apollos', 'Silas'] },
    it: { question: 'Chi Aquila e Priscilla istruirono più accuratamente?', options: ['Timoteo', 'Tito', 'Apollo', 'Sila'] },
    es: { question: '¿A quién enseñaron más exactamente Aquila y Priscila?', options: ['Timoteo', 'Tito', 'Apolos', 'Silas'] },
    pt: { question: 'Quem Áquila e Priscila ensinaram mais precisamente?', options: ['Timóteo', 'Tito', 'Apolo', 'Silas'] },
    fr: { question: 'Qui Aquilas et Priscille ont-ils enseigné plus exactement?', options: ['Timothée', 'Tite', 'Apollos', 'Silas'] }
  },
  'acts63': {
    en: { question: 'How long did Paul teach in the school of Tyrannus?', options: ['1 year', '2 years', '3 years', '5 years'] },
    it: { question: 'Quanto tempo Paolo insegnò nella scuola di Tiranno?', options: ['1 anno', '2 anni', '3 anni', '5 anni'] },
    es: { question: '¿Cuánto tiempo Pablo enseñó en la escuela de Tirano?', options: ['1 año', '2 años', '3 años', '5 años'] },
    pt: { question: 'Quanto tempo Paulo ensinou na escola de Tirano?', options: ['1 ano', '2 anos', '3 anos', '5 anos'] },
    fr: { question: 'Combien de temps Paul a-t-il enseigné à l\'école de Tyrannus?', options: ['1 an', '2 ans', '3 ans', '5 ans'] }
  },
  'acts64': {
    en: { question: 'Who burned their magic books in Ephesus?', options: ['The silversmiths', 'New believers', 'The town clerk', 'The Jews'] },
    it: { question: 'Chi bruciò i libri di magia a Efeso?', options: ['Gli argentieri', 'I nuovi credenti', 'Il cancelliere della città', 'I giudei'] },
    es: { question: '¿Quiénes quemaron sus libros de magia en Éfeso?', options: ['Los plateros', 'Los nuevos creyentes', 'El secretario de la ciudad', 'Los judíos'] },
    pt: { question: 'Quem queimou seus livros de magia em Éfeso?', options: ['Os ourives', 'Os novos crentes', 'O escrivão da cidade', 'Os judeus'] },
    fr: { question: 'Qui a brûlé ses livres de magie à Éphèse?', options: ['Les orfèvres', 'Les nouveaux croyants', 'Le secrétaire de la ville', 'Les Juifs'] }
  },
  'acts65': {
    en: { question: 'What goddess was worshiped in Ephesus?', options: ['Athena', 'Aphrodite', 'Artemis (Diana)', 'Hera'] },
    it: { question: 'Quale dea era adorata a Efeso?', options: ['Atena', 'Afrodite', 'Artemide (Diana)', 'Era'] },
    es: { question: '¿Qué diosa era adorada en Éfeso?', options: ['Atenea', 'Afrodita', 'Artemisa (Diana)', 'Hera'] },
    pt: { question: 'Que deusa era adorada em Éfeso?', options: ['Atena', 'Afrodite', 'Ártemis (Diana)', 'Hera'] },
    fr: { question: 'Quelle déesse était adorée à Éphèse?', options: ['Athéna', 'Aphrodite', 'Artémis (Diane)', 'Héra'] }
  },
  'acts66': {
    en: { question: 'Who was the silversmith who started the riot in Ephesus?', options: ['Alexander', 'Demetrius', 'Aristarchus', 'Gaius'] },
    it: { question: 'Chi era l\'argentiere che iniziò la rivolta a Efeso?', options: ['Alessandro', 'Demetrio', 'Aristarco', 'Gaio'] },
    es: { question: '¿Quién era el platero que inició el motín en Éfeso?', options: ['Alejandro', 'Demetrio', 'Aristarco', 'Gayo'] },
    pt: { question: 'Quem era o ourives que iniciou o tumulto em Éfeso?', options: ['Alexandre', 'Demétrio', 'Aristarco', 'Gaio'] },
    fr: { question: 'Qui était l\'orfèvre qui a déclenché l\'émeute à Éphèse?', options: ['Alexandre', 'Démétrius', 'Aristarque', 'Gaïus'] }
  },
  'acts67': {
    en: { question: 'What day of the week did the disciples meet in Troas?', options: ['Sabbath', 'First day (Sunday)', 'Third day', 'Seventh day'] },
    it: { question: 'In quale giorno della settimana i discepoli si riunirono a Troade?', options: ['Sabato', 'Primo giorno (Domenica)', 'Terzo giorno', 'Settimo giorno'] },
    es: { question: '¿Qué día de la semana se reunieron los discípulos en Troas?', options: ['Sábado', 'Primer día (Domingo)', 'Tercer día', 'Séptimo día'] },
    pt: { question: 'Em que dia da semana os discípulos se reuniram em Trôade?', options: ['Sábado', 'Primeiro dia (Domingo)', 'Terceiro dia', 'Sétimo dia'] },
    fr: { question: 'Quel jour de la semaine les disciples se sont-ils réunis à Troas?', options: ['Sabbat', 'Premier jour (Dimanche)', 'Troisième jour', 'Septième jour'] }
  },
  'acts68': {
    en: { question: 'What did Paul say to the Ephesian elders about his future?', options: ['He would return soon', 'He would never see them again', 'He would send Timothy', 'He would write letters'] },
    it: { question: 'Cosa disse Paolo agli anziani di Efeso riguardo al suo futuro?', options: ['Sarebbe tornato presto', 'Non li avrebbe più rivisti', 'Avrebbe mandato Timoteo', 'Avrebbe scritto lettere'] },
    es: { question: '¿Qué dijo Pablo a los ancianos de Éfeso sobre su futuro?', options: ['Regresaría pronto', 'Nunca los volvería a ver', 'Enviaría a Timoteo', 'Escribiría cartas'] },
    pt: { question: 'O que Paulo disse aos anciãos de Éfeso sobre seu futuro?', options: ['Ele voltaria em breve', 'Ele nunca mais os veria', 'Ele enviaria Timóteo', 'Ele escreveria cartas'] },
    fr: { question: 'Qu\'a dit Paul aux anciens d\'Éphèse concernant son avenir?', options: ['Il reviendrait bientôt', 'Il ne les reverrait jamais', 'Il enverrait Timothée', 'Il écrirait des lettres'] }
  },
  'acts69': {
    en: { question: 'How did Agabus prophesy about Paul?', options: ['With words only', 'By binding his own hands and feet', 'Through a vision', 'By writing on a scroll'] },
    it: { question: 'Come Agabo profetizzò riguardo a Paolo?', options: ['Solo con parole', 'Legandosi le mani e i piedi', 'Attraverso una visione', 'Scrivendo su un rotolo'] },
    es: { question: '¿Cómo profetizó Ágabo sobre Pablo?', options: ['Solo con palabras', 'Atándose las manos y los pies', 'A través de una visión', 'Escribiendo en un pergamino'] },
    pt: { question: 'Como Ágabo profetizou sobre Paulo?', options: ['Apenas com palavras', 'Amarrando suas próprias mãos e pés', 'Através de uma visão', 'Escrevendo em um pergaminho'] },
    fr: { question: 'Comment Agabus a-t-il prophétisé au sujet de Paul?', options: ['Avec des mots seulement', 'En liant ses propres mains et pieds', 'Par une vision', 'En écrivant sur un rouleau'] }
  },
  'acts70': {
    en: { question: 'Where was Paul arrested?', options: ['Temple in Jerusalem', 'Synagogue in Ephesus', 'Market in Athens', 'House in Rome'] },
    it: { question: 'Dove fu arrestato Paolo?', options: ['Tempio di Gerusalemme', 'Sinagoga di Efeso', 'Mercato di Atene', 'Casa a Roma'] },
    es: { question: '¿Dónde fue arrestado Pablo?', options: ['Templo en Jerusalén', 'Sinagoga en Éfeso', 'Mercado en Atenas', 'Casa en Roma'] },
    pt: { question: 'Onde Paulo foi preso?', options: ['Templo em Jerusalém', 'Sinagoga em Éfeso', 'Mercado em Atenas', 'Casa em Roma'] },
    fr: { question: 'Où Paul a-t-il été arrêté?', options: ['Temple à Jérusalem', 'Synagogue à Éphèse', 'Marché à Athènes', 'Maison à Rome'] }
  },
  'acts71': {
    en: { question: 'What was Paul accused of bringing into the temple?', options: ['A Gentile', 'Weapons', 'Unclean food', 'Idols'] },
    it: { question: 'Di cosa fu accusato Paolo di aver portato nel tempio?', options: ['Un gentile', 'Armi', 'Cibo impuro', 'Idoli'] },
    es: { question: '¿De qué fue acusado Pablo de llevar al templo?', options: ['Un gentil', 'Armas', 'Comida impura', 'Ídolos'] },
    pt: { question: 'Do que Paulo foi acusado de levar ao templo?', options: ['Um gentio', 'Armas', 'Comida impura', 'Ídolos'] },
    fr: { question: 'De quoi Paul a-t-il été accusé d\'avoir apporté dans le temple?', options: ['Un païen', 'Des armes', 'De la nourriture impure', 'Des idoles'] }
  },
  'acts72': {
    en: { question: 'Who was the Roman commander who rescued Paul?', options: ['Cornelius', 'Claudius Lysias', 'Julius', 'Festus'] },
    it: { question: 'Chi era il comandante romano che salvò Paolo?', options: ['Cornelio', 'Claudio Lisia', 'Giulio', 'Festo'] },
    es: { question: '¿Quién era el comandante romano que rescató a Pablo?', options: ['Cornelio', 'Claudio Lisias', 'Julio', 'Festo'] },
    pt: { question: 'Quem era o comandante romano que resgatou Paulo?', options: ['Cornélio', 'Cláudio Lísias', 'Júlio', 'Festo'] },
    fr: { question: 'Qui était le commandant romain qui a sauvé Paul?', options: ['Corneille', 'Claudius Lysias', 'Julius', 'Festus'] }
  },
  'acts73': {
    en: { question: 'How many soldiers escorted Paul to Caesarea?', options: ['100', '200', '470', '1000'] },
    it: { question: 'Quanti soldati scortarono Paolo a Cesarea?', options: ['100', '200', '470', '1000'] },
    es: { question: '¿Cuántos soldados escoltaron a Pablo a Cesarea?', options: ['100', '200', '470', '1000'] },
    pt: { question: 'Quantos soldados escoltaram Paulo até Cesareia?', options: ['100', '200', '470', '1000'] },
    fr: { question: 'Combien de soldats ont escorté Paul à Césarée?', options: ['100', '200', '470', '1000'] }
  },
  'acts74': {
    en: { question: 'Who was the governor who kept Paul imprisoned hoping for a bribe?', options: ['Pilate', 'Felix', 'Festus', 'Agrippa'] },
    it: { question: 'Chi era il governatore che tenne Paolo in prigione sperando in una tangente?', options: ['Pilato', 'Felice', 'Festo', 'Agrippa'] },
    es: { question: '¿Quién era el gobernador que mantuvo a Pablo en prisión esperando un soborno?', options: ['Pilato', 'Félix', 'Festo', 'Agripa'] },
    pt: { question: 'Quem era o governador que manteve Paulo preso esperando um suborno?', options: ['Pilatos', 'Félix', 'Festo', 'Agripa'] },
    fr: { question: 'Qui était le gouverneur qui a gardé Paul emprisonné en espérant un pot-de-vin?', options: ['Pilate', 'Félix', 'Festus', 'Agrippa'] }
  },
  'acts75': {
    en: { question: 'How many years was Paul imprisoned in Caesarea?', options: ['1', '2', '3', '5'] },
    it: { question: 'Quanti anni Paolo fu imprigionato a Cesarea?', options: ['1', '2', '3', '5'] },
    es: { question: '¿Cuántos años Pablo estuvo encarcelado en Cesarea?', options: ['1', '2', '3', '5'] },
    pt: { question: 'Quantos anos Paulo ficou preso em Cesareia?', options: ['1', '2', '3', '5'] },
    fr: { question: 'Combien d\'années Paul a-t-il été emprisonné à Césarée?', options: ['1', '2', '3', '5'] }
  },
  'acts76': {
    en: { question: 'Why did Paul appeal to Caesar?', options: ['To avoid Jewish trial', 'To preach in Rome', 'To meet the emperor', 'All of these'] },
    it: { question: 'Perché Paolo si appellò a Cesare?', options: ['Per evitare il processo ebraico', 'Per predicare a Roma', 'Per incontrare l\'imperatore', 'Tutte queste'] },
    es: { question: '¿Por qué Pablo apeló a César?', options: ['Para evitar el juicio judío', 'Para predicar en Roma', 'Para conocer al emperador', 'Todas estas'] },
    pt: { question: 'Por que Paulo apelou a César?', options: ['Para evitar o julgamento judaico', 'Para pregar em Roma', 'Para conhecer o imperador', 'Todas essas'] },
    fr: { question: 'Pourquoi Paul a-t-il fait appel à César?', options: ['Pour éviter le procès juif', 'Pour prêcher à Rome', 'Pour rencontrer l\'empereur', 'Tout cela'] }
  },
  'acts77': {
    en: { question: 'What did Festus say about Paul?', options: ['He is innocent', 'He is mad', 'He is guilty', 'He is a prophet'] },
    it: { question: 'Cosa disse Festo di Paolo?', options: ['È innocente', 'È pazzo', 'È colpevole', 'È un profeta'] },
    es: { question: '¿Qué dijo Festo sobre Pablo?', options: ['Es inocente', 'Está loco', 'Es culpable', 'Es un profeta'] },
    pt: { question: 'O que Festo disse sobre Paulo?', options: ['Ele é inocente', 'Ele está louco', 'Ele é culpado', 'Ele é um profeta'] },
    fr: { question: 'Qu\'a dit Festus au sujet de Paul?', options: ['Il est innocent', 'Il est fou', 'Il est coupable', 'Il est un prophète'] }
  },
  'acts78': {
    en: { question: 'What did Agrippa say to Paul?', options: ['You are guilty', 'You almost persuade me to be a Christian', 'You are free to go', 'You must die'] },
    it: { question: 'Cosa disse Agrippa a Paolo?', options: ['Sei colpevole', 'Per poco non mi persuadi a diventare cristiano', 'Sei libero di andare', 'Devi morire'] },
    es: { question: '¿Qué dijo Agripa a Pablo?', options: ['Eres culpable', 'Por poco me persuades a ser cristiano', 'Eres libre de irte', 'Debes morir'] },
    pt: { question: 'O que Agripa disse a Paulo?', options: ['Você é culpado', 'Por pouco você me convence a ser cristão', 'Você está livre para ir', 'Você deve morrer'] },
    fr: { question: 'Qu\'a dit Agrippa à Paul?', options: ['Tu es coupable', 'Tu me persuades presque de devenir chrétien', 'Tu es libre de partir', 'Tu dois mourir'] }
  },
  'acts79': {
    en: { question: 'Who was the centurion in charge of Paul on the ship to Rome?', options: ['Cornelius', 'Julius', 'Claudius', 'Lysias'] },
    it: { question: 'Chi era il centurione incaricato di Paolo sulla nave per Roma?', options: ['Cornelio', 'Giulio', 'Claudio', 'Lisia'] },
    es: { question: '¿Quién era el centurión a cargo de Pablo en el barco a Roma?', options: ['Cornelio', 'Julio', 'Claudio', 'Lisias'] },
    pt: { question: 'Quem era o centurião encarregado de Paulo no navio para Roma?', options: ['Cornélio', 'Júlio', 'Cláudio', 'Lísias'] },
    fr: { question: 'Qui était le centurion en charge de Paul sur le navire pour Rome?', options: ['Corneille', 'Julius', 'Claudius', 'Lysias'] }
  },
  'acts80': {
    en: { question: 'How many people were on the ship that was wrecked?', options: ['100', '176', '276', '376'] },
    it: { question: 'Quante persone erano sulla nave che naufragò?', options: ['100', '176', '276', '376'] },
    es: { question: '¿Cuántas personas había en el barco que naufragó?', options: ['100', '176', '276', '376'] },
    pt: { question: 'Quantas pessoas estavam no navio que naufragou?', options: ['100', '176', '276', '376'] },
    fr: { question: 'Combien de personnes étaient sur le navire qui a fait naufrage?', options: ['100', '176', '276', '376'] }
  },
  'acts81': {
    en: { question: 'What was the name of the wind that caused the shipwreck?', options: ['Typhoon', 'Euroclydon/Northeaster', 'Sirocco', 'Mistral'] },
    it: { question: 'Qual era il nome del vento che causò il naufragio?', options: ['Tifone', 'Euroaquilone/Grecale', 'Scirocco', 'Mistral'] },
    es: { question: '¿Cuál era el nombre del viento que causó el naufragio?', options: ['Tifón', 'Euroaquilón/Nordeste', 'Siroco', 'Mistral'] },
    pt: { question: 'Qual era o nome do vento que causou o naufrágio?', options: ['Tufão', 'Euroaquilão/Nordeste', 'Siroco', 'Mistral'] },
    fr: { question: 'Quel était le nom du vent qui a causé le naufrage?', options: ['Typhon', 'Euroclydon/Nordet', 'Sirocco', 'Mistral'] }
  },
  'acts82': {
    en: { question: 'How many days did they go without food before the shipwreck?', options: ['7', '14', '21', '40'] },
    it: { question: 'Quanti giorni rimasero senza cibo prima del naufragio?', options: ['7', '14', '21', '40'] },
    es: { question: '¿Cuántos días estuvieron sin comer antes del naufragio?', options: ['7', '14', '21', '40'] },
    pt: { question: 'Quantos dias ficaram sem comer antes do naufrágio?', options: ['7', '14', '21', '40'] },
    fr: { question: 'Combien de jours sont-ils restés sans manger avant le naufrage?', options: ['7', '14', '21', '40'] }
  },
  'acts83': {
    en: { question: 'What did Paul do with the snake that bit him?', options: ['Killed it', 'Shook it off into the fire', 'Healed himself', 'Asked for help'] },
    it: { question: 'Cosa fece Paolo con il serpente che lo morse?', options: ['Lo uccise', 'Lo scosse nel fuoco', 'Si guarì', 'Chiese aiuto'] },
    es: { question: '¿Qué hizo Pablo con la serpiente que lo mordió?', options: ['La mató', 'La sacudió al fuego', 'Se sanó', 'Pidió ayuda'] },
    pt: { question: 'O que Paulo fez com a serpente que o mordeu?', options: ['Matou-a', 'Sacudiu-a no fogo', 'Curou-se', 'Pediu ajuda'] },
    fr: { question: 'Qu\'a fait Paul avec le serpent qui l\'a mordu?', options: ['Il l\'a tué', 'Il l\'a secoué dans le feu', 'Il s\'est guéri', 'Il a demandé de l\'aide'] }
  },
  'acts84': {
    en: { question: 'Who was the chief official of Malta?', options: ['Festus', 'Publius', 'Julius', 'Agrippa'] },
    it: { question: 'Chi era il primo funzionario di Malta?', options: ['Festo', 'Publio', 'Giulio', 'Agrippa'] },
    es: { question: '¿Quién era el principal funcionario de Malta?', options: ['Festo', 'Publio', 'Julio', 'Agripa'] },
    pt: { question: 'Quem era o principal oficial de Malta?', options: ['Festo', 'Públio', 'Júlio', 'Agripa'] },
    fr: { question: 'Qui était le principal fonctionnaire de Malte?', options: ['Festus', 'Publius', 'Julius', 'Agrippa'] }
  },
  'acts85': {
    en: { question: 'Whose father did Paul heal on Malta?', options: ['Julius\'', 'Publius\'', 'The captain\'s', 'A soldier\'s'] },
    it: { question: 'Il padre di chi guarì Paolo a Malta?', options: ['Di Giulio', 'Di Publio', 'Del capitano', 'Di un soldato'] },
    es: { question: '¿Al padre de quién sanó Pablo en Malta?', options: ['De Julio', 'De Publio', 'Del capitán', 'De un soldado'] },
    pt: { question: 'De quem Paulo curou o pai em Malta?', options: ['De Júlio', 'De Públio', 'Do capitão', 'De um soldado'] },
    fr: { question: 'Le père de qui Paul a-t-il guéri à Malte?', options: ['De Julius', 'De Publius', 'Du capitaine', 'D\'un soldat'] }
  },
  'acts86': {
    en: { question: 'How many months did they stay on Malta?', options: ['1', '3', '6', '12'] },
    it: { question: 'Quanti mesi rimasero a Malta?', options: ['1', '3', '6', '12'] },
    es: { question: '¿Cuántos meses permanecieron en Malta?', options: ['1', '3', '6', '12'] },
    pt: { question: 'Quantos meses ficaram em Malta?', options: ['1', '3', '6', '12'] },
    fr: { question: 'Combien de mois sont-ils restés à Malte?', options: ['1', '3', '6', '12'] }
  },
  'acts87': {
    en: { question: 'What was the figurehead of the ship that took them from Malta?', options: ['Poseidon', 'Zeus', 'Twin Brothers (Castor and Pollux)', 'Neptune'] },
    it: { question: 'Qual era la polena della nave che li portò da Malta?', options: ['Poseidone', 'Zeus', 'I Dioscuri (Castore e Polluce)', 'Nettuno'] },
    es: { question: '¿Cuál era el mascarón de proa del barco que los llevó de Malta?', options: ['Poseidón', 'Zeus', 'Los Gemelos (Cástor y Pólux)', 'Neptuno'] },
    pt: { question: 'Qual era a figura de proa do navio que os levou de Malta?', options: ['Poseidon', 'Zeus', 'Os Gêmeos (Castor e Pólux)', 'Netuno'] },
    fr: { question: 'Quelle était la figure de proue du navire qui les a emmenés de Malte?', options: ['Poséidon', 'Zeus', 'Les Dioscures (Castor et Pollux)', 'Neptune'] }
  },
  'acts88': {
    en: { question: 'Where did Paul first land in Italy?', options: ['Rome', 'Syracuse', 'Puteoli', 'Naples'] },
    it: { question: 'Dove Paolo sbarcò per la prima volta in Italia?', options: ['Roma', 'Siracusa', 'Pozzuoli', 'Napoli'] },
    es: { question: '¿Dónde desembarcó Pablo por primera vez en Italia?', options: ['Roma', 'Siracusa', 'Puteoli', 'Nápoles'] },
    pt: { question: 'Onde Paulo desembarcou pela primeira vez na Itália?', options: ['Roma', 'Siracusa', 'Putéoli', 'Nápoles'] },
    fr: { question: 'Où Paul a-t-il débarqué pour la première fois en Italie?', options: ['Rome', 'Syracuse', 'Pouzzoles', 'Naples'] }
  },
  'acts89': {
    en: { question: 'Who came to meet Paul at the Forum of Appius?', options: ['Roman soldiers', 'Roman Christians', 'Roman senators', 'Roman priests'] },
    it: { question: 'Chi venne a incontrare Paolo al Foro di Appio?', options: ['Soldati romani', 'Cristiani romani', 'Senatori romani', 'Sacerdoti romani'] },
    es: { question: '¿Quién vino a recibir a Pablo en el Foro de Apio?', options: ['Soldados romanos', 'Cristianos romanos', 'Senadores romanos', 'Sacerdotes romanos'] },
    pt: { question: 'Quem veio encontrar Paulo no Fórum de Ápio?', options: ['Soldados romanos', 'Cristãos romanos', 'Senadores romanos', 'Sacerdotes romanos'] },
    fr: { question: 'Qui est venu à la rencontre de Paul au Forum d\'Appius?', options: ['Soldats romains', 'Chrétiens romains', 'Sénateurs romains', 'Prêtres romains'] }
  },
  'acts90': {
    en: { question: 'What did Paul do while under house arrest in Rome?', options: ['Wrote letters', 'Preached the gospel', 'Taught visitors', 'All of these'] },
    it: { question: 'Cosa fece Paolo mentre era agli arresti domiciliari a Roma?', options: ['Scrisse lettere', 'Predicò il vangelo', 'Insegnò ai visitatori', 'Tutte queste'] },
    es: { question: '¿Qué hizo Pablo mientras estaba bajo arresto domiciliario en Roma?', options: ['Escribió cartas', 'Predicó el evangelio', 'Enseñó a los visitantes', 'Todas estas'] },
    pt: { question: 'O que Paulo fez enquanto estava em prisão domiciliar em Roma?', options: ['Escreveu cartas', 'Pregou o evangelho', 'Ensinou os visitantes', 'Todas essas'] },
    fr: { question: 'Qu\'a fait Paul pendant son assignation à résidence à Rome?', options: ['Il a écrit des lettres', 'Il a prêché l\'évangile', 'Il a enseigné les visiteurs', 'Tout cela'] }
  },
  'acts91': {
    en: { question: 'How does the book of Acts end?', options: ['With Paul\'s death', 'With Paul preaching in Rome', 'With Paul\'s release', 'With Paul returning to Jerusalem'] },
    it: { question: 'Come finisce il libro degli Atti?', options: ['Con la morte di Paolo', 'Con Paolo che predica a Roma', 'Con il rilascio di Paolo', 'Con Paolo che torna a Gerusalemme'] },
    es: { question: '¿Cómo termina el libro de los Hechos?', options: ['Con la muerte de Pablo', 'Con Pablo predicando en Roma', 'Con la liberación de Pablo', 'Con Pablo regresando a Jerusalén'] },
    pt: { question: 'Como termina o livro de Atos?', options: ['Com a morte de Paulo', 'Com Paulo pregando em Roma', 'Com a libertação de Paulo', 'Com Paulo voltando a Jerusalém'] },
    fr: { question: 'Comment se termine le livre des Actes?', options: ['Avec la mort de Paul', 'Avec Paul prêchant à Rome', 'Avec la libération de Paul', 'Avec Paul retournant à Jérusalem'] }
  },
  'acts92': {
    en: { question: 'How many missionary journeys did Paul make?', options: ['2', '3', '4', '5'] },
    it: { question: 'Quanti viaggi missionari fece Paolo?', options: ['2', '3', '4', '5'] },
    es: { question: '¿Cuántos viajes misioneros hizo Pablo?', options: ['2', '3', '4', '5'] },
    pt: { question: 'Quantas viagens missionárias Paulo fez?', options: ['2', '3', '4', '5'] },
    fr: { question: 'Combien de voyages missionnaires Paul a-t-il effectués?', options: ['2', '3', '4', '5'] }
  },
  'acts93': {
    en: { question: 'What miracle happened through handkerchiefs that touched Paul?', options: ['Healing', 'Raising the dead', 'Speaking in tongues', 'Visions'] },
    it: { question: 'Quale miracolo avvenne attraverso fazzoletti che toccarono Paolo?', options: ['Guarigione', 'Risurrezione dei morti', 'Parlare in lingue', 'Visioni'] },
    es: { question: '¿Qué milagro ocurrió a través de pañuelos que tocaron a Pablo?', options: ['Sanidad', 'Resurrección de muertos', 'Hablar en lenguas', 'Visiones'] },
    pt: { question: 'Que milagre aconteceu através de lenços que tocaram Paulo?', options: ['Cura', 'Ressurreição dos mortos', 'Falar em línguas', 'Visões'] },
    fr: { question: 'Quel miracle s\'est produit par les mouchoirs qui avaient touché Paul?', options: ['Guérison', 'Résurrection des morts', 'Parler en langues', 'Visions'] }
  },
  'acts94': {
    en: { question: 'What was the profession of the seven sons of Sceva?', options: ['Silversmiths', 'Exorcists', 'Priests', 'Merchants'] },
    it: { question: 'Qual era la professione dei sette figli di Sceva?', options: ['Argentieri', 'Esorcisti', 'Sacerdoti', 'Mercanti'] },
    es: { question: '¿Cuál era la profesión de los siete hijos de Esceva?', options: ['Plateros', 'Exorcistas', 'Sacerdotes', 'Comerciantes'] },
    pt: { question: 'Qual era a profissão dos sete filhos de Ceva?', options: ['Ourives', 'Exorcistas', 'Sacerdotes', 'Comerciantes'] },
    fr: { question: 'Quelle était la profession des sept fils de Scéva?', options: ['Orfèvres', 'Exorcistes', 'Prêtres', 'Marchands'] }
  },
  'acts95': {
    en: { question: 'What happened to the sons of Sceva when they tried to use Jesus\' name?', options: ['They succeeded', 'The demon attacked them', 'They were arrested', 'They converted'] },
    it: { question: 'Cosa accadde ai figli di Sceva quando cercarono di usare il nome di Gesù?', options: ['Riuscirono', 'Il demonio li attaccò', 'Furono arrestati', 'Si convertirono'] },
    es: { question: '¿Qué les pasó a los hijos de Esceva cuando intentaron usar el nombre de Jesús?', options: ['Tuvieron éxito', 'El demonio los atacó', 'Fueron arrestados', 'Se convirtieron'] },
    pt: { question: 'O que aconteceu com os filhos de Ceva quando tentaram usar o nome de Jesus?', options: ['Eles tiveram sucesso', 'O demônio os atacou', 'Eles foram presos', 'Eles se converteram'] },
    fr: { question: 'Qu\'est-il arrivé aux fils de Scéva quand ils ont essayé d\'utiliser le nom de Jésus?', options: ['Ils ont réussi', 'Le démon les a attaqués', 'Ils ont été arrêtés', 'Ils se sont convertis'] }
  },
  'acts96': {
    en: { question: 'What was special about Timothy\'s background?', options: ['He was wealthy', 'His mother was Jewish, father Greek', 'He was a Roman citizen', 'He was a former Pharisee'] },
    it: { question: 'Cosa c\'era di speciale nel background di Timoteo?', options: ['Era ricco', 'Sua madre era ebrea, suo padre greco', 'Era cittadino romano', 'Era un ex fariseo'] },
    es: { question: '¿Qué había de especial en los antecedentes de Timoteo?', options: ['Era rico', 'Su madre era judía, su padre griego', 'Era ciudadano romano', 'Era un ex fariseo'] },
    pt: { question: 'O que havia de especial no histórico de Timóteo?', options: ['Ele era rico', 'Sua mãe era judia, seu pai grego', 'Ele era cidadão romano', 'Ele era um ex-fariseu'] },
    fr: { question: 'Qu\'y avait-il de spécial dans les antécédents de Timothée?', options: ['Il était riche', 'Sa mère était juive, son père grec', 'Il était citoyen romain', 'Il était un ancien pharisien'] }
  },
  'acts97': {
    en: { question: 'What happened during Paul\'s trial before the Sanhedrin?', options: ['He was released', 'A dispute arose between Pharisees and Sadducees', 'He was condemned', 'He escaped'] },
    it: { question: 'Cosa accadde durante il processo di Paolo davanti al Sinedrio?', options: ['Fu rilasciato', 'Sorse una disputa tra farisei e sadducei', 'Fu condannato', 'Fuggì'] },
    es: { question: '¿Qué sucedió durante el juicio de Pablo ante el Sanedrín?', options: ['Fue liberado', 'Surgió una disputa entre fariseos y saduceos', 'Fue condenado', 'Escapó'] },
    pt: { question: 'O que aconteceu durante o julgamento de Paulo perante o Sinédrio?', options: ['Ele foi libertado', 'Surgiu uma disputa entre fariseus e saduceus', 'Ele foi condenado', 'Ele escapou'] },
    fr: { question: 'Que s\'est-il passé lors du procès de Paul devant le Sanhédrin?', options: ['Il a été libéré', 'Une dispute a éclaté entre pharisiens et sadducéens', 'Il a été condamné', 'Il s\'est échappé'] }
  },
  'acts98': {
    en: { question: 'Who was Paul\'s nephew who warned him of a plot?', options: ['Timothy', 'Titus', 'Unknown by name', 'Silas'] },
    it: { question: 'Chi era il nipote di Paolo che lo avvertì di un complotto?', options: ['Timoteo', 'Tito', 'Sconosciuto per nome', 'Sila'] },
    es: { question: '¿Quién era el sobrino de Pablo que le advirtió de una conspiración?', options: ['Timoteo', 'Tito', 'Desconocido por nombre', 'Silas'] },
    pt: { question: 'Quem era o sobrinho de Paulo que o avisou de uma conspiração?', options: ['Timóteo', 'Tito', 'Desconhecido pelo nome', 'Silas'] },
    fr: { question: 'Qui était le neveu de Paul qui l\'a averti d\'un complot?', options: ['Timothée', 'Tite', 'Inconnu par son nom', 'Silas'] }
  },
  'acts99': {
    en: { question: 'What was the accusation against Stephen?', options: ['Theft', 'Blasphemy', 'Murder', 'Treason'] },
    it: { question: 'Qual era l\'accusa contro Stefano?', options: ['Furto', 'Blasfemia', 'Omicidio', 'Tradimento'] },
    es: { question: '¿Cuál era la acusación contra Esteban?', options: ['Robo', 'Blasfemia', 'Asesinato', 'Traición'] },
    pt: { question: 'Qual era a acusação contra Estêvão?', options: ['Roubo', 'Blasfêmia', 'Assassinato', 'Traição'] },
    fr: { question: 'Quelle était l\'accusation contre Étienne?', options: ['Vol', 'Blasphème', 'Meurtre', 'Trahison'] }
  },
  'acts100': {
    en: { question: 'What did Stephen see before his death?', options: ['Angels', 'Heaven opened and Jesus at God\'s right hand', 'A bright light', 'His ancestors'] },
    it: { question: 'Cosa vide Stefano prima della sua morte?', options: ['Angeli', 'Il cielo aperto e Gesù alla destra di Dio', 'Una luce brillante', 'I suoi antenati'] },
    es: { question: '¿Qué vio Esteban antes de su muerte?', options: ['Ángeles', 'El cielo abierto y Jesús a la diestra de Dios', 'Una luz brillante', 'Sus antepasados'] },
    pt: { question: 'O que Estêvão viu antes de sua morte?', options: ['Anjos', 'O céu aberto e Jesus à direita de Deus', 'Uma luz brilhante', 'Seus antepassados'] },
    fr: { question: 'Qu\'a vu Étienne avant sa mort?', options: ['Des anges', 'Le ciel ouvert et Jésus à la droite de Dieu', 'Une lumière brillante', 'Ses ancêtres'] }
  }
};

export function getActsTranslation(
  id: string,
  language: Language,
  fallback: { question: string; options: string[]; explanation?: string }
): { question: string; options: string[]; explanation?: string } {
  const translation = actsTranslations[id];
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
