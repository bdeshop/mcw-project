import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  X, RefreshCw, CreditCard, Download, Zap, Gift, Users, Trophy, 
  Calendar, FileText, BarChart2, History, User, Lock, Mail,
  Send, Phone, Info, LogOut
} from "lucide-react";

// Custom Social Icons
const Facebook = (props: any) => (
  <svg {...props} viewBox="0 0 24 24" fill="currentColor">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
  </svg>
);

const Instagram = (props: any) => (
  <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);

const Youtube = (props: any) => (
  <svg {...props} viewBox="0 0 24 24" fill="currentColor">
    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
  </svg>
);

interface MobileAccountMenuProps {
  isOpen: boolean;
  onClose: () => void;
  user: {
    username: string;
    balance: string;
    vipPoints: string;
  };
  onLogout: () => void;
  onSectionClick: (type: string) => void;
}

export const MobileAccountMenu: React.FC<MobileAccountMenuProps> = ({ 
  isOpen, 
  onClose, 
  user, 
  onLogout,
  onSectionClick
}) => {
  if (!isOpen) return null;

  interface MenuItem {
    icon: any;
    label: string;
    type: string;
    badge?: boolean | string;
  }

  interface Section {
    title: string;
    items: MenuItem[];
  }

  const sections: Section[] = [
    {
      title: "Funds",
      items: [
        { icon: CreditCard, label: "Deposit", type: "deposit" },
        { icon: Download, label: "Withdrawal", type: "withdrawal" },
        { icon: Zap, label: "Free Spin", type: "spin" },
      ]
    },
    {
      title: "My Promotion",
      items: [
        { icon: Gift, label: "Real-Time Bonus", type: "bonus" },
        { icon: Users, label: "Referral", type: "referral" },
        { icon: Trophy, label: "Winner Board", type: "winner" },
        { icon: Calendar, label: "Daily Streak Challenge", type: "streak", badge: true },
      ]
    },
    {
      title: "History",
      items: [
        { icon: FileText, label: "Betting Records", type: "betting" },
        { icon: BarChart2, label: "Turnover", type: "turnover" },
        { icon: History, label: "Transaction Records", type: "transaction" },
      ]
    },
    {
      title: "My",
      items: [
        { icon: User, label: "Personal Info", type: "info" },
        { icon: Lock, label: "Change Password", type: "password" },
        { icon: Mail, label: "Inbox", type: "inbox", badge: "1" },
      ]
    },
    {
      title: "Social",
      items: [
        { icon: Facebook, label: "FaceBook", type: "social" },
        { icon: Send, label: "Telegram", type: "social" },
        { icon: Instagram, label: "Instagram", type: "social" },
        { icon: Youtube, label: "Youtube", type: "social" },
      ]
    },
    {
      title: "Contact Us",
      items: [
        { icon: Info, label: "About Us", type: "about" },
        { icon: Phone, label: "24-7 CS", type: "cs" },
        { icon: Send, label: "Telegram", type: "social" },
        { icon: Facebook, label: "Facebook", type: "social" },
        { icon: Mail, label: "Email", type: "social" },
      ]
    }
  ];

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 20 }}
        className="fixed inset-0 z-[200] bg-[#1a1f33] overflow-y-auto no-scrollbar pb-20"
      >
        {/* Header Section */}
        <div className="bg-[#2c3454] px-4 pt-6 pb-4 relative">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="h-14 w-14 flex items-center justify-center">
                 <img src="/src/assets/logo/logo_3d.png" alt="3D Logo" className="h-full w-auto drop-shadow-2xl" />
              </div>
              <div className="bg-[#1e2439]/60 px-3 py-1.5 rounded-full flex items-center gap-2">
                 <span className="text-white/40 text-[10px] font-bold uppercase">VIP Points (VP)</span>
                 <span className="text-white text-sm font-black">{user.vipPoints}</span>
              </div>
            </div>
            <button onClick={onClose} className="text-white/60 hover:text-white p-2">
              <X className="h-6 w-6" />
            </button>
          </div>
        </div>

        {/* Wallet Banner */}
        <div className="bg-linear-to-r from-[#C9A33D] to-[#E5C164] px-4 py-4 shadow-lg">
          <div className="flex items-center gap-2 mb-1">
             <span className="text-[#1a1f33] text-sm font-bold opacity-80">Main Wallet</span>
             <RefreshCw className="h-3.5 w-3.5 text-[#1a1f33] opacity-60" />
          </div>
          <div className="text-[#1a1f33] text-2xl font-black italic">
            ৳{user.balance}
          </div>
        </div>

        {/* Sections Grid */}
        <div className="p-3 space-y-3">
          {sections.map((section, idx) => (
            <div key={idx} className="bg-[#232a44] rounded-xl p-4 shadow-inner border border-white/5">
              <h3 className="text-white/40 text-[11px] font-black uppercase tracking-widest mb-6 px-1">{section.title}</h3>
              <div className="grid grid-cols-3 md:grid-cols-4 gap-y-8 gap-x-4">
                {section.items.map((item, i) => (
                  <button 
                    key={i} 
                    onClick={() => { onSectionClick(item.type); if(item.type !== 'social') onClose(); }}
                    className="flex flex-col items-center gap-2 group active:scale-90 transition-transform relative"
                  >
                    <div className="h-12 w-12 rounded-full bg-linear-to-b from-[#333b5a] to-[#1e2439] flex items-center justify-center shadow-lg group-hover:shadow-casino-gold/10 border border-white/5 relative">
                      <item.icon className="h-5 w-5 text-casino-gold group-hover:scale-110 transition-transform" />
                      {item.badge && (
                        <div className="absolute -top-1 -right-1 h-3.5 w-3.5 bg-red-500 rounded-full border-2 border-[#232a44] flex items-center justify-center">
                          <div className="h-1 w-1 bg-white rounded-full animate-ping" />
                        </div>
                      )}
                      {typeof item.badge === 'string' && (
                        <div className="absolute -top-1.5 -right-1.5 h-4 w-4 bg-red-500 rounded-full border-2 border-[#232a44] flex items-center justify-center text-[8px] font-black text-white">
                          {item.badge}
                        </div>
                      )}
                    </div>
                    <span className="text-white text-[10px] font-bold text-center leading-tight tracking-tight opacity-80 group-hover:opacity-100">{item.label}</span>
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Logout Button */}
        <div className="px-4 mt-4 mb-10">
          <button 
            onClick={onLogout}
            className="w-full h-12 bg-linear-to-b from-[#C9A33D] to-[#8E6D24] text-[#1a1f33] text-sm font-black uppercase rounded-lg shadow-xl active:scale-95 transition-transform flex items-center justify-center gap-2"
          >
            <LogOut className="h-4 w-4" />
            Log out
          </button>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};
