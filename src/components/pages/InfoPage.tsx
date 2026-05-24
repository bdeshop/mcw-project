import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { ChevronRight, ChevronLeft } from "lucide-react";
import { useLanguage } from "../../context/LanguageContext";

const SIDEBAR_LINKS = [
  { label: "About Us", path: "/About-Us" },
  { label: "Privacy Policy", path: "/Privacy-Policy" },
  { label: "Terms & Conditions", path: "/Terms-and-Conditions" },
  { label: "Security", path: "/Security" },
  { label: "Responsible Gaming", path: "/Responsible-Gaming" },
  { label: "18+ Only", path: "/18-plus" },
  { label: "KYC Policy", path: "/KYC-Policy" },
  { label: "AML Policy", path: "/AML-Policy" },
  { label: "FAQ", path: "/FAQ" },
];

const ImageFooter = () => {
  const { language } = useLanguage();
  return (
    <div className="bg-[#0a0d1a] border-t border-white/5 py-8 px-6">
      <div className="max-w-[1340px] mx-auto flex flex-col md:flex-row items-center justify-between gap-6 px-4 md:px-4">
        <div className="text-white/30 text-[10px] md:text-xs font-bold text-center md:text-left">
          {language === "Bangla" ? "মেগা ক্যাসিনো ওয়ার্ল্ড © 2026 সর্বস্বত্ব সংরক্ষিত।" : "MEGA CASINO WORLD © 2026 ALL RIGHTS RESERVED."}
        </div>
        <div className="flex flex-col items-center md:items-end gap-2">
           <span className="text-casino-gold text-[10px] font-bold uppercase tracking-widest opacity-50">
             {language === "Bangla" ? "অফিসিয়াল ব্র্যান্ড পার্টনার" : "OFFICIAL BRAND PARTNER"}
           </span>
           <div className="flex items-center gap-4">
              <img src="/src/assets/partners/partner_1.png" alt="Partner" className="h-6 md:h-8 opacity-60 hover:opacity-100 transition-opacity" />
              <img src="/src/assets/partners/partner_2.png" alt="Partner" className="h-6 md:h-8 opacity-60 hover:opacity-100 transition-opacity" />
           </div>
        </div>
      </div>
    </div>
  );
};

export const InfoPage = () => {
  const { type } = useParams<{ type: string }>();
  const { language } = useLanguage();
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [type]);

  const renderContent = () => {
    const isBengali = language === "Bangla";
    const title = type === "About-Us" 
      ? (isBengali ? "আমাদের সম্পর্কে" : "About Us") 
      : type?.replace(/-/g, " ");
    
    if (type === "About-Us") {
      return (
        <div className="space-y-10 mx-auto py-6">
          <div className="text-center space-y-4">
            <h1 className="text-casino-gold text-2xl md:text-4xl font-black uppercase tracking-tight italic ">
              {isBengali ? "আমাদের তথ্য কেন্দ্রে স্বাগতম" : "Welcome to our Information Center"}
            </h1>
            <div className="h-1 w-24 bg-casino-gold mx-auto " />
          </div>

          <div className="space-y-8 text-[#8E96B7] text-sm md:text-[17px] leading-relaxed text-justify md:text-left bg-white/2 p-6 md:p-10  backdrop-blur-sm">
            <p className="first-letter:text-4xl first-letter:font-black first-letter:text-casino-gold first-letter:mr-3 first-letter:float-left">
              {isBengali 
                ? "মেগা ক্যাসিনো ওয়ার্ল্ড (MCW) একটি শীর্ষস্থানীয় অনলাইন গেমিং ওয়েবসাইট, যা স্পোর্টস বেটিং, অনলাইন ক্যাসিনো এবং অনলাইন গেম সরবরাহ করে। আমরা ২০১৫ সাল থেকে এশিয়া প্যাসিফিক বাজারে সেবা দিয়ে আসছি। আমরা নিয়ম ও শর্তাবলীতে বর্ণিত বিভিন্ন এখতিয়ারে সম্পূর্ণরূপে লাইসেন্সপ্রাপ্ত এবং নিয়ন্ত্রিত এবং MCW এই নিয়মের মধ্যে কঠোরভাবে কাজ করে।"
                : "Mega Casino World (MCW) is a leading online gaming website, providing sports betting, online casino, and online games. We have been serving the Asia Pacific market since 2015. We are fully licensed and regulated in various jurisdictions as described in the Terms and Conditions and MCW operates strictly within these regulations."
              }
            </p>

            <p>
              {isBengali
                ? "নিরাপদ এবং ব্যক্তিগত পরিবেশ এবং আমাদের পণ্যের অখণ্ডতা MCW অনলাইন গেমিং অভিজ্ঞতার মৌলিক চালক। আমাদের কাছে সর্বাধিক উন্নত নিরাপত্তা ব্যবস্থা রয়েছে এবং একটি সম্পূর্ণ নিরাপদ এবং ন্যায্য ইন্টারনেট জুয়া অভিজ্ঞতা নিশ্চিত করার জন্য আমাদের গেমস এবং প্রক্রিয়াগুলি ক্রমাগত নিরীক্ষা করছে। আমরা আপনার সমস্ত তথ্য গোপন রাখি, এবং আমরা আমাদের গোপনীয়তা নীতি অনুসারে ছাড়া এটি কখনও শেয়ার করব না বা তৃতীয় পক্ষের কাছে বিক্রি করব না।"
                : "A safe and private environment and the integrity of our products are the fundamental drivers of the MCW online gaming experience. We have the most advanced security measures available and are constantly auditing our games and processes to ensure a completely safe and fair online gambling experience. We keep all your information private, and we will never share or sell it to third parties except in accordance with our privacy policy."
              }
            </p>

            <p>
              {isBengali
                ? "আমরা স্পোর্টস বাজার এবং বিশ্বব্যাপী অন্যান্য স্পোর্টস ইভেন্টগুলি জুড়ে সর্বোত্তম মূল্য দেওয়ার চেষ্টা করি। আমরা আমাদের ক্যাসিনোতে বিভিন্ন ধরণের লাইভ গেম এবং স্লট গেম সরবরাহ করি। MCW এ আমরা প্রতিশ্রুতি দিচ্ছি আপনি বিশ্বের সর্বোচ্চ শ্রেণীর অনলাইন গেমিং বিনোদন উপভোগ করবেন।"
                : "We strive to provide the best value across sports markets and other sports events worldwide. We provide a wide variety of live games and slot games in our casino. At MCW, we promise you will enjoy world-class online gaming entertainment."
              }
            </p>

            <div className="bg-white/5 p-6 rounded-xl border-l-4 border-casino-gold italic">
              <p>
                {isBengali
                  ? "প্রতি সপ্তাহে 7 দিন 24 ঘন্টা লাইভ কাস্টমার সাপোর্ট পাওয়া যায়, আমাদের অত্যন্ত প্রশিক্ষিত এবং বন্ধুত্বপূর্ণ কর্মীরা নিশ্চিত করবে যে কোন প্রশ্ন দ্রুত, ভদ্রভাবে এবং দক্ষতার সাথে মোকাবিলা করা হবে এবং সমাধান করা হবে।"
                  : "Live customer support is available 24 hours a day, 7 days a week. Our highly trained and friendly staff will ensure that any questions are dealt with and resolved quickly, politely, and efficiently."
                }
              </p>
            </div>

            <p>
              {isBengali
                ? "আমাদের মিশন দায়িত্বশীল খেলোয়াড়দের জন্য সেরা অনলাইন জুয়া অভিজ্ঞতা প্রদান করা, দয়া করে নির্দ্বিধায় আপনার মন্তব্য বা পরামর্শ সহ ফোন বা ইমেলের মাধ্যমে আমাদের সাথে যোগাযোগ করুন।"
                : "Our mission is to provide the best online gambling experience for responsible players. Please feel free to contact us via phone or email with your comments or suggestions."
              }
            </p>

            <p>
              {isBengali
                ? "আমরা আপনার সুবিধার্থে বিভিন্ন ধরণের নিরাপদ এবং সহজ পেমেন্ট পদ্ধতি অফার করি। আমরা “আপনার গ্রাহককে জানুন” (KYC) এবং মানি লন্ডারিং বিরোধী (AML) নীতি মেনে চলি এবং তৃতীয় পক্ষের আর্থিক ও নিয়ন্ত্রক কর্তৃপক্ষের সাথে সহযোগিতার সর্বোচ্চ মান নিশ্চিত করতে সহযোগিতা করি।"
                : "We offer a wide variety of safe and easy payment methods for your convenience. We comply with 'Know Your Customer' (KYC) and Anti-Money Laundering (AML) policies and cooperate with third-party financial and regulatory authorities to ensure the highest standards of cooperation."
              }
            </p>
          </div>

          <div className="text-center py-6 border-t border-white/5">
            <p className="text-white/40 text-[13px] font-bold">
              {isBengali ? "মেগা ক্যাসিনো ওয়ার্ল্ড © 2026 সর্বস্বত্ব সংরক্ষিত।" : "Mega Casino World © 2026 All Rights Reserved."}
            </p>
          </div>
        </div>
      );
    }

    return (
      <div className="space-y-8 text-center max-w-3xl mx-auto py-4">
        <h2 className="text-casino-gold text-2xl md:text-3xl font-black mb-10 uppercase tracking-tight italic drop-shadow-lg">
            {title}
        </h2>
        <div className="space-y-6 text-[#8E96B7] text-sm md:text-base leading-relaxed text-justify">
            <p>
                {isBengali ? 
                "আমরা ২০১৫ সাল থেকে এশিয়া প্যাসিফিক বাজারে সেবা দিয়ে আসছি। আমরা নিয়ম ও শর্তাবলীতে বর্ণিত বিভিন্ন এখতিয়ারে সম্পূর্ণরূপে লাইসেন্সপ্রাপ্ত এবং নিয়ন্ত্রিত এবং MCW এই নিয়মের মধ্যে কঠোরভাবে কাজ করে।" :
                "We have been serving the Asia Pacific market since 2015. We are fully licensed and regulated in various jurisdictions as stated in the Terms and Conditions and MCW operates strictly within these regulations."}
            </p>
            <p>
                {isBengali ?
                "নিরাপদ এবং ব্যক্তিগত পরিবেশ এবং আমাদের পণ্যের অখণ্ডতা MCW অনলাইন গেমিং অভিজ্ঞতার মৌলিক চালক। আমাদের কাছে সর্বাধিক উন্নত নিরাপত্তা ব্যবস্থা রয়েছে এবং একটি সম্পূর্ণ নিরাপদ এবং ন্যায্য ইন্টারনেট জুয়া অভিজ্ঞতা নিশ্চিত করার জন্য আমাদের গেমস এবং প্রক্রিয়াগুলি ক্রমাগত নিরীক্ষা করছে।" :
                "A safe and private environment and the integrity of our products is the fundamental driver of the MCW online gaming experience. We have the most advanced security measures available and are continually auditing our games and processes."}
            </p>
            <div className="h-px bg-white/5 w-1/3 mx-auto my-10" />
            <p className="italic text-white/40 text-xs">
                {isBengali ? "বিস্তারিত তথ্যের জন্য অনুগ্রহ করে আমাদের ২৪/৭ লাইভ সাপোর্টের সাথে যোগাযোগ করুন।" : "For detailed information, please contact our 24/7 live support."}
            </p>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-[#101424] pt-[106px] md:pt-[128px] flex flex-col font-sans">
      <div className="flex-1 flex relative">
                {/* Left Sidebar - Fixed & Fully Collapsible */}
                <aside 
                    className={`hidden md:block fixed top-[128px] left-0 h-[calc(100vh-128px)] bg-[#161b2e] border-r border-white/5 transition-all duration-500 ease-in-out z-[65] overflow-y-auto no-scrollbar ${
                        isSidebarCollapsed ? "w-0 border-none" : "w-[320px]"
                    }`}
                >
                    <div className={`p-8 space-y-2 transition-all duration-500 ${isSidebarCollapsed ? "opacity-0 invisible" : "opacity-100 visible"}`}>
                <div className="mb-8">
                    <h2 className="text-white text-lg font-bold leading-tight uppercase tracking-tighter italic">
                        {language === "Bangla" ? "তথ্য কেন্দ্র" : "INFO CENTER"}
                    </h2>
                </div>
                <nav className="flex flex-col gap-1">
                    {SIDEBAR_LINKS.map((link) => {
                        const isActive = type?.toLowerCase() === link.path.slice(1).toLowerCase();
                        return (
                            <Link
                                key={link.path}
                                to={link.path}
                                className={`px-4 py-2.5 rounded-md text-xs md:text-[13px] font-black transition-all uppercase tracking-widest ${
                                    isActive 
                                    ? "bg-login-grad text-white shadow-xl shadow-casino-gold/10 italic border border-white/5" 
                                    : "text-white/40 hover:text-white hover:bg-white/5"
                                }`}
                            >
                                {language === "Bangla" ? (
                                    link.label === "About Us" ? "আমাদের সম্পর্কে" :
                                    link.label === "Privacy Policy" ? "গোপনীয়তা নীতি" :
                                    link.label === "Terms & Conditions" ? "শর্তাবলী" :
                                    link.label === "Security" ? "নিরাপত্তা" :
                                    link.label === "Responsible Gaming" ? "দায়িত্বশীল গেমিং" :
                                    link.label === "FAQ" ? "প্রায়শই জিজ্ঞাসিত প্রশ্নাবলী" : link.label
                                ) : link.label}
                            </Link>
                        );
                    })}
                </nav>
            </div>
        </aside>

        {/* Floating Toggle Button */}
        <button
            onClick={() => setIsSidebarCollapsed(!isSidebarCollapsed)}
            className={`hidden md:flex fixed top-[148px] h-10 w-10 rounded-r-xl bg-login-grad text-white items-center justify-center shadow-2xl transition-all duration-500 z-[70] hover:scale-110 active:scale-95 ${
                isSidebarCollapsed ? "left-0" : "left-[320px]"
            }`}
        >
            {isSidebarCollapsed ? <ChevronRight className="h-5 w-5" /> : <ChevronLeft className="h-5 w-5" />}
        </button>

        {/* Main Content Area */}
        <div 
            className={`flex-1 flex flex-col min-h-screen bg-[#101424] transition-all duration-500 ease-in-out ${
                isSidebarCollapsed ? "md:ml-0" : "md:ml-[320px]"
            }`}
        >
          <main className="flex-1">
              <div className="container mx-auto px-4 py-8 md:px-12 md:py-16">
                  <div className="bg-[#161b2e] rounded-2xl p-6 md:p-16 border border-white/5 shadow-2xl">
                      {renderContent()}
                  </div>
              </div>
              <ImageFooter />
          </main>
        </div>
      </div>
    </div>
  );
};
