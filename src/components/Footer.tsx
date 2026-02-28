import { Link } from "react-router-dom";

import { motion, useAnimation } from "framer-motion";
import { useEffect, useState } from "react";

const InteractiveStrip = ({
  delay = 0,
  children,
  x,
  y,
  width,
  height,
  transform = ""
}: {
  delay?: number,
  children: React.ReactNode,
  x?: number | string,
  y?: number | string,
  width?: number | string,
  height?: number | string,
  transform?: string
}) => {
  return (
    <motion.g
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{
        rotateY: 180,
        z: 100,
        transition: { type: "spring", stiffness: 400, damping: 20 }
      }}
      transition={{
        type: "spring",
        stiffness: 100,
        damping: 20,
        delay
      }}
      className="cursor-pointer"
      style={{ transformOrigin: "center", transformStyle: "preserve-3d" }}
    >
      {children}
    </motion.g>
  );
};

const FooterStrips = () => {
  // Mapping a representative set of strips based on the SVG coordinates provided
  const stripsData = [
    { id: 0, x: 202, y: 185, matrix: "-1 0 0 1 202 185", delay: 0 },
    { id: 1, x: 303, y: 278, matrix: "-1 0 0 1 303 278", delay: 0.1 },
    { id: 2, x: 404, y: 339, matrix: "-1 0 0 1 404 339", delay: 0.2 },
    { id: 3, x: 505, y: 389, matrix: "-1 0 0 1 505 389", delay: 0.3 },
    { id: 4, x: 606, y: 422, matrix: "-1 0 0 1 606 422", delay: 0.4 },
    { id: 5, x: 707, y: 451, matrix: "-1 0 0 1 707 451", delay: 0.5 },
    { id: 6, x: 808, y: 469, matrix: "-1 0 0 1 808 469", delay: 0.6 },
    { id: 7, x: 909, y: 487, matrix: "-1 0 0 1 909 487", delay: 0.7 },
    { id: 8, x: 1010, y: 483, isRight: true, delay: 0.8 },
    { id: 9, x: 1111, y: 465, isRight: true, delay: 0.9 },
    { id: 10, x: 1212, y: 447, isRight: true, delay: 1.0 },
    { id: 11, x: 1313, y: 422, isRight: true, delay: 1.1 },
    { id: 12, x: 1414, y: 381, isRight: true, delay: 1.2 },
    { id: 13, x: 1515, y: 329, isRight: true, delay: 1.3 },
    { id: 14, x: 1616, y: 264, isRight: true, delay: 1.4 },
    { id: 15, x: 1717, y: 163, isRight: true, delay: 1.5 },
    { id: 16, x: 1818, y: 0, isRight: true, delay: 1.6 },
  ];

  return (
    <div className="absolute inset-x-0 bottom-0 top-1/2 z-0 opacity-60 pointer-events-none perspective-[2000px]">
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 1920 1201"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full object-cover origin-bottom"
        preserveAspectRatio="xMidYMax slice"
      >
        <defs>
          <linearGradient id="stripGradient" x1="0.5" y1="1" x2="0.55" y2="0">
            <stop offset="1.89%" stopColor="white" stopOpacity="0" />
            <stop offset="18.46%" stopColor="#008CFF" stopOpacity="0.1" />
            <stop offset="51.64%" stopColor="#41F461" stopOpacity="1" />
            <stop offset="86.26%" stopColor="#008CFF" stopOpacity="0.1" />
            <stop offset="99.21%" stopColor="#001C33" stopOpacity="0" />
          </linearGradient>

          <filter id="noiseFilterStrips">
            <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="4" stitchTiles="stitch" />
            <feColorMatrix type="saturate" values="0" />
            <feComponentTransfer>
              <feFuncA type="linear" slope="0.15" />
            </feComponentTransfer>
            <feComposite operator="in" in2="SourceGraphic" />
          </filter>
        </defs>

        <g className="pointer-events-auto" filter="url(#noiseFilterStrips)">
          {stripsData.map((strip) => (
            <InteractiveStrip key={strip.id} delay={strip.delay}>
              {strip.isRight ? (
                <rect
                  x={strip.x}
                  y={strip.y}
                  width="101"
                  height="712"
                  fill="url(#stripGradient)"
                  rx="4"
                />
              ) : (
                <rect
                  width="101"
                  height="712"
                  transform={`matrix(${strip.matrix})`}
                  fill="url(#stripGradient)"
                  rx="4"
                />
              )}
            </InteractiveStrip>
          ))}
        </g>
      </svg>
    </div>
  );
};

const footerCols = [
  {
    title: "Product",
    links: [
      { label: "AI Design Search", href: "/#features" },
      { label: "Moodboard Builder", href: "/#features" },
      { label: "AI Design Audit", href: "/#features" },
      { label: "Brand Scanner", href: "/#features" },
      { label: "Creator Studio", href: "/#features" },
      { label: "Live Collaboration", href: "/#features" }
    ]
  },
  {
    title: "Use cases",
    links: [
      { label: "For UI/UX Designers", href: "/use-cases/ui-ux-designers" },
      { label: "For Brand Teams", href: "/use-cases/brand-teams" },
      { label: "For Marketing Teams", href: "/use-cases/marketing-teams" },
      { label: "For Agencies", href: "/use-cases/agencies" }
    ]
  },
  {
    title: "Solutions",
    links: [
      { label: "Design Inspiration", href: "/solutions/design-inspiration" },
      { label: "Brand Intelligence", href: "/solutions/brand-intelligence" },
      { label: "Creative Collaboration", href: "/solutions/creative-collaboration" },
      { label: "Competitive Analysis", href: "/solutions/competitive-analysis" },
      { label: "AI Design Generation", href: "/solutions/ai-design-generation" }
    ]
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Blogs", href: "/blogs" },
      { label: "Contact", href: "mailto:contact@inspoai.io" },
      { label: "Privacy Policy", href: "/privacy-policy" },
      { label: "Terms of Service", href: "/terms-of-service" },
      { label: "Lifetime Plan Policy", href: "/lifetime-plan-policy" }
    ]
  }
];


import LogoInspo from "@/assets/LogoInspo.svg";

import { Twitter, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer
      className="relative overflow-hidden bg-black text-white pt-48 pb-16"
    >
      <img
        src="/footer.png"
        alt=""
        loading="lazy"
        decoding="async"
        className="absolute inset-0 w-full h-full object-cover z-0 opacity-100 pointer-events-none"
      />
      <FooterStrips />

      {/* Background Grain Offset */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.08]" style={{ mixBlendMode: 'soft-light' }}>
        <div className="w-full h-full bg-black">
          <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
            <filter id="noiseFilterFooter">
              <feTurbulence type="fractalNoise" baseFrequency="0.6" numOctaves="4" stitchTiles="stitch" />
            </filter>
            <rect width="100%" height="100%" filter="url(#noiseFilterFooter)" />
          </svg>
        </div>
      </div>

      <div className="container-narrow px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-12 mb-32">
          <div className="lg:col-span-1">
            <Link to="/" className="inline-block transition-transform hover:scale-105">
              <img src={LogoInspo} alt="Inspo AI" className="h-7 brightness-0 invert" />
            </Link>
            <p className="text-white/50 text-sm mt-4 leading-relaxed max-w-[200px]">
              AI-powered design inspiration and brand intelligence.
            </p>
          </div>
          {footerCols.map((col) => (
            <div key={col.title}>
              <h4 className="text-white text-sm mb-6 tracking-wider">{col.title}</h4>
              <ul className="space-y-3">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white/40 text-sm hover:text-white transition-colors duration-200 relative after:content-[''] after:absolute after:bottom-[-1px] after:left-0 after:w-0 after:h-[1px] after:bg-white after:transition-all after:duration-300 hover:after:w-full"
                      style={{ fontFamily: "'Roboto Mono', monospace", fontWeight: 300, textTransform: 'uppercase' }}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
              {col.title === "Use cases" && (
                <div className="mt-10">
                  <h4 className="text-white text-sm mb-6 tracking-wider">Alternative</h4>
                  <ul className="space-y-3">
                    <li>
                      <a
                        href="/compare/inspo-ai-vs-mobbin"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white/40 text-sm hover:text-white transition-colors duration-200 relative after:content-[''] after:absolute after:bottom-[-1px] after:left-0 after:w-0 after:h-[1px] after:bg-white after:transition-all after:duration-300 hover:after:w-full"
                        style={{ fontFamily: "'Roboto Mono', monospace", fontWeight: 300, textTransform: 'uppercase' }}
                      >
                        Mobbin Alternative
                      </a>
                    </li>
                  </ul>
                </div>
              )}
              {col.title === "Company" && (
                <div className="mt-10">
                  <h4 className="text-white text-sm mb-6 tracking-wider">Resource hub</h4>
                  <ul className="space-y-3">
                    <li>
                      <a
                        href="/free-tools"
                        className="text-white/40 text-sm hover:text-white transition-colors duration-200 relative after:content-[''] after:absolute after:bottom-[-1px] after:left-0 after:w-0 after:h-[1px] after:bg-white after:transition-all after:duration-300 hover:after:w-full"
                        style={{ fontFamily: "'Roboto Mono', monospace", fontWeight: 300, textTransform: 'uppercase' }}
                      >
                        Free Tools
                      </a>
                    </li>
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="pt-10 flex flex-col md:flex-row items-center justify-between gap-6 md:gap-4">
          <p className="text-white/30 text-[10px] text-center md:text-left md:w-1/3 tracking-widest">
            &copy; 2026 Inspo AI. All rights reserved.
          </p>

          <p className="text-white/40 text-center md:w-1/3 flex items-center justify-center gap-1" style={{ fontFamily: "'Relationship of Melodrame', cursive", fontSize: "1.2rem" }}>
            Made with
            <svg width="24" height="24" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg" className="inline-block">
              <g filter="url(#filter0_i_footer_heart)">
                <path d="M10.4393 20.02C7.61037 17.9046 2.00586 13.0684 2.00586 8.71628C2.00586 5.83972 4.1168 3.50781 7.01936 3.50781C8.52341 3.50781 10.0275 4.00916 12.0329 6.01456C14.0383 4.00916 15.5423 3.50781 17.0464 3.50781C19.9489 3.50781 22.0599 5.83972 22.0599 8.71628C22.0599 13.0684 16.4554 17.9046 13.6265 20.02C12.6745 20.7318 11.3912 20.7318 10.4393 20.02Z" fill="url(#paint0_linear_footer_heart)" />
              </g>
              <path d="M17.0459 4.25977C19.4933 4.25977 21.3074 6.21405 21.3076 8.71582C21.3076 10.6024 20.0705 12.7197 18.3369 14.7129C16.6308 16.6745 14.568 18.3769 13.1758 19.418C12.4909 19.9298 11.5745 19.9299 10.8896 19.418C9.49745 18.3769 7.43563 16.6745 5.72949 14.7129C3.9958 12.7196 2.75781 10.6025 2.75781 8.71582C2.75803 6.21404 4.57209 4.25977 7.01953 4.25977C8.283 4.2598 9.60491 4.64993 11.501 6.5459C11.7947 6.83958 12.2708 6.83958 12.5645 6.5459C14.4604 4.64995 15.7825 4.25986 17.0459 4.25977Z" stroke="url(#paint1_linear_footer_heart)" strokeWidth="1.50405" strokeLinecap="round" strokeLinejoin="round" />
              <defs>
                <filter id="filter0_i_footer_heart" x="2.00586" y="3.50781" width="20.0537" height="18.0469" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                  <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                  <feOffset dy="1" />
                  <feGaussianBlur stdDeviation="1.5" />
                  <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
                  <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.25 0" />
                  <feBlend mode="normal" in2="shape" result="effect1_innerShadow_footer_heart" />
                </filter>
                <linearGradient id="paint0_linear_footer_heart" x1="12.0329" y1="3.50781" x2="12.0329" y2="20.5538" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#FF4848" />
                  <stop offset="1" stopColor="#992B2B" />
                </linearGradient>
                <linearGradient id="paint1_linear_footer_heart" x1="12.0329" y1="3.50781" x2="12.0329" y2="20.5538" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#FF0026" stopOpacity="0.5" />
                  <stop offset="1" stopColor="#750000" stopOpacity="0.7" />
                </linearGradient>
              </defs>
            </svg>
            in Chennai, for the world
          </p>

          <div className="flex gap-4 md:w-1/3 justify-center md:justify-end">
            <a
              className="text-white hover:text-white transition-all duration-300 p-2.5 bg-white/10 border border-white/20 rounded-full hover:bg-white/20 hover:scale-110"
              href="https://x.com/inspo_ai_"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
            >
              <Twitter size={16} fill="white" />
            </a>
            <a
              className="text-white hover:text-white transition-all duration-300 p-2.5 bg-white/10 border border-white/20 rounded-full hover:bg-white/20 hover:scale-110"
              href="https://www.linkedin.com/company/inspo-ai/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <Linkedin size={16} fill="white" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;