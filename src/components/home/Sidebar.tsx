import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, ChevronRight, Gift, Trophy, Star, Download, Share2, Handshake, Phone, X, ArrowLeft, Send, Mail, Flame, Dices, Gamepad2, Gamepad, LayoutGrid, Fish, Ticket } from "lucide-react";
import { Link } from "react-router-dom";
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
}

const FacebookIcon = (props: any) => (
  <svg {...props} viewBox="0 0 24 24" fill="currentColor">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
  </svg>
);

type TranslationKey = keyof typeof translations.English;

export const Sidebar = ({ isOpen, onClose, activeCategory, setActiveCategory, onWinnerClick, onContactClick, onCSClick }: SidebarProps) => {
  const { t } = useLanguage();

  const mainItems = [
    { id: "hot", key: "hot", icon: Flame },
    { id: "sports", key: "sports", icon: Trophy },
    { id: "casino", key: "casino", icon: Dices },
    { id: "slot", key: "slot", icon: Gamepad2 },
    { id: "crash", key: "crash", icon: Gamepad },
    { id: "table", key: "table", icon: LayoutGrid },
    { id: "fishing", key: "fishing", icon: Fish },
    { id: "arcade", key: "arcade", icon: LayoutGrid },
    { id: "lottery", key: "lottery", icon: Ticket },
  ];

  const quickLinks = [
    { id: "promotions", icon: Gift, label: t("promotions"), path: "/promotion" },
    { id: "winner", icon: Trophy, label: t("winnerBoard") },
    { id: "vip", icon: Star, label: t("vip"), path: "/vip" },
    { id: "download", icon: Download, label: t("download"), path: "/download" },
    { id: "affiliates", icon: Share2, label: t("affiliates"), path: "/affiliate" },
    { id: "partnerships", icon: Handshake, label: t("partnerships"), path: "/partnership" },
  ];

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => { setActiveCategory(null); onClose(); }}
            className="fixed inset-0 z-[110] bg-black/60 backdrop-blur-sm"
          />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="fixed inset-y-0 left-0 z-[120] w-[260px] bg-[#161b2e] border-r border-white/5 flex flex-col shadow-2xl pb-16 md:pb-0"
          >
            {/* Sidebar Header */}
            <div className="flex items-center justify-between px-3 h-[54px] border-b border-white/5 shrink-0">
              <span className="text-casino-gold font-black text-sm uppercase tracking-tighter">{t("navigation")}</span>
              <button onClick={onClose} className="h-8 w-8 rounded-full bg-white/5 flex items-center justify-center text-white/40 hover:text-white transition-colors">
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="p-2.5 border-b border-white/5">
              <div className="bg-[#0e1220] border border-white/10 rounded flex items-center px-2.5 h-8 gap-2">
                <Search className="h-3.5 w-3.5 text-white/40" />
                <input placeholder={t("searchGames")} className="bg-transparent flex-1 text-[11px] outline-none placeholder:text-white/30" />
              </div>
            </div>

            <div className="flex-1 overflow-y-auto py-1 no-scrollbar">
              {mainItems.map((item) => {
                const isActive = activeCategory === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => setActiveCategory(isActive ? null : item.id)}
                    className={`w-full flex items-center justify-between px-4 py-2.5 transition-all relative border-y border-white/5 ${isActive ? "bg-login-grad text-white shadow-xl shadow-black/20 italic" : "text-white hover:bg-white/5"}`}
                  >
                    <div className="flex items-center gap-3">
                      <item.icon className={`h-4 w-4 ${isActive ? 'text-white' : 'text-casino-gold'}`} />
                      <span className="text-[11px] font-black uppercase tracking-widest">{t(item.key as TranslationKey)}</span>
                    </div>
                    <ChevronRight className={`h-3 w-3 opacity-20 transition-transform ${isActive ? "rotate-90 opacity-100" : ""}`} />
                  </button>
                );
              })}

              <div className="mt-2 pt-2 border-t border-white/5 space-y-0.5">
                {quickLinks.map((item) => {
                  const isWinnerBoard = item.id === "winner";
                  return (
                    <Link
                      key={item.id}
                      to={item.path || "#"}
                      onClick={(e) => {
                        if (isWinnerBoard) {
                          e.preventDefault();
                          onWinnerClick?.();
                        }
                        onClose();
                      }}
                      className="w-full flex items-center gap-3 px-3 py-2 text-white hover:bg-white/5 font-bold text-[11px] uppercase tracking-tight group transition-all"
                    >
                      <item.icon className="h-4 w-4 text-casino-gold/60 group-hover:scale-110 transition-transform" />
                      <span>{item.label}</span>
                    </Link>
                  );
                })}
              </div>
            </div>

            <div className="p-3 border-t border-white/5 bg-[#1e2439]">
              <button 
                onClick={() => setActiveCategory("contact")}
                className={`w-full flex items-center justify-between px-3 py-2.5 rounded transition-all group ${activeCategory === "contact" ? "bg-casino-gold/10 text-casino-gold" : "text-white/80 hover:bg-white/5"}`}
              >
                <div className="flex items-center gap-3">
                  <Phone className={`h-4 w-4 ${activeCategory === "contact" ? "text-casino-gold" : "text-casino-gold/60"} group-hover:rotate-12 transition-transform`} />
                  <span className="font-bold text-[12px] uppercase tracking-tight">{t("contactUs")}</span>
                </div>
                <ChevronRight className={`h-4 w-4 opacity-20 transition-transform ${activeCategory === "contact" ? "rotate-90 opacity-100" : ""}`} />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Sub Menu Overlay on Mobile */}
      <AnimatePresence>
        {isOpen && activeCategory && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className={`fixed inset-y-0 left-0 right-0 md:left-[260px] md:w-[320px] z-[130] bg-[#1e2439] border-l border-white/5 overflow-y-auto no-scrollbar shadow-[-20px_0_50px_rgba(0,0,0,0.5)] flex flex-col`}
          >
            {/* Sub Menu Header */}
            <div className="flex items-center gap-3 px-4 h-[54px] border-b border-white/5 shrink-0 bg-[#161b2e]">
              <button onClick={() => setActiveCategory(null)} className="h-8 w-8 rounded-full bg-white/5 flex items-center justify-center text-white/60 hover:text-white transition-colors">
                <ArrowLeft className="h-5 w-5" />
              </button>
              <span className="text-white font-black text-sm uppercase tracking-tight">
                {activeCategory === "contact"
                  ? t("customerSupport")
                  : `${t((activeCategory ?? "hot") as TranslationKey)} ${t("games")}`}
              </span>
            </div>

            <div className="p-3">
              {activeCategory === "contact" ? (
                <div className="grid grid-cols-2 gap-4 p-2">
                  {[
                    { icon: Phone, label: t("support247"), color: "#f0c43e", bg: "rgba(240, 196, 62, 0.1)" },
                    { icon: Send, label: t("telegram"), color: "#229ED9", bg: "rgba(34, 158, 217, 0.1)" },
                    { icon: FacebookIcon, label: t("facebook"), color: "#1877F2", bg: "rgba(24, 119, 242, 0.1)" },
                    { icon: Mail, label: t("email"), color: "#f0c43e", bg: "rgba(240, 196, 62, 0.1)" }
                  ].map((item, i) => (
                    <button
                      key={i}
                      onClick={item.label === t("support247") ? () => { onCSClick?.(); onClose(); setActiveCategory(null); } : undefined}
                      className="aspect-square rounded-2xl bg-[#232a44] border border-white/5 flex flex-col items-center justify-center gap-3 hover:border-white/20 transition-all group active:scale-95"
                    >
                      <div 
                        className="h-12 w-12 rounded-xl flex items-center justify-center transition-all group-hover:scale-110 shadow-lg"
                        style={{ backgroundColor: item.bg }}
                      >
                        <item.icon className="h-6 w-6" style={{ color: item.color }} />
                      </div>
                      <span className="text-white/80 font-black uppercase text-[9px] tracking-widest italic">
                        {item.label}
                      </span>
                    </button>
                  ))}
                </div>
              ) : (
                <div className="grid grid-cols-3 gap-2.5">
                  {FAVOURITES.slice(0, 19).map((game, i) => {
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
                      "/src/assets/navimage/imgi_202_darkIcon.webp",
                      "/src/assets/navimage/imgi_207_darkIcon.png",
                      "/src/assets/navimage/imgi_208_darkIcon.webp",
                      "/src/assets/navimage/imgi_210_darkIcon.png",
                      "/src/assets/navimage/imgi_250_provider-awcmladyluck.png",
                      "/src/assets/navimage/imgi_263_provider-ugv3.png",
                      "/src/assets/navimage/imgi_266_provider-awcmhotroad.png",
                      "/src/assets/navimage/imgi_267_provider-awcmiloveu.png"
                    ];
                    return (
                      <div 
                        key={i} 
                        onClick={() => { setActiveCategory(null); onClose(); }}
                        className="flex flex-col items-center gap-1.5 group cursor-pointer active:scale-95 transition-transform"
                      >
                        <div className="aspect-square w-full rounded-xl bg-[#1a2135] border border-white/10 shadow-lg relative overflow-hidden group-hover:border-casino-gold/50 transition-colors">
                          <img src={navImages[i]} alt={game.n} className="w-full h-full object-cover p-1 transition-transform duration-500 group-hover:scale-110" />
                        </div>
                        <p className="text-[8px] font-bold text-white/40 text-center leading-tight group-hover:text-casino-gold transition-colors truncate w-full px-0.5 uppercase tracking-tighter">{game.n}</p>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
