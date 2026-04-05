import React from 'react';

const Hero = () => {
  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-slate-950 text-white"
    >
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-tr from-indigo-900/40 to-slate-950/80 z-10" />
        <img 
          src="/images/profile.jpg" 
          alt="Background" 
          className="w-full h-full object-cover opacity-20 filter grayscale"
        />
        {/* Animated Orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-indigo-500/30 rounded-full mix-blend-screen filter blur-3xl animate-blob"></div>
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-purple-500/30 rounded-full mix-blend-screen filter blur-3xl animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-1/4 left-1/2 w-96 h-96 bg-pink-500/30 rounded-full mix-blend-screen filter blur-3xl animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative z-10 container mx-auto px-6 text-center">
        <h1 className="text-6xl md:text-8xl md:text-[9rem] font-black tracking-[0.05em] mb-6 bg-clip-text text-transparent bg-gradient-to-r from-indigo-300 via-purple-300 to-pink-300 animate-fade-in-up">
          RACEHELL
        </h1>
        <p className="text-xl md:text-3xl text-gray-300 font-light max-w-4xl mx-auto leading-relaxed animate-fade-in-up animation-delay-300">
          I'm <span className="text-white font-medium">Nikhil P</span>, an Aspiring Web Developer delivering efficient, user-focused digital solutions.
        </p>

        <div className="mt-12 flex items-center justify-center gap-4 animate-fade-in-up animation-delay-600">
          <a href="#portfolio" className="px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 text-white rounded-full font-medium transition-all duration-300 shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-[0_0_30px_rgba(255,255,255,0.3)]">
            View My Work
          </a>
          <a href="#contact" className="px-8 py-4 bg-indigo-600 hover:bg-indigo-500 text-white rounded-full font-medium transition-all duration-300 shadow-[0_0_20px_rgba(79,70,229,0.3)] hover:shadow-[0_0_30px_rgba(79,70,229,0.5)]">
            Contact Me
          </a>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center animate-bounce text-gray-400">
        <span className="text-sm font-medium tracking-widest mb-2 uppercase">Scroll</span>
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path></svg>
      </div>
    </section>
  );
};

export default Hero;
