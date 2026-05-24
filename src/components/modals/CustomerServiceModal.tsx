import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Send, Home, MessageSquare, HelpCircle, ChevronRight } from "lucide-react";

interface CustomerServiceModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CustomerServiceModal = ({ isOpen, onClose }: CustomerServiceModalProps) => {
  const [activeTab, setActiveTab] = useState("home");

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[2000]"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="fixed bottom-4 right-4 md:bottom-8 md:right-8 w-[95%] max-w-[400px] h-[80vh] bg-white rounded-[32px] overflow-hidden z-[2001] shadow-[0_20px_50px_rgba(0,0,0,0.3)] flex flex-col"
          >
            {/* Header Section */}
            <div className="relative h-[280px] shrink-0 overflow-hidden bg-[#00104a]">
               {/* Background Elements */}
               <div className="absolute inset-0 opacity-40">
                  <img 
                    src="https://mcwpartnerships.com/wp-content/themes/mcw-partnership/assets/images/home_bg.jpg" 
                    className="w-full h-full object-cover" 
                    alt="" 
                  />
               </div>
               <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-white" />

               {/* Close Button */}
               <button 
                 onClick={onClose}
                 className="absolute top-4 right-4 h-8 w-8 rounded-full bg-black/20 backdrop-blur-md flex items-center justify-center text-white hover:bg-black/40 transition-colors z-20"
               >
                 <X className="h-5 w-5" />
               </button>

               {/* Header Content */}
               <div className="relative z-10 p-6 flex flex-col items-center text-center">
                  <p className="text-[10px] font-black uppercase tracking-[0.2em] text-white/60 mb-4">MCW Official Partners</p>
                  <div className="flex items-center gap-4 mb-8">
                     <img src="https://mcwpartnerships.com/wp-content/uploads/2023/12/bundesliga-logo.png" className="h-6 opacity-80" alt="Bundesliga" />
                     <div className="h-4 w-px bg-white/20" />
                     <img src="https://mcwpartnerships.com/wp-content/uploads/2024/08/atletico-logo.png" className="h-6 opacity-80" alt="Atletico" />
                  </div>

                  <h2 className="text-3xl font-black text-white leading-tight mb-2 drop-shadow-lg">Welcome to MCW!</h2>
                  <p className="text-lg font-bold text-white/90">How can we help you today?</p>
               </div>
            </div>

            {/* Scrollable Content */}
            <div className="flex-1 overflow-y-auto bg-white p-4 space-y-4 no-scrollbar -mt-10 relative z-20">
               
               {/* Promo Card 1 */}
               <motion.div 
                 whileHover={{ y: -4 }}
                 className="bg-white rounded-2xl shadow-[0_10px_30px_rgba(0,0,0,0.08)] overflow-hidden border border-gray-100"
               >
                  <img 
                    src="https://downloads.intercomcdn.com/i/o/cz9vuj8s/2320105634/fe6249580b44512fa0d307bab074/M1_promotion_banner_apr25.jpg" 
                    className="w-full h-auto" 
                    alt="Promo" 
                  />
                  <div className="p-4">
                     <h3 className="font-black text-gray-800 text-sm mb-1 uppercase tracking-tight">প্রতিদিন খেলুন, আর রিওয়ার্ড জিতুন!💥</h3>
                     <p className="text-[11px] text-gray-500 leading-relaxed">IPL চলাকালীন আপনার জয় আরও বাড়াতে স্পেশাল বোনাস আপনার জন্য। প্রতিদিন উপভোগ করুন 6.0% ফ্রি আনলিমিটেড বোনাস ডিপোজিট...</p>
                  </div>
               </motion.div>

               {/* Send Message Card */}
               <motion.button 
                 whileHover={{ scale: 1.02 }}
                 className="w-full bg-white rounded-2xl p-5 shadow-[0_10px_30px_rgba(0,0,0,0.08)] border border-gray-100 flex items-center justify-between group"
               >
                  <div className="text-left">
                     <h3 className="font-black text-gray-800 text-lg uppercase tracking-tight">Send us a message</h3>
                     <p className="text-xs text-gray-400 font-bold">We'll get back to you soon</p>
                  </div>
                  <div className="h-10 w-10 rounded-full bg-[#00104a] flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform">
                     <Send className="h-5 w-5 ml-0.5" />
                  </div>
               </motion.button>

               {/* Support Card */}
               <motion.div 
                 whileHover={{ y: -4 }}
                 className="bg-white rounded-2xl shadow-[0_10px_30px_rgba(0,0,0,0.08)] overflow-hidden border border-gray-100"
               >
                  <img 
                    src="https://downloads.intercomcdn.com/i/o/cz9vuj8s/1893890237/3b4c0f610d4e0e9c9bcb27a3f475/M1%20BDT.jpg" 
                    className="w-full h-auto" 
                    alt="Support" 
                  />
                  <div className="p-4">
                     <h3 className="font-black text-gray-800 text-sm mb-1 uppercase tracking-tight">সেরা গ্রাহক সেবা</h3>
                     <p className="text-[11px] text-gray-500 leading-relaxed">আমাদের সাপোর্ট টিম সর্বদা ২৪/৭ উপলব্ধ, দ্রুত সাড়া দেয়, নির্ভরযোগ্য এবং আপনার সমস্যাগুলো দক্ষতার সঙ্গে সমাধান করে।</p>
                  </div>
               </motion.div>
            </div>

            {/* Bottom Navigation */}
            <div className="h-[80px] bg-white border-t border-gray-100 flex items-center justify-around px-6 shrink-0">
               {[
                 { id: "home", label: "Home", icon: Home },
                 { id: "messages", label: "Messages", icon: MessageSquare },
                 { id: "help", label: "Help", icon: HelpCircle }
               ].map((tab) => (
                 <button 
                   key={tab.id}
                   onClick={() => setActiveTab(tab.id)}
                   className={`flex flex-col items-center gap-1 transition-all ${activeTab === tab.id ? 'text-[#00104a]' : 'text-gray-300'}`}
                 >
                   <tab.icon className={`h-6 w-6 ${activeTab === tab.id ? 'fill-[#00104a]/10' : ''}`} />
                   <span className="text-[10px] font-black uppercase tracking-widest">{tab.label}</span>
                 </button>
               ))}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};
