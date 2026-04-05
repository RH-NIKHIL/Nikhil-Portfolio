import React from 'react';
import AnimatedHeading from './AnimatedHeading';

const About = () => {
  return (
    <section id="about" className="py-24 bg-slate-950 text-white relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-purple-900/10 rounded-full mix-blend-screen filter blur-3xl transform -translate-y-1/2 -translate-x-1/2"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <AnimatedHeading className="text-4xl md:text-5xl font-black mb-4 mx-auto inline-block bg-clip-text text-transparent bg-gradient-to-r from-indigo-300 via-purple-300 to-pink-300">
            About Me
          </AnimatedHeading>
        </div>

        <div className="flex flex-col lg:flex-row lg:items-start items-center gap-16">
          <div className="lg:w-1/2 w-full flex justify-center mt-4">
            <div className="relative group max-w-md w-full">
              <div className="absolute -inset-4 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-3xl opacity-20 blur-xl group-hover:opacity-40 transition duration-700"></div>
              <div className="relative rounded-3xl md:rounded-[2rem] overflow-hidden shadow-2xl aspect-square">
                <img 
                  src="/images/profile.jpg" 
                  alt="About Me" 
                  className="w-full h-full object-cover object-center grayscale hover:grayscale-0 hover:scale-110 transition-all duration-700 block"
                />
              </div>
            </div>
          </div>
          
          <div className="lg:w-1/2 w-full space-y-8">
            <h3 className="text-3xl md:text-4xl font-bold uppercase tracking-widest bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400">
              Aspiring Web Developer
            </h3>
            
            <div className="space-y-6 text-justify text-lg text-slate-400 font-light leading-relaxed">
              <p>
                Aspiring Web Developer with a strong foundation in front-end technologies, programming, and databases, seeking to contribute to innovative projects by delivering efficient, user-focused digital solutions while continuously enhancing technical expertise and supporting organizational growth.
              </p>
            </div>
            
            <div className="pt-8 flex items-center gap-6">
              <a href="/images/Nikhil_CV.pdf" download="Nikhil_P_CV.pdf" className="group relative inline-flex items-center justify-center px-9 py-4 font-bold text-white transition-all duration-300 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 rounded-full hover:scale-105 hover:shadow-[0_0_40px_rgba(168,85,247,0.6)] overflow-hidden">
                <span className="absolute inset-0 w-full h-full -ml-12 bg-white/30 blur-sm transform translate-x-[-150%] skew-x-[-30deg] group-hover:translate-x-[250%] transition-transform duration-1000 ease-out"></span>
                <span className="relative flex items-center gap-3 tracking-wide uppercase text-sm">
                  Download My CV
                  <svg className="w-5 h-5 group-hover:animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path></svg>
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
