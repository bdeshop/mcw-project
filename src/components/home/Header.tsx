import React, { useState, useRef, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, ChevronDown, CreditCard, RefreshCw, User, LogOut, Wallet, Gift, Users, Trophy, Calendar, ClipboardList, Lock, Mail, FileText, PieChart, Headphones, ChevronRight, X } from "lucide-react";
import { NAV, FAVOURITES } from "../../data/casinoData";
import { useLanguage } from "../../context/LanguageContext";
import { motion, AnimatePresence } from "framer-motion";

interface HeaderProps {
  onMenuClick: () => void;
  onLoginClick: () => void;
  onSignupClick: () => void;
  onLangClick: () => void;
  onDepositClick?: () => void;
  onWithdrawClick?: () => void;
  onSpinClick?: () => void;
  onBonusClick?: () => void;
  onReferralClick?: () => void;
  onWinnerClick?: () => void;
  onStreakClick?: () => void;
  onBettingClick?: () => void;
  onTurnoverClick?: () => void;
  onTransactionClick?: () => void;
  onInfoClick?: () => void;
  onPasswordClick?: () => void;
  onInboxClick?: () => void;
  onContactClick?: () => void;
  isLoggedIn?: boolean;
  user?: {
    username: string;
    balance: string;
    vipPoints: string;
  };
  onLogout?: () => void;
  hideAuth?: boolean;
}

const HOT_GAMES = [
  { name: "Lucky Tamarin", icon: "/src/assets/navimage/imgi_171_darkIcon.png", grad: "from-[#2ecc71] to-[#27ae60]" },
  { name: "Fortune Garuda 500", icon: "/src/assets/navimage/imgi_188_darkIcon.png", grad: "from-[#e74c3c] to-[#c0392b]" },
  { name: "NCVIP Gates of Olympus 1000", icon: "/src/assets/navimage/imgi_190_darkIcon.png", grad: "from-[#3498db] to-[#2980b9]" },
  { name: "NCVIP Super Elements", icon: "/src/assets/navimage/imgi_191_darkIcon.png", grad: "from-[#9b59b6] to-[#8e44ad]" },
  { name: "FlyX", icon: "/src/assets/navimage/imgi_192_darkIcon.png", grad: "from-[#f1c40f] to-[#f39c12]" },
  { name: "Pocket Ace", icon: "/src/assets/navimage/imgi_193_darkIcon.png", grad: "from-[#34495e] to-[#2c3e50]" },
  { name: "Aztec Gems", icon: "/src/assets/navimage/imgi_194_darkIcon.webp", grad: "from-[#e67e22] to-[#d35400]" },
  { name: "24D Spin", icon: "/src/assets/navimage/imgi_195_darkIcon.webp", grad: "from-[#1abc9c] to-[#16a085]" },
  { name: "NC Bountiful Birds", icon: "/src/assets/navimage/imgi_197_darkIcon.webp", grad: "from-[#95a5a6] to-[#7f8c8d]" },
  { name: "Super Ace Speed Exclusive", icon: "/src/assets/navimage/imgi_198_darkIcon.webp", grad: "from-[#d35400] to-[#c0392b]" },
  { name: "Fortune Ace Super Scatter", icon: "/src/assets/navimage/imgi_199_darkIcon.webp", grad: "from-[#f1c40f] to-[#d35400]" },
  { name: "NCVIP Aviator", icon: "/src/assets/navimage/imgi_202_darkIcon.webp", grad: "from-[#e74c3c] to-[#c0392b]" },
  { name: "Fortune Gems 500", icon: "/src/assets/navimage/imgi_207_darkIcon.png", grad: "from-[#f1c40f] to-[#f39c12]" },
  { name: "Super Ace", icon: "/src/assets/navimage/imgi_208_darkIcon.webp", grad: "from-[#e74c3c] to-[#c0392b]" },
  { name: "Fruity Bonanza", icon: "/src/assets/navimage/imgi_210_darkIcon.png", grad: "from-[#e91e63] to-[#ad1457]" },
  { name: "Wild Bounty Showdown", icon: "/src/assets/navimage/imgi_250_provider-awcmladyluck.png", grad: "from-[#795548] to-[#5d4037]" },
  { name: "Boxing King", icon: "/src/assets/navimage/imgi_263_provider-ugv3.png", grad: "from-[#f44336] to-[#d32f2f]" },
  { name: "Magic Ace WILD LOCK", icon: "/src/assets/navimage/imgi_266_provider-awcmhotroad.png", grad: "from-[#673ab7] to-[#512da8]" },
  { name: "Anubis Wrath", icon: "/src/assets/navimage/imgi_267_provider-awcmiloveu.png", grad: "from-[#607d8b] to-[#455a64]" },
];

export const Header: React.FC<HeaderProps> = ({ onMenuClick, onLoginClick, onSignupClick, onLangClick, onDepositClick, onWithdrawClick, onSpinClick, onBonusClick, onReferralClick, onWinnerClick, onStreakClick, onBettingClick, onTurnoverClick, onTransactionClick, onInfoClick, onPasswordClick, onInboxClick, onContactClick, isLoggedIn, user, onLogout, hideAuth }) => {
  const { t } = useLanguage();
  const location = useLocation();
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const megaMenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsProfileOpen(false);
      }
      if (megaMenuRef.current && !megaMenuRef.current.contains(event.target as Node)) {
        setActiveCategory(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Prevent background scrolling when Mega Menu or Sub-menu is active
  useEffect(() => {
    // Only hide overflow if it's NOT Promotions (since Promotions navigates to a new page)
    if (activeCategory && activeCategory !== "Promotions") {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [activeCategory]);

  const MegaMenu = () => (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="absolute top-full left-0 w-full bg-[#161b2e]/98 backdrop-blur-2xl border-t border-white/10 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)] z-50 overflow-hidden"
    >
      <div className="max-w-[1200px] mx-auto py-20 px-6">
        <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-10 gap-x-4 gap-y-10">
          {HOT_GAMES.map((game, i) => (
            <motion.div
              key={game.name}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.01 }}
              className="flex flex-col items-center gap-3 group cursor-pointer"
            >
              <div className="relative h-[85px] w-[85px] flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                <img
                  src={game.icon}
                  alt={game.name}
                  className="w-full h-full object-contain filter drop-shadow-[0_5px_15px_rgba(0,0,0,0.5)]"
                />
              </div>
              <span className="text-[11px] font-bold text-white group-hover:text-casino-gold text-center leading-tight transition-colors uppercase tracking-tight">
                {game.name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
      <div className="h-24 bg-gradient-to-t from-black/40 to-transparent pointer-events-none" />
    </motion.div>
  );

  const ProfileDropdown = () => (
    <div className="absolute right-0 top-[calc(100%+12px)] w-[280px] bg-[#232a44] rounded-md shadow-2xl border border-white/10 overflow-hidden z-50 flex flex-col max-h-[480px]">
      <div className="p-5 pb-4 shrink-0">
        <div className="flex flex-col gap-1">
          <span className="text-white font-black text-[17px] tracking-wide">{user?.username}</span>
          <div className="flex flex-col mt-1">
            <span className="text-white/80 text-[13px] font-medium">VIP Points</span>
            <div className="flex items-center gap-2 mt-0.5">
              <span className="text-[#C9A33D] font-black text-xl">0</span>
              <button className="text-white/60 hover:text-white transition-colors">
                <RefreshCw className="h-3.5 w-3.5" />
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="h-px bg-white/10 mx-5 mb-2" />
      <div className="flex-1 overflow-y-auto custom-scrollbar py-2">
        <div className="space-y-1 px-2">
          {[
            { icon: CreditCard, label: "Deposit", action: onDepositClick },
            { icon: Wallet, label: "Withdrawal", action: onWithdrawClick },
            { icon: RefreshCw, label: "Free Spin", action: onSpinClick },
          ].map((item, i) => (
            <button
              key={i}
              onClick={() => { item.action?.(); setIsProfileOpen(false); }}
              className="w-full flex items-center gap-5 px-4 py-3 rounded hover:bg-white/5 transition-all text-white group"
            >
              <item.icon className="h-5 w-5 text-[#C9A33D]" />
              <span className="text-[14px] font-bold tracking-wide">{item.label}</span>
            </button>
          ))}
        </div>
        <div className="h-px bg-white/10 mx-5 my-3" />
        <div className="space-y-1 px-2">
          {[
            { icon: Gift, label: "Real-Time Bonus", action: onBonusClick },
            { icon: Users, label: "Referral", action: onReferralClick },
            { icon: Trophy, label: "Winner Board", action: onWinnerClick },
            { icon: Calendar, label: "Daily Streak Challenge", badge: true, action: onStreakClick },
            { icon: FileText, label: "Betting Records", action: onBettingClick },
            { icon: PieChart, label: "Turnover", action: onTurnoverClick },
            { icon: ClipboardList, label: "Transaction Records", action: onTransactionClick },
          ].map((item, i) => (
            <button
              key={i}
              onClick={() => { item.action?.(); setIsProfileOpen(false); }}
              className="w-full flex items-center justify-between px-4 py-3 rounded hover:bg-white/5 transition-all text-white group"
            >
              <div className="flex items-center gap-5">
                <item.icon className="h-5 w-5 text-[#C9A33D]" />
                <span className="text-[14px] font-bold tracking-wide leading-tight text-left">{item.label}</span>
              </div>
              {item.badge && (
                <div className="h-5 w-5 bg-[#FF4D4D] rounded-full flex items-center justify-center border-2 border-[#1e2439] shadow-lg shrink-0">
                  <span className="text-white text-[10px] font-black">!</span>
                </div>
              )}
            </button>
          ))}
        </div>
        <div className="h-px bg-white/10 mx-5 my-3" />
        <div className="space-y-1 px-2">
          {[
            { icon: User, label: "Personal Info", action: onInfoClick },
            { icon: Lock, label: "Change Password", action: onPasswordClick },
            { icon: Mail, label: "Inbox", badgeValue: "0", action: onInboxClick },
          ].map((item, i) => (
            <button
              key={i}
              onClick={() => { item.action?.(); setIsProfileOpen(false); }}
              className="w-full flex items-center justify-between px-4 py-3 rounded hover:bg-white/5 transition-all text-white group"
            >
              <div className="flex items-center gap-5">
                <item.icon className="h-5 w-5 text-[#C9A33D]" />
                <span className="text-[14px] font-bold tracking-wide leading-tight text-left">{item.label}</span>
              </div>
              {item.badgeValue !== undefined && (
                <div className="h-5 w-5 bg-[#FF4D4D] rounded-full flex items-center justify-center border-2 border-[#1e2439] shadow-lg shrink-0">
                  <span className="text-white text-[10px] font-black">{item.badgeValue}</span>
                </div>
              )}
            </button>
          ))}
        </div>
        <div className="h-px bg-white/10 mx-5 my-3" />
        <div className="px-2 pb-2">
          <button
            onClick={() => { onLogout?.(); setIsProfileOpen(false); }}
            className="w-full flex items-center gap-5 px-4 py-4 rounded hover:bg-white/5 transition-all text-white group"
          >
            <LogOut className="h-5 w-5 text-[#C9A33D]" />
            <span className="text-[14px] font-bold tracking-wide">Log out</span>
          </button>
        </div>
      </div>
    </div>
  );

  const MobileSubMenu = () => (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      className="md:hidden fixed top-[112px] left-0 right-0 bottom-[56px] bg-casino-bg z-50 flex flex-col"
    >
      <div className="flex items-center justify-between px-3 py-2.5 border-b border-white/5 bg-[#161b2e] shrink-0">
        <div className="flex items-center gap-3">
          <button className="text-casino-gold text-[8px] font-black uppercase tracking-widest px-2 py-1 rounded border border-casino-gold/30 bg-casino-gold/5 active:bg-casino-gold/20 transition-colors">View All Games</button>
        </div>
        <button onClick={() => setActiveCategory(null)} className="h-7 w-7 rounded-full bg-white/5 flex items-center justify-center text-white/40">
          <X className="h-4.5 w-4.5" />
        </button>
      </div>
      <div className="flex-1 overflow-y-auto p-2 no-scrollbar">
        <div className="grid grid-cols-4 gap-2">
          {FAVOURITES.slice(0, 32).map((game, i) => (
            <div key={i} className="flex flex-col items-center gap-1 group cursor-pointer active:scale-95 transition-transform">
              <div className={`aspect-square w-full rounded-lg bg-linear-to-br ${game.g} border border-white/10 shadow-sm flex items-center justify-center p-0.5`}>
                <span className="text-white font-black text-[8px] text-center leading-tight drop-shadow-md">{game.n.split(' ')[0]}</span>
              </div>
            </div>
          ))}
        </div>
        <div className="h-10" />
      </div>
    </motion.div>
  );

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-[#232a44] md:bg-casino-bg border-b border-white/5 md:border-white/5 shadow-[0_8px_24px_rgba(0,0,0,0.18)] md:shadow-lg">
      <div className="container mx-auto flex items-center justify-between gap-3 px-3 md:px-4 h-16 md:h-19">
        <div className="flex items-center gap-3 md:gap-6">
          <button onClick={onMenuClick} className="text-white hover:text-casino-gold transition-colors p-2">
            <Menu className="h-5 w-5 md:h-6 md:w-6" />
          </button>
          <Link to="/" className="flex items-center gap-2.5 shrink-0 scale-90 md:scale-100 origin-left">
            <img src="/src/assets/logo/logo.webp" alt="MCW Logo" className="h-7 md:h-10 w-auto" />
          </Link>
        </div>

        <div className="flex items-center gap-4 md:gap-2.5">
          {/* Mobile CS Section */}
          <div onClick={onContactClick} className="md:hidden flex flex-col items-center cursor-pointer active:scale-95 transition-all">
            <Headphones className="h-4 w-4 text-casino-gold" />
            <span className="text-casino-gold text-[8px] font-black uppercase tracking-tighter mt-0.5 leading-none">24-7 CS</span>
          </div>

          {/* Desktop Auth */}
          <div className="hidden md:flex items-center gap-2.5">
            {!isLoggedIn ? (
              !hideAuth && (
                <div className="flex items-center gap-3">
                  <button onClick={onSignupClick} className="h-9 px-8 rounded text-white text-[13px] font-black uppercase italic bg-white/5 border border-white/10 hover:bg-white/10 transition-all shadow-inner">{t("signUp")}</button>
                  <button onClick={onLoginClick} className="h-9 px-10 rounded text-white text-[13px] font-black uppercase italic bg-login-grad hover:brightness-110 transition-all shadow-xl shadow-casino-gold/10 border border-white/5">{t("login")}</button>
                </div>
              )
            ) : (
              <div className="flex items-center gap-2">
                <button onClick={onDepositClick} className="h-9 px-4 flex items-center gap-2 bg-login-grad hover:brightness-110 text-white rounded-[4px] font-black uppercase italic text-[13px] transition-all shadow-xl shadow-casino-gold/10 border border-white/5"><CreditCard className="h-4 w-4" /><span>Deposit</span></button>
                <div className="h-9 px-3 bg-[#232a44] rounded-[4px] border border-white/5 flex items-center gap-3 transition-all"><div className="flex items-center gap-2"><RefreshCw className="h-4 w-4 text-white/70" /><div className="flex items-center gap-1.5"><span className="text-[#8E96B7] font-medium text-[13px] whitespace-nowrap">Main Wallet</span><span className="text-white font-bold text-[14px]">৳0</span></div></div></div>
                <div className="relative" ref={dropdownRef}>
                  <button onClick={() => setIsProfileOpen(!isProfileOpen)} className={`h-9 w-9 rounded-full flex items-center justify-center transition-all border ${isProfileOpen ? "bg-[#C9A33D] text-white border-[#C9A33D]" : "bg-[#232a44] text-white/80 border-white/10 hover:border-[#C9A33D]/50"}`}><User className="h-5 w-5" /></button>
                  {isProfileOpen && <ProfileDropdown />}
                </div>
              </div>
            )}
            <button onClick={onLangClick} className="h-9 w-9 rounded-full bg-[#1e2439] relative overflow-hidden border border-white/10 shrink-0 ml-1 group transition-all hover:border-casino-gold flex items-center justify-center p-1.5"><div className="h-full w-full rounded-full bg-red-600 flex items-center justify-center p-0.5 relative shadow-inner"><div className="h-2 w-2 bg-green-500 rounded-full" /></div></button>
          </div>
        </div>
      </div>

      {/* Navigation - Mobile optimized with icons above labels */}
      <nav className="hidden md:block bg-[#232a44] border-b border-white/5 relative z-40" ref={megaMenuRef}>
        <div className="h-[58px] md:h-[52px]">
          <ul className="container mx-auto flex items-center h-full px-4 overflow-x-auto no-scrollbar scroll-smooth">
            {NAV.map((n) => {
              const isPromotionPage = location.pathname === "/promotion" && n.label === "Promotions";
              const isVIPPage = location.pathname === "/vip" && n.label === "VIP";
              const isHomePage = location.pathname === "/";

              const isActive = activeCategory === n.label || isPromotionPage || isVIPPage || (!activeCategory && n.active && isHomePage);
              const Icon = n.icon;

              const ItemContent = () => (
                <div className={`flex flex-col md:flex-row items-center justify-center gap-1 md:gap-2 px-4 md:px-4 h-full transition-all whitespace-nowrap relative border-x border-white/5 ${isActive ? "text-white bg-login-grad shadow-[0_4px_15px_rgba(0,0,0,0.3)] italic" : "text-white md:hover:text-casino-gold"}`}>
                  {Icon && <Icon className={`h-4.5 w-4.5 md:h-4 md:w-4 ${isActive ? 'text-white' : 'text-white'}`} />}
                  <span className="text-[10px] md:text-[12px] font-black uppercase tracking-tight leading-none">{t(n.label.toLowerCase() as any)}</span>
                  {n.arrow && <ChevronDown className={`hidden md:block h-3.5 w-3.5 transition-transform duration-300 ${activeCategory === n.label ? "rotate-180 opacity-100" : "opacity-50"}`} />}
                </div>
              );

              return (
                <li key={n.label} className="h-full flex items-center shrink-0">
                  {n.label === "Promotions" || n.label === "VIP" ? (
                    <Link
                      to={n.label === "VIP" ? "/vip" : "/promotion"}
                      className="h-full"
                      onClick={() => setActiveCategory(null)}
                    >
                      <ItemContent />
                    </Link>
                  ) : (
                    <button onClick={() => setActiveCategory(activeCategory === n.label ? null : n.label)} className="h-full"><ItemContent /></button>
                  )}
                </li>
              );
            })}
            {/* Scroll Spacer for mobile */}
            <li className="h-full w-8 shrink-0 md:hidden" />
          </ul>
        </div>

        <AnimatePresence>
          {activeCategory && activeCategory !== "Promotions" && (
            <div className="hidden md:block">
              {/* Desktop Backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setActiveCategory(null)}
                className="fixed inset-0 top-[128px] bg-black/60 backdrop-blur-sm z-40"
              />

              {/* Mega Menu Content */}
              <AnimatePresence mode="wait">
                {activeCategory && activeCategory !== "Promotions" && activeCategory !== "VIP" && <MegaMenu />}
              </AnimatePresence>
            </div>
          )}
        </AnimatePresence>
      </nav>

      <AnimatePresence>
        {activeCategory && activeCategory !== "Promotions" && <MobileSubMenu />}
      </AnimatePresence>
    </header>
  );
};
