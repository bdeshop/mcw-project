import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Megaphone } from "lucide-react";
import { useLanguage } from "../../context/LanguageContext";

const VIP_LEVELS = [
  {
    id: "bronze",
    name: "BRONZE",
    sub: "",
    img: "https://www.mcwguide.com/wp-content/uploads/2025/08/icon_bronze-2.jpg",
    requirements: "Default Level",
    rewards: [false, false, false, false, false],
    conversion: "2000 Turnover = 1 VP",
    color: "linear-gradient(0deg,rgba(79, 65, 58, 1) 0%, rgba(18, 20, 32, 1) 80%)"
  },
  {
    id: "silver",
    name: "SILVER",
    sub: "300,000 Monthly Turnover Requirements",
    img: "https://www.mcwguide.com/wp-content/uploads/2025/08/icon_silver-2.jpg",
    requirements: "300,000 Monthly Turnover",
    rewards: [false, false, false, true, true],
    conversion: "1250 Turnover = 1 VP",
    color: "linear-gradient(0deg,rgba(68, 70, 78, 1) 0%, rgba(18, 20, 32, 1) 80%)"
  },
  {
    id: "gold",
    name: "GOLD",
    sub: "800,000 Monthly Turnover Requirements",
    img: "https://www.mcwguide.com/wp-content/uploads/2025/08/icon_gold-1.jpg",
    requirements: "800,000 Monthly Turnover",
    rewards: [true, false, false, true, true],
    conversion: "1000 Turnover = 1 VP",
    color: "linear-gradient(0deg,rgba(90, 77, 55, 1) 0%, rgba(18, 20, 32, 1) 80%)"
  },
  {
    id: "diamond",
    name: "DIAMOND",
    sub: "Invitation Only",
    img: "https://www.mcwguide.com/wp-content/uploads/2025/08/icon_diamond-4.jpg",
    requirements: "Invitation Only",
    rewards: [true, true, true, true, true],
    conversion: "500 Turnover = 1 VP",
    color: "linear-gradient(0deg,rgba(73, 78, 99, 1) 0%, rgba(18, 20, 32, 1) 80%)"
  },
  {
    id: "black-diamond",
    name: "BLACK DIAMOND",
    sub: "Invitation Only",
    img: "https://www.mcwguide.com/wp-content/uploads/2025/08/icon_black-diamond-1.jpg",
    requirements: "Invitation Only",
    rewards: [true, true, true, true, true],
    conversion: "400 Turnover = 1 VP",
    color: "linear-gradient(0deg,rgba(45, 32, 8, 1) 0%, rgba(0, 0, 0, 1) 50%)",
    isPremium: true
  }
];

const FAQS = [
  { q: "What is MCW VIP Program?", a: "MCW VIP is a rewards program exclusively available for MCW members. With MCW VIP Program, you can earn MCW VIP Points (VP) which you can use to exchange for cash and receive VIP benefits." },
  { q: "How can I become an MCW VIP member?", a: "For new members, simply sign up for an MCW account. By default, all MCW members are automatically part of our VIP program under the Bronze VIP level. To progress to a higher level, simply fulfill the requirements as shown on the table above. Only one membership per person is allowed." },
  { q: "What are the MCW VIP levels?", a: "Level 1 – Bronze, Level 2 – Silver, Level 3 – Gold, Level 4 – Diamond (Invitation Only), Level 5 – Black Diamond (Invitation Only)." },
  { q: "How can I upgrade to a higher VIP level?", a: "Total Turnover amount accumulated for the month will determine the VIP level. VIP level will automatically upgrade as soon as Turnover requirement is met." },
  { q: "How can I earn Turnover?", a: "Turnover can be earned by actively playing and participating in all MCW gaming activities. The more you play the higher the turnover you can get." },
  { q: "How can I earn and accumulate MCW VIP Points (VP)?", a: "MCW VIP Points (VP) can be earned by accumulating turnovers depending on your VIP level. For example, in Bronze level, 2000 Turnover = 1 VP." },
  { q: "How can I exchange MCW VIP Points (VP) to cash?", a: "MCW VIP Points (VP) can be converted any time from MCW My Account Page. 1 VIP point = 1 real money (e.g., 1 BDT). Upon successful conversion, it will be credited into your MCW account." },
  { q: "Does membership expire?", a: "VIP level is valid for 1 month and will be changed monthly depending on your monthly accumulated turnover." },
  { q: "What is the VIP Loyalty Bonus?", a: "VIP Loyalty Bonus is a special bonus awarded to members once they reach the required VIP level to qualify for the loyalty bonus." },
  { q: "What is Birthday Bonus?", a: "VIP Birthday Bonus is an exclusive reward given to members in celebration of their birthday month as registered on their account." }
];

const REWARDS_LIST = [
  "VIP Loyalty Bonus",
  "Priority Access and VIP Services",
  "Priority Payment Solutions",
  "Exclusive VIP Rewards",
  "Birthday Bonus"
];

export const VIPPage = () => {
  const { language } = useLanguage();
  const [flippedCards, setFlippedCards] = useState<string[]>([]);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFlip = (id: string) => {
    setFlippedCards(prev => 
      prev.includes(id) ? prev.filter(cardId => cardId !== id) : [...prev, id]
    );
  };

  return (
    <div className="bg-[#0a0d1a] font-['Oswald',_sans-serif] text-white overflow-x-hidden">
      {/* Hero Banner */}
      <section className="relative w-full pt-[106px] md:pt-[128px]">
        <div className="relative aspect-[2560/921] md:aspect-auto md:h-[450px] overflow-hidden">
            <img 
              src="https://www.mcwguide.com/wp-content/uploads/2025/09/banner-en_vip-2-scaled.jpg" 
              className="w-full h-full object-cover hidden md:block" 
              alt="VIP Hero" 
            />
            <img 
              src="https://www.mcwguide.com/wp-content/uploads/2025/09/banner-mob-en_vip-1.jpg" 
              className="w-full h-full object-cover md:hidden" 
              alt="VIP Hero Mobile" 
            />
            <div className="absolute inset-0 bg-linear-to-b from-transparent via-transparent to-[#0a0d1a]" />
        </div>
      </section>

      {/* Info Sections */}
      <section className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
           <div className="bg-[#1a1e30] rounded-[20px] p-6 md:p-10 flex flex-col md:flex-row items-center gap-6 text-center md:text-left border border-white/5 shadow-2xl">
              <img src="https://www.mcwguide.com/wp-content/uploads/2025/08/icon_mcw.png" className="w-24 md:w-32 shrink-0" alt="About Icon" />
              <div>
                 <h2 className="text-xl md:text-2xl font-medium mb-3 uppercase">About <span className="text-[#f8e4a9]">MCW VIP</span></h2>
                 <p className="text-white/70 text-sm md:text-[15px] leading-relaxed">
                   MCW VIP is a rewards program exclusively available for MCW members. With MCW VIP Program, you can earn MCW VIP Points (VP) which you can use to exchange for cash and receive VIP benefits.
                 </p>
              </div>
           </div>

           <div className="bg-[#1a1e30] rounded-[20px] p-6 md:p-10 flex flex-col md:flex-row items-center gap-6 text-center md:text-left border border-white/5 shadow-2xl">
              <img src="https://www.mcwguide.com/wp-content/uploads/2025/08/icon_question.png" className="w-24 md:w-32 shrink-0" alt="Join Icon" />
              <div>
                 <h2 className="text-[#f8e4a9] text-xl md:text-2xl font-medium mb-3 uppercase">How to Join?</h2>
                 <p className="text-white/70 text-sm md:text-[15px] leading-relaxed">
                   All MCW account members are automatically part of our VIP program. Earn MCW VIP Points (VP) by continuously playing with MCW's fun game offerings to progress to a higher level.
                 </p>
              </div>
           </div>
        </div>

        {/* VIP Levels Grid */}
        <div className="mt-20 space-y-12">
           <h2 className="text-center text-2xl md:text-4xl font-medium uppercase tracking-tight">VIP <span className="text-[#f8e4a9]">Levels</span></h2>
           
           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
              {VIP_LEVELS.map((level) => (
                <div key={level.id} className={`h-[680px] perspective-1000 ${level.id === 'black-diamond' ? 'md:-mt-8' : ''}`}>
                   <div className={`relative w-full h-full transition-transform duration-700 preserve-3d cursor-pointer ${flippedCards.includes(level.id) ? 'rotate-y-180' : ''}`}>
                      
                      {/* Front Side */}
                      <div 
                        onClick={() => toggleFlip(level.id)}
                        className="absolute inset-0 backface-hidden bg-[#121420] rounded-2xl overflow-hidden flex flex-col border border-white/5"
                        style={{ background: level.color }}
                      >
                         <div className="h-40 shrink-0 flex items-center justify-center p-4">
                            <img src={level.img} alt={level.name} className="h-full object-contain" />
                         </div>
                         <div className="p-5 flex-1 flex flex-col items-center text-center">
                            <h3 className={`text-2xl font-black uppercase mb-1 ${
                              level.id === 'bronze' ? 'text-[#c9ad96]' :
                              level.id === 'silver' ? 'text-[#b3b3b4]' :
                              level.id === 'gold' ? 'text-[#e1ba66]' :
                              level.id === 'diamond' ? 'text-[#979fbb]' : 'text-white'
                            }`}>
                              {level.name}
                            </h3>
                            <div className="h-10 mb-4">
                               <p className="text-[#f5e2a7] text-[13px] font-bold leading-tight uppercase">{level.sub}</p>
                            </div>
                            
                            <div className="w-full space-y-1 mb-6">
                               <p className="text-white font-black text-sm uppercase mb-2">Rewards and Benefits</p>
                               <ul className="space-y-1.5">
                                  {REWARDS_LIST.map((reward, idx) => (
                                    <li key={idx} className="flex items-center gap-3 px-2 text-left">
                                       <img 
                                         src={level.rewards[idx] ? "https://www.mcwguide.com/wp-content/uploads/2025/08/icon_check.png" : "https://www.mcwguide.com/wp-content/uploads/2025/08/icon_x.png"} 
                                         className="w-5 h-5 shrink-0" 
                                         alt="status" 
                                       />
                                       <span className={`text-[12px] font-bold leading-tight ${level.rewards[idx] ? 'text-white' : 'text-white/30'}`}>{reward}</span>
                                    </li>
                                  ))}
                               </ul>
                            </div>

                            <div className="mt-auto space-y-2">
                               <p className="text-white/60 text-[11px] font-bold uppercase tracking-tight">Turnover to MCW VIP Points (VP) Conversion</p>
                               <p className="text-[#f5e2a7] font-black text-[17px] italic">{level.conversion}</p>
                               <p className="text-[#a6a6a6] text-[10px] leading-tight">* VP conversion rates vary depending on the products played</p>
                            </div>

                            <button className="w-full mt-6 h-[50px] bg-[url('https://www.mcwguide.com/wp-content/uploads/2025/08/btn_bg-2.png')] bg-contain bg-no-repeat bg-center text-[#1a1f33] font-black text-lg uppercase tracking-widest pt-2 pb-5">
                               Learn More
                            </button>
                         </div>
                      </div>

                      {/* Back Side */}
                      <div 
                        onClick={() => toggleFlip(level.id)}
                        className="absolute inset-0 backface-hidden rotate-y-180 bg-[#121420] rounded-2xl overflow-hidden flex flex-col border border-white/5"
                        style={{ background: level.color }}
                      >
                         <div className="h-40 shrink-0 flex items-center justify-center p-4">
                            <img src={level.img} alt={level.name} className="h-full object-contain opacity-40" />
                         </div>
                         <div className="p-6 flex-1 flex flex-col items-center">
                            <h3 className="text-[#f5e2a7] font-black text-lg uppercase mb-6 italic">Terms & Conditions apply</h3>
                            
                            <ul className="space-y-4 text-left list-disc pl-4">
                               <li className="text-[13px] font-bold text-white/80 leading-relaxed italic">VIP level will reset monthly based on your previous month's turnover.</li>
                               <li className="text-[13px] font-bold text-white/80 leading-relaxed italic">level will be updated automatically once turnover requirement has been reached.</li>
                               <li className="text-[13px] font-bold text-white/80 leading-relaxed italic">VIP Loyalty Bonus will be based on the VIP level achieved by end of the month.</li>
                            </ul>

                            <button className="w-full mt-auto h-[50px] bg-[url('https://www.mcwguide.com/wp-content/uploads/2025/08/btn_bg-2.png')] bg-contain bg-no-repeat bg-center text-[#1a1f33] font-black text-lg uppercase tracking-widest pt-2 pb-5">
                               Back
                            </button>
                         </div>
                      </div>

                   </div>
                </div>
              ))}
           </div>
           
           <p className="text-center text-[#a6a6a6] text-[10px] md:text-xs font-bold uppercase tracking-widest mt-12">
             IMPORTANT NOTE: MCW RESERVES THE RIGHT TO MAKE ANY CHANGES WITHOUT PRIOR NOTICE
           </p>
        </div>

        {/* CTA Section */}
        <div className="mt-24 text-center space-y-6">
           <h2 className="text-2xl md:text-4xl font-medium uppercase tracking-tight">
             <span className="text-[#f8e4a9]">Don’t Have an MCW Account, yet?</span>
           </h2>
           <p className="text-white/70 text-[15px] md:text-lg">Simply SIGN UP for an account and start your online gaming journey with instant VIP recognition.</p>
           <button className="h-[65px] px-12 bg-[url('https://www.mcwguide.com/wp-content/uploads/2025/08/btn_bg-2.png')] bg-contain bg-no-repeat bg-center text-[#1a1f33] font-black text-xl md:text-2xl uppercase tracking-[0.2em] pt-4 pb-8 hover:brightness-110 transition-all">
              SIGN UP NOW
           </button>
        </div>

        {/* FAQ Section */}
        <div className="mt-32 space-y-12">
           <h2 className="text-center text-2xl md:text-4xl font-medium uppercase tracking-tight">MCW VIP <span className="text-[#f8e4a9]">FAQ’s</span></h2>
           
           <div className="container mx-auto px-4 space-y-0">
              {FAQS.map((faq, i) => (
                <div key={i} className="border-b border-[#524f3b]/30">
                   <button 
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    className="w-full py-5 flex items-center justify-between group transition-all"
                   >
                      <div className="flex items-center gap-3 text-left">
                        <span className="text-[#e8d37b] font-black text-lg">{i + 1}.</span>
                        <span className="text-white font-bold text-sm md:text-base tracking-wide group-hover:text-[#e8d37b] transition-colors">{faq.q}</span>
                      </div>
                      <div className={`text-[#ebd36c] text-2xl transition-transform duration-300 ${openFaq === i ? 'rotate-180' : ''}`}>
                         {openFaq === i ? '−' : '+'}
                      </div>
                   </button>
                   <AnimatePresence>
                      {openFaq === i && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          className="overflow-hidden"
                        >
                           <div className="pb-6 text-white/50 text-[13px] md:text-sm leading-relaxed pl-8 md:pl-10">
                              {faq.a}
                           </div>
                        </motion.div>
                      )}
                   </AnimatePresence>
                </div>
              ))}
           </div>
        </div>
      </section>
    </div>
  );
};
