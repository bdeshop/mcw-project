import React, { useState, useEffect } from "react";
import { Header } from "../home/Header";
import { Sidebar } from "../home/Sidebar";
import { Footer } from "./Footer";
import { AuthModal } from "../modals/AuthModal";
import { LanguageModal } from "../modals/LanguageModal";
import { WalletModal } from "../modals/WalletModal";
import { FreeSpinModal } from "../modals/FreeSpinModal";
import { BonusModal } from "../modals/BonusModal";
import { ReferralModal } from "../modals/ReferralModal";
import { WinnerModal } from "../modals/WinnerModal";
import { StreakModal } from "../modals/StreakModal";
import { BettingRecordsModal } from "../modals/BettingRecordsModal";
import { TransactionRecordsModal } from "../modals/TransactionRecordsModal";
import { PersonalInfoModal } from "../modals/PersonalInfoModal";
import { ChangePasswordModal } from "../modals/ChangePasswordModal";
import { InboxModal } from "../modals/InboxModal";
import { GeneralModal, ModalType } from "../modals/GeneralModal";
import { PromotionModal } from "../modals/PromotionModal";
import { TurnoverModal } from "../modals/TurnoverModal";
import { ContactSidebar } from "../sidebar/ContactSidebar";
import { CustomerServiceModal } from "../modals/CustomerServiceModal";
import { MobileAccountMenu } from "../home/MobileAccountMenu";
import { MobileNavbar } from "./MobileNavbar";
import { useLocation, useNavigate } from "react-router-dom";

interface MainLayoutProps {
  children: React.ReactNode;
}

export const MainLayout = ({ children }: MainLayoutProps) => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [activeSidebarCat, setActiveSidebarCat] = useState<string | null>(null);

  // Modals State
  const [isLangOpen, setIsLangOpen] = useState(false);
  const [isWalletOpen, setIsWalletOpen] = useState(false);
  const [walletTab, setWalletTab] = useState<"deposit" | "withdrawal">("deposit");
  const [isSpinOpen, setIsSpinOpen] = useState(false);
  const [isBonusOpen, setIsBonusOpen] = useState(false);
  const [isReferralOpen, setIsReferralOpen] = useState(false);
  const [isWinnerOpen, setIsWinnerOpen] = useState(false);
  const [isStreakOpen, setIsStreakOpen] = useState(false);
  const [isBettingOpen, setIsBettingOpen] = useState(false);
  const [isTransactionOpen, setIsTransactionOpen] = useState(false);
  const [isInfoOpen, setIsInfoOpen] = useState(false);
  const [isPasswordOpen, setIsPasswordOpen] = useState(false);
  const [isInboxOpen, setIsInboxOpen] = useState(false);
  const [isGeneralOpen, setIsGeneralOpen] = useState(false);
  const [generalType, setGeneralType] = useState<ModalType>("about");
  const [isPromoOpen, setIsPromoOpen] = useState(false);
  const [isTurnoverOpen, setIsTurnoverOpen] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [isCSOpen, setIsCSOpen] = useState(false);

  // Auth State
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState({
    username: "test12343543534",
    balance: "0",
    vipPoints: "0"
  });

  const [isAuthOpen, setIsAuthOpen] = useState(false);
  const [authMode, setAuthMode] = useState<"login" | "signup">("login");

  const openAuth = (mode: "login" | "signup") => {
    console.log("Opening auth modal:", mode);
    setAuthMode(mode);
    setIsAuthOpen(true);
  };

  const openWallet = (tab: "deposit" | "withdrawal") => {
    setWalletTab(tab);
    setIsWalletOpen(true);
  };



  const handleSectionClick = (type: string) => {
    switch (type) {
      case "deposit": openWallet("deposit"); break;
      case "withdrawal": openWallet("withdrawal"); break;
      case "spin": setIsSpinOpen(true); break;
      case "bonus": setIsBonusOpen(true); break;
      case "referral": setIsReferralOpen(true); break;
      case "winner": setIsWinnerOpen(true); break;
      case "streak": setIsStreakOpen(true); break;
      case "betting": setIsBettingOpen(true); break;
      case "turnover": setIsTurnoverOpen(true); break;
      case "transaction": setIsTransactionOpen(true); break;
      case "info": setIsInfoOpen(true); break;
      case "password": setIsPasswordOpen(true); break;
      case "inbox": setIsInboxOpen(true); break;
      case "about": setGeneralType("about"); setIsGeneralOpen(true); break;
      default: break;
    }
  };

  const [isAccountOpen, setIsAccountOpen] = useState(false);
  const isAffiliatePage = location.pathname === "/affiliate";

  return (
    <div className="min-h-screen bg-casino-bg text-casino-text font-jost overflow-x-hidden">
      {!isAffiliatePage && (
        <Sidebar
          isOpen={isSidebarOpen}
          onClose={() => { setIsSidebarOpen(false); setActiveSidebarCat(null); }}
          activeCategory={activeSidebarCat}
          setActiveCategory={setActiveSidebarCat}
          onWinnerClick={() => setIsWinnerOpen(true)}
          onContactClick={() => setIsContactOpen(true)}
          onCSClick={() => setIsCSOpen(true)}
          isLoggedIn={isLoggedIn}
          user={user}
          openAuth={openAuth}
          onLogout={() => setIsLoggedIn(false)}
        />
      )}

      <ContactSidebar
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
        onCSClick={() => { setIsContactOpen(false); setIsCSOpen(true); }}
      />

      <CustomerServiceModal
        isOpen={isCSOpen}
        onClose={() => setIsCSOpen(false)}
      />

      <AuthModal
        isOpen={isAuthOpen}
        onClose={() => setIsAuthOpen(false)}
        mode={authMode}
        setMode={setAuthMode}
        onLoginSuccess={() => { setIsLoggedIn(true); setIsAuthOpen(false); }}
      />

      <LanguageModal
        isOpen={isLangOpen}
        onClose={() => setIsLangOpen(false)}
      />

      <WalletModal
        isOpen={isWalletOpen}
        onClose={() => setIsWalletOpen(false)}
        initialTab={walletTab}
      />

      <FreeSpinModal
        isOpen={isSpinOpen}
        onClose={() => setIsSpinOpen(false)}
      />

      <BonusModal
        isOpen={isBonusOpen}
        onClose={() => setIsBonusOpen(false)}
      />

      <ReferralModal
        isOpen={isReferralOpen}
        onClose={() => setIsReferralOpen(false)}
      />

      <WinnerModal
        isOpen={isWinnerOpen}
        onClose={() => setIsWinnerOpen(false)}
      />

      <StreakModal
        isOpen={isStreakOpen}
        onClose={() => setIsStreakOpen(false)}
      />

      <BettingRecordsModal
        isOpen={isBettingOpen}
        onClose={() => setIsBettingOpen(false)}
      />

      <TransactionRecordsModal
        isOpen={isTransactionOpen}
        onClose={() => setIsTransactionOpen(false)}
      />

      <TurnoverModal
        isOpen={isTurnoverOpen}
        onClose={() => setIsTurnoverOpen(false)}
      />

      <PersonalInfoModal
        isOpen={isInfoOpen}
        onClose={() => setIsInfoOpen(false)}
        user={user}
      />

      <ChangePasswordModal
        isOpen={isPasswordOpen}
        onClose={() => setIsPasswordOpen(false)}
      />

      <InboxModal
        isOpen={isInboxOpen}
        onClose={() => setIsInboxOpen(false)}
      />

      <GeneralModal
        isOpen={isGeneralOpen}
        onClose={() => setIsGeneralOpen(false)}
        type={generalType}
      />

      <PromotionModal
        isOpen={isPromoOpen}
        onClose={() => setIsPromoOpen(false)}
      />

      <MobileAccountMenu
        isOpen={isAccountOpen}
        onClose={() => setIsAccountOpen(false)}
        user={user}
        onLogout={() => { setIsLoggedIn(false); setIsAccountOpen(false); }}
        onSectionClick={handleSectionClick}
      />

      {!isAffiliatePage && (
        <Header
          onMenuClick={() => setIsSidebarOpen(true)}
          onLoginClick={() => openAuth("login")}
          onSignupClick={() => openAuth("signup")}
          onLangClick={() => setIsLangOpen(true)}
          onDepositClick={() => openWallet("deposit")}
          onWithdrawClick={() => openWallet("withdrawal")}
          onSpinClick={() => setIsSpinOpen(true)}
          onBonusClick={() => setIsBonusOpen(true)}
          onReferralClick={() => setIsReferralOpen(true)}
          onWinnerClick={() => setIsWinnerOpen(true)}
          onStreakClick={() => setIsStreakOpen(true)}
          onBettingClick={() => setIsBettingOpen(true)}
          onTurnoverClick={() => setIsTurnoverOpen(true)}
          onTransactionClick={() => setIsTransactionOpen(true)}
          onInfoClick={() => setIsInfoOpen(true)}
          onPasswordClick={() => setIsPasswordOpen(true)}
          onInboxClick={() => setIsInboxOpen(true)}
          onContactClick={() => setIsContactOpen(true)}
          isLoggedIn={isLoggedIn}
          user={user}
          onLogout={() => setIsLoggedIn(false)}
          hideAuth={isAffiliatePage}
        />
      )}

      {!isAffiliatePage && (
        <MobileNavbar
          isLoggedIn={isLoggedIn}
          isAccountOpen={isAccountOpen}
          setIsAccountOpen={setIsAccountOpen}
          setIsLangOpen={setIsLangOpen}
          openAuth={openAuth}
          openWallet={openWallet}
        />
      )}

      <div className="flex-1">
        {children}
      </div>

      {!isAffiliatePage && <Footer onContactClick={() => setIsContactOpen(true)} />}
    </div>
  );
};
