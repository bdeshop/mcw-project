import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Mail, MailOpen, Trash2, ChevronRight } from "lucide-react";

interface InboxModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const InboxModal = ({ isOpen, onClose }: InboxModalProps) => {
  const [activeTab, setActiveTab] = useState<"personal" | "system">("personal");

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
            <div className="bg-casino-gold h-12 shrink-0 flex items-center justify-between px-6 relative border-b border-white/10">
              <div className="w-6" />
              <h2 className="text-white font-bold text-base tracking-widest uppercase">Inbox</h2>
              <button onClick={onClose} className="text-white hover:rotate-90 transition-transform">
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Tabs */}
            <div className="bg-casino-gold px-2 pb-3 shrink-0">
              <div className="flex">
                <button
                  onClick={() => setActiveTab("personal")}
                  className={`flex-1 py-3 text-[14px] font-bold transition-all relative ${activeTab === "personal" ? "text-white" : "text-white/60 hover:text-white"
                    }`}
                >
                  Personal Message
                  {activeTab === "personal" && (
                    <motion.div layoutId="inbox-tab" className="absolute bottom-0 left-1/2 -translate-x-1/2 w-8 h-1 bg-white rounded-full" />
                  )}
                </button>
                <button
                  onClick={() => setActiveTab("system")}
                  className={`flex-1 py-3 text-[14px] font-bold transition-all relative ${activeTab === "system" ? "text-white" : "text-white/60 hover:text-white"
                    }`}
                >
                  System Message
                  {activeTab === "system" && (
                    <motion.div layoutId="inbox-tab" className="absolute bottom-0 left-1/2 -translate-x-1/2 w-8 h-1 bg-white rounded-full" />
                  )}
                </button>
              </div>
            </div>

            {/* Content Area */}
            <div className="flex-1 overflow-y-auto no-scrollbar p-5">
              <div className="bg-[#232a44] rounded-lg p-12 flex flex-col items-center justify-center gap-6 border border-white/5">
                <div className="h-24 w-24 rounded-full bg-white/5 flex items-center justify-center">
                  <MailOpen className="h-12 w-12 text-white/5" />
                </div>
                <p className="text-white/20 font-bold text-base tracking-widest uppercase">No Data</p>
              </div>

              {/* Bottom Actions (Optional) */}
              <div className="mt-6 flex items-center justify-between opacity-20 pointer-events-none">
                <button className="flex items-center gap-2 text-white text-[12px] font-bold">
                  <Mail className="h-4 w-4" />
                  Read All
                </button>
                <button className="flex items-center gap-2 text-[#FF4D4D] text-[12px] font-bold">
                  <Trash2 className="h-4 w-4" />
                  Clear All
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
