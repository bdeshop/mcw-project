import React, { useState } from "react";
import { Clock } from "lucide-react";
import { useLanguage } from "../../context/LanguageContext";
import { motion } from "framer-motion";
import { PromotionDetailModal } from "./PromotionDetailModal";

const CATEGORIES = ["All", "Welcome offer", "Slots", "Live Casino", "Sports", "Fishing", "Lottery", "Table", "Arcade", "Crash", "Other"];

const PROMOS = [
  {
    id: 1,
    title: "NCVIP Members - Exclusive FREE 50 SPINS",
    sub: "Free Spin Frenzy",
    time: "Limited Time Offer",
    tag: "SLOTS",
    badge: "Bonus",
    img: "https://img.m167cw.com/mcw/h5/assets/images/promotion/banner-ncvip-slots.jpg",
    cat: "Slots"
  },
  {
    id: 2,
    title: "Daily Free 6.0% Unlimited Bonus Deposit",
    sub: "Top-Up Reward",
    time: "16/04/2026 00:00 ~ 01/01/2027 00:00",
    tag: "ALL",
    img: "https://img.m167cw.com/mcw/h5/assets/images/promotion/banner-6unlimited.jpg",
    cat: "Welcome offer"
  },
  {
    id: 3,
    title: "Instant Rescue Bonus - No Limit!",
    sub: "Recovery Bonus",
    time: "Limited Time Offer",
    tag: "ALL",
    img: "https://img.m167cw.com/mcw/h5/assets/images/promotion/banner-35rescue.jpg",
    cat: "Other"
  },
  {
    id: 4,
    title: "Exclusive NEW PLAYER 100% FIRST DEPOSIT BONUS",
    sub: "Welcome Pack",
    time: "Ongoing Promotion",
    tag: "ALL",
    badge: "Bonus",
    img: "https://img.m167cw.com/mcw/h5/assets/images/promotion/banner-100welcome.jpg",
    cat: "Welcome offer"
  },
  {
    id: 5,
    title: "SPECIAL OFFER UP TO ৳300 FIRST DEPOSIT BONUS",
    sub: "Mega Deal",
    time: "Limited Time Offer",
    tag: "ALL",
    badge: "Bonus",
    img: "https://img.m167cw.com/mcw/h5/assets/images/promotion/banner-300bonus.jpg",
    cat: "Other"
  },
  {
    id: 6,
    title: "LUCKY SPIN LOGIN & DEPOSIT 100% CHANCE TO WIN",
    sub: "Daily Reward",
    time: "Limited Time Offer",
    tag: "ALL",
    img: "https://img.m167cw.com/mcw/h5/assets/images/promotion/banner-luckyspin.jpg",
    cat: "Slots"
  }
];

export const PromotionsPage = () => {
  const { t } = useLanguage();
  const [activeCat, setActiveCat] = useState("All");
  const [selectedPromo, setSelectedPromo] = useState<any>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const filteredPromos = activeCat === "All" ? PROMOS : PROMOS.filter(p => p.cat === activeCat);

  const handleOpenDetails = (promo: any) => {
    setSelectedPromo(promo);
    setIsModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#0a0d1a] flex flex-col font-jost">
      <PromotionDetailModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        promo={selectedPromo}
      />

      <main className="flex-1 max-w-[1240px] mx-auto w-full pt-[124px] md:pt-[154px] pb-24 px-4">
        {/* Category Bar */}
        <div className="bg-[#1b2135] rounded-lg p-2.5 flex items-center overflow-x-auto no-scrollbar gap-2 mb-8 border border-white/5 shadow-2xl">
          {CATEGORIES.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCat(cat)}
              className={`px-4 md:px-6 py-2 rounded-md text-[11px] md:text-[13px] font-black uppercase tracking-tighter italic transition-all whitespace-nowrap border ${activeCat === cat
                ? "bg-login-grad text-white border-white/5 shadow-xl shadow-black/20"
                : "bg-transparent border-white/5 text-white hover:text-white hover:border-white/20"
                }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Promo Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
          {filteredPromos.map((promo) => (
            <motion.div
              key={promo.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-[#161b2e]  overflow-hidden flex flex-col group border border-white/5 hover:border-casino-gold/30 transition-all hover:shadow-[0_30px_60px_-20px_rgba(0,0,0,0.6)]"
            >
              {/* Image with Tag & Badge */}
              <div className="relative aspect-[16/8.5] overflow-hidden">
                <img
                  src={promo.img}
                  alt={promo.title}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-linear-to-t from-[#161b2e] via-transparent to-transparent opacity-60" />

                {/* Top Right Tag */}
                <div className="absolute top-3 right-3 bg-black/60 backdrop-blur-md px-2 py-0.5 rounded text-[9px] text-white/60 font-black tracking-widest uppercase italic">
                  {promo.tag}
                </div>

                {/* Top Left Badge */}
                {promo.badge && (
                  <div className="absolute top-0 left-3 h-8 w-10 bg-green-500 rounded-b-lg flex items-center justify-center shadow-lg">
                    <span className="text-white text-[9px] font-black uppercase tracking-tighter -rotate-12">{promo.badge}</span>
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="p-5 flex-1 flex flex-col">
                <h3 className="text-white font-black text-base md:text-[17px] leading-tight mb-2 group-hover:text-casino-gold transition-colors italic uppercase tracking-tight">
                  {promo.title}
                </h3>
                <p className="text-white/70 text-[12px] md:text-[13px] font-bold mb-5 italic">{promo.sub}</p>

                <div className="mt-auto space-y-4">
                  <div className="flex items-center gap-2 text-white/40">
                    <Clock className="h-3.5 w-3.5" />
                    <span className="text-[10px] font-black tracking-widest uppercase italic">{promo.time}</span>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <button className="h-10 bg-linear-to-b from-[#333b5a] to-[#1e2439] border border-white/10 text-white font-black text-[11px] md:text-[12px] uppercase tracking-widest italic rounded-lg shadow-lg hover:brightness-125 transition-all">
                      Register Now
                    </button>
                    <button
                      onClick={() => handleOpenDetails(promo)}
                      className="h-10 bg-login-grad text-white font-black text-[11px] md:text-[12px] uppercase tracking-widest italic rounded-md shadow-xl shadow-casino-gold/10 hover:brightness-110 transition-all border border-white/5"
                    >
                      Details
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </main>
    </div>
  );
};
