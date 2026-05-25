import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Search, ChevronRight, Gift, Trophy, Star, Download, Share2, Handshake, Phone, X, 
  ArrowLeft, Send, Mail, Fish, LogIn, UserPlus, CreditCard, Home, LogOut 
} from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { FAVOURITES } from "../../data/casinoData";
import { useLanguage } from "../../context/LanguageContext";
import { translations } from "../../data/translations";

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
  activeCategory: string | null;
  setActiveCategory: (cat: string | null) => void;
  onWinnerClick?: () => void;
  onContactClick?: () => void;
  onCSClick?: () => void;
  isLoggedIn?: boolean;
  user?: {
    username: string;
    balance: string;
    vipPoints: string;
  };
  openAuth?: (mode: "login" | "signup") => void;
  onLogout?: () => void;
}

// Custom Spade Icon for Casino
const CasinoIcon = (props: any) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M12 2C11.5 2 10 5 8.5 7C7 8.5 5 10 5 12C5 14.5 7 16.5 9.5 16.5C10.5 16.5 11.5 16 12 15C12.5 16 13.5 16.5 14.5 16.5C17 16.5 19 14.5 19 12C19 10 17 8.5 15.5 7C14 5 12.5 2 12 2ZM10 22H14L12.5 17H11.5L10 22Z" />
  </svg>
);

// Custom Flame Gamepad Icon for HOT
const FlameGamepadIcon = (props: any) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    {/* Gamepad base */}
    <path d="M21 6H8.25c.15-.32.25-.65.25-1 0-1.66-1.34-3-3-3C4.26 2 3.25 3.32 3 4.88L2.05 9.6c-.68.61-1.05 1.5-1.05 2.4v5c0 1.66 1.34 3 3 3h16c1.66 0 3-1.34 3-3v-8c0-1.66-1.34-3-3-3zM7 13H5v2H3v-2H1v-2h2V9h2v2h2v2zm11 2c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm2-3c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1z" />
    {/* Flame motif on top left */}
    <path d="M5.5 2C4.5 3 4 4.2 4 5s.5 1.5 1 2c-.5-.2-1-.8-1-1.5S4.5 3 5.5 2z" />
  </svg>
);

// Custom Sports Soccer Ball Icon
const SportsIcon = (props: any) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <circle cx="12" cy="12" r="10" />
    <path d="m12 2-3.5 3h7L12 2z" />
    <path d="m8.5 5-2.5 7 6 4 6-4-2.5-7" />
    <path d="m6 12-3.5-1.5" />
    <path d="m18 12 3.5-1.5" />
    <path d="M12 16v6" />
    <path d="M8.5 19.5 6 16" />
    <path d="m15.5 19.5 2.5-3.5" />
  </svg>
);

// Custom Slot 7 Icon
const SlotIcon = (props: any) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M5 4h14L11 20" />
  </svg>
);

// Custom Rocket Crash Icon
const CrashIcon = (props: any) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M4.5 16.5c-1.5 1.5-2.5 3.5-2.5 5.5C4 22 6 21 7.5 19.5" />
    <path d="M12 9l-4 4" />
    <path d="M15 6l-3 3" />
    <path d="M10 11l-3 3" />
    <path d="M19 5c1-1 2-2 2-2s-1 1-2 2L10 14l-2-2 6-6-3-3" />
    <path d="M14 15l1.5 1.5 5-5L19 10l-5 5z" />
  </svg>
);

// Custom Table Game Icon
const TableIcon = (props: any) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <rect x="2" y="5" width="20" height="14" rx="7" />
    <path d="M6 12h12" strokeDasharray="2 2" />
    <circle cx="12" cy="12" r="3" />
  </svg>
);

// Custom Arcade Joystick Icon
const ArcadeIcon = (props: any) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <circle cx="12" cy="6" r="3" fill="currentColor" />
    <path d="M12 9v8" />
    <rect x="6" y="17" width="12" height="4" rx="1" />
    <circle cx="9" cy="19" r="1" fill="currentColor" />
    <circle cx="15" cy="19" r="1" fill="currentColor" />
  </svg>
);

// Custom Lottery 8-ball Icon
const LotteryIcon = (props: any) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <circle cx="12" cy="12" r="10" />
    <circle cx="12" cy="12" r="4.5" fill="white" />
    <text x="12" y="14.5" fontSize="7.5" fontWeight="900" fill="black" textAnchor="middle" fontFamily="sans-serif">8</text>
  </svg>
);

// Custom VIP Icon
const VipIcon = (props: any) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M12 2L15 5H19V9L22 12L19 15V19H15L12 22L9 19H5V15L2 12L5 9V5H9L12 2Z" />
    <polygon points="12 8 13.5 11 17 11.5 14.5 14 15 17.5 12 15.8 9 17.5 9.5 14 7 11.5 10.5 11 12 8" fill="currentColor" />
  </svg>
);

// Custom Download Icon
const DownloadIcon = (props: any) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <rect x="4" y="4" width="16" height="16" rx="2" />
    <path d="M12 8v8" />
    <path d="m9 13 3 3 3-3" />
  </svg>
);

// Custom Affiliates Icon
const AffiliatesIcon = (props: any) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <circle cx="18" cy="5" r="3" />
    <circle cx="6" cy="12" r="3" />
    <circle cx="18" cy="19" r="3" />
    <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" />
    <line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
  </svg>
);

// Custom Partnerships Icon
const PartnershipsIcon = (props: any) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="m11 17 2 2a1 1 0 0 0 1.4 0l4-4a1 1 0 0 0 0-1.4l-2-2" />
    <path d="m13 14 5-5a1 1 0 0 0 0-1.4l-2-2a1 1 0 0 0-1.4 0l-5 5" />
    <path d="m8 14-2-2a1 1 0 0 0-1.4 0l-3 3a1 1 0 0 0 0 1.4l2 2a1 1 0 0 0 1.4 0Z" />
    <path d="M8.5 9.5 11 12" />
  </svg>
);

const FacebookIcon = (props: any) => (
  <svg {...props} viewBox="0 0 24 24" fill="currentColor">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
  </svg>
);

type TranslationKey = keyof typeof translations.English;

export const Sidebar = ({ 
  isOpen, 
  onClose, 
  activeCategory, 
  setActiveCategory, 
  onWinnerClick, 
  onContactClick, 
  onCSClick,
  isLoggedIn = false,
  user,
  openAuth,
  onLogout
}: SidebarProps) => {
  const { t } = useLanguage();
  const navigate = useNavigate();

  const gridItems = [
    { id: "hot", key: "hot", icon: FlameGamepadIcon, label: t("hot") || "HOT", isCategory: true },
    { id: "sports", key: "sports", icon: SportsIcon, label: t("sports") || "Sports", isCategory: true },
    { id: "casino", key: "casino", icon: CasinoIcon, label: t("casino") || "Casino", isCategory: true },
    { id: "slot", key: "slot", icon: SlotIcon, label: t("slot") || "Slot", isCategory: true },
    { id: "crash", key: "crash", icon: CrashIcon, label: t("crash") || "Crash", isCategory: true },
    { id: "table", key: "table", icon: TableIcon, label: t("table") || "Table", isCategory: true },
    { id: "fishing", key: "fishing", icon: Fish, label: t("fishing") || "Fishing", isCategory: true },
    { id: "arcade", key: "arcade", icon: ArcadeIcon, label: t("arcade") || "Arcade", isCategory: true },
    { id: "lottery", key: "lottery", icon: LotteryIcon, label: t("lottery") || "Lottery", isCategory: true },
    { id: "promotions", icon: Gift, label: t("promotions") || "Promotions", path: "/promotion" },
    { id: "vip", icon: VipIcon, label: t("vip") || "VIP", path: "/vip" },
    { id: "download", icon: DownloadIcon, label: t("download") || "Download", path: "/download" },
    { id: "affiliates", icon: AffiliatesIcon, label: t("affiliates") || "Affiliates", path: "/affiliate" },
    { id: "partnerships", icon: PartnershipsIcon, label: t("partnerships") || "Partnerships", path: "/partnership" },
    { id: "winner", icon: Trophy, label: t("winnerBoard") || "Winner Board", displayLabel: "Winner B..." },
  ];

  return (
    <>
      {/* Backdrop */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => { setActiveCategory(null); onClose(); }}
            className="fixed inset-0 z-[800] bg-black/60 backdrop-blur-sm"
          />
        )}
      </AnimatePresence>

      {/* Close Button ("X") - Top Right of screen overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.button 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            onClick={onClose} 
            className="fixed top-4 z-[825] text-white/80 hover:text-white transition-colors cursor-pointer p-2 focus:outline-none transition-all duration-300"
            style={{ 
              left: activeCategory ? "324px" : "242px"
            }}
          >
            <X className="h-7 w-7" strokeWidth={2.5} />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Main Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className={`fixed z-[820] flex flex-col shadow-2xl overflow-hidden
              top-1.5 bottom-1.5 left-1.5 w-[230px] pb-4 transition-all duration-300
              md:inset-y-0 md:left-0 md:w-65 md:rounded-none md:border-none md:border-r md:border-white/5 md:pb-0 
              ${activeCategory ? "rounded-l-lg rounded-r-none border-r-0" : "rounded-lg"}`}
          >
            {/* Header Widget Section */}
            <div className="p-3 shrink-0">
              <div className="bg-[#1e2439] rounded-lg border border-white/5 overflow-hidden shadow-lg">
                {/* Header blue top part */}
                <div className="flex items-center gap-3 p-3 bg-[#232a44] border-b border-white/5">
                  <div className="h-10 w-10 flex items-center justify-center shrink-0">
                    <img 
                      src="/src/assets/logo/logo_3d.png" 
                      alt="Logo" 
                      className="h-full w-auto object-contain drop-shadow-md"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = "/src/assets/logo/logo.webp";
                      }}
                    />
                  </div>
                  {isLoggedIn ? (
                    <div className="flex flex-col min-w-0">
                      <span className="text-white/50 text-[9px] font-bold uppercase leading-none">Hi Welcome</span>
                      <span className="text-white text-xs font-black tracking-tight truncate mt-0.5">{user?.username}</span>
                    </div>
                  ) : (
                    <span className="text-white text-[13px] font-black uppercase tracking-tight">Hi Welcome</span>
                  )}
                </div>

                {/* Banner bottom yellow part */}
                <div className="h-10 bg-[#c9a33d] flex items-center">
                  {!isLoggedIn ? (
                    <div className="flex w-full divide-x divide-[#161b2e]/10 h-full">
                      <button 
                        onClick={() => { openAuth?.("login"); onClose(); }}
                        className="flex-1 flex items-center justify-center gap-1.5 text-[#161b2e] font-black text-[11px] uppercase tracking-wide h-full active:bg-black/5 cursor-pointer"
                      >
                        <LogIn className="h-4 w-4 stroke-[2.5]" />
                        LOGIN
                      </button>
                      <button 
                        onClick={() => { openAuth?.("signup"); onClose(); }}
                        className="flex-1 flex items-center justify-center gap-1.5 text-[#161b2e] font-black text-[11px] uppercase tracking-wide h-full active:bg-black/5 cursor-pointer"
                      >
                        <UserPlus className="h-4 w-4 stroke-[2.5]" />
                        SIGN UP
                      </button>
                    </div>
                  ) : (
                    <div className="w-full flex items-center justify-between px-3 text-[#161b2e]">
                      <div className="flex items-center gap-1.5">
                        <CreditCard className="h-3.5 w-3.5 stroke-[2.5]" />
                        <span className="text-[10px] font-black uppercase tracking-wider">Balance</span>
                      </div>
                      <span className="text-xs font-black italic">৳{user?.balance || "0"}</span>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Search Bar */}
            <div className="px-3 pb-2 shrink-0">
              <div className="bg-[#121624] border border-white/5 rounded-md flex items-center px-3 h-10 gap-2">
                <input 
                  placeholder={t("searchGames") || "Search Games"} 
                  className="bg-transparent flex-1 text-xs text-white outline-none placeholder:text-white/30" 
                />
                <Search className="h-4 w-4 text-white/30" />
              </div>
            </div>

            {/* Scrollable Categories Scroll Area */}
            <div className="flex-1 overflow-y-auto px-3 py-1.5 no-scrollbar space-y-3">
              {/* Category Grid */}
              <div className="grid grid-cols-3 gap-2">
                {gridItems.map((item) => {
                  const Icon = item.icon;
                  const isCat = item.isCategory;
                  const labelText = item.displayLabel || item.label;

                  const ButtonContent = () => (
                    <div className="flex flex-col items-center justify-center gap-1.5 py-3 text-center">
                      <Icon className={`h-5.5 w-5.5 transition-transform group-hover:scale-110 ${activeCategory === item.id ? "text-white" : "text-[#c9a33d]"}`} />
                      <span className="text-[10px] font-bold text-white tracking-tight truncate w-full px-0.5">
                        {labelText}
                      </span>
                    </div>
                  );

                  if (isCat) {
                    return (
                      <button
                        key={item.id}
                        onClick={() => setActiveCategory(activeCategory === item.id ? null : item.id)}
                        className={`group border border-white/5 rounded-[4px] shadow-sm transition-all active:scale-95 cursor-pointer relative 
                          ${activeCategory === item.id ? "bg-white/20" : "bg-[#1b223c] hover:bg-[#232c4d]"}`}
                      >
                        <ButtonContent />
                      </button>
                    );
                  } else if (item.id === "winner") {
                    return (
                      <button
                        key={item.id}
                        onClick={() => {
                          onWinnerClick?.();
                          onClose();
                        }}
                        className="group bg-[#1b223c] hover:bg-[#232c4d] border border-white/5 rounded-[4px] shadow-sm transition-all active:scale-95 cursor-pointer"
                      >
                        <ButtonContent />
                      </button>
                    );
                  } else {
                    return (
                      <Link
                        key={item.id}
                        to={item.path || "#"}
                        onClick={onClose}
                        className="group bg-[#1b223c] hover:bg-[#232c4d] border border-white/5 rounded-[4px] shadow-sm transition-all active:scale-95 flex flex-col justify-center items-center"
                      >
                        <ButtonContent />
                      </Link>
                    );
                  }
                })}
              </div>

              {/* Contact Card Section */}
              <div className="bg-[#1e2439] rounded-lg border border-white/5 p-3 shadow-md">
                <div className="grid grid-cols-3 gap-y-4 gap-x-2">
                  <button 
                    onClick={() => { onCSClick?.(); onClose(); }}
                    className="flex flex-col items-center justify-center text-center group cursor-pointer active:scale-95 transition-transform"
                  >
                    <Phone className="h-5.5 w-5.5 text-[#f0c43e]" />
                    <span className="text-[10px] font-bold text-white mt-1.5">24-7 CS</span>
                  </button>
                  <a 
                    href="https://t.me/mcw" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col items-center justify-center text-center group cursor-pointer active:scale-95 transition-transform"
                  >
                    <Send className="h-5.5 w-5.5 text-[#229ED9]" />
                    <span className="text-[10px] font-bold text-white mt-1.5">Telegram</span>
                  </a>
                  <a 
                    href="https://facebook.com/mcw" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col items-center justify-center text-center group cursor-pointer active:scale-95 transition-transform"
                  >
                    <FacebookIcon className="h-5.5 w-5.5 text-[#1877F2]" />
                    <span className="text-[10px] font-bold text-white mt-1.5">Facebook</span>
                  </a>
                  <a 
                    href="mailto:support@mcw.com" 
                    className="flex flex-col items-center justify-center text-center group cursor-pointer active:scale-95 transition-transform"
                  >
                    <Mail className="h-5.5 w-5.5 text-[#f0c43e]" />
                    <span className="text-[10px] font-bold text-white mt-1.5">Email</span>
                  </a>
                </div>
              </div>

              {/* Bottom Nav Row Card */}
              <div className="bg-[#1e2439] rounded-lg border border-white/5 p-3 shadow-md flex items-center justify-around">
                <button 
                  onClick={() => { navigate("/"); onClose(); }} 
                  className="flex items-center gap-2 text-white font-bold text-[11px] uppercase cursor-pointer active:scale-95 transition-transform"
                >
                  <Home className="h-5 w-5 text-[#c9a33d]" />
                  <span>Home</span>
                </button>

                <div className="w-px h-5 bg-white/10" />

                {isLoggedIn ? (
                  <button 
                    onClick={() => { onLogout?.(); onClose(); }} 
                    className="flex items-center gap-2 text-white font-bold text-[11px] uppercase cursor-pointer active:scale-95 transition-transform"
                  >
                    <LogOut className="h-5 w-5 text-[#c9a33d]" />
                    <span>Logout</span>
                  </button>
                ) : (
                  <button 
                    onClick={() => { openAuth?.("login"); onClose(); }} 
                    className="flex items-center gap-2 text-white font-bold text-[11px] uppercase cursor-pointer active:scale-95 transition-transform"
                  >
                    <LogIn className="h-5 w-5 text-[#c9a33d]" strokeWidth={2.5} />
                    <span>Login</span>
                  </button>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Games Panel on the right of the main drawer */}
      <AnimatePresence>
        {isOpen && activeCategory && (
          <motion.div
            initial={{ x: "-50px", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: "-50px", opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="fixed z-[819] flex flex-col bg-white/[0.04] backdrop-blur-md shadow-2xl overflow-hidden
              top-1.5 bottom-1.5 left-[236px] w-[80px] rounded-r-lg border border-l-0 border-white/10 pb-4"
          >
            {activeCategory === "contact" ? (
              <div className="flex flex-col items-center gap-5 py-4 px-1 overflow-y-auto no-scrollbar h-full">
                {/* Back Button to close sub-menu */}
                <button
                  onClick={() => setActiveCategory(null)}
                  className="h-11 w-11 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-[#c9a33d] hover:text-white transition-all active:scale-95 cursor-pointer shrink-0"
                  title="Back"
                >
                  <ArrowLeft className="h-5 w-5" strokeWidth={2.5} />
                </button>
                {[
                  { icon: Phone, label: t("support247") || "24-7 CS", color: "#f0c43e", bg: "rgba(240, 196, 62, 0.1)" },
                  { icon: Send, label: t("telegram") || "Telegram", color: "#229ED9", bg: "rgba(34, 158, 217, 0.1)" },
                  { icon: FacebookIcon, label: t("facebook") || "Facebook", color: "#1877F2", bg: "rgba(24, 119, 242, 0.1)" },
                  { icon: Mail, label: t("email") || "Email", color: "#f0c43e", bg: "rgba(240, 196, 62, 0.1)" }
                ].map((item, i) => (
                  <button
                    key={i}
                    onClick={item.label === (t("support247") || "24-7 CS") ? () => { onCSClick?.(); onClose(); setActiveCategory(null); } : undefined}
                    className="flex flex-col items-center gap-1.5 group cursor-pointer active:scale-95 transition-all w-full"
                  >
                    <div 
                      className="h-11 w-11 rounded-lg flex items-center justify-center transition-all group-hover:scale-105 border border-white/5 shadow-md"
                      style={{ backgroundColor: item.bg }}
                    >
                      <item.icon className="h-5.5 w-5.5" style={{ color: item.color }} />
                    </div>
                    <span className="text-white/80 font-bold uppercase text-[7px] tracking-tight text-center leading-tight truncate w-full px-0.5">
                      {item.label}
                    </span>
                  </button>
                ))}
              </div>
            ) : (
              <div className="flex flex-col items-center gap-4 py-4 px-1 overflow-y-auto no-scrollbar h-full">
                {/* Back Button to close sub-menu */}
                <button
                  onClick={() => setActiveCategory(null)}
                  className="h-11 w-11 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-[#c9a33d] hover:text-white transition-all active:scale-95 cursor-pointer shrink-0"
                  title="Back"
                >
                  <ArrowLeft className="h-5 w-5" strokeWidth={2.5} />
                </button>
                {FAVOURITES.slice(0, 12).map((game, i) => {
                  const navImages = [
                    "/src/assets/navimage/imgi_171_darkIcon.png",
                    "/src/assets/navimage/imgi_188_darkIcon.png",
                    "/src/assets/navimage/imgi_190_darkIcon.png",
                    "/src/assets/navimage/imgi_191_darkIcon.png",
                    "/src/assets/navimage/imgi_192_darkIcon.png",
                    "/src/assets/navimage/imgi_193_darkIcon.png",
                    "/src/assets/navimage/imgi_194_darkIcon.webp",
                    "/src/assets/navimage/imgi_195_darkIcon.webp",
                    "/src/assets/navimage/imgi_197_darkIcon.webp",
                    "/src/assets/navimage/imgi_198_darkIcon.webp",
                    "/src/assets/navimage/imgi_199_darkIcon.webp",
                    "/src/assets/navimage/imgi_202_darkIcon.webp"
                  ];
                  const imageSrc = navImages[i % navImages.length];

                  return (
                    <div 
                      key={i} 
                      onClick={() => { setActiveCategory(null); onClose(); }}
                      className="flex flex-col items-center gap-1.5 group cursor-pointer active:scale-95 transition-transform w-full"
                    >
                      <div className="aspect-square w-11 rounded-lg bg-[#1a2135] border border-white/10 shadow-lg overflow-hidden group-hover:border-casino-gold/50 transition-colors shrink-0">
                        <img src={imageSrc} alt={game.n} className="w-full h-full object-cover p-0.5 transition-transform duration-500 group-hover:scale-110" />
                      </div>
                      <p className="text-[7.5px] font-bold text-white/70 text-center leading-tight group-hover:text-casino-gold transition-colors truncate w-full px-0.5 uppercase tracking-tighter">
                        {game.n.length > 12 ? `${game.n.slice(0, 10)}...` : game.n}
                      </p>
                    </div>
                  );
                })}
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
