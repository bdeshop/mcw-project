import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

interface PromotionModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PromotionModal = ({ isOpen, onClose }: PromotionModalProps) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[2000] bg-black/70 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-[540px] bg-[#161b2e] rounded-md overflow-hidden shadow-2xl flex flex-col max-h-[90vh]"
          >
            {/* Promo Banner Image */}
            <div className="relative aspect-[1.8/1] w-full shrink-0">
              <img 
                src="file:///C:/Users/user/.gemini/antigravity/brain/a41a90cc-0504-47db-8469-23ae4d93c7f3/jelly_express_promo_1778661661850.png" 
                alt="PP Jelly Express Promo" 
                className="w-full h-full object-cover"
              />
              <button 
                onClick={onClose}
                className="absolute top-3 right-3 h-8 w-8 flex items-center justify-center text-white/80 hover:text-white transition-colors"
              >
                <X className="h-6 w-6" />
              </button>
            </div>

            {/* Gold Title Bar */}
            <div className="bg-[#C9A33D] py-2.5 px-4 shrink-0 text-center">
              <h2 className="text-white font-bold text-[15px] tracking-wide">
                PP Jelly Express Free Spins
              </h2>
            </div>

            {/* Content Area */}
            <div className="flex-1 overflow-y-auto custom-scrollbar bg-[#161b2e] p-6">
              <div className="space-y-5">
                {/* Main Highlight */}
                <div className="space-y-1">
                  <p className="text-[#C9A33D] font-bold text-[14px]">
                    Claim 25 FREE SPINS daily with your deposit and ride the sweet wins in Jelly Express!
                  </p>
                  <p className="text-[#C9A33D] font-bold text-[14px]">
                    Promo Period: May 1 - 31, 2026
                  </p>
                </div>

                {/* Steps Section */}
                <div className="space-y-2">
                  <h3 className="text-white font-bold text-[14px]">What should you do?</h3>
                  <div className="space-y-1 text-white text-[13px] leading-relaxed">
                    <p>1. Deposit at least ৳500 to receive 25 free spins on Pragmatic Play Jelly Express.</p>
                    <p>2. Select "PP Jelly Express - 25 Free Spins" from the Promotion list while making your deposit.</p>
                  </div>
                </div>

                {/* Terms Section */}
                <div className="space-y-2">
                  <h3 className="text-white font-bold text-[14px]">Terms and Conditions:</h3>
                  <div className="space-y-1 text-white text-[13px] leading-relaxed">
                    <p>1. This offer is available for all BDT players.</p>
                    <p>2. Players must log into the PP games to be eligible. If a player's PP game account is unavailable, any awarded free spins will be voided.</p>
                    <p>3. Free Spins on Jelly Express will be automatically credited into the player's account upon every successful deposit and will expire 48 hours after being credited.</p>
                    <p>4. Deposit has 1x WR on PP Jelly Express before withdrawal while winnings from Free Spins are capped at 10,000 with NO WR.</p>
                    <p>5. Players can only claim once per day, for up to 7 times weekly with a maximum of 175 Free Spins.</p>
                    <p>6. <span className="text-[#C9A33D] font-bold">General Terms and Conditions</span> apply.</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
