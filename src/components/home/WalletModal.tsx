import React, { useState } from "react";
import { X, ChevronDown, Bitcoin, Coins } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface WalletModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const PAYMENT_METHODS = [
  { id: "bkash", name: "bKash", color: "#D12053", badge: "+ 4%", initials: "BK" },
  { id: "nagad", name: "Nagad", color: "#F7941D", badge: "+ 4%", initials: "NA" },
  { id: "rocket", name: "Rocket", color: "#8C348D", badge: "+ 4%", initials: "RO" },
  { id: "upay", name: "UPay", color: "#FFD400", badge: "+ 4%", initials: "UP" },
  { id: "usdt", name: "USDT TRC20", color: "#26A17B", initials: "US" },
  { id: "btc", name: "BTC", color: "#F7931A", icon: Bitcoin },
  { id: "eth", name: "ETH", color: "#627EEA", icon: Coins },
  { id: "usdc", name: "USDC", color: "#2775CA", initials: "US" },
  { id: "bnb", name: "BNB", color: "#F3BA2F", initials: "BN" },
];

export const WalletModal: React.FC<WalletModalProps> = ({ isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState<"Deposit" | "Withdrawal">("Deposit");
  const [selectedMethod, setSelectedMethod] = useState("bkash");

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center px-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="w-full max-w-[400px] bg-[#161b2e] rounded-2xl overflow-hidden shadow-[0_30px_60px_-15px_rgba(0,0,0,0.5)] border border-white/10 flex flex-col max-h-[90vh] relative z-10"
          >
            {/* Header */}
            <div className="bg-casino-gold h-[52px] shrink-0 flex items-center justify-between px-6 relative">
              <div className="w-6" />
              <h2 className="text-[#101424] font-black text-[15px] uppercase tracking-wider italic">My wallet</h2>
              <button 
                onClick={onClose}
                className="text-[#101424]/70 hover:text-[#101424] hover:rotate-90 transition-all p-1"
              >
                <X className="h-5 w-5 stroke-[3]" />
              </button>
            </div>

            {/* Tabs Container */}
            <div className="bg-casino-gold px-3 pb-4 shrink-0">
              <div className="bg-black/15 p-1 rounded-xl flex gap-1 backdrop-blur-md border border-white/5">
                <button 
                  onClick={() => setActiveTab("Deposit")}
                  className={`flex-1 py-3 rounded-lg font-black text-[13px] transition-all uppercase tracking-widest ${
                    activeTab === "Deposit" 
                    ? "bg-[#101424] text-casino-gold shadow-lg" 
                    : "text-[#101424]/60 hover:text-[#101424]"
                  }`}
                >
                  Deposit
                </button>
                <button 
                  onClick={() => setActiveTab("Withdrawal")}
                  className={`flex-1 py-3 rounded-lg font-black text-[13px] transition-all uppercase tracking-widest ${
                    activeTab === "Withdrawal" 
                    ? "bg-[#101424] text-casino-gold shadow-lg" 
                    : "text-[#101424]/60 hover:text-[#101424]"
                  }`}
                >
                  Withdrawal
                </button>
              </div>
            </div>

            {/* Content Area */}
            <div className="flex-1 overflow-y-auto no-scrollbar p-5 space-y-5 bg-linear-to-b from-[#161b2e] to-[#101424]">
              {/* Promotions */}
              <div className="bg-[#1e2439] rounded-xl p-4 border border-white/5 flex items-center justify-between group cursor-pointer hover:border-casino-gold/30 transition-all">
                <div className="flex items-center gap-3">
                  <span className="w-1.5 h-4 bg-casino-gold rounded-full shadow-[0_0_10px_rgba(201,163,61,0.5)]"></span>
                  <span className="text-white/90 font-bold text-[14px]">Promotions</span>
                </div>
                <button className="flex items-center gap-2 text-white/50 text-[13px] group-hover:text-white transition-colors">
                  <span className="font-medium">Regular Deposit</span>
                  <ChevronDown className="h-4 w-4 opacity-50 group-hover:opacity-100" />
                </button>
              </div>

              {/* Payment Method */}
              <div className="bg-[#1e2439] rounded-xl p-5 border border-white/5 space-y-5">
                <div className="flex items-center gap-3">
                  <span className="w-1.5 h-4 bg-casino-gold rounded-full shadow-[0_0_10px_rgba(201,163,61,0.5)]"></span>
                  <span className="text-white/90 font-bold text-[14px]">Payment Method</span>
                </div>

                <div className="grid grid-cols-3 gap-3">
                  {PAYMENT_METHODS.map((method) => {
                    const Icon = method.icon;
                    const isActive = selectedMethod === method.id;
                    return (
                      <button 
                        key={method.id}
                        onClick={() => setSelectedMethod(method.id)}
                        className={`relative h-[86px] rounded-xl border flex flex-col items-center justify-center gap-2 transition-all overflow-hidden ${
                          isActive 
                          ? "border-casino-gold bg-casino-gold/5 shadow-[inset_0_0_20px_rgba(201,163,61,0.1)] scale-[1.02]" 
                          : "border-white/5 bg-[#232a44] hover:border-white/10 hover:bg-[#2a3250]"
                        }`}
                      >
                        {method.badge && (
                          <div className="absolute top-0 right-0 bg-[#FF4D4D] text-white text-[9px] font-black px-2 py-0.5 rounded-bl-lg shadow-md z-10">
                            {method.badge}
                          </div>
                        )}
                        
                        <div 
                          className="h-10 w-10 rounded-full flex items-center justify-center text-white font-black text-[11px] shadow-lg border border-white/10"
                          style={{ backgroundColor: method.color }}
                        >
                          {Icon ? <Icon className="h-5 w-5" /> : method.initials}
                        </div>
                        
                        <span className={`text-[11px] font-bold tracking-tight transition-colors ${
                          isActive ? "text-casino-gold" : "text-white/50"
                        }`}>
                          {method.name}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Main Action Button */}
              <button className="w-full py-4 bg-casino-gold hover:brightness-110 active:scale-[0.98] text-[#101424] font-black text-sm rounded-xl shadow-[0_10px_20px_-5px_rgba(201,163,61,0.3)] transition-all uppercase tracking-[0.2em] italic">
                {selectedMethod} Payment
              </button>

              {/* Deposit Channels (Hinted in image) */}
              <div className="bg-[#1e2439] rounded-xl p-5 border border-white/5 space-y-4">
                <div className="flex items-center gap-3">
                    <span className="w-1.5 h-4 bg-casino-gold rounded-full shadow-[0_0_10px_rgba(201,163,61,0.5)]"></span>
                    <span className="text-white/90 font-bold text-[14px]">Deposit Channels</span>
                </div>
                <div className="flex flex-col gap-2">
                    <button className="w-full flex items-center justify-between p-3.5 bg-[#232a44] rounded-lg border border-white/5 hover:border-casino-gold/30 transition-all group">
                        <span className="text-white/60 text-xs font-bold group-hover:text-white">Channel 1 (Min 200 - Max 25,000)</span>
                        <div className="h-2 w-2 rounded-full bg-casino-gold shadow-[0_0_8px_rgba(201,163,61,0.5)]" />
                    </button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
