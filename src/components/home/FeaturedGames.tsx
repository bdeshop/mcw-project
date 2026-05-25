import React, { useState } from "react";
import { Link } from "react-router-dom";
import { SectionTitle, GameTile } from "./Common";
import { FEATURED } from "../../data/casinoData";
import { useLanguage } from "../../context/LanguageContext";
import { type MobileCategoryId } from "./MobileCategoryNav";

interface FeaturedGamesProps {
  category?: MobileCategoryId;
}

const CATEGORY_GAME_ORDER: Record<MobileCategoryId, number[]> = {
  hot: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
  sports: [2, 4, 6, 8, 0, 1, 3, 5, 7, 9],
  casino: [1, 3, 5, 7, 9, 0, 2, 4, 6, 8],
  slot: [4, 5, 6, 7, 8, 9, 0, 1, 2, 3],
  crash: [3, 1, 7, 5, 9, 0, 2, 4, 6, 8],
  table: [8, 6, 4, 2, 0, 1, 3, 5, 7, 9],
  fishing: [5, 0, 9, 1, 8, 2, 7, 3, 6, 4],
  arcade: [7, 3, 1, 9, 5, 0, 2, 4, 6, 8],
  lottery: [9, 8, 7, 6, 5, 4, 3, 2, 1, 0],
};

const MOBILE_NAV_GAMES = [
  { name: "Lucky Tamarin", img: "/src/assets/navimage/imgi_171_darkIcon.png" },
  { name: "Fortune Garuda 500", img: "/src/assets/navimage/imgi_188_darkIcon.png" },
  { name: "NCVIP Gates of Olympus 1000", img: "/src/assets/navimage/imgi_190_darkIcon.png" },
  { name: "NCVIP Super Elements", img: "/src/assets/navimage/imgi_191_darkIcon.png" },
  { name: "FlyX", img: "/src/assets/navimage/imgi_192_darkIcon.png" },
  { name: "Pocket Ace", img: "/src/assets/navimage/imgi_193_darkIcon.png" },
  { name: "Aztec Gems", img: "/src/assets/navimage/imgi_194_darkIcon.webp" },
  { name: "24D Spin", img: "/src/assets/navimage/imgi_195_darkIcon.webp" },
  { name: "NC Bountiful Birds", img: "/src/assets/navimage/imgi_197_darkIcon.webp" },
  { name: "Super Ace Speed Exclusive", img: "/src/assets/navimage/imgi_198_darkIcon.webp" },
  { name: "Fortune Ace Super Scatter", img: "/src/assets/navimage/imgi_199_darkIcon.webp" },
  { name: "NCVIP Aviator", img: "/src/assets/navimage/imgi_202_darkIcon.webp" },
  { name: "Fortune Gems 500", img: "/src/assets/navimage/imgi_207_darkIcon.png" },
  { name: "Super Ace", img: "/src/assets/navimage/imgi_208_darkIcon.webp" },
  { name: "Fruity Bonanza", img: "/src/assets/navimage/imgi_210_darkIcon.png" },
  { name: "Wild Bounty Showdown", img: "/src/assets/navimage/imgi_250_provider-awcmladyluck.png" },
  { name: "Boxing King", img: "/src/assets/navimage/imgi_263_provider-ugv3.png" },
  { name: "Magic Ace WILD LOCK", img: "/src/assets/navimage/imgi_266_provider-awcmhotroad.png" },
  { name: "Anubis Wrath", img: "/src/assets/navimage/imgi_267_provider-awcmiloveu.png" },
];

const CATEGORY_SHIFT: Record<MobileCategoryId, number> = {
  hot: 0,
  sports: 2,
  casino: 4,
  slot: 6,
  crash: 8,
  table: 10,
  fishing: 12,
  arcade: 14,
  lottery: 16,
};

export const FeaturedGames = ({ category = "hot" }: FeaturedGamesProps) => {
  const { t } = useLanguage();
  const [activeTab, setActiveTab] = useState("FC");
  const sortedGames = CATEGORY_GAME_ORDER[category].map((index) => FEATURED[index]);
  const shift = CATEGORY_SHIFT[category] ?? 0;
  const mobileGames = MOBILE_NAV_GAMES.map((_, index) => MOBILE_NAV_GAMES[(index + shift) % MOBILE_NAV_GAMES.length]);

  return (
    <section id="featured-games" className="container mx-auto py-2 md:py-4 px-2 md:px-4">
      <div className="md:hidden">
        <div className="grid grid-cols-4 gap-2">
          {mobileGames.map((game, i) => (
            <Link to="/games" key={`${game.name}-${i}`} className="group block">
              <div className="rounded-md border border-white/10 bg-[#2a3252] overflow-hidden shadow-lg">
                <div className="relative aspect-square bg-[#1a2135]">
                  <img src={game.img} alt={game.name} className="w-full h-full object-cover p-1" />
                  <div className="absolute top-0 right-0 h-0 w-0 border-t-10 border-t-casino-gold border-l-10 border-l-transparent" />
                </div>
                <div className="px-1.5 py-1.5 bg-[#2a3252]">
                  <p className="text-[10px] leading-tight font-bold text-white truncate uppercase">{game.name}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <div className="hidden md:block">
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
          {sortedGames.length > 0 && (
            <Link to="/games" className="lg:col-span-2 h-full block">
              <div
                className={`relative rounded overflow-hidden shadow-2xl h-full min-h-45 md:min-h-80 ${!(sortedGames[0] as any).img ? sortedGames[0].grad : ''}`}
                style={(sortedGames[0] as any).img ? { backgroundImage: `url('${(sortedGames[0] as any).img}')`, backgroundSize: '100% 100%', backgroundPosition: 'center' } : undefined}
              >
                <div className="absolute bottom-4 left-4 flex items-center gap-2">
                  <div className="h-1.5 w-5 bg-casino-gold rounded-full shadow-[0_0_10px_rgba(201,163,61,0.5)]" />
                  <div className="h-1.5 w-1.5 bg-white/40 rounded-full" />
                </div>
              </div>
            </Link>
          )}

          <div className="lg:col-span-6">
            <div className="flex md:grid md:grid-cols-3 lg:grid-cols-5 gap-3 overflow-x-auto no-scrollbar -mx-3 px-3 md:mx-0 md:px-0 pb-1">
              {sortedGames.slice(1, 11).map((g, i) => (
                <div key={i} className="w-28.75 md:w-auto shrink-0">
                  <GameTile name={g.name} grad={g.grad} img={g.img} />
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-8 flex justify-center">
          <Link
            to="/games"
            className="h-11 px-12 bg-login-grad text-white font-black text-sm uppercase tracking-widest italic rounded-lg shadow-2xl shadow-casino-gold/20 hover:brightness-110 active:scale-95 transition-all flex items-center justify-center border border-white/5"
          >
            {t("seeAllGames")}
          </Link>
        </div>
      </div>
    </section>
  );
};
