import DotBackground from "@/components/DotBackground";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import LogoBar from "@/components/LogoBar";
import ProblemSection from "@/components/ProblemSection";
import SolutionSection from "@/components/SolutionSection";
import FeatureSection from "@/components/FeatureSection";
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
        "@type": "WebSite",
        "name": "Inspo AI",
        "url": "https://inspoai.io",
        "potentialAction": {
          "@type": "SearchAction",
          "target": "https://app.inspoai.io/search?q={search_term_string}",
          "query-input": "required name=search_term_string"
        }
      },
      {
        "@type": "Organization",
        "name": "Inspo AI",
        "url": "https://inspoai.io",
        "logo": "https://inspoai.io/assets/LogoInspo.svg",
        "sameAs": [
          "https://x.com/inspo_ai_",
          "https://www.linkedin.com/company/inspo-ai/"
        ],
        "contactPoint": {
          "@type": "ContactPoint",
          "email": "contact@inspoai.io",
          "contactType": "customer support"
        }
      },
      {
        "@type": "SoftwareApplication",
        "name": "Inspo AI",
        "applicationCategory": "DesignApplication",
        "operatingSystem": "Web",
        "url": "https://inspoai.io",
        "offers": [
          { "@type": "Offer", "price": "0", "priceCurrency": "USD", "name": "Free Plan" },
          { "@type": "Offer", "price": "12", "priceCurrency": "USD", "name": "Solo Plan" },
          { "@type": "Offer", "price": "39", "priceCurrency": "USD", "name": "Team Plan" },
          { "@type": "Offer", "price": "199", "priceCurrency": "USD", "name": "Lifetime Plan" }
        ],
        "description": "AI-powered design workspace and Mobbin alternative. Search millions of UI designs, build collaborative moodboards, audit brands for compliance, scan competitor websites, and generate designs with AI — all from one platform.",
        "featureList": [
          "AI Natural Language Design Search",
          "Collaborative Moodboard Builder",
          "AI Design Compliance Audit",
          "Competitor Brand Scanner",
          "AI Design Generator (Creator Studio)",
          "Real-Time Team Collaboration",
          "Typography and Font Pairing Finder",
          "Color Palette Extraction"
        ],
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.8",
          "ratingCount": "180",
          "bestRating": "5"
        }
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Is there one place to search all design inspiration?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes! Inspo AI is your one place to search all design inspiration. Instead of jumping between Behance, Dribbble, Pinterest, and other platforms, you can search all of them in one place — in real time. Find references by style, color, typography, or design language, and build your moodboard without ever leaving the platform."
            }
          },
          {
            "@type": "Question",
            "name": "What is the best alternative to Mobbin for UI/UX research?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "While Mobbin is great for app screenshots, Inspo AI is a comprehensive AI workspace. It allows you to search across millions of references, but also includes Prompt-to-Image creation, AI website generation, and live collaborative moodboards in a multiplayer canvas."
            }
          },
          {
            "@type": "Question",
            "name": "How much does Inspo AI cost?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Inspo AI offers a free plan with 10 asset searches, 1 collaborative moodboard, 1 AI design audit, and 1 brand scan. Paid plans start at $10/month for Basic, $29/month for Pro, and a one-time $199 Lifetime plan."
            }
          },
          {
            "@type": "Question",
            "name": "How can I automatically audit my UI design for accessibility and UX?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "With Inspo AI's Design Audit feature, you simply upload your UI mockup or paste a live URL. The Design Engine analyzes your layout against UX heuristics and WCAG accessibility standards, giving you a score out of 100 with actionable feedback."
            }
          },
          {
            "@type": "Question",
            "name": "Can I use AI to analyze a competitor's marketing strategy?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. The Brand Scanner feature lets you enter any competitor website URL and extracts their entire brand identity, technology stack, messaging hierarchy, and SEO strategy, making it a powerful competitive intelligence tool."
            }
          }
        ]
      }
    ]
  };

  return (
    <>
      <SEO
        title="Inspo AI | AI Design Inspiration, Moodboard Builder & Mobbin Alternative"
        description="The #1 Mobbin alternative. Search millions of UI designs, build collaborative moodboards, audit brands for compliance, and scan competitors — all from one AI-powered design workspace."
        keywords="Mobbin alternative, AI design inspiration, UI UX design library, moodboard builder online, design research tool, Dribbble alternative, Pinterest alternative for designers, UI design references, brand audit tool, competitor analysis tool, AI website generator, design collaboration platform, design patterns library, UI inspiration search, creative brief tool"
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
          <FeatureSection />
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
