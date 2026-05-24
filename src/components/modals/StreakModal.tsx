import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

interface StreakModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const StreakModal = ({ isOpen, onClose }: StreakModalProps) => {
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
              <h2 className="text-white font-black text-base uppercase tracking-[0.15em] italic drop-shadow-md">Daily Streak Challenge</h2>
              <button onClick={onClose} className="text-white/80 hover:text-white hover:rotate-90 transition-all p-1">
                <X className="h-5 w-5 stroke-[3]" />
              </button>
            </div>

            {/* Content Scroll Area */}
            <div 
              className="flex-1 overflow-y-auto no-scrollbar p-5 space-y-6 bg-cover bg-center"
              style={{ backgroundImage: 'url("https://img.m167cw.com/mcw/h5/assets/images/daily-streak-challenge/bg-gradient.webp")' }}
            >
              {/* Calendar Section */}
              <div className="calendar grid grid-cols-7 gap-1.5 py-4">
                {[1, 2, 3, 4, 5, 6, 7].map((day) => (
                  <div key={day} className="flex flex-col items-center gap-2 relative">
                    {day === 1 && (
                      <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#4ADE80] text-white text-[8px] font-black px-2 py-0.5 rounded-full uppercase tracking-tighter shadow-lg shadow-green-500/20 z-10">
                        Today
                      </span>
                    )}
                    <div className={`w-full aspect-[1/1.5] rounded-lg border flex flex-col items-center justify-center p-1 transition-all ${
                      day === 1 
                        ? "bg-linear-to-b from-[#2a210d] to-[#161b2e] border-casino-gold shadow-lg shadow-casino-gold/10" 
                        : "bg-[#161b2e]/60 border-white/5 opacity-40"
                    }`}>
                      <div 
                        className="h-8 w-8 bg-contain bg-no-repeat bg-center mb-1"
                        style={{ backgroundImage: 'url("https://img.m167cw.com/mcw/h5/assets/images/daily-streak-challenge/gift.webp")' }}
                      />
                      <p className={`text-[9px] font-bold ${day === 1 ? "text-casino-gold" : "text-white/20"}`}>Day</p>
                      <strong className={`text-[15px] font-black leading-none ${day === 1 ? "text-white" : "text-white/20"}`}>{day}</strong>
                    </div>
                  </div>
                ))}
              </div>

              {/* Prizes Section */}
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <span className="w-1 h-3.5 bg-casino-gold rounded-full shadow-[0_0_8px_rgba(201,163,61,0.5)]" />
                  <h2 className="text-white font-bold text-[13px] uppercase tracking-wide">Prizes</h2>
                </div>
                
                <div className="relative group overflow-hidden rounded-xl border border-white/10 bg-black/40 p-4 flex items-center justify-between">
                   <div className="flex items-center gap-4">
                      <div className="relative h-12 w-12 flex items-center justify-center">
                        <img src="https://img.m167cw.com/mcw/h5/assets/images/daily-streak-challenge/pattern.webp" className="absolute inset-0 w-full h-full object-contain opacity-20 animate-pulse" alt="" />
                        <img src="https://img.m167cw.com/mcw/h5/assets/images/daily-streak-challenge/icon-prize.webp" className="relative z-10 w-8 h-8 object-contain" alt="" />
                      </div>
                      <p className="text-white font-black text-[13px] italic uppercase tracking-tighter">
                        Daily Streak Challenge: <span className="text-casino-gold">200 BDT</span>
                      </p>
                   </div>
                   <div className="relative h-12 w-16 flex items-center justify-center">
                      <svg width="64" height="48" viewBox="0 0 64 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute inset-0">
                        <path d="M58.9911 0C61.2001 0.000128433 62.9911 1.79094 62.9911 4V44C62.9911 46.2091 61.2001 47.9999 58.9911 48H14.991L0.839682 26.7734C-0.279894 25.094 -0.279893 22.906 0.839682 21.2266L14.991 0H58.9911Z" fill="#1A1A1A"/>
                      </svg>
                      <img src="https://img.m167cw.com/mcw/h5/assets/images/daily-streak-challenge/gift.webp" className="relative z-10 w-10 h-10 object-contain" alt="Gift" />
                   </div>
                </div>
              </div>

              {/* Challenge Section */}
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <span className="w-1 h-3.5 bg-casino-gold rounded-full shadow-[0_0_8px_rgba(201,163,61,0.5)]" />
                  <h2 className="text-white font-bold text-[13px] uppercase tracking-wide">Challenge</h2>
                </div>

                <div className="space-y-4 bg-black/40 rounded-xl p-5 border border-white/5">
                   {/* Deposit Requirement */}
                   <div className="space-y-3">
                      <div className="flex items-center justify-between">
                         <div className="flex items-center gap-2">
                            <div className="h-6 w-6 bg-contain bg-no-repeat" style={{ backgroundImage: 'url("https://img.m167cw.com/mcw/h5/assets/images/daily-streak-challenge/white/deposit.webp")' }} />
                            <span className="text-white font-bold text-[13px]">Deposit</span>
                         </div>
                         <p className="text-sm font-black italic"><span className="text-casino-gold">0</span><span className="text-white/20">/2,000</span></p>
                      </div>
                      <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
                         <motion.div initial={{ width: 0 }} animate={{ width: "0%" }} className="h-full bg-casino-gold" />
                      </div>
                      <div className="flex justify-end">
                         <button className="px-5 py-2 bg-login-grad text-white font-black text-[11px] rounded-lg uppercase tracking-widest italic shadow-xl shadow-casino-gold/10 hover:scale-105 active:scale-95 transition-all border border-white/5">
                            Deposit Now
                         </button>
                      </div>
                   </div>

                   {/* Turnover Requirement */}
                   <div className="space-y-3">
                      <div className="flex items-center justify-between">
                         <div className="flex items-center gap-2">
                            <div className="h-6 w-6 bg-contain bg-no-repeat" style={{ backgroundImage: 'url("https://img.m167cw.com/mcw/h5/assets/images/daily-streak-challenge/white/turnover.webp")' }} />
                            <span className="text-white font-bold text-[13px]">Turnover</span>
                         </div>
                         <p className="text-sm font-black italic"><span className="text-casino-gold">0</span><span className="text-white/20">/8,000</span></p>
                      </div>
                      <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
                         <motion.div initial={{ width: 0 }} animate={{ width: "0%" }} className="h-full bg-casino-gold" />
                      </div>
                      <div className="flex justify-end">
                         <button className="px-5 py-2 bg-login-grad text-white font-black text-[11px] rounded-lg uppercase tracking-widest italic shadow-xl shadow-casino-gold/10 hover:scale-105 active:scale-95 transition-all border border-white/5">
                            Play Now
                         </button>
                      </div>
                   </div>

                   <p className="text-white/30 text-[10px] font-medium leading-relaxed italic text-center pt-2">
                      Progress of the challenge might take 15 ~ 30 minutes to take effect.
                   </p>
                </div>
              </div>

              {/* Action Section */}
              <div className="pt-2">
                 <button disabled className="w-full h-14 bg-white/5 border border-white/5 rounded-xl text-white/20 font-black text-sm uppercase tracking-[0.2em] cursor-not-allowed transition-all">
                    Claim Now
                 </button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
