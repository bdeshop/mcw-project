import React from "react";
import { Home, Gift, Wallet, User, ChevronDown } from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";

interface MobileNavbarProps {
  isLoggedIn: boolean;
  isAccountOpen: boolean;
  setIsAccountOpen: (open: boolean) => void;
  setIsLangOpen: (open: boolean) => void;
  openAuth: (mode: "login" | "signup") => void;
  openWallet: (mode: "deposit" | "withdrawal") => void;
}

export const MobileNavbar = ({
  isLoggedIn,
  isAccountOpen,
  setIsAccountOpen,
  setIsLangOpen,
  openAuth,
  openWallet,
}: MobileNavbarProps) => {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <div className="md:hidden fixed bottom-0 left-0 w-full z-[500] bg-[#1a1f33] border-t border-white/5 h-[64px] flex items-center justify-around shadow-[0_-8px_30px_rgba(0,0,0,0.4)]">
      {!isLoggedIn ? (
        <div className="flex w-full px-3 gap-3 h-full items-center">
          <button
            onClick={() => setIsLangOpen(true)}
            className="flex-1 bg-[#232a44] rounded-lg px-3 h-11 flex items-center justify-between border border-white/5 active:scale-95 transition-all"
          >
            <div className="flex items-center gap-2">
              <div className="h-4 w-6 rounded-sm bg-red-600 flex items-center justify-center p-0.5 overflow-hidden">
                <div className="h-2.5 w-2.5 bg-green-500 rounded-full" />
              </div>
              <div className="flex flex-col items-start">
                <span className="text-white text-[10px] font-black leading-none uppercase tracking-tighter italic">
                  BDT
                </span>
                <span className="text-white/40 text-[8px] font-bold leading-none uppercase">
                  English
                </span>
              </div>
            </div>
            <ChevronDown className="h-3 w-3 text-white/30" />
          </button>
          <button
            onClick={() => openAuth("signup")}
            className="flex-1 h-11 bg-white/5 text-white/80 text-[11px] font-black uppercase tracking-[0.1em] rounded-lg active:scale-95 transition-all border border-white/10 italic"
          >
            Sign up
          </button>
          <button
            onClick={() => openAuth("login")}
            className="flex-1 h-11 bg-login-grad text-white text-[11px] font-black uppercase tracking-[0.1em] rounded-lg shadow-xl shadow-casino-gold/10 active:scale-95 transition-all italic border border-white/5"
          >
            Login
          </button>
        </div>
      ) : (
        <>
          <button
            onClick={() => {
              setIsAccountOpen(false);
              navigate("/");
            }}
            className="flex flex-col items-center justify-center gap-1.5 w-1/4 h-full active:scale-90 transition-all group"
          >
            <div
              className={`h-9 w-9 rounded-full flex items-center justify-center transition-all ${
                location.pathname === "/" && !isAccountOpen
                  ? "bg-transparent ring-2 ring-casino-gold ring-offset-2 ring-offset-[#1a1f33] shadow-[0_0_20px_rgba(201,163,61,0.3)]"
                  : "bg-transparent"
              }`}
            >
              <Home
                className={`h-5 w-5 transition-colors ${
                  location.pathname === "/" && !isAccountOpen
                    ? "text-casino-gold"
                    : "text-white"
                }`}
              />
            </div>
            <span
              className={`text-[9px] font-black uppercase tracking-widest italic ${
                location.pathname === "/" && !isAccountOpen
                  ? "text-casino-gold"
                  : "text-white"
              }`}
            >
              Home
            </span>
          </button>

          <button
            onClick={() => {
              setIsAccountOpen(false);
              navigate("/promotion");
            }}
            className="flex flex-col items-center justify-center gap-1.5 w-1/4 h-full active:scale-90 transition-all group"
          >
            <div
              className={`h-9 w-9 rounded-full flex items-center justify-center transition-all ${
                location.pathname === "/promotion" && !isAccountOpen
                  ? "bg-transparent ring-2 ring-casino-gold ring-offset-2 ring-offset-[#1a1f33] shadow-[0_0_20px_rgba(201,163,61,0.3)]"
                  : "bg-transparent"
              }`}
            >
              <Gift
                className={`h-5 w-5 transition-colors ${
                  location.pathname === "/promotion" && !isAccountOpen
                    ? "text-casino-gold"
                    : "text-white"
                }`}
              />
            </div>
            <span
              className={`text-[9px] font-black uppercase tracking-widest italic ${
                location.pathname === "/promotion" && !isAccountOpen
                  ? "text-casino-gold"
                  : "text-white"
              }`}
            >
              Promotions
            </span>
          </button>

          <button
            onClick={() => openWallet("deposit")}
            className="flex flex-col items-center justify-center gap-1.5 w-1/4 h-full active:scale-90 transition-all group"
          >
            <div className="h-9 w-9 flex items-center justify-center bg-login-grad rounded-lg shadow-xl shadow-casino-gold/10 border border-white/5">
              <Wallet className="h-5 w-5 text-white transition-colors" />
            </div>
            <span className="text-[9px] font-black uppercase tracking-widest italic text-white transition-colors">
              Deposit
            </span>
          </button>

          <button
            onClick={() => setIsAccountOpen(true)}
            className="flex flex-col items-center justify-center gap-1.5 w-1/4 h-full active:scale-90 transition-all group"
          >
            <div
              className={`h-9 w-9 rounded-full flex items-center justify-center transition-all ${
                isAccountOpen
                  ? "bg-transparent ring-2 ring-casino-gold ring-offset-2 ring-offset-[#1a1f33] shadow-[0_0_20px_rgba(201,163,61,0.3)]"
                  : "bg-transparent"
              }`}
            >
              <User
                className={`h-5 w-5 transition-colors ${
                  isAccountOpen ? "text-casino-gold" : "text-white"
                }`}
              />
            </div>
            <span
              className={`text-[9px] font-black uppercase tracking-widest italic ${
                isAccountOpen ? "text-casino-gold" : "text-white"
              }`}
            >
              My Account
            </span>
          </button>
        </>
      )}
    </div>
  );
};
