import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "../../context/LanguageContext";

const ANDROID_STEPS = [
  { id: 1, text: "অ্যাপটি ডাউনলোড করতে নিচের অ্যান্ড্রয়েড ডাউনলোড বোতামে ক্লিক করুন।", img: "https://www.mcwguide.com/wp-content/uploads/2024/07/3-Image.png" },
  { id: 2, text: "একবার ডাউনলোড হয়ে গেলে, ডাউনলোড করা apk খুলুন এবং এটি ইনস্টল করুন।", img: "https://www.mcwguide.com/wp-content/uploads/2024/07/4-Image.png" },
  { id: 3, text: "Unknown sources থেকে অ্যাপ্লিকেশন ইনস্টল করার অনুমতি দিতে সেটিংস ক্লিক করুন৷", img: "https://www.mcwguide.com/wp-content/uploads/2024/07/3-Image.png" },
  { id: 4, text: "ইনস্টলেশনের পরে, আপনি এখন অ্যাপের সাথে লগইন করতে পারেন এবং খেলা শুরু করতে পারেন!", img: "https://www.mcwguide.com/wp-content/uploads/2024/07/4-Image.png" }
];

const IOS_STEPS = [
  { id: 1, text: "আপনার IOS ডিভাইসে Safari অ্যাপ চালু করুন এবং mcwlink.net এ যান।", img: "https://www.mcwguide.com/wp-content/uploads/2024/07/2-IOS.png" },
  { id: 2, text: "\"Share\" বোতামটি আলতো চাপুন৷", img: "https://www.mcwguide.com/wp-content/uploads/2024/07/3-IOS.png" },
  { id: 3, text: "\"Add to Home Screen\" নির্বাচন করুন।", img: "https://www.mcwguide.com/wp-content/uploads/2024/07/4-IOS.png" },
  { id: 4, text: "\"Add\" বোতাম নির্বাচন করুন।", img: "https://www.mcwguide.com/wp-content/uploads/2024/07/4-IOS.png" },
  { id: 5, text: "শুধুমাত্র অ্যাপে ক্লিক করে MCW এর সাথে খেলা উপভোগ করুন।", img: "https://www.mcwguide.com/wp-content/uploads/2024/07/4-IOS.png" }
];

export const DownloadPage = () => {
  const { language } = useLanguage();
  const [activeTab, setActiveTab] = useState<"android" | "ios">("android");

  return (
    <div className="bg-[#0a0d1a] font-['Montserrat',_sans-serif] text-white overflow-x-hidden min-h-screen">
      {/* Desktop/Common Hero Section */}
      <section 
        className="relative pt-[124px] md:pt-[154px] pb-16 md:pb-32 bg-fixed bg-center bg-cover"
        style={{ 
          backgroundImage: "linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url('https://www.mcwguide.com/wp-content/uploads/2024/07/01_DESKTOP-01-scaled.jpg')" 
        }}
      >
        <div className="max-w-[1340px] mx-auto px-4">
           <div className="text-center mb-12 md:mb-20">
              <h1 className="text-3xl md:text-6xl font-black mb-4 drop-shadow-[0_4px_4px_rgba(0,0,0,0.8)] tracking-tight">
                {language === "Bangla" ? "আজই আমাদের MCW মোবাইল অ্যাপটি ডাউনলোড করুন" : "Download Our MCW Mobile App Today"}
              </h1>
              <h2 className="text-xl md:text-4xl font-black italic text-[#ffd81b] uppercase drop-shadow-[0_4px_4px_rgba(0,0,0,0.8)]">
                {language === "Bangla" ? "MCW এর সাথে রোমাঞ্চের অভিজ্ঞতা নিন!" : "Experience the thrill with MCW!"}
              </h2>
           </div>

           <div className="flex flex-col lg:flex-row items-center gap-10 md:gap-20">
              <div className="lg:w-1/2 relative group">
                 <img 
                    src="https://www.mcwguide.com/wp-content/uploads/2024/07/BN_BDT-4.png" 
                    className="w-full h-auto drop-shadow-[0_20px_50px_rgba(0,0,0,0.5)] transition-transform duration-700 group-hover:scale-105" 
                    alt="MCW App Mockup" 
                 />
              </div>
              
              <div className="w-full lg:w-1/2 space-y-8 md:space-y-12">
                 <div className="space-y-6">
                    <p className="text-xl md:text-3xl font-black leading-tight text-center lg:text-left drop-shadow-lg">
                      {language === "Bangla" ? "লক্ষ লক্ষ খেলোয়াড়দের সাথে যোগ দিন এবং আমরা আপনার নখদর্পণে যে গেমগুলি অফার করি তার অন্তহীন বিন্যাস উপভোগ করুন!" : "Join millions of players and enjoy the endless variety of games we offer at your fingertips!"}
                    </p>
                    <p className="text-lg md:text-2xl font-bold text-white/80 text-center lg:text-left italic">
                      {language === "Bangla" ? "প্রতিদিন উত্তেজনাপূর্ণ পুরস্কার! মজার জন্য খেলুন এবং জিতুন বড় জয়।" : "Exciting rewards every day! Play for fun and win big."}
                    </p>
                 </div>

                 <div className="space-y-6">
                    <h3 className="text-xl md:text-3xl font-black text-[#ffd81b] text-center lg:text-left drop-shadow-md">
                      {language === "Bangla" ? "এখনই MCW মোবাইল অ্যাপ ডাউনলোড করুন এবং আজই খেলা শুরু করুন!" : "Download MCW Mobile App now and start playing today!"}
                    </h3>
                    
                    <div className="w-full flex flex-col sm:flex-row items-center gap-6 justify-center lg:justify-start">
                       <div className="bg-white p-2 rounded-xl shadow-2xl shrink-0 transition-transform hover:scale-110">
                          <img src="https://www.mcwguide.com/wp-content/uploads/2026/03/m1_qr.png" className="w-24 md:w-32 h-auto" alt="QR" />
                       </div>
                       
                       <div className="flex flex-col gap-4 w-full max-w-[280px]">
                          <a href="#android" className="block transition-transform active:scale-95">
                             <img src="https://www.mcwguide.com/wp-content/uploads/2024/07/Android-Download_.png" alt="Android Download" className="w-full h-auto drop-shadow-xl" />
                          </a>
                          <a href="#ios" className="block transition-transform active:scale-95">
                             <img src="https://www.mcwguide.com/wp-content/uploads/2024/07/BN-IOS-HOME-SCREEN.png" alt="iOS Download" className="w-full h-auto drop-shadow-xl" />
                          </a>
                       </div>
                    </div>
                 </div>
              </div>
           </div>
        </div>
      </section>

      {/* Feature Blocks (Diagonal) */}
      <section className="container mx-auto px-4 -mt-16 relative z-20 space-y-6">
        {[
          { text: "উত্তেজনাপূর্ণ প্রগতিশীল জ্যাকপট এবং উত্তেজনাপূর্ণ বোনাস গেমগুলির সাথে বৈশিষ্ট্যযুক্ত হট স্লট গেম।", img: "https://www.mcwguide.com/wp-content/uploads/2024/07/Section-2-BN.png" },
          { text: "রিয়েল-টাইমে স্ট্রিম করা লাইভ ক্যাসিনো গেমের অভিজ্ঞতা নিন, এতে বাস্তব ডিলারদের বৈশিষ্ট্য রয়েছে যারা লাইভ খেলোয়াড়দের সাথে ইন্টারঅ্যাক্ট করে।", img: "https://www.mcwguide.com/wp-content/uploads/2024/07/Section-2-BN.png" },
          { text: "লাইভ ক্রীড়া ইভেন্টে চমৎকার প্রতিকূলতা আবিষ্কার করুন এবং বিশ্বজুড়ে হাজার হাজার ম্যাচ উপভোগ করুন।", img: "https://www.mcwguide.com/wp-content/uploads/2024/07/Section-2-BN.png" }
        ].map((block, i) => (
          <div key={i} className="relative h-[160px] md:h-[200px] overflow-hidden group">
             <div className="absolute inset-0 bg-[#161b2e] transform skew-x-[-12deg] md:skew-x-[-20deg] origin-left border border-white/10 shadow-2xl" />
             <div className="absolute inset-0 flex items-center px-6 md:px-20 gap-6">
                <div className="flex-1 z-10">
                   <p className="text-white font-black text-sm md:text-xl leading-tight max-w-2xl drop-shadow-md">
                     {language === "Bangla" ? block.text : "Exciting game content and features available on the MCW mobile application."}
                   </p>
                </div>
                <div className="w-32 md:w-64 shrink-0 transition-transform duration-700 group-hover:scale-110">
                   <img src={block.img} alt="feature" className="w-full h-auto" />
                </div>
             </div>
          </div>
        ))}
        
        <div className="text-center py-12">
           <p className="text-xl md:text-3xl font-black italic text-white drop-shadow-lg animate-pulse">
             {language === "Bangla" ? "উত্তেজনাপূর্ণ নতুন গেম প্রতি সপ্তাহে যোগ করা হয়!" : "Exciting new games added every week!"}
           </p>
        </div>
      </section>

      {/* Instructions Tabs Section */}
      <section className="bg-[#111522] border-t border-casino-gold/30 py-20 px-4">
        <div className="container mx-auto px-4">
           <h2 className="text-center text-2xl md:text-4xl font-black mb-12 italic uppercase text-[#ffd81b]">
             {language === "Bangla" ? "অ্যাপ ডাউনলোড ইনস্ট্রাকশন" : "App Download Instructions"}
           </h2>

           <div className="flex p-1 bg-[#1a1e30] rounded-xl mb-12 shadow-inner">
              <button 
                onClick={() => setActiveTab("android")}
                className={`flex-1 py-4 md:py-6 rounded-lg text-lg md:text-2xl font-black uppercase tracking-tighter transition-all ${
                  activeTab === "android" ? "bg-[#b59854] text-white shadow-xl" : "text-white/40 hover:text-white/60"
                }`}
              >
                {language === "Bangla" ? "অ্যান্ড্রয়েড ডাউনলোড" : "Android Download"}
              </button>
              <button 
                onClick={() => setActiveTab("ios")}
                className={`flex-1 py-4 md:py-6 rounded-lg text-lg md:text-2xl font-black uppercase tracking-tighter transition-all ${
                  activeTab === "ios" ? "bg-[#b59854] text-white shadow-xl" : "text-white/40 hover:text-white/60"
                }`}
              >
                {language === "Bangla" ? "MCW আইওএস হোম স্ক্রীন" : "MCW iOS Home Screen"}
              </button>
           </div>

           <AnimatePresence mode="wait">
              <motion.div 
                key={activeTab}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-12"
              >
                <h3 className={`text-center text-3xl md:text-5xl font-black uppercase italic ${activeTab === 'android' ? 'text-[#a6d864]' : 'text-[#63daff]'}`}>
                   {activeTab === 'android' ? "Android Installation" : "iOS Home Screen Setup"}
                </h3>

                <div className="space-y-10">
                   {(activeTab === 'android' ? ANDROID_STEPS : IOS_STEPS).map((step, idx) => (
                      <div key={idx} className="flex flex-col items-center gap-6">
                         <div className="flex items-start gap-4 w-full">
                            <span className="text-4xl md:text-6xl font-black text-[#ffd81b] drop-shadow-[0_2px_0_#000] italic">
                               {step.id}
                            </span>
                            <p className="text-lg md:text-2xl font-bold leading-tight pt-2">
                               {step.text}
                            </p>
                         </div>
                         <div className="w-full max-w-[600px] rounded-2xl overflow-hidden border-4 border-white/5 shadow-2xl hover:border-casino-gold/30 transition-all">
                            <img src={step.img} alt={`step ${step.id}`} className="w-full h-auto" />
                         </div>
                      </div>
                   ))}
                </div>

                <div className="pt-12 text-center">
                   <a 
                    href={activeTab === 'android' ? "https://img.m167cw.com/download/mcw/mcw.apk" : "#"}
                    className="inline-block transition-transform active:scale-95"
                   >
                      <img 
                        src={activeTab === 'android' ? "https://www.mcwguide.com/wp-content/uploads/2024/07/Android-Download_.png" : "https://www.mcwguide.com/wp-content/uploads/2024/07/BN-IOS-HOME-SCREEN.png"} 
                        alt="Download" 
                        className="h-16 md:h-24 w-auto" 
                      />
                   </a>
                </div>
              </motion.div>
           </AnimatePresence>
        </div>
      </section>
    </div>
  );
};
