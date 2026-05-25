import React from "react";
import { useLanguage } from "../../context/LanguageContext";
import { translations } from "../../data/translations";
import { Fish, Gift, Trophy } from "lucide-react";

type TranslationKey = keyof typeof translations.English;

type NavItem = {
  id: MobileCategoryId;
  key: TranslationKey;
  icon: React.ComponentType<{ className?: string }>;
};

export type MobileCategoryId = "hot" | "sports" | "casino" | "slot" | "crash" | "table" | "fishing" | "arcade" | "lottery";

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

// Custom Slot 7 Icon (scalable stroke-based)
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

const NAV_ITEMS: NavItem[] = [
  { id: "hot", key: "hot", icon: FlameGamepadIcon },
  { id: "sports", key: "sports", icon: SportsIcon },
  { id: "casino", key: "casino", icon: CasinoIcon },
  { id: "slot", key: "slot", icon: SlotIcon },
  { id: "crash", key: "crash", icon: CrashIcon },
  { id: "table", key: "table", icon: TableIcon },
  { id: "fishing", key: "fishing", icon: Fish },
  { id: "arcade", key: "arcade", icon: ArcadeIcon },
  { id: "lottery", key: "lottery", icon: LotteryIcon },
];

interface MobileCategoryNavProps {
  activeCategory: MobileCategoryId;
  onCategoryChange: (category: MobileCategoryId) => void;
  isPinned?: boolean;
  className?: string;
}

export const MobileCategoryNav = ({ activeCategory, onCategoryChange, isPinned = false, className = "" }: MobileCategoryNavProps) => {
  const { t } = useLanguage();

  return (
    <div className={`md:hidden bg-[#232a44] border-y border-white/5 shadow-[0_8px_24px_rgba(0,0,0,0.22)] flex items-center transition-all duration-300 ${isPinned ? "h-12" : "h-14.5"} ${className}`}>
      <div className="flex items-center gap-2.5 overflow-x-auto no-scrollbar px-3 w-full">
        {NAV_ITEMS.map((item) => {
          const isActive = activeCategory === item.id;
          const Icon = item.icon;

          if (isPinned) {
            // Text-only pill layout when scrolled/pinned
            return (
              <button
                key={item.id}
                onClick={() => onCategoryChange(item.id)}
                className={`px-4 py-1.5 text-[11px] font-bold uppercase tracking-wider transition-all shrink-0 select-none cursor-pointer
                  ${isActive 
                    ? "bg-[#3a4160] text-white rounded-md shadow-inner" 
                    : "text-[#c9a33d] hover:text-[#c9a33d]/85"
                  }`}
              >
                {t(item.key as TranslationKey)}
              </button>
            );
          } else {
            // Icon + text layout when at the top (unscrolled)
            return (
              <button
                key={item.id}
                onClick={() => onCategoryChange(item.id)}
                className={`flex flex-col items-center justify-center gap-1.5 min-w-16.5 px-2 py-1.5 transition-all rounded-md cursor-pointer
                  ${isActive 
                    ? "bg-[#3a4160] text-white" 
                    : "bg-transparent text-[#c9a33d]"
                  }`}
              >
                <Icon className={`h-4.5 w-4.5 ${isActive ? "text-white" : "text-[#c9a33d]"}`} />
                <span className={`text-[10px] font-black uppercase tracking-tight leading-none ${isActive ? "text-white" : "text-[#c9a33d]"}`}>
                  {t(item.key as TranslationKey)}
                </span>
              </button>
            );
          }
        })}
      </div>
    </div>
  );
};