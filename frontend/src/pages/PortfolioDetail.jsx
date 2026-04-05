import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

const portfolioData = {
  1: {
    title: 'Shoe Rebranding',
    subtitle: 'Far far away, behind the word mountains, far from the countries.',
    images: ['/images/work_1_full.jpg', '/images/work_1_a_full.jpg'],
    date: 'March 9th, 2020',
    role: 'Identity, Web Design',
    client: 'Unslate',
    visit: 'https://example.com',
    desc1: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.',
    desc2: 'Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar.'
  },
  2: {
    title: 'Placify',
    subtitle: 'Email for Developers - reach humans instead of spam folders, deliver transactional and marketing emails at scale.',
    images: ['/images/placify.png', '/images/work_6_md.jpg'],
    date: 'April 14th, 2021',
    role: 'UX/UI, Development',
    client: 'Placify Team',
    visit: 'https://example.com',
    desc1: 'Placify is a cutting-edge email platform designed specifically for developer workflows. It focuses on high deliverability and easy integration, ensuring that important notifications reach the intended recipients every time.',
    desc2: 'With a focus on performance and reliability, Placify provides a seamless experience for both developers and users, featuring advanced tracking and simple API endpoints.'
  },
  // the rest can fallback to a generic structure
};

const PortfolioDetail = () => {
  const { id } = useParams();
  const project = portfolioData[id] || {
    title: 'Project Detail',
    subtitle: 'A beautiful crafting of digital experiences.',
    images: ['/images/work_2_md.jpg', '/images/work_3_md.jpg'],
    date: 'Jan 2023',
    role: 'Branding',
    client: 'Unknown',
    visit: '#',
    desc1: 'Generic project description placeholder goes here. Provides insight into the process and outcome.',
    desc2: 'Additional details about the challenges and solutions formulated during the project lifecycle.'
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-slate-950 min-h-screen pt-32 pb-24 text-slate-300">
      <div className="container mx-auto px-6">
        
        {/* Header Back Link */}
        <Link to="/" className="inline-flex items-center text-indigo-400 hover:text-indigo-300 mb-12 transition-colors">
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16l-4-4m0 0l4-4m-4 4h18"></path></svg>
          Back to Portfolio
        </Link>

        {/* Hero Section */}
        <div className="text-center mb-20">
          <h1 className="text-5xl md:text-7xl font-black mb-6 text-white tracking-tighter">
            {project.title}
          </h1>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto font-light">
            {project.subtitle}
          </p>
        </div>

        {/* Images Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {project.images.map((img, idx) => (
            <div key={idx} className="rounded-3xl overflow-hidden bg-slate-900 border border-slate-800 shadow-2xl">
              <img src={img} alt={`Project ${idx}`} className="w-full h-auto object-cover hover:scale-105 transition-transform duration-700" />
            </div>
          ))}
        </div>

        {/* Details Metadata */}
        <div className="bg-slate-900/50 rounded-3xl p-8 md:p-12 border border-slate-800 backdrop-blur-md mb-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <span className="block text-xs font-bold uppercase tracking-widest text-indigo-500 mb-2">Project Date</span>
              <span className="text-white font-medium">{project.date}</span>
            </div>
            <div>
              <span className="block text-xs font-bold uppercase tracking-widest text-indigo-500 mb-2">Role</span>
              <span className="text-white font-medium">{project.role}</span>
            </div>
            <div>
              <span className="block text-xs font-bold uppercase tracking-widest text-indigo-500 mb-2">Client</span>
              <span className="text-white font-medium">{project.client}</span>
            </div>
            <div>
              <span className="block text-xs font-bold uppercase tracking-widest text-indigo-500 mb-2">Visit</span>
              <a href={project.visit} className="text-indigo-400 hover:text-indigo-300 font-medium truncate block">Live Link ↗</a>
            </div>
          </div>
        </div>

        {/* Descriptions */}
        <div className="grid md:grid-cols-2 gap-12 text-lg leading-relaxed text-slate-400 font-light">
          <p>{project.desc1}</p>
          <p>{project.desc2}</p>
        </div>

      </div>
    </div>
  );
};

export default PortfolioDetail;
