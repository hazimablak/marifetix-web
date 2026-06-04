"use client";

import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function PortfolioPage() {
  const [activeFilter, setActiveFilter] = useState('Tümü');
  const [searchQuery, setSearchQuery] = useState('');

  const projects = [
    {
      id: 1,
      title: "Focus Hero",
      developer: "Hazım Ablak",
      category: "Mobil Uygulama",
      description: "Oyunlaştırma (Gamification) odaklı verimlilik ve odaklanma mobil uygulamamız. Kullanıcıların zaman yönetimini eğlenceli hale getiriyoruz.",
      icon: "🎯",
      tags: ["Flutter", "Dart", "Play Store"],
      link: "https://play.google.com/store/apps/details?id=com.developer.focus_hero",
      status: "Yayında"
    },
    {
      id: 2,
      title: "Huda: Prayer & AI",
      developer: "Hazım Ablak",
      category: "Mobil Uygulama",
      description: "Namaz vakitleri, Kur'an-ı Kerim ve entegre Yapay Zeka (LLM) destekli kapsamlı dijital dini yaşam asistanı uygulamamız.",
      icon: "🕌",
      tags: ["Flutter", "API Entegrasyonu", "AI"],
      link: "https://play.google.com/store/apps/details?id=com.hafizstudios.huda",
      status: "Yayında"
    },
    {
      id: 3,
      title: "Utilify Ultimate Toolkit",
      developer: "Hazım Ablak",
      category: "Mobil Uygulama",
      description: "İçinde Görsel Editörü, PDF Stüdyosu, Ses Çevirisi ve Akıllı OCR Tarayıcı barındıran devasa ve modüler araç kutusu projemiz.",
      icon: "🛠️",
      tags: ["Flutter", "Google ML Kit", "Clean Arch"],
      link: "https://github.com/hazimablak/Utilify---The-Ultimate-Multipurpose-Toolkit",
      status: "Açık Kaynak"
    },
    {
      id: 4,
      title: "UniLife Pocket Assistant",
      developer: "Hazım Ablak",
      category: "Mobil Uygulama",
      description: "Üniversite öğrencileri için kampüs hayatını kolaylaştıran, pratik çözümler sunan dijital yaşam asistanı mobil uygulamamız.",
      icon: "🎓",
      tags: ["Flutter", "Mobile Dev", "UI/UX"],
      link: "https://github.com/hazimablak/UNILIFE---University-Students-Pocket-Assistant",
      status: "Açık Kaynak"
    },
    {
      id: 5,
      title: "Hayat Pusulası",
      developer: "Hazım Ablak",
      category: "Mobil Uygulama",
      description: "Kullanıcıların günlük yaşam rutinlerini, hedeflerini ve kişisel gelişim süreçlerini planlı takip etmelerini sağlayan mobil rehber uygulamamız.",
      icon: "🧭",
      tags: ["Flutter", "Mobile Dev", "GitHub"],
      link: "https://github.com/hazimablak/Hayat-Pusulasi--Mobile-App",
      status: "Açık Kaynak"
    },
    {
      id: 6,
      title: "Mega Game Hub",
      developer: "Hazım Ablak",
      category: "Mobil Uygulama",
      description: "Hypercasual oyun severler için tasarladığımız, eğlenceli ve dinamik mobil oyunları bir araya getiren yeni nesil oyun merkezi projemiz.",
      icon: "🎮",
      tags: ["Mobile Game", "UI/UX", "GitHub"],
      link: "https://github.com/hazimablak/Mega-Game-Hub----The-New-Hub-for-Hypercasual-Games",
      status: "Açık Kaynak"
    },
    {
      id: 7,
      title: "Kampanya Avcısı Platformu",
      developer: "Hazım Ablak",
      category: "Web",
      description: "Yerel fırsatları, indirimleri ve anlık kampanyaları kullanıcılarla buluşturan dinamik yerel konum tabanlı fırsat platformu yazılımımız.",
      icon: "🏷️",
      tags: ["Web Platform", "Local UI", "GitHub"],
      link: "https://github.com/hazimablak/Kampanya-Avcisi----Local-Opportunity-Platform-",
      status: "Açık Kaynak"
    },
    {
      id: 8,
      title: "Kişisel Portfolyo Platformu",
      developer: "Hazım Ablak",
      category: "Web",
      description: "Modern tasarım trendlerini yansıtan, yeteneklerimizi ve projelerimizi jilet gibi sergileyen özgün portfolyo platformumuz.",
      icon: "💼",
      tags: ["HTML", "CSS", "GitHub Pages"],
      link: "https://hazimablak.github.io/",
      status: "Canlıda"
    },
    {
      id: 9,
      title: "Türkiye Gezi Rehberi",
      developer: "Hazım Ablak",
      category: "Web",
      description: "Türkiye'nin tarihi ve turistik zenginliklerini kullanıcı dostu bir arayüzle keşfetmeyi sağlayan modern gezi rehberi web sitemiz.",
      icon: "🗺️",
      tags: ["HTML", "CSS", "JavaScript"],
      link: "https://hazimablak.github.io/Turkey-Travel-Guide/",
      status: "Canlıda"
    },
    {
      id: 10,
      title: "Bayırbucak Kültürel Miras",
      developer: "Hazım Ablak",
      category: "Web",
      description: "Kültürel mirası ve tarihi değerleri dijital dünyada yaşatmak, korumak ve geniş kitlelere ulaştırmak amacıyla inşa ettiğimiz web platformumuz.",
      icon: "🏛️",
      tags: ["Web Design", "Culture", "Canlı"],
      link: "https://hazimablak.github.io/Bayirbucak-Cultural-Heritage-Platform/",
      status: "Canlıda"
    },
    {
      id: 11,
      title: "Windows Yükleme Animasyonu",
      developer: "Hazım Ablak",
      category: "Araçlar & Animasyon",
      description: "Organik 'kümeleşme ve dağılma' hissi veren easeInOutCubic algoritmalı, pürüzsüz takip kuyruklu asenkron faz gecikmeli animasyon projemiz.",
      icon: "⏳",
      tags: ["UI Animation", "Easing Function", "Algorithms"],
      link: "https://github.com/hazimablak/windows-loading-spinner",
      status: "Açık Kaynak"
    }
  ];

  const filters = ['Tümü', 'Mobil Uygulama', 'Web', 'Araçlar & Animasyon', 'Video Edit', 'Oyun', 'Diğer'];

  const filteredProjects = projects.filter(project => {
    const matchesCategory = activeFilter === 'Tümü' || project.category === activeFilter;
    const matchesSearch = project.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          project.developer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <main className="min-h-screen bg-brandLight dark:bg-slate-950 transition-colors duration-300">
      <Navbar />
      
      <section className="pt-24 pb-8 text-center container mx-auto px-6">
        <div className="flex items-center justify-center space-x-2 text-brandOrange font-bold text-sm tracking-wider uppercase mb-4">
          <span className="w-6 h-[2px] bg-brandOrange"></span>
          <span>PORTFOLYOMUZ</span>
          <span className="w-6 h-[2px] bg-brandOrange"></span>
        </div>
        <h1 className="text-4xl md:text-5xl font-extrabold text-brandDark dark:text-white mb-6 transition-colors">
          Geliştirdiğimiz Projeler
        </h1>
        <p className="text-gray-500 dark:text-slate-400 max-w-2xl mx-auto text-lg transition-colors">
          Fikirden ürüne dönüştürdüğümüz, gerçek sorunları çözen ve kullanıcılara dokunan en dikkat çekici dijital işlerimizden bazıları.
        </p>
      </section>

      <section className="pb-24 container mx-auto px-6 max-w-6xl">
        
        {/* Arama Çubuğu */}
        <div className="w-full max-w-xl mx-auto mb-10 relative">
          <svg className="w-5 h-5 text-gray-400 dark:text-slate-500 absolute left-4 top-3.5 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
          </svg>
          <input 
            type="text" 
            placeholder="Proje veya geliştirici ara..." 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-12 pr-4 py-3 rounded-2xl border border-gray-200 dark:border-slate-700 bg-white dark:bg-slate-900 shadow-sm focus:outline-none focus:ring-2 focus:ring-brandOrange/50 transition-colors text-gray-700 dark:text-slate-200"
          />
        </div>

        {/* Filtre Butonları */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {filters.map((filter) => (
            <button 
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 shadow-sm cursor-pointer ${
                activeFilter === filter 
                  ? 'bg-brandOrange text-white border-brandOrange' 
                  : 'bg-white dark:bg-slate-900 text-gray-600 dark:text-slate-300 border border-gray-200 dark:border-slate-700 hover:border-brandOrange dark:hover:border-brandOrange hover:text-brandOrange dark:hover:text-brandOrange'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        <div className="text-center text-gray-400 dark:text-slate-500 text-sm font-medium mb-8 transition-colors">
          {filteredProjects.length} uygulama bulundu
        </div>

        {/* Proje Grid Yapısı */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div key={project.id} className="bg-white dark:bg-slate-900 rounded-3xl p-6 border border-gray-100 dark:border-slate-800 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group">
              
              <div className="w-full h-48 bg-gray-50 dark:bg-slate-800 rounded-2xl mb-6 flex flex-col items-center justify-center relative overflow-hidden group-hover:bg-orange-50 dark:group-hover:bg-slate-700 transition-colors duration-300 border border-gray-100/50 dark:border-slate-700/50">
                <span className="absolute top-4 right-4 px-3 py-1 bg-white dark:bg-slate-900 text-xs font-bold rounded-full text-brandDark dark:text-slate-200 shadow-sm border border-gray-100 dark:border-slate-700 flex items-center gap-1 transition-colors">
                  {project.status === "Yayında" && <span className="w-2 h-2 rounded-full bg-green-500"></span>}
                  {project.status === "Canlıda" && <span className="w-2 h-2 rounded-full bg-green-500"></span>}
                  {project.status === "Açık Kaynak" && <span className="w-2 h-2 rounded-full bg-brandOrange"></span>}
                  {project.status}
                </span>
                <div className="text-7xl transform group-hover:scale-110 transition-transform duration-300 drop-shadow-md">
                  {project.icon}
                </div>
              </div>

              <div className="flex-grow">
                <div className="flex justify-between items-start mb-2">
                  <span className="text-brandOrange text-xs font-bold uppercase tracking-wider block">
                    {project.category}
                  </span>
                </div>
                
                <h3 className="text-xl font-bold text-brandDark dark:text-white mb-1 transition-colors">{project.title}</h3>
                
                <div className="flex items-center text-gray-500 dark:text-slate-400 text-sm mb-4 font-medium transition-colors">
                  <svg className="w-4 h-4 mr-1.5 text-gray-400 dark:text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg>
                  {project.developer}
                </div>

                <p className="text-gray-500 dark:text-slate-400 text-sm leading-relaxed mb-6 transition-colors">
                  {project.description}
                </p>
              </div>

              <div className="border-t border-gray-100 dark:border-slate-800 pt-4 mt-auto transition-colors">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, index) => (
                    <span key={index} className="px-2.5 py-1 bg-gray-50 dark:bg-slate-800 border border-gray-100 dark:border-slate-700 text-gray-500 dark:text-slate-300 text-xs font-medium rounded-lg transition-colors">
                      {tag}
                    </span>
                  ))}
                </div>
                
                <a 
                  href={project.link} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-brandOrange font-semibold text-sm flex items-center hover:text-orange-600 dark:hover:text-brandOrange transition group/link"
                >
                  {project.link.includes("github.com") ? "Kodları İncele" : "Projeyi İncele"}
                  <span className="ml-1 group-hover/link:translate-x-1 transition-transform duration-300">&rarr;</span>
                </a>
              </div>
            </div>
          ))}

          {filteredProjects.length === 0 && (
            <div className="col-span-full py-12 text-center">
              <div className="text-5xl mb-4">🔍</div>
              <h3 className="text-xl font-bold text-brandDark dark:text-white mb-2 transition-colors">Proje Bulunamadı</h3>
              <p className="text-gray-500 dark:text-slate-400 transition-colors">Aradığınız kriterlere uygun bir proje veya geliştirici eşleşmedi.</p>
            </div>
          )}
        </div>

        {/* Kurumsal Alt Kutu */}
        <div className="mt-20 text-center bg-brandDark dark:bg-slate-900 border dark:border-slate-800 rounded-3xl p-10 md:p-16 relative overflow-hidden transition-colors duration-300">
          <div className="absolute inset-0 z-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>
          <div className="relative z-10">
            <h2 className="text-3xl font-bold text-white mb-4">Tüm Geliştirme Süreçlerimizi İncelemek İster Mısınız?</h2>
            <p className="text-gray-400 mb-8 max-w-xl mx-auto">
              Açık kaynak projelerimiz, kodlama standartlarımız ve diğer tüm depo yapılarımız için doğrudan GitHub organizasyon profilimizi ziyaret edebilirsiniz.
            </p>
            <a href="https://github.com/hazimablak" target="_blank" rel="noopener noreferrer" className="px-8 py-3 bg-white text-brandDark dark:text-slate-900 font-bold rounded-xl hover:bg-gray-100 transition duration-300 inline-flex items-center gap-2">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.09.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.379.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.577.688.48C19.138 20.161 22 16.418 22 12c0-5.523-4.477-10-10-10z"/></svg>
              GitHub Profilimizi Görüntüle
            </a>
          </div>
        </div>

      </section>

      <Footer />
    </main>
  );
}