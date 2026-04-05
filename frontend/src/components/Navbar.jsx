import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '/#home' },
    { name: 'About', href: '/#about' },
    { name: 'Services', href: '/#services' },
    { name: 'Skills', href: '/#skills' },
    { name: 'Contact', href: '/#contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 w-full z-50 transition-all duration-500 border-b ${scrolled ? 'bg-slate-950/95 border-slate-800 shadow-2xl py-4 backdrop-blur-md' : 'bg-transparent border-transparent py-8'}`}>
      <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
        <a href="/" onClick={(e) => { e.preventDefault(); window.location.reload(); }} className="text-2xl md:text-3xl font-black tracking-tighter text-white mix-blend-difference hover:opacity-70 transition-opacity cursor-pointer">
          RACEHELL<span className="text-purple-500 hover:text-pink-500 transition-colors">.</span>
        </a>

        {/* Desktop Nav */}
        <ul className="hidden lg:flex items-center space-x-16">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a 
                href={link.href} 
                className="text-base uppercase tracking-widest font-black text-gray-300 hover:text-purple-300 hover:drop-shadow-[0_0_15px_rgba(192,132,252,0.8)] transition-all duration-300 py-2"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Toggle */}
        <button 
          className="lg:hidden text-gray-300 hover:text-white transition-colors"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {mobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Standard Dropdown Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-slate-950 border-t border-slate-800 shadow-2xl animate-fade-in-up">
          <ul className="flex flex-col py-6">
            {navLinks.map((link) => (
              <li key={link.name} className="text-center">
                <a 
                  href={link.href} 
                  className="block px-6 py-4 text-gray-300 hover:text-white hover:bg-slate-900 uppercase tracking-widest text-sm transition-colors font-semibold"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
