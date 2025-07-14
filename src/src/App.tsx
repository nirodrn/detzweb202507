import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Navbar from './components/layout/Navbar';
import Footer from './components/Footer';
import CookieConsent from './components/CookieConsent';
import MetaTags from './components/SEO/MetaTags';
import PageTransition from './components/PageTransition';
import Home from './pages/Home';
import Studios from './pages/Studios';
import Software from './pages/Software';
import Electrical from './pages/Electrical';
import Gallery from './pages/Gallery';
import Careers from './pages/Careers';
import About from './pages/About';
import PrivacyPolicy from './pages/legal/PrivacyPolicy';
import Terms from './pages/legal/Terms';
import RefundPolicy from './pages/legal/RefundPolicy';
import GetStarted from './pages/GetStarted';
import Services from './pages/Services';
import SpecialOffers from './pages/SpecialOffers';

// Component to handle scroll restoration
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Scroll to top when route changes
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'instant' // Use 'instant' for immediate scroll, 'smooth' for animated
    });
  }, [pathname]);

  return null;
}

function App() {
  return (
    <HelmetProvider>
      <Router>
        <ScrollToTop />
        <div className="flex flex-col min-h-screen">
          <MetaTags />
          <Navbar />
          <main className="flex-grow">
            <PageTransition>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/get-started" element={<GetStarted />} />
                <Route path="/services" element={<Services />} />
                <Route path="/studios" element={<Studios />} />
                <Route path="/software" element={<Software />} />
                <Route path="/electrical" element={<Electrical />} />
                <Route path="/gallery" element={<Gallery />} />
                <Route path="/careers" element={<Careers />} />
                <Route path="/about" element={<About />} />
                <Route path="/special-offers" element={<SpecialOffers />} />
                <Route path="/privacy-policy" element={<PrivacyPolicy />} />
                <Route path="/terms" element={<Terms />} />
                <Route path="/refund-policy" element={<RefundPolicy />} />
              </Routes>
            </PageTransition>
          </main>
          <Footer />
          <CookieConsent />
        </div>
      </Router>
    </HelmetProvider>
  );
}

export default App;