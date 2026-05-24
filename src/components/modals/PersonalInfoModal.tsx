import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronDown, MessageSquare } from "lucide-react";

interface PersonalInfoModalProps {
  isOpen: boolean;
  onClose: () => void;
  user?: {
    username: string;
  };
}

export const PersonalInfoModal = ({ isOpen, onClose, user }: PersonalInfoModalProps) => {
  const [activeInput, setActiveInput] = useState<string | null>(null);

  const AddInfoOverlay = () => (
    <motion.div
      initial={{ x: "100%" }}
      animate={{ x: 0 }}
      exit={{ x: "100%" }}
      transition={{ type: "spring", damping: 25, stiffness: 200 }}
      className="absolute inset-0 z-50 bg-[#161b2e] flex flex-col"
    >
      <div className="bg-[#232a44] h-14 shrink-0 flex items-center justify-between px-6 border-b border-white/5">
        <h3 className="text-white font-black text-sm uppercase tracking-widest italic">Add {activeInput}</h3>
        <button onClick={() => setActiveInput(null)} className="flex items-center gap-2 text-white/40 hover:text-white transition-all group">
          <span className="text-[10px] font-black uppercase tracking-tighter">Back</span>
          <ChevronLeft className="h-5 w-5 group-hover:-translate-x-1 transition-transform" />
        </button>
      </div>

      <div className="flex-1 p-6 space-y-6">
        <div className="space-y-2">
          <label className="text-white/40 text-[11px] font-black uppercase tracking-widest pl-1">Enter {activeInput}</label>
          <input 
            type="text" 
            placeholder={`Enter your ${activeInput?.toLowerCase()}...`}
            className="w-full h-12 bg-black/40 border border-white/10 rounded-xl px-4 text-white font-bold focus:border-casino-gold outline-none transition-all"
          />
        </div>
        <button 
          onClick={() => setActiveInput(null)}
          className="w-full h-11 bg-login-grad text-white font-black text-sm uppercase tracking-widest italic rounded-xl shadow-xl shadow-casino-gold/10 hover:brightness-110 active:scale-95 transition-all border border-white/5"
        >
          Submit
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
              <h2 className="text-white font-black text-base uppercase tracking-[0.15em] italic drop-shadow-md">Personal Information</h2>
              <button onClick={onClose} className="text-white/80 hover:text-white hover:rotate-90 transition-all p-1">
                <X className="h-5 w-5 stroke-[3]" />
              </button>
            </div>

            <div className="flex-1 overflow-hidden relative">
              <AnimatePresence>
                {activeInput && <AddInfoOverlay />}
              </AnimatePresence>

              <div className="h-full overflow-y-auto no-scrollbar p-5 space-y-5">
                 {/* Top Profile Section */}
                 <div className="flex items-center gap-4 bg-black/20 p-4 rounded-2xl border border-white/5">
                    <div className="h-16 w-16 relative">
                       <img src="https://img.m167cw.com/mcw/h5/assets/images/vip/login/ranking1.png" alt="VIP" className="h-full w-full object-contain" />
                    </div>
                    <div className="flex flex-col">
                       <span className="text-white font-black text-[17px] italic drop-shadow-sm">{user?.username || "test12343543534"}</span>
                       <p className="text-white/30 text-[10px] font-bold mt-1 uppercase tracking-tighter italic">Date Registered : <span className="text-white/50">2026/05/13</span></p>
                    </div>
                 </div>

                 {/* VIP Points Card */}
                 <div className="bg-[#232a44] p-4 rounded-2xl border border-white/5 flex items-center justify-between shadow-inner">
                    <div className="flex flex-col">
                       <h3 className="text-white/40 text-[10px] font-black uppercase tracking-widest">VIP Points (VP)</h3>
                       <span className="text-white font-black text-2xl drop-shadow-sm">0</span>
                    </div>
                    <button className="flex items-center gap-2 px-4 py-2 bg-black/40 rounded-full border border-white/5 text-casino-gold font-black text-[11px] uppercase tracking-widest hover:brightness-110 transition-all">
                       My VIP
                       <div className="h-3 w-3 bg-casino-gold" style={{ maskImage: 'url("https://img.m167cw.com/mcw/h5/assets/images/icon-set/player/vip/icon-arrow.svg")', maskSize: 'contain' }} />
                    </button>
                 </div>

                 {/* Verification Tips Box */}
                 <div className="bg-[#232a44] p-4 rounded-2xl border border-white/5 space-y-4">
                    <div className="flex items-start gap-3 bg-[#1e2439] p-4 rounded-xl border border-white/5">
                       <div className="h-5 w-5 bg-casino-gold shrink-0 mt-0.5" style={{ maskImage: 'url("https://img.m167cw.com/mcw/h5/assets/images/icon-set/player/kyc/accordion-tips.svg")', maskSize: 'contain' }} />
                       <p className="text-[11px] font-bold text-white/80 leading-relaxed italic">Please complete the verification below before you proceed with the withdrawal request.</p>
                       <ChevronDown className="h-4 w-4 text-white/20 shrink-0 mt-0.5" />
                    </div>
                    <div className="flex items-center justify-between px-2">
                       <span className="text-[#4ADE80] font-black text-[11px] uppercase tracking-widest italic border-l-2 border-[#4ADE80] pl-2">Personal Info</span>
                       <ul className="flex items-center gap-2">
                          <li className="text-white/40 text-[9px] font-black uppercase tracking-tighter italic">• Full Name</li>
                       </ul>
                    </div>
                 </div>

                 {/* Fields List */}
                 <div className="space-y-3">
                    {[
                      { id: "fullName", icon: "/assets/images/icon-set/theme-icon/icon-info.svg", label: "Full Name", action: "Add" },
                      { id: "birthday", icon: "/assets/images/icon-set/theme-icon/icon-birthday.svg", label: "Birthday", action: "Add" },
                      { id: "phone", icon: "/assets/images/icon-set/theme-icon/icon-phone.svg", label: "Phone Number", tip: "+880 35465757658", status: "Not Verified" },
                      { id: "email", icon: "/assets/images/icon-set/theme-icon/icon-email.svg", label: "Email", action: "Add" },
                    ].map((item) => (
                      <div key={item.id} className="bg-black/20 p-4 rounded-2xl border border-white/5 flex items-center justify-between group transition-all hover:bg-black/30">
                        <div className="flex items-center gap-4">
                           <div className="h-10 w-10 bg-[#232a44] rounded-xl flex items-center justify-center border border-white/5 shadow-lg group-hover:border-casino-gold/30 transition-all">
                              <div className="h-5 w-5 bg-casino-gold" style={{ maskImage: `url("${item.icon}")`, maskSize: 'contain' }} />
                           </div>
                           <div className="flex flex-col">
                              <label className="text-white font-black text-[13px] italic tracking-tight">{item.label}</label>
                              {item.tip && <span className="text-white/30 text-[10px] font-black mt-0.5">{item.tip}</span>}
                           </div>
                        </div>
                        <div className="flex items-center gap-3">
                           {item.status && <span className="text-white/20 font-black text-[10px] uppercase tracking-widest italic">{item.status}</span>}
                           <button 
                             onClick={() => item.action === "Add" && setActiveInput(item.label)}
                             className={`px-5 py-2 rounded-lg font-black text-[10px] uppercase tracking-widest italic transition-all ${
                               item.action === "Add" 
                                 ? "bg-login-grad text-white shadow-lg shadow-casino-gold/20 hover:scale-105 border border-white/5" 
                                 : "bg-white/5 text-white/40 border border-white/5 cursor-not-allowed"
                             }`}
                           >
                             {item.action || "Edit"}
                           </button>
                        </div>
                      </div>
                    ))}
                 </div>

                 {/* Phone Notice Add */}
                 <button className="w-full py-4 border border-dashed border-white/10 rounded-2xl flex items-center justify-center gap-3 group hover:border-casino-gold/50 transition-all">
                    <div className="h-4 w-4 bg-white/20 group-hover:bg-casino-gold transition-all" style={{ maskImage: 'url("/assets/images/icon-set/player/kyc/accordion-arrow.svg")', maskSize: 'contain', transform: 'rotate(-90deg)' }} />
                    <span className="text-white/20 group-hover:text-white transition-all text-[11px] font-black uppercase tracking-[0.2em] italic">Add another Phone Number</span>
                 </button>

                 {/* Privacy Footer */}
                 <div className="flex items-start gap-3 pt-2">
                    <div className="h-4 w-4 bg-casino-gold shrink-0" style={{ maskImage: 'url("https://img.m167cw.com/mcw/h5/assets/images/icon-set/theme-icon/icon-customer.svg")', maskSize: 'contain' }} />
                    <p className="text-[10px] font-medium leading-relaxed italic text-white/40">
                      For privacy and security, Information can’t modified after confirmation. Please <span className="text-casino-gold cursor-pointer hover:underline">contact customer service</span>.
                    </p>
                 </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
