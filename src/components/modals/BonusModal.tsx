import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronDown } from "lucide-react";

interface BonusModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const BonusModal = ({ isOpen, onClose }: BonusModalProps) => {
  const [activeTab, setActiveTab] = useState<"rebate" | "rescue">("rescue");
  const [summaryWeek, setSummaryWeek] = useState<"current" | "last">("current");

  const NoDataView = () => (
    <div className="flex flex-col items-center justify-center py-8 px-6">
      <div className="w-full max-w-[160px] aspect-square relative mb-2">
        <video 
          autoPlay 
          muted 
          loop 
          playsInline 
          className="w-full h-full object-contain mix-blend-lighten"
          poster="https://img.m167cw.com/mcw/h5/assets/images/animation/no-data.png"
        >
          <source src="https://img.m167cw.com/mcw/h5/assets/images/animation/no-data.webm" type="video/webm" />
          <source src="https://img.m167cw.com/mcw/h5/assets/images/animation/no-data.mov" type="video/quicktime" />
        </video>
      </div>
      <span className="text-[#8E96B7] text-[13px] font-bold uppercase tracking-widest opacity-40">No Data</span>
    </div>
  );

  const AvailableAmountCard = ({ type }: { type: "rebate" | "rescue" }) => (
    <div className="relative w-full overflow-hidden rounded-xl bg-[#232a44] p-5 border border-white/5 shadow-xl group">
      {/* Background Decor */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-40 mix-blend-overlay group-hover:scale-105 transition-transform duration-700"
        style={{ backgroundImage: 'url("https://img.m167cw.com/mcw/h5/assets/images/real-time-bonus/bg-available-amount.png")' }}
      />
      
      <div className="relative z-10 flex flex-col gap-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div 
              className="h-5 w-5 bg-casino-gold"
              style={{ 
                maskImage: 'url("https://img.m167cw.com/mcw/h5/assets/images/real-time-bonus/icon-available-amount.svg")',
                maskRepeat: 'no-repeat',
                maskPosition: 'center',
                maskSize: 'contain'
              }}
            />
            <span className="text-white font-bold text-[13px] tracking-wide uppercase">Available Amount</span>
          </div>
          
          <div 
            className="absolute top-2 right-4 h-16 w-16 bg-contain bg-no-repeat bg-right opacity-80"
            style={{ 
              backgroundImage: type === "rescue" 
                ? 'url("https://img.m167cw.com/mcw/h5/assets/images/real-time-bonus/rescue-available-amount.png")'
                : 'url("https://img.m167cw.com/mcw/h5/assets/images/real-time-bonus/rebate-available-amount.png")'
            }}
          />
        </div>

        <div className="space-y-1">
          <span className="text-white font-black text-3xl tracking-tighter drop-shadow-lg">৳0</span>
          <div className="flex flex-col gap-0.5">
            <p className="text-red-400 font-bold text-[11px] uppercase tracking-wider">Bonus requirements not met yet.</p>
            <p className="text-white/30 font-bold text-[10px] uppercase">End Date: 2026/05/17</p>
          </div>
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
            className="w-full max-w-[380px] bg-[#161b2e] rounded-xl overflow-hidden shadow-2xl border border-white/5 flex flex-col max-h-[90vh] relative z-10"
          >
            {/* Header */}
            <div className="bg-casino-gold h-12 shrink-0 flex items-center justify-between px-6 relative border-b border-black/10">
              <div className="w-6" />
              <h2 className="text-white font-black text-base uppercase tracking-[0.15em] italic drop-shadow-md">Real-Time Bonus</h2>
              <button 
                onClick={onClose} 
                className="text-white/80 hover:text-white hover:rotate-90 transition-all p-1"
              >
                <X className="h-5 w-5 stroke-[3]" />
              </button>
            </div>

            {/* Primary Navigation */}
            <div className="bg-casino-gold shrink-0 border-b border-black/5 relative">
              <div className="flex h-12">
                <button
                  onClick={() => setActiveTab("rebate")}
                  className={`flex-1 flex items-center justify-center text-[13px] font-black uppercase tracking-widest transition-all relative z-10 ${
                    activeTab === "rebate" ? "text-white" : "text-white/40 hover:text-white/70"
                  }`}
                >
                  Rebate
                </button>
                <button
                  onClick={() => setActiveTab("rescue")}
                  className={`flex-1 flex items-center justify-center text-[13px] font-black uppercase tracking-widest transition-all relative z-10 ${
                    activeTab === "rescue" ? "text-white" : "text-white/40 hover:text-white/70"
                  }`}
                >
                  Rescue
                </button>

                {/* Sliding Indicator */}
                <motion.div 
                  className="absolute bottom-0 h-1 bg-white rounded-t-full shadow-[0_-2px_10px_rgba(255,255,255,0.5)]"
                  initial={false}
                  animate={{ 
                    width: "50%", 
                    x: activeTab === "rebate" ? "0%" : "100%" 
                  }}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              </div>
            </div>

            {/* Content Scroll Area */}
            <div className="flex-1 overflow-y-auto no-scrollbar p-5 space-y-4 bg-linear-to-b from-[#161b2e] to-[#101424]">
              {/* Card Section */}
              <AvailableAmountCard type={activeTab} />

              {/* Summary Section */}
              <div className="bg-[#1e2439] rounded-xl p-4 border border-white/5 space-y-4">
                <div className="flex items-center gap-2">
                  <span className="w-1 h-3.5 bg-casino-gold rounded-full shadow-[0_0_8px_rgba(201,163,61,0.5)]"></span>
                  <h3 className="text-white font-bold text-sm uppercase tracking-wide">Summary</h3>
                </div>

                <div className="flex p-1 bg-black/20 rounded-lg gap-1 border border-white/5">
                  <button
                    onClick={() => setSummaryWeek("current")}
                    className={`flex-1 py-2 text-[11px] font-black uppercase tracking-widest rounded-md transition-all ${
                      summaryWeek === "current" ? "bg-casino-gold text-white shadow-lg" : "text-white/30 hover:text-white/50"
                    }`}
                  >
                    Current Week
                  </button>
                  <button
                    onClick={() => setSummaryWeek("last")}
                    className={`flex-1 py-2 text-[11px] font-black uppercase tracking-widest rounded-md transition-all ${
                      summaryWeek === "last" ? "bg-casino-gold text-white shadow-lg" : "text-white/30 hover:text-white/50"
                    }`}
                  >
                    Last Week
                  </button>
                </div>

                <NoDataView />
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
