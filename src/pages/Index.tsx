import DotBackground from "@/components/DotBackground";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import LogoBar from "@/components/LogoBar";
import ProblemSection from "@/components/ProblemSection";
import SolutionSection from "@/components/SolutionSection";
import BentoGrid from "@/components/BentoGrid";
import HowItWorks from "@/components/HowItWorks";
import UseCasesPreview from "@/components/UseCasesPreview";
import PricingSection from "@/components/PricingSection";
import FAQSection from "@/components/FAQSection";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";

const Index = () => {
  const schemaMarkup = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "SoftwareApplication",
        "name": "Inspo AI",
        "applicationCategory": "DesignApplication",
        "operatingSystem": "Web",
        "offers": {
          "@type": "Offer",
          "price": "0",
          "priceCurrency": "USD"
        },
        "description": "Comprehensive AI design workspace and Mobbin alternative. Search millions of editable UI icons, typography pairings, images, videos, GIFs, and color palettes. Features include Prompt-to-Image creation, AI Website generation, Live Collaboration, AI Design Audits for accessibility, and automated Brand Guideline generator.",
        "featureList": [
          "Editable SVG UI Icons Search",
          "Typography and Font Pairing Finder",
          "UI Animations and GIF Search",
          "AI Conceptual Mockup Generation",
          "AI Website and Wireframe Generator",
          "AI Design Audit for WCAG Accessibility",
          "Automated Brand Guideline Generator",
          "Competitor Brand Scanner and Intelligence"
        ]
      },
      {
        "@type": "Organization",
        "name": "Inspo AI",
        "url": "https://inspoai.io",
        "logo": "https://inspoai.io/assets/LogoInspo.svg"
      }
    ]
  };

  return (
    <>
      <SEO
        title="Inspo AI | Design Inspiration, Moodboard & Mobbin alternative"
        description="Mobbin alternative | Search millions of designs, build moodboards, audit brands, and scan competitors. All from one AI-powered workspace."
        keywords="design inspiration, moodboard builder, UI/UX, AI design audit, brand compliance, Mobbin alternative"
        schemaMarkup={schemaMarkup}
      />
      <DotBackground />
      <div className="min-h-screen relative z-10">
        <Navbar />
        <main>
          <HeroSection />
          <LogoBar />
          <ProblemSection />
          <SolutionSection />
          <BentoGrid />
          <HowItWorks />
          <UseCasesPreview />
          <PricingSection />
          <FAQSection />
          <FinalCTA />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;
