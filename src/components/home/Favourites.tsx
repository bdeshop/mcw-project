import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SectionTitle } from "./Common";
import { Smartphone, QrCode } from "lucide-react";
import { useLanguage } from "../../context/LanguageContext";

import img1 from "../../assets/favourate/image_261071.jpg";
import img2 from "../../assets/favourate/image_435619.jpg";

export const Favourites = () => {
  const { t } = useLanguage();
  const [index, setIndex] = useState(0);

  const slides = [
    { img: img1 },
    { img: img2 },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <section id="favourites" className="container mx-auto pb-4 md:pb-8 overflow-hidden px-2 md:px-4">
      <SectionTitle title={t("favourites")} />
      
      <div className="relative w-full overflow-hidden">
        <motion.div 
          className="flex gap-4"
          animate={{ x: `calc(-${index * (100 / slides.length)}%)` }}
          transition={{ type: "spring", damping: 25, stiffness: 100 }}
        >
          {slides.map((s, i) => (
            <div key={i} className="w-full md:w-[calc(50%-8px)] rounded-xl border border-white/5 relative overflow-hidden flex-shrink-0 shadow-2xl aspect-[21/9] md:aspect-[16/7]">
              <img src={s.img} className="w-full h-full block object-fill" alt={`Favourite ${i}`} />
            </div>
          ))}
        </motion.div>
      </div>

      <div className="flex justify-center gap-2 mt-4">
        {slides.map((_, i) => (
          <button key={i} onClick={() => setIndex(i)} className={`h-1.5 rounded-full transition-all duration-300 ${i === index ? "w-8 bg-casino-gold" : "w-1.5 bg-white/20 hover:bg-white/40"}`} />
        ))}
      </div>
    </section>
  );
};
