import { AnimatePresence, motion } from "framer-motion";
import BlurReveal from "./BlurReveal";
import { Sparkles, ArrowUp, ArrowRight, ChevronDown } from "lucide-react";
import { useState, useEffect } from "react";
import toolbarIcons from "../assets/toolbar-icons.png";

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

const HeroSection = () => {
  const [query, setQuery] = useState("");
  const [wordIndex, setWordIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setWordIndex((prev) => (prev + 1) % rotatingWords.length);
    }, 3000);
    return () => clearInterval(interval);
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
    <section className="relative min-h-[105vh] flex flex-col items-center justify-center overflow-hidden py-24 px-4 sm:px-6">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="https://ik.imagekit.io/u2alrzkll/Inspo%20banner%20video.mp4" type="video/mp4" />
        </video>
        {/* Subtle Overlay to ensure readability */}
        <div className="absolute inset-0 bg-white/10 backdrop-blur-[1px]" />
      </div>

      <div className="container-narrow relative z-10 text-center mt-[10vh]">
        {/* Animated heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="font-display text-[64px] sm:text-[84px] text-[#0A1A2F] leading-[1.1] tracking-normal max-w-5xl mx-auto"
          style={{ fontFamily: "'Relationship of Melodrame', cursive" }}
        >
          One place for <br />
          all your design{" "}
          <span className="inline-flex relative h-[1.1em] align-top pl-1" style={{ fontFamily: "'Relationship of Melodrame', cursive" }}>
            <AnimatePresence mode="wait">
              <motion.span
                key={rotatingWords[wordIndex]}
                className="flex"
                style={{ fontFamily: "'Relationship of Melodrame', cursive" }}
              >
                {rotatingWords[wordIndex].split("").map((char, i) => (
                  <motion.span
                    key={i}
                    initial={{ x: 10, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ x: -10, opacity: 0 }}
                    transition={{
                      duration: 0.3,
                      delay: i * 0.02,
                      ease: [0.22, 1, 0.36, 1]
                    }}
                    style={{ fontFamily: "'Relationship of Melodrame', cursive" }}
                  >
                    {char === " " ? "\u00A0" : char}
                  </motion.span>
                ))}
              </motion.span>
            </AnimatePresence>
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-6 text-[15px] sm:text-[16px] text-[#4A5568] max-w-[700px] mx-auto leading-relaxed font-normal"
        >
          Find millions of web designs,icons , UI screens, and creatives in one place. Save to moodboards. Collaborate in live. Scan any URL for its brand DNA. Audit designs with AI. Creator Studio (Prompt to website based on your moodboard) coming soon!
        </motion.p>

        {/* Floating Search UI */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mt-16 max-w-[672px] mx-auto w-full relative"
        >
          {/* Outer Decorative Stroke */}
          <div className="absolute inset-[-20px] rounded-[52px] border-[2px] border-white/60 pointer-events-none" />

          <div className="bg-white rounded-[32px] shadow-[0_20px_64px_rgba(0,0,0,0.05)] overflow-hidden relative z-10">
            <div className="p-6 sm:p-8">
              {/* Toolbar Icons & Color Indicator */}
              <div className="flex items-center gap-6 mb-8 overflow-x-auto no-scrollbar">
                <div className="flex items-center gap-5 text-[#0A1A2F]/60">
                  <button type="button" className="hover:text-[#0A1A2F] transition-colors">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="18" x="3" y="3" rx="2" /><path d="M3 9h18" /><path d="M9 21V9" /></svg>
                  </button>
                  <button type="button" className="hover:text-[#0A1A2F] transition-colors">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="18" x="3" y="3" rx="2" ry="2" /><circle cx="9" cy="9" r="2" /><path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" /></svg>
                  </button>
                  <button type="button" className="hover:text-[#0A1A2F] transition-colors">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M4 7V4h16v3" /><path d="M9 20h6" /><path d="M12 4v16" /></svg>
                  </button>
                </div>

                <div className="h-5 w-[1px] bg-black/10 mx-1" />

                <div className="flex items-center gap-2.5">
                  <div className="w-6 h-6 rounded-full bg-[#41F661]" />
                  <span className="text-[14px] font-medium text-[#0A1A2F]/80">#41F661</span>
                </div>
              </div>

              {/* Input Area */}
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row items-start sm:items-center gap-5">
                <input
                  type="text"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Ask inspo..."
                  className="flex-1 bg-transparent text-[18px] sm:text-[20px] text-[#0A1A2F] placeholder:text-[#0A1A2F]/20 outline-none font-medium w-full"
                />
                <div className="flex items-center gap-2.5 w-full sm:w-auto justify-end">
                  <button
                    type="button"
                    onClick={handleSurpriseMe}
                    className="bg-black hover:inspo-gradient-bg text-white px-5 py-2.5 rounded-full flex items-center gap-2.5 transition-all duration-300 font-medium text-[13px] group"
                  >
                    <Sparkles size={14} fill="#41F661" strokeWidth={1} className="group-hover:fill-white transition-colors" />
                    Suprise me
                  </button>
                  <button
                    type="submit"
                    className="w-[42px] h-[42px] rounded-full bg-[#F5F5F7] flex items-center justify-center text-[#0A1A2F]/60 hover:bg-black hover:text-white transition-all duration-300"
                  >
                    <ArrowUp size={18} strokeWidth={1.5} />
                  </button>
                </div>
              </form>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
