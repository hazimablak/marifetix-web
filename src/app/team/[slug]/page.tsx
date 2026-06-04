"use client";

import React, { useState } from 'react';
import { useParams, notFound } from 'next/navigation';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function TeamMemberProfile() {
  const params = useParams();
  const slug = params.slug as string;

  // 1. Ekip Üyelerinin Verileri
  const dataPool: Record<string, any> = {
    "hazim-ablak": {
      name: "Hazım Ablak",
      role: "App & Web Developer",
      title: "Geliştirici",
      email: "ablakhazim1071@gmail.com",
      image: "/hazim.png", 
      coverBgGradient: "from-[#0a0a0a] via-[#111111] to-[#000000]",
      social: {
        github: "https://github.com/hazimablak",
        linkedin: "https://www.linkedin.com/in/hazimablak/?skipRedirect=true",
        instagram: "https://instagram.com/hazim.ablak",
        whatsapp: "https://wa.me/905303611650"
      }
    },
    "melih": {
      name: "Melih",
      role: "App & System Developer",
      title: "Geliştirici",
      email: "iletisim@marifetix.com",
      image: "https://ui-avatars.com/api/?name=Melih&background=ff6b35&color=fff&size=256",
      coverBgGradient: "from-[#ff6b35] to-[#ff9b71]",
      social: {
        github: "https://github.com/hazimablak",
        linkedin: "#",
        instagram: "#",
        whatsapp: "#"
      }
    }
  };

  const member = dataPool[slug];

  if (!member) {
    notFound();
  }

  // 2. Tüm Projeler Havuzu
  const allProjects = [
    { id: 1, title: "Focus Hero", developer: "Hazım Ablak", category: "Mobil Uygulama", desc: "Oyunlaştırma odaklı verimlilik ve odaklanma uygulaması.", icon: "🎯", link: "https://play.google.com/store/apps/details?id=com.developer.focus_hero" },
    { id: 2, title: "Huda: Prayer & AI", developer: "Hazım Ablak", category: "Mobil Uygulama", desc: "Namaz vakitleri ve AI destekli dini yaşam asistanı.", icon: "🕌", link: "https://play.google.com/store/apps/details?id=com.hafizstudios.huda" },
    { id: 3, title: "Utilify Ultimate Toolkit", developer: "Hazım Ablak & Melih", category: "Mobil Uygulama", desc: "PDF, OCR ve görsel editörü barındıran modüler araç kutusu.", icon: "🛠️", link: "https://github.com/hazimablak/Utilify---The-Ultimate-Multipurpose-Toolkit" },
    { id: 4, title: "UniLife Pocket", developer: "Hazım Ablak", category: "Mobil Uygulama", desc: "Üniversite öğrencileri için dijital yaşam asistanı.", icon: "🎓", link: "https://github.com/hazimablak/UNILIFE---University-Students-Pocket-Assistant" },
    { id: 5, title: "Hayat Pusulası", developer: "Hazım Ablak & Melih", category: "Mobil Uygulama", desc: "Rutin ve hedef takip rehberi.", icon: "🧭", link: "https://github.com/hazimablak/Hayat-Pusulasi--Mobile-App" },
    { id: 6, title: "Mega Game Hub", developer: "Hazım Ablak", category: "Mobil Uygulama", desc: "Hypercasual oyun merkezi.", icon: "🎮", link: "https://github.com/hazimablak/Mega-Game-Hub----The-New-Hub-for-Hypercasual-Games" },
    { id: 7, title: "Kampanya Avcısı", developer: "Hazım Ablak", category: "Web", desc: "Yerel konum tabanlı fırsat platformu.", icon: "🏷️", link: "https://github.com/hazimablak/Kampanya-Avcisi----Local-Opportunity-Platform-" },
    { id: 8, title: "Portfolyo Platformu", developer: "Hazım Ablak", category: "Web", desc: "Özgün portfolyo platformu.", icon: "💼", link: "https://hazimablak.github.io/" },
    { id: 9, title: "Türkiye Gezi Rehberi", developer: "Hazım Ablak", category: "Web", desc: "Modern gezi rehberi web sitesi.", icon: "🗺️", link: "https://hazimablak.github.io/Turkey-Travel-Guide/" },
    { id: 10, title: "Bayırbucak Platformu", developer: "Hazım Ablak & Melih", category: "Web", desc: "Kültürel miras dijital platformu.", icon: "🏛️", link: "https://hazimablak.github.io/Bayirbucak-Cultural-Heritage-Platform/" },
    { id: 11, title: "Windows Spinner", developer: "Hazım Ablak", category: "Araçlar & Animasyon", desc: "Organik yükleme animasyonu algoritması.", icon: "⏳", link: "https://github.com/hazimablak/windows-loading-spinner" }
  ];

  const memberProjects = allProjects.filter(p => p.developer.includes(member.name));
  const uniqueCategories = Array.from(new Set(memberProjects.map(p => p.category)));
  const filterTabs = ['Tümü', ...uniqueCategories];

  const [activeFilter, setActiveFilter] = useState('Tümü');

  const displayedProjects = activeFilter === 'Tümü' 
    ? memberProjects 
    : memberProjects.filter(p => p.category === activeFilter);

  return (
    <main className="min-h-screen bg-[#fafafa]">
      <Navbar />

      {/* Üst Geniş Banner */}
      <section className={`w-full pt-32 pb-36 bg-gradient-to-r ${member.coverBgGradient} relative overflow-hidden`}>
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#ffffff 2px, transparent 2px)', backgroundSize: '30px 30px' }}></div>
        
        <div className="container mx-auto px-6 max-w-6xl relative z-10 flex flex-col md:flex-row items-center md:items-start gap-8">
          <div className="text-center md:text-left text-white mt-4 lg:ml-64">
            <h1 className="text-5xl md:text-7xl font-extrabold mb-4">{member.name}</h1>
            <span className="bg-[#2563eb] text-white px-4 py-1.5 rounded-md font-bold text-lg inline-block mb-3">
              {member.role}
            </span>
            <p className="text-gray-300 font-medium tracking-wide">{member.email}</p>
          </div>
        </div>
      </section>

      {/* Alt İçerik: Profil Kartı ve Projeler */}
      <section className="container mx-auto px-6 max-w-6xl relative z-20 pb-24 -mt-24">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Sol Kolon: Profil Resmi ve Bilgi Kartı */}
          <div className="lg:col-span-4 flex flex-col items-center md:items-start">
            
            {/* Profil Resmi */}
            <div className="w-48 h-48 rounded-[2.5rem] border-8 border-[#fafafa] bg-white shadow-xl overflow-hidden mb-6 relative z-30 flex items-center justify-center text-gray-400">
              <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
            </div>

            <div className="w-full text-center md:text-left mb-6 px-2">
              <h2 className="text-2xl font-bold text-gray-900">{member.name}</h2>
              <p className="text-brandOrange font-semibold text-sm">{member.title}</p>
            </div>

            <Link href="/team" className="text-gray-500 hover:text-brandDark font-medium text-sm flex items-center gap-2 mb-6 px-2 transition">
              <span>&larr;</span> Geliştirici Ekibimiz
            </Link>

            {/* Sosyal Medya ve Bilgi Kartı (Linklerin olduğu kutu) */}
            <div className="w-full bg-white rounded-3xl p-6 border border-gray-100 shadow-sm">
              <h3 className="text-sm font-semibold text-gray-400 mb-4 pb-3 border-b border-gray-50">Web ve Mobil Uygulama Geliştirici</h3>
              
              <ul className="space-y-4">
                {member.social.github && member.social.github !== "#" && (
                  <li>
                    <a href={member.social.github} target="_blank" rel="noopener noreferrer" className="flex items-center text-gray-600 hover:text-brandDark transition gap-3 font-medium text-sm">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.09.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.379.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.577.688.48C19.138 20.161 22 16.418 22 12c0-5.523-4.477-10-10-10z"/></svg>
                      GitHub
                    </a>
                  </li>
                )}
                {member.social.linkedin && member.social.linkedin !== "#" && (
                  <li>
                    <a href={member.social.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center text-gray-600 hover:text-[#0077b5] transition gap-3 font-medium text-sm">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                      LinkedIn
                    </a>
                  </li>
                )}
                {member.social.instagram && member.social.instagram !== "#" && (
                  <li>
                    <a href={member.social.instagram} target="_blank" rel="noopener noreferrer" className="flex items-center text-gray-600 hover:text-[#e1306c] transition gap-3 font-medium text-sm">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                      Instagram
                    </a>
                  </li>
                )}
              </ul>
            </div>
          </div>

          {/* 🔥 Sağ Kolon: Geliştirdiği Uygulamalar */}
          {/* lg:mt-[265px] verilerek sağ taraf tam olarak sol taraftaki link kutusunun başladığı yere indirildi */}
          <div className="lg:col-span-8 mt-6 lg:mt-[265px]">
            
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
              <h2 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
                Uygulamalar <span className="text-gray-400 text-sm font-medium">({memberProjects.length}/{allProjects.length})</span>
              </h2>

              {/* Dinamik Filtre Butonları */}
              <div className="flex flex-wrap gap-2">
                {filterTabs.map((filter) => (
                  <button 
                    key={filter}
                    onClick={() => setActiveFilter(filter)}
                    className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all duration-300 shadow-sm cursor-pointer ${
                      activeFilter === filter 
                        ? 'bg-brandOrange text-white border-brandOrange' 
                        : 'bg-white text-gray-600 border border-gray-200 hover:border-brandOrange hover:text-brandOrange'
                    }`}
                  >
                    {filter}
                  </button>
                ))}
              </div>
            </div>

            {/* Projeler Listesi */}
            <div className="space-y-6">
              {displayedProjects.map((project) => (
                <div key={project.id} className="bg-white rounded-3xl p-6 md:p-8 border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col sm:flex-row items-start sm:items-center gap-6">
                  
                  <div className="w-20 h-20 bg-gray-50 rounded-2xl flex-shrink-0 flex items-center justify-center text-4xl border border-gray-100">
                    {project.icon}
                  </div>

                  <div className="flex-grow">
                    <h3 className="text-xl font-bold text-gray-900 mb-1">{project.title}</h3>
                    <p className="text-gray-500 text-sm mb-4 leading-relaxed">{project.desc}</p>
                    
                    <a 
                      href={project.link} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="inline-flex items-center justify-center px-5 py-2.5 bg-gray-50 text-gray-700 text-sm font-bold rounded-xl hover:bg-gray-100 hover:text-brandDark transition group"
                    >
                      {project.link.includes("github.com") ? "Kodları İncele" : "Projeyi İncele"}
                      <span className="ml-2 group-hover:translate-x-1 transition-transform">&rarr;</span>
                    </a>
                  </div>

                </div>
              ))}
              
              {displayedProjects.length === 0 && (
                <div className="text-center py-10 bg-white rounded-3xl border border-gray-100">
                  <p className="text-gray-500">Bu kategoride proje bulunmamaktadır.</p>
                </div>
              )}
            </div>

          </div>

        </div>
      </section>

      <Footer />
    </main>
  );
}