import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "../../context/LanguageContext";

const TIMELINE_DATA = [
  {
    side: "right",
    img: "https://www.mcwguide.com/wp-content/uploads/2025/10/BN.gif",
    text: "উত্তেজনাপূর্ণ খবর – New City VIP Alliance থেকে, সবচেয়ে সক্রিয় অনলাইন ক্যাসিনো কমিউনিটিগুলোর প্রাণবন্ত সংযোগস্থল। সম্প্রতি ঘোষণা করেছে যে ভারতীয়-বাংলা অভিনেত্রী ও প্রোডিউসার ঋতাভরী চক্রবর্তী Mega Casino World-এর নতুন সেলিব্রিটি অ্যাম্বাসেডর হিসেবে যোগ দিচ্ছেন।"
  },
  {
    side: "left",
    img: "https://www.mcwguide.com/wp-content/uploads/2024/07/BN_MCW_SEO_Bangla-Tigers-Partner_500x242.gif",
    text: "MCW এর সাথে একটি উত্তেজনাপূর্ণ নতুন অংশীদারিত্ব দ্বারা সমর্থিত Bangla Tigers Mississauga GT20 কানাডায় একটি উল্লেখযোগ্য প্রভাব ফেলতে প্রস্তুত।"
  },
  {
    side: "right",
    img: "https://www.mcwguide.com/wp-content/uploads/2024/07/SFU-Box-GIF-BN.gif",
    text: "সান ফ্রান্সিসকো ইউনিকর্নস, আমেরিকায় মেজর লীগ ক্রিকেট (MLC) টি-টোয়েন্টি ক্রিকেট লিগের উদ্বোধনী দল। মেগা ক্যাসিনো ওয়ার্ল্ডের সাথে অংশীদারিত্ব করেছে।"
  },
  {
    side: "left",
    img: "https://www.mcwguide.com/wp-content/uploads/2024/05/MCW_BN_SEO_Celebrity-Ambassador_Shobnom-Bubly_500x242.gif.gif",
    text: "MCW আমাদের নতুন সেলিব্রিটি ব্র্যান্ড অ্যাম্বাসেডর শোবনম বুবলিকে স্বাগত জানায়! শবনম বুবলী বাংলাদেশের বিনোদন শিল্পের একজন বিখ্যাত ব্যক্তিত্ব।"
  },
  {
    side: "right",
    img: "https://www.mcwguide.com/wp-content/uploads/2024/05/MCW_BN_SEO_Celebrity-Ambassador_Mahiya-Mahi_500x242.gif",
    text: "মেগা ক্যাসিনো ওয়ার্ল্ড অতি আনন্দের সাথে ঘোষণা করছে আমাদের নতুন সেলিব্রিটি ব্র্যান্ড অ্যাম্বাসেডর, মাহিয়া মাহি।"
  },
  {
    side: "left",
    img: "https://www.mcwguide.com/wp-content/uploads/2024/08/ADM_BN.gif",
    text: "অ্যাটলেটিকো ডি মাদ্রিদ MCW এর সাথে একটি যুগান্তকারী সহযোগিতা প্রতিষ্ঠা করেছে, অফিসিয়াল আঞ্চলিক স্পনসর হয়ে উঠেছে।"
  },
  {
    side: "right",
    img: "https://www.mcwguide.com/wp-content/uploads/2023/12/BDT-BUNDESLIGA-BOX-GIF.gif",
    text: "বুন্দেসলিগা ইন্টারন্যাশনাল এবং মেগা ক্যাসিনো ওয়ার্ল্ড একটি নতুন দুই বছরের আঞ্চলিক অংশীদারিত্ব স্বাক্ষর করেছে।"
  }
];

const SPORTS_TIMELINE = [
  {
    side: "left",
    img: "https://www.mcwguide.com/wp-content/uploads/2023/10/05-Over-40s.gif",
    text: "2023 ওভার 40s ক্রিকেট গ্লোবাল কাপ করাচিতে শুরু হয়, যেখানে MCW প্রাথমিক শার্ট এবং টাইটেল স্পন্সর হিসাবে কাজ করে৷"
  },
  {
    side: "right",
    img: "https://www.mcwguide.com/wp-content/uploads/2023/10/07-QUETTA-GLADIATORS.gif",
    text: "কোয়েটা গ্ল্যাডিয়েটরস, একটি বিশিষ্ট পাকিস্তান সুপার লিগ (PSL) ফ্র্যাঞ্চাইজি, MCW Sports এর সাথে একটি স্পনসরশিপ চুক্তি স্বাক্ষর করেছে৷"
  },
  {
    side: "left",
    img: "https://www.mcwguide.com/wp-content/uploads/2023/10/06-BARBADOS-ROYALS-LOGO.gif",
    text: "বার্বাডোজ রয়্যালস MCW স্পোর্টসের সাথে 6ixty T10 টুর্নামেন্টের জন্য একটি অংশীদারিত্ব চুক্তি সিল করেছে।"
  }
];

const FEATURES = [
  { icon: "https://www.mcwguide.com/wp-content/uploads/2023/09/icon_PrivacySecurity.png", title: "গোপনীয়তা এবং নিরাপত্তা", text: "MCW গোপনীয়তা তথ্যগুলোকে অত্যন্ত গুরুত্বপূর্ণ বলে মনে করে।" },
  { icon: "https://www.mcwguide.com/wp-content/uploads/2023/09/icon_FastSecureDepositWithdrawal.png", title: "দ্রুত ও নিরাপদ ডিপোজিট / উইথড্র", text: "আমরা একটি নিরাপদ এবং দ্রুত ডিপোজিট / উইথড্র প্রক্রিয়া প্রদান করি।" },
  { icon: "https://www.mcwguide.com/wp-content/uploads/2023/09/icon_PromotionBonus.png", title: "প্রমোশন এবং বোনাস", text: "একজন নতুন খেলোয়াড় হিসেবে, আপনি 100% পর্যন্ত বোনাস পেতে পারেন।" },
  { icon: "https://www.mcwguide.com/wp-content/uploads/2023/09/icon_LatestGames.png", title: "নতুন গেমস", text: "উত্তেজনাকে বাঁচিয়ে রাখতে আমরা ক্রমাগত আমাদের গেম নির্বাচন আপডেট করি।" },
  { icon: "https://www.mcwguide.com/wp-content/uploads/2023/09/icon_support.png", title: "24/7 সাপোর্ট", text: "আমাদের নিবেদিত প্রতিনিধিরা আপনাকে সহায়তা করার জন্য 24/7 ঘন্টা রয়েছে।" },
  { icon: "https://www.mcwguide.com/wp-content/uploads/2023/09/icon_MobileApp.png", title: "মোবাইল অ্যাপ", text: "আমাদের মোবাইল অ্যাপ এখন অ্যান্ড্রয়েড ডিভাইসে ডাউনলোডের জন্য প্রযোজ্য।" }
];

const PROVIDERS = [
  "https://mcwpartnerships.com/wp-content/uploads/2023/09/logo_jili.png",
  "https://mcwpartnerships.com/wp-content/uploads/2023/09/logo_pgsoft.png",
  "https://mcwpartnerships.com/wp-content/uploads/2023/09/logo_spade.png",
  "https://mcwpartnerships.com/wp-content/uploads/2023/09/logo_jdb.png",
  "https://mcwpartnerships.com/wp-content/uploads/2023/09/logo_fc.png",
  "https://mcwpartnerships.com/wp-content/uploads/2023/09/logo_pragmaticplay.png"
];

export const PartnershipPage = () => {
  const { language } = useLanguage();
  const [activeTab, setActiveTab] = useState<"south" | "southeast">("south");

  return (
    <div className="bg-[#0a0d1a] font-['Montserrat',_sans-serif] text-white overflow-x-hidden min-h-screen">
      
      {/* Hero Section */}
      <section className="relative pt-[124px] md:pt-[154px] pb-20 bg-[url('https://mcwpartnerships.com/wp-content/themes/mcw-partnership/assets/images/home_bg.jpg')] bg-cover bg-fixed text-center">
         <div className="absolute inset-0 bg-black/40" />
         <div className="container mx-auto px-4 relative z-10 space-y-12">
            <img src="https://mcwpartnerships.com/wp-content/uploads/2023/08/mcw-hlogo.png" className="h-16 md:h-24 mx-auto" alt="MCW Partnerships" />
            <h1 className="text-3xl md:text-6xl font-black uppercase italic drop-shadow-2xl">
               <span className="text-[#f0c43e]">বিশ্বের অন্বেষণ</span><br/>নন-স্টপ গেমিং বিনোদন
            </h1>

            <div className="max-w-[800px] mx-auto space-y-8">
               <div className="flex bg-[#1a1e30]/80 backdrop-blur-md p-1 rounded-full border border-white/10 shadow-2xl">
                  <button 
                    onClick={() => setActiveTab("south")}
                    className={`flex-1 py-4 md:py-6 rounded-full font-black text-sm md:text-xl uppercase transition-all ${activeTab === 'south' ? 'bg-[#b59854] text-white shadow-xl' : 'text-white/40'}`}
                  >
                    দক্ষিণ এশিয়া
                  </button>
                  <button 
                    onClick={() => setActiveTab("southeast")}
                    className={`flex-1 py-4 md:py-6 rounded-full font-black text-sm md:text-xl uppercase transition-all ${activeTab === 'southeast' ? 'bg-[#b59854] text-white shadow-xl' : 'text-white/40'}`}
                  >
                    দক্ষিণ - পূর্ব এশিয়া
                  </button>
               </div>

               <div className="grid grid-cols-3 md:grid-cols-5 gap-6">
                  {(activeTab === 'south' ? [
                    { name: "বাংলাদেশ", icon: "https://mcwpartnerships.com/wp-content/uploads/2023/08/bn_icon-flag.png" },
                    { name: "পাকিস্তান", icon: "https://mcwpartnerships.com/wp-content/uploads/2023/08/pk_icon-flag.png" },
                    { name: "ভারত", icon: "https://mcwpartnerships.com/wp-content/uploads/2023/08/in_icon-flag.png" },
                    { name: "নেপাল", icon: "https://mcwpartnerships.com/wp-content/uploads/2023/12/np-icon.png" },
                    { name: "শ্রীলঙ্কা", icon: "https://mcwpartnerships.com/wp-content/uploads/2023/12/sri-lanka-icon.png" }
                  ] : [
                    { name: "ফিলিপাইন", icon: "https://mcwpartnerships.com/wp-content/uploads/2023/08/ph_icon-flag.png" },
                    { name: "মালয়েশিয়া", icon: "https://mcwpartnerships.com/wp-content/uploads/2023/08/my_icon-flag.png" },
                    { name: "ভিয়েতনাম", icon: "https://mcwpartnerships.com/wp-content/uploads/2023/08/vn_icon-flag.png" },
                    { name: "কম্বোডিয়া", icon: "https://mcwpartnerships.com/wp-content/uploads/2023/08/kh_icon-flag.png" },
                    { name: "সাউথ কোরিয়া", icon: "https://mcwpartnerships.com/wp-content/uploads/2023/12/korea-icon.png" }
                  ]).map((item, i) => (
                    <motion.div 
                      key={i} 
                      whileHover={{ y: -5 }}
                      className="flex flex-col items-center gap-2 group cursor-pointer"
                    >
                       <img src={item.icon} className="w-12 h-12 md:w-20 md:h-20 rounded-full border-2 border-white/10 group-hover:border-[#f0c43e] transition-all shadow-xl" alt={item.name} />
                       <span className="text-[10px] md:text-xs font-black uppercase tracking-widest">{item.name}</span>
                    </motion.div>
                  ))}
               </div>
            </div>
         </div>
      </section>

      {/* Main Timeline Section */}
      <section className="py-24 md:py-32 bg-[#0a0d1a] relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1px] h-full bg-[#f0c43e]/30 hidden md:block" />
        <div className="container mx-auto px-4 relative z-10">
           <h2 className="text-center text-3xl md:text-5xl font-black italic uppercase text-[#f0c43e] mb-20 tracking-tighter">MCW পার্টনারশিপ টাইমলাইন</h2>
           
           <div className="space-y-24 md:space-y-0">
              {TIMELINE_DATA.map((item, i) => (
                <div key={i} className={`flex flex-col md:flex-row items-center gap-8 md:gap-0 ${item.side === 'left' ? 'md:flex-row-reverse' : ''}`}>
                   <div className="flex-1 w-full flex justify-center px-4 md:px-12">
                      <motion.div 
                        initial={{ opacity: 0, x: item.side === 'left' ? 50 : -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="bg-[#111522] p-6 rounded-2xl border border-white/5 shadow-2xl space-y-4 hover:border-[#f0c43e]/30 transition-all group"
                      >
                         <div className="overflow-hidden rounded-xl">
                            <img src={item.img} className="w-full h-auto transition-transform duration-700 group-hover:scale-105" alt="partnership" />
                         </div>
                         <p className="text-white/70 text-sm md:text-base leading-relaxed">{item.text}</p>
                      </motion.div>
                   </div>
                   <div className="hidden md:flex h-6 w-6 rounded-full bg-[#0a0d1a] border-4 border-[#f0c43e] shadow-[0_0_20px_#f0c43e] z-10" />
                   <div className="flex-1 hidden md:block" />
                </div>
              ))}
           </div>
        </div>
      </section>

      {/* MCW Sports Section */}
      <section className="py-24 bg-[#111522] border-y border-white/5 relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1px] h-full bg-[#f0c43e]/30 hidden md:block" />
        <div className="container mx-auto px-4 relative z-10">
           <div className="text-center mb-20 space-y-6">
              <h2 className="text-3xl md:text-5xl font-black italic uppercase text-[#f0c43e] tracking-tighter">MCW স্পোর্টস চ্যানেল</h2>
              <p className="max-w-3xl mx-auto text-white/60 text-sm md:text-lg leading-relaxed">
                 MCW Sports হল MCW দ্বারা সমর্থিত একটি স্পোর্টস-কেন্দ্রিক চ্যানেল, যা অতুলনীয় স্পোর্টস সংবাদ, অন্তর্দৃষ্টিপূর্ণ পূর্বাভাস এবং ব্যাপক মূল্যায়ন প্রদানের লক্ষ্যে নিবেদিত।
              </p>
           </div>

           <div className="space-y-24 md:space-y-0">
              {SPORTS_TIMELINE.map((item, i) => (
                <div key={i} className={`flex flex-col md:flex-row items-center gap-8 md:gap-0 ${item.side === 'left' ? 'md:flex-row-reverse' : ''}`}>
                   <div className="flex-1 w-full flex justify-center px-4 md:px-12">
                      <motion.div 
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="bg-[#0a0d1a] p-6 rounded-2xl border border-white/5 shadow-2xl space-y-4 hover:border-[#f0c43e]/30 transition-all group"
                      >
                         <div className="overflow-hidden rounded-xl">
                            <img src={item.img} className="w-full h-auto transition-transform duration-700 group-hover:scale-105" alt="sports partnership" />
                         </div>
                         <p className="text-white/70 text-sm md:text-base leading-relaxed">{item.text}</p>
                      </motion.div>
                   </div>
                   <div className="hidden md:flex h-6 w-6 rounded-full bg-[#111522] border-4 border-[#f0c43e] shadow-[0_0_20px_#f0c43e] z-10" />
                   <div className="flex-1 hidden md:block" />
                </div>
              ))}
           </div>
        </div>
      </section>

      {/* Why Choose Section (Cards) */}
      <section className="py-32 px-4 bg-[#0a0d1a] text-center">
         <h2 className="text-3xl md:text-5xl font-black italic uppercase text-[#f0c43e] mb-20 tracking-tighter">কেন MCW ক্যাসিনো পছন্দ করবেন</h2>
         
         <div className="container mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {FEATURES.map((feature, i) => (
              <div key={i} className="perspective-1000 h-[320px] group">
                 <div className="relative w-full h-full transition-transform duration-700 preserve-3d group-hover:rotate-y-180 cursor-pointer">
                    <div className="absolute inset-0 backface-hidden bg-[#111522] rounded-2xl border border-white/10 flex flex-col items-center justify-center p-8 gap-6 shadow-2xl">
                       <img src={feature.icon} className="h-20 w-20" alt="icon" />
                       <h3 className="text-lg md:text-xl font-black uppercase text-white">{feature.title}</h3>
                    </div>
                    <div className="absolute inset-0 backface-hidden rotate-y-180 bg-[#b59854] rounded-2xl flex items-center justify-center p-8 text-center shadow-2xl">
                       <p className="text-[#0a0d1a] font-bold text-sm md:text-base italic leading-relaxed">{feature.text}</p>
                    </div>
                 </div>
              </div>
            ))}
         </div>

         <button className="mt-20 h-16 px-12 bg-[#b59854] text-white font-black text-xl uppercase italic tracking-widest rounded-lg hover:brightness-110 transition-all shadow-[0_10px_30px_rgba(181,152,84,0.3)]">
            আনন্দের জন্য এখন যোগদান করুন !
         </button>
      </section>

      {/* Game Providers Carousel */}
      <section className="py-20 bg-[#111522] overflow-hidden">
         <div className="container mx-auto px-4 mb-12">
            <h2 className="text-center text-2xl md:text-4xl font-black italic uppercase text-[#f0c43e] tracking-tighter">MCW ক্যাসিনো গেম প্রদানকারী</h2>
         </div>
         <div className="flex gap-12 animate-marquee-infinite">
            {[...PROVIDERS, ...PROVIDERS].map((src, i) => (
              <img key={i} src={src} className="h-12 md:h-16 opacity-60 hover:opacity-100 transition-opacity" alt="provider" />
            ))}
         </div>
      </section>

      {/* Partnership Footer */}
      <footer className="bg-[#0a0d1a] border-t border-white/5 py-16 text-center space-y-10">
         <img src="https://mcwpartnerships.com/wp-content/uploads/2023/08/mcw-hlogo.png" className="h-12 mx-auto" alt="Footer Logo" />
         <div className="space-y-4">
            <p className="text-white/40 font-black uppercase text-[10px] tracking-[0.3em]">অফিসিয়াল ব্র্যান্ড পার্টনার</p>
            <img src="https://mcwpartnerships.com/wp-content/uploads/2024/11/NC_entrypage-banner.png" className="h-12 mx-auto grayscale opacity-40" alt="NC" />
         </div>
         <p className="text-white/20 text-xs font-bold uppercase tracking-widest">© 2022 MCW Copyrights. All Rights Reserved</p>
      </footer>

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee-infinite {
          animation: marquee 30s linear infinite;
          width: fit-content;
        }
      `}</style>
    </div>
  );
};
