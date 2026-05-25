import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Megaphone } from "lucide-react";
import { SLIDES } from "../../data/casinoData";
import { useLanguage } from "../../context/LanguageContext";


interface HeroProps {
  onHeroClick?: () => void;
  isPinned?: boolean;
}

export const Hero = ({ onHeroClick, isPinned = false }: HeroProps) => {
  const { t } = useLanguage();
  const [slide, setSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setSlide((prev) => (prev + 1) % SLIDES.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative w-full overflow-hidden bg-casino-bg">
      <div className="container mx-auto ">
        <div className="mx-auto w-full overflow-hidden rounded-none shadow-2xl bg-casino-bg">
          <div
            onClick={onHeroClick}
            className="relative h-42.5 sm:h-47.5 md:h-80 w-full overflow-hidden group cursor-pointer active:scale-[0.99] transition-transform bg-casino-bg"
          >
            <div
              className="absolute inset-0 bg-size-[100%_100%] md:bg-cover bg-center transition-all duration-700 ease-in-out"
              style={{ backgroundImage: `url('${SLIDES[slide].img}')` }}
            >
              <div className="absolute inset-0 bg-linear-to-r from-black/30 via-transparent to-transparent" />
            </div>

            <button
              onClick={(e) => {
                e.stopPropagation();
                setSlide((prev) => (prev - 1 + SLIDES.length) % SLIDES.length);
              }}
              className="hidden md:flex absolute left-6 top-1/2 -translate-y-1/2 h-12 w-12 rounded-full bg-black/20 backdrop-blur-md border border-white/10 items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-all hover:bg-casino-gold hover:text-black z-10"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                setSlide((prev) => (prev + 1) % SLIDES.length);
              }}
              className="hidden md:flex absolute right-6 top-1/2 -translate-y-1/2 h-12 w-12 rounded-full bg-black/20 backdrop-blur-md border border-white/10 items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-all hover:bg-casino-gold hover:text-black z-10"
            >
              <ChevronRight className="h-6 w-6" />
            </button>

            <div className="absolute bottom-2.5 md:bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
              {SLIDES.map((_, i) => (
                <button
                  key={i}
                  onClick={(e) => {
                    e.stopPropagation();
                    setSlide(i);
                  }}
                  className={`h-1.5 transition-all duration-500 rounded-full ${i === slide ? "w-6 md:w-8 bg-casino-gold" : "w-1.5 bg-white/30 hover:bg-white/50"}`}
                />
              ))}
            </div>
          </div>

          <div className="bg-[#FFCD00] h-8 md:h-9 flex items-center overflow-hidden border-t border-black/5">
            <div className="flex items-center justify-center w-9 md:w-10 shrink-0">
              <Megaphone className="h-3.5 md:h-4 w-3.5 md:w-4 text-black" />
            </div>
            <div className="flex-1 overflow-hidden">
              <p className="text-[10px] md:text-[11px] font-bold text-black/80 whitespace-nowrap animate-marquee">
                MCW site? Visit https://mcwlinks.com/bn/ to see the latest access links. Mega Casino World - The best online casino experience in Bangladesh!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
