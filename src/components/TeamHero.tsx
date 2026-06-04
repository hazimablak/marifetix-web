"use client";

import React from 'react';

interface TeamHeroProps {
  member: {
    name: string;
    role: string;
    focus: string;
    highlightProject: string;
    description: string;
    image: string;
    coverBgGradient: string;
    social: {
      github?: string;
      linkedin?: string;
      instagram?: string;
    }
  }
}

const TeamHero: React.FC<TeamHeroProps> = ({ member }) => {
  return (
    <section className="pt-16 pb-12 bg-white dark:bg-[#0a0a0a] transition-colors duration-300">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="bg-white dark:bg-gray-900 rounded-[3rem] p-8 md:p-12 border border-gray-100 dark:border-gray-800 shadow-sm relative overflow-hidden flex flex-col md:flex-row items-center gap-10 transition-colors duration-300">
          
          {/* 🔥 Sol Taraf: Dalgalı Arka Plan ve Büyük Profil Resmi */}
          <div className="w-full md:w-2/5 flex justify-center relative">
            <div className={`w-80 h-80 rounded-[3rem] bg-gradient-to-r ${member.coverBgGradient} flex items-center justify-center relative overflow-hidden group shadow-lg`}>
              {/* Arka plan dalgalı deseni */}
              <div className="absolute inset-0 z-0 opacity-15" style={{ backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>
              <img 
                src={member.image} 
                alt={member.name} 
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500 relative z-10" 
              />
            </div>
          </div>

          {/* Sağ Taraf: Bilgiler ve Sosyal Medya */}
          <div className="w-full md:w-3/5 space-y-6">
            <div className="flex items-center space-x-2 text-brandOrange font-bold text-sm tracking-wider uppercase mb-3">
              <span className="w-6 h-[2px] bg-brandOrange"></span>
              <span>PROFİL</span>
              <span className="w-6 h-[2px] bg-brandOrange"></span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-extrabold text-brandDark dark:text-white leading-tight mb-2 transition-colors">
              Merhaba, <br/> Biz {member.name} Ekibiz.
            </h1>
            
            <p className="text-sm font-semibold text-gray-700 dark:text-gray-200 bg-orange-50 dark:bg-brandOrange/20 px-3 py-1 rounded-full inline-block mb-3 transition-colors">
              {member.role}
            </p>
            
            <p className="text-gray-500 dark:text-gray-400 leading-relaxed mb-6 transition-colors">
              {member.description}
            </p>

            {/* Sosyal Medya İkonları */}
            <div className="flex items-center space-x-5 text-gray-400 dark:text-gray-500 pt-3 border-t border-gray-100 dark:border-gray-800 transition-colors">
              <span className="text-sm font-semibold text-gray-600 dark:text-gray-400">Bizi Takip Edin:</span>
              <div className="flex space-x-3">
                {member.social.github && (
                  <a href={member.social.github} target="_blank" rel="noopener noreferrer" className="w-9 h-9 bg-gray-50 dark:bg-gray-800 text-gray-600 dark:text-gray-300 flex items-center justify-center rounded-xl hover:bg-brandOrange dark:hover:bg-brandOrange hover:text-white dark:hover:text-white transition-colors" aria-label="GitHub">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.09.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.379.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.577.688.48C19.138 20.161 22 16.418 22 12c0-5.523-4.477-10-10-10z"/></svg>
                  </a>
                )}
                {member.social.linkedin && (
                  <a href={member.social.linkedin} target="_blank" rel="noopener noreferrer" className="w-9 h-9 bg-gray-50 dark:bg-gray-800 text-gray-600 dark:text-gray-300 flex items-center justify-center rounded-xl hover:bg-[#0077b5] dark:hover:bg-[#0077b5] hover:text-white dark:hover:text-white transition-colors" aria-label="LinkedIn">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                  </a>
                )}
                {member.social.instagram && (
                  <a href={member.social.instagram} target="_blank" rel="noopener noreferrer" className="w-9 h-9 bg-gray-50 dark:bg-gray-800 text-gray-600 dark:text-gray-300 flex items-center justify-center rounded-xl hover:bg-[#e1306c] dark:hover:bg-[#e1306c] hover:text-white dark:hover:text-white transition-colors" aria-label="Instagram">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                  </a>
                )}
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamHero;