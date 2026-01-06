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
  'ac1': {
    en: { question: 'Who wrote the book of Acts?', options: ['Paul', 'Luke', 'Peter', 'John'] },
    it: { question: 'Chi scrisse il libro degli Atti?', options: ['Paolo', 'Luca', 'Pietro', 'Giovanni'] },
    es: { question: '¿Quién escribió el libro de los Hechos?', options: ['Pablo', 'Lucas', 'Pedro', 'Juan'] },
    pt: { question: 'Quem escreveu o livro de Atos?', options: ['Paulo', 'Lucas', 'Pedro', 'João'] },
    fr: { question: 'Qui a écrit le livre des Actes?', options: ['Paul', 'Luc', 'Pierre', 'Jean'] }
  },
  'ac2': {
    en: { question: 'How many days after resurrection did Jesus ascend?', options: ['3', '7', '40', '50'] },
    it: { question: 'Quanti giorni dopo la risurrezione Gesù ascese al cielo?', options: ['3', '7', '40', '50'] },
    es: { question: '¿Cuántos días después de la resurrección ascendió Jesús?', options: ['3', '7', '40', '50'] },
    pt: { question: 'Quantos dias após a ressurreição Jesus ascendeu?', options: ['3', '7', '40', '50'] },
    fr: { question: 'Combien de jours après la résurrection Jésus est-il monté au ciel?', options: ['3', '7', '40', '50'] }
  },
  'ac3': {
    en: { question: 'What did the disciples receive at Pentecost?', options: ['Money', 'Holy Spirit', 'Scrolls', 'Crowns'] },
    it: { question: 'Cosa ricevettero i discepoli a Pentecoste?', options: ['Denaro', 'Spirito Santo', 'Rotoli', 'Corone'] },
    es: { question: '¿Qué recibieron los discípulos en Pentecostés?', options: ['Dinero', 'Espíritu Santo', 'Rollos', 'Coronas'] },
    pt: { question: 'O que os discípulos receberam no Pentecostes?', options: ['Dinheiro', 'Espírito Santo', 'Pergaminhos', 'Coroas'] },
    fr: { question: 'Qu\'ont reçu les disciples à la Pentecôte?', options: ['Argent', 'Saint-Esprit', 'Rouleaux', 'Couronnes'] }
  },
  'ac4': {
    en: { question: 'How many were converted at Pentecost?', options: ['120', '500', '3000', '5000'] },
    it: { question: 'Quanti si convertirono a Pentecoste?', options: ['120', '500', '3000', '5000'] },
    es: { question: '¿Cuántos se convirtieron en Pentecostés?', options: ['120', '500', '3000', '5000'] },
    pt: { question: 'Quantos se converteram no Pentecostes?', options: ['120', '500', '3000', '5000'] },
    fr: { question: 'Combien se sont convertis à la Pentecôte?', options: ['120', '500', '3000', '5000'] }
  },
  'ac5': {
    en: { question: 'Who was the first Christian martyr?', options: ['James', 'Stephen', 'Peter', 'Paul'] },
    it: { question: 'Chi fu il primo martire cristiano?', options: ['Giacomo', 'Stefano', 'Pietro', 'Paolo'] },
    es: { question: '¿Quién fue el primer mártir cristiano?', options: ['Santiago', 'Esteban', 'Pedro', 'Pablo'] },
    pt: { question: 'Quem foi o primeiro mártir cristão?', options: ['Tiago', 'Estêvão', 'Pedro', 'Paulo'] },
    fr: { question: 'Qui fut le premier martyr chrétien?', options: ['Jacques', 'Étienne', 'Pierre', 'Paul'] }
  },
  'ac6': {
    en: { question: "What was Paul's name before conversion?", options: ['Simon', 'Saul', 'Silas', 'Silvanus'] },
    it: { question: 'Qual era il nome di Paolo prima della conversione?', options: ['Simone', 'Saulo', 'Sila', 'Silvano'] },
    es: { question: '¿Cuál era el nombre de Pablo antes de la conversión?', options: ['Simón', 'Saulo', 'Silas', 'Silvano'] },
    pt: { question: 'Qual era o nome de Paulo antes da conversão?', options: ['Simão', 'Saulo', 'Silas', 'Silvano'] },
    fr: { question: 'Quel était le nom de Paul avant sa conversion?', options: ['Simon', 'Saul', 'Silas', 'Silvain'] }
  },
  'ac7': {
    en: { question: 'Where was Paul going when he was converted?', options: ['Jerusalem', 'Damascus', 'Antioch', 'Rome'] },
    it: { question: 'Dove stava andando Paolo quando si convertì?', options: ['Gerusalemme', 'Damasco', 'Antiochia', 'Roma'] },
    es: { question: '¿Adónde iba Pablo cuando se convirtió?', options: ['Jerusalén', 'Damasco', 'Antioquía', 'Roma'] },
    pt: { question: 'Para onde Paulo estava indo quando se converteu?', options: ['Jerusalém', 'Damasco', 'Antioquia', 'Roma'] },
    fr: { question: 'Où allait Paul quand il s\'est converti?', options: ['Jérusalem', 'Damas', 'Antioche', 'Rome'] }
  },
  'ac8': {
    en: { question: 'Who baptized Paul?', options: ['Peter', 'Barnabas', 'Ananias', 'Philip'] },
    it: { question: 'Chi battezzò Paolo?', options: ['Pietro', 'Barnaba', 'Anania', 'Filippo'] },
    es: { question: '¿Quién bautizó a Pablo?', options: ['Pedro', 'Bernabé', 'Ananías', 'Felipe'] },
    pt: { question: 'Quem batizou Paulo?', options: ['Pedro', 'Barnabé', 'Ananias', 'Filipe'] },
    fr: { question: 'Qui a baptisé Paul?', options: ['Pierre', 'Barnabas', 'Ananias', 'Philippe'] }
  },
  'ac9': {
    en: { question: 'Who was the first Gentile convert?', options: ['Cornelius', 'Lydia', 'Ethiopian', 'Timothy'] },
    it: { question: 'Chi fu il primo convertito pagano?', options: ['Cornelio', 'Lidia', 'L\'etiope', 'Timoteo'] },
    es: { question: '¿Quién fue el primer convertido gentil?', options: ['Cornelio', 'Lidia', 'El etíope', 'Timoteo'] },
    pt: { question: 'Quem foi o primeiro convertido gentio?', options: ['Cornélio', 'Lídia', 'O etíope', 'Timóteo'] },
    fr: { question: 'Qui fut le premier converti païen?', options: ['Corneille', 'Lydie', 'L\'Éthiopien', 'Timothée'] }
  },
  'ac10': {
    en: { question: 'Who had a vision of a sheet with animals?', options: ['Paul', 'Peter', 'John', 'James'] },
    it: { question: 'Chi ebbe una visione di un lenzuolo con animali?', options: ['Paolo', 'Pietro', 'Giovanni', 'Giacomo'] },
    es: { question: '¿Quién tuvo una visión de una sábana con animales?', options: ['Pablo', 'Pedro', 'Juan', 'Santiago'] },
    pt: { question: 'Quem teve uma visão de um lençol com animais?', options: ['Paulo', 'Pedro', 'João', 'Tiago'] },
    fr: { question: 'Qui a eu une vision d\'un drap avec des animaux?', options: ['Paul', 'Pierre', 'Jean', 'Jacques'] }
  },
  'ac11': {
    en: { question: 'Where were believers first called Christians?', options: ['Jerusalem', 'Rome', 'Antioch', 'Ephesus'] },
    it: { question: 'Dove i credenti furono chiamati cristiani per la prima volta?', options: ['Gerusalemme', 'Roma', 'Antiochia', 'Efeso'] },
    es: { question: '¿Dónde fueron llamados cristianos por primera vez los creyentes?', options: ['Jerusalén', 'Roma', 'Antioquía', 'Éfeso'] },
    pt: { question: 'Onde os crentes foram chamados de cristãos pela primeira vez?', options: ['Jerusalém', 'Roma', 'Antioquia', 'Éfeso'] },
    fr: { question: 'Où les croyants ont-ils été appelés chrétiens pour la première fois?', options: ['Jérusalem', 'Rome', 'Antioche', 'Éphèse'] }
  },
  'ac12': {
    en: { question: 'Which apostle was killed by Herod?', options: ['Peter', 'John', 'James', 'Andrew'] },
    it: { question: 'Quale apostolo fu ucciso da Erode?', options: ['Pietro', 'Giovanni', 'Giacomo', 'Andrea'] },
    es: { question: '¿Qué apóstol fue asesinado por Herodes?', options: ['Pedro', 'Juan', 'Santiago', 'Andrés'] },
    pt: { question: 'Qual apóstolo foi morto por Herodes?', options: ['Pedro', 'João', 'Tiago', 'André'] },
    fr: { question: 'Quel apôtre a été tué par Hérode?', options: ['Pierre', 'Jean', 'Jacques', 'André'] }
  },
  'ac13': {
    en: { question: 'Who freed Peter from prison?', options: ['Paul', 'Barnabas', 'An angel', 'Disciples'] },
    it: { question: 'Chi liberò Pietro dalla prigione?', options: ['Paolo', 'Barnaba', 'Un angelo', 'I discepoli'] },
    es: { question: '¿Quién liberó a Pedro de la prisión?', options: ['Pablo', 'Bernabé', 'Un ángel', 'Los discípulos'] },
    pt: { question: 'Quem libertou Pedro da prisão?', options: ['Paulo', 'Barnabé', 'Um anjo', 'Os discípulos'] },
    fr: { question: 'Qui a libéré Pierre de prison?', options: ['Paul', 'Barnabas', 'Un ange', 'Les disciples'] }
  },
  'ac14': {
    en: { question: 'Who accompanied Paul on his first journey?', options: ['Silas', 'Timothy', 'Barnabas', 'Luke'] },
    it: { question: 'Chi accompagnò Paolo nel suo primo viaggio?', options: ['Sila', 'Timoteo', 'Barnaba', 'Luca'] },
    es: { question: '¿Quién acompañó a Pablo en su primer viaje?', options: ['Silas', 'Timoteo', 'Bernabé', 'Lucas'] },
    pt: { question: 'Quem acompanhou Paulo em sua primeira viagem?', options: ['Silas', 'Timóteo', 'Barnabé', 'Lucas'] },
    fr: { question: 'Qui a accompagné Paul lors de son premier voyage?', options: ['Silas', 'Timothée', 'Barnabas', 'Luc'] }
  },
  'ac15': {
    en: { question: 'Who was the sorcerer Paul rebuked?', options: ['Simon', 'Elymas', 'Demetrius', 'Alexander'] },
    it: { question: 'Chi era il mago che Paolo rimproverò?', options: ['Simone', 'Elimas', 'Demetrio', 'Alessandro'] },
    es: { question: '¿Quién fue el hechicero que Pablo reprendió?', options: ['Simón', 'Elimas', 'Demetrio', 'Alejandro'] },
    pt: { question: 'Quem foi o feiticeiro que Paulo repreendeu?', options: ['Simão', 'Elimas', 'Demétrio', 'Alexandre'] },
    fr: { question: 'Qui était le magicien que Paul a réprimandé?', options: ['Simon', 'Élymas', 'Démétrius', 'Alexandre'] }
  },
  'ac16': {
    en: { question: 'Where did Paul and Barnabas disagree?', options: ['Jerusalem', 'Antioch', 'Cyprus', 'Rome'] },
    it: { question: 'Dove Paolo e Barnaba ebbero un disaccordo?', options: ['Gerusalemme', 'Antiochia', 'Cipro', 'Roma'] },
    es: { question: '¿Dónde tuvieron un desacuerdo Pablo y Bernabé?', options: ['Jerusalén', 'Antioquía', 'Chipre', 'Roma'] },
    pt: { question: 'Onde Paulo e Barnabé discordaram?', options: ['Jerusalém', 'Antioquia', 'Chipre', 'Roma'] },
    fr: { question: 'Où Paul et Barnabas ont-ils eu un désaccord?', options: ['Jérusalem', 'Antioche', 'Chypre', 'Rome'] }
  },
  'ac17': {
    en: { question: 'Who joined Paul after the split with Barnabas?', options: ['Timothy', 'Silas', 'Luke', 'Titus'] },
    it: { question: 'Chi si unì a Paolo dopo la separazione da Barnaba?', options: ['Timoteo', 'Sila', 'Luca', 'Tito'] },
    es: { question: '¿Quién se unió a Pablo después de la separación de Bernabé?', options: ['Timoteo', 'Silas', 'Lucas', 'Tito'] },
    pt: { question: 'Quem se juntou a Paulo após a separação de Barnabé?', options: ['Timóteo', 'Silas', 'Lucas', 'Tito'] },
    fr: { question: 'Qui a rejoint Paul après la séparation d\'avec Barnabas?', options: ['Timothée', 'Silas', 'Luc', 'Tite'] }
  },
  'ac18': {
    en: { question: 'Where was Timothy from?', options: ['Tarsus', 'Lystra', 'Antioch', 'Corinth'] },
    it: { question: 'Di dove era Timoteo?', options: ['Tarso', 'Listra', 'Antiochia', 'Corinto'] },
    es: { question: '¿De dónde era Timoteo?', options: ['Tarso', 'Listra', 'Antioquía', 'Corinto'] },
    pt: { question: 'De onde era Timóteo?', options: ['Tarso', 'Listra', 'Antioquia', 'Corinto'] },
    fr: { question: 'D\'où venait Timothée?', options: ['Tarse', 'Lystre', 'Antioche', 'Corinthe'] }
  },
  'ac19': {
    en: { question: 'Who was the first European convert?', options: ['Cornelius', 'Lydia', 'Priscilla', 'Phoebe'] },
    it: { question: 'Chi fu la prima convertita europea?', options: ['Cornelio', 'Lidia', 'Priscilla', 'Febe'] },
    es: { question: '¿Quién fue la primera convertida europea?', options: ['Cornelio', 'Lidia', 'Priscila', 'Febe'] },
    pt: { question: 'Quem foi a primeira convertida europeia?', options: ['Cornélio', 'Lídia', 'Priscila', 'Febe'] },
    fr: { question: 'Qui fut la première convertie européenne?', options: ['Corneille', 'Lydie', 'Priscille', 'Phoebé'] }
  },
  'ac20': {
    en: { question: "What was Lydia's profession?", options: ['Tentmaker', 'Purple cloth seller', 'Potter', 'Weaver'] },
    it: { question: 'Qual era la professione di Lidia?', options: ['Fabbricante di tende', 'Venditrice di porpora', 'Vasaia', 'Tessitrice'] },
    es: { question: '¿Cuál era la profesión de Lidia?', options: ['Fabricante de tiendas', 'Vendedora de púrpura', 'Alfarera', 'Tejedora'] },
    pt: { question: 'Qual era a profissão de Lídia?', options: ['Fabricante de tendas', 'Vendedora de púrpura', 'Oleira', 'Tecelã'] },
    fr: { question: 'Quelle était la profession de Lydie?', options: ['Fabricante de tentes', 'Marchande de pourpre', 'Potière', 'Tisserande'] }
  },
  'ac21': {
    en: { question: 'Who was freed from prison with Paul in Philippi?', options: ['Timothy', 'Silas', 'Luke', 'Barnabas'] },
    it: { question: 'Chi fu liberato dalla prigione con Paolo a Filippi?', options: ['Timoteo', 'Sila', 'Luca', 'Barnaba'] },
    es: { question: '¿Quién fue liberado de la prisión con Pablo en Filipos?', options: ['Timoteo', 'Silas', 'Lucas', 'Bernabé'] },
    pt: { question: 'Quem foi libertado da prisão com Paulo em Filipos?', options: ['Timóteo', 'Silas', 'Lucas', 'Barnabé'] },
    fr: { question: 'Qui a été libéré de prison avec Paul à Philippes?', options: ['Timothée', 'Silas', 'Luc', 'Barnabas'] }
  },
  'ac22': {
    en: { question: 'What caused the prison doors to open?', options: ['Angel', 'Earthquake', 'Guard', 'Prayer'] },
    it: { question: 'Cosa fece aprire le porte della prigione?', options: ['Un angelo', 'Un terremoto', 'Una guardia', 'La preghiera'] },
    es: { question: '¿Qué hizo que se abrieran las puertas de la prisión?', options: ['Un ángel', 'Un terremoto', 'Un guardia', 'La oración'] },
    pt: { question: 'O que fez as portas da prisão se abrirem?', options: ['Um anjo', 'Um terremoto', 'Um guarda', 'A oração'] },
    fr: { question: 'Qu\'est-ce qui a fait ouvrir les portes de la prison?', options: ['Un ange', 'Un tremblement de terre', 'Un garde', 'La prière'] }
  },
  'ac23': {
    en: { question: 'What did the Philippian jailer ask?', options: ['Who are you?', 'What must I do to be saved?', 'Are you gods?', 'Why do you sing?'] },
    it: { question: 'Cosa chiese il carceriere di Filippi?', options: ['Chi siete?', 'Cosa devo fare per essere salvato?', 'Siete dei?', 'Perché cantate?'] },
    es: { question: '¿Qué preguntó el carcelero de Filipos?', options: ['¿Quiénes sois?', '¿Qué debo hacer para ser salvo?', '¿Sois dioses?', '¿Por qué cantáis?'] },
    pt: { question: 'O que o carcereiro de Filipos perguntou?', options: ['Quem são vocês?', 'O que devo fazer para ser salvo?', 'Vocês são deuses?', 'Por que vocês cantam?'] },
    fr: { question: 'Qu\'a demandé le geôlier de Philippes?', options: ['Qui êtes-vous?', 'Que dois-je faire pour être sauvé?', 'Êtes-vous des dieux?', 'Pourquoi chantez-vous?'] }
  },
  'ac24': {
    en: { question: 'Where did Paul preach to philosophers?', options: ['Rome', 'Corinth', 'Athens', 'Ephesus'] },
    it: { question: 'Dove Paolo predicò ai filosofi?', options: ['Roma', 'Corinto', 'Atene', 'Efeso'] },
    es: { question: '¿Dónde predicó Pablo a los filósofos?', options: ['Roma', 'Corinto', 'Atenas', 'Éfeso'] },
    pt: { question: 'Onde Paulo pregou aos filósofos?', options: ['Roma', 'Corinto', 'Atenas', 'Éfeso'] },
    fr: { question: 'Où Paul a-t-il prêché aux philosophes?', options: ['Rome', 'Corinthe', 'Athènes', 'Éphèse'] }
  },
  'ac25': {
    en: { question: 'What was the name of the Athenian court?', options: ['Sanhedrin', 'Areopagus', 'Forum', 'Acropolis'] },
    it: { question: 'Come si chiamava il tribunale ateniese?', options: ['Sinedrio', 'Areopago', 'Foro', 'Acropoli'] },
    es: { question: '¿Cómo se llamaba el tribunal ateniense?', options: ['Sanedrín', 'Areópago', 'Foro', 'Acrópolis'] },
    pt: { question: 'Qual era o nome do tribunal ateniense?', options: ['Sinédrio', 'Areópago', 'Fórum', 'Acrópole'] },
    fr: { question: 'Comment s\'appelait le tribunal athénien?', options: ['Sanhédrin', 'Aréopage', 'Forum', 'Acropole'] }
  },
  'ac26': {
    en: { question: 'Who were Priscilla and Aquila?', options: ['Tentmakers', 'Fishermen', 'Merchants', 'Scribes'] },
    it: { question: 'Chi erano Priscilla e Aquila?', options: ['Fabbricanti di tende', 'Pescatori', 'Mercanti', 'Scribi'] },
    es: { question: '¿Quiénes eran Priscila y Aquila?', options: ['Fabricantes de tiendas', 'Pescadores', 'Mercaderes', 'Escribas'] },
    pt: { question: 'Quem eram Priscila e Áquila?', options: ['Fabricantes de tendas', 'Pescadores', 'Mercadores', 'Escribas'] },
    fr: { question: 'Qui étaient Priscille et Aquilas?', options: ['Fabricants de tentes', 'Pêcheurs', 'Marchands', 'Scribes'] }
  },
  'ac27': {
    en: { question: 'How long did Paul stay in Corinth?', options: ['6 months', '18 months', '2 years', '3 years'] },
    it: { question: 'Quanto tempo rimase Paolo a Corinto?', options: ['6 mesi', '18 mesi', '2 anni', '3 anni'] },
    es: { question: '¿Cuánto tiempo permaneció Pablo en Corinto?', options: ['6 meses', '18 meses', '2 años', '3 años'] },
    pt: { question: 'Quanto tempo Paulo ficou em Corinto?', options: ['6 meses', '18 meses', '2 anos', '3 anos'] },
    fr: { question: 'Combien de temps Paul est-il resté à Corinthe?', options: ['6 mois', '18 mois', '2 ans', '3 ans'] }
  },
  'ac28': {
    en: { question: 'Who needed more instruction from Priscilla and Aquila?', options: ['Timothy', 'Apollos', 'Silas', 'Titus'] },
    it: { question: 'Chi aveva bisogno di più istruzione da Priscilla e Aquila?', options: ['Timoteo', 'Apollo', 'Sila', 'Tito'] },
    es: { question: '¿Quién necesitaba más instrucción de Priscila y Aquila?', options: ['Timoteo', 'Apolos', 'Silas', 'Tito'] },
    pt: { question: 'Quem precisava de mais instrução de Priscila e Áquila?', options: ['Timóteo', 'Apolo', 'Silas', 'Tito'] },
    fr: { question: 'Qui avait besoin de plus d\'instruction de Priscille et Aquilas?', options: ['Timothée', 'Apollos', 'Silas', 'Tite'] }
  },
  'ac29': {
    en: { question: 'How long did Paul teach in Ephesus?', options: ['1 year', '2 years', '3 years', '4 years'] },
    it: { question: 'Quanto tempo insegnò Paolo a Efeso?', options: ['1 anno', '2 anni', '3 anni', '4 anni'] },
    es: { question: '¿Cuánto tiempo enseñó Pablo en Éfeso?', options: ['1 año', '2 años', '3 años', '4 años'] },
    pt: { question: 'Quanto tempo Paulo ensinou em Éfeso?', options: ['1 ano', '2 anos', '3 anos', '4 anos'] },
    fr: { question: 'Combien de temps Paul a-t-il enseigné à Éphèse?', options: ['1 an', '2 ans', '3 ans', '4 ans'] }
  },
  'ac30': {
    en: { question: 'Who started a riot in Ephesus?', options: ['Alexander', 'Demetrius', 'Gaius', 'Aristarchus'] },
    it: { question: 'Chi scatenò una rivolta a Efeso?', options: ['Alessandro', 'Demetrio', 'Gaio', 'Aristarco'] },
    es: { question: '¿Quién provocó un motín en Éfeso?', options: ['Alejandro', 'Demetrio', 'Gayo', 'Aristarco'] },
    pt: { question: 'Quem iniciou um tumulto em Éfeso?', options: ['Alexandre', 'Demétrio', 'Gaio', 'Aristarco'] },
    fr: { question: 'Qui a déclenché une émeute à Éphèse?', options: ['Alexandre', 'Démétrius', 'Gaïus', 'Aristarque'] }
  },
  'ac31': {
    en: { question: 'What goddess was worshipped in Ephesus?', options: ['Athena', 'Diana/Artemis', 'Aphrodite', 'Hera'] },
    it: { question: 'Quale dea era adorata a Efeso?', options: ['Atena', 'Diana/Artemide', 'Afrodite', 'Era'] },
    es: { question: '¿Qué diosa era adorada en Éfeso?', options: ['Atenea', 'Diana/Artemisa', 'Afrodita', 'Hera'] },
    pt: { question: 'Qual deusa era adorada em Éfeso?', options: ['Atena', 'Diana/Ártemis', 'Afrodite', 'Hera'] },
    fr: { question: 'Quelle déesse était adorée à Éphèse?', options: ['Athéna', 'Diane/Artémis', 'Aphrodite', 'Héra'] }
  },
  'ac32': {
    en: { question: "Who fell from a window during Paul's sermon?", options: ['Timothy', 'Eutychus', 'Tychicus', 'Trophimus'] },
    it: { question: 'Chi cadde dalla finestra durante la predica di Paolo?', options: ['Timoteo', 'Eutico', 'Tichico', 'Trofimo'] },
    es: { question: '¿Quién cayó de una ventana durante el sermón de Pablo?', options: ['Timoteo', 'Eutico', 'Tíquico', 'Trófimo'] },
    pt: { question: 'Quem caiu de uma janela durante o sermão de Paulo?', options: ['Timóteo', 'Êutico', 'Tíquico', 'Trófimo'] },
    fr: { question: 'Qui est tombé d\'une fenêtre pendant le sermon de Paul?', options: ['Timothée', 'Eutychus', 'Tychique', 'Trophime'] }
  },
  'ac33': {
    en: { question: 'What happened to Eutychus?', options: ['Injured', 'Died and raised', 'Escaped', 'Nothing'] },
    it: { question: 'Cosa accadde a Eutico?', options: ['Fu ferito', 'Morì e fu risuscitato', 'Fuggì', 'Nulla'] },
    es: { question: '¿Qué le pasó a Eutico?', options: ['Quedó herido', 'Murió y resucitó', 'Escapó', 'Nada'] },
    pt: { question: 'O que aconteceu com Êutico?', options: ['Foi ferido', 'Morreu e ressuscitou', 'Escapou', 'Nada'] },
    fr: { question: 'Qu\'est-il arrivé à Eutychus?', options: ['Il fut blessé', 'Il mourut et fut ressuscité', 'Il s\'échappa', 'Rien'] }
  },
  'ac34': {
    en: { question: 'Where did Paul give his farewell to Ephesian elders?', options: ['Ephesus', 'Miletus', 'Troas', 'Assos'] },
    it: { question: 'Dove Paolo diede il suo addio agli anziani di Efeso?', options: ['Efeso', 'Mileto', 'Troade', 'Asso'] },
    es: { question: '¿Dónde se despidió Pablo de los ancianos de Éfeso?', options: ['Éfeso', 'Mileto', 'Troas', 'Asos'] },
    pt: { question: 'Onde Paulo se despediu dos anciãos de Éfeso?', options: ['Éfeso', 'Mileto', 'Trôade', 'Assos'] },
    fr: { question: 'Où Paul a-t-il fait ses adieux aux anciens d\'Éphèse?', options: ['Éphèse', 'Milet', 'Troas', 'Assos'] }
  },
  'ac35': {
    en: { question: "Who prophesied Paul's arrest in Jerusalem?", options: ['Silas', 'Agabus', 'Philip', 'Timothy'] },
    it: { question: "Chi profetizzò l'arresto di Paolo a Gerusalemme?", options: ['Sila', 'Agabo', 'Filippo', 'Timoteo'] },
    es: { question: '¿Quién profetizó el arresto de Pablo en Jerusalén?', options: ['Silas', 'Ágabo', 'Felipe', 'Timoteo'] },
    pt: { question: 'Quem profetizou a prisão de Paulo em Jerusalém?', options: ['Silas', 'Ágabo', 'Filipe', 'Timóteo'] },
    fr: { question: 'Qui a prophétisé l\'arrestation de Paul à Jérusalem?', options: ['Silas', 'Agabus', 'Philippe', 'Timothée'] }
  },
  'ac36': {
    en: { question: 'How many daughters did Philip have?', options: ['2', '4', '7', '12'] },
    it: { question: 'Quante figlie aveva Filippo?', options: ['2', '4', '7', '12'] },
    es: { question: '¿Cuántas hijas tenía Felipe?', options: ['2', '4', '7', '12'] },
    pt: { question: 'Quantas filhas Filipe tinha?', options: ['2', '4', '7', '12'] },
    fr: { question: 'Combien de filles Philippe avait-il?', options: ['2', '4', '7', '12'] }
  },
  'ac37': {
    en: { question: "What did Philip's daughters do?", options: ['Teach', 'Prophesy', 'Heal', 'Serve'] },
    it: { question: 'Cosa facevano le figlie di Filippo?', options: ['Insegnavano', 'Profetizzavano', 'Guarivano', 'Servivano'] },
    es: { question: '¿Qué hacían las hijas de Felipe?', options: ['Enseñaban', 'Profetizaban', 'Sanaban', 'Servían'] },
    pt: { question: 'O que as filhas de Filipe faziam?', options: ['Ensinavam', 'Profetizavam', 'Curavam', 'Serviam'] },
    fr: { question: 'Que faisaient les filles de Philippe?', options: ['Elles enseignaient', 'Elles prophétisaient', 'Elles guérissaient', 'Elles servaient'] }
  },
  'ac38': {
    en: { question: 'Why was Paul arrested in Jerusalem?', options: ['Preaching', 'Accused of bringing Gentiles to temple', 'Blasphemy', 'Riot'] },
    it: { question: 'Perché Paolo fu arrestato a Gerusalemme?', options: ['Per la predicazione', 'Accusato di aver portato pagani nel tempio', 'Blasfemia', 'Sommossa'] },
    es: { question: '¿Por qué fue arrestado Pablo en Jerusalén?', options: ['Por predicar', 'Acusado de traer gentiles al templo', 'Blasfemia', 'Motín'] },
    pt: { question: 'Por que Paulo foi preso em Jerusalém?', options: ['Por pregar', 'Acusado de trazer gentios ao templo', 'Blasfêmia', 'Tumulto'] },
    fr: { question: 'Pourquoi Paul a-t-il été arrêté à Jérusalem?', options: ['Pour avoir prêché', 'Accusé d\'avoir amené des païens au temple', 'Blasphème', 'Émeute'] }
  },
  'ac39': {
    en: { question: "What was Paul's Roman citizenship benefit?", options: ['Freedom', 'Money', 'Fair trial', 'All of these'] },
    it: { question: 'Qual era il vantaggio della cittadinanza romana di Paolo?', options: ['Libertà', 'Denaro', 'Processo equo', 'Tutti questi'] },
    es: { question: '¿Cuál era el beneficio de la ciudadanía romana de Pablo?', options: ['Libertad', 'Dinero', 'Juicio justo', 'Todos estos'] },
    pt: { question: 'Qual era o benefício da cidadania romana de Paulo?', options: ['Liberdade', 'Dinheiro', 'Julgamento justo', 'Todos esses'] },
    fr: { question: 'Quel était l\'avantage de la citoyenneté romaine de Paul?', options: ['La liberté', 'L\'argent', 'Un procès équitable', 'Tout cela'] }
  },
  'ac40': {
    en: { question: 'Which council did Paul address?', options: ['Sanhedrin', 'Areopagus', 'Senate', 'Synagogue'] },
    it: { question: 'A quale consiglio si rivolse Paolo?', options: ['Sinedrio', 'Areopago', 'Senato', 'Sinagoga'] },
    es: { question: '¿A qué consejo se dirigió Pablo?', options: ['Sanedrín', 'Areópago', 'Senado', 'Sinagoga'] },
    pt: { question: 'A qual conselho Paulo se dirigiu?', options: ['Sinédrio', 'Areópago', 'Senado', 'Sinagoga'] },
    fr: { question: 'Quel conseil Paul a-t-il adressé?', options: ['Sanhédrin', 'Aréopage', 'Sénat', 'Synagogue'] }
  },
  'ac41': {
    en: { question: 'What divided the Sanhedrin?', options: ['Jesus', 'Resurrection', "Paul's words", 'Politics'] },
    it: { question: 'Cosa divise il Sinedrio?', options: ['Gesù', 'La risurrezione', 'Le parole di Paolo', 'La politica'] },
    es: { question: '¿Qué dividió al Sanedrín?', options: ['Jesús', 'La resurrección', 'Las palabras de Pablo', 'La política'] },
    pt: { question: 'O que dividiu o Sinédrio?', options: ['Jesus', 'A ressurreição', 'As palavras de Paulo', 'A política'] },
    fr: { question: 'Qu\'est-ce qui a divisé le Sanhédrin?', options: ['Jésus', 'La résurrection', 'Les paroles de Paul', 'La politique'] }
  },
  'ac42': {
    en: { question: 'How many men plotted to kill Paul?', options: ['12', '20', '40+', '100'] },
    it: { question: 'Quanti uomini complottarono per uccidere Paolo?', options: ['12', '20', '40+', '100'] },
    es: { question: '¿Cuántos hombres conspiraron para matar a Pablo?', options: ['12', '20', '40+', '100'] },
    pt: { question: 'Quantos homens conspiraram para matar Paulo?', options: ['12', '20', '40+', '100'] },
    fr: { question: 'Combien d\'hommes ont comploté pour tuer Paul?', options: ['12', '20', '40+', '100'] }
  },
  'ac43': {
    en: { question: 'Who warned Paul about the plot?', options: ['Barnabas', 'His nephew', 'Silas', 'An angel'] },
    it: { question: 'Chi avvertì Paolo del complotto?', options: ['Barnaba', 'Suo nipote', 'Sila', 'Un angelo'] },
    es: { question: '¿Quién advirtió a Pablo sobre el complot?', options: ['Bernabé', 'Su sobrino', 'Silas', 'Un ángel'] },
    pt: { question: 'Quem avisou Paulo sobre a conspiração?', options: ['Barnabé', 'Seu sobrinho', 'Silas', 'Um anjo'] },
    fr: { question: 'Qui a averti Paul du complot?', options: ['Barnabas', 'Son neveu', 'Silas', 'Un ange'] }
  },
  'ac44': {
    en: { question: 'Where was Paul sent for safety?', options: ['Rome', 'Caesarea', 'Antioch', 'Damascus'] },
    it: { question: 'Dove fu mandato Paolo per sicurezza?', options: ['Roma', 'Cesarea', 'Antiochia', 'Damasco'] },
    es: { question: '¿Adónde fue enviado Pablo por seguridad?', options: ['Roma', 'Cesarea', 'Antioquía', 'Damasco'] },
    pt: { question: 'Para onde Paulo foi enviado por segurança?', options: ['Roma', 'Cesareia', 'Antioquia', 'Damasco'] },
    fr: { question: 'Où Paul a-t-il été envoyé pour sa sécurité?', options: ['Rome', 'Césarée', 'Antioche', 'Damas'] }
  },
  'ac45': {
    en: { question: 'Who was the governor Felix?', options: ['Roman', 'Jewish', 'Greek', 'Syrian'] },
    it: { question: 'Chi era il governatore Felice?', options: ['Romano', 'Ebreo', 'Greco', 'Siriano'] },
    es: { question: '¿Quién era el gobernador Félix?', options: ['Romano', 'Judío', 'Griego', 'Sirio'] },
    pt: { question: 'Quem era o governador Félix?', options: ['Romano', 'Judeu', 'Grego', 'Sírio'] },
    fr: { question: 'Qui était le gouverneur Félix?', options: ['Romain', 'Juif', 'Grec', 'Syrien'] }
  },
  'ac46': {
    en: { question: 'How long was Paul in Caesarea?', options: ['1 year', '2 years', '3 years', '5 years'] },
    it: { question: 'Quanto tempo rimase Paolo a Cesarea?', options: ['1 anno', '2 anni', '3 anni', '5 anni'] },
    es: { question: '¿Cuánto tiempo estuvo Pablo en Cesarea?', options: ['1 año', '2 años', '3 años', '5 años'] },
    pt: { question: 'Quanto tempo Paulo ficou em Cesareia?', options: ['1 ano', '2 anos', '3 anos', '5 anos'] },
    fr: { question: 'Combien de temps Paul est-il resté à Césarée?', options: ['1 an', '2 ans', '3 ans', '5 ans'] }
  },
  'ac47': {
    en: { question: 'Who replaced Felix as governor?', options: ['Festus', 'Agrippa', 'Pilate', 'Gallio'] },
    it: { question: 'Chi sostituì Felice come governatore?', options: ['Festo', 'Agrippa', 'Pilato', 'Gallione'] },
    es: { question: '¿Quién reemplazó a Félix como gobernador?', options: ['Festo', 'Agripa', 'Pilato', 'Galión'] },
    pt: { question: 'Quem substituiu Félix como governador?', options: ['Festo', 'Agripa', 'Pilatos', 'Gálio'] },
    fr: { question: 'Qui a remplacé Félix comme gouverneur?', options: ['Festus', 'Agrippa', 'Pilate', 'Gallion'] }
  },
  'ac48': {
    en: { question: 'To whom did Paul appeal?', options: ['Festus', 'Agrippa', 'Caesar', 'Senate'] },
    it: { question: 'A chi si appellò Paolo?', options: ['Festo', 'Agrippa', 'Cesare', 'Senato'] },
    es: { question: '¿A quién apeló Pablo?', options: ['Festo', 'Agripa', 'César', 'Senado'] },
    pt: { question: 'A quem Paulo apelou?', options: ['Festo', 'Agripa', 'César', 'Senado'] },
    fr: { question: 'À qui Paul a-t-il fait appel?', options: ['Festus', 'Agrippa', 'César', 'Sénat'] }
  },
  'ac49': {
    en: { question: "Which king heard Paul's defense?", options: ['Herod', 'Agrippa', 'Aretas', 'Archelaus'] },
    it: { question: 'Quale re ascoltò la difesa di Paolo?', options: ['Erode', 'Agrippa', 'Areta', 'Archelao'] },
    es: { question: '¿Qué rey escuchó la defensa de Pablo?', options: ['Herodes', 'Agripa', 'Aretas', 'Arquelao'] },
    pt: { question: 'Qual rei ouviu a defesa de Paulo?', options: ['Herodes', 'Agripa', 'Aretas', 'Arquelau'] },
    fr: { question: 'Quel roi a entendu la défense de Paul?', options: ['Hérode', 'Agrippa', 'Arétas', 'Archélaüs'] }
  },
  'ac50': {
    en: { question: 'What did Agrippa say to Paul?', options: ['You are mad', 'Almost persuaded', 'You are free', 'Die'] },
    it: { question: 'Cosa disse Agrippa a Paolo?', options: ['Sei pazzo', 'Quasi mi persuadi', 'Sei libero', 'Muori'] },
    es: { question: '¿Qué le dijo Agripa a Pablo?', options: ['Estás loco', 'Por poco me persuades', 'Eres libre', 'Muere'] },
    pt: { question: 'O que Agripa disse a Paulo?', options: ['Você está louco', 'Por pouco me persuades', 'Você é livre', 'Morre'] },
    fr: { question: 'Qu\'a dit Agrippa à Paul?', options: ['Tu es fou', 'Tu me persuades presque', 'Tu es libre', 'Meurs'] }
  },
  // Continuare con ac51-ac100...
  'ac51': {
    en: { question: 'Who traveled with Paul to Rome?', options: ['Luke', 'Silas', 'Timothy', 'Barnabas'] },
    it: { question: 'Chi viaggiò con Paolo verso Roma?', options: ['Luca', 'Sila', 'Timoteo', 'Barnaba'] }
  },
  'ac52': {
    en: { question: 'What happened during the voyage to Rome?', options: ['Miracle', 'Shipwreck', 'Conversion', 'Escape'] },
    it: { question: 'Cosa accadde durante il viaggio verso Roma?', options: ['Un miracolo', 'Un naufragio', 'Una conversione', 'Una fuga'] }
  },
  'ac53': {
    en: { question: 'On what island did they shipwreck?', options: ['Crete', 'Cyprus', 'Malta', 'Sicily'] },
    it: { question: 'Su quale isola naufragarono?', options: ['Creta', 'Cipro', 'Malta', 'Sicilia'] }
  },
  'ac54': {
    en: { question: 'What bit Paul on Malta?', options: ['Dog', 'Snake', 'Spider', 'Scorpion'] },
    it: { question: 'Cosa morse Paolo a Malta?', options: ['Un cane', 'Un serpente', 'Un ragno', 'Uno scorpione'] }
  },
  'ac55': {
    en: { question: 'How did locals react when Paul survived?', options: ['Fear', 'Thought him a god', 'Anger', 'Indifference'] },
    it: { question: 'Come reagirono i locali quando Paolo sopravvisse?', options: ['Paura', 'Lo credettero un dio', 'Rabbia', 'Indifferenza'] }
  },
  'ac56': {
    en: { question: 'Who did Paul heal on Malta?', options: ["Publius's father", 'Centurion', 'Prisoner', 'Sailor'] },
    it: { question: 'Chi guarì Paolo a Malta?', options: ['Il padre di Publio', 'Il centurione', 'Un prigioniero', 'Un marinaio'] }
  },
  'ac57': {
    en: { question: 'How long did Paul stay on Malta?', options: ['1 month', '3 months', '6 months', '1 year'] },
    it: { question: 'Quanto tempo rimase Paolo a Malta?', options: ['1 mese', '3 mesi', '6 mesi', '1 anno'] }
  },
  'ac58': {
    en: { question: 'How long was Paul under house arrest in Rome?', options: ['1 year', '2 years', '3 years', '5 years'] },
    it: { question: 'Quanto tempo fu Paolo agli arresti domiciliari a Roma?', options: ['1 anno', '2 anni', '3 anni', '5 anni'] }
  },
  'ac59': {
    en: { question: 'What did Paul do during house arrest?', options: ['Nothing', 'Preached and taught', 'Escaped', 'Wrote only'] },
    it: { question: 'Cosa fece Paolo durante gli arresti domiciliari?', options: ['Nulla', 'Predicò e insegnò', 'Fuggì', 'Scrisse soltanto'] }
  },
  'ac60': {
    en: { question: 'Who replaced Judas as apostle?', options: ['Paul', 'Matthias', 'Barnabas', 'James'] },
    it: { question: 'Chi sostituì Giuda come apostolo?', options: ['Paolo', 'Mattia', 'Barnaba', 'Giacomo'] }
  },
  'ac61': {
    en: { question: 'What was the sound at Pentecost?', options: ['Thunder', 'Rushing wind', 'Earthquake', 'Trumpet'] },
    it: { question: 'Qual era il suono a Pentecoste?', options: ['Tuono', 'Vento impetuoso', 'Terremoto', 'Tromba'] }
  },
  'ac62': {
    en: { question: 'What appeared on their heads at Pentecost?', options: ['Crowns', 'Tongues of fire', 'Light', 'Doves'] },
    it: { question: 'Cosa apparve sulle loro teste a Pentecoste?', options: ['Corone', 'Lingue di fuoco', 'Luce', 'Colombe'] }
  },
  'ac63': {
    en: { question: 'How many languages were heard at Pentecost?', options: ['7', '12', 'Many/various', '70'] },
    it: { question: 'Quante lingue furono udite a Pentecoste?', options: ['7', '12', 'Molte/varie', '70'] }
  },
  'ac64': {
    en: { question: 'Who healed the lame man at the temple?', options: ['Paul', 'Peter and John', 'Stephen', 'Philip'] },
    it: { question: 'Chi guarì lo zoppo al tempio?', options: ['Paolo', 'Pietro e Giovanni', 'Stefano', 'Filippo'] }
  },
  'ac65': {
    en: { question: 'Which gate was the lame man at?', options: ['Eastern', 'Beautiful', 'Golden', 'Northern'] },
    it: { question: 'A quale porta si trovava lo zoppo?', options: ['Orientale', 'Bella', 'Aurea', 'Settentrionale'] }
  },
  'ac66': {
    en: { question: 'Who lied about property sale and died?', options: ['Simon', 'Ananias and Sapphira', 'Judas', 'Demas'] },
    it: { question: 'Chi mentì sulla vendita della proprietà e morì?', options: ['Simone', 'Anania e Saffira', 'Giuda', 'Dema'] }
  },
  'ac67': {
    en: { question: 'What was wrong with their giving?', options: ['Too little', 'Lied about amount', 'Wrong time', 'Wrong motive'] },
    it: { question: "Cosa c'era di sbagliato nella loro offerta?", options: ['Troppo poco', 'Mentirono sulla somma', 'Momento sbagliato', 'Motivo sbagliato'] }
  },
  'ac68': {
    en: { question: 'How many deacons were chosen?', options: ['5', '7', '10', '12'] },
    it: { question: 'Quanti diaconi furono scelti?', options: ['5', '7', '10', '12'] }
  },
  'ac69': {
    en: { question: 'Who was the most famous deacon?', options: ['Philip', 'Stephen', 'Prochorus', 'Nicolaus'] },
    it: { question: 'Chi era il diacono più famoso?', options: ['Filippo', 'Stefano', 'Procoro', 'Nicola'] }
  },
  'ac70': {
    en: { question: 'What did Stephen see before death?', options: ['Angels', 'Jesus standing', 'Heaven open', 'Both B and C'] },
    it: { question: 'Cosa vide Stefano prima di morire?', options: ['Angeli', 'Gesù in piedi', 'Il cielo aperto', 'Sia B che C'] }
  },
  'ac71': {
    en: { question: "Who guarded the coats at Stephen's stoning?", options: ['Peter', 'Saul', 'Pilate', 'Guards'] },
    it: { question: 'Chi custodiva i mantelli alla lapidazione di Stefano?', options: ['Pietro', 'Saulo', 'Pilato', 'Le guardie'] }
  },
  'ac72': {
    en: { question: 'Who preached to the Ethiopian eunuch?', options: ['Peter', 'Paul', 'Philip', 'Barnabas'] },
    it: { question: "Chi predicò all'eunuco etiope?", options: ['Pietro', 'Paolo', 'Filippo', 'Barnaba'] }
  },
  'ac73': {
    en: { question: 'What was the eunuch reading?', options: ['Psalms', 'Isaiah', 'Moses', 'Daniel'] },
    it: { question: "Cosa stava leggendo l'eunuco?", options: ['Salmi', 'Isaia', 'Mosè', 'Daniele'] }
  },
  'ac74': {
    en: { question: 'What did Philip do after baptizing him?', options: ['Stayed', 'Was taken away', 'Returned', 'Followed'] },
    it: { question: 'Cosa fece Filippo dopo averlo battezzato?', options: ['Rimase', 'Fu rapito', 'Ritornò', 'Lo seguì'] }
  },
  'ac75': {
    en: { question: 'Who was the sorcerer in Samaria?', options: ['Elymas', 'Simon', 'Bar-Jesus', 'Sceva'] },
    it: { question: 'Chi era il mago in Samaria?', options: ['Elima', 'Simone', 'Bar-Gesù', 'Sceva'] }
  },
  'ac76': {
    en: { question: 'What did Simon try to buy?', options: ['Healing', 'Power of Spirit', 'Apostleship', 'Miracles'] },
    it: { question: 'Cosa cercò di comprare Simone?', options: ['La guarigione', 'Il potere dello Spirito', "L'apostolato", 'I miracoli'] }
  },
  'ac77': {
    en: { question: 'What did Paul do for 3 days after conversion?', options: ['Preached', 'Prayed', 'Fasted blind', 'Traveled'] },
    it: { question: 'Cosa fece Paolo per 3 giorni dopo la conversione?', options: ['Predicò', 'Pregò', 'Digiunò cieco', 'Viaggiò'] }
  },
  'ac78': {
    en: { question: 'How did Paul escape Damascus?', options: ['Fought', 'In a basket', 'Disguise', 'Night walk'] },
    it: { question: 'Come fuggì Paolo da Damasco?', options: ['Combattendo', 'In una cesta', 'Travestito', 'Camminando di notte'] }
  },
  'ac79': {
    en: { question: 'Who introduced Paul to apostles?', options: ['Peter', 'James', 'Barnabas', 'Ananias'] },
    it: { question: 'Chi presentò Paolo agli apostoli?', options: ['Pietro', 'Giacomo', 'Barnaba', 'Anania'] }
  },
  'ac80': {
    en: { question: 'Who did Peter raise from dead?', options: ['Eutychus', 'Tabitha/Dorcas', 'Lydia', 'Rhoda'] },
    it: { question: 'Chi risuscitò Pietro dai morti?', options: ['Eutico', 'Tabita/Dorca', 'Lidia', 'Rode'] }
  },
  'ac81': {
    en: { question: 'What did Tabitha do for the poor?', options: ['Cooked', 'Made clothes', 'Gave money', 'Built homes'] },
    it: { question: 'Cosa faceva Tabita per i poveri?', options: ['Cucinava', 'Faceva vestiti', 'Dava denaro', 'Costruiva case'] }
  },
  'ac82': {
    en: { question: 'Who was the tanner Peter stayed with?', options: ['Cornelius', 'Simon', 'Philip', 'Ananias'] },
    it: { question: 'Chi era il conciatore da cui alloggiò Pietro?', options: ['Cornelio', 'Simone', 'Filippo', 'Anania'] }
  },
  'ac83': {
    en: { question: "What did Cornelius's vision tell him?", options: ['Repent', 'Send for Peter', 'Go to temple', 'Fast'] },
    it: { question: 'Cosa disse la visione a Cornelio?', options: ['Pentiti', 'Manda a chiamare Pietro', 'Vai al tempio', 'Digiuna'] }
  },
  'ac84': {
    en: { question: 'What surprised Jews about Cornelius?', options: ['His faith', 'Gentiles received Spirit', 'His wealth', 'His army'] },
    it: { question: 'Cosa sorprese i Giudei riguardo a Cornelio?', options: ['La sua fede', 'I pagani ricevettero lo Spirito', 'La sua ricchezza', 'Il suo esercito'] }
  },
  'ac85': {
    en: { question: 'Who killed James son of Zebedee?', options: ['Pilate', 'Sanhedrin', 'Herod', 'Romans'] },
    it: { question: 'Chi uccise Giacomo figlio di Zebedeo?', options: ['Pilato', 'Il Sinedrio', 'Erode', 'I Romani'] }
  },
  'ac86': {
    en: { question: 'What did the servant girl Rhoda forget to do?', options: ['Pray', 'Open the door', 'Tell others', 'Recognize Peter'] },
    it: { question: 'Cosa dimenticò di fare la serva Rode?', options: ['Pregare', 'Aprire la porta', 'Dire agli altri', 'Riconoscere Pietro'] }
  },
  'ac87': {
    en: { question: 'How did Herod die?', options: ['Old age', 'Battle', 'Eaten by worms', 'Assassinated'] },
    it: { question: 'Come morì Erode?', options: ['Di vecchiaia', 'In battaglia', 'Divorato dai vermi', 'Assassinato'] }
  },
  'ac88': {
    en: { question: 'Why did Herod die?', options: ['Sin', 'Did not give glory to God', 'Persecution', 'Blasphemy'] },
    it: { question: 'Perché morì Erode?', options: ['Per il peccato', 'Non diede gloria a Dio', 'Per la persecuzione', 'Per blasfemia'] }
  },
  'ac89': {
    en: { question: 'Who was John Mark?', options: ["Paul's nephew", "Barnabas's cousin", "Peter's son", "Timothy's friend"] },
    it: { question: 'Chi era Giovanni Marco?', options: ['Il nipote di Paolo', 'Il cugino di Barnaba', 'Il figlio di Pietro', "L'amico di Timoteo"] }
  },
  'ac90': {
    en: { question: 'Why did Paul and Barnabas separate?', options: ['Doctrine', 'John Mark', 'Direction', 'Strategy'] },
    it: { question: 'Perché Paolo e Barnaba si separarono?', options: ['Per la dottrina', 'Per Giovanni Marco', 'Per la direzione', 'Per la strategia'] }
  },
  'ac91': {
    en: { question: 'What was decided at Jerusalem Council?', options: ['Circumcision needed', 'Gentiles free from law', 'More rules', 'Separate churches'] },
    it: { question: 'Cosa fu deciso al Concilio di Gerusalemme?', options: ['La circoncisione era necessaria', 'I pagani erano liberi dalla legge', 'Più regole', 'Chiese separate'] }
  },
  'ac92': {
    en: { question: 'Who had the Macedonian vision?', options: ['Peter', 'Paul', 'Silas', 'Timothy'] },
    it: { question: 'Chi ebbe la visione macedone?', options: ['Pietro', 'Paolo', 'Sila', 'Timoteo'] }
  },
  'ac93': {
    en: { question: "Where was Paul's Macedonian vision?", options: ['Philippi', 'Thessalonica', 'Troas', 'Corinth'] },
    it: { question: 'Dove ebbe Paolo la visione macedone?', options: ['Filippi', 'Tessalonica', 'Troade', 'Corinto'] }
  },
  'ac94': {
    en: { question: 'Who was the slave girl with a spirit?', options: ['Lydia', 'Priscilla', 'Unnamed', 'Rhoda'] },
    it: { question: 'Chi era la schiava con uno spirito?', options: ['Lidia', 'Priscilla', 'Senza nome', 'Rode'] }
  },
  'ac95': {
    en: { question: 'What did Paul and Silas do in prison?', options: ['Slept', 'Sang hymns', 'Escaped', 'Complained'] },
    it: { question: 'Cosa fecero Paolo e Sila in prigione?', options: ['Dormirono', 'Cantarono inni', 'Fuggirono', 'Si lamentarono'] }
  },
  'ac96': {
    en: { question: 'Who were the Bereans known for?', options: ['Generosity', 'Examining Scriptures', 'Hospitality', 'Miracles'] },
    it: { question: 'Per cosa erano conosciuti i Bereani?', options: ['La generosità', "L'esame delle Scritture", "L'ospitalità", 'I miracoli'] }
  },
  'ac97': {
    en: { question: 'What altar did Paul see in Athens?', options: ['To Zeus', 'To Unknown God', 'To Caesar', 'To Apollo'] },
    it: { question: 'Quale altare vide Paolo ad Atene?', options: ['A Zeus', 'Al Dio sconosciuto', 'A Cesare', 'Ad Apollo'] }
  },
  'ac98': {
    en: { question: 'Who was Gallio?', options: ['King', 'Proconsul', 'Centurion', 'Rabbi'] },
    it: { question: 'Chi era Gallione?', options: ['Re', 'Proconsole', 'Centurione', 'Rabbino'] }
  },
  'ac99': {
    en: { question: 'What did Gallio refuse to judge?', options: ['Paul', 'Religious matters', 'Civil case', 'Murder'] },
    it: { question: 'Cosa rifiutò di giudicare Gallione?', options: ['Paolo', 'Questioni religiose', 'Cause civili', 'Omicidio'] }
  },
  'ac100': {
    en: { question: 'Who burned magic books in Ephesus?', options: ['Paul', 'New believers', 'Demetrius', 'Scribes'] },
    it: { question: 'Chi bruciò i libri di magia a Efeso?', options: ['Paolo', 'I nuovi credenti', 'Demetrio', 'Gli scribi'] }
  }
};
