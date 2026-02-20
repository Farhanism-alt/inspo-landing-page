import { useState, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import LogoInspo from "@/assets/LogoInspo.svg";

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
  { label: "Features", href: "/#features" },
  { label: "Pricing", href: "/#pricing" },
  { label: "FAQ", href: "/#faq" },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [expandedMobileMenu, setExpandedMobileMenu] = useState<string | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled
        ? "bg-background/70 backdrop-blur-xl backdrop-saturate-150 border-b border-border/50 shadow-[0_1px_12px_rgba(0,0,0,0.04)]"
        : "bg-transparent border-b border-transparent"
        }`}
    >
      <div className="container-narrow flex items-center justify-between h-16 px-4 sm:px-6 lg:px-8">
        <a href="/" className="flex items-center">
          <img src={LogoInspo} alt="Inspo AI" className="h-7" />
        </a>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <div
              key={link.label}
              className="relative group"
              onMouseEnter={() => link.hasDropdown && setActiveDropdown(link.label)}
              onMouseLeave={() => link.hasDropdown && setActiveDropdown(null)}
            >
              <a
                href={link.href}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1 py-4"
              >
                {link.label}
                {link.hasDropdown && <ChevronDown size={14} className={`transition-transform duration-300 ${activeDropdown === link.label ? 'rotate-180' : ''}`} />}
              </a>

              {link.hasDropdown && (
                <AnimatePresence>
                  {activeDropdown === link.label && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.95 }}
                      transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
                      className="absolute top-full left-0 w-64 bg-white rounded-2xl border border-border shadow-inspo-lg p-2 overflow-hidden"
                    >
                      {link.dropdownItems?.map((subLink) => (
                        <a
                          key={subLink.label}
                          href={subLink.href}
                          className="block px-4 py-2.5 text-xs font-semibold text-[#0A1A2F]/70 hover:text-black hover:bg-[#F5F5F7] rounded-xl transition-all"
                        >
                          {subLink.label}
                        </a>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              )}
            </div>
          ))}
        </div>

        <div className="hidden md:block">
          <a
            href="https://app.inspoai.live"
            className="bg-black hover:inspo-gradient-bg shimmer-btn text-white font-semibold text-sm px-7 py-3 rounded-pill inline-block transition-all duration-300 hover:shadow-[0_4px_20px_rgba(0,140,255,0.2)] hover:-translate-y-[1px]"
          >
            Try It Free
          </a>
        </div>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden text-foreground"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-background/90 backdrop-blur-xl border-b border-border overflow-hidden"
          >
            <div className="px-4 py-4 flex flex-col gap-1">
              {navLinks.map((link) => (
                <div key={link.label} className="flex flex-col border-b border-border/50 last:border-0">
                  {link.hasDropdown ? (
                    <>
                      <button
                        className="flex items-center justify-between text-sm font-bold text-foreground py-4 uppercase tracking-wider px-2 w-full text-left"
                        onClick={() => setExpandedMobileMenu(expandedMobileMenu === link.label ? null : link.label)}
                      >
                        <span className="opacity-80">{link.label}</span>
                        <ChevronDown size={18} className={`transition-transform duration-300 opacity-50 ${expandedMobileMenu === link.label ? 'rotate-180' : ''}`} />
                      </button>
                      <AnimatePresence>
                        {expandedMobileMenu === link.label && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            className="overflow-hidden"
                          >
                            <div className="flex flex-col gap-1 pl-4 pb-4">
                              {link.dropdownItems?.map((subLink) => (
                                <a
                                  key={subLink.label}
                                  href={subLink.href}
                                  className="text-[15px] font-medium text-muted-foreground hover:text-foreground py-2.5"
                                  onClick={() => setMobileOpen(false)}
                                >
                                  {subLink.label}
                                </a>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </>
                  ) : (
                    <a
                      href={link.href}
                      className="text-sm font-bold text-foreground py-4 uppercase tracking-wider opacity-80 hover:opacity-100 px-2 block w-full"
                      onClick={() => setMobileOpen(false)}
                    >
                      {link.label}
                    </a>
                  )}
                </div>
              ))}
              <a
                href="https://app.inspoai.live"
                className="bg-black hover:inspo-gradient-bg text-white font-semibold text-sm px-6 py-3 rounded-pill text-center mt-6 transition-all duration-300"
              >
                Try It Free
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;

