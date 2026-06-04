"use client";

import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link'; 

export default function TeamPage() {
  const teamMembers = [
    {
      id: 1,
      name: "Hazım Ablak",
      slug: "hazim-ablak", 
      role: "Kurucu & Yazılım Geliştirici",
      focus: "Web ve Mobil Uygulama",
      highlightProject: "Huda & Focus Hero",
      image: "https://ui-avatars.com/api/?name=Hazım+Ablak&background=1a1a1a&color=fff&size=256",
      bgGradient: "from-gray-900 to-gray-700 dark:from-slate-800 dark:to-slate-700",
    },
    {
      id: 2,
      name: "Melih",
      slug: "melih", 
      role: "Yazılım Geliştirici",
      focus: "Sistem & Mobil Geliştirme",
      highlightProject: "Mühendislik Projeleri",
      image: "https://ui-avatars.com/api/?name=Melih&background=ff6b35&color=fff&size=256",
      bgGradient: "from-[#ff6b35] to-[#ff9b71] dark:from-brandOrange dark:to-orange-700",
    }
  ];

  return (
    <main className="min-h-screen bg-brandLight dark:bg-slate-950 transition-colors duration-300">
      <Navbar />
      
      <section className="pt-24 pb-16 text-center container mx-auto px-6">
        <div className="flex items-center justify-center space-x-2 text-brandOrange font-bold text-sm tracking-wider uppercase mb-4">
          <span className="w-6 h-[2px] bg-brandOrange"></span>
          <span>GELİŞTİRİCİ EKİBİMİZ</span>
          <span className="w-6 h-[2px] bg-brandOrange"></span>
        </div>
        <h1 className="text-4xl md:text-5xl font-extrabold text-brandDark dark:text-white mb-6 transition-colors">
          Projelerin Arkasındaki <br className="hidden md:block" /> Geliştiriciler
        </h1>
        <p className="text-gray-500 dark:text-slate-400 max-w-2xl mx-auto text-lg transition-colors">
          Teoriden pratiğe, prototipten canlıya kadar tüm süreçleri yöneten, clean code mimarisiyle ölçeklenebilir sistemler inşa eden çekirdek kadromuz.
        </p>
      </section>

      <section className="pb-24 container mx-auto px-6 max-w-5xl">
        <div className="flex flex-wrap justify-center gap-8">
          {teamMembers.map((member) => (
            <div key={member.id} className="w-full md:w-[350px] bg-white dark:bg-slate-900 rounded-[2rem] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-slate-800 group">
              
              <div className={`w-full h-32 bg-gradient-to-r ${member.bgGradient} relative overflow-hidden flex items-center justify-center transition-colors`}>
                <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(#fff 2px, transparent 2px)', backgroundSize: '20px 20px' }}></div>
                <h2 className="text-white/20 font-black text-5xl absolute -bottom-2 tracking-widest uppercase">{member.name.split(' ')[0]}</h2>
              </div>

              <div className="px-8 pb-8 relative">
                <div className="w-20 h-20 -mt-10 mb-5 rounded-2xl border-4 border-white dark:border-slate-900 shadow-md overflow-hidden bg-white dark:bg-slate-800 transition-colors">
                  <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
                </div>
                
                <h3 className="text-2xl font-bold text-brandDark dark:text-white mb-1 transition-colors">{member.name}</h3>
                <p className="text-gray-500 dark:text-slate-400 text-sm font-medium mb-6 pb-6 border-b border-gray-100 dark:border-slate-800 transition-colors">
                  {member.role}
                </p>

                <div className="space-y-3 mb-8">
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-gray-400 dark:text-slate-500 transition-colors">Odak:</span>
                    <span className="font-semibold text-gray-700 dark:text-slate-300 transition-colors">{member.focus}</span>
                  </div>
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-gray-400 dark:text-slate-500 transition-colors">Öne Çıkan:</span>
                    <span className="font-semibold text-brandOrange">{member.highlightProject}</span>
                  </div>
                </div>
                
                <div className="flex items-center justify-end pt-2">
                  <Link 
                    href={`/team/${member.slug}`} 
                    className="text-brandOrange text-sm font-semibold flex items-center hover:text-orange-600 dark:hover:text-brandOrange transition cursor-pointer group/link"
                  >
                    Profili Gör <span className="ml-1 group-hover/link:translate-x-1 transition-transform duration-300">&rarr;</span>
                  </Link>
                </div>

              </div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}