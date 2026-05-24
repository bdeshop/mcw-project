import React, { useState, useEffect, useMemo } from "react";
import { Header } from "../home/Header";
import { Footer } from "../layout/Footer";
import { Search, Star } from "lucide-react";
import { useLanguage } from "../../context/LanguageContext";

// --- Types & Interfaces ---
interface Game {
  id: string | number;
  name: string;
  image: string;
  provider: string;
  winMultiplier?: string;
  isFavorite?: boolean;
}

interface Provider {
  id: string;
  name: string;
  logo?: string;
}

interface JackpotData {
  grand: number;
  major: number;
  mini: number;
}

// --- Mock Data (Replace with API calls later) ---
const MOCK_PROVIDERS: Provider[] = [
  { id: 'all', name: 'All' },
  { id: 'jl', name: 'JILI' },
  { id: 'pg', name: 'PG Soft' },
  { id: 'jdb', name: 'JDB' },
  { id: 'fc', name: 'Fa Chai' },
  { id: 'pp', name: 'Pragmatic Play' },
  { id: 'mg', name: 'Microgaming' },
];

const MOCK_GAMES: Game[] = Array(40).fill(null).map((_, i) => ({
  id: `game-${i}`,
  name: i % 2 === 0 ? "FC MAGIC ACE" : "JILI SUPER ACE",
  image: `/src/assets/features/gameimage/FC-SLOT-00${(i % 9) + 1}.png`,
  provider: i % 2 === 0 ? "fc" : "jl",
  winMultiplier: i % 3 === 0 ? "15000X" : "",
  isFavorite: i % 5 === 0
}));

// --- Custom Hooks for Easy API Integration ---
const useGames = (providerId: string, searchTerm: string, activeTab: string) => {
  const [games, setGames] = useState<Game[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // SIMULATE API FETCH
    const fetchGames = async () => {
      setLoading(true);
      // In production, replace with: const response = await api.getGames({ providerId, searchTerm, tab: activeTab });
      await new Promise(resolve => setTimeout(resolve, 500)); // Simulate network lag

      let filtered = [...MOCK_GAMES];
      if (providerId !== 'all') filtered = filtered.filter(g => g.provider === providerId);
      if (searchTerm) filtered = filtered.filter(g => g.name.toLowerCase().includes(searchTerm.toLowerCase()));

      setGames(filtered);
      setLoading(false);
    };

    fetchGames();
  }, [providerId, searchTerm, activeTab]);

  return { games, loading };
};

const useJackpots = () => {
  const [jackpots, setJackpots] = useState<JackpotData>({
    grand: 1028662.25,
    major: 38321.52,
    mini: 3543.80
  });

  useEffect(() => {
    // In production: const interval = setInterval(async () => { const data = await api.getJackpots(); setJackpots(data); }, 5000);
    const interval = setInterval(() => {
      setJackpots(prev => ({
        grand: prev.grand + Math.random() * 5,
        major: prev.major + Math.random() * 2,
        mini: prev.mini + Math.random() * 1
      }));
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return jackpots;
};

// --- Sub-Components for Clean Code ---
const JackpotCard = ({ title, amount, isMain = false }: { title: string; amount: number; isMain?: boolean }) => (
  <div className={`text-center ${isMain ? 'scale-110 md:scale-125' : ''}`}>
    <p className={`text-casino-gold ${isMain ? 'text-xs md:text-lg font-black' : 'text-[10px] md:text-sm font-bold'} uppercase mb-1`}>
      {title}
    </p>
    <div className={`${isMain ? 'bg-casino-gold/20 border-2 border-casino-gold shadow-[0_0_20px_rgba(201,163,61,0.3)]' : 'bg-black/40 border border-white/10'} backdrop-blur-md px-3 md:px-5 py-1 md:py-2 rounded-lg`}>
      <span className={`text-white font-mono ${isMain ? 'text-lg md:text-3xl font-black text-casino-gold' : 'text-sm md:text-xl font-bold'}`}>
        ৳ {amount.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
      </span>
    </div>
  </div>
);

const GameCard = ({ game }: { game: Game }) => {
  const [imgError, setImgError] = useState(false);

  return (
    <div className="group cursor-pointer flex flex-col h-full active:scale-95 transition-transform overflow-hidden rounded-lg border border-white/5 shadow-lg ">
      <div className={`relative aspect-[4/3] w-full overflow-hidden ${!imgError ? 'bg-[#1e2439]' : ''}`}>
        {!imgError ? (
          <img
            src={game.image}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            alt={game.name}
            onError={() => setImgError(true)}
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center p-2">
            <span className="text-white font-black text-[8px] md:text-xs text-center leading-tight drop-shadow-md">{game.name.split(' ')[0]}</span>
          </div>
        )}

        {/* Multiplier Overlay */}
        <div className="absolute top-1.5 right-1.5 text-white text-[9px] md:text-[11px] font-black drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)] tracking-tighter italic z-10">
          {game.winMultiplier || "10000X"}
        </div>

        {/* Provider Badge */}
        <div className="absolute top-0 left-0 bg-linear-to-br from-casino-gold to-[#8E6D24] text-[#1a1f33] text-[7px] md:text-[9px] font-black px-1.5 py-0.5 rounded-br-lg z-10 uppercase tracking-tighter">
          {game.provider}
        </div>

        <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
          <div className="h-6 w-6 md:h-8 md:w-8 bg-casino-gold rounded-full flex items-center justify-center scale-75 group-hover:scale-100 transition-transform shadow-lg">
            <div className="w-0 h-0 border-t-[4px] md:border-t-[6px] border-t-transparent border-l-[7px] md:border-l-[10px] border-l-black border-b-[4px] md:border-b-[6px] border-b-transparent ml-0.5" />
          </div>
        </div>
      </div>

      <div className="py-2 px-2 bg-[#232a44] flex items-center justify-between gap-1">
        <p className="text-[9px] md:text-[11px] font-black text-white uppercase truncate tracking-tight group-hover:text-casino-gold transition-colors flex-1">
          {game.provider} {game.name}
        </p>
        <Star className={`h-2.5 w-2.5 md:h-3 md:w-3 shrink-0 transition-colors ${game.isFavorite ? 'text-casino-gold fill-casino-gold' : 'text-white/10 group-hover:text-casino-gold'}`} />
      </div>
    </div>
  );
};

// --- Main Page Component ---
export const GameLibraryPage = () => {
  const { t } = useLanguage();
  const [activeTab, setActiveTab] = useState("Recommend");
  const [activeProvider, setActiveProvider] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 5; // Mock total pages

  const jackpots = useJackpots();
  const { games, loading } = useGames(activeProvider, searchTerm, activeTab);

  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-1 container mx-auto px-4 pt-[112px] md:pt-[128px]">
        {/* Jackpot Banner */}
        <div className="mt-4 relative w-full h-[140px] md:h-[260px] rounded-xl overflow-hidden  shadow-2xl ">
          <div className="absolute inset-0 bg-[url('/src/assets/hero/image_261526.jpg')] bg-cover bg-center opacity-40 mix-blend-overlay" />
          <div className="relative h-full flex flex-col items-center justify-center text-center p-3 md:p-6">
            <h2 className="text-casino-gold text-lg md:text-5xl font-black italic tracking-tighter drop-shadow-lg mb-1 md:mb-2 uppercase">Jackpot Grand</h2>
            <div className="flex items-end gap-3 md:gap-10">
              <JackpotCard title="Mini" amount={jackpots.mini} />
              <JackpotCard title="Grand" amount={jackpots.grand} isMain />
              <JackpotCard title="Major" amount={jackpots.major} />
            </div>
          </div>
        </div>

        {/* Filters & Search */}
        <div className="mt-4 flex flex-col md:flex-row md:items-center justify-between gap-3">
          <div className="flex items-center gap-1  p-1 rounded-lg border border-white/5 overflow-x-auto no-scrollbar shrink-0">
            {["Recommend", "Latest", "Favorite", "A-Z"].map((tab) => (
              <button
                key={tab}
                onClick={() => { setActiveTab(tab); setCurrentPage(1); }}
                className={`px-3 md:px-5 py-1.5 rounded text-[10px] md:text-[11px] font-black uppercase italic transition-all whitespace-nowrap border ${activeTab === tab 
                  ? "bg-login-grad text-white border-white/5 shadow-xl shadow-black/20" 
                  : "bg-[#1e2439] border-white/5 text-white/40 hover:text-white"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          <div className="relative w-full md:w-64">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-white/30" />
            <input
              value={searchTerm}
              onChange={(e) => { setSearchTerm(e.target.value); setCurrentPage(1); }}
              placeholder="Search Games"
              className="w-full bg-[#1e2439] border border-white/10 rounded-lg pl-9 pr-4 py-2.5 text-[11px] text-white outline-none focus:border-casino-gold/50 transition-all shadow-inner"
            />
          </div>
        </div>

        {/* Provider Selection */}
        <div className="flex items-center gap-2 mt-4 overflow-x-auto no-scrollbar pb-2">
          {MOCK_PROVIDERS.map(p => (
            <button
              key={p.id}
              onClick={() => { setActiveProvider(p.id); setCurrentPage(1); }}
              className={`h-9 md:h-10 px-4 md:px-6 rounded border font-black text-[11px] md:text-sm transition-all shrink-0 uppercase tracking-tighter italic ${activeProvider === p.id
                ? 'bg-login-grad text-white border-white/5 shadow-xl shadow-black/20'
                : 'border-white/5 bg-[#1e2439] text-white/40 hover:text-white/70'
                }`}
            >
              {p.name}
            </button>
          ))}
        </div>

        {/* Game Grid with Loading State */}
        <div className="mt-4 mb-8">
          {loading ? (
            <div className="flex flex-col items-center justify-center py-20 gap-4">
              <div className="h-10 w-10 border-4 border-casino-gold border-t-transparent rounded-full animate-spin" />
              <p className="text-white/40 text-sm font-bold uppercase tracking-widest">Loading Games...</p>
            </div>
          ) : (
            <div className="grid grid-cols-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-1.5 md:gap-3">
              {games.map((game) => (
                <GameCard key={game.id} game={game} />
              ))}
            </div>
          )}
        </div>

        {/* Pagination */}
        {!loading && games.length > 0 && (
          <div className="flex items-center justify-center gap-2 mb-16">
            <button
              disabled={currentPage === 1}
              onClick={() => setCurrentPage(prev => prev - 1)}
              className="h-9 px-4 rounded bg-[#1e2439] border border-white/5 text-white/60 font-bold text-xs disabled:opacity-30 disabled:cursor-not-allowed hover:bg-[#252c4a] transition-all"
            >
              Prev
            </button>
            <div className="flex items-center gap-1">
              {[1, 2, 3, '...', totalPages].map((page, i) => (
                <button
                  key={i}
                  onClick={() => typeof page === 'number' && setCurrentPage(page)}
                  className={`h-9 w-9 rounded flex items-center justify-center text-xs font-black transition-all ${currentPage === page
                    ? "bg-casino-gold text-black shadow-lg shadow-casino-gold/20"
                    : "bg-[#1e2439] border border-white/5 text-white/40 hover:text-white"
                    } ${typeof page !== 'number' ? 'cursor-default pointer-events-none' : ''}`}
                >
                  {page}
                </button>
              ))}
            </div>
            <button
              disabled={currentPage === totalPages}
              onClick={() => setCurrentPage(prev => prev + 1)}
              className="h-9 px-4 rounded bg-[#1e2439] border border-white/5 text-white/60 font-bold text-xs disabled:opacity-30 disabled:cursor-not-allowed hover:bg-[#252c4a] transition-all"
            >
              Next
            </button>
          </div>
        )}
      </main>
    </div>
  );
};
