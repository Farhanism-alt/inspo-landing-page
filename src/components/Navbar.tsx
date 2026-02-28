import { useState, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import LogoInspo from "@/assets/LogoInspo.svg";
import NavHamburger from "@/assets/nav-hamburger.svg";
import NavLogin from "@/assets/nav-login.svg";
import NavCancel from "@/assets/nav-cancel.svg";

const useCaseLinks = [
  { label: "For UI/UX Designers", href: "/use-cases/ui-ux-designers" },
  { label: "For Brand Teams", href: "/use-cases/brand-teams" },
  { label: "For Marketing Teams", href: "/use-cases/marketing-teams" },
  { label: "For Agencies", href: "/use-cases/agencies" },
];

const solutionLinks = [
  { label: "Design Inspiration", href: "/solutions/design-inspiration" },
  { label: "Brand Intelligence", href: "/solutions/brand-intelligence" },
  { label: "Creative Collaboration", href: "/solutions/creative-collaboration" },
  { label: "Competitive Analysis", href: "/solutions/competitive-analysis" },
  { label: "AI Design Generation", href: "/solutions/ai-design-generation" },
];

const navLinks = [
  { label: "Solutions", href: "#", hasDropdown: true, dropdownItems: solutionLinks },
  { label: "Use Cases", href: "#", hasDropdown: true, dropdownItems: useCaseLinks },
  { label: "Free Tools", href: "/free-tools", hasDropdown: false },
  { label: "Features", href: "/#features", hasDropdown: false },
  { label: "Blogs", href: "/blogs", hasDropdown: false },
  { label: "Pricing", href: "/#pricing", hasDropdown: false },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [expandedMobileMenu, setExpandedMobileMenu] = useState<string | null>(null);

  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY;
      const footer = document.querySelector('footer');
      const cta = document.querySelector('section.py-28');

      const threshold = 40;
      const isOverFooter = footer && scrollPos + threshold >= (footer as HTMLElement).offsetTop;
      const isOverCTA = cta && scrollPos + threshold >= (cta as HTMLElement).offsetTop && scrollPos + threshold <= (cta as HTMLElement).offsetTop + (cta as HTMLElement).offsetHeight;

      setIsDark(!!(isOverFooter || isOverCTA));
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className="fixed top-6 left-1/2 -translate-x-1/2 z-[9999] w-[92%] sm:w-[90%] max-w-[520px]"
    >
      <motion.div
        layout
        animate={{
          height: mobileOpen ? "auto" : 56,
          background: mobileOpen
            ? (isDark ? "rgba(0, 0, 0, 0.7)" : "rgba(255, 255, 255, 0.8)")
            : (isDark ? "rgba(0, 0, 0, 0.4)" : "rgba(255, 255, 255, 0.18)")
        }}
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 50,
          mass: 1
        }}
        style={{
          backdropFilter: "blur(40px)",
          WebkitBackdropFilter: "blur(40px)",
          borderRadius: "18px",
          border: "1px solid rgba(255, 255, 255, 0.4)",
          boxShadow: `
            0 8px 32px rgba(0, 0, 0, 0.1),
            inset 0 1px 1px rgba(255, 255, 255, 0.8),
            inset 0 -1px 1px rgba(255, 255, 255, 0.2),
            inset 0 0 20px 0px rgba(255, 255, 255, 0.3)
          `
        }}
        className={`relative overflow-hidden transition-colors duration-300 ${isDark ? 'border-white/20' : ''}`}
      >
        {/* Pseudo-elements for the gradient borders */}
        <style dangerouslySetInnerHTML={{
          __html: `
            .nav-glass-card-edge::before {
              content: '';
              position: absolute;
              top: 0;
              left: 0;
              right: 0;
              height: 1px;
              background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.9), transparent);
              z-index: 5;
            }
            .nav-glass-card-edge::after {
              content: '';
              position: absolute;
              top: 0;
              left: 0;
              width: 1px;
              height: 100%;
              background: linear-gradient(180deg, rgba(255, 255, 255, 0.9), transparent, rgba(255, 255, 255, 0.4));
              z-index: 5;
            }
          `
        }} />
        <div className="nav-glass-card-edge absolute inset-0 pointer-events-none rounded-[18px] overflow-hidden"></div>

        {/* Background Glow Effect */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.5 }}
              className="absolute right-[-20px] top-1/2 -translate-y-1/2 w-[250px] h-[350px] bg-blue-400/20 blur-[90px] rounded-full pointer-events-none"
            />
          )}
        </AnimatePresence>

        <div className="relative z-10 w-full">
          {/* Header - Always visible at the top, fixed position */}
          <div className="h-[56px] flex items-center px-7 sm:px-9 justify-between relative w-full">
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className={`flex items-center justify-center transition-all duration-300 z-20 hover:scale-110 active:scale-95 ${isDark ? 'brightness-0 invert' : ''}`}
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
            >
              <img
                src={mobileOpen ? NavCancel : NavHamburger}
                alt="Menu Toggle"
                className="w-6 h-6 object-contain"
              />
            </button>

            <a href="/" className={`flex items-center absolute left-1/2 -translate-x-1/2 z-20 transition-all duration-300 hover:scale-105 ${isDark ? 'brightness-0 invert' : ''}`}>
              <img src={LogoInspo} alt="Inspo AI" className="h-7 object-contain" />
            </a>

            <div className={`flex items-center z-20 transition-all duration-300 ${isDark ? 'brightness-0 invert' : ''}`}>
              <a
                href="https://app.inspoai.io"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center transition-all duration-200 hover:scale-110 active:scale-95"
              >
                <img src={NavLogin} alt="Login" className="w-6 h-6 object-contain" />
              </a>
            </div>
          </div>

          {/* Navigation Links - Expands below */}
          <AnimatePresence>
            {mobileOpen && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="flex flex-col items-center gap-7 pb-10 px-8 sm:px-10 pt-2 overflow-hidden"
              >
                {navLinks.map((link, idx) => (
                  <motion.div
                    key={link.label}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.05, duration: 0.3 }}
                    className="w-full flex flex-col items-center"
                  >
                    {link.hasDropdown ? (
                      <>
                        <button
                          onClick={() => setExpandedMobileMenu(expandedMobileMenu === link.label ? null : link.label)}
                          className={`flex items-center gap-2 text-[13px] tracking-[0.2em] transition-colors uppercase group font-bold ${isDark ? 'text-white/90 hover:text-white' : 'text-[#001A2C] hover:text-black'}`}
                          style={{ fontFamily: "'Roboto Mono', monospace" }}
                        >
                          {link.label}
                          <ChevronDown
                            size={14}
                            className={`transition-transform duration-500 cubic-bezier(0.4, 0, 0.2, 1) ${expandedMobileMenu === link.label ? 'rotate-180 text-primary' : ''}`}
                          />
                        </button>

                        <AnimatePresence>
                          {expandedMobileMenu === link.label && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
                              className="overflow-hidden flex flex-col items-center gap-4 mt-6"
                            >
                              {link.dropdownItems?.map((item) => (
                                <a
                                  key={item.label}
                                  href={item.href}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="text-[11px] tracking-[0.15em] text-foreground/50 hover:text-foreground transition-all uppercase hover:translate-x-1 duration-200"
                                  onClick={() => setMobileOpen(false)}
                                  style={{ fontFamily: "'Roboto Mono', monospace" }}
                                >
                                  {item.label}
                                </a>
                              ))}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </>
                    ) : (
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`text-[13px] tracking-[0.2em] transition-colors uppercase font-bold ${isDark ? 'text-white/90 hover:text-white' : 'text-[#001A2C] hover:text-black'}`}
                        onClick={() => setMobileOpen(false)}
                        style={{ fontFamily: "'Roboto Mono', monospace" }}
                      >
                        {link.label}
                      </a>
                    )}
                  </motion.div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </nav>
  );
};

export default Navbar;
