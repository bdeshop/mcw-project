import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronDown, Send } from "lucide-react";
import { useLanguage } from "../../context/LanguageContext";

// Gaming License Images
// @ts-ignore
import license1 from "../../assets/gaminglincence/imgi_58_license1.png";
// @ts-ignore
import license2 from "../../assets/gaminglincence/imgi_59_anjouan-egaming.png";
// @ts-ignore
import partnerLogo from "../../assets/global/imgi_265_anrich-nortje.png";
// @ts-ignore
import ambassadorLogo from "../../assets/global/imgi_276_pay59.png";
// @ts-ignore
import atleticoLogo from "../../assets/partners/atletico-de-madrid.png";
// @ts-ignore
import bundesligaLogo from "../../assets/partners/bundesliga.png";

// Custom Social Icons
const Facebook = (props: any) => (
  <svg {...props} viewBox="0 0 24 24" fill="currentColor">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
  </svg>
);

const Instagram = (props: any) => (
  <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);

const Youtube = (props: any) => (
  <svg {...props} viewBox="0 0 24 24" fill="currentColor">
    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
  </svg>
);

export const Footer = ({ onContactClick }: { onContactClick?: () => void }) => {
  const { t } = useLanguage();
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <footer className="bg-[#0e1220] pt-12 pb-32 md:pb-8 border-t border-white/5 text-white/60">
      <div className="container mx-auto px-4">
        {/* TOP SEO SECTION */}
        <div className="mb-10">
          <Link to="/" className="flex items-center gap-3 mb-4">
            <img src="/src/assets/logo/logo.webp" alt="MCW Logo" className="h-8 w-auto" />
          </Link>
          <h2 className="text-casino-gold text-lg font-bold mb-3 uppercase tracking-wide">
            {t("allRightsReserved").includes("২০২৬") ? "মেগা ক্যাসিনো ওয়ার্ল্ড: বাংলাদেশে ক্রিকেট এক্সচেঞ্জ এবং ক্যাসিনো সাইট" : "Mega Casino World: Cricket Exchange & Casino Sites in Bangladesh"}
          </h2>
          <div className={`text-[13px] leading-relaxed transition-all duration-700 overflow-hidden ${isExpanded ? "max-h-[1500px] opacity-100 mt-6" : "max-h-20 opacity-80"}`}>
            <div className="space-y-6">
              <p>
                {t("allRightsReserved").includes("২০২৬") ?
                  "একজন নবীন খেলোয়াড় হিসাবে, বাংলাদেশে সেরা বেটিং সাইটটি বেছে নেওয়া চ্যালেঞ্জিং হতে পারে কারণ এই সাইটগুলির বেশিরভাগই কেবল মানুষকে নিজেদের দিকে আকৃষ্ট করতে চায়। আপনি ক্যাসিনোগুলি সম্পর্কে সতর্ক হওয়া উচিত যা আপনাকে নিবন্ধনের বিনিময়ে এই সমস্ত সরবরাহ করে কারণ তারা যে স্বাগত বোনাস অফার করে তা সেরা ওয়েবসাইট হওয়ার মানদণ্ড নয়।" :
                  "As a novice player, it may be challenging to choose the top betting site in Bangladesh because the majority of these sites only seek to draw people to themselves. You should be wary of casinos that provide you all of these in exchange for registering because the welcome bonus they offer is not a criterion for being the finest website."
                }
              </p>

              {/* High-Fidelity Expanded Content */}
              <div className={isExpanded ? "block" : "hidden"}>
                <div className="space-y-6">
                  <p>
                    {t("allRightsReserved").includes("২০২৬") ?
                      "সঠিক বেটিং সাইট বেছে নেওয়ার গুরুত্বকে অতিরিক্ত বলা যাবে না কারণ সেখানেই আপনি আপনার তহবিল জমা করেন এবং যখন আপনি জিতেন তখন রিটার্ন পাওয়ার প্রত্যাশা করেন; আপনি যদি ভুলটি নির্বাচন করেন তবে আপনি ক্ষতির সম্মুখীন হওয়ার ঝুঁকি নেবেন। সেরা ক্রিকেট এক্সচেঞ্জ এবং ক্যাসিনো ওয়েবসাইটগুলির মধ্যে রয়েছে মেগা ক্যাসিনো ওয়ার্ল্ড, বাজি লাইভ, জিৎবাজ এবং উইনবিডিটি।" :
                      "The importance of choosing the right betting site cannot be overstated because that is where you deposit your funds and anticipate receiving returns when you win; if you select the incorrect one, you risk suffering a loss. The best cricket exchange and casino websites include Mega Casino World, Baji Live, Jeetbuzz and WinBDT."
                    }
                  </p>
                  <p>
                    {t("allRightsReserved").includes("২০২৬") ?
                      "বেটিং সাইট ব্যবহার করার সময় কিছু খেলোয়াড় সাইবার বুলিদের দ্বারা বিরক্ত হওয়ার কথা জানিয়েছেন বলে নিরাপত্তার গুরুত্বকে অতিরিক্ত বলা যাবে না। ক্যাসিনো বেছে নেওয়ার আগে নিশ্চিত করুন যে আপনার তথ্য সুরক্ষিত এবং সুরক্ষিত রয়েছে।" :
                      "Because some players have reported being bothered by cyberbullies when using a betting site, the importance of security cannot be overstated. Make sure your information is securely protected and guarded before picking a casino."
                    }
                  </p>
                  <p>
                    {t("allRightsReserved").includes("২০২৬") ?
                      "খেলোয়াড়দের লাইসেন্সিংকে অবহেলা করা উচিত নয় কারণ এটি একটি ক্যাসিনোর অপরিহার্য উপাদান। স্ট্যান্ডার্ড হিসেবে বিবেচিত হওয়ার জন্য একটি ক্যাসিনোর অবশ্যই একটি লাইসেন্স থাকতে হবে যা পুনর্নবীকরণযোগ্য এবং সেই লাইসেন্সটি রাখার জন্য নির্দিষ্ট প্রয়োজনীয়তা পূরণ করতে হবে। অন্যথায় ক্যাসিনো তার অনুমোদন হারানোর ঝুঁকি নেয়।" :
                      "Players should not neglect licensing because it is an essential component of a casino. A casino must have a license that is renewable in order to be considered standard, and in order to keep that license, certain requirements must be met. Otherwise, the casino risks losing its authorization."
                    }
                  </p>
                  <p>
                    {t("allRightsReserved").includes("২০২৬") ?
                      "এখানে অনেকগুলি বিভিন্ন ব্যাংকিং বিকল্প উপলব্ধ রয়েছে যা আপনাকে কেবল আপনার প্রয়োজন অনুসারে সবচেয়ে উপযুক্ত একটি বেছে নিতে হবে। খেলোয়াড়রা বিকাশ, রকেট, নগদ, ওকে ওয়ালেট এবং ক্রিপ্টোকারেন্সির মতো উপলব্ধ পদ্ধতিগুলি ব্যবহার করতে পারে।" :
                      "There are so many different banking options available that all you have to do is choose the one that best suits your needs. Players can use methods available like BKash, Rocket, Nagad, OKWallet and CryptoCurrency."
                    }
                  </p>
                  <p>
                    {t("allRightsReserved").includes("২০২৬") ?
                      "নতুন প্রযুক্তি যা আমাদের ক্রমবর্ধমান বিশ্বের অংশ তারা অনলাইন গেমিং অভিজ্ঞতা বাড়াতে এবং যোগ্য বাংলাদেশী গেমারদের জন্য এটি অ্যাক্সেসযোগ্য করতে কাজ করবে। অফশোর ক্যাসিনোগুলি লেনদেনের নতুন ফর্মগুলির জন্য ধন্যবাদ প্রসারিত হয়েছে যা বিকাশ করছে, অনলাইন গেমিংয়ের উপর ইসলামী রাষ্ট্রের নিষেধাজ্ঞা সত্ত্বেও। আমরা লেনদেনের এই ফর্মটি সম্পর্কে কথা বলব যা আমাদের পরবর্তী পয়েন্টে গোপনীয়তা এবং নিরাপত্তা উভয়ই সরবরাহ করে।" :
                      "New technologies that are part of our growing world will serve to enhance the online gaming experience and make it accessible to Bangladeshi gamers who qualify. Offshore casinos have expanded thanks to the new forms of transaction that are developing, despite the Islamic state's prohibitions on online gaming. We shall talk about this form of transaction, which offers both privacy and security, in our next point."
                    }
                  </p>
                </div>
              </div>
            </div>
          </div>
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="mt-4 flex items-center gap-2 bg-[#232a44] border border-white/10 px-6 py-2.5 rounded text-[13px] font-bold text-white hover:bg-[#2d3658] transition-all"
          >
            {isExpanded ? t("readLess") : t("readMore")}
            <ChevronDown className={`h-4 w-4 transition-transform ${isExpanded ? "rotate-180" : ""}`} />
          </button>
        </div>

        <div className="h-[1px] bg-white/5 w-full mb-10" />

        {/* PARTNERS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          <div className="space-y-4">
            <p className="text-casino-gold text-[13px] font-bold uppercase tracking-widest">{t("partners")}</p>
            <div className="flex gap-6">
              <div className="flex items-center gap-2 group">
                <div className="h-10 w-10 bg-[#232a44] rounded flex items-center justify-center p-1 border border-white/5 group-hover:border-casino-gold transition-colors overflow-hidden">
                  <img src={atleticoLogo} alt="Atlético de Madrid" className="h-full w-auto object-contain" />
                </div>
                <div>
                  <p className="text-white text-[11px] font-black leading-none uppercase">ATLÉTICO</p>
                  <p className="text-[9px] opacity-60 uppercase">DE MADRID</p>
                </div>
              </div>
              <div className="flex items-center gap-2 group">
                <div className="h-10 w-10 bg-[#232a44] rounded flex items-center justify-center p-1 border border-white/5 group-hover:border-casino-gold transition-colors overflow-hidden">
                  <img src={bundesligaLogo} alt="Bundesliga" className="h-full w-auto object-contain" />
                </div>
                <div>
                  <p className="text-white text-[11px] font-black leading-none uppercase">BUNDESLIGA</p>
                  <p className="text-[9px] opacity-60 uppercase">PARTNER</p>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <p className="text-casino-gold text-[13px] font-bold uppercase tracking-widest">{t("brandAmbassadors")}</p>
            <div className="flex items-center gap-3">
            <div className="flex items-center gap-3 group">
              <div className="h-10 w-10 bg-[#232a44] rounded-full flex items-center justify-center overflow-hidden border border-white/10 group-hover:border-casino-gold transition-colors">
                <img src={ambassadorLogo} alt="Official Ambassador" className="h-full w-full object-cover" />
              </div>
              <div>
                <p className="text-white text-[11px] font-black leading-none uppercase">Official Ambassador</p>
                <p className="text-[9px] opacity-60 tracking-wider">Brand Ambassador</p>
              </div>
            </div>
            </div>
          </div>
        </div>

        {/* LICENSES & SOCIAL GRID */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-10">
          <div className="space-y-4">
            <p className="text-casino-gold text-[13px] font-bold uppercase tracking-widest">{t("license")}</p>
            <div className="flex gap-4">
              <div className="h-10 w-auto   transition-all duration-300">
                <img src={license1} alt="Curacao License" className="h-full w-auto object-contain" />
              </div>
              <div className="h-10 w-auto  transition-all duration-300">
                <img src={license2} alt="Anjouan License" className="h-full w-auto object-contain" />
              </div>
            </div>
          </div>
          <div className="space-y-4">
            <p className="text-casino-gold text-[13px] font-bold uppercase tracking-widest">{t("officialPartner")}</p>
            <div className="flex items-center gap-3 group">
              <div className="h-10 w-10 bg-[#232a44] rounded-full flex items-center justify-center overflow-hidden border border-white/10 group-hover:border-casino-gold transition-colors">
                <img src={partnerLogo} alt="Official Partner" className="h-full w-full object-cover" />
              </div>
              <p className="text-white text-[11px] font-black uppercase italic">Anrich Nortje</p>
            </div>
          </div>
          <div className="space-y-4">
            <p className="text-casino-gold text-[13px] font-bold uppercase tracking-widest">{t("appDownload")}</p>
            <button className="flex items-center gap-2 bg-[#1b2135] border border-white/10 px-4 py-1.5 rounded hover:bg-white/5 transition-all">
              <div className="bg-green-500 h-6 w-6 rounded flex items-center justify-center">
                <div className="h-4 w-4 bg-white/20 rounded-full" />
              </div>
              <div className="text-left">
                <p className="text-[8px] leading-none opacity-60 uppercase">Download for</p>
                <p className="text-[11px] font-black text-white uppercase leading-none">Android</p>
              </div>
            </button>
          </div>
          <div className="space-y-4">
            <p className="text-casino-gold text-[13px] font-bold uppercase tracking-widest">{t("community")}</p>
            <div className="flex gap-3">
              {[Facebook, Send, Instagram, Youtube].map((Icon, i) => (
                <a key={i} href="#" className="h-9 w-9 rounded-full bg-white/5 flex items-center justify-center hover:bg-casino-gold hover:text-black transition-all">
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* PAYMENT METHODS */}
        <div className="space-y-4 mb-10">
          <p className="text-casino-gold text-[13px] font-bold uppercase tracking-widest">{t("paymentMethods")}</p>
          <div className="flex flex-wrap items-center gap-6 md:gap-8">
            {[
              "/src/assets/payment/imgi_271_pay22.png",
              "/src/assets/payment/imgi_272_pay33.png",
              "/src/assets/payment/imgi_273_pay34.png",
              "/src/assets/payment/imgi_278_pay61.png",
              "/src/assets/payment/imgi_67_pay45.png"
            ].map((img, i) => (
              <div key={i} className="h-6 md:h-8  transition-all duration-300">
                <img src={img} alt={`Payment ${i}`} className="h-full w-auto object-contain" />
              </div>
            ))}
          </div>
        </div>
        {/* Add Heare Page Name */}
        <div className="flex flex-wrap items-center gap-y-4 mb-10">
          {[
            { label: "Responsible Gaming", path: "/Responsible-Gaming" },
            { label: "About Us", path: "/About-Us" },
            { label: "Security", path: "/Security" },
            { label: "Privacy Policy", path: "/Privacy-Policy" },
            { label: "FAQ", path: "/FAQ" },
            { label: "Contact Us", onClick: onContactClick },
          ].map((link: any, i, arr) => (
            <React.Fragment key={i}>
              {link.path ? (
                <Link 
                  to={link.path}
                  className="text-white/40 hover:text-casino-gold text-[13px] font-medium transition-all underline underline-offset-4 decoration-white/10 hover:decoration-casino-gold"
                >
                  {link.label}
                </Link>
              ) : (
                <button 
                  onClick={link.onClick}
                  className="text-white/40 hover:text-casino-gold text-[13px] font-medium transition-all underline underline-offset-4 decoration-white/10 hover:decoration-casino-gold"
                >
                  {link.label}
                </button>
              )}
              {i < arr.length - 1 && (
                <span className="mx-4 text-white/10 text-sm">|</span>
              )}
            </React.Fragment>
          ))}
        </div>
        <div className="flex justify-between items-center pt-8 border-t border-white/5">
          <p className="text-[12px] font-medium tracking-wide">{t("allRightsReserved")}</p>
          <div className="flex items-center gap-6 opacity-30 grayscale">
            <div className="h-8 w-8 bg-white/20 rounded-full flex items-center justify-center font-black text-[10px]">18+</div>
            <div className="h-8 w-8 bg-white/20 rounded-full" />
            <div className="h-8 w-8 bg-white/20 rounded-full" />
          </div>
        </div>
      </div>
    </footer>
  );
};
