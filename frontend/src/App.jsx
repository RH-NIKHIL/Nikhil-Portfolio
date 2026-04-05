import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import PortfolioDetail from './pages/PortfolioDetail';
import Lenis from 'lenis';

function App() {
  useEffect(() => {
    // Prevent default browser scroll restoration so it doesn't remember where you scrolled
    if ('scrollRestoration' in history) {
      history.scrollRestoration = 'manual';
    }

    // Check if this visit is a page refresh
    const navEntries = window.performance.getEntriesByType("navigation");
    if (navEntries.length > 0 && navEntries[0].type === "reload") {
      // If refreshed, strictly force navigation back to root Home page natively
      if (window.location.pathname !== '/' || window.location.hash) {
        window.location.replace('/');
      } else {
        window.scrollTo(0, 0);
      }
    } else {
      // Just ensure we always start at the absolute top
      window.scrollTo(0, 0);
    }

    // Initialize Lenis for exceptionally smooth, floating momentum scrolling
    const lenis = new Lenis({
      duration: 5.0,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      lerp: 0.01, // Maximum floaty latency
      wheelMultiplier: 0.3, // Heavy wheel friction
      infinite: false,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    
    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <div className="bg-slate-950 min-h-screen text-slate-300 font-sans selection:bg-indigo-500/30 selection:text-indigo-200">
      <Navbar />
      
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/portfolio/:id" element={<PortfolioDetail />} />
        </Routes>
      </main>
      
      {/* Basic Footer */}
      <footer className="bg-slate-950 py-12 border-t border-slate-900 border-opacity-50 mt-auto">
        <div className="container mx-auto px-6 text-center">
          <div className="text-2xl font-black mb-6 flex justify-center items-center gap-4">
            <div><span className="text-white">RACEHELL</span><span className="text-indigo-500">.</span></div>
          </div>
          <p className="text-slate-500 text-sm">
            © {new Date().getFullYear()} RACEHELL Portfolio. Built with MERN & Tailwind CSS.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
