import React, { useState, useMemo } from 'react';
import { Search, Heart, ExternalLink, ChevronLeft, ChevronRight, BookOpen } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useGame } from '@/contexts/GameContext';
import { bibleBooks, bibleVersions, getVerses, BibleVerse } from '@/data/bibleData';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ScrollArea } from '@/components/ui/scroll-area';
import { toast } from 'sonner';

const BibleReader: React.FC = () => {
  const { t } = useLanguage();
  const { state, addFavoriteVerse, removeFavoriteVerse, incrementChaptersRead } = useGame();
  
  const [selectedVersion, setSelectedVersion] = useState('NIV');
  const [selectedBook, setSelectedBook] = useState('genesis');
  const [selectedChapter, setSelectedChapter] = useState(1);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeTab, setActiveTab] = useState('read');

  const currentBook = useMemo(() => 
    bibleBooks.find(b => b.id === selectedBook), 
    [selectedBook]
  );

  const verses = useMemo(() => 
    getVerses(selectedBook, selectedChapter),
    [selectedBook, selectedChapter]
  );

  const filteredBooks = useMemo(() => {
    if (!searchQuery.trim()) return bibleBooks;
    const query = searchQuery.toLowerCase();
    return bibleBooks.filter(book => 
      book.name.toLowerCase().includes(query)
    );
  }, [searchQuery]);

  const favoriteVerses = useMemo(() => {
    return state.favoriteVerses.map(id => {
      const [book, chapter, verse] = id.split('-');
      const bookData = bibleBooks.find(b => b.id === book);
      return {
        id,
        book: bookData?.name || book,
        chapter: parseInt(chapter),
        verse: parseInt(verse),
      };
    });
  }, [state.favoriteVerses]);

  const handleChapterChange = (direction: 'prev' | 'next') => {
    if (direction === 'prev' && selectedChapter > 1) {
      setSelectedChapter(prev => prev - 1);
    } else if (direction === 'next' && currentBook && selectedChapter < currentBook.chapters) {
      setSelectedChapter(prev => prev + 1);
      incrementChaptersRead();
    }
  };

  const handleBookChange = (bookId: string) => {
    setSelectedBook(bookId);
    setSelectedChapter(1);
  };

  const toggleFavorite = (verse: BibleVerse) => {
    const verseId = `${selectedBook}-${verse.chapter}-${verse.verse}`;
    if (state.favoriteVerses.includes(verseId)) {
      removeFavoriteVerse(verseId);
      toast.success(t('removeFromFavorites'));
    } else {
      addFavoriteVerse(verseId);
      toast.success(t('addToFavorites'));
    }
  };

  const isVerseFavorite = (verse: BibleVerse) => {
    const verseId = `${selectedBook}-${verse.chapter}-${verse.verse}`;
    return state.favoriteVerses.includes(verseId);
  };

  return (
    <div className="animate-fade-in space-y-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <h1 className="font-serif text-3xl font-bold text-foreground">
          {t('bible')}
        </h1>
        <div className="flex items-center gap-2">
          <Select value={selectedVersion} onValueChange={setSelectedVersion}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder={t('selectVersion')} />
            </SelectTrigger>
            <SelectContent>
              {bibleVersions.map(version => (
                <SelectItem key={version.id} value={version.id}>
                  {version.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <Button asChild variant="outline" size="sm">
            <a 
              href="https://www.bible.com" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <ExternalLink className="h-4 w-4" />
              <span className="hidden sm:inline">{t('readOnline')}</span>
            </a>
          </Button>
        </div>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <TabsList className="grid w-full grid-cols-2 sm:w-auto sm:grid-cols-none">
          <TabsTrigger value="read" className="gap-2">
            <BookOpen className="h-4 w-4" />
            Read
          </TabsTrigger>
          <TabsTrigger value="favorites" className="gap-2">
            <Heart className="h-4 w-4" />
            {t('favorites')} ({state.favoriteVerses.length})
          </TabsTrigger>
        </TabsList>

        <TabsContent value="read" className="mt-6">
          <div className="grid gap-6 lg:grid-cols-[300px_1fr]">
            {/* Book Selector */}
            <Card className="glass-card">
              <CardHeader className="pb-3">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                  <Input
                    placeholder={t('searchBible')}
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-9"
                  />
                </div>
              </CardHeader>
              <CardContent className="p-0">
                <ScrollArea className="h-[400px]">
                  <div className="space-y-1 p-4 pt-0">
                    {['old', 'new'].map(testament => (
                      <div key={testament} className="mb-4">
                        <h3 className="mb-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                          {testament === 'old' ? t('oldTestament') : t('newTestament')}
                        </h3>
                        {filteredBooks
                          .filter(book => book.testament === testament)
                          .map(book => (
                            <button
                              key={book.id}
                              onClick={() => handleBookChange(book.id)}
                              className={`w-full rounded-lg px-3 py-2 text-left text-sm transition-colors ${
                                selectedBook === book.id
                                  ? 'bg-primary text-primary-foreground'
                                  : 'hover:bg-muted'
                              }`}
                            >
                              {book.name}
                            </button>
                          ))}
                      </div>
                    ))}
                  </div>
                </ScrollArea>
              </CardContent>
            </Card>

            {/* Chapter Content */}
            <Card className="glass-card">
              <CardHeader className="border-b border-border/50">
                <div className="flex items-center justify-between">
                  <CardTitle className="font-serif">
                    {currentBook?.name} {selectedChapter}
                  </CardTitle>
                  <div className="flex items-center gap-2">
                    <Select 
                      value={selectedChapter.toString()} 
                      onValueChange={(v) => setSelectedChapter(parseInt(v))}
                    >
                      <SelectTrigger className="w-[100px]">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        {currentBook && Array.from({ length: currentBook.chapters }, (_, i) => (
                          <SelectItem key={i + 1} value={(i + 1).toString()}>
                            {t('chapter')} {i + 1}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <div className="flex gap-1">
                      <Button
                        variant="outline"
                        size="icon"
                        onClick={() => handleChapterChange('prev')}
                        disabled={selectedChapter <= 1}
                      >
                        <ChevronLeft className="h-4 w-4" />
                      </Button>
                      <Button
                        variant="outline"
                        size="icon"
                        onClick={() => handleChapterChange('next')}
                        disabled={!currentBook || selectedChapter >= currentBook.chapters}
                      >
                        <ChevronRight className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="p-6">
                <ScrollArea className="h-[500px] pr-4">
                  <div className="space-y-4">
                    {verses.map((verse) => (
                      <div
                        key={`${verse.chapter}-${verse.verse}`}
                        className="group flex gap-3"
                      >
                        <span className="flex-shrink-0 text-sm font-semibold text-primary">
                          {verse.verse}
                        </span>
                        <p className="flex-1 leading-relaxed text-foreground">
                          {verse.text}
                        </p>
                        <button
                          onClick={() => toggleFavorite(verse)}
                          className="flex-shrink-0 opacity-0 transition-opacity group-hover:opacity-100"
                        >
                          <Heart
                            className={`h-4 w-4 transition-colors ${
                              isVerseFavorite(verse)
                                ? 'fill-destructive text-destructive'
                                : 'text-muted-foreground hover:text-destructive'
                            }`}
                          />
                        </button>
                      </div>
                    ))}
                  </div>
                </ScrollArea>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="favorites" className="mt-6">
          <Card className="glass-card">
            <CardContent className="p-6">
              {favoriteVerses.length === 0 ? (
                <div className="py-12 text-center text-muted-foreground">
                  <Heart className="mx-auto mb-4 h-12 w-12 opacity-50" />
                  <p>No favorite verses yet.</p>
                  <p className="text-sm">Click the heart icon while reading to save verses.</p>
                </div>
              ) : (
                <div className="space-y-3">
                  {favoriteVerses.map((verse) => (
                    <div
                      key={verse.id}
                      className="flex items-center justify-between rounded-lg border border-border/50 bg-muted/30 p-4"
                    >
                      <span className="font-medium">
                        {verse.book} {verse.chapter}:{verse.verse}
                      </span>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => removeFavoriteVerse(verse.id)}
                      >
                        <Heart className="h-4 w-4 fill-destructive text-destructive" />
                      </Button>
                    </div>
                  ))}
                </div>
              )}
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default BibleReader;
