import { QuizQuestion } from '../types';

export const minorProphetsQuestions: QuizQuestion[] = [
  // Osea (Hosea) - 5 domande
  { id: 'minp1', question: 'Chi fu la moglie di Osea secondo il comando di Dio?', options: ['Rut', 'Gomer', 'Ester', 'Debora'], correctIndex: 1, category: 'minorProphets', difficulty: 'medium', reference: 'Osea 1:3' },
  { id: 'minp2', question: 'Cosa rappresentava il matrimonio di Osea con Gomer?', options: ['La fedeltà di Israele', 'L\'infedeltà di Israele verso Dio', 'La prosperità', 'La guerra'], correctIndex: 1, category: 'minorProphets', difficulty: 'medium', reference: 'Osea 1:2' },
  { id: 'minp3', question: 'Come si chiamava il primo figlio di Osea?', options: ['Lo-Ammi', 'Lo-Rucama', 'Izreel', 'Efraim'], correctIndex: 2, category: 'minorProphets', difficulty: 'hard', reference: 'Osea 1:4' },
  { id: 'minp4', question: 'Secondo Osea 6:6, cosa desidera Dio più dei sacrifici?', options: ['Olocausti', 'Misericordia', 'Offerte', 'Digiuni'], correctIndex: 1, category: 'minorProphets', difficulty: 'easy', reference: 'Osea 6:6' },
  { id: 'minp5', question: 'Secondo Osea 11:1, chi chiamò Dio fuori dall\'Egitto?', options: ['Mosè', 'Suo figlio', 'Abramo', 'Giacobbe'], correctIndex: 1, category: 'minorProphets', difficulty: 'medium', reference: 'Osea 11:1' },

  // Gioele (Joel) - 4 domande
  { id: 'minp6', question: 'Quale piaga descrisse Gioele nel capitolo 1?', options: ['La siccità', 'Le locuste', 'La grandine', 'I terremoti'], correctIndex: 1, category: 'minorProphets', difficulty: 'easy', reference: 'Gioele 1:4' },
  { id: 'minp7', question: 'Secondo Gioele 2:28, cosa spanderà Dio su ogni carne?', options: ['La sua ira', 'Il suo Spirito', 'La sua benedizione', 'La pioggia'], correctIndex: 1, category: 'minorProphets', difficulty: 'easy', reference: 'Gioele 2:28' },
  { id: 'minp8', question: 'Cosa profetizzeranno i figli e le figlie secondo Gioele?', options: ['Giudizio', 'Profezie', 'Canti', 'Lamenti'], correctIndex: 1, category: 'minorProphets', difficulty: 'medium', reference: 'Gioele 2:28' },
  { id: 'minp9', question: 'Quale valle menziona Gioele per il giudizio finale?', options: ['Valle di Giosafat', 'Valle di Izreel', 'Valle di Acor', 'Valle di Ela'], correctIndex: 0, category: 'minorProphets', difficulty: 'hard', reference: 'Gioele 3:2' },

  // Amos - 5 domande
  { id: 'minp10', question: 'Qual era la professione di Amos prima di essere profeta?', options: ['Sacerdote', 'Pastore e coltivatore di sicomori', 'Pescatore', 'Scriba'], correctIndex: 1, category: 'minorProphets', difficulty: 'medium', reference: 'Amos 7:14' },
  { id: 'minp11', question: 'Da quale città proveniva Amos?', options: ['Gerusalemme', 'Samaria', 'Tecoa', 'Betlemme'], correctIndex: 2, category: 'minorProphets', difficulty: 'hard', reference: 'Amos 1:1' },
  { id: 'minp12', question: 'Contro quale regno profetizzò principalmente Amos?', options: ['Giuda', 'Israele', 'Edom', 'Moab'], correctIndex: 1, category: 'minorProphets', difficulty: 'medium', reference: 'Amos 7:15' },
  { id: 'minp13', question: 'Secondo Amos 5:24, cosa deve scorrere come acque?', options: ['La misericordia', 'La giustizia', 'La pace', 'L\'amore'], correctIndex: 1, category: 'minorProphets', difficulty: 'easy', reference: 'Amos 5:24' },
  { id: 'minp14', question: 'Cosa vide Amos nella visione del capitolo 7?', options: ['Un canestro di frutta', 'Un filo a piombo', 'Quattro carri', 'Un rotolo'], correctIndex: 1, category: 'minorProphets', difficulty: 'hard', reference: 'Amos 7:7-8' },

  // Abdia (Obadiah) - 3 domande
  { id: 'minp15', question: 'Contro quale nazione profetizzò Abdia?', options: ['Moab', 'Ammon', 'Edom', 'Filistia'], correctIndex: 2, category: 'minorProphets', difficulty: 'medium', reference: 'Abdia 1:1' },
  { id: 'minp16', question: 'Da chi discendeva il popolo di Edom?', options: ['Ismaele', 'Esaù', 'Lot', 'Moab'], correctIndex: 1, category: 'minorProphets', difficulty: 'medium', reference: 'Genesi 36:1' },
  { id: 'minp17', question: 'Qual è il libro più corto dell\'Antico Testamento?', options: ['Naum', 'Abdia', 'Aggeo', 'Malachia'], correctIndex: 1, category: 'minorProphets', difficulty: 'easy', reference: 'Abdia' },

  // Giona (Jonah) - 5 domande
  { id: 'minp18', question: 'In quale città Dio mandò Giona a predicare?', options: ['Babilonia', 'Ninive', 'Tarsis', 'Damasco'], correctIndex: 1, category: 'minorProphets', difficulty: 'easy', reference: 'Giona 1:2' },
  { id: 'minp19', question: 'Dove fuggì Giona invece di andare a Ninive?', options: ['In Egitto', 'Verso Tarsis', 'A Damasco', 'A Babilonia'], correctIndex: 1, category: 'minorProphets', difficulty: 'easy', reference: 'Giona 1:3' },
  { id: 'minp20', question: 'Quanto tempo rimase Giona nel ventre del pesce?', options: ['Un giorno', 'Due giorni', 'Tre giorni e tre notti', 'Sette giorni'], correctIndex: 2, category: 'minorProphets', difficulty: 'easy', reference: 'Giona 1:17' },
  { id: 'minp21', question: 'Come reagirono gli abitanti di Ninive alla predicazione di Giona?', options: ['Lo cacciarono', 'Si ravvidero', 'Lo ignorarono', 'Lo imprigionarono'], correctIndex: 1, category: 'minorProphets', difficulty: 'easy', reference: 'Giona 3:5' },
  { id: 'minp22', question: 'Quale pianta fece crescere Dio per dare ombra a Giona?', options: ['Un fico', 'Un ricino', 'Una palma', 'Un sicomoro'], correctIndex: 1, category: 'minorProphets', difficulty: 'medium', reference: 'Giona 4:6' },

  // Michea (Micah) - 5 domande
  { id: 'minp23', question: 'Secondo Michea 5:1, dove sarebbe nato il futuro sovrano d\'Israele?', options: ['Gerusalemme', 'Nazaret', 'Betlemme', 'Ebron'], correctIndex: 2, category: 'minorProphets', difficulty: 'easy', reference: 'Michea 5:1' },
  { id: 'minp24', question: 'Da quale città proveniva il profeta Michea?', options: ['Gerusalemme', 'Moreset', 'Samaria', 'Gat'], correctIndex: 1, category: 'minorProphets', difficulty: 'hard', reference: 'Michea 1:1' },
  { id: 'minp25', question: 'Secondo Michea 6:8, cosa chiede il SIGNORE?', options: ['Sacrifici e offerte', 'Praticare la giustizia, amare la misericordia, camminare umilmente', 'Digiuni e preghiere', 'Costruire templi'], correctIndex: 1, category: 'minorProphets', difficulty: 'medium', reference: 'Michea 6:8' },
  { id: 'minp26', question: 'Quale immagine usa Michea per descrivere la pace futura?', options: ['Lupi e agnelli insieme', 'Spade trasformate in vomeri', 'Un fiume di miele', 'Un arcobaleno'], correctIndex: 1, category: 'minorProphets', difficulty: 'medium', reference: 'Michea 4:3' },
  { id: 'minp27', question: 'Secondo Michea 7:19, dove getterà Dio i nostri peccati?', options: ['Nel deserto', 'Nel fondo del mare', 'Nel fuoco', 'Nell\'abisso'], correctIndex: 1, category: 'minorProphets', difficulty: 'medium', reference: 'Michea 7:19' },

  // Naum (Nahum) - 3 domande
  { id: 'minp28', question: 'Contro quale città profetizzò Naum?', options: ['Babilonia', 'Ninive', 'Damasco', 'Tiro'], correctIndex: 1, category: 'minorProphets', difficulty: 'medium', reference: 'Naum 1:1' },
  { id: 'minp29', question: 'Come viene descritto il SIGNORE in Naum 1:2?', options: ['Paziente', 'Geloso e vendicatore', 'Misericordioso', 'Silenzioso'], correctIndex: 1, category: 'minorProphets', difficulty: 'medium', reference: 'Naum 1:2' },
  { id: 'minp30', question: 'Da quale città proveniva Naum?', options: ['Elcos', 'Gerusalemme', 'Samaria', 'Moreset'], correctIndex: 0, category: 'minorProphets', difficulty: 'hard', reference: 'Naum 1:1' },

  // Abacuc (Habakkuk) - 4 domande
  { id: 'minp31', question: 'Quale popolo Dio avrebbe usato per giudicare Giuda secondo Abacuc?', options: ['Gli Assiri', 'I Caldei', 'Gli Egiziani', 'I Filistei'], correctIndex: 1, category: 'minorProphets', difficulty: 'medium', reference: 'Abacuc 1:6' },
  { id: 'minp32', question: 'Secondo Abacuc 2:4, come vivrà il giusto?', options: ['Per opere', 'Per fede', 'Per la legge', 'Per grazia'], correctIndex: 1, category: 'minorProphets', difficulty: 'easy', reference: 'Abacuc 2:4' },
  { id: 'minp33', question: 'Cosa deve fare tutta la terra secondo Abacuc 2:20?', options: ['Gioire', 'Stare in silenzio davanti al SIGNORE', 'Gridare', 'Pregare'], correctIndex: 1, category: 'minorProphets', difficulty: 'medium', reference: 'Abacuc 2:20' },
  { id: 'minp34', question: 'Come si conclude la preghiera di Abacuc nel capitolo 3?', options: ['Con lamento', 'Con gioia nel SIGNORE nonostante le difficoltà', 'Con rabbia', 'Con silenzio'], correctIndex: 1, category: 'minorProphets', difficulty: 'medium', reference: 'Abacuc 3:17-18' },

  // Sofonia (Zephaniah) - 3 domande
  { id: 'minp35', question: 'Durante il regno di quale re profetizzò Sofonia?', options: ['Manasse', 'Giosia', 'Sedecia', 'Acaz'], correctIndex: 1, category: 'minorProphets', difficulty: 'hard', reference: 'Sofonia 1:1' },
  { id: 'minp36', question: 'Cosa annuncia Sofonia riguardo al "giorno del SIGNORE"?', options: ['Un giorno di festa', 'Un giorno di ira', 'Un giorno di riposo', 'Un giorno di raccolta'], correctIndex: 1, category: 'minorProphets', difficulty: 'medium', reference: 'Sofonia 1:14-15' },
  { id: 'minp37', question: 'Secondo Sofonia 3:17, cosa farà il SIGNORE per il suo popolo?', options: ['Lo punirà', 'Gioirà per esso con canti di gioia', 'Lo abbandonerà', 'Lo dispererà'], correctIndex: 1, category: 'minorProphets', difficulty: 'medium', reference: 'Sofonia 3:17' },

  // Aggeo (Haggai) - 4 domande
  { id: 'minp38', question: 'Quale compito incoraggiò Aggeo a completare?', options: ['Costruire le mura', 'Ricostruire il tempio', 'Scrivere la legge', 'Conquistare Babilonia'], correctIndex: 1, category: 'minorProphets', difficulty: 'easy', reference: 'Aggeo 1:8' },
  { id: 'minp39', question: 'Chi era il governatore di Giuda ai tempi di Aggeo?', options: ['Neemia', 'Esdra', 'Zorobabele', 'Giosuè'], correctIndex: 2, category: 'minorProphets', difficulty: 'medium', reference: 'Aggeo 1:1' },
  { id: 'minp40', question: 'Chi era il sommo sacerdote ai tempi di Aggeo?', options: ['Aaronne', 'Eli', 'Giosuè figlio di Iosadac', 'Sadoc'], correctIndex: 2, category: 'minorProphets', difficulty: 'hard', reference: 'Aggeo 1:1' },
  { id: 'minp41', question: 'Cosa promise Dio secondo Aggeo 2:9 riguardo al nuovo tempio?', options: ['Sarà distrutto', 'La sua gloria supererà quella del primo', 'Sarà vuoto', 'Non sarà mai completato'], correctIndex: 1, category: 'minorProphets', difficulty: 'medium', reference: 'Aggeo 2:9' },

  // Zaccaria (Zechariah) - 5 domande
  { id: 'minp42', question: 'Quante visioni ebbe Zaccaria nella prima parte del suo libro?', options: ['Quattro', 'Otto', 'Dodici', 'Sette'], correctIndex: 1, category: 'minorProphets', difficulty: 'hard', reference: 'Zaccaria 1-6' },
  { id: 'minp43', question: 'Secondo Zaccaria 9:9, come entrerà il re a Gerusalemme?', options: ['Su un cavallo', 'Su un asino', 'A piedi', 'Su un carro'], correctIndex: 1, category: 'minorProphets', difficulty: 'easy', reference: 'Zaccaria 9:9' },
  { id: 'minp44', question: 'Per quanti sicli fu valutato il pastore in Zaccaria 11?', options: ['Dieci', 'Venti', 'Trenta', 'Quaranta'], correctIndex: 2, category: 'minorProphets', difficulty: 'hard', reference: 'Zaccaria 11:12' },
  { id: 'minp45', question: 'Secondo Zaccaria 4:6, non per potenza né per forza, ma per cosa?', options: ['Per grazia', 'Per lo Spirito mio', 'Per fede', 'Per opere'], correctIndex: 1, category: 'minorProphets', difficulty: 'easy', reference: 'Zaccaria 4:6' },
  { id: 'minp46', question: 'Quale profezia su colui che hanno trafitto si trova in Zaccaria?', options: ['Guarderanno a lui', 'Lo ignoreranno', 'Lo dimenticheranno', 'Lo onoreranno'], correctIndex: 0, category: 'minorProphets', difficulty: 'medium', reference: 'Zaccaria 12:10' },

  // Malachia (Malachi) - 4 domande
  { id: 'minp47', question: 'Di cosa accusò Malachia il popolo riguardo alle decime?', options: ['Di essere troppo generosi', 'Di derubare Dio', 'Di essere poveri', 'Di non avere nulla'], correctIndex: 1, category: 'minorProphets', difficulty: 'easy', reference: 'Malachia 3:8' },
  { id: 'minp48', question: 'Chi manderà Dio prima del grande giorno del SIGNORE secondo Malachia?', options: ['Mosè', 'Elia', 'Davide', 'Samuele'], correctIndex: 1, category: 'minorProphets', difficulty: 'easy', reference: 'Malachia 4:5' },
  { id: 'minp49', question: 'Secondo Malachia 3:6, cosa dice Dio di sé stesso?', options: ['Sono potente', 'Io non cambio', 'Sono giusto', 'Sono santo'], correctIndex: 1, category: 'minorProphets', difficulty: 'medium', reference: 'Malachia 3:6' },
  { id: 'minp50', question: 'Come viene chiamato il Messia in Malachia 3:1?', options: ['Figlio di Davide', 'Angelo del patto', 'Re dei Re', 'Figlio dell\'uomo'], correctIndex: 1, category: 'minorProphets', difficulty: 'hard', reference: 'Malachia 3:1' },
];
