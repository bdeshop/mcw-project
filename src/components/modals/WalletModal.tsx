import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronDown, Bitcoin, Coins, RefreshCw, Info, AlertCircle } from "lucide-react";

interface WalletModalProps {
    isOpen: boolean;
    onClose: () => void;
    initialTab?: "deposit" | "withdrawal";
}

const PAYMENT_METHODS = [
    { id: "bKash", name: "bKash", bonus: "+ 4%", color: "#D12053", iconText: "BK" },
    { id: "Nagad", name: "Nagad", bonus: "+ 4%", color: "#F7941D", iconText: "NA" },
    { id: "Rocket", name: "Rocket", bonus: "+ 4%", color: "#8C348D", iconText: "RO" },
    { id: "UPay", name: "UPay", bonus: "+ 4%", color: "#FFD400", iconText: "UP" },
    { id: "USDT", name: "USDT TRC20", color: "#26A17B", iconText: "US" },
    { id: "BTC", name: "BTC", color: "#F7931A", isIcon: true, icon: Bitcoin },
    { id: "ETH", name: "ETH", color: "#627EEA", isIcon: true, icon: Coins },
    { id: "USDC", name: "USDC", color: "#2775CA", iconText: "US" },
    { id: "BNB", name: "BNB", color: "#F3BA2F", iconText: "BN" },
];

export const WalletModal = ({ isOpen, onClose, initialTab = "deposit" }: WalletModalProps) => {
    const [activeTab, setActiveTab] = useState<"deposit" | "withdrawal">(initialTab);
    const [selectedMethod, setSelectedMethod] = useState("bKash");

    // Sync active tab when modal opens
    React.useEffect(() => {
        if (isOpen) {
            setActiveTab(initialTab);
        }
    }, [isOpen, initialTab]);

    const DepositTab = () => (
        <div className="space-y-4">
            {/* Promotions */}
            <div className="bg-[#232a44] rounded-lg p-4 border border-white/5 flex items-center justify-between group cursor-pointer hover:border-white/10 transition-all">
                <div className="flex items-center gap-2">
                    <span className="w-1 h-4 bg-casino-gold rounded-sm shadow-[0_0_8px_rgba(201,163,61,0.4)]"></span>
                    <span className="text-white font-bold text-[14px]">Promotions</span>
                </div>
                <button className="flex items-center gap-2 text-white/60 text-[13px] group-hover:text-white transition-colors">
                    <span>Regular Deposit</span>
                    <ChevronDown className="h-4 w-4" />
                </button>
            </div>

            {/* Payment Method */}
            <div className="bg-[#232a44] rounded-lg p-4 border border-white/5 space-y-4">
                <div className="flex items-center gap-2">
                    <span className="w-1 h-4 bg-casino-gold rounded-sm shadow-[0_0_8px_rgba(201,163,61,0.4)]"></span>
                    <span className="text-white font-bold text-[14px]">Payment Method</span>
                </div>

                <div className="grid grid-cols-3 gap-2">
                    {PAYMENT_METHODS.map((method) => {
                        const isActive = selectedMethod === method.id;
                        const Icon = method.icon;
                        return (
                            <button
                                key={method.id}
                                onClick={() => setSelectedMethod(method.id)}
                                className={`relative h-20 rounded border flex flex-col items-center justify-center gap-1.5 transition-all overflow-hidden ${isActive
                                        ? "border-casino-gold bg-casino-gold/5 shadow-[0_0_15px_rgba(201,163,61,0.15)]"
                                        : "border-white/5 bg-[#1e2439] hover:border-white/20"
                                    }`}
                            >
                                {method.bonus && (
                                    <div className="absolute top-0 right-0 bg-[#FF4D4D] text-white text-[9px] font-black px-1.5 py-0.5 rounded-bl-lg shadow-sm">
                                        {method.bonus}
                                    </div>
                                )}

                                <div
                                    className="h-8 w-8 rounded-full flex items-center justify-center text-white font-black text-[10px] shadow-lg"
                                    style={{ backgroundColor: method.color }}
                                >
                                    {method.isIcon && Icon ? <Icon className="h-5 w-5" /> : method.iconText}
                                </div>
                                <span className={`text-[11px] font-bold tracking-tight ${isActive ? "text-casino-gold" : "text-white/60"}`}>
                                    {method.name}
                                </span>
                            </button>
                        );
                    })}
                </div>
            </div>

            {/* Payment Button */}
            <button className="w-full py-3 bg-login-grad text-white font-black text-sm rounded-lg  hover:brightness-110 active:scale-[0.98] transition-all uppercase tracking-widest italic border border-white/5">
                {selectedMethod} Payment
            </button>

            {/* Deposit Channels */}
            <div className="bg-[#232a44] rounded-lg p-4 border border-white/5 space-y-4">
                <div className="flex items-center gap-2">
                    <span className="w-1 h-4 bg-casino-gold rounded-sm shadow-[0_0_8px_rgba(201,163,61,0.4)]"></span>
                    <span className="text-white font-bold text-[14px]">Deposit Channels</span>
                </div>
                <div className="flex flex-col gap-2">
                    <button className="w-full flex items-center justify-between p-3.5 bg-[#1e2439] rounded border border-white/5 hover:border-casino-gold/30 transition-all group">
                        <span className="text-white/40 text-[11px] font-bold group-hover:text-white">Channel 1 (Min 200 - Max 25,000)</span>
                        <div className="h-2 w-2 rounded-full bg-casino-gold shadow-[0_0_8px_rgba(201,163,61,0.5)]" />
                    </button>
                </div>
            </div>
        </div>
    );

    const WithdrawalTab = () => (
        <div className="space-y-5 py-2">
            <div className="flex items-center justify-between px-2">
                <div className="flex items-center gap-2">
                    <span className="text-white font-bold text-[14px]">Withdrawable Amount</span>
                    <RefreshCw className="h-3.5 w-3.5 text-white/40 cursor-pointer hover:text-white transition-colors" />
                </div>
                <div className="flex flex-col items-end">
                    <span className="text-white font-black text-3xl">৳ 0</span>
                    <span className="text-white/20 text-[10px] uppercase font-bold tracking-widest">Main Wallet</span>
                </div>
            </div>

            <div className="bg-[#232a44] rounded-lg p-5 border border-white/5 space-y-4">
                <div className="flex items-start gap-3 bg-[#1e2439] p-4 rounded-lg border border-white/5">
                    <Info className="h-5 w-5 text-casino-gold shrink-0 mt-0.5" />
                    <p className="text-[12px] text-white/60 leading-relaxed font-medium">
                        Please complete the verification below before you proceed with the withdrawal request.
                    </p>
                </div>

                <div className="space-y-3">
                    <div className="flex items-center justify-between">
                        <h4 className="text-[#4ADE80] font-bold text-[14px] flex items-center gap-2">
                            <div className="h-1.5 w-1.5 rounded-full bg-[#4ADE80]" />
                            Personal Info
                        </h4>
                    </div>
                    <div className="h-12 px-4 bg-[#161b2e] border border-white/10 rounded-lg flex items-center group hover:border-white/20 transition-all">
                        <span className="text-white/20 text-[13px] font-bold">Full Name</span>
                    </div>
                </div>
            </div>

            <div className="bg-[#232a44] rounded-lg p-10 border border-white/5 flex flex-col items-center justify-center text-center gap-4 bg-linear-to-b from-[#232a44] to-[#1e2439]">
                <div className="h-16 w-16 rounded-full bg-white/5 flex items-center justify-center shadow-inner">
                    <AlertCircle className="h-8 w-8 text-white/20" />
                </div>
                <div className="space-y-1">
                    <p className="text-white font-bold text-base">Verification Required</p>
                    <p className="text-white/40 text-[12px] max-w-[200px] mx-auto">Please complete your personal information to enable withdrawals.</p>
                </div>
            </div>
        </div>
    );

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-[1000] flex items-center justify-center md:p-4">
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="absolute inset-0 bg-black/80 backdrop-blur-md"
                    />
                    <motion.div
                        initial={{ scale: 0.95, opacity: 0, y: 20 }}
                        animate={{ scale: 1, opacity: 1, y: 0 }}
                        exit={{ scale: 0.95, opacity: 0, y: 20 }}
                        onClick={(e) => e.stopPropagation()}
                        className="w-full md:max-w-[420px] h-full md:h-auto bg-[#161b2e] md:rounded-2xl overflow-hidden shadow-[0_30px_60px_-15px_rgba(0,0,0,0.6)] border-x md:border border-white/5 flex flex-col max-h-screen md:max-h-[90vh] relative z-10"
                    >
                        {/* Header */}
                        <div className="bg-casino-gold h-11 shrink-0 flex items-center justify-between px-6 relative border-b border-black/10">
                            <div className="w-6" />
                            <h2 className="text-white font-black text-sm uppercase tracking-[0.15em] italic drop-shadow-md">My wallet</h2>
                            <button
                                onClick={onClose}
                                className="text-white/80 hover:text-white hover:rotate-90 transition-all p-1"
                            >
                                <X className="h-5 w-5 stroke-[3]" />
                            </button>
                        </div>

                        {/* Tabs */}
                        <div className="bg-casino-gold px-3 pb-3 shrink-0">
                            <div className="bg-black/15 p-1 rounded-xl flex gap-1 backdrop-blur-sm">
                                <button
                                    onClick={() => setActiveTab("deposit")}
                                    className={`flex-1 py-2 rounded-lg font-black text-[12px] transition-all uppercase tracking-widest border ${activeTab === "deposit"
                                            ? "bg-login-grad text-white border-white/5 shadow-xl shadow-black/20 italic"
                                            : "border-transparent text-white/60 hover:text-white"
                                        }`}
                                >
                                    Deposit
                                </button>
                                <button
                                    onClick={() => setActiveTab("withdrawal")}
                                    className={`flex-1 py-2 rounded-lg font-black text-[12px] transition-all uppercase tracking-widest border ${activeTab === "withdrawal"
                                            ? "bg-login-grad text-white border-white/5 shadow-xl shadow-black/20 italic"
                                            : "border-transparent text-white/60 hover:text-white"
                                        }`}
                                >
                                    Withdrawal
                                </button>
                            </div>
                        </div>

                        {/* Content Area */}
                        <div className="flex-1 overflow-y-auto no-scrollbar p-4 md:p-6 bg-linear-to-b from-[#161b2e] to-[#101424]">
                            {activeTab === "deposit" ? <DepositTab /> : <WithdrawalTab />}
                            <div className="h-20 md:hidden" /> {/* Spacer for mobile bottom bar if needed */}
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
};
