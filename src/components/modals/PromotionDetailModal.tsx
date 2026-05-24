import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

interface PromotionDetailModalProps {
  isOpen: boolean;
  onClose: () => void;
  promo: any;
}

export const PromotionDetailModal = ({ isOpen, onClose, promo }: PromotionDetailModalProps) => {
  if (!promo) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[2000] flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/80 backdrop-blur-md"
          />
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 30 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 30 }}
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-[800px] bg-[#161b2e] rounded-xl overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,0,0,0.7)] flex flex-col max-h-[90vh] relative z-10 border border-white/5"
          >
            {/* Banner Section */}
            <div className="relative aspect-16/5 shrink-0 overflow-hidden">
               <img src={promo.img} alt={promo.title} className="w-full h-full object-cover" />
               <button onClick={onClose} className="absolute top-4 right-4 h-10 w-10 rounded-full bg-black/40 backdrop-blur-md flex items-center justify-center text-white hover:bg-black/60 transition-all border border-white/10 group">
                  <X className="h-6 w-6 group-hover:rotate-90 transition-transform" />
               </button>
            </div>

            {/* Title Bar */}
            <div className="bg-casino-gold py-3 px-6 shrink-0 flex items-center justify-center shadow-lg">
               <h2 className="text-white font-black text-sm md:text-lg uppercase tracking-tight italic text-center drop-shadow-md">
                 {promo.title}
               </h2>
            </div>

            {/* Scrollable Content */}
            <div className="flex-1 overflow-y-auto no-scrollbar p-6 space-y-6">
                {/* Intro */}
                <div className="space-y-4">
                   <p className="text-[#C9A33D] font-black text-sm md:text-base italic uppercase tracking-tight">
                     Don't miss the chance to get extra bonus on your deposit.
                   </p>
                   
                   <div className="space-y-3">
                      <h3 className="text-white font-black text-[15px] uppercase italic">What should you do?</h3>
                      <ul className="space-y-2 pl-4">
                         <li className="text-white/70 text-[13px] font-medium leading-relaxed flex items-start gap-3">
                            <span className="text-[#C9A33D] font-black">1.</span>
                            Receive up to bonus deposit when you make your deposit.
                         </li>
                         <li className="text-white/70 text-[13px] font-medium leading-relaxed flex items-start gap-3">
                            <span className="text-[#C9A33D] font-black">2.</span>
                            Go to deposit page and select "Regular Deposit" from the promotion list.
                         </li>
                      </ul>
                   </div>

                   <p className="text-white font-black text-[13px] uppercase italic mt-4">
                      ALL Deposit Method except <span className="text-[#FF4D4D]">CRYPTO & LOCAL BANK</span>
                   </p>
                </div>

                {/* VIP Table */}
                <div className="rounded-lg overflow-hidden border border-white/10">
                   <table className="w-full text-left border-collapse">
                      <thead>
                         <tr className="bg-[#232a44] border-b border-white/10">
                            <th className="px-6 py-3 text-white font-black text-[11px] uppercase tracking-widest text-center italic">VIP Level</th>
                            <th className="px-6 py-3 text-white font-black text-[11px] uppercase tracking-widest text-center italic">Bonus Percentage</th>
                         </tr>
                      </thead>
                      <tbody className="divide-y divide-white/5">
                         {[
                           { level: "Bronze", bonus: "4.00%" },
                           { level: "Silver", bonus: "4.75%" },
                           { level: "Gold", bonus: "5.50%" },
                           { level: "Diamond and Elite Black Diamond", bonus: "6.00%" },
                         ].map((row, i) => (
                           <tr key={i} className="hover:bg-white/5 transition-colors">
                              <td className="px-6 py-4 text-white font-bold text-[13px] text-center border-r border-white/5">{row.level}</td>
                              <td className="px-6 py-4 text-white font-black text-[14px] text-center italic">{row.bonus}</td>
                           </tr>
                         ))}
                      </tbody>
                   </table>
                </div>

                {/* Terms */}
                <div className="space-y-3 pt-4 border-t border-white/5">
                   <h3 className="text-white font-black text-[15px] uppercase italic">Terms and Conditions:</h3>
                   <div className="space-y-2">
                      {[
                        "Promotion is valid for all registered members.",
                        "Bonus will be credited instantly after successful deposit.",
                        "Wagering requirement must be met before withdrawal.",
                        "MCW reserves the right to modify or cancel the promotion at any time.",
                      ].map((term, i) => (
                        <div key={i} className="flex items-start gap-3">
                           <div className="h-1.5 w-1.5 rounded-full bg-[#C9A33D] mt-1.5 shrink-0" />
                           <p className="text-white/40 text-[12px] font-medium leading-relaxed">{term}</p>
                        </div>
                      ))}
                   </div>
                </div>
            </div>

         
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
