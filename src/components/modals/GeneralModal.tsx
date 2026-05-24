import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Shield, Info, Lock, Eye, HelpCircle } from "lucide-react";

export type ModalType = "gaming" | "about" | "security" | "privacy" | "faq" | "terms";

interface GeneralModalProps {
  isOpen: boolean;
  onClose: () => void;
  type: ModalType;
}

export const GeneralModal = ({ isOpen, onClose, type }: GeneralModalProps) => {
  const getTitle = () => {
    switch (type) {
      case "gaming": return "Responsible Gaming";
      case "about": return "About Us";
      case "security": return "Security";
      case "privacy": return "Privacy Policy";
      case "faq": return "FAQ";
      case "terms": return "Terms & Conditions";
      default: return "";
    }
  };

  const getContent = () => {
    switch (type) {
      case "gaming":
        return (
          <div className="space-y-4 text-white/70 text-sm leading-relaxed">
            <div className="flex items-center gap-3 text-casino-gold mb-2">
                <Shield className="h-6 w-6" />
                <h3 className="font-black uppercase italic tracking-tighter text-lg">Stay in Control</h3>
            </div>
            <p>Mega Casino World is committed to endorsing responsible gaming as a policy of customer care and social responsibility.</p>
            <p>We believe it is our responsibility to you, our customers, to ensure that you enjoy your wagering experience on our site, while remaining fully aware of the social and financial harms associated with problem gambling.</p>
            <div className="bg-[#232a44] p-4 rounded border border-white/5 space-y-2">
                <h4 className="text-white font-bold">Self-Exclusion</h4>
                <p>If you believe that your gambling has become problematic, you can request to be self-excluded from our platform.</p>
            </div>
          </div>
        );
      case "about":
        return (
          <div className="space-y-4 text-white/70 text-sm leading-relaxed">
            <div className="flex items-center gap-3 text-casino-gold mb-2">
                <Info className="h-6 w-6" />
                <h3 className="font-black uppercase italic tracking-tighter text-lg">Who We Are</h3>
            </div>
            <p>Mega Casino World (MCW) is a leading online gaming platform, offering a wide range of sports betting, online casino, and slots games.</p>
            <p>We have been serving the Asia Pacific market since 2015. We are fully licensed and regulated in various jurisdictions as stated in the Terms and Conditions.</p>
            <p>MCW offers a safe and private environment and the integrity of our products is the fundamental driver of our business.</p>
          </div>
        );
      case "security":
        return (
          <div className="space-y-4 text-white/70 text-sm leading-relaxed">
            <div className="flex items-center gap-3 text-casino-gold mb-2">
                <Lock className="h-6 w-6" />
                <h3 className="font-black uppercase italic tracking-tighter text-lg">Secure Platform</h3>
            </div>
            <p>We use the most advanced security measures to ensure that your data and transactions are completely safe.</p>
            <p>Our systems are monitored 24/7 to prevent any unauthorized access or fraudulent activity.</p>
            <ul className="list-disc pl-5 space-y-2">
                <li>128-bit SSL encryption</li>
                <li>Secure firewalls</li>
                <li>Regular security audits</li>
            </ul>
          </div>
        );
      case "privacy":
        return (
          <div className="space-y-4 text-white/70 text-sm leading-relaxed">
            <div className="flex items-center gap-3 text-casino-gold mb-2">
                <Eye className="h-6 w-6" />
                <h3 className="font-black uppercase italic tracking-tighter text-lg">Your Privacy</h3>
            </div>
            <p>Your privacy is of the utmost importance to us. We are committed to protecting the personal information you share with us.</p>
            <p>We do not sell or rent your personal information to third parties.</p>
            <p>We collect information only to provide you with the best possible service and to comply with legal requirements.</p>
          </div>
        );
      case "faq":
        return (
          <div className="space-y-4 text-white/70 text-sm leading-relaxed">
            <div className="flex items-center gap-3 text-casino-gold mb-2">
                <HelpCircle className="h-6 w-6" />
                <h3 className="font-black uppercase italic tracking-tighter text-lg">Common Questions</h3>
            </div>
            {[
                { q: "How do I deposit?", a: "Go to My Wallet and select the Deposit tab. Choose your preferred method and follow the instructions." },
                { q: "What is the minimum withdrawal?", a: "The minimum withdrawal amount varies by method, typically starting from 500 BDT." },
                { q: "How do I claim a bonus?", a: "Visit the Real-Time Bonus section to see available offers and claim them directly." }
            ].map((item, i) => (
                <div key={i} className="bg-[#232a44] p-4 rounded border border-white/5 space-y-2">
                    <h4 className="text-white font-bold">{item.q}</h4>
                    <p>{item.a}</p>
                </div>
            ))}
          </div>
        );
      default: return null;
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[2000] bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.95, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.95, opacity: 0, y: 20 }}
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-[420px] bg-[#161b2e] rounded-xl overflow-hidden shadow-2xl border border-white/5 flex flex-col max-h-[90vh]"
          >
            {/* Header */}
            <div className="bg-casino-gold h-12 shrink-0 flex items-center justify-between px-6 relative border-b border-white/10">
              <div className="w-6" />
              <h2 className="text-white font-bold text-base tracking-widest uppercase">{getTitle()}</h2>
              <button onClick={onClose} className="text-white hover:rotate-90 transition-transform">
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Content Area */}
            <div className="flex-1 overflow-y-auto no-scrollbar p-8">
              {getContent()}
            </div>

            {/* Footer Close Button */}
            <div className="p-6 pt-0">
                <button onClick={onClose} className="w-full py-3 bg-white/5 hover:bg-white/10 text-white font-bold rounded transition-all uppercase text-[12px] tracking-widest">
                    Close
                </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
