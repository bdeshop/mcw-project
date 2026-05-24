import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Megaphone } from "lucide-react";
import { SLIDES } from "../../data/casinoData";
import { useLanguage } from "../../context/LanguageContext";


interface HeroProps {
  onHeroClick?: () => void;
}

export const Hero = ({ onHeroClick }: HeroProps) => {
  const { t } = useLanguage();
  const [slide, setSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setSlide((prev) => (prev + 1) % SLIDES.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative w-full overflow-hidden bg-[#191E32]">
      <div className="container mx-auto px-4 py-2">
        <div 
          onClick={onHeroClick}
          className="relative h-[150px] md:h-[320px] w-full rounded-xl overflow-hidden shadow-2xl group cursor-pointer active:scale-[0.99] transition-transform bg-[#191E32]"
        >
          {/* ... existing slides ... */}
          {/* Image Slide */}
          <div className="absolute inset-0 bg-[length:100%_100%] md:bg-cover bg-center transition-all duration-700 ease-in-out"
            style={{ backgroundImage: `url('${SLIDES[slide].img}')` }}>
            <div className="absolute inset-0 bg-linear-to-r from-black/30 via-transparent to-transparent" />
          </div>

          {/* Arrows */}
          <button 
            onClick={(e) => { e.stopPropagation(); setSlide((prev) => (prev - 1 + SLIDES.length) % SLIDES.length); }}
            className="hidden md:flex absolute left-6 top-1/2 -translate-y-1/2 h-12 w-12 rounded-full bg-black/20 backdrop-blur-md border border-white/10 items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-all hover:bg-casino-gold hover:text-black z-10"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          <button 
            onClick={(e) => { e.stopPropagation(); setSlide((prev) => (prev + 1) % SLIDES.length); }}
            className="hidden md:flex absolute right-6 top-1/2 -translate-y-1/2 h-12 w-12 rounded-full bg-black/20 backdrop-blur-md border border-white/10 items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-all hover:bg-casino-gold hover:text-black z-10"
          >
            <ChevronRight className="h-6 w-6" />
          </button>

          {/* Dots */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
            {SLIDES.map((_, i) => (
              <button 
                key={i} 
                onClick={(e) => { e.stopPropagation(); setSlide(i); }}
                className={`h-1.5 transition-all duration-500 rounded-full ${i === slide ? "w-6 md:w-8 bg-casino-gold" : "w-1.5 bg-white/30 hover:bg-white/50"}`} 
              />
            ))}
          </div>
        </div>
      </div>
      
      {/* Marquee Ticker */}
      <div className="container mx-auto px-4 pb-2">
        <div className="bg-[#FFCD00] h-9 flex items-center overflow-hidden border-b border-black/5 rounded-sm">
          <div className="flex items-center justify-center w-10 shrink-0">
            <Megaphone className="h-4 w-4 text-black" />
          </div>
          <div className="flex-1 overflow-hidden">
            <p className="text-[11px] font-bold text-black/80 whitespace-nowrap animate-marquee">
               MCW site? Visit https://mcwlinks.com/bn/ to see the latest access links. Mega Casino World - The best online casino experience in Bangladesh!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
