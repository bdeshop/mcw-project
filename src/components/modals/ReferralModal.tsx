import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Copy, Share2, ClipboardList, Filter, QrCode } from "lucide-react";

interface ReferralModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ReferralModal = ({ isOpen, onClose }: ReferralModalProps) => {
  const [activeTab, setActiveTab] = useState<"invite" | "details">("invite");

  const InviteTab = () => (
    <div className="space-y-4">
      {/* Banner Section */}
      <div className="bg-[#232a44] rounded-xl p-4 border border-white/5 space-y-4 shadow-lg overflow-hidden relative">
        <div className="flex items-center gap-2 relative z-10">
          <span className="w-1 h-3.5 bg-casino-gold rounded-full shadow-[0_0_8px_rgba(201,163,61,0.5)]" />
          <span className="text-white font-bold text-[13px] uppercase tracking-wide">Refer Your Friends and Earn</span>
        </div>
        
        <div className="rounded-lg overflow-hidden border border-white/10 shadow-inner group">
          <img 
            src="https://img.m167cw.com/mcw/h5/assets/images/player/referral/referral-invite-banner-bdt-en.png" 
            alt="Referral Banner" 
            className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700"
          />
        </div>

        {/* QR & Links Grid */}
        <div className="grid grid-cols-2 gap-4">
          <div className="flex flex-col gap-2">
            <span className="text-white/40 text-[10px] font-black uppercase tracking-widest">Invitation QR Code</span>
            <div className="bg-white p-2.5 rounded-xl aspect-square flex items-center justify-center shadow-[inset_0_0_10px_rgba(0,0,0,0.1)] border border-white/10">
              <QrCode className="h-full w-full text-[#101424]" strokeWidth={1.5} />
            </div>
          </div>
          
          <div className="flex flex-col justify-between py-0.5">
            <div className="space-y-2">
              <span className="text-white/40 text-[10px] font-black uppercase tracking-widest">Invitation Link</span>
              <button className="w-full h-11 bg-login-grad text-white font-black text-[12px] rounded-lg uppercase shadow-xl shadow-casino-gold/10 hover:brightness-110 active:scale-95 transition-all flex items-center justify-center gap-2 italic border border-white/5">
                <Share2 className="h-4 w-4" />
                <span>Share</span>
              </button>
            </div>

            <div className="space-y-2">
              <span className="text-white/40 text-[10px] font-black uppercase tracking-widest">Invitation Code</span>
              <div className="flex gap-1.5">
                <div className="flex-1 h-10 bg-black/20 border border-white/5 rounded-lg flex items-center px-3 text-casino-gold font-black text-[13px] tracking-widest italic">
                  P1SLGb
                </div>
                <button className="h-10 w-10 bg-[#2a3250] border border-white/10 rounded-lg flex items-center justify-center hover:bg-casino-gold hover:text-[#101424] transition-all group active:scale-90">
                  <Copy className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Board */}
      <div className="bg-casino-gold rounded-xl p-0.5 shadow-xl">
        <div className="bg-[#161b2e] rounded-[10px] py-4 px-2 flex items-center justify-around divide-x divide-white/5">
          <div className="flex-1 text-center space-y-1">
            <p className="text-white/30 text-[9px] font-black uppercase tracking-tighter">Referral Count</p>
            <p className="text-white font-black text-xl tracking-tight">0</p>
          </div>
          <div className="flex-1 text-center space-y-1 px-1">
            <p className="text-white/30 text-[9px] font-black uppercase tracking-tighter leading-none">Today's Rewards</p>
            <p className="text-casino-gold font-black text-xl tracking-tight">৳0</p>
          </div>
          <div className="flex-1 text-center space-y-1">
            <p className="text-white/30 text-[9px] font-black uppercase tracking-tighter leading-none">Yesterday's Rewards</p>
            <p className="text-casino-gold font-black text-xl tracking-tight">৳0</p>
          </div>
        </div>
      </div>

      {/* Available Rewards */}
      <div className="bg-[#232a44] rounded-xl p-4 border border-white/5 flex items-center justify-between shadow-lg">
        <div className="flex items-center gap-2">
          <span className="w-1 h-3.5 bg-casino-gold rounded-full" />
          <span className="text-white font-bold text-[13px] uppercase tracking-wide">Available Cash Rewards</span>
        </div>
        <div className="flex items-center gap-4">
          <span className="text-white font-black text-lg">৳0</span>
          <button className="px-5 py-2 bg-white/5 border border-white/10 rounded-lg text-white/20 font-black text-[11px] uppercase tracking-widest italic cursor-not-allowed">
            Claim
          </button>
        </div>
      </div>

      {/* Commission Info */}
      <div className="bg-[#232a44] rounded-xl p-5 border border-white/5 space-y-4 shadow-lg">
        <div className="flex items-center gap-2">
          <span className="w-1 h-3.5 bg-casino-gold rounded-full" />
          <h3 className="text-white font-bold text-[13px] uppercase tracking-wide">How to earn more rewards</h3>
        </div>
        <p className="text-white/40 text-[11px] font-medium leading-relaxed">
          All referrer will receive certain cash reward percentage for every referee when they play games on Mega Casino World.
        </p>
        <div className="rounded-xl overflow-hidden border border-white/5 bg-black/20 p-2">
           <img src="https://img.m167cw.com/mcw/h5/assets/images/player/referral/commission-from.png" alt="Commission Chart" className="w-full h-auto" />
        </div>
        <div className="text-center space-y-1 py-2">
            <p className="text-white/60 text-[11px] font-bold">Be diligent in referring, be the upline and earn up to 3 tiers easily!</p>
            <h4 className="text-casino-gold font-black text-[13px] uppercase italic">Welcome to lifetime commissions!</h4>
        </div>
      </div>
    </div>
  );

  const DetailsTab = () => (
    <div className="space-y-4 py-4">
      <div className="bg-[#232a44] rounded-xl p-10 flex flex-col items-center justify-center gap-4 border border-white/5 bg-linear-to-b from-[#232a44] to-[#1e2439]">
        <div className="h-20 w-20 rounded-full bg-white/5 flex items-center justify-center shadow-inner">
          <ClipboardList className="h-10 w-10 text-white/10" />
        </div>
        <div className="text-center space-y-1">
            <p className="text-white font-bold text-base">No Data</p>
            <p className="text-white/20 text-[11px] max-w-[200px] mx-auto uppercase font-black tracking-widest">Your referral history is currently empty.</p>
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
              <h2 className="text-white font-black text-base uppercase tracking-[0.15em] italic drop-shadow-md">Referral</h2>
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
                  onClick={() => setActiveTab("invite")}
                  className={`flex-1 flex items-center justify-center text-[13px] font-black uppercase tracking-widest transition-all relative z-10 ${
                    activeTab === "invite" ? "text-white" : "text-white/40 hover:text-white/70"
                  }`}
                >
                  Invite
                </button>
                <button
                  onClick={() => setActiveTab("details")}
                  className={`flex-1 flex items-center justify-center text-[13px] font-black uppercase tracking-widest transition-all relative z-10 ${
                    activeTab === "details" ? "text-white" : "text-white/40 hover:text-white/70"
                  }`}
                >
                  Details
                </button>

                {/* Sliding Indicator */}
                <motion.div 
                  className="absolute bottom-0 h-1 bg-white rounded-t-full shadow-[0_-2px_10px_rgba(255,255,255,0.5)]"
                  initial={false}
                  animate={{ 
                    width: "50%", 
                    x: activeTab === "invite" ? "0%" : "100%" 
                  }}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              </div>
            </div>

            {/* Content Scroll Area */}
            <div className="flex-1 overflow-y-auto no-scrollbar p-5 space-y-4 bg-linear-to-b from-[#161b2e] to-[#101424]">
              {activeTab === "invite" ? <InviteTab /> : <DetailsTab />}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
