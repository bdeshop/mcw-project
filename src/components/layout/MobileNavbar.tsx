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
    <div className="md:hidden fixed bottom-2 left-2 right-2 z-[500] bg-[#1a1f33] border border-white/10 rounded-[14px] h-[54px] flex items-center justify-around shadow-[0_-8px_30px_rgba(0,0,0,0.4)]">
      {!isLoggedIn ? (
        <div className="flex w-full px-3 gap-2.5 h-full items-center">
          <button
            onClick={() => setIsLangOpen(true)}
            className="flex-1 bg-[#e2e4ea] rounded px-2 h-[30px] flex items-center justify-between border border-transparent active:scale-95 transition-all cursor-pointer"
          >
            <div className="flex items-center gap-1">
              <div className="h-3.5 w-5 rounded-sm bg-[#006a4e] flex items-center justify-center p-0.5 overflow-hidden shrink-0">
                <div className="h-2 w-2 bg-[#f42a41] rounded-full" />
              </div>
              <div className="flex flex-col items-start text-left">
                <span className="text-[#1a1f33] text-[9px] font-black leading-none uppercase">
                  BDT
                </span>
                <span className="text-[#1a1f33]/70 text-[7.5px] font-bold leading-none mt-0.5">
                  English
                </span>
              </div>
            </div>
            <ChevronDown className="h-3 w-3 text-[#1a1f33]/60" strokeWidth={2.5} />
          </button>
          <button
            onClick={() => openAuth("signup")}
            className="flex-1 h-[30px] bg-signup-grad text-white text-[12px] font-bold rounded active:scale-95 transition-all border border-white/5 flex items-center justify-center cursor-pointer"
          >
            Sign up
          </button>
          <button
            onClick={() => openAuth("login")}
            className="flex-1 h-[30px] bg-login-grad text-white text-[12px] font-bold rounded shadow-xl shadow-casino-gold/10 active:scale-95 transition-all border border-white/5 flex items-center justify-center cursor-pointer"
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
            className="flex flex-col items-center justify-center gap-0.5 w-1/4 h-full active:scale-90 transition-all group"
          >
            <div
              className={`h-7.5 w-7.5 rounded-full flex items-center justify-center transition-all ${
                location.pathname === "/" && !isAccountOpen
                  ? "bg-transparent ring-2 ring-casino-gold ring-offset-2 ring-offset-[#1a1f33] shadow-[0_0_20px_rgba(201,163,61,0.3)]"
                  : "bg-transparent"
              }`}
            >
              <Home
                className={`h-4.5 w-4.5 transition-colors ${
                  location.pathname === "/" && !isAccountOpen
                    ? "text-casino-gold"
                    : "text-white"
                }`}
              />
            </div>
            <span
              className={`text-[8px] font-black uppercase tracking-widest italic ${
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
            className="flex flex-col items-center justify-center gap-0.5 w-1/4 h-full active:scale-90 transition-all group"
          >
            <div
              className={`h-7.5 w-7.5 rounded-full flex items-center justify-center transition-all ${
                location.pathname === "/promotion" && !isAccountOpen
                  ? "bg-transparent ring-2 ring-casino-gold ring-offset-2 ring-offset-[#1a1f33] shadow-[0_0_20px_rgba(201,163,61,0.3)]"
                  : "bg-transparent"
              }`}
            >
              <Gift
                className={`h-4.5 w-4.5 transition-colors ${
                  location.pathname === "/promotion" && !isAccountOpen
                    ? "text-casino-gold"
                    : "text-white"
                }`}
              />
            </div>
            <span
              className={`text-[8px] font-black uppercase tracking-widest italic ${
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
            className="flex flex-col items-center justify-center gap-0.5 w-1/4 h-full active:scale-90 transition-all group"
          >
            <div className="h-7.5 w-7.5 flex items-center justify-center bg-login-grad rounded-md shadow-xl shadow-casino-gold/10 border border-white/5">
              <Wallet className="h-4.5 w-4.5 text-white transition-colors" />
            </div>
            <span className="text-[8px] font-black uppercase tracking-widest italic text-white transition-colors">
              Deposit
            </span>
          </button>

          <button
            onClick={() => setIsAccountOpen(true)}
            className="flex flex-col items-center justify-center gap-0.5 w-1/4 h-full active:scale-90 transition-all group"
          >
            <div
              className={`h-7.5 w-7.5 rounded-full flex items-center justify-center transition-all ${
                isAccountOpen
                  ? "bg-transparent ring-2 ring-casino-gold ring-offset-2 ring-offset-[#1a1f33] shadow-[0_0_20px_rgba(201,163,61,0.3)]"
                  : "bg-transparent"
              }`}
            >
              <User
                className={`h-4.5 w-4.5 transition-colors ${
                  isAccountOpen ? "text-casino-gold" : "text-white"
                }`}
              />
            </div>
            <span
              className={`text-[8px] font-black uppercase tracking-widest italic ${
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
