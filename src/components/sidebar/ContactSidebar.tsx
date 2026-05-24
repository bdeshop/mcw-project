import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Phone, MessageCircle, Mail } from "lucide-react";

const FacebookIcon = (props: any) => (
  <svg {...props} viewBox="0 0 24 24" fill="currentColor">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
  </svg>
);

interface ContactSidebarProps {
  isOpen: boolean;
  onClose: () => void;
  onCSClick?: () => void;
}

const CONTACT_OPTIONS = [
  { icon: Phone, label: "24-7 CS", color: "#f0c43e", bg: "rgba(240, 196, 62, 0.1)" },
  { icon: MessageCircle, label: "Telegram", color: "#229ED9", bg: "rgba(34, 158, 217, 0.1)" },
  { icon: FacebookIcon, label: "Facebook", color: "#1877F2", bg: "rgba(24, 119, 242, 0.1)" },
  { icon: Mail, label: "Email", color: "#f0c43e", bg: "rgba(240, 196, 62, 0.1)" }
];

export const ContactSidebar = ({ isOpen, onClose, onCSClick }: ContactSidebarProps) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[1000]"
          />

          {/* Sidebar */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed top-0 right-0 h-full w-[300px] md:w-[350px] bg-[#1a1f33] border-l border-white/5 z-[1001] shadow-2xl flex flex-col"
          >
            {/* Header */}
            <div className="p-6 border-b border-white/5 flex items-center justify-between">
              <h2 className="text-white font-black uppercase tracking-widest text-lg italic">Contact Us</h2>
              <button 
                onClick={onClose}
                className="h-10 w-10 rounded-xl bg-white/5 flex items-center justify-center hover:bg-white/10 transition-colors"
              >
                <X className="h-5 w-5 text-white/50" />
              </button>
            </div>

            {/* Content - Grid */}
            <div className="flex-1 p-6">
              <div className="grid grid-cols-2 gap-4">
                {CONTACT_OPTIONS.map((item, i) => (
                  <motion.button
                    key={i}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={item.label === "24-7 CS" ? onCSClick : undefined}
                    className="aspect-square rounded-2xl bg-[#232a44] border border-white/5 flex flex-col items-center justify-center gap-4 hover:border-white/20 transition-all group"
                  >
                    <div 
                      className="h-14 w-14 rounded-2xl flex items-center justify-center transition-all group-hover:scale-110 shadow-lg shadow-black/20"
                      style={{ backgroundColor: item.bg }}
                    >
                      <item.icon className="h-7 w-7" style={{ color: item.color }} />
                    </div>
                    <span className="text-white/80 font-black uppercase text-[11px] tracking-widest italic group-hover:text-white transition-colors">
                      {item.label}
                    </span>
                  </motion.button>
                ))}
              </div>

              {/* Extra Info */}
              <div className="mt-8 space-y-4">
                <div className="p-4 rounded-xl bg-white/5 border border-white/5">
                  <p className="text-white/40 text-[10px] font-bold uppercase tracking-widest mb-1">Response Time</p>
                  <p className="text-white/80 font-black text-sm uppercase italic">Within 5 Minutes</p>
                </div>
                <div className="p-4 rounded-xl bg-white/5 border border-white/5">
                  <p className="text-white/40 text-[10px] font-bold uppercase tracking-widest mb-1">Availability</p>
                  <p className="text-white/80 font-black text-sm uppercase italic">24/7 Support</p>
                </div>
              </div>
            </div>

            {/* Footer Brand */}
            <div className="p-6 text-center opacity-20">
               <img src="https://mcwpartnerships.com/wp-content/uploads/2023/08/mcw-hlogo.png" className="h-6 mx-auto mb-2 grayscale" alt="MCW" />
               <p className="text-[10px] font-bold uppercase tracking-widest">Global Support Center</p>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};
