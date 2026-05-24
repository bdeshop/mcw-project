import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Casino from './components/pages/HomePage'
import { InfoPage } from './components/pages/InfoPage'
import { PromotionsPage } from './components/modals/PromotionsPage'
import { VIPPage } from './components/pages/VIPPage'
import { DownloadPage } from './components/pages/DownloadPage'
import { AffiliatePage } from './components/pages/AffiliatePage'
import { PartnershipPage } from './components/pages/PartnershipPage'
import { GameLibraryPage } from './components/pages/GameLibraryPage'
import { LanguageProvider } from './context/LanguageContext'
import { MainLayout } from './components/layout/MainLayout'
import './App.css'
// import     




function App() {
  return (
    <LanguageProvider>
      <Router>
        <MainLayout>
          <Routes>
            <Route path="/" element={<Casino />} />
            <Route path="/promotion" element={<PromotionsPage />} />
            <Route path="/vip" element={<VIPPage />} />
            <Route path="/download" element={<DownloadPage />} />
            <Route path="/affiliate" element={<AffiliatePage />} />
            <Route path="/partnership" element={<PartnershipPage />} />
            <Route path="/games" element={<GameLibraryPage />} />
            <Route path="/:type" element={<InfoPage />} />
          </Routes>
        </MainLayout>
      </Router>
    </LanguageProvider>
  )
}

export default App
