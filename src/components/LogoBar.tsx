const LogoBar = () => {
  return (
    <>
      <style>
        {`
          @keyframes scroll {
              0% {
                  transform: translateX(0);
              }
              100% {
                  transform: translateX(-33.33%);
              }
          }

          .custom-marquee:hover {
              animation-play-state: paused !important;
          }

          .custom-marquee img {
              filter: grayscale(100%);
              opacity: 0.5;
              transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          }

          .custom-marquee img:hover {
              filter: grayscale(0%);
              opacity: 1;
              transform: scale(1.05);
          }
        `}
      </style>
      <div style={{ width: '100%', overflow: 'hidden', background: '#ffffff', padding: '30px 0', position: 'relative' }}>
        {/* Left gradient */}
        <div style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: '150px', background: 'linear-gradient(to right, #ffffff 0%, rgba(255, 255, 255, 0) 100%)', zIndex: 2, pointerEvents: 'none' }}></div>
        {/* Right gradient */}
        <div style={{ position: 'absolute', right: 0, top: 0, bottom: 0, width: '150px', background: 'linear-gradient(to left, #ffffff 0%, rgba(255, 255, 255, 0) 100%)', zIndex: 2, pointerEvents: 'none' }}></div>

        <div className="container-narrow px-4 relative z-10 mb-8 mt-2">
          <p className="text-center text-xs uppercase tracking-[0.2em] text-muted-foreground font-medium">
            Used by creative teams at
          </p>
        </div>

        <div className="custom-marquee" style={{ display: 'flex', width: 'fit-content', animation: 'scroll 30s linear infinite' }}>

          {/* First set of logos */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '80px', padding: '0 40px', flexShrink: 0 }}>
            <img src="https://framerusercontent.com/images/GqSEdGrdx37owMZSEEsbX07iyOI.svg?width=68&height=24" alt="Vercel logo" loading="lazy" style={{ height: '50px', width: 'auto', objectFit: 'contain' }} />
            <img src="https://framerusercontent.com/images/nCnW6ImWhJDVVjzHjzeZRLBXk.png?width=506&height=121" alt="Linear logo" loading="lazy" style={{ height: '50px', width: 'auto', objectFit: 'contain' }} />
            <img src="https://framerusercontent.com/images/kHiIMv1iAswDAYatzzYuPIIM.png?width=478&height=126" alt="Notion logo" loading="lazy" style={{ height: '50px', width: 'auto', objectFit: 'contain' }} />
            <img src="https://ik.imagekit.io/aakixgpoo/image%20(11).png" alt="Stripe logo" loading="lazy" style={{ height: '50px', width: 'auto', objectFit: 'contain' }} />
            <img src="https://ik.imagekit.io/aakixgpoo/image%20(12).png" alt="Figma logo" loading="lazy" style={{ height: '50px', width: 'auto', objectFit: 'contain' }} />
            <img src="https://framerusercontent.com/images/hBS4Dg3cbNi3CSjJTFfXxpmtrGk.png?scale-down-to=512&width=720&height=193" alt="Loom logo" loading="lazy" style={{ height: '50px', width: 'auto', objectFit: 'contain' }} />
            <img src="https://framerusercontent.com/images/yfp1ioM9S2PneRsmheqcoovqg.png?width=319&height=99" alt="Framer logo" loading="lazy" style={{ height: '50px', width: 'auto', objectFit: 'contain' }} />
            <img src="https://framerusercontent.com/images/FVL4iFGJRiG9YuNP6EuYeEz1g0.png?scale-down-to=512&width=8509&height=1969" alt="Webflow logo" loading="lazy" style={{ height: '50px', width: 'auto', objectFit: 'contain' }} />
          </div>

          {/* Second set of logos */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '80px', padding: '0 40px', flexShrink: 0 }}>
            <img src="https://framerusercontent.com/images/GqSEdGrdx37owMZSEEsbX07iyOI.svg?width=68&height=24" alt="Vercel logo" loading="lazy" style={{ height: '50px', width: 'auto', objectFit: 'contain' }} />
            <img src="https://framerusercontent.com/images/nCnW6ImWhJDVVjzHjzeZRLBXk.png?width=506&height=121" alt="Linear logo" loading="lazy" style={{ height: '50px', width: 'auto', objectFit: 'contain' }} />
            <img src="https://framerusercontent.com/images/kHiIMv1iAswDAYatzzYuPIIM.png?width=478&height=126" alt="Notion logo" loading="lazy" style={{ height: '50px', width: 'auto', objectFit: 'contain' }} />
            <img src="https://ik.imagekit.io/aakixgpoo/image%20(11).png" alt="Stripe logo" loading="lazy" style={{ height: '50px', width: 'auto', objectFit: 'contain' }} />
            <img src="https://ik.imagekit.io/aakixgpoo/image%20(12).png" alt="Figma logo" loading="lazy" style={{ height: '50px', width: 'auto', objectFit: 'contain' }} />
            <img src="https://framerusercontent.com/images/hBS4Dg3cbNi3CSjJTFfXxpmtrGk.png?scale-down-to=512&width=720&height=193" alt="Loom logo" loading="lazy" style={{ height: '50px', width: 'auto', objectFit: 'contain' }} />
            <img src="https://framerusercontent.com/images/yfp1ioM9S2PneRsmheqcoovqg.png?width=319&height=99" alt="Framer logo" loading="lazy" style={{ height: '50px', width: 'auto', objectFit: 'contain' }} />
            <img src="https://framerusercontent.com/images/FVL4iFGJRiG9YuNP6EuYeEz1g0.png?scale-down-to=512&width=8509&height=1969" alt="Webflow logo" loading="lazy" style={{ height: '50px', width: 'auto', objectFit: 'contain' }} />
          </div>

          {/* Third set of logos */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '80px', padding: '0 40px', flexShrink: 0 }}>
            <img src="https://framerusercontent.com/images/GqSEdGrdx37owMZSEEsbX07iyOI.svg?width=68&height=24" alt="Vercel logo" loading="lazy" style={{ height: '50px', width: 'auto', objectFit: 'contain' }} />
            <img src="https://framerusercontent.com/images/nCnW6ImWhJDVVjzHjzeZRLBXk.png?width=506&height=121" alt="Linear logo" loading="lazy" style={{ height: '50px', width: 'auto', objectFit: 'contain' }} />
            <img src="https://framerusercontent.com/images/kHiIMv1iAswDAYatzzYuPIIM.png?width=478&height=126" alt="Notion logo" loading="lazy" style={{ height: '50px', width: 'auto', objectFit: 'contain' }} />
            <img src="https://ik.imagekit.io/aakixgpoo/image%20(11).png" alt="Stripe logo" loading="lazy" style={{ height: '50px', width: 'auto', objectFit: 'contain' }} />
            <img src="https://ik.imagekit.io/aakixgpoo/image%20(12).png" alt="Figma logo" loading="lazy" style={{ height: '50px', width: 'auto', objectFit: 'contain' }} />
            <img src="https://framerusercontent.com/images/hBS4Dg3cbNi3CSjJTFfXxpmtrGk.png?scale-down-to=512&width=720&height=193" alt="Loom logo" loading="lazy" style={{ height: '50px', width: 'auto', objectFit: 'contain' }} />
            <img src="https://framerusercontent.com/images/yfp1ioM9S2PneRsmheqcoovqg.png?width=319&height=99" alt="Framer logo" loading="lazy" style={{ height: '50px', width: 'auto', objectFit: 'contain' }} />
            <img src="https://framerusercontent.com/images/FVL4iFGJRiG9YuNP6EuYeEz1g0.png?scale-down-to=512&width=8509&height=1969" alt="Webflow logo" loading="lazy" style={{ height: '50px', width: 'auto', objectFit: 'contain' }} />
          </div>

        </div>
      </div>
    </>
  );
};

export default LogoBar;
