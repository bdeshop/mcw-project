import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ClipboardList } from "lucide-react";

interface FreeSpinModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const FreeSpinModal = ({ isOpen, onClose }: FreeSpinModalProps) => {
  const [activeTab, setActiveTab] = useState<"running" | "completed">("running");

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[2000] bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.95, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.95, opacity: 0, y: 20 }}
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-[380px] bg-[#161b2e] rounded-xl overflow-hidden shadow-2xl border border-white/5 flex flex-col max-h-[90vh]"
          >
            {/* Header */}
            <div className="bg-casino-gold h-12 shrink-0 flex items-center justify-between px-6 border-b border-white/10">
              <div className="w-6" />
              <h2 className="text-white font-bold text-base tracking-widest uppercase">Free Spin</h2>
              <button onClick={onClose} className="text-white hover:rotate-90 transition-transform">
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Tabs */}
            <div className="bg-casino-gold px-2 pb-3 shrink-0">
              <div className="flex">
                <button
                  onClick={() => setActiveTab("running")}
                  className={`flex-1 py-3 text-[14px] font-bold transition-all relative ${activeTab === "running" ? "text-white" : "text-white/60 hover:text-white"
                    }`}
                >
                  Running
                  {activeTab === "running" && (
                    <motion.div layoutId="spin-tab" className="absolute bottom-0 left-1/2 -translate-x-1/2 w-8 h-1 bg-white rounded-full" />
                  )}
                </button>
                <button
                  onClick={() => setActiveTab("completed")}
                  className={`flex-1 py-3 text-[14px] font-bold transition-all relative ${activeTab === "completed" ? "text-white" : "text-white/60 hover:text-white"
                    }`}
                >
                  Completed
                  {activeTab === "completed" && (
                    <motion.div layoutId="spin-tab" className="absolute bottom-0 left-1/2 -translate-x-1/2 w-8 h-1 bg-white rounded-full" />
                  )}
                </button>
              </div>
            </div>

            {/* Content Area */}
            <div className="flex-1 p-6">
              <div className="bg-[#232a44] rounded-lg aspect-square flex flex-col items-center justify-center gap-6 border border-white/5">
                <div className="relative">
                  <div className="absolute inset-0 bg-white/5 blur-3xl rounded-full" />
                  <ClipboardList className="h-32 w-32 text-white/10 relative z-10" />
                  {/* Decorative dots to match 3D feel */}
                  <div className="absolute top-10 -left-4 h-3 w-3 bg-white/20 rounded-full" />
                  <div className="absolute bottom-10 -right-4 h-4 w-4 bg-white/20 rounded-full" />
                </div>
                <p className="text-white/40 font-bold text-base tracking-wide">No Data</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
