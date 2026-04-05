import React, { useState } from 'react';
import AnimatedHeading from './AnimatedHeading';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');
    try {
      const response = await fetch('http://localhost:5000/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => setStatus(''), 5000);
      } else {
        setStatus('error');
      }
    } catch (err) {
      console.error(err);
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="py-24 bg-slate-950 text-white relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-indigo-900/10 rounded-full mix-blend-screen filter blur-3xl opacity-50 transform translate-x-1/2"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <AnimatedHeading className="text-4xl md:text-5xl font-black mb-4 mx-auto inline-block bg-clip-text text-transparent bg-gradient-to-r from-indigo-300 via-purple-300 to-pink-300">
            Get In Touch
          </AnimatedHeading>
        </div>

        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 max-w-6xl mx-auto">
          {/* Form */}
          <div className="lg:w-2/3">
            <form onSubmit={handleSubmit} className="space-y-8 bg-slate-900/50 p-8 rounded-3xl border border-slate-800 backdrop-blur-sm shadow-xl">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-gray-400 ml-2">Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    name="name" 
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full bg-slate-800/50 border border-slate-700 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all"
                    required 
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-gray-400 ml-2">Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full bg-slate-800/50 border border-slate-700 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all"
                    required 
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-gray-400 ml-2">Message</label>
                <textarea 
                  id="message" 
                  name="message" 
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full bg-slate-800/50 border border-slate-700 rounded-2xl px-6 py-4 text-white resize-none focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all"
                  required 
                ></textarea>
              </div>
              <button 
                type="submit" 
                className="bg-indigo-600 hover:bg-indigo-500 text-white px-10 py-4 rounded-full font-medium transition-all duration-300 shadow-[0_0_20px_rgba(79,70,229,0.3)] hover:shadow-[0_0_30px_rgba(79,70,229,0.5)] w-full md:w-auto flex items-center justify-center gap-2"
                disabled={status === 'sending'}
              >
                {status === 'sending' ? 'Sending...' : 'Send Message'}
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
              </button>
              
              {status === 'success' && (
                <p className="text-green-400 text-sm mt-4 text-center pb-2 bg-green-400/10 rounded-lg p-3 border border-green-400/20">Your message was sent successfully!</p>
              )}
              {status === 'error' && (
                <p className="text-red-400 text-sm mt-4 text-center pb-2 bg-red-400/10 rounded-lg p-3 border border-red-400/20">There was an error sending your message. Please try again.</p>
              )}
            </form>
          </div>

          {/* Contact Info */}
          <div className="lg:w-1/3 flex flex-col justify-center space-y-10">
            <div className="group">
              <span className="text-xs font-bold tracking-widest text-indigo-400 uppercase mb-2 block">Email</span>
              <a href="mailto:nikhilcpoff@gmail.com" className="text-2xl font-light hover:text-indigo-300 transition-colors">nikhilcpoff@gmail.com</a>
            </div>
            <div className="group">
              <span className="text-xs font-bold tracking-widest text-pink-400 uppercase mb-2 block">Phone</span>
              <a href="tel:+918590213221" className="text-2xl font-light hover:text-pink-300 transition-colors">+91 8590213221</a>
            </div>
            <div className="group">
              <span className="text-xs font-bold tracking-widest text-teal-400 uppercase mb-4 block">Follow Me</span>
              <div className="flex gap-5 items-center">
                <a href="https://instagram.com/_racehell_" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-pink-500 transition-all duration-300 transform hover:scale-110" aria-label="Instagram">
                  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                </a>
                <a href="#" className="text-slate-400 hover:text-white transition-all duration-300 transform hover:scale-110" aria-label="X (Twitter)">
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.008 4.076H5.059z" /></svg>
                </a>
                <a href="#" className="text-slate-400 hover:text-red-500 transition-all duration-300 transform hover:scale-110" aria-label="YouTube">
                  <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon></svg>
                </a>
                <a href="#" className="text-slate-400 hover:text-white transition-all duration-300 transform hover:scale-110" aria-label="GitHub">
                  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                </a>
                <a href="#" className="text-slate-400 hover:text-blue-500 transition-all duration-300 transform hover:scale-110" aria-label="LinkedIn">
                  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
