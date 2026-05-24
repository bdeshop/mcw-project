import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Send, Mail, Download, MessageSquare, ChevronDown, Menu, X, PlayCircle, Image as ImageIcon, HelpCircle } from "lucide-react";
import { useLanguage } from "../../context/LanguageContext";

// --- Types ---
type ViewType = "COMMISSION" | "PROMOTIONS" | "PRODUCT" | "GUIDE" | "CONTACT";

const AffiliateHeader = ({ activeView, setActiveView }: { activeView: ViewType; setActiveView: (v: ViewType) => void }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const { t } = useLanguage();
    const navItems: { label: string; key: any; view: ViewType }[] = [
        { label: "COMMISSION", key: "commission", view: "COMMISSION" },
        { label: "PROMOTIONS", key: "promotions", view: "PROMOTIONS" },
        { label: "PRODUCT", key: "product", view: "PRODUCT" },
        { label: "AFFILIATE GUIDE", key: "affiliateGuide", view: "GUIDE" },
        { label: "CONTACT US", key: "contactUs", view: "CONTACT" },
    ];

    return (
        <header className="w-full fixed top-0 z-[100] font-sans">
            {/* Top Bar */}
            <div className="bg-[#0b0e18] py-1.5 px-4 hidden md:block border-b border-white/5">
                <div className="max-w-[1240px] mx-auto flex justify-between items-center text-[11px] text-white/60 font-bold uppercase tracking-tight">
                    <div className="flex items-center gap-6">
                        <div className="flex items-center gap-1.5 text-casino-gold">
                            <img src="https://flagcdn.com/w20/bd.png" alt="BD" className="h-3" />
                            <span>English</span>
                            <ChevronDown className="h-3 w-3" />
                        </div>
                    </div>
                    <div className="flex items-center gap-6">
                        <a href="#" className="hover:text-white flex items-center gap-1.5 transition-colors"><Download className="h-3 w-3" /> Download App</a>
                        <a href="#" className="hover:text-white flex items-center gap-1.5 transition-colors"><MessageSquare className="h-3 w-3" /> Submit Ticket</a>
                        <a href="#" className="hover:text-white flex items-center gap-1.5 transition-colors"><Send className="h-3 w-3" /> Telegram</a>
                        <a href="#" className="hover:text-white flex items-center gap-1.5 transition-colors"><Mail className="h-3 w-3" /> Email</a>
                    </div>
                </div>
            </div>

            {/* Main Logo Nav */}
            <div className="bg-[#111522] px-4 py-3 md:py-4 border-b border-white/5 shadow-2xl">
                <div className="w-full max-w-[1340px] mx-auto flex justify-between items-center">
                    <div className="flex items-center gap-4">
                        <button className="md:hidden text-white" onClick={() => setIsMenuOpen(true)}>
                            <Menu className="h-6 w-6" />
                        </button>
                        <Link to="/">
                            <img src="https://bd.mcwaffiliates.com/wp-content/uploads/2023/07/MCW_Aff_Logo.png" alt="MCW Affiliates" className="h-8 md:h-10 w-auto cursor-pointer" />
                        </Link>
                    </div>
                    <div className="flex items-center gap-3">
                        <button className="h-9 md:h-10 px-6 rounded text-white text-[13px] font-black uppercase italic bg-white/5 border border-white/10 hover:bg-white/10 transition-all shadow-inner">Sign Up</button>
                        <button className="h-9 md:h-10 px-8 rounded text-white text-[13px] font-black uppercase italic bg-login-grad hover:brightness-110 transition-all shadow-xl shadow-casino-gold/10 border border-white/5">Login</button>
                    </div>
                </div>
            </div>

            {/* Secondary Nav */}
            <nav className="bg-[#1a2135] border-b border-white/10 hidden md:block">
                <div className="w-full max-w-[1340px] mx-auto flex items-center h-14">
                    {/* Home Button */}
                    <Link to="/" className="h-full px-6 flex items-center justify-center border-r border-white/10 hover:bg-white/5 transition-colors text-white">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/></svg>
                    </Link>
                    
                    <div className="flex items-center h-full">
                        {navItems.map((item, index) => (
                            <React.Fragment key={item.view}>
                                <button
                                    onClick={() => setActiveView(item.view)}
                                    className={`h-full px-6 md:px-10 text-[12px] font-black uppercase transition-all whitespace-nowrap flex items-center justify-center min-w-fit tracking-tight ${
                                        activeView === item.view 
                                        ? 'bg-login-grad text-white italic shadow-[inset_0_0_20px_rgba(0,0,0,0.2)]' 
                                        : 'text-white hover:bg-white/5'
                                    }`}
                                >
                                    {t(item.key)}
                                </button>
                                {index < navItems.length - 1 && (
                                    <div className="h-4 w-[1px] bg-white/20 mx-0.5" />
                                )}
                            </React.Fragment>
                        ))}
                    </div>
                </div>
            </nav>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        initial={{ x: "-100%" }}
                        animate={{ x: 0 }}
                        exit={{ x: "-100%" }}
                        className="fixed inset-0 bg-[#111522] z-[200] p-6 flex flex-col gap-8 md:hidden"
                    >
                        <div className="flex justify-between items-center">
                            <img src="https://bd.mcwaffiliates.com/wp-content/uploads/2023/07/MCW_Aff_Logo.png" alt="MCW" className="h-8 w-auto" />
                            <button className="text-white" onClick={() => setIsMenuOpen(false)}><X className="h-6 w-6" /></button>
                        </div>
                        <div className="flex flex-col gap-4">
                            {navItems.map((item) => (
                                <button 
                                    key={item.view}
                                    onClick={() => { setActiveView(item.view); setIsMenuOpen(false); }}
                                    className={`text-left py-3 px-4 rounded font-black text-sm uppercase tracking-widest transition-all ${
                                        activeView === item.view ? "bg-login-grad text-white italic" : "text-white/60"
                                    }`}
                                >
                                    {t(item.key)}
                                </button>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
};

export const AffiliatePage = () => {
    const [activeView, setActiveView] = useState<ViewType>("COMMISSION");
    const [promoTab, setPromoTab] = useState<"ONGOING" | "COMPLETED">("ONGOING");
    const [guideTab, setGuideTab] = useState<"FAQ" | "VID" | "BAN">("FAQ");

    return (
        <div className="bg-[#0b0e18] font-sans text-white overflow-x-hidden min-h-screen">
            <AffiliateHeader activeView={activeView} setActiveView={setActiveView} />

            <main className="pt-[106px] md:pt-[136px]">
                <AnimatePresence mode="wait">
                    {/* --- PROMOTIONS VIEW --- */}
                    {activeView === "PROMOTIONS" && (
                        <motion.div
                            key="promotions"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            className="space-y-0"
                        >
                            {/* Hero Banner */}
                            <section className="bg-[#111522] py-12 md:py-20">
                                <div className="max-w-[1340px] mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-12">
                                    <div className="flex-1 space-y-6 text-center md:text-left">
                                        <h2 className="text-3xl md:text-5xl font-black italic tracking-tighter uppercase leading-tight">
                                            Elevate Your Marketing Strategy to the next Level with <span className="text-casino-gold">MCWAffiliates!</span>
                                        </h2>
                                        <p className="text-white/60 text-lg md:text-xl font-bold max-w-2xl">
                                            Maximize your profits with <span className="text-casino-gold">MCW Promotions</span> – the key to elevate your earnings and maximizing your business’s profitability.
                                        </p>
                                    </div>
                                    <div className="flex-1">
                                        <img src="https://bd.mcwaffiliates.com/wp-content/uploads/2024/02/img_promotion.png" className="w-full max-w-lg mx-auto drop-shadow-2xl" alt="Promotion" />
                                    </div>
                                </div>
                            </section>

                            {/* Tabs & List */}
                            <section className="bg-[#0b0e18] py-12">
                                <div className="max-w-[1340px] mx-auto px-4 space-y-12">
                                    <div className="flex items-center justify-center gap-1 bg-[#1a2135] p-1.5 rounded-xl border border-white/5 w-fit mx-auto">
                                        <button 
                                            onClick={() => setPromoTab("ONGOING")}
                                            className={`px-8 py-3 rounded-lg font-black uppercase text-xs tracking-[0.2em] transition-all ${promoTab === "ONGOING" ? "bg-login-grad text-white italic shadow-xl" : "text-white/40 hover:text-white"}`}
                                        >
                                            Ongoing
                                        </button>
                                        <button 
                                            onClick={() => setPromoTab("COMPLETED")}
                                            className={`px-8 py-3 rounded-lg font-black uppercase text-xs tracking-[0.2em] transition-all ${promoTab === "COMPLETED" ? "bg-login-grad text-white italic shadow-xl" : "text-white/40 hover:text-white"}`}
                                        >
                                            Completed
                                        </button>
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                                        {promoTab === "ONGOING" ? (
                                            <>
                                                {[
                                                    { title: "IPL RUN-CHASE 2026", img: "https://bd.mcwaffiliates.com/wp-content/uploads/2026/03/NCVIP_BDT_EN_AFF_IPL-2026_Run-Chase-Challenge_600x400-1.jpg" },
                                                    { title: "Affiliate FTD Boost", img: "https://bd.mcwaffiliates.com/wp-content/uploads/2024/07/MCW-Affi_BDT_EN_Aff-Promo_NL_600x400.jpg" },
                                                    { title: "AFFILIATE REFERRAL PROGRAM", img: "https://bd.mcwaffiliates.com/wp-content/uploads/2024/04/EN_BDT_Affiliate-Promo_600x400-1.jpg" },
                                                ].map((item, i) => (
                                                    <div key={i} className="group bg-[#161b2e] rounded-2xl overflow-hidden border border-white/5 hover:border-casino-gold/30 transition-all">
                                                        <div className="aspect-[3/2] overflow-hidden relative">
                                                            <div className="absolute top-4 left-4 bg-login-grad text-white text-[10px] font-black px-3 py-1 rounded-full z-10 italic uppercase">Ongoing</div>
                                                            <img src={item.img} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" alt={item.title} />
                                                        </div>
                                                        <div className="p-6 text-center space-y-6">
                                                            <h3 className="font-black text-lg uppercase tracking-tight italic">{item.title}</h3>
                                                            <div className="flex flex-col gap-2">
                                                                <button className="h-11 w-full rounded bg-white/5 text-white font-black text-xs uppercase tracking-widest hover:bg-white/10 transition-all border border-white/10">More Details</button>
                                                                <button className="h-11 w-full rounded bg-login-grad text-white font-black text-xs uppercase tracking-widest italic shadow-lg hover:brightness-110 transition-all border border-white/5">Sign Up</button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                ))}
                                            </>
                                        ) : (
                                            <div className="col-span-full py-20 text-center text-white/20 italic font-bold">No completed promotions found for this period.</div>
                                        )}
                                    </div>
                                </div>
                            </section>
                        </motion.div>
                    )}

                    {/* --- COMMISSION VIEW --- */}
                    {activeView === "COMMISSION" && (
                        <motion.div
                            key="commission"
                            initial={{ opacity: 0, scale: 0.98 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.98 }}
                            className="space-y-0"
                        >
                             <section className="bg-[#111522] py-12 md:py-20">
                                <div className="max-w-[1340px] mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-12">
                                    <div className="flex-1 space-y-6 text-center md:text-left">
                                        <h2 className="text-3xl md:text-5xl font-black italic tracking-tighter uppercase leading-tight">
                                            Reach the stars with <span className="text-casino-gold">MCW AFFILIATE!</span><br />
                                            <span className="text-white/60">Let’s earn unlimited commission together!</span>
                                        </h2>
                                        <div className="text-white/60 text-sm md:text-lg font-bold space-y-4 max-w-2xl">
                                            <p>MCW is renowned for not only offering competitive commissions but also for delivering value to our Affiliates.</p>
                                            <p>You can earn up to <span className="text-casino-gold italic">52% commission</span> from MCW Affiliate Programme. <strong className="text-white">Limited Time Offer!</strong></p>
                                            <p>The more real money players & revenue you generate, the more you will earn.</p>
                                        </div>
                                    </div>
                                    <div className="flex-1">
                                        <img src="https://bd.mcwaffiliates.com/wp-content/uploads/2023/05/img_commission-plan-1.png" className="w-full max-w-md mx-auto drop-shadow-2xl" alt="Commission Plan" />
                                    </div>
                                </div>
                            </section>

                            <section className="py-16 bg-[#0b0e18]">
                                <div className="max-w-[1100px] mx-auto px-4 space-y-20">
                                    {/* Structure Table */}
                                    <div className="space-y-8">
                                        <div className="text-center space-y-2">
                                            <h3 className="text-xl md:text-2xl font-black uppercase tracking-widest text-white/40">Elevate Your Earnings</h3>
                                            <h2 className="text-2xl md:text-4xl font-black uppercase italic tracking-tighter text-casino-gold">MCW FAST TRACK WEEKLY COMMISSION STRUCTURE</h2>
                                        </div>
                                        <div className="overflow-x-auto rounded-2xl border border-white/10 shadow-2xl bg-[#161b2e]">
                                            <table className="w-full text-center border-collapse">
                                                <thead>
                                                    <tr className="bg-[#1a2135] text-casino-gold font-black uppercase text-[10px] md:text-xs tracking-widest italic">
                                                        <th className="py-5 px-4 border-b border-white/5">Weekly Active Players</th>
                                                        <th className="py-5 px-4 border-b border-white/5"></th>
                                                        <th className="py-5 px-4 border-b border-white/5">Weekly Affiliate Netloss</th>
                                                        <th className="py-5 px-4 border-b border-white/5"></th>
                                                        <th className="py-5 px-4 border-b border-white/5">Commission %</th>
                                                    </tr>
                                                </thead>
                                                <tbody className="font-bold text-xs md:text-sm">
                                                    <tr className="hover:bg-white/5 transition-colors">
                                                        <td className="py-6 border-b border-white/5">1 to 5</td>
                                                        <td className="py-6 border-b border-white/5 text-white/40">AND</td>
                                                        <td className="py-6 border-b border-white/5">৳1 - ৳300,000</td>
                                                        <td className="py-6 border-b border-white/5 text-casino-gold italic">EARN</td>
                                                        <td className="py-6 border-b border-white/5 font-black text-lg">40%</td>
                                                    </tr>
                                                    <tr className="bg-white/[0.02] hover:bg-white/5 transition-colors">
                                                        <td className="py-6 border-b border-white/5">6 - 19</td>
                                                        <td className="py-6 border-b border-white/5 text-white/40">AND</td>
                                                        <td className="py-6 border-b border-white/5">৳300,001 - ৳1,000,000</td>
                                                        <td className="py-6 border-b border-white/5 text-casino-gold italic">EARN</td>
                                                        <td className="py-6 border-b border-white/5 font-black text-lg">45%</td>
                                                    </tr>
                                                    <tr className="hover:bg-white/5 transition-colors">
                                                        <td className="py-6"> &gt; 20</td>
                                                        <td className="py-6 text-white/40">AND</td>
                                                        <td className="py-6"> &gt; ৳1,000,000</td>
                                                        <td className="py-6 text-casino-gold italic">EARN</td>
                                                        <td className="py-6 font-black text-2xl text-casino-gold italic">50%</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>

                                    {/* Formula Section */}
                                    <div className="space-y-12">
                                        <h3 className="text-center font-black text-2xl md:text-3xl uppercase italic tracking-tighter text-white">COMMISSION CALCULATION FORMULA:</h3>
                                        <div className="bg-[#161b2e] p-4 md:p-8 rounded-3xl border border-white/5 shadow-2xl">
                                            <img src="https://bd.mcwaffiliates.com/wp-content/uploads/2026/04/img_revenueShare.png" className="w-full max-w-4xl mx-auto rounded-lg shadow-xl brightness-110" alt="Formula" />
                                        </div>
                                        
                                        <div className="space-y-6">
                                            <div className="flex items-center gap-3 font-black text-sm uppercase tracking-widest text-casino-gold italic bg-[#1a2135] w-fit px-6 py-2 rounded-full border border-white/5 mx-auto md:mx-0">
                                                Bonus = Promotion Bonus + VIP Cash Bonus
                                            </div>
                                            <div className="overflow-x-auto rounded-2xl border border-white/10 shadow-2xl bg-[#161b2e]">
                                                <table className="w-full text-center border-collapse min-w-[800px]">
                                                    <thead>
                                                        <tr className="bg-[#1a2135] text-white/40 font-black uppercase text-[9px] tracking-[0.2em] italic">
                                                            <th className="py-4 px-4 border-b border-white/5">Affiliate Account</th>
                                                            <th className="py-4 px-4 border-b border-white/5">Weekly Netloss</th>
                                                            <th className="py-4 px-4 border-b border-white/5">Active Players</th>
                                                            <th className="py-4 px-4 border-b border-white/5">Deduction</th>
                                                            <th className="py-4 px-4 border-b border-white/5">Bonus</th>
                                                            <th className="py-4 px-4 border-b border-white/5">Comm %</th>
                                                            <th className="py-4 px-4 border-b border-white/5 text-casino-gold">Amount</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody className="font-bold text-[11px] md:text-[13px]">
                                                        {[
                                                            { id: "A", loss: "50,000", players: 2, ded: "9,000", bon: "5,000", pct: "40%", amt: "14,400" },
                                                            { id: "B", loss: "100,000", players: 3, ded: "18,000", bon: "5,000", pct: "40%", amt: "30,800" },
                                                            { id: "C", loss: "350,000", players: 5, ded: "63,000", bon: "5,000", pct: "40%", amt: "282,000" },
                                                            { id: "D", loss: "-300,000", players: 15, ded: "-", bon: "-", pct: "-", amt: "" },
                                                            { id: "E", loss: "500,000", players: 15, ded: "90,000", bon: "50,000", pct: "45%", amt: "162,000" },
                                                            { id: "F", loss: "1,500,000", players: 20, ded: "270,000", bon: "100,000", pct: "50%", amt: "565,000", highlight: true },
                                                        ].map((row, i) => (
                                                            <tr key={i} className={`hover:bg-white/5 transition-colors ${row.highlight ? 'bg-casino-gold/5' : ''}`}>
                                                                <td className="py-4 border-b border-white/5 font-black uppercase italic">Affiliate {row.id}</td>
                                                                <td className="py-4 border-b border-white/5">{row.loss}</td>
                                                                <td className="py-4 border-b border-white/5">{row.players}</td>
                                                                <td className="py-4 border-b border-white/5 text-white/30">{row.ded}</td>
                                                                <td className="py-4 border-b border-white/5 text-white/30">{row.bon}</td>
                                                                <td className={`py-4 border-b border-white/5 font-black ${row.highlight ? 'text-casino-gold' : ''}`}>{row.pct}</td>
                                                                <td className={`py-4 border-b border-white/5 font-black text-base ${row.highlight ? 'text-casino-gold italic scale-110' : ''}`}>{row.amt}</td>
                                                            </tr>
                                                        ))}
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Rules Section */}
                                    <div className="space-y-8">
                                        <details className="group bg-[#161b2e] rounded-2xl border border-white/10 overflow-hidden shadow-2xl">
                                            <summary className="p-8 cursor-pointer flex justify-between items-center font-black text-lg md:text-xl uppercase tracking-tighter italic group-open:text-casino-gold transition-colors">
                                                General Rules
                                                <ChevronDown className="h-6 w-6 transition-transform group-open:rotate-180" />
                                            </summary>
                                            <div className="px-8 pb-8 space-y-4 text-white/60 text-sm md:text-base font-bold leading-relaxed border-t border-white/5 pt-6">
                                                {[
                                                    "Effective October 28th, 2024, all new affiliates must complete KYC verification before withdrawing their commission.",
                                                    "Affiliate commission ranges from 40% to 50%, depending on your weekly active players and their net losses.",
                                                    "Affiliate must have at Least 5 Active players to be eligible to withdraw the commission. If you earned commission with 1 to 4 Active players last week, you must have 5 Active players this period in order to withdraw your previous week’s commission.",
                                                    "Commissions are calculated on a weekly basis.",
                                                    "18% of the player’s profit & loss will be deducted as operation and admin cost.",
                                                    "The profit and losses from P2P games (Ludo and BPoker) are excluded from commission calculation.",
                                                    "Apart from the number of active players, you should ensure that every player you have referred is a genuine active player in MCW.",
                                                    "Failure to continuously promote the site will be deemed as a breach of contract and lead to termination.",
                                                    "Deduction of the payments: Fraudulent activity will lead to revenue share deduction or player removal.",
                                                    "Commissions settlement every Wednesday, no later than 5:00 PM.",
                                                    "Negative amount will be carried over into the following week(s). Negative balances will be deducted from available commissions.",
                                                    "All amounts are exclusive of all charges, taxes, duties, and fees. You are solely responsible for taxes in your jurisdiction."
                                                ].map((rule, i) => (
                                                    <div key={i} className="flex gap-4">
                                                        <span className="text-casino-gold font-black italic shrink-0">{i + 1}.</span>
                                                        <p>{rule}</p>
                                                    </div>
                                                ))}
                                            </div>
                                        </details>

                                        <div className="flex flex-col md:flex-row items-center justify-center gap-6 pt-8">
                                            <div className="text-center md:text-left space-y-2">
                                                <p className="font-black text-sm md:text-base italic uppercase tracking-tight">Are you an existing Affiliate?</p>
                                                <a href="#" className="inline-flex items-center gap-2 text-casino-gold font-black text-sm uppercase hover:text-white transition-colors">
                                                    <Send className="h-4 w-4" /> Contact us by Telegram
                                                </a>
                                            </div>
                                            <div className="w-px h-12 bg-white/10 hidden md:block" />
                                            <div className="text-center md:text-left space-y-2">
                                                <p className="font-black text-sm md:text-base italic uppercase tracking-tight">Earn up to 51% monthly commission</p>
                                                <a href="#" className="h-10 px-6 rounded-lg bg-login-grad text-white font-black text-xs uppercase italic flex items-center shadow-lg hover:brightness-110 transition-all border border-white/5">
                                                    Learn about MCWSignature
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>
                        </motion.div>
                    )}

                    {/* --- PRODUCT VIEW --- */}
                    {activeView === "PRODUCT" && (
                        <motion.div
                            key="product"
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            className="space-y-0"
                        >
                            <section className="bg-[#111522] py-12 md:py-20">
                                <div className="max-w-[1340px] mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-12">
                                    <div className="flex-1 space-y-6 text-center md:text-left">
                                        <h2 className="text-3xl md:text-5xl font-black italic tracking-tighter uppercase leading-tight">
                                            <span className="text-casino-gold">MCW</span> offers a wide variety of games to enjoy and exciting bonuses and promotions.
                                        </h2>
                                        <p className="text-white/60 text-lg md:text-xl font-bold">
                                            With <span className="text-casino-gold italic">Slots, Sports, Live Casino, Table games and Lottery</span> whatever your game is, we’ve got you covered.
                                        </p>
                                    </div>
                                    <div className="flex-1">
                                        <img src="https://bd.mcwaffiliates.com/wp-content/uploads/2023/09/img_product_bn.png" className="w-full max-w-md mx-auto drop-shadow-2xl" alt="Products" />
                                    </div>
                                </div>
                            </section>

                            <section className="py-16 bg-[#0b0e18]">
                                <div className="max-w-[1340px] mx-auto px-4 space-y-12">
                                    <h2 className="text-center text-2xl md:text-4xl font-black uppercase italic tracking-tighter"><span className="text-casino-gold">MCW</span> PRODUCTS</h2>
                                    
                                    <div className="grid grid-cols-1 gap-8">
                                        {[
                                            { title: "SPORTS", img: "https://bd.mcwaffiliates.com/wp-content/uploads/2023/05/banner_mcw-sports-scaled.jpg" },
                                            { title: "CASINO", img: "https://bd.mcwaffiliates.com/wp-content/uploads/2023/05/banner_mcw-casino-1-scaled.jpg" },
                                            { title: "SLOTS", img: "https://bd.mcwaffiliates.com/wp-content/uploads/2023/05/banner_mcw-slots-scaled.jpg" },
                                            { title: "TABLE", img: "https://bd.mcwaffiliates.com/wp-content/uploads/2023/05/banner_mcw-table-1-scaled.jpg" },
                                            { title: "LOTTERY", img: "https://bd.mcwaffiliates.com/wp-content/uploads/2023/05/banner_mcw-lottery-1-scaled.jpg" },
                                            { title: "MCW PRODUCTS", img: "https://bd.mcwaffiliates.com/wp-content/uploads/2023/05/MCW-Products-scaled.jpg" },
                                        ].map((p, i) => (
                                            <a 
                                                key={i} 
                                                href="https://mcwbd55.com/bd/en//page/guest/promotions.jsp" 
                                                target="_blank" 
                                                rel="noopener noreferrer"
                                                className="relative group rounded-3xl overflow-hidden border border-white/10 shadow-2xl transition-all duration-500 hover:border-casino-gold/50"
                                            >
                                                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/10 transition-colors z-10" />
                                                <img src={p.img} className="w-full aspect-[21/9] md:aspect-[25/9] object-cover group-hover:scale-105 transition-transform duration-1000" alt={p.title} />
                                                <div className="absolute inset-0 z-20 flex items-center justify-center">
                                                    <div className="text-center space-y-4 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                                        <span className="block text-white font-black text-3xl md:text-6xl uppercase italic tracking-tighter drop-shadow-2xl">{p.title}</span>
                                                        <div className="h-1 w-0 bg-casino-gold mx-auto group-hover:w-32 transition-all duration-700 shadow-[0_0_15px_#f0c43e]" />
                                                    </div>
                                                </div>
                                            </a>
                                        ))}
                                    </div>
                                </div>
                            </section>
                        </motion.div>
                    )}

                    {/* --- GUIDE VIEW --- */}
                    {activeView === "GUIDE" && (
                        <motion.div
                            key="guide"
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 30 }}
                            className="space-y-0"
                        >
                             <section className="bg-[#111522] py-12 md:py-20">
                                <div className="max-w-[1340px] mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-12">
                                    <div className="flex-1 space-y-6 text-center md:text-left">
                                        <h2 className="text-3xl md:text-5xl font-black italic tracking-tighter uppercase leading-tight">
                                            Here are some useful <span className="text-casino-gold">Affiliate marketing guide resources</span> to help you get started.
                                        </h2>
                                        <p className="text-white/60 text-lg md:text-xl font-bold">
                                            Affiliate guide will provide you with all the information you need to get started and maximize your earning potential as an <span className="text-casino-gold italic">MCW</span> affiliate.
                                        </p>
                                    </div>
                                    <div className="flex-1">
                                        <img src="https://bd.mcwaffiliates.com/wp-content/uploads/2023/09/img_affiliate-guide_bn.png" className="w-full max-w-md mx-auto drop-shadow-2xl" alt="Guide" />
                                    </div>
                                </div>
                            </section>

                            <section className="py-12 bg-[#0b0e18]">
                                <div className="max-w-[1340px] mx-auto px-4 space-y-12">
                                    <div className="flex flex-wrap items-center justify-center gap-4">
                                        {[
                                            { id: "FAQ", label: "FREQUENTLY ASKED QUESTIONS", icon: HelpCircle },
                                            { id: "VID", label: "VIDEO TUTORIALS", icon: PlayCircle },
                                            { id: "BAN", label: "BANNERS", icon: ImageIcon },
                                        ].map((t) => (
                                            <button
                                                key={t.id}
                                                onClick={() => setGuideTab(t.id as any)}
                                                className={`h-14 px-10 rounded-2xl font-black uppercase text-xs tracking-widest flex items-center gap-3 transition-all border ${
                                                    guideTab === t.id 
                                                    ? "bg-login-grad text-white italic border-white/5 shadow-[0_10px_30px_rgba(0,0,0,0.5)] scale-105" 
                                                    : "bg-[#1a2135] text-white/40 border-white/5 hover:text-white hover:bg-[#1f2841]"
                                                }`}
                                            >
                                                <t.icon className="h-5 w-5" /> {t.label}
                                            </button>
                                        ))}
                                    </div>

                                    <div className="container mx-auto px-4">
                                        {/* FAQ SECTION */}
                                        {guideTab === "FAQ" && (
                                            <div className="space-y-4">
                                                {[
                                                    { q: "When is the commission pay out date?", a: "For Monthly – Affiliate commission is calculated MONTHLY based on player activities from the month’s 1st to 30th/31st. Affiliates are paid on the 7th of EVERY MONTH for last month’s commission. For Weekly – Affiliate commission is calculated on a weekly basis, with a cut-off period from Monday to Sunday. Payouts are processed on the following Wednesday for the previous week’s commission." },
                                                    { q: "WHAT IS THE MCW AFFILIATE PROGRAM?", a: "The MCW Affiliate Program is a Partnership Program which allows you to receive commission on every player you referred to MCW based on the player’s wagering activity over the course of the player’s account life." },
                                                    { q: "IS THERE A SETUP FEE?", a: "To sign up in MCW Affiliate Program is absolutely free!" },
                                                    { q: "HOW CAN I REGISTER WITH THE AFFILIATE PROGRAM?", a: "Kindly click the link in our header to create an Affiliate account, you may also contact our affiliate managers for assistance." },
                                                    { q: "HOW TO RESET MY AFFILIATE ACCOUNT PASSWORD?", a: "Click on the “LOG IN” button in the top right corner. Please click the “Forgot Password?” button to reset your password. Enter your Affiliate id and your registered email address and click Submit." },
                                                    { q: "CAN AN AFFILIATE HAVE MORE THAN ONE ACCOUNT?", a: "Affiliate shall not have more than one affiliate account, nor shall an Affiliate be allowed to earn commissions on their own or through any related parties." },
                                                    { q: "WHAT IS AN AFFILIATE LINK?", a: "We use your affiliate ID for your tracking link so we can trace the players joining from your website. You can assign specific KEYWORDS to help you track which channel performed the best (e.g., fb for Facebook, fr for Forums)." },
                                                    { q: "DO YOU CARRY OVER NEGATIVE BALANCES?", a: "Yes, when you incur a negative balance, it will be carried over to the next month. Negative balances will be deducted from future commissions until cleared." },
                                                    { q: "HOW CAN I WITHDRAW MY COMMISSION?", a: "In MCW, you need a player account to withdraw your affiliate commission. We encourage our Affiliate to register a PLAYER ACCOUNT and enroll the account as a pay-out account by contacting your dedicated Affiliate Manager." },
                                                ].map((item, i) => (
                                                    <details key={i} className="group bg-[#161b2e] rounded-2xl border border-white/5 overflow-hidden shadow-xl transition-all hover:border-white/10">
                                                        <summary className="p-8 cursor-pointer flex justify-between items-center font-black text-sm md:text-base uppercase tracking-tight italic group-open:text-casino-gold transition-colors">
                                                            {item.q}
                                                            <ChevronDown className="h-6 w-6 transition-transform group-open:rotate-180" />
                                                        </summary>
                                                        <div className="px-8 pb-8 text-white/60 text-sm md:text-base font-bold leading-relaxed border-t border-white/5 pt-6">
                                                            {item.a}
                                                        </div>
                                                    </details>
                                                ))}
                                            </div>
                                        )}

                                        {/* VIDEO TUTORIALS SECTION */}
                                        {guideTab === "VID" && (
                                            <div className="space-y-6">
                                                {[
                                                    { title: "HOW TO CREATE AN AFFILIATE ACCOUNT?", id: "9lpMJ2qYmqU" },
                                                    { title: "HOW TO RESET YOUR AFFILIATE ACCOUNT PASSWORD?", id: "16Y2-TaxBEw" },
                                                    { title: "HOW TO UNDERSTAND YOUR AFFILIATE ACCOUNT?", id: "D4Q1TWTTYnI" },
                                                    { title: "HOW TO WITHDRAW YOUR COMMISSION?", id: "ypSvZe6wT2w" },
                                                ].map((vid, i) => (
                                                    <details key={i} className="group bg-[#161b2e] rounded-2xl border border-white/5 overflow-hidden shadow-xl">
                                                        <summary className="p-8 cursor-pointer flex justify-between items-center font-black text-sm md:text-base uppercase tracking-tight italic group-open:text-casino-gold transition-colors">
                                                            {vid.title}
                                                            <ChevronDown className="h-6 w-6 transition-transform group-open:rotate-180" />
                                                        </summary>
                                                        <div className="px-8 pb-8 border-t border-white/5 pt-8">
                                                            <div className="aspect-video rounded-xl overflow-hidden shadow-2xl border border-white/10">
                                                                <iframe 
                                                                    src={`https://www.youtube.com/embed/${vid.id}`} 
                                                                    className="w-full h-full"
                                                                    title={vid.title}
                                                                    frameBorder="0" 
                                                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                                                                    allowFullScreen
                                                                ></iframe>
                                                            </div>
                                                        </div>
                                                    </details>
                                                ))}
                                            </div>
                                        )}

                                        {/* BANNERS SECTION */}
                                        {guideTab === "BAN" && (
                                            <div className="space-y-12">
                                                {[
                                                    { title: "Daily Free 5.0% Unlimited Bonus Deposit", img: "https://bd.mcwaffiliates.com/wp-content/uploads/2025/09/M1_BDT_EN_ALL_UDB_AFF_1174x436.jpg" },
                                                    { title: "Special ৳300 First Deposit Bonus", img: "https://bd.mcwaffiliates.com/wp-content/uploads/2025/09/M1_BDT_EN_ALL_Special-Offer-FDB_AFF_1174x436.jpg" },
                                                    { title: "MCW Exclusive Promo Code Giveaway", img: "https://bd.mcwaffiliates.com/wp-content/uploads/2025/09/M1_BDT_EN_ALL_Promo-Code-Giveaway_AFF_1174x436.jpg" },
                                                ].map((banner, i) => (
                                                    <div key={i} className="bg-[#161b2e] rounded-3xl border border-white/5 overflow-hidden shadow-2xl space-y-8 p-8">
                                                        <div className="flex items-center justify-between">
                                                            <h3 className="font-black text-xl uppercase italic tracking-tighter text-casino-gold">{banner.title}</h3>
                                                            <button className="h-10 px-6 rounded-lg bg-white/5 hover:bg-white/10 text-white font-black text-[10px] uppercase tracking-widest transition-all">View All Sizes</button>
                                                        </div>
                                                        <div className="rounded-2xl overflow-hidden border border-white/10 shadow-inner">
                                                            <img src={banner.img} className="w-full h-auto brightness-110" alt={banner.title} />
                                                        </div>
                                                        <div className="overflow-x-auto rounded-xl border border-white/5 bg-[#1a2135]">
                                                            <table className="w-full text-center border-collapse">
                                                                <thead>
                                                                    <tr className="bg-white/5 text-white/40 font-black uppercase text-[10px] tracking-widest italic border-b border-white/5">
                                                                        <th className="py-4 px-6">Size</th>
                                                                        <th className="py-4 px-6">Platforms</th>
                                                                        <th className="py-4 px-6">Category</th>
                                                                        <th className="py-4 px-6 text-casino-gold">Action</th>
                                                                    </tr>
                                                                </thead>
                                                                <tbody className="font-bold text-xs">
                                                                    {[
                                                                        { size: "300x300", platforms: "FB / IG / TT / YT", cat: "PROFILE PICTURE" },
                                                                        { size: "1080x1080", platforms: "ADS / POSTS", cat: "SOCIAL MEDIA" },
                                                                        { size: "1466x1060", platforms: "WEBSITE", cat: "WEB BANNER" },
                                                                    ].map((row, j) => (
                                                                        <tr key={j} className="border-b border-white/5 last:border-0 hover:bg-white/[0.02]">
                                                                            <td className="py-5 px-6 font-black italic">{row.size}</td>
                                                                            <td className="py-5 px-6 text-white/60">{row.platforms}</td>
                                                                            <td className="py-5 px-6 uppercase tracking-widest text-[10px]">{row.cat}</td>
                                                                            <td className="py-5 px-6">
                                                                                <button className="h-8 px-4 rounded-md bg-casino-gold text-[#0b0e18] font-black text-[10px] uppercase italic hover:brightness-110 transition-all">Download</button>
                                                                            </td>
                                                                        </tr>
                                                                    ))}
                                                                </tbody>
                                                            </table>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </section>
                        </motion.div>
                    )}

                    {/* --- CONTACT VIEW --- */}
                    {activeView === "CONTACT" && (
                         <motion.div
                            key="contact"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="relative min-h-screen"
                         >
                            {/* Hero Section with Portal Background */}
                            <section className="relative h-[400px] md:h-[500px] overflow-hidden flex items-center">
                                <div className="absolute inset-0 bg-[#0b0e18]">
                                    {/* Portal / Ring Effect */}
                                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] md:w-[800px] h-[600px] md:h-[800px] rounded-full border-[1px] border-casino-gold/20 shadow-[0_0_100px_rgba(240,196,62,0.1)]" />
                                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] md:w-[600px] h-[400px] md:h-[600px] rounded-full border-[1px] border-casino-gold/10 shadow-[inset_0_0_50px_rgba(240,196,62,0.05)]" />
                                    {/* Brick/Texture Overlay placeholder */}
                                    <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px' }} />
                                </div>

                                <div className="max-w-[1340px] mx-auto px-4 relative z-10 w-full flex flex-col md:flex-row items-center justify-between gap-8">
                                    <div className="flex-1 space-y-4 text-center md:text-left">
                                        <h2 className="text-2xl md:text-5xl font-black italic tracking-tight uppercase leading-tight text-white drop-shadow-[0_2px_10px_rgba(0,0,0,0.5)]">
                                            BECOME AN MCW AFFILIATE NOW AND <br />
                                            <span className="text-casino-gold">START EARNING TODAY!</span>
                                        </h2>
                                        <p className="text-white/80 text-sm md:text-lg font-bold">
                                            Feel free to contact us with any questions or inquiries regarding our Affiliate Program.
                                        </p>
                                    </div>
                                    <div className="flex-1 flex justify-center md:justify-end">
                                        <img 
                                            src="https://bd.mcwaffiliates.com/wp-content/uploads/2023/05/img_contactus.png" 
                                            className="w-full max-w-[450px] drop-shadow-[0_0_30px_rgba(240,196,62,0.3)] animate-pulse-slow" 
                                            alt="Contact Us" 
                                        />
                                    </div>
                                </div>
                            </section>

                            <section className="py-20 bg-[#0b0e18] relative z-10">
                                <div className="max-w-[1340px] mx-auto px-4 space-y-20">
                                    {/* Support Hours */}
                                    <div className="text-center space-y-2">
                                        <h1 className="text-3xl md:text-5xl font-black uppercase italic tracking-tighter text-white">
                                            AFFILIATE SUPPORT HOURS: <span className="text-casino-gold">MONDAY TO SUNDAY</span>
                                        </h1>
                                        <p className="text-2xl md:text-4xl font-black text-casino-gold">
                                            7:00AM – 12:00AM <span className="text-white">(GMT+6)</span>
                                        </p>
                                    </div>

                                    {/* Circular Icons */}
                                    <div className="flex flex-col md:flex-row justify-center items-center gap-12 md:gap-24">
                                        <a href="https://t.me/MCWAFFILIATESOFFICIALbot" target="_blank" rel="noopener noreferrer" className="flex items-center gap-6 group">
                                            <div className="h-16 w-16 md:h-20 md:w-20 rounded-full border-2 border-casino-gold flex items-center justify-center group-hover:bg-casino-gold/10 transition-all shadow-[0_0_20px_rgba(240,196,62,0.3)]">
                                                <Send className="h-8 w-8 md:h-10 md:w-10 text-casino-gold" />
                                            </div>
                                            <div className="text-left">
                                                <p className="text-white font-black text-lg md:text-xl uppercase italic leading-none">Telegram</p>
                                                <p className="text-casino-gold font-bold text-sm md:text-base">MCWAFFILIATES Official</p>
                                            </div>
                                        </a>
                                        <a href="mailto:affiliates@casinomcw.com" className="flex items-center gap-6 group">
                                            <div className="h-16 w-16 md:h-20 md:w-20 rounded-full border-2 border-casino-gold flex items-center justify-center group-hover:bg-casino-gold/10 transition-all shadow-[0_0_20px_rgba(240,196,62,0.3)]">
                                                <Mail className="h-8 w-8 md:h-10 md:w-10 text-casino-gold" />
                                            </div>
                                            <div className="text-left">
                                                <p className="text-white font-black text-lg md:text-xl uppercase italic leading-none">Email</p>
                                                <p className="text-casino-gold font-bold text-sm md:text-base">affiliates@casinomcw.com</p>
                                            </div>
                                        </a>
                                    </div>

                                    {/* Form */}
                                    <div className="max-w-[1000px] mx-auto bg-[#1a2135]/40 p-8 md:p-12 rounded-xl border border-white/5 shadow-2xl backdrop-blur-xs">
                                        <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
                                            <div className="space-y-6">
                                                <div className="space-y-3">
                                                    <label className="block text-white font-black text-sm uppercase italic tracking-widest ml-1">First Name</label>
                                                    <input type="text" placeholder="First Name" className="w-full h-16 bg-[#4a5568]/50 border border-white/10 rounded-lg px-6 font-bold text-white placeholder:text-white/40 focus:outline-hidden focus:border-casino-gold/30 transition-all" />
                                                </div>
                                                <div className="space-y-3">
                                                    <label className="block text-white font-black text-sm uppercase italic tracking-widest ml-1">Last Name</label>
                                                    <input type="text" placeholder="Last Name" className="w-full h-16 bg-[#4a5568]/50 border border-white/10 rounded-lg px-6 font-bold text-white placeholder:text-white/40 focus:outline-hidden focus:border-casino-gold/30 transition-all" />
                                                </div>
                                                <div className="space-y-3">
                                                    <label className="block text-white font-black text-sm uppercase italic tracking-widest ml-1">Email</label>
                                                    <input type="email" placeholder="Email" className="w-full h-16 bg-[#4a5568]/50 border border-white/10 rounded-lg px-6 font-bold text-white placeholder:text-white/40 focus:outline-hidden focus:border-casino-gold/30 transition-all" />
                                                </div>
                                                <div className="space-y-3">
                                                    <label className="block text-white font-black text-sm uppercase italic tracking-widest ml-1">Message</label>
                                                    <textarea rows={6} placeholder="Message" className="w-full bg-[#4a5568]/50 border border-white/10 rounded-lg p-6 font-bold text-white placeholder:text-white/40 focus:outline-hidden focus:border-casino-gold/30 transition-all resize-none" />
                                                </div>
                                            </div>

                                            {/* reCAPTCHA Placeholder */}
                                            <div className="bg-white rounded p-4 w-fit flex items-center gap-4 shadow-lg">
                                                <div className="h-6 w-6 border-2 border-gray-300 rounded" />
                                                <span className="text-gray-600 font-bold text-sm">I'm not a robot</span>
                                                <img src="https://www.gstatic.com/recaptcha/api2/logo_48.png" className="h-8 ml-8" alt="recaptcha" />
                                            </div>

                                            <button type="submit" className="h-16 w-full bg-casino-gold hover:bg-[#d4ac35] text-[#0b0e18] font-black text-xl uppercase italic tracking-widest rounded-lg shadow-[0_10px_30px_rgba(240,196,62,0.2)] transition-all transform active:scale-95">
                                                Send
                                            </button>
                                        </form>
                                    </div>
                                </div>
                            </section>

                          
                         </motion.div>
                    )}
                </AnimatePresence>
            </main>

            {/* Affiliate Footer */}
            <footer className="bg-[#0b0e18] py-12 border-t border-white/5 relative z-10">
                <div className="max-w-[1340px] mx-auto px-4">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-12">
                        {/* Logo */}
                        <div className="shrink-0">
                            <img src="https://bd.mcwaffiliates.com/wp-content/uploads/2023/07/MCW_Aff_Logo.png" alt="MCW Affiliates" className="h-10 w-auto brightness-125" />
                        </div>

                        {/* Partner */}
                        <div className="flex flex-col items-center gap-3">
                            <p className="text-white/40 text-[10px] font-black uppercase tracking-widest italic">Official Brand Partner</p>
                            <img src="https://bd.mcwaffiliates.com/wp-content/uploads/2024/11/NC_entrypage-banner.png" alt="Partner" className="h-8 md:h-10 w-auto opacity-80" />
                        </div>

                        {/* Links & Copyright */}
                        <div className="text-center md:text-right space-y-3">
                            <div className="flex items-center justify-center md:justify-end gap-6 text-[10px] font-black uppercase tracking-widest text-casino-gold/80 italic">
                                <a href="#" className="hover:text-white transition-colors">Payment Agent Partnership</a>
                                <span className="text-white/20">|</span>
                                <a href="#" className="hover:text-white transition-colors">Terms & Conditions</a>
                            </div>
                            <p className="text-white/40 text-[10px] font-black uppercase tracking-widest">© 2022 MCW Copyrights. All Rights Reserved</p>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};
