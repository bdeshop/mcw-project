import React from "react";
import { Link } from "react-router-dom";
import { ChevronDown } from "lucide-react";

// Gaming License Images
// @ts-ignore
import license1 from "../../assets/gaminglincence/imgi_58_license1.png";
// @ts-ignore
import license2 from "../../assets/gaminglincence/imgi_59_anjouan-egaming.png";
// @ts-ignore
import logo from "../../assets/logo/logo.webp";
// @ts-ignore
import partnerLogo from "../../assets/global/imgi_265_anrich-nortje.png";
// @ts-ignore
import ambassadorLogo from "../../assets/global/imgi_276_pay59.png";
// @ts-ignore
import atleticoLogo from "../../assets/partners/atletico-de-madrid.png";
// @ts-ignore
import bundesligaLogo from "../../assets/partners/bundesliga.png";

// Custom Social Icons with colors from 2nd image
const Facebook = () => (
  <div className="h-10 w-10 bg-[#1877F2] rounded-full flex items-center justify-center text-white shadow-lg hover:scale-110 transition-transform">
    <svg viewBox="0 0 24 24" className="h-6 w-6 fill-current">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  </div>
);

const Telegram = () => (
  <div className="h-10 w-10 bg-[#0088CC] rounded-full flex items-center justify-center text-white shadow-lg hover:scale-110 transition-transform">
    <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current">
      <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm5.891 7.021l-2.017 9.516c-.15 0.682-.555 0.852-1.127 0.531l-3.067-2.261-1.48 1.425c-.163.163-.3.299-.614.299l.221-3.13 5.698-5.148c.248-.221-.054-.343-.385-.124l-7.042 4.433-3.033-.948c-.66-.206-.673-.66 0.138-.976l11.855-4.567c.548-.201 1.028.128 0.853.869z" />
    </svg>
  </div>
);

const Instagram = () => (
  <div className="h-10 w-10 bg-gradient-to-tr from-[#FFB500] via-[#FF0047] to-[#8101FF] rounded-full flex items-center justify-center text-white shadow-lg hover:scale-110 transition-transform">
    <svg viewBox="0 0 24 24" className="h-6 w-6 fill-current">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
    </svg>
  </div>
);

const Youtube = () => (
  <div className="h-10 w-10 bg-[#FF0000] rounded-full flex items-center justify-center text-white shadow-lg hover:scale-110 transition-transform">
    <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current">
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
    </svg>
  </div>
);

export const Footer = () => {
  return (
    <footer className="bg-[#101424] pt-12 pb-10 border-t border-white/5">
      <div className="max-w-[1200px] mx-auto px-6 space-y-12">
        {/* Top Info Section */}
        <div className="space-y-4 max-w-4xl">
          <h3 className="text-casino-gold font-black text-lg uppercase tracking-wider">MEGA CASINO WORLD: CRICKET EXCHANGE & CASINO SITES IN BANGLADESH</h3>
          <p className="text-white/40 text-[13px] leading-relaxed">
            As a novice player, it may be challenging to choose the top betting site in Bangladesh because the majority of these sites only seek to draw people to themselves. You should be wary of casinos that provide you all of these in exchange for registering because the welcome bonus they offer is not a criterion for being the finest website.
          </p>
          <button className="h-10 px-6 bg-[#232a44] border border-white/10 rounded flex items-center gap-2 text-white font-bold text-xs hover:bg-[#2a3254] transition-all">
            Read More <ChevronDown className="h-4 w-4" />
          </button>
        </div>

        <div className="h-px bg-white/5" />

        {/* Partners & Ambassadors Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Partners */}
          <div className="space-y-6">
            <h4 className="text-casino-gold font-bold text-[14px] uppercase tracking-widest">Partners</h4>
            <div className="flex flex-wrap gap-12">
              <div className="flex items-center gap-4 group cursor-pointer">
                <div className="h-10 w-10 bg-[#232a44] border border-white/5 group-hover:border-casino-gold rounded flex items-center justify-center overflow-hidden transition-colors">
                  <img src={atleticoLogo} alt="Atlético de Madrid" className="h-full w-full object-contain p-1" />
                </div>
                <div className="flex flex-col">
                  <span className="text-white font-black text-[13px] group-hover:text-casino-gold transition-colors">Atlético de Madrid</span>
                  <span className="text-white/40 text-[10px] uppercase font-bold">Official Regional Partner</span>
                </div>
              </div>
              <div className="flex items-center gap-4 group cursor-pointer">
                <div className="h-10 w-10 bg-[#232a44] border border-white/5 group-hover:border-casino-gold rounded flex items-center justify-center overflow-hidden transition-colors">
                  <img src={bundesligaLogo} alt="Bundesliga" className="h-full w-full object-contain p-1" />
                </div>
                <div className="flex flex-col">
                  <span className="text-white font-black text-[13px] group-hover:text-casino-gold transition-colors">Bundesliga</span>
                  <span className="text-white/40 text-[10px] uppercase font-bold">Regional Betting Partner - Asia</span>
                </div>
              </div>
            </div>
          </div>

          {/* Brand Ambassadors */}
          <div className="space-y-6">
            <h4 className="text-casino-gold font-bold text-[14px] uppercase tracking-widest">Brand Ambassadors</h4>
            <div className="flex items-center gap-4 group">
              <div className="h-12 w-12 bg-[#232a44] rounded-full flex items-center justify-center overflow-hidden border border-white/10 group-hover:border-casino-gold transition-colors">
                <img src={ambassadorLogo} alt="Official Ambassador" className="h-full w-full object-cover" />
              </div>
              <div className="flex flex-col">
                <span className="text-white font-black text-[13px]">Official Ambassador</span>
                <span className="text-white/40 text-[10px] uppercase font-bold">Brand Ambassador</span>
              </div>
            </div>
          </div>
        </div>

        {/* Grid 4 Columns */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 pt-4">
          {/* Gaming License */}
          <div className="space-y-6">
            <h4 className="text-casino-gold font-bold text-[14px] uppercase tracking-widest">Gaming License</h4>
            <div className="flex gap-4">
              <div className="h-10 md:h-12 w-auto   transition-all duration-300">
                <img src={license1} alt="Curacao License" className="h-full w-auto object-contain" />
              </div>
              <div className="h-10 md:h-12 w-auto grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300">
                <img src={license2} alt="Anjouan License" className="h-full w-auto object-contain" />
              </div>
            </div>
          </div>

          {/* Official Brand Partner */}
          <div className="space-y-6">
            <h4 className="text-casino-gold font-bold text-[14px] uppercase tracking-widest">Official Brand Partner</h4>
            <div className="flex items-center gap-3 group">
              <div className="h-10 w-10 bg-casino-gold rounded-full flex items-center justify-center font-black text-[#101424] text-xs shadow-lg shadow-casino-gold/20 group-hover:scale-110 transition-transform">VIP</div>
              <span className="text-white font-black text-[11px] uppercase italic">NEW CITY VIP</span>
            </div>
          </div>

          {/* App Download */}
          <div className="space-y-6">
            <h4 className="text-casino-gold font-bold text-[14px] uppercase tracking-widest">APP Download</h4>
            <button className="bg-[#101424] border border-white/10 p-2 pr-6 rounded-lg flex items-center gap-3 hover:bg-[#161b2e] transition-all group">
              <div className="h-10 w-10 bg-gradient-to-b from-[#A4C639] to-[#8DB301] rounded-md flex items-center justify-center shadow-inner group-hover:scale-105 transition-transform">
                <svg viewBox="0 0 24 24" className="h-6 w-6 fill-white">
                  <path d="M17.523 15.3414C16.8995 15.3414 16.3951 14.837 16.3951 14.2135C16.3951 13.59 16.8995 13.0856 17.523 13.0856C18.1465 13.0856 18.6509 13.59 18.6509 14.2135C18.6509 14.837 18.1465 15.3414 17.523 15.3414ZM6.47702 15.3414C5.85351 15.3414 5.34912 14.837 5.34912 14.2135C5.34912 13.59 5.85351 13.0856 6.47702 13.0856C7.10053 13.0856 7.60492 13.59 7.60492 14.2135C7.60492 14.837 7.10053 15.3414 6.47702 15.3414ZM17.9252 10.6698L20.0886 6.92305C20.218 6.69894 20.1411 6.41113 19.917 6.28172C19.6929 6.15231 19.4051 6.22919 19.2757 6.45331L17.0707 10.2718C15.6171 9.60533 13.8821 9.2274 12 9.2274C10.1179 9.2274 8.38287 9.60533 6.92929 10.2718L4.72431 6.45331C4.39487 5.88273 3.66441 5.68744 3.09383 6.01689C2.52325 6.34633 2.32796 7.07679 2.65741 7.64736L4.07478 10.6698C1.63774 12.338 0 15.1102 0 18.2568H24C24 15.1102 22.3623 12.338 19.9252 10.6698Z" />
                </svg>
              </div>
              <div className="flex flex-col items-start leading-none">
                <span className="text-white/40 text-[8px] font-bold uppercase mb-1">Download for</span>
                <span className="text-white font-black text-[13px] tracking-wide uppercase">ANDROID</span>
              </div>
            </button>
          </div>

          {/* Community Websites */}
          <div className="space-y-6">
            <h4 className="text-casino-gold font-bold text-[14px] uppercase tracking-widest">Community Websites</h4>
            <div className="flex gap-4">
              <Facebook />
              <Telegram />
              <Instagram />
              <Youtube />
            </div>
          </div>
        </div>

        {/* Payment Methods Section */}
        <div className="space-y-6 pt-4">
          <h4 className="text-casino-gold font-bold text-[14px] uppercase tracking-widest">Payment Methods</h4>
          <div className="flex flex-wrap items-center gap-6">
            {[
              { name: "BANK DEPOSIT", color: "#C9A33D" },
              { name: "bKash", color: "#E2136E" },
              { name: "ROCKET", color: "#8B3E98" },
              { name: "NAGAD", color: "#F7941D" },
              { name: "CRYPTOCURRENCY", color: "#F7931A" },
              { name: "UPAY", color: "#00ADEF" },
              { name: "OK WALLET", color: "#FFD400" },
              { name: "SureCash", color: "#0055A5" },
              { name: "TAP", color: "#ED1C24" }
            ].map((m) => (
              <div key={m.name} className="flex items-center gap-2 group cursor-pointer">
                <div className="h-6 w-8 rounded-sm shadow-inner transition-transform group-hover:scale-110" style={{ backgroundColor: `${m.color}20`, border: `1px solid ${m.color}40` }} />
                <span className="text-[11px] font-black uppercase tracking-tighter transition-colors group-hover:text-white" style={{ color: `${m.color}CC` }}>{m.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Links Bar */}
        <div className="h-px bg-white/5" />
        <div className="flex flex-wrap items-center gap-y-4">
          {[
            { label: "Responsible Gaming", path: "/Responsible-Gaming" },
            { label: "About Us", path: "/About-Us" },
            { label: "Security", path: "/Security" },
            { label: "Privacy Policy", path: "/Privacy-Policy" },
            { label: "FAQ", path: "/FAQ" },
          ].map((link, i, arr) => (
            <React.Fragment key={link.path}>
              <Link
                to={link.path}
                className="text-white/40 hover:text-casino-gold text-[13px] font-medium transition-all underline underline-offset-4 decoration-white/10 hover:decoration-casino-gold"
              >
                {link.label}
              </Link>
              {i < arr.length - 1 && (
                <span className="mx-4 text-white/10 text-sm">|</span>
              )}
            </React.Fragment>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 pt-4">
          <p className="text-white/30 text-[13px] font-medium uppercase tracking-tight">
            © 2026 MCW Copyrights. All Rights Reserved
          </p>

          <div className="flex items-center gap-6">
            <div className="h-10 w-10 border-2 border-white/10 rounded flex items-center justify-center font-black text-white/20 text-xs">G</div>
            <div className="h-10 w-10 border-2 border-white/10 rounded-full flex items-center justify-center font-black text-white/20 text-xs">18+</div>
            <div className="h-10 w-10 border-2 border-white/10 rounded flex items-center justify-center text-white/20">
              <svg viewBox="0 0 24 24" className="h-6 w-6 fill-current"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z" /></svg>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
