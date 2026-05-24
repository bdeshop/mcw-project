import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

interface TurnoverModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export const TurnoverModal = ({ isOpen, onClose }: TurnoverModalProps) => {
    const [activeTab, setActiveTab] = useState<"active" | "completed">("active");

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-2000 flex items-center justify-center p-4">
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
                            <h2 className="text-white font-black text-base uppercase tracking-[0.15em] italic drop-shadow-md">Turnover</h2>
                            <button onClick={onClose} className="text-white/80 hover:text-white hover:rotate-90 transition-all p-1">
                                <X className="h-5 w-5 stroke-[3]" />
                            </button>
                        </div>

                        {/* Main Tabs */}
                        <div className="bg-casino-gold shrink-0 border-b border-black/5 relative">
                            <div className="flex h-12">
                                {["Active", "Completed"].map((tab, idx) => (
                                    <button
                                        key={tab}
                                        onClick={() => setActiveTab(idx === 0 ? "active" : "completed")}
                                        className={`flex-1 flex items-center justify-center text-[13px] font-black uppercase tracking-widest transition-all relative z-10 ${(idx === 0 && activeTab === "active") || (idx === 1 && activeTab === "completed") ? "text-white" : "text-white/40 hover:text-white/70"
                                            }`}
                                    >
                                        {tab}
                                    </button>
                                ))}
                                <motion.div
                                    className="absolute bottom-0 h-1 bg-white rounded-t-full"
                                    animate={{ x: activeTab === "active" ? "0%" : "100%", width: "50%" }}
                                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                />
                            </div>
                        </div>

                        {/* Content Area */}
                        <div className="flex-1 overflow-y-auto no-scrollbar p-5">
                            <div className="flex flex-col items-center justify-center py-24 bg-black/20 rounded-2xl border border-white/5 relative overflow-hidden group">
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
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
};
