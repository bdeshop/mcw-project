import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

interface ChangePasswordModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ChangePasswordModal = ({ isOpen, onClose }: ChangePasswordModalProps) => {
  const [showCurrent, setShowCurrent] = useState(false);
  const [showNew, setShowNew] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  const [password, setPassword] = useState("");

  const validationRules = [
    { label: "Between 6~20 characters.", valid: password.length >= 6 && password.length <= 20 },
    { label: "At least one alphabet.", valid: /[a-zA-Z]/.test(password) },
    { label: "At least one number. (Special character, symbols are allowed)", valid: /[0-9]/.test(password) }
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[11100] flex items-center justify-center p-4">
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
              <h2 className="text-white font-black text-base uppercase tracking-[0.15em] italic drop-shadow-md">Change Password</h2>
              <button onClick={onClose} className="text-white/80 hover:text-white hover:rotate-90 transition-all p-1">
                <X className="h-5 w-5 stroke-[3]" />
              </button>
            </div>

            {/* Content Area */}
            <div className="flex-1 overflow-y-auto no-scrollbar p-5 space-y-6">
              {/* Logo Box */}
              <div 
                className="h-10 w-full bg-contain bg-no-repeat bg-center  transition-all"
                style={{ backgroundImage: 'url("https://img.m167cw.com/mcw/h5/assets/images/member-logo.png")' }}
              />

              <div className="space-y-5">
                 {/* Current Password */}
                 <div className="space-y-1.5 relative group">
                    <label className="text-white/40 text-[10px] font-black uppercase tracking-widest pl-1 italic">Current password</label>
                    <div className="relative">
                       <input 
                         type={showCurrent ? "text" : "password"}
                         placeholder="Current password"
                         className="w-full h-12 bg-black/40 border border-white/5 rounded-xl px-4 pr-20 text-white font-bold focus:border-casino-gold outline-none transition-all placeholder:text-white/10"
                       />
                       <div className="absolute right-4 top-1/2 -translate-y-1/2 flex items-center gap-3">
                          <button onClick={() => setShowCurrent(!showCurrent)} className="h-5 w-5 bg-white/20 hover:bg-casino-gold transition-all" style={{ maskImage: showCurrent ? 'url("https://img.m167cw.com/mcw/h5/assets/images/icon-set/icon-eye-open-type03.svg")' : 'url("https://img.m167cw.com/mcw/h5/assets/images/icon-set/icon-eye-close-type03.svg")', maskSize: 'contain' }} />
                          <div className="h-4 w-4 bg-white/10 hover:bg-red-500 transition-all cursor-pointer" style={{ maskImage: 'url("https://img.m167cw.com/mcw/h5/assets/images/icon-set/icon-cross-type09.svg")', maskSize: 'contain' }} />
                       </div>
                    </div>
                 </div>

                 {/* New Password */}
                 <div className="space-y-1.5 relative group">
                    <label className="text-white/40 text-[10px] font-black uppercase tracking-widest pl-1 italic">New password</label>
                    <div className="relative">
                       <input 
                         type={showNew ? "text" : "password"}
                         value={password}
                         onChange={(e) => setPassword(e.target.value)}
                         placeholder="New password"
                         className="w-full h-12 bg-black/40 border border-white/5 rounded-xl px-4 pr-20 text-white font-bold focus:border-casino-gold outline-none transition-all placeholder:text-white/10"
                       />
                       <div className="absolute right-4 top-1/2 -translate-y-1/2 flex items-center gap-3">
                          <button onClick={() => setShowNew(!showNew)} className="h-5 w-5 bg-white/20 hover:bg-casino-gold transition-all" style={{ maskImage: showNew ? 'url("https://img.m167cw.com/mcw/h5/assets/images/icon-set/icon-eye-open-type03.svg")' : 'url("https://img.m167cw.com/mcw/h5/assets/images/icon-set/icon-eye-close-type03.svg")', maskSize: 'contain' }} />
                          <div onClick={() => setPassword("")} className="h-4 w-4 bg-white/10 hover:bg-red-500 transition-all cursor-pointer" style={{ maskImage: 'url("https://img.m167cw.com/mcw/h5/assets/images/icon-set/icon-cross-type09.svg")', maskSize: 'contain' }} />
                       </div>
                    </div>
                    {/* Password Messages */}
                    <div className="space-y-2 pt-2 px-1">
                       {validationRules.map((rule, idx) => (
                         <div key={idx} className={`flex items-start gap-2 transition-all ${rule.valid ? "opacity-100" : "opacity-30"}`}>
                            <div className={`h-3.5 w-3.5 shrink-0 mt-0.5 ${rule.valid ? "bg-green-500" : "bg-white/40"}`} style={{ maskImage: 'url("https://img.m167cw.com/mcw/h5/assets/images/icon-set/icon-check-type07.svg")', maskSize: 'contain' }} />
                            <span className="text-[10px] font-medium text-white italic leading-tight">{rule.label}</span>
                         </div>
                       ))}
                    </div>
                 </div>

                 {/* Confirm New Password */}
                 <div className="space-y-1.5 relative group">
                    <label className="text-white/40 text-[10px] font-black uppercase tracking-widest pl-1 italic">Confirm new password</label>
                    <div className="relative">
                       <input 
                         type={showConfirm ? "text" : "password"}
                         placeholder="Confirm new password"
                         className="w-full h-12 bg-black/40 border border-white/5 rounded-xl px-4 pr-20 text-white font-bold focus:border-casino-gold outline-none transition-all placeholder:text-white/10"
                       />
                       <div className="absolute right-4 top-1/2 -translate-y-1/2 flex items-center gap-3">
                          <button onClick={() => setShowConfirm(!showConfirm)} className="h-5 w-5 bg-white/20 hover:bg-casino-gold transition-all" style={{ maskImage: showConfirm ? 'url("https://img.m167cw.com/mcw/h5/assets/images/icon-set/icon-eye-open-type03.svg")' : 'url("https://img.m167cw.com/mcw/h5/assets/images/icon-set/icon-eye-close-type03.svg")', maskSize: 'contain' }} />
                          <div className="h-4 w-4 bg-white/10 hover:bg-red-500 transition-all cursor-pointer" style={{ maskImage: 'url("https://img.m167cw.com/mcw/h5/assets/images/icon-set/icon-cross-type09.svg")', maskSize: 'contain' }} />
                       </div>
                    </div>
                 </div>
              </div>

              {/* Confirm Button */}
              <div className="pt-4">
                  <button className="w-full h-11 bg-login-grad text-white font-black text-sm uppercase tracking-widest italic rounded-xl shadow-xl shadow-casino-gold/10 hover:brightness-110 active:scale-[0.98] transition-all border border-white/5">
                     Confirm
                  </button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
