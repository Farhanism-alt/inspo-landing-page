import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import UIUXDesigners from "./pages/use-cases/UIUXDesigners";
import BrandTeams from "./pages/use-cases/BrandTeams";
import MarketingTeams from "./pages/use-cases/MarketingTeams";
import Agencies from "./pages/use-cases/Agencies";

const queryClient = new QueryClient();

import DesignInspiration from "./pages/solutions/DesignInspiration";
import BrandIntelligence from "./pages/solutions/BrandIntelligence";
import CreativeCollaboration from "./pages/solutions/CreativeCollaboration";
import CompetitiveAnalysis from "./pages/solutions/CompetitiveAnalysis";
import AIDesignGeneration from "./pages/solutions/AIDesignGeneration";

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/use-cases/ui-ux-designers" element={<UIUXDesigners />} />
          <Route path="/use-cases/brand-teams" element={<BrandTeams />} />
          <Route path="/use-cases/marketing-teams" element={<MarketingTeams />} />
          <Route path="/use-cases/agencies" element={<Agencies />} />
          <Route path="/solutions/design-inspiration" element={<DesignInspiration />} />
          <Route path="/solutions/brand-intelligence" element={<BrandIntelligence />} />
          <Route path="/solutions/creative-collaboration" element={<CreativeCollaboration />} />
          <Route path="/solutions/competitive-analysis" element={<CompetitiveAnalysis />} />
          <Route path="/solutions/ai-design-generation" element={<AIDesignGeneration />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);


export default App;
