import React from 'react';
import { Link } from 'react-router-dom';
import AnimatedHeading from './AnimatedHeading';

const Portfolio = () => {
  const projects = [
    { id: 1, title: 'E-Medicals', category: 'Healthcare Web App', image: '/images/work_1_md.jpg' },
    { id: 2, title: 'Placify', category: 'AI Learning Ecosystem', image: '/images/placify.png' },
    { id: 3, title: 'InsightBI', category: 'AI Analytics Platform', image: '/images/work_2_md.jpg' },
    { id: 4, title: 'NASSCOM Training', category: 'Data Analytics', image: '/images/work_3_md.jpg' },
    { id: 5, title: 'Innovation Lead', category: 'Leadership', image: '/images/work_4_full.jpg' },
    { id: 6, title: 'Google UX', category: 'UX Design Course', image: '/images/work_9_a_md.jpg' },
  ];

  return (
    <section id="portfolio" className="py-24 bg-slate-900 text-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <div>
            <AnimatedHeading className="text-4xl md:text-5xl font-black mb-4 inline-block bg-clip-text text-transparent bg-gradient-to-r from-indigo-300 via-purple-300 to-pink-300">
              Portfolio
            </AnimatedHeading>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <Link 
              to={`/portfolio/${project.id}`}
              key={project.id} 
              className="group relative overflow-hidden rounded-2xl aspect-[4/3] bg-slate-800 block cursor-pointer"
            >
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
                <span className="bg-indigo-500 w-12 h-12 rounded-full flex items-center justify-center text-white mb-4 transform translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-100 shadow-[0_0_15px_rgba(79,70,229,0.5)]">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"></path></svg>
                </span>
                <h3 className="text-2xl font-bold text-white mb-2 transform translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-200">
                  {project.title}
                </h3>
                <p className="text-indigo-300 font-medium tracking-wide uppercase text-sm transform translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-300">
                  {project.category}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
