import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { useLanguage } from "../../context/LanguageContext";
import { Language } from "../../data/translations";

interface LanguageModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface RegionConfig {
  code: string;
  flag: string;
  symbol: string;
  languages: { label: string; value: Language | string }[];
}

const REGIONS: RegionConfig[] = [
  { 
    code: "BDT", 
    flag: "https://img.m167cw.com/mcw/h5/assets/images/flag/BD.webp", 
    symbol: "৳", 
    languages: [
      { label: "বাংলা", value: "Bangla" },
      { label: "English", value: "English" }
    ] 
  },
  { 
    code: "VND", 
    flag: "https://img.m167cw.com/mcw/h5/assets/images/flag/VN.webp", 
    symbol: "₫", 
    languages: [{ label: "Tiếng Việt", value: "Vietnamese" }] 
  },
  { 
    code: "PHP", 
    flag: "https://img.m167cw.com/mcw/h5/assets/images/flag/PH.webp", 
    symbol: "₱", 
    languages: [{ label: "English", value: "English" }] 
  },
  { 
    code: "USDT", 
    flag: "https://img.m167cw.com/mcw/h5/assets/images/flag/US.webp", 
    symbol: "$", 
    languages: [{ label: "English", value: "English" }] 
  },
  { 
    code: "NPR", 
    flag: "https://img.m167cw.com/mcw/h5/assets/images/flag/NP.webp", 
    symbol: "Rs", 
    languages: [
      { label: "नेपाली", value: "Nepali" },
      { label: "English", value: "English" }
    ] 
  },
  { 
    code: "MYR", 
    flag: "https://img.m167cw.com/mcw/h5/assets/images/flag/MY.webp", 
    symbol: "RM", 
    languages: [
      { label: "English", value: "English" },
      { label: "简体中文", value: "Chinese" },
      { label: "Bahasa Melayu", value: "Malay" }
    ] 
  },
  { 
    code: "PKR", 
    flag: "https://img.m167cw.com/mcw/h5/assets/images/flag/PK.webp", 
    symbol: "₨", 
    languages: [{ label: "English", value: "English" }] 
  },
  { 
    code: "INR", 
    flag: "https://img.m167cw.com/mcw/h5/assets/images/flag/IN.webp", 
    symbol: "₹", 
    languages: [
      { label: "हिंदी", value: "Hindi" },
      { label: "English", value: "English" }
    ] 
  },
];

export const LanguageModal = ({ isOpen, onClose }: LanguageModalProps) => {
  const { language, setLanguage } = useLanguage();

  const handleLangChange = (val: Language | string) => {
    if (val === "English" || val === "Bangla") {
      setLanguage(val);
      onClose();
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[1000] flex items-center justify-center p-4">
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
            className="w-full max-w-[480px] bg-[#161b2e] rounded-lg overflow-hidden shadow-2xl flex flex-col max-h-[95vh] relative z-10"
          >
            {/* Header */}
            <div className="bg-[#C9A33D] h-12 shrink-0 flex items-center justify-center relative">
              <h2 className="text-white font-bold text-base">Currency and Language</h2>
              <button onClick={onClose} className="absolute right-4 text-white hover:rotate-90 transition-transform">
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Grid Container */}
            <div className="flex-1 overflow-y-auto no-scrollbar p-3">
              <div className="grid grid-cols-2 gap-3">
                {REGIONS.map((region) => (
                  <div key={region.code} className="bg-[#232a44] rounded-lg p-5 flex flex-col items-center gap-4 border border-white/5">
                    {/* Flag */}
                    <div className="h-12 w-12 rounded-full overflow-hidden border-2 border-white/10 shadow-lg relative">
                      <img src={region.flag} alt={region.code} className="h-full w-full object-cover" />
                    </div>

                    {/* Currency Text */}
                    <div className="text-center">
                       <p className="text-white font-bold text-xs uppercase tracking-tight">
                          <span className="text-white mr-1">{region.symbol}</span>
                          {region.code}
                       </p>
                    </div>

                    {/* Language Buttons */}
                    <div className={`w-full ${region.languages.length > 2 ? 'space-y-2' : ''}`}>
                       <div className={`grid gap-2 ${region.languages.length === 1 ? 'grid-cols-1' : 'grid-cols-2'}`}>
                          {region.languages.slice(0, 2).map((lang) => {
                            const isActive = language === lang.value;
                            const isSupported = lang.value === "English" || lang.value === "Bangla";
                            
                            return (
                              <button
                                key={lang.label}
                                onClick={() => isSupported && handleLangChange(lang.value as Language)}
                                className={`py-2 rounded-md text-[11px] font-bold transition-all border ${
                                  isActive 
                                    ? "bg-login-grad text-white shadow-xl shadow-casino-gold/10 italic border border-white/5" 
                                    : "bg-transparent border-white/10 text-white/80 hover:border-[#C9A33D]/50"
                                } ${!isSupported && !isActive ? 'opacity-40 cursor-not-allowed' : ''}`}
                              >
                                {lang.label}
                              </button>
                            );
                          })}
                       </div>
                       {region.languages.length > 2 && (
                          <button
                            className="w-full py-2 rounded-md text-[11px] font-bold transition-all border bg-transparent border-white/10 text-white/80 hover:border-[#C9A33D]/50 opacity-40 cursor-not-allowed"
                          >
                            {region.languages[2].label}
                          </button>
                       )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
