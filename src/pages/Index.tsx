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

const Index = () => {
  return (
    <>
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
