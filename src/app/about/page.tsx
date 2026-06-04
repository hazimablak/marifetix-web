import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function About() {
  const technologies = [
    "Flutter", "Dart", "Next.js", "React", "TypeScript", "Tailwind CSS", 
    "Java", "C#", "SQL", "Python", "OpenAI & LLM", "Figma", "HTML/CSS", "JavaScript", "React Native"
  ];

  const journey = [
    { date: "Eylül 2023", title: "Mühendislik Serüveni Başladı", desc: "Siirt Üniversitesi Bilgisayar Mühendisliği bölümünde akademik temeller atıldı." },
    { date: "Temmuz 2024", title: "İlk Kurumsal Sistemler", desc: "Bilsoft Yazılım'da SMS ve Mail otomasyonu üzerine kurumsal sistemler geliştirildi." },
    { date: "Bahar 2025", title: "Ödüller ve Akademik Destek", desc: "Teknofest Robotaksi Mansiyon ödülü ve TÜBİTAK 2209-A yapay zeka proje desteği kazanıldı." },
    { date: "Mart 2026", title: "Marifetix Soft Kuruldu", desc: "Edinilen tüm mühendislik tecrübeleri, uçtan uca dijital çözümler sunmak için Marifetix çatısı altında birleşti." }
  ];

  return (
    <main className="min-h-screen bg-brandLight dark:bg-slate-950 transition-colors duration-300">
      <Navbar />
      
      {/* Üst Başlık & Hero Banner */}
      <section className="pt-24 pb-12 text-center container mx-auto px-6">
        <div className="flex items-center justify-center space-x-2 text-brandOrange font-bold text-sm tracking-wider uppercase mb-4">
          <span className="w-6 h-[2px] bg-brandOrange"></span>
          <span>HAKKIMIZDA</span>
          <span className="w-6 h-[2px] bg-brandOrange"></span>
        </div>
        <h1 className="text-4xl md:text-5xl font-extrabold text-brandDark dark:text-white mb-8 transition-colors">
          Hakkımızda
        </h1>
        <p className="text-gray-500 dark:text-slate-400 mb-12 transition-colors">Marifetix Soft'un hikayesi ve vizyonu</p>

        {/* 🔥 Gündüz Turuncu, Gece Koyu Lacivert (slate-800/900) */}
        <div className="max-w-6xl mx-auto bg-gradient-to-br from-[#ff6b35] to-[#ff9b71] dark:from-slate-800 dark:to-slate-900 rounded-[2rem] h-64 md:h-80 flex flex-col items-center justify-center shadow-lg relative overflow-hidden transition-colors duration-300">
          <div className="absolute inset-0 z-0 opacity-10 dark:opacity-5" style={{ backgroundImage: 'radial-gradient(#fff 2px, transparent 2px)', backgroundSize: '30px 30px' }}></div>
          <h2 className="text-5xl md:text-7xl font-extrabold text-white tracking-wider z-10 drop-shadow-md">
            MARIFETIX<span className="text-brandDark dark:text-brandOrange transition-colors">SOFT</span>
          </h2>
          <p className="text-white/80 dark:text-slate-300 mt-4 font-medium tracking-widest z-10 transition-colors">SCALING DIGITAL PEAKS.</p>
        </div>
      </section>

      {/* Hikayemiz ve İstatistikler */}
      <section className="py-16 container mx-auto px-6 max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
          <div>
            <h2 className="text-3xl font-bold text-brandDark dark:text-white mb-6 transition-colors">Hikayemiz</h2>
            <p className="text-gray-600 dark:text-slate-400 leading-relaxed mb-4 transition-colors">
              Marifetix Soft, karmaşık problemleri basit, temiz (Clean Architecture) ve etkili kod yapılarına dönüştürme tutkusuyla doğdu. Sadece öğrenmekle yetinmeyen, dijital dünyada kalıcı izler bırakan ürünler üretmek amacıyla bir araya gelen tutkulu bir ekibin ürünüdür.
            </p>
            <p className="text-gray-600 dark:text-slate-400 leading-relaxed transition-colors">
              Çapraz platform mobil uygulamalardan yapay zeka entegrasyonlarına, otonom sistemlerden yüksek performanslı web platformlarına kadar uzanan geniş bir hizmet yelpazesi sunuyor; kodun sanatla buluştuğu noktada kaliteli çözümler üretiyoruz.
            </p>
          </div>
          
          <div className="space-y-6">
            <div className="bg-white dark:bg-slate-900 p-8 rounded-3xl border border-gray-100 dark:border-slate-800 shadow-sm flex items-center space-x-6 transition-colors">
              <div className="text-5xl font-extrabold text-brandOrange">25+</div>
              <div>
                <h4 className="font-bold text-brandDark dark:text-white text-lg transition-colors">Gerçek Proje</h4>
                <p className="text-gray-500 dark:text-slate-400 text-sm transition-colors">Mobil, Web ve Yapay Zeka entegrasyonları.</p>
              </div>
            </div>
            <div className="bg-white dark:bg-slate-900 p-8 rounded-3xl border border-gray-100 dark:border-slate-800 shadow-sm flex items-center space-x-6 transition-colors">
              <div className="text-5xl font-extrabold text-brandOrange">2</div>
              <div>
                <h4 className="font-bold text-brandDark dark:text-white text-lg transition-colors">Başarılı Geliştirici</h4>
                <p className="text-gray-500 dark:text-slate-400 text-sm transition-colors">Birbiriyle kusursuz uyum sağlayan çekirdek ekip.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Misyon, Vizyon, Yaklaşım */}
      <section className="py-16 container mx-auto px-6 max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white dark:bg-slate-900 p-8 rounded-3xl border border-gray-100 dark:border-slate-800 shadow-sm hover:shadow-md transition-all duration-300">
            <div className="w-12 h-12 bg-orange-50 dark:bg-slate-800 text-brandOrange flex items-center justify-center rounded-xl text-2xl mb-6 transition-colors">🎯</div>
            <h3 className="text-xl font-bold text-brandDark dark:text-white mb-3 transition-colors">Misyonumuz</h3>
            <p className="text-gray-500 dark:text-slate-400 text-sm leading-relaxed transition-colors">Öğrenmekle yetinmeyen, üreten geliştiriciler olmak. Gerçek problemler için gerçek ürünler geliştiren sistemler oluşturmak.</p>
          </div>
          <div className="bg-white dark:bg-slate-900 p-8 rounded-3xl border border-gray-100 dark:border-slate-800 shadow-sm hover:shadow-md transition-all duration-300">
            <div className="w-12 h-12 bg-orange-50 dark:bg-slate-800 text-brandOrange flex items-center justify-center rounded-xl text-2xl mb-6 transition-colors">👁️</div>
            <h3 className="text-xl font-bold text-brandDark dark:text-white mb-3 transition-colors">Vizyonumuz</h3>
            <p className="text-gray-500 dark:text-slate-400 text-sm leading-relaxed transition-colors">Mobil uygulama, yapay zeka ve web tabanlı yazılım denince akla gelen, üretim odaklı en güçlü teknoloji stüdyolarından biri olmak.</p>
          </div>
          <div className="bg-white dark:bg-slate-900 p-8 rounded-3xl border border-gray-100 dark:border-slate-800 shadow-sm hover:shadow-md transition-all duration-300">
            <div className="w-12 h-12 bg-orange-50 dark:bg-slate-800 text-brandOrange flex items-center justify-center rounded-xl text-2xl mb-6 transition-colors">📐</div>
            <h3 className="text-xl font-bold text-brandDark dark:text-white mb-3 transition-colors">Yaklaşımımız</h3>
            <p className="text-gray-500 dark:text-slate-400 text-sm leading-relaxed transition-colors">Teoriden pratiğe, prototipten yayına. Clean Code mimarisinden asla taviz vermeden ölçeklenebilir çözümler sunmak.</p>
          </div>
        </div>
      </section>

      {/* Yolculuğumuz (Timeline) - 🔥 HATA DÜZELTİLDİ 🔥 */}
      <section className="py-24 container mx-auto px-6 max-w-4xl text-center overflow-hidden">
        <h2 className="text-3xl font-bold text-brandDark dark:text-white mb-16 transition-colors">Yolculuğumuz</h2>
        {/* Ortadaki çizgi */}
        <div className="relative border-l-2 border-brandOrange/30 dark:border-slate-700 ml-4 md:mx-auto md:w-0 flex flex-col space-y-12 pb-8 text-left transition-colors">
          {journey.map((item, index) => (
            <div key={index} className={`relative pl-8 md:w-[350px] lg:w-[400px] ${index % 2 === 0 ? 'md:ml-auto md:pl-10' : 'md:mr-auto md:pr-10 md:text-right md:-translate-x-full md:pl-0'}`}>
              {/* Yuvarlak Nokta (Taşma düzeltildi, tam çizgiye oturtuldu) */}
              <div className={`absolute w-4 h-4 bg-brandOrange rounded-full border-4 border-white dark:border-slate-950 shadow-sm transition-colors ${index % 2 === 0 ? '-left-[9px] md:-left-[9px]' : '-left-[9px] md:left-auto md:-right-[9px]'}`}></div>
              
              <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-gray-100 dark:border-slate-800 shadow-sm transition-colors">
                <span className="text-brandOrange font-semibold text-sm block mb-1">{item.date}</span>
                <h4 className="font-bold text-brandDark dark:text-white text-lg mb-2 transition-colors">{item.title}</h4>
                <p className="text-gray-500 dark:text-slate-400 text-sm transition-colors">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Teknolojiler (Hap Tasarımlar) */}
      <section className="py-16 pb-32 container mx-auto px-6 max-w-6xl text-center">
        <h2 className="text-2xl font-bold text-brandDark dark:text-white mb-10 transition-colors">Kullandığımız Teknolojiler</h2>
        <div className="flex flex-wrap justify-center gap-4">
          {technologies.map((tech, index) => (
            <div key={index} className="bg-white dark:bg-slate-900 px-6 py-3 rounded-full border border-gray-200 dark:border-slate-800 shadow-sm text-gray-700 dark:text-slate-300 font-medium text-sm flex items-center hover:border-brandOrange dark:hover:border-brandOrange hover:text-brandOrange dark:hover:text-brandOrange transition-all cursor-pointer">
              {tech}
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}