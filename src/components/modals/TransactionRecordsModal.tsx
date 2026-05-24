import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, Check } from "lucide-react";

interface TransactionRecordsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const STATUSES = ["Processing", "Rejected", "Approved"];
const PAYMENT_TYPES = ["Deposit", "Withdrawal", "Adjustment"];
const DATES = ["Today", "Yesterday", "Last 7 days"];

export const TransactionRecordsModal = ({ isOpen, onClose }: TransactionRecordsModalProps) => {
  const [showFilter, setShowFilter] = useState(false);
  const [selectedStatuses, setSelectedStatuses] = useState<string[]>([]);
  const [selectedTypes, setSelectedTypes] = useState<string[]>([]);
  const [selectedDate, setSelectedDate] = useState("Today");

  const toggleFilter = () => setShowFilter(!showFilter);

  const toggleStatus = (s: string) => {
    setSelectedStatuses(prev => prev.includes(s) ? prev.filter(x => x !== s) : [...prev, s]);
  };

  const toggleType = (t: string) => {
    setSelectedTypes(prev => prev.includes(t) ? prev.filter(x => x !== t) : [...prev, t]);
  };

  const FilterOverlay = () => (
    <motion.div
      initial={{ x: "100%" }}
      animate={{ x: 0 }}
      exit={{ x: "100%" }}
      transition={{ type: "spring", damping: 25, stiffness: 200 }}
      className="absolute inset-0 z-50 bg-[#161b2e] flex flex-col"
    >
      <div className="bg-[#232a44] h-14 shrink-0 flex items-center justify-between px-6 border-b border-white/5">
        <h3 className="text-white font-black text-sm uppercase tracking-widest italic">Transaction Record Filter</h3>
        <button onClick={toggleFilter} className="flex items-center gap-2 text-white/40 hover:text-white transition-all group">
          <span className="text-[10px] font-black uppercase tracking-tighter">Back</span>
          <ChevronLeft className="h-5 w-5 group-hover:-translate-x-1 transition-transform" />
        </button>
      </div>

      <div className="flex-1 overflow-y-auto no-scrollbar p-5 space-y-8 pb-24">
        {/* Statuses */}
        <div className="space-y-4">
          <h4 className="text-white font-black text-[11px] uppercase tracking-[0.2em] italic border-l-3 border-casino-gold pl-3">Status</h4>
          <div className="grid grid-cols-3 gap-2">
            {STATUSES.map((s) => (
              <button
                key={s}
                onClick={() => toggleStatus(s)}
                className={`relative h-10 rounded border flex items-center justify-center transition-all ${
                  selectedStatuses.includes(s) ? "bg-casino-gold/10 border-casino-gold text-casino-gold" : "bg-[#232a44] border-white/5 text-white/40"
                }`}
              >
                <span className="text-[10px] font-black uppercase truncate px-2">{s}</span>
                {selectedStatuses.includes(s) && (
                  <div className="absolute top-0 right-0 w-3 h-3 bg-casino-gold flex items-center justify-center rounded-bl overflow-hidden">
                    <Check className="h-2 w-2 text-white" />
                  </div>
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Payment Types */}
        <div className="space-y-4">
          <h4 className="text-white font-black text-[11px] uppercase tracking-[0.2em] italic border-l-3 border-casino-gold pl-3">Payment Type</h4>
          <div className="grid grid-cols-3 gap-2">
            {PAYMENT_TYPES.map((t) => (
              <button
                key={t}
                onClick={() => toggleType(t)}
                className={`relative h-10 rounded border flex items-center justify-center transition-all ${
                  selectedTypes.includes(t) ? "bg-casino-gold/10 border-casino-gold text-casino-gold" : "bg-[#232a44] border-white/5 text-white/40"
                }`}
              >
                <span className="text-[10px] font-black uppercase truncate px-2">{t}</span>
                {selectedTypes.includes(t) && (
                   <div className="absolute top-0 right-0 w-3 h-3 bg-casino-gold flex items-center justify-center rounded-bl overflow-hidden">
                    <Check className="h-2 w-2 text-white" />
                  </div>
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Date */}
        <div className="space-y-4">
          <h4 className="text-white font-black text-[11px] uppercase tracking-[0.2em] italic border-l-3 border-casino-gold pl-3">Date</h4>
          <div className="grid grid-cols-3 gap-2">
            {DATES.map((d) => (
              <button
                key={d}
                onClick={() => setSelectedDate(d)}
                className={`relative h-10 rounded border flex items-center justify-center transition-all ${
                  selectedDate === d ? "bg-casino-gold/10 border-casino-gold text-casino-gold" : "bg-[#232a44] border-white/5 text-white/40"
                }`}
              >
                <span className="text-[10px] font-black uppercase truncate px-2">{d}</span>
                {selectedDate === d && (
                   <div className="absolute top-0 right-0 w-3 h-3 bg-casino-gold flex items-center justify-center rounded-bl overflow-hidden">
                    <Check className="h-2 w-2 text-white" />
                  </div>
                )}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Confirm Bar */}
      <div className="absolute bottom-0 left-0 right-0 p-4 bg-[#232a44] border-t border-white/5 shadow-[0_-10px_30px_rgba(0,0,0,0.5)]">
        <button onClick={toggleFilter} className="w-full h-11 bg-login-grad text-white font-black text-sm uppercase tracking-widest italic rounded-xl shadow-xl shadow-casino-gold/10 hover:brightness-110 active:scale-95 transition-all border border-white/5">
          Confirm
        </button>
      </div>
    </motion.div>
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
              <h2 className="text-white font-black text-base uppercase tracking-[0.15em] italic drop-shadow-md">Transaction Records</h2>
              <button onClick={onClose} className="text-white/80 hover:text-white hover:rotate-90 transition-all p-1">
                <X className="h-5 w-5 stroke-[3]" />
              </button>
            </div>

            <div className="flex-1 overflow-hidden relative">
              <AnimatePresence>
                {showFilter && <FilterOverlay />}
              </AnimatePresence>

              <div className="h-full overflow-y-auto no-scrollbar p-5 space-y-6">
                 {/* Filter Control Bar */}
                 <div className="flex items-center justify-between gap-4">
                    <div className="flex-1 h-10 bg-[#232a44] rounded-full border border-white/5 px-4 flex items-center gap-3">
                       <div className="w-2 h-2 rounded-full bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.5)]" />
                       <span className="text-white font-black text-[11px] uppercase tracking-widest italic">{selectedDate}</span>
                    </div>
                    <button 
                      onClick={toggleFilter}
                      className="h-10 w-10 bg-login-grad rounded-xl flex items-center justify-center shadow-xl shadow-casino-gold/10 hover:scale-105 transition-all border border-white/5"
                    >
                       <div className="h-5 w-5 bg-white" style={{ maskImage: 'url("https://img.m167cw.com/mcw/h5/assets/images/icon-set/index-theme-icon/games-filter-icon.svg")', maskSize: 'contain' }} />
                    </button>
                 </div>

                 {/* Records Table */}
                 <div className="space-y-4">
                    {/* Table Head */}
                    <div className="bg-casino-gold rounded-xl grid grid-cols-4 overflow-hidden border border-black/5 shadow-lg">
                       {["Type", "Amount", "Status", "Time"].map((h) => (
                          <div key={h} className="py-3 text-center border-r border-black/5 last:border-0">
                             <span className="text-white font-black text-[10px] uppercase italic tracking-tighter">{h}</span>
                          </div>
                       ))}
                    </div>

                    {/* No Data State */}
                    <div className="flex flex-col items-center justify-center py-20 bg-black/20 rounded-2xl border border-white/5 relative overflow-hidden group">
                       <div className="relative w-40 h-40 mb-4 opacity-40 group-hover:opacity-100 transition-opacity">
                          <video 
                            autoPlay 
                            loop 
                            muted 
                            playsInline 
                            className="w-full h-full object-contain"
                            poster="https://img.m167cw.com/mcw/h5/assets/images/animation/no-data.png"
                          >
                             <source src="https://img.m167cw.com/mcw/h5/assets/images/animation/no-data.webm" type="video/webm" />
                             <source src="https://img.m167cw.com/mcw/h5/assets/images/animation/no-data.mov" type="video/quicktime" />
                          </video>
                       </div>
                       <p className="text-white/20 font-black text-sm uppercase tracking-[0.2em]">No Data</p>
                    </div>
                 </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
