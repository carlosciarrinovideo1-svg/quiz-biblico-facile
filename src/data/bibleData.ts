export interface BibleBook {
  id: string;
  name: string;
  chapters: number;
  testament: 'old' | 'new';
}

export interface BibleVerse {
  book: string;
  chapter: number;
  verse: number;
  text: string;
}

export const bibleVersions = [
  { id: 'CEI', name: 'CEI (Conferenza Episcopale Italiana)' },
  { id: 'ESV', name: 'ESV (English Standard Version)' },
  { id: 'NIV', name: 'NIV (New International Version)' },
];

export const bibleBooks: BibleBook[] = [
  // Old Testament
  { id: 'genesis', name: 'Genesis', chapters: 50, testament: 'old' },
  { id: 'exodus', name: 'Exodus', chapters: 40, testament: 'old' },
  { id: 'leviticus', name: 'Leviticus', chapters: 27, testament: 'old' },
  { id: 'numbers', name: 'Numbers', chapters: 36, testament: 'old' },
  { id: 'deuteronomy', name: 'Deuteronomy', chapters: 34, testament: 'old' },
  { id: 'joshua', name: 'Joshua', chapters: 24, testament: 'old' },
  { id: 'judges', name: 'Judges', chapters: 21, testament: 'old' },
  { id: 'ruth', name: 'Ruth', chapters: 4, testament: 'old' },
  { id: '1samuel', name: '1 Samuel', chapters: 31, testament: 'old' },
  { id: '2samuel', name: '2 Samuel', chapters: 24, testament: 'old' },
  { id: '1kings', name: '1 Kings', chapters: 22, testament: 'old' },
  { id: '2kings', name: '2 Kings', chapters: 25, testament: 'old' },
  { id: '1chronicles', name: '1 Chronicles', chapters: 29, testament: 'old' },
  { id: '2chronicles', name: '2 Chronicles', chapters: 36, testament: 'old' },
  { id: 'ezra', name: 'Ezra', chapters: 10, testament: 'old' },
  { id: 'nehemiah', name: 'Nehemiah', chapters: 13, testament: 'old' },
  { id: 'esther', name: 'Esther', chapters: 10, testament: 'old' },
  { id: 'job', name: 'Job', chapters: 42, testament: 'old' },
  { id: 'psalms', name: 'Psalms', chapters: 150, testament: 'old' },
  { id: 'proverbs', name: 'Proverbs', chapters: 31, testament: 'old' },
  { id: 'ecclesiastes', name: 'Ecclesiastes', chapters: 12, testament: 'old' },
  { id: 'songofsolomon', name: 'Song of Solomon', chapters: 8, testament: 'old' },
  { id: 'isaiah', name: 'Isaiah', chapters: 66, testament: 'old' },
  { id: 'jeremiah', name: 'Jeremiah', chapters: 52, testament: 'old' },
  { id: 'lamentations', name: 'Lamentations', chapters: 5, testament: 'old' },
  { id: 'ezekiel', name: 'Ezekiel', chapters: 48, testament: 'old' },
  { id: 'daniel', name: 'Daniel', chapters: 12, testament: 'old' },
  { id: 'hosea', name: 'Hosea', chapters: 14, testament: 'old' },
  { id: 'joel', name: 'Joel', chapters: 3, testament: 'old' },
  { id: 'amos', name: 'Amos', chapters: 9, testament: 'old' },
  { id: 'obadiah', name: 'Obadiah', chapters: 1, testament: 'old' },
  { id: 'jonah', name: 'Jonah', chapters: 4, testament: 'old' },
  { id: 'micah', name: 'Micah', chapters: 7, testament: 'old' },
  { id: 'nahum', name: 'Nahum', chapters: 3, testament: 'old' },
  { id: 'habakkuk', name: 'Habakkuk', chapters: 3, testament: 'old' },
  { id: 'zephaniah', name: 'Zephaniah', chapters: 3, testament: 'old' },
  { id: 'haggai', name: 'Haggai', chapters: 2, testament: 'old' },
  { id: 'zechariah', name: 'Zechariah', chapters: 14, testament: 'old' },
  { id: 'malachi', name: 'Malachi', chapters: 4, testament: 'old' },
  // New Testament
  { id: 'matthew', name: 'Matthew', chapters: 28, testament: 'new' },
  { id: 'mark', name: 'Mark', chapters: 16, testament: 'new' },
  { id: 'luke', name: 'Luke', chapters: 24, testament: 'new' },
  { id: 'john', name: 'John', chapters: 21, testament: 'new' },
  { id: 'acts', name: 'Acts', chapters: 28, testament: 'new' },
  { id: 'romans', name: 'Romans', chapters: 16, testament: 'new' },
  { id: '1corinthians', name: '1 Corinthians', chapters: 16, testament: 'new' },
  { id: '2corinthians', name: '2 Corinthians', chapters: 13, testament: 'new' },
  { id: 'galatians', name: 'Galatians', chapters: 6, testament: 'new' },
  { id: 'ephesians', name: 'Ephesians', chapters: 6, testament: 'new' },
  { id: 'philippians', name: 'Philippians', chapters: 4, testament: 'new' },
  { id: 'colossians', name: 'Colossians', chapters: 4, testament: 'new' },
  { id: '1thessalonians', name: '1 Thessalonians', chapters: 5, testament: 'new' },
  { id: '2thessalonians', name: '2 Thessalonians', chapters: 3, testament: 'new' },
  { id: '1timothy', name: '1 Timothy', chapters: 6, testament: 'new' },
  { id: '2timothy', name: '2 Timothy', chapters: 4, testament: 'new' },
  { id: 'titus', name: 'Titus', chapters: 3, testament: 'new' },
  { id: 'philemon', name: 'Philemon', chapters: 1, testament: 'new' },
  { id: 'hebrews', name: 'Hebrews', chapters: 13, testament: 'new' },
  { id: 'james', name: 'James', chapters: 5, testament: 'new' },
  { id: '1peter', name: '1 Peter', chapters: 5, testament: 'new' },
  { id: '2peter', name: '2 Peter', chapters: 3, testament: 'new' },
  { id: '1john', name: '1 John', chapters: 5, testament: 'new' },
  { id: '2john', name: '2 John', chapters: 1, testament: 'new' },
  { id: '3john', name: '3 John', chapters: 1, testament: 'new' },
  { id: 'jude', name: 'Jude', chapters: 1, testament: 'new' },
  { id: 'revelation', name: 'Revelation', chapters: 22, testament: 'new' },
];

// Sample verses for demonstration
export const sampleVerses: Record<string, BibleVerse[]> = {
  'genesis-1': [
    { book: 'Genesis', chapter: 1, verse: 1, text: 'In the beginning God created the heavens and the earth.' },
    { book: 'Genesis', chapter: 1, verse: 2, text: 'Now the earth was formless and empty, darkness was over the surface of the deep, and the Spirit of God was hovering over the waters.' },
    { book: 'Genesis', chapter: 1, verse: 3, text: 'And God said, "Let there be light," and there was light.' },
    { book: 'Genesis', chapter: 1, verse: 4, text: 'God saw that the light was good, and he separated the light from the darkness.' },
    { book: 'Genesis', chapter: 1, verse: 5, text: 'God called the light "day," and the darkness he called "night." And there was evening, and there was morning—the first day.' },
    { book: 'Genesis', chapter: 1, verse: 6, text: 'And God said, "Let there be a vault between the waters to separate water from water."' },
    { book: 'Genesis', chapter: 1, verse: 7, text: 'So God made the vault and separated the water under the vault from the water above it. And it was so.' },
    { book: 'Genesis', chapter: 1, verse: 8, text: 'God called the vault "sky." And there was evening, and there was morning—the second day.' },
  ],
  'john-1': [
    { book: 'John', chapter: 1, verse: 1, text: 'In the beginning was the Word, and the Word was with God, and the Word was God.' },
    { book: 'John', chapter: 1, verse: 2, text: 'He was with God in the beginning.' },
    { book: 'John', chapter: 1, verse: 3, text: 'Through him all things were made; without him nothing was made that has been made.' },
    { book: 'John', chapter: 1, verse: 4, text: 'In him was life, and that life was the light of all mankind.' },
    { book: 'John', chapter: 1, verse: 5, text: 'The light shines in the darkness, and the darkness has not overcome it.' },
    { book: 'John', chapter: 1, verse: 6, text: 'There was a man sent from God whose name was John.' },
    { book: 'John', chapter: 1, verse: 7, text: 'He came as a witness to testify concerning that light, so that through him all might believe.' },
    { book: 'John', chapter: 1, verse: 8, text: 'He himself was not the light; he came only as a witness to the light.' },
  ],
  'psalms-23': [
    { book: 'Psalms', chapter: 23, verse: 1, text: 'The Lord is my shepherd, I lack nothing.' },
    { book: 'Psalms', chapter: 23, verse: 2, text: 'He makes me lie down in green pastures, he leads me beside quiet waters,' },
    { book: 'Psalms', chapter: 23, verse: 3, text: 'he refreshes my soul. He guides me along the right paths for his name\'s sake.' },
    { book: 'Psalms', chapter: 23, verse: 4, text: 'Even though I walk through the darkest valley, I will fear no evil, for you are with me; your rod and your staff, they comfort me.' },
    { book: 'Psalms', chapter: 23, verse: 5, text: 'You prepare a table before me in the presence of my enemies. You anoint my head with oil; my cup overflows.' },
    { book: 'Psalms', chapter: 23, verse: 6, text: 'Surely your goodness and love will follow me all the days of my life, and I will dwell in the house of the Lord forever.' },
  ],
};

export const getVerses = (book: string, chapter: number): BibleVerse[] => {
  const key = `${book.toLowerCase()}-${chapter}`;
  return sampleVerses[key] || generatePlaceholderVerses(book, chapter);
};

function generatePlaceholderVerses(book: string, chapter: number): BibleVerse[] {
  const bookData = bibleBooks.find(b => b.id === book.toLowerCase());
  const bookName = bookData?.name || book;
  
  return Array.from({ length: 10 }, (_, i) => ({
    book: bookName,
    chapter,
    verse: i + 1,
    text: `This is verse ${i + 1} of ${bookName} chapter ${chapter}. In a full implementation, this would contain the actual scripture text from your selected Bible version.`,
  }));
}
