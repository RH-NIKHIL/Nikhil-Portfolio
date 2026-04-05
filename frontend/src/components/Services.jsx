import React from 'react';
import AnimatedHeading from './AnimatedHeading';
import AnimatedFadeIn from './AnimatedFadeIn';

const Services = () => {
  const servicesData = [
    { id: 1, title: 'Web Development', desc: 'Full Stack Web Development trained by Xcel Mentors, focusing on delivering robust and efficient React/Tailwind architectures.', icon: 'M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4', color: 'from-blue-400 to-indigo-500' },
    { id: 2, title: 'UX/UI Design', desc: 'Certified in Google UX Design, ensuring all digital solutions are highly intuitive and user-focused.', icon: 'M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01', color: 'from-pink-400 to-rose-500' },
    { id: 3, title: 'Database Systems', desc: 'Proficient in MySQL and database integrations, built on a strong foundation from the Diploma in Computer Application.', icon: 'M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4', color: 'from-amber-400 to-orange-500' },
    { id: 4, title: 'Java Programming', desc: 'Trained in advanced Java concepts by C-DIT, bringing strong object-oriented programming fundamentals to any tech stack.', icon: 'M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4', color: 'from-emerald-400 to-teal-500' },
    { id: 5, title: 'Robotics', desc: 'Certified in Robotics by Acutro Tech, demonstrating versatile technical problem-solving capabilities across hardware and software.', icon: 'M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 002-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10', color: 'from-purple-400 to-fuchsia-500' },
    { id: 6, title: 'Digital Strategy', desc: 'Bringing together Strategic Thinking and Data Analytics (NASSCOM Foundation) to create impactful business applications.', icon: 'M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z', color: 'from-cyan-400 to-blue-500' },
  ];

  return (
    <section id="services" className="py-24 bg-slate-900 text-white border-y border-slate-800">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <AnimatedHeading className="text-4xl md:text-5xl font-black mb-4 mx-auto inline-block bg-clip-text text-transparent bg-gradient-to-r from-indigo-300 via-purple-300 to-pink-300">
            My Services
          </AnimatedHeading>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service, index) => (
            <AnimatedFadeIn key={service.id} delay={index * 150} className="h-full">
              <div 
                className="bg-slate-800/40 rounded-3xl p-8 border border-indigo-500/20 hover:border-purple-500/60 transition-all duration-500 group relative overflow-hidden h-full shadow-[0_0_20px_rgba(99,102,241,0.15)] hover:shadow-[0_0_40px_rgba(168,85,247,0.5)] transform hover:-translate-y-2"
              >
                {/* Background gradient on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="relative z-10">
                  <div className={`w-16 h-16 rounded-2xl mb-8 flex items-center justify-center bg-gradient-to-br ${service.color} shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-500`}>
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={service.icon}></path>
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-indigo-300 transition-colors">
                    {service.title.split(' ').map((word, i) => (
                      <React.Fragment key={i}>
                        {word}<br />
                      </React.Fragment>
                    ))}
                  </h3>
                  <p className="text-slate-400 leading-relaxed font-light">
                    {service.desc}
                  </p>
                </div>
              </div>
            </AnimatedFadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
