import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LanguageProvider } from "@/contexts/LanguageContext";
import { GameProvider } from "@/contexts/GameContext";
import Layout from "@/components/Layout";
import Index from "./pages/Index";
import BibleReader from "./pages/BibleReader";
import QuizSelection from "./pages/QuizSelection";
import QuizGame from "./pages/QuizGame";
import Badges from "./pages/Badges";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <LanguageProvider>
      <GameProvider>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <Layout>
              <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/bible" element={<BibleReader />} />
                <Route path="/quiz" element={<QuizSelection />} />
                <Route path="/quiz/:category" element={<QuizGame />} />
                <Route path="/badges" element={<Badges />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </Layout>
          </BrowserRouter>
        </TooltipProvider>
      </GameProvider>
    </LanguageProvider>
  </QueryClientProvider>
);

export default App;
