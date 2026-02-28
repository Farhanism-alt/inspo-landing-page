import { AnimatePresence, motion } from "framer-motion";
import BlurReveal from "./BlurReveal";
import { Sparkles, ArrowUp, ArrowRight, ChevronDown } from "lucide-react";
import { useState, useEffect } from "react";
import toolbarIcons from "../assets/toolbar-icons.png";
import HeroBanner from "@/assets/hero-banner-new.png";
import HeroSearchBarNew from "@/assets/hero-search-bar-v2.png";

const heroWords = "Find design inspiration in seconds, not hours".split(" ");

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.06, delayChildren: 0.1 },
  },
};

const wordAnim = {
  hidden: { opacity: 0, y: 20, filter: "blur(8px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
  },
};

const rotatingWords = ["inspiration", "research", "collaboration", "validation"];

const searchPrompts = [
  "Find me icons for a fitness app...",
  "Show me SaaS landing pages with dark mode...",
  "Find UI screens with minimal navigation...",
  "Search web designs with bold typography...",
  "Show me dashboards with glassmorphism...",
];

const HeroSection = () => {
  const [query, setQuery] = useState("");
  const [isFocused, setIsFocused] = useState(false);
  const [wordIndex, setWordIndex] = useState(0);
  const [promptIndex, setPromptIndex] = useState(0);

  useEffect(() => {
    const wordInterval = setInterval(() => {
      setWordIndex((prev) => (prev + 1) % rotatingWords.length);
    }, 3000);

    const promptInterval = setInterval(() => {
      setPromptIndex((prev) => (prev + 1) % searchPrompts.length);
    }, 4000);

    return () => {
      clearInterval(wordInterval);
      clearInterval(promptInterval);
    };
  }, []);

  const handleSubmit = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (query.trim()) {
      window.open(`https://app.inspoai.io/search?q=${encodeURIComponent(query)}`, "_blank");
    }
  };

  const handleSurpriseMe = () => {
    window.open("https://app.inspoai.io", "_blank");
  };

  return (
    <section className="relative h-[816px] flex flex-col items-center justify-center overflow-hidden py-12 px-4 sm:px-6">
      {/* Background Image Fill */}
      <div className="absolute inset-0 z-0 bg-white">
        <img
          src={HeroBanner}
          alt="Inspo AI design workspace — AI-powered search, moodboards, brand audits, and competitor scanning"
          className="w-full h-full object-cover"
        />
        {/* Subtle overlay to maintain brand feeling while ensuring readability */}
        <div className="absolute inset-0 bg-white/10" />
      </div>

      <div className="container-narrow relative z-10 text-center">
        {/* Animated heading */}
        {/* Center Butterfly Spacer */}
        <div className="relative flex items-center justify-center w-full max-w-[1400px] mx-auto min-h-[450px] md:min-h-[550px]">
          {/* Vertical Spacer to maintain structure since butterfly is now in background fill */}
          <div className="w-full max-w-[1000px] h-[450px] md:h-[550px] pointer-events-none" />
        </div>
      </div>

      {/* Responsive Side Typography Overlay - Perfectly center aligned vertically */}
      <div className="absolute inset-0 z-20 max-w-[1400px] mx-auto w-full pointer-events-none flex flex-col items-center pt-[240px] md:pt-0 md:block">
        {/* Left Text: Roboto Mono */}
        <motion.div
          initial={{ opacity: 0, filter: "blur(12px)" }}
          animate={{ opacity: 1, filter: "blur(0px)" }}
          transition={{ duration: 1.2, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="relative md:absolute w-full md:w-auto left-0 md:left-[7%] lg:left-[10%] xl:left-[13%] md:top-[calc(36%+15px)] md:-translate-y-1/2 flex items-center justify-center md:items-start md:justify-start mb-2 md:mb-0"
        >
          <div
            className="text-[16px] sm:text-[18px] md:text-[15px] lg:text-[18px] text-[#4D6070] font-medium uppercase whitespace-nowrap"
            style={{ fontFamily: "'Roboto Mono', monospace", letterSpacing: '0.29em' }}
          >
            ONE PLACE FOR ALL YOUR
          </div>
        </motion.div>

        {/* Right Text: Cursive Text with Rotating Word */}
        <motion.div
          initial={{ opacity: 0, filter: "blur(12px)" }}
          animate={{ opacity: 1, filter: "blur(0px)" }}
          transition={{ duration: 1.2, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="relative md:absolute w-full md:w-auto left-0 md:left-[50%] lg:left-[55%] xl:left-[60%] md:top-[calc(36%+15px)] md:-translate-y-1/2 flex items-center justify-center md:items-start md:justify-start"
        >
          <h1
            className="font-display text-[62px] sm:text-[70px] md:text-[51px] lg:text-[88px] text-[#4D6070] leading-[0.9] tracking-normal font-normal flex flex-row items-center justify-center md:justify-start"
            style={{ fontFamily: "'Relationship of Melodrame', cursive", letterSpacing: '0' }}
          >
            <span className="mr-3 md:mr-4" style={{ fontFamily: "'Relationship of Melodrame', cursive", letterSpacing: '0' }}>design</span>
            <span className="inline-flex relative h-[1.1em] items-center min-w-[0px] md:min-w-[300px] justify-start text-left">
              <AnimatePresence mode="wait">
                <motion.span
                  key={rotatingWords[wordIndex]}
                  className="flex items-center justify-center md:justify-start"
                  style={{ fontFamily: "'Relationship of Melodrame', cursive", letterSpacing: '0' }}
                >
                  {rotatingWords[wordIndex].split("").map((char, i) => (
                    <motion.span
                      key={i}
                      initial={{ opacity: 0, display: "inline-block" }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.3, delay: i * 0.02, ease: [0.22, 1, 0.36, 1] }}
                      className="whitespace-pre"
                      style={{ fontFamily: "'Relationship of Melodrame', cursive", letterSpacing: '0' }}
                    >
                      {char}
                    </motion.span>
                  ))}
                </motion.span>
              </AnimatePresence>
            </span>
          </h1>
        </motion.div>
      </div>

      {/* Search Bar Overlay - Positioned down by 10% (from 420px to 500px) */}
      <div
        className="absolute top-[500px] inset-x-0 mx-auto z-30 max-w-[880px] w-full px-6 scale-[1.15] md:scale-100 origin-center"
      >
        <div className="relative w-full">
          <img
            src={HeroSearchBarNew}
            alt="Search Bar UI"
            className="w-full h-auto drop-shadow-[0_40px_100px_rgba(0,0,0,0.08)]"
          />

          {/* Functional Hotspots */}
          <form
            onSubmit={handleSubmit}
            className="absolute inset-0 flex items-end justify-start pb-[14%] pl-[8%] pr-[25%]"
          >
            <div className="relative w-full translate-x-[15px] translate-y-[28px] md:translate-y-[35px]">
              <AnimatePresence mode="wait">
                {query.length === 0 && !isFocused && (
                  <motion.div
                    key={promptIndex}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                    className="absolute inset-0 pointer-events-none flex items-center text-[11px] md:text-[18px] text-gray-400/60 font-medium whitespace-nowrap"
                  >
                    {searchPrompts[promptIndex]}
                    <motion.span
                      animate={{ opacity: [1, 1, 0, 0] }}
                      transition={{
                        repeat: Infinity,
                        duration: 1,
                        times: [0, 0.5, 0.5, 1],
                        ease: "linear"
                      }}
                      className="ml-0.5 text-[#2D3748]"
                    >
                      |
                    </motion.span>
                  </motion.div>
                )}
              </AnimatePresence>
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
                aria-label="Search for design inspiration"
                className="w-full bg-transparent text-[13px] md:text-[18px] text-[#2D3748] outline-none font-medium"
              />
            </div>
            <button type="submit" className="sr-only">Search</button>
          </form>

          {/* Surprise Me Hotspot */}
          <a
            href="https://app.inspoai.io"
            target="_blank"
            rel="noopener noreferrer"
            className="absolute bottom-[12%] right-[4%] w-[22%] h-[40%] cursor-pointer opacity-0 z-40 block"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
