import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Navbar from './components/layout/Navbar';
import Footer from './components/Footer';
import CookieConsent from './components/CookieConsent';
import MetaTags from './components/SEO/MetaTags';
import PageTransition from './components/PageTransition';
const Home = React.lazy(() => import('./pages/Home'));
const Studios = React.lazy(() => import('./pages/Studios'));
const Software = React.lazy(() => import('./pages/Software'));
const Electrical = React.lazy(() => import('./pages/Electrical'));
const Gallery = React.lazy(() => import('./pages/Gallery'));
const Careers = React.lazy(() => import('./pages/Careers'));
const About = React.lazy(() => import('./pages/About'));
const PrivacyPolicy = React.lazy(() => import('./pages/legal/PrivacyPolicy'));
const Terms = React.lazy(() => import('./pages/legal/Terms'));
const RefundPolicy = React.lazy(() => import('./pages/legal/RefundPolicy'));
const GetStarted = React.lazy(() => import('./pages/GetStarted'));
const Services = React.lazy(() => import('./pages/Services'));
const SpecialOffers = React.lazy(() => import('./pages/SpecialOffers'));

// Loading component
const LoadingSpinner = () => (
  <div className="flex justify-center items-center h-96">
    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
  </div>
);

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
              <React.Suspense fallback={<LoadingSpinner />}>
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
                  {/* Redirect old software-offers route */}
                  <Route path="/software-offers" element={<SpecialOffers />} />
                </Routes>
              </React.Suspense>
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