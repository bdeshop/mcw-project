import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronDown, RefreshCw } from "lucide-react";
import { Link } from "react-router-dom";

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  mode: "login" | "signup";
  setMode: (mode: "login" | "signup") => void;
  onLoginSuccess: () => void;
}

const CURRENCIES = [
  { code: "BDT", flag: "https://img.m167cw.com/mcw/h5/assets/images/flag/BD.webp" },
  { code: "VND", flag: "https://img.m167cw.com/mcw/h5/assets/images/flag/VN.webp" },
  { code: "PHP", flag: "https://img.m167cw.com/mcw/h5/assets/images/flag/PH.webp" },
  { code: "USDT", flag: "https://img.m167cw.com/mcw/h5/assets/images/flag/US.webp" },
  { code: "NPR", flag: "https://img.m167cw.com/mcw/h5/assets/images/flag/NP.webp" },
  { code: "MYR", flag: "https://img.m167cw.com/mcw/h5/assets/images/flag/MY.webp" },
  { code: "PKR", flag: "https://img.m167cw.com/mcw/h5/assets/images/flag/PK.webp" },
  { code: "INR", flag: "https://img.m167cw.com/mcw/h5/assets/images/flag/IN.webp" },
];

export const AuthModal = ({ isOpen, onClose, mode, setMode, onLoginSuccess }: AuthModalProps) => {
  const [showPassword, setShowPassword] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [selectedCurrency, setSelectedCurrency] = useState(CURRENCIES[0]);
  const [showCurrencyList, setShowCurrencyList] = useState(false);

  const validationRules = [
    { label: "Between 6~20 characters.", valid: password.length >= 6 && password.length <= 20 },
    { label: "At least one alphabet.", valid: /[a-zA-Z]/.test(password) },
    { label: "At least one number.", valid: /[0-9]/.test(password) }
  ];

  const LoginForm = () => (
    <div className="space-y-6">
      {/* Logo Section */}
      <Link to="/" onClick={onClose} className="flex items-center justify-center gap-3 py-2">
        <div className="h-14 w-14 bg-contain bg-no-repeat bg-center" style={{ backgroundImage: 'url("/src/assets/logo/logo_3d.png")' }} />
        <div className="flex flex-col -space-y-1">
          <span className="text-white font-black text-[11px] tracking-widest uppercase">MEGA</span>
          <span className="text-white font-black text-[11px] tracking-widest uppercase">CASINO</span>
          <span className="text-white font-black text-[11px] tracking-widest uppercase">WORLD</span>
        </div>
      </Link>

      <div className="bg-[#232a44] rounded-lg p-5 space-y-5 border border-white/5 shadow-inner">
        <div className="space-y-2">
          <label className="text-white font-bold text-[13px] ml-1">Username</label>
          <div className="relative">
            <input 
              type="text"
              placeholder="4-16 Characters or Number"
              className="w-full h-11 bg-black/40 border border-white/10 rounded-md px-4 text-white text-sm focus:border-[#C9A33D] outline-none transition-all placeholder:text-white/10"
            />
            <div className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 bg-white/20" style={{ maskImage: 'url("https://img.m167cw.com/mcw/h5/assets/images/icon-set/icon-cross-type09.svg")', maskSize: 'contain' }} />
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-white font-bold text-[13px] ml-1">Password</label>
          <div className="relative">
            <input 
              type={showPassword ? "text" : "password"}
              placeholder="6-20 characters and numbers"
              className="w-full h-11 bg-black/40 border border-white/10 rounded-md px-4 pr-20 text-white text-sm focus:border-[#C9A33D] outline-none transition-all placeholder:text-white/10"
            />
            <div className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center gap-2">
               <div className="h-4 w-4 bg-white/20" style={{ maskImage: 'url("https://img.m167cw.com/mcw/h5/assets/images/icon-set/icon-cross-type09.svg")', maskSize: 'contain' }} />
               <div onClick={() => setShowPassword(!showPassword)} className="h-4 w-4 bg-white/20 cursor-pointer" style={{ maskImage: showPassword ? 'url("https://img.m167cw.com/mcw/h5/assets/images/icon-set/icon-eye-open-type03.svg")' : 'url("https://img.m167cw.com/mcw/h5/assets/images/icon-set/icon-eye-close-type03.svg")', maskSize: 'contain' }} />
            </div>
          </div>
        </div>

        <div className="flex justify-end">
          <div className="border border-[#C9A33D] rounded px-3 py-1 cursor-pointer hover:bg-[#C9A33D]/10 transition-all">
            <span className="text-[#C9A33D] text-[11px] font-bold">Forgot password?</span>
          </div>
        </div>
      </div>

      <button onClick={onLoginSuccess} className="w-full h-11 bg-login-grad text-white font-black text-sm uppercase tracking-widest italic rounded-md shadow-xl shadow-casino-gold/10 active:scale-95 transition-all border border-white/5">
        Login
      </button>

      <div className="text-center space-x-1 py-1">
        <span className="text-white text-[12px] font-medium">Do not have an account?</span>
        <button onClick={() => setMode("signup")} className="text-[#C9A33D] text-[12px] font-bold hover:underline underline-offset-2">Sign up</button>
      </div>
    </div>
  );

  const SignupForm = () => (
    <div className="space-y-6">
       {/* Logo Box */}
       <div 
        className="h-10 w-full bg-contain bg-no-repeat bg-center opacity-40 transition-all"
        style={{ backgroundImage: 'url("https://img.m167cw.com/mcw/h5/assets/images/member-logo.png")' }}
      />

      <div className="space-y-4">
         {/* Currency Choice */}
         <div className="space-y-1.5 relative">
            <label className="text-white/40 text-[9px] font-black uppercase tracking-widest pl-1 italic">Choose currency</label>
            <div 
              onClick={() => setShowCurrencyList(!showCurrencyList)}
              className="h-11 bg-black/40 border border-white/10 rounded-md px-4 flex items-center justify-between cursor-pointer group hover:border-[#C9A33D]/30 transition-all"
            >
               <div className="flex items-center gap-3">
                  <img src={selectedCurrency.flag} alt={selectedCurrency.code} className="h-4 w-6 object-cover rounded-sm" />
                  <span className="text-white font-bold text-sm uppercase">{selectedCurrency.code}</span>
               </div>
               <ChevronDown className={`h-4 w-4 text-white/20 transition-transform ${showCurrencyList ? "rotate-180" : ""}`} />
            </div>
            
            <AnimatePresence>
              {showCurrencyList && (
                <motion.div 
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="absolute top-full left-0 w-full mt-1 bg-[#161b2e] border border-white/10 rounded-md shadow-2xl z-50 py-2 max-h-[200px] overflow-y-auto no-scrollbar"
                >
                   {CURRENCIES.map((curr) => (
                     <div 
                       key={curr.code} 
                       onClick={() => { setSelectedCurrency(curr); setShowCurrencyList(false); }}
                       className="px-4 py-2 flex items-center gap-3 hover:bg-white/5 transition-all cursor-pointer"
                     >
                        <img src={curr.flag} alt={curr.code} className="h-3.5 w-5 object-cover rounded-sm" />
                        <span className="text-white font-bold text-[13px]">{curr.code}</span>
                     </div>
                   ))}
                </motion.div>
              )}
            </AnimatePresence>
         </div>

         {/* Account Info */}
         <div className="bg-[#232a44] rounded-xl p-4 space-y-4 border border-white/5 shadow-inner">
            <div className="space-y-1.5">
               <label className="text-white font-bold text-[12px] ml-1">Username</label>
               <div className="relative">
                  <input type="text" placeholder="4-16 Characters or Number" className="w-full h-10 bg-black/40 border border-white/10 rounded-md px-3 text-white text-[13px] focus:border-[#C9A33D] outline-none transition-all placeholder:text-white/10" />
                  <div className="absolute right-3 top-1/2 -translate-y-1/2 h-3.5 w-3.5 bg-white/20" style={{ maskImage: 'url("https://img.m167cw.com/mcw/h5/assets/images/icon-set/icon-cross-type09.svg")', maskSize: 'contain' }} />
               </div>
            </div>

            <div className="space-y-1.5">
               <label className="text-white font-bold text-[12px] ml-1">Password</label>
               <div className="relative">
                  <input 
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="6-20 characters and numbers"
                    className="w-full h-10 bg-black/40 border border-white/10 rounded-md px-3 pr-10 text-white text-[13px] focus:border-[#C9A33D] outline-none transition-all placeholder:text-white/10"
                  />
                  <div className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center gap-2">
                     <div onClick={() => setShowPassword(!showPassword)} className="h-4 w-4 bg-white/20 cursor-pointer" style={{ maskImage: showPassword ? 'url("https://img.m167cw.com/mcw/h5/assets/images/icon-set/icon-eye-open-type03.svg")' : 'url("https://img.m167cw.com/mcw/h5/assets/images/icon-set/icon-eye-close-type03.svg")', maskSize: 'contain' }} />
                  </div>
               </div>
               {/* Validation Messages */}
               <div className="space-y-1.5 pt-1 px-1">
                  {validationRules.map((rule, idx) => (
                    <div key={idx} className={`flex items-start gap-2 transition-all ${rule.valid ? "opacity-100" : "opacity-30"}`}>
                       <div className={`h-2.5 w-2.5 shrink-0 mt-0.5 ${rule.valid ? "bg-green-500" : "bg-white/40"}`} style={{ maskImage: 'url("https://img.m167cw.com/mcw/h5/assets/images/icon-set/icon-check-type07.svg")', maskSize: 'contain' }} />
                       <span className="text-[8px] font-black text-white italic tracking-tighter uppercase">{rule.label}</span>
                    </div>
                  ))}
               </div>
            </div>
         </div>

         {/* Phone & Verification */}
         <div className="bg-[#232a44] rounded-xl p-4 space-y-4 border border-white/5 shadow-inner">
            <div className="space-y-1.5">
               <label className="text-white font-bold text-[12px] ml-1">Phone Number</label>
               <div className="flex gap-2">
                  <div className="h-10 w-20 shrink-0 bg-black/40 border border-white/10 rounded-md flex items-center justify-center gap-1.5">
                     <img src="https://img.m167cw.com/mcw/h5/assets/images/flag/BD.webp" alt="BD" className="h-2.5 w-4 object-cover rounded-sm" />
                     <span className="text-white font-bold text-[12px]">+880</span>
                  </div>
                  <input type="number" placeholder="Enter your phone number." className="flex-1 min-w-0 h-10 bg-black/40 border border-white/10 rounded-md px-3 text-white text-[13px] focus:border-[#C9A33D] outline-none transition-all placeholder:text-white/10" />
               </div>
            </div>

            <div className="space-y-1.5">
               <label className="text-white font-bold text-[12px] ml-1">Verification Code</label>
               <div className="flex gap-1.5">
                  <input type="text" placeholder="Enter 4 Digit Code" className="flex-1 min-w-0 h-10 bg-black/40 border border-white/10 rounded-md px-3 text-white text-[13px] focus:border-[#C9A33D] outline-none transition-all placeholder:text-white/10" />
                  <div className="h-10 px-2 shrink-0 bg-white rounded-md flex items-center justify-center font-black italic tracking-widest text-[14px] text-black select-none">2050</div>
                  <button className="h-10 w-10 shrink-0 bg-black/40 border border-white/10 rounded-md flex items-center justify-center text-white/40 hover:text-[#C9A33D] transition-all">
                     <RefreshCw className="h-4 w-4" />
                  </button>
               </div>
            </div>
         </div>
      </div>

      <button className="w-full h-11 bg-white/5 border border-white/10 text-white/20 font-black text-sm uppercase tracking-widest italic rounded cursor-not-allowed transition-all">
        Submit
      </button>

      <div className="text-center space-x-1 py-0.5">
        <span className="text-white text-[11px] font-medium">Already a member?</span>
        <button onClick={() => setMode("login")} className="text-[#C9A33D] text-[11px] font-bold hover:underline underline-offset-2">Log in</button>
      </div>

      <p className="text-center text-white/30 text-[8px] font-bold leading-relaxed px-4 pb-2">
        I certify that I am at least 18 years old and that I agree to the <span className="text-white/60 underline">Terms & Conditions</span>
      </p>
    </div>
  );

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[1000] flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          />
          <motion.div
            initial={{ scale: 0.95, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.95, opacity: 0, y: 20 }}
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-[380px] bg-[#161b2e] rounded-lg overflow-hidden shadow-2xl flex flex-col max-h-[92vh] relative z-10"
          >
            {/* Header */}
            <div className="bg-[#C9A33D] h-11 shrink-0 flex items-center justify-center relative">
              <h2 className="text-white font-black text-sm uppercase tracking-widest italic">{mode === "login" ? "Login" : "Sign up"}</h2>
              <button onClick={onClose} className="absolute right-4 text-white/90 hover:text-white transition-all">
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Content Area */}
            <div className="flex-1 overflow-y-auto no-scrollbar p-5">
              {mode === "login" ? <LoginForm /> : <SignupForm />}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
