"use client";

import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';

export default function PortfolioPage() {
  const [activeFilter, setActiveFilter] = useState('Tümü');

  const projects = [
    {
      id: 1,
      title: "Focus Hero",
      category: "Mobil Uygulama",
      description: "Oyunlaştırma (Gamification) odaklı verimlilik ve odaklanma mobil uygulaması. Kullanıcıların zaman yönetimini eğlenceli hale getiriyor.",
      icon: "🎯",
      tags: ["Flutter", "Dart", "Play Store"],
      link: "https://play.google.com/store/apps/details?id=com.developer.focus_hero",
      status: "Yayında"
    },
    {
      id: 2,
      title: "Huda: Prayer & AI",
      category: "Yapay Zeka",
      description: "Namaz vakitleri, Kur'an-ı Kerim ve entegre Yapay Zeka (LLM) destekli kapsamlı dijital dini yaşam asistanı.",
      icon: "🕌",
      tags: ["Flutter", "API Entegrasyonu", "AI"],
      link: "https://play.google.com/store/apps/details?id=com.hafizstudios.huda",
      status: "Yayında"
    },
    {
      id: 3,
      title: "Utilify Ultimate",
      category: "Mobil Uygulama",
      description: "İçinde Görsel Editörü, PDF Stüdyosu, Ses Çevirisi ve Akıllı OCR Tarayıcı barındıran devasa ve modüler araç kutusu.",
      icon: "🛠️",
      tags: ["Flutter", "Google ML Kit", "Clean Arch"],
      link: "#",
      status: "Geliştirme Aşamasında"
    },
    {
      id: 4,
      title: "Motivai",
      category: "Yapay Zeka",
      description: "Yapay zeka destekli Android tabanlı motivasyon, duygu durumu analizi ve kişisel alışkanlık takip uygulaması.",
      icon: "🤖",
      tags: ["Java", "Android Studio"],
      link: "#",
      status: "Tamamlandı"
    },
    {
      id: 5,
      title: "Otonom Araç Kontrolü",
      category: "Sistem & Otomasyon",
      description: "Teknofest Robotaksi yarışması için geliştirilen, Mansiyon ödüllü otonom sürüş ve görüntü işleme algoritmaları.",
      icon: "🚘",
      tags: ["Python", "OpenCV"],
      link: "#",
      status: "Ödüllü Proje"
    },
    {
      id: 6,
      title: "Kurumsal SMS & Mail",
      category: "Sistem & Otomasyon",
      description: "Kurumlar için geliştirilen, MSSQL veritabanı destekli toplu iletişim yönetimi ve loglama otomasyon yazılımı.",
      icon: "📨",
      tags: ["C#", ".NET", "MSSQL"],
      link: "#",
      status: "Tamamlandı"
    }
  ];

  const filters = ['Tümü', 'Mobil Uygulama', 'Yapay Zeka', 'Sistem & Otomasyon'];

  const filteredProjects = activeFilter === 'Tümü' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <main className="min-h-screen bg-brandLight">
      <Navbar />
      
      {/* Üst Başlık Bölümü */}
      <section className="pt-24 pb-12 text-center container mx-auto px-6">
        <div className="flex items-center justify-center space-x-2 text-brandOrange font-bold text-sm tracking-wider uppercase mb-4">
          <span className="w-6 h-[2px] bg-brandOrange"></span>
          <span>PORTFOLYO</span>
          <span className="w-6 h-[2px] bg-brandOrange"></span>
        </div>
        <h1 className="text-4xl md:text-5xl font-extrabold text-brandDark mb-6">
          Geliştirdiğimiz Projeler
        </h1>
        <p className="text-gray-500 max-w-2xl mx-auto text-lg">
          Fikirden ürüne dönüştürdüğümüz, gerçek sorunları çözen ve kullanıcılara dokunan en dikkat çekici dijital işlerimizden bazıları.
        </p>
      </section>

      {/* Projeler ve Filtreleme */}
      <section className="pb-24 container mx-auto px-6 max-w-6xl">
        
        {/* Filtre Butonları */}
        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {filters.map((filter) => (
            <button 
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 shadow-sm ${
                activeFilter === filter 
                  ? 'bg-brandOrange text-white border-brandOrange' 
                  : 'bg-white text-gray-600 border border-gray-200 hover:border-brandOrange hover:text-brandOrange'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Proje Grid Yapısı */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div key={project.id} className="bg-white rounded-3xl p-6 border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group">
              
              {/* İkon ve Statü Alanı */}
              <div className="w-full h-48 bg-gray-50 rounded-2xl mb-6 flex flex-col items-center justify-center relative overflow-hidden group-hover:bg-orange-50 transition-colors duration-300">
                <span className="absolute top-4 right-4 px-3 py-1 bg-white text-xs font-bold rounded-full text-brandDark shadow-sm border border-gray-100">
                  {project.status}
                </span>
                <div className="text-7xl transform group-hover:scale-110 transition-transform duration-300">
                  {project.icon}
                </div>
              </div>

              {/* İçerik */}
              <div className="flex-grow">
                <span className="text-brandOrange text-xs font-bold uppercase tracking-wider mb-2 block">
                  {project.category}
                </span>
                <h3 className="text-xl font-bold text-brandDark mb-3">{project.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-6">
                  {project.description}
                </p>
              </div>

              {/* Etiketler ve Link */}
              <div className="border-t border-gray-100 pt-4 mt-auto">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, index) => (
                    <span key={index} className="px-2.5 py-1 bg-gray-50 border border-gray-100 text-gray-500 text-xs font-medium rounded-lg">
                      {tag}
                    </span>
                  ))}
                </div>
                
                {project.link !== "#" ? (
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-brandOrange font-semibold text-sm flex items-center hover:text-orange-600 transition group/link">
                    Projeyi İncele <span className="ml-1 group-hover/link:translate-x-1 transition-transform">&rarr;</span>
                  </a>
                ) : (
                  <span className="text-gray-400 font-semibold text-sm flex items-center">
                    Detaylar Yakında
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* GitHub Yönlendirme */}
        <div className="mt-20 text-center bg-brandDark rounded-3xl p-10 md:p-16 relative overflow-hidden">
          <div className="absolute inset-0 z-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>
          <div className="relative z-10">
            <h2 className="text-3xl font-bold text-white mb-4">Tüm Kodları İncelemek İster Misiniz?</h2>
            <p className="text-gray-400 mb-8 max-w-xl mx-auto">
              Açık kaynak katkılarımız, mimari yapılarımız ve geliştirme aşamasındaki diğer projelerimiz için GitHub profilimizi ziyaret edebilirsiniz.
            </p>
            <a href="https://github.com/hazimablak" target="_blank" rel="noopener noreferrer" className="px-8 py-3 bg-white text-brandDark font-bold rounded-xl hover:bg-gray-100 transition duration-300 inline-flex items-center gap-2">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.09.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.379.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.577.688.48C19.138 20.161 22 16.418 22 12c0-5.523-4.477-10-10-10z"/></svg>
              GitHub'da Görüntüle
            </a>
          </div>
        </div>

      </section>

      <Footer />
    </main>
  );
}