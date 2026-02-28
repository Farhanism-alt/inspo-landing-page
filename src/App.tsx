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
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";
import About from "./pages/About";
import LifetimePlanPolicy from "./pages/LifetimePlanPolicy";
import MobbinAlternative from "./pages/MobbinAlternative";

const queryClient = new QueryClient();

import DesignInspiration from "./pages/solutions/DesignInspiration";
import BrandIntelligence from "./pages/solutions/BrandIntelligence";
import CreativeCollaboration from "./pages/solutions/CreativeCollaboration";
import CompetitiveAnalysis from "./pages/solutions/CompetitiveAnalysis";
import AIDesignGeneration from "./pages/solutions/AIDesignGeneration";

import FreeToolsHub from "./pages/free-tools/FreeToolsHub";
import SvgToPng from "./pages/free-tools/SvgToPng";
import ColorPaletteGen from "./pages/free-tools/ColorPaletteGen";
import HexToRgb from "./pages/free-tools/HexToRgb";
import CssGradientGen from "./pages/free-tools/CssGradientGen";
import BoxShadowGen from "./pages/free-tools/BoxShadowGen";
import PxToRemConverter from "./pages/free-tools/PxToRemConverter";
import ImageCompressor from "./pages/free-tools/ImageCompressor";
import ContrastChecker from "./pages/free-tools/ContrastChecker";
import GlassmorphismGen from "./pages/free-tools/GlassmorphismGen";
import LoremIpsumGen from "./pages/free-tools/LoremIpsumGen";

import Blogs from "./pages/blogs/Blogs";
import AIDesignInspirationTool from "./pages/blogs/AIDesignInspirationTool";
import CompetitorBrandScannerTool from "./pages/blogs/CompetitorBrandScannerTool";
import RealTimeDesignCollaborationTools from "./pages/blogs/RealTimeDesignCollaborationTools";

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
          <Route path="/about" element={<About />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-of-service" element={<TermsOfService />} />
          <Route path="/lifetime-plan-policy" element={<LifetimePlanPolicy />} />
          <Route path="/compare/inspo-ai-vs-mobbin" element={<MobbinAlternative />} />
          <Route path="/free-tools" element={<FreeToolsHub />} />
          <Route path="/free-tools/svg-to-png-converter" element={<SvgToPng />} />
          <Route path="/free-tools/color-palette-generator" element={<ColorPaletteGen />} />
          <Route path="/free-tools/hex-to-rgb-converter" element={<HexToRgb />} />
          <Route path="/free-tools/css-gradient-generator" element={<CssGradientGen />} />
          <Route path="/free-tools/box-shadow-generator" element={<BoxShadowGen />} />
          <Route path="/free-tools/px-to-rem-converter" element={<PxToRemConverter />} />
          <Route path="/free-tools/image-compressor" element={<ImageCompressor />} />
          <Route path="/free-tools/color-contrast-checker" element={<ContrastChecker />} />
          <Route path="/free-tools/glassmorphism-generator" element={<GlassmorphismGen />} />
          <Route path="/free-tools/lorem-ipsum-generator" element={<LoremIpsumGen />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/blogs/ai-design-inspiration-tool" element={<AIDesignInspirationTool />} />
          <Route path="/blogs/competitor-brand-scanner-tool" element={<CompetitorBrandScannerTool />} />
          <Route path="/blogs/real-time-design-collaboration-tools" element={<RealTimeDesignCollaborationTools />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);


export default App;
