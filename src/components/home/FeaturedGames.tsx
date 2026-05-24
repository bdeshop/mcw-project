import React, { useState } from "react";
import { Link } from "react-router-dom";
import { SectionTitle, GameTile } from "./Common";
import { FEATURED } from "../../data/casinoData";
import { useLanguage } from "../../context/LanguageContext";

export const FeaturedGames = () => {
  const { t } = useLanguage();
  const [activeTab, setActiveTab] = useState("FC");

  return (
    <section className="container mx-auto py-4 px-4">
      <SectionTitle
        title={t("featuredGames")}
        right={
          <div className="flex gap-2 overflow-x-auto no-scrollbar pb-2 md:pb-0">
            {["FC", "JILI", "JDB", "PP", "WorldMatch", "FastSpin"].map((tKey) => (
              <button
                key={tKey}
                onClick={() => setActiveTab(tKey)}
                className={`px-4 md:px-6 h-9 rounded text-[11px] md:text-xs font-black transition-all border shrink-0 uppercase italic ${activeTab === tKey
                  ? "bg-login-grad text-white border-white/5 shadow-xl shadow-black/20"
                  : "border-white/10 text-white/60 hover:text-white bg-[#1e2439]"
                  }`}
              >
                {tKey}
              </button>
            ))}
          </div>
        }
      />
      <div className="grid grid-cols-1 lg:grid-cols-8 gap-4">
        {/* Left large featured card (first item) */}
        {FEATURED.length > 0 && (
          <Link to="/games" className="lg:col-span-2 h-full block">
            <div
              className={`relative rounded overflow-hidden shadow-2xl h-full min-h-[180px] md:min-h-[320px] ${!(FEATURED[0] as any).img ? FEATURED[0].grad : ''}`}
              style={(FEATURED[0] as any).img ? { backgroundImage: `url('${(FEATURED[0] as any).img}')`, backgroundSize: '100% 100%', backgroundPosition: 'center' } : undefined}
            >
              {/* Dots / carousel indicators */}
              <div className="absolute bottom-4 left-4 flex items-center gap-2">
                <div className="h-1.5 w-5 bg-casino-gold rounded-full shadow-[0_0_10px_rgba(201,163,61,0.5)]" />
                <div className="h-1.5 w-1.5 bg-white/40 rounded-full" />
              </div>
            </div>
          </Link>
        )}

        {/* Right side: Matches Popular Games width and behavior */}
        <div className="lg:col-span-6">
          <div className="flex md:grid md:grid-cols-3 lg:grid-cols-5 gap-3 overflow-x-auto no-scrollbar -mx-3 px-3 md:mx-0 md:px-0 pb-1">
            {FEATURED.slice(1, 11).map((g, i) => (
              <div key={i} className="w-[115px] md:w-auto shrink-0">
                <GameTile name={g.name} grad={g.grad} img={g.img} />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* See All Games Button */}
      <div className="mt-8 flex justify-center">
         <Link 
           to="/games" 
           className="h-11 px-12 bg-login-grad text-white font-black text-sm uppercase tracking-widest italic rounded-lg shadow-2xl shadow-casino-gold/20 hover:brightness-110 active:scale-95 transition-all flex items-center justify-center border border-white/5"
         >
           {t("seeAllGames")}
         </Link>
      </div>
    </section>
  );
};
