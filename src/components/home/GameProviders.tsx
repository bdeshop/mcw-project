import React from "react";
import { motion } from "framer-motion";
import { PROVIDERS_ROW } from "../../data/casinoData";
import { useLanguage } from "../../context/LanguageContext";
import { SectionTitle } from "./Common";

export const GameProviders = () => {
  const { t } = useLanguage();
  
  const providerLogos = [
    "/src/assets/gameproviders/imgi_102_darkIcon.png",
    "/src/assets/gameproviders/imgi_123_darkIcon.png",
    "/src/assets/gameproviders/imgi_124_provider-awcv2_fc.png",
    "/src/assets/gameproviders/imgi_125_provider-rich88.png",
    "/src/assets/gameproviders/imgi_126_provider-awcv2_yesbingo.png",
    "/src/assets/gameproviders/imgi_129_provider-nextspin.png",
    "/src/assets/gameproviders/imgi_130_provider-awcv2_btg.png",
    "/src/assets/gameproviders/imgi_131_provider-awcv2_dragoonsoft.png",
    "/src/assets/gameproviders/imgi_133_provider-awcv2_rt.png",
    "/src/assets/gameproviders/imgi_136_provider-ka.png"
  ];

  // Duplicate for seamless loop
  const duplicatedLogos = [...providerLogos, ...providerLogos, ...providerLogos, ...providerLogos];

  return (
    <section className="container mx-auto px-4 overflow-hidden">
      <SectionTitle title={t("gameProviders")} />
      
      <div className="relative mt-8">
        {/* Fading Edges */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-linear-to-r from-casino-bg via-casino-bg/80 to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-linear-to-l from-casino-bg via-casino-bg/80 to-transparent z-10" />

        <div className="flex overflow-hidden">
          <motion.div 
            className="flex gap-10 items-center py-6"
            animate={{ x: [0, -1000] }}
            transition={{
              duration: 30,
              repeat: Infinity,
              ease: "linear"
            }}
          >
            {duplicatedLogos.map((logo, i) => (
              <div 
                key={i} 
                className="flex items-center justify-center min-w-[140px] group transition-all"
              >
                <img 
                  src={logo} 
                  alt={`Provider ${i}`} 
                  className="h-10 md:h-12 w-auto object-contain transition-all duration-500 group-hover:scale-110 filter drop-shadow-[0_5px_15px_rgba(0,0,0,0.3)]" 
                />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
