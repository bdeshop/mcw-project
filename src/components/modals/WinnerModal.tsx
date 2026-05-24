import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Calendar, Gift, History, Timer, ChevronDown } from "lucide-react";

interface WinnerModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const TOP_3 = [
  { rank: 2, game: "Fortune Garuda 500", user: "ta***o1", amount: "৳ 599,600", prize: "2,000", bg: "bg-silver.webp", crown: "crown-silver.webp", gameIcon: "JILI-SLOT-193.webp" },
  { rank: 1, game: "Super Ace", user: "ar***88", amount: "৳ 1,190,640", prize: "3,000", bg: "bg-gold.webp", crown: "crown-gold.webp", gameIcon: "JILI-SLOT-027.png" },
  { rank: 3, game: "Super Ace", user: "fe***77", amount: "৳ 559,050", prize: "1,500", bg: "bg-bronze.webp", crown: "crown-bronze.webp", gameIcon: "JILI-SLOT-027.png" },
];

const LEADER_LIST = [
  { rank: 4, game: "Fortune Garuda 500", user: "tu***97", amount: "৳ 359,000", icon: "JILI-SLOT-193.webp" },
  { rank: 5, game: "Lucky Tamarin", user: "mr***12", amount: "৳ 315,000", icon: "JILI-SLOT-209.webp" },
  { rank: 6, game: "Super Ace", user: "mo***20", amount: "৳ 277,000", icon: "JILI-SLOT-027.png" },
  { rank: 7, game: "SUPER ELEMENTS", user: "na***66", amount: "৳ 245,800", icon: "FC-SLOT-033.png" },
  { rank: 8, game: "Super Ace", user: "je***51", amount: "৳ 239,900", icon: "JILI-SLOT-027.png" },
  { rank: 9, game: "Fortune Garuda 500", user: "md***12", amount: "৳ 202,300", icon: "JILI-SLOT-193.webp" },
  { rank: 10, game: "Fortune Gems 500", user: "ka***01", amount: "৳ 199,500", icon: "JILI-SLOT-138.png" },
  { rank: 11, game: "Ultra Ace", user: "01***35", amount: "৳ 182,200", icon: "SMG_ultraAce.png" },
  { rank: 12, game: "Fortune Garuda 500", user: "fa***89", amount: "৳ 179,000", icon: "JILI-SLOT-193.webp" },
  { rank: 13, game: "Super Ace", user: "sh***an", amount: "৳ 172,900", icon: "JILI-SLOT-027.png" },
  { rank: 14, game: "Fortune Garuda 500", user: "ra***50", amount: "৳ 159,600", icon: "JILI-SLOT-193.webp" },
  { rank: 15, game: "Super Ace", user: "fo***al", amount: "৳ 137,100", icon: "JILI-SLOT-027.png" },
  { rank: 16, game: "Super Ace", user: "ja***ip", amount: "৳ 124,800", icon: "JILI-SLOT-027.png" },
  { rank: 17, game: "Super Ace Speed", user: "ab***00", amount: "৳ 124,500", icon: "JILI-SLOT-142.png" },
  { rank: 18, game: "3 Super Ace", user: "ar***65", amount: "৳ 108,600", icon: "JILI-SLOT-195.webp" },
  { rank: 19, game: "10000 Fortunes", user: "sa***00", amount: "৳ 102,000", icon: "SMG_10000Fortunes.10000 Fortunes.png" },
  { rank: 20, game: "Fortune Coins", user: "ja***91", amount: "৳ 97,400", icon: "JILI-SLOT-129.png" },
];

export const WinnerModal = ({ isOpen, onClose }: WinnerModalProps) => {
  const [activeTab, setActiveTab] = useState<"leader" | "first">("leader");
  const [periodTab, setPeriodTab] = useState<"daily" | "weekly">("daily");

  const TopBanner = () => (
    <div className="relative w-full aspect-2/1 overflow-hidden rounded-t-xl">
      <img 
        src="https://img.m167cw.com/upload/winnerBoard/image_339471.jpg" 
        alt="Banner" 
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-linear-to-b from-black/20 via-transparent to-[#161b2e]/80" />
      
      {/* Dropdown Overlay */}
      <div className="absolute top-4 left-1/2 -translate-x-1/2 w-[70%]">
         <div className="relative bg-black/40 backdrop-blur-md rounded-full border border-white/10 px-4 py-1.5 flex items-center justify-between">
            <div className="absolute -left-3 top-1/2 -translate-y-1/2 w-4 h-6 bg-contain bg-no-repeat" style={{ maskImage: 'url("https://img.m167cw.com/mcw/h5/assets/images/winner-board/ribbon-left.svg")', backgroundColor: '#C9A33D' }} />
            <select className="bg-transparent text-white font-black text-[12px] uppercase tracking-widest outline-none w-full appearance-none">
              <option>Slots Leaderboard</option>
            </select>
            <ChevronDown className="h-4 w-4 text-casino-gold" />
            <div className="absolute -right-3 top-1/2 -translate-y-1/2 w-4 h-6 bg-contain bg-no-repeat" style={{ maskImage: 'url("https://img.m167cw.com/mcw/h5/assets/images/winner-board/ribbon-right.svg")', backgroundColor: '#C9A33D' }} />
         </div>
      </div>

      {/* Banner Footer */}
      <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
        <div className="flex items-center gap-2 bg-black/40 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/5">
           <div className="h-3.5 w-3.5 bg-casino-gold" style={{ maskImage: 'url("https://img.m167cw.com/mcw/h5/assets/images/winner-board/icon-calendar.svg")', maskSize: 'contain' }} />
           <span className="text-white/80 text-[10px] font-bold">2026/02/09 - 2026/12/31</span>
        </div>
        <div className="flex gap-2">
           <button className="h-8 w-8 bg-login-grad rounded-lg shadow-xl shadow-casino-gold/10 flex items-center justify-center hover:scale-105 transition-all border border-white/5">
             <div className="h-4 w-4 bg-white" style={{ maskImage: 'url("https://img.m167cw.com/mcw/h5/assets/images/winner-board/icon-reward.svg")', maskSize: 'contain' }} />
           </button>
           <button className="h-8 w-8 bg-login-grad rounded-lg shadow-xl shadow-casino-gold/10 flex items-center justify-center hover:scale-105 transition-all border border-white/5">
             <div className="h-4 w-4 bg-white" style={{ maskImage: 'url("https://img.m167cw.com/mcw/h5/assets/images/winner-board/icon-history.svg")', maskSize: 'contain' }} />
           </button>
        </div>
      </div>
    </div>
  );

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[2000] flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          />
          <motion.div
            initial={{ scale: 0.95, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.95, opacity: 0, y: 20 }}
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-[400px] bg-[#161b2e] rounded-xl overflow-hidden shadow-2xl border border-white/5 flex flex-col max-h-[95vh] relative z-10"
          >
            {/* Header */}
            <div className="bg-casino-gold h-12 shrink-0 flex items-center justify-between px-6 relative border-b border-black/10">
              <div className="w-6" />
              <h2 className="text-white font-black text-base uppercase tracking-[0.15em] italic drop-shadow-md">Winner Board</h2>
              <button onClick={onClose} className="text-white/80 hover:text-white hover:rotate-90 transition-all p-1">
                <X className="h-5 w-5 stroke-[3]" />
              </button>
            </div>

            {/* Main Tabs */}
            <div className="bg-casino-gold shrink-0 border-b border-black/5 relative">
              <div className="flex h-12">
                {["Leader Board", "First To Reach"].map((tab, idx) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(idx === 0 ? "leader" : "first")}
                    className={`flex-1 flex items-center justify-center text-[13px] font-black uppercase tracking-widest transition-all relative z-10 border ${
                      (idx === 0 && activeTab === "leader") || (idx === 1 && activeTab === "first") 
                      ? "text-white bg-login-grad italic border-white/5 shadow-xl shadow-black/20" 
                      : "text-white/40 hover:text-white/70 border-transparent"
                    }`}
                  >
                    {tab}
                  </button>
                ))}
              </div>
            </div>

            <div className="flex-1 overflow-y-auto no-scrollbar">
              {activeTab === "leader" ? (
                <>
                  <TopBanner />
                  <div className="p-5 space-y-6 bg-linear-to-b from-[#161b2e] to-[#101424]">
                    <div className="flex items-center gap-2 border-l-4 border-casino-gold pl-3">
                      <span className="text-white font-black text-sm uppercase italic tracking-tighter">Leader Board</span>
                    </div>

                    {/* Period Tabs */}
                    <div className="bg-black/20 p-1 rounded-lg flex gap-1 border border-white/5">
                      {["Daily", "Weekly"].map((p) => (
                        <button
                          key={p}
                          onClick={() => setPeriodTab(p.toLowerCase() as any)}
                          className={`flex-1 py-3 rounded-md font-black text-[13px] uppercase transition-all ${
                            periodTab === p.toLowerCase() ? "bg-casino-gold text-white shadow-lg" : "text-white/30 hover:text-white/50"
                          }`}
                        >
                          {p}
                        </button>
                      ))}
                    </div>

                    {/* Timer */}
                    <div className="flex items-center justify-center gap-4 py-4 bg-[#232a44] rounded-xl border border-white/5 relative overflow-hidden group">
                      <div className="h-6 w-6 bg-casino-gold/20 flex items-center justify-center rounded-lg">
                        <div className="h-4 w-4 bg-casino-gold" style={{ maskImage: 'url("https://img.m167cw.com/mcw/h5/assets/images/winner-board/icon-time.svg")', maskSize: 'contain' }} />
                      </div>
                      <div className="flex items-center gap-3">
                        {[
                          { v: "0", l: "day" },
                          { v: "7", l: "hr" },
                          { v: "47", l: "min" },
                          { v: "36", l: "sec" }
                        ].map((t, idx) => (
                          <React.Fragment key={idx}>
                            <div className="flex flex-col items-center">
                              <span className="text-white font-black text-xl leading-none">{t.v}</span>
                              <span className="text-white/30 text-[9px] font-bold uppercase mt-1">{t.l}</span>
                            </div>
                            {idx < 3 && <span className="text-white/20 font-black text-lg mb-4">:</span>}
                          </React.Fragment>
                        ))}
                      </div>
                    </div>

                    {/* Winners Podium */}
                    <div className="flex items-end justify-center gap-2 pt-10 pb-8 px-1">
                      {TOP_3.sort((a, b) => a.rank === 1 ? 0 : b.rank === 1 ? -1 : a.rank - b.rank).map((winner) => (
                        <div 
                          key={winner.rank}
                          className={`flex-1 flex flex-col items-center relative rounded-xl border border-white/10 p-2 text-center group ${
                            winner.rank === 1 ? "h-[220px] -mt-10" : "h-[180px]"
                          }`}
                          style={{ 
                            backgroundImage: `url("https://img.m167cw.com/mcw/h5/assets/images/winner-board/${winner.bg}")`,
                            backgroundSize: 'cover'
                          }}
                        >
                          <div 
                            className="absolute -top-8 w-12 h-10 bg-contain bg-no-repeat bg-center group-hover:scale-110 transition-transform"
                            style={{ backgroundImage: `url("https://img.m167cw.com/mcw/h5/assets/images/winner-board/${winner.crown}")` }}
                          />
                          <div className="h-14 w-14 rounded-full border-2 border-white/20 overflow-hidden mb-2 shadow-xl">
                            <img src={`https://img.m167cw.com/upload/game/AWCV2_JILI/${winner.gameIcon}`} alt="Game" className="w-full h-full object-cover" />
                          </div>
                          <p className="text-white font-bold text-[10px] truncate w-full uppercase">{winner.game}</p>
                          <p className="text-white/40 text-[9px] font-bold mb-1">{winner.user}</p>
                          <p className="text-white font-black text-[13px] tracking-tighter mb-2">{winner.amount}</p>
                          
                          <div className="mt-auto flex items-center gap-1.5 bg-black/40 px-2 py-1 rounded-full border border-white/10">
                            <div className="h-3 w-3 bg-casino-gold" style={{ maskImage: 'url("https://img.m167cw.com/mcw/h5/assets/images/winner-board/icon-reward.svg")', maskSize: 'contain' }} />
                            <span className="text-white font-black text-[10px]">{winner.prize}</span>
                          </div>
                          
                          <div className="absolute -bottom-3 h-7 w-7 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white font-black text-sm shadow-xl">
                            {winner.rank}
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Leaderboard List */}
                    <div className="space-y-2 pb-24">
                      {LEADER_LIST.map((item) => (
                        <div key={item.rank} className="bg-[#1e2439] rounded-xl p-3 border border-white/5 flex items-center justify-between group hover:bg-[#2a3250] transition-all">
                          <div className="flex items-center gap-4">
                            <span className="text-white/40 font-black text-sm w-4">{item.rank}</span>
                            <div className="h-10 w-10 rounded-lg overflow-hidden border border-white/10 shadow-lg group-hover:scale-110 transition-transform">
                              <img src={`https://img.m167cw.com/upload/game/AWCV2_JILI/${item.icon}`} alt="Game" className="w-full h-full object-cover" />
                            </div>
                            <div className="flex flex-col">
                              <span className="text-white font-bold text-[11px] uppercase tracking-wide">{item.game}</span>
                              <span className="text-white/30 text-[9px] font-black">{item.user}</span>
                            </div>
                          </div>
                          <span className="text-white font-black text-sm tracking-tighter">{item.amount}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </>
              ) : (
                <div className="p-8 space-y-6 flex flex-col items-center justify-center min-h-[400px] text-center">
                   <div className="h-20 w-20 bg-casino-gold/10 rounded-full flex items-center justify-center mb-4">
                      <Gift className="h-10 w-10 text-casino-gold" />
                   </div>
                   <h3 className="text-white font-black text-xl uppercase tracking-widest italic">First To Reach</h3>
                   <div className="space-y-3 max-w-[280px]">
                      <p className="text-white/60 text-[13px] font-medium leading-relaxed">
                        Be the first to reach the specified milestones and claim exclusive rewards! This section tracks the fastest players on the platform.
                      </p>
                      <p className="text-casino-gold font-black text-[12px] uppercase tracking-[0.2em]">Coming Soon</p>
                   </div>
                   <div className="w-full h-px bg-white/5 mt-4" />
                   <p className="text-white/20 text-[11px] uppercase font-bold tracking-widest">Stay tuned for the next event</p>
                </div>
              )}
            </div>

            {/* My Ranking Sticky Footer (Only for Leaderboard) */}
            {activeTab === "leader" && (
              <div className="absolute bottom-0 left-0 right-0 bg-[#232a44]/95 backdrop-blur-md border-t border-white/10 p-4 flex items-center justify-between shadow-[0_-10px_30px_rgba(0,0,0,0.5)] z-20">
                <div className="flex items-center gap-4">
                    <div className="h-10 w-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white font-black text-xs shadow-inner">100+</div>
                    <div className="flex flex-col">
                      <span className="text-white/40 text-[10px] font-black uppercase tracking-widest">My Ranking</span>
                      <div className="flex items-center gap-2">
                          <div className="h-3 w-3 bg-white/20" style={{ maskImage: 'url("https://img.m167cw.com/mcw/h5/assets/images/winner-board/icon-reward.svg")', maskSize: 'contain' }} />
                          <span className="text-white/60 font-black text-[10px] uppercase">No Prize</span>
                      </div>
                    </div>
                </div>
                <span className="text-casino-gold font-black text-[11px] italic uppercase">You can do it next time!</span>
              </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
          