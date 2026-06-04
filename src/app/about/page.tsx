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
    <main className="min-h-screen bg-brandLight">
      <Navbar />
      
      {/* Üst Başlık & Hero Banner */}
      <section className="pt-24 pb-12 text-center container mx-auto px-6">
        <div className="flex items-center justify-center space-x-2 text-brandOrange font-bold text-sm tracking-wider uppercase mb-4">
          <span className="w-6 h-[2px] bg-brandOrange"></span>
          <span>HAKKIMIZDA</span>
          <span className="w-6 h-[2px] bg-brandOrange"></span>
        </div>
        <h1 className="text-4xl md:text-5xl font-extrabold text-brandDark mb-8">
          Hakkımızda
        </h1>
        <p className="text-gray-500 mb-12">Marifetix Soft'un hikayesi ve vizyonu</p>

        <div className="max-w-6xl mx-auto bg-gradient-to-br from-[#ff6b35] to-[#ff9b71] rounded-[2rem] h-64 md:h-80 flex flex-col items-center justify-center shadow-lg relative overflow-hidden">
          <div className="absolute inset-0 z-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#fff 2px, transparent 2px)', backgroundSize: '30px 30px' }}></div>
          <h2 className="text-5xl md:text-7xl font-extrabold text-white tracking-wider z-10 drop-shadow-md">
            MARIFETIX<span className="text-brandDark">SOFT</span>
          </h2>
          <p className="text-white/80 mt-4 font-medium tracking-widest z-10">SCALING DIGITAL PEAKS.</p>
        </div>
      </section>

      {/* Hikayemiz ve İstatistikler (1. Görsel Yapısı) */}
      <section className="py-16 container mx-auto px-6 max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
          <div>
            <h2 className="text-3xl font-bold text-brandDark mb-6">Hikayemiz</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Marifetix Soft, karmaşık problemleri basit, temiz (Clean Architecture) ve etkili kod yapılarına dönüştürme tutkusuyla doğdu. Sadece öğrenmekle yetinmeyen, dijital dünyada kalıcı izler bırakan ürünler üretmek amacıyla bir araya gelen tutkulu bir ekibin ürünüdür.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Çapraz platform mobil uygulamalardan yapay zeka entegrasyonlarına, otonom sistemlerden yüksek performanslı web platformlarına kadar uzanan geniş bir hizmet yelpazesi sunuyor; kodun sanatla buluştuğu noktada kaliteli çözümler üretiyoruz.
            </p>
          </div>
          
          <div className="space-y-6">
            <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm flex items-center space-x-6">
              <div className="text-5xl font-extrabold text-brandOrange">25+</div>
              <div>
                <h4 className="font-bold text-brandDark text-lg">Gerçek Proje</h4>
                <p className="text-gray-500 text-sm">Mobil, Web ve Yapay Zeka entegrasyonları.</p>
              </div>
            </div>
            <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm flex items-center space-x-6">
              <div className="text-5xl font-extrabold text-brandOrange">2</div>
              <div>
                <h4 className="font-bold text-brandDark text-lg">Başarılı Geliştirici</h4>
                <p className="text-gray-500 text-sm">Birbiriyle kusursuz uyum sağlayan çekirdek ekip.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Misyon, Vizyon, Yaklaşım */}
      <section className="py-16 container mx-auto px-6 max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-md transition">
            <div className="w-12 h-12 bg-orange-50 text-brandOrange flex items-center justify-center rounded-xl text-2xl mb-6">🎯</div>
            <h3 className="text-xl font-bold text-brandDark mb-3">Misyonumuz</h3>
            <p className="text-gray-500 text-sm leading-relaxed">Öğrenmekle yetinmeyen, üreten geliştiriciler olmak. Gerçek problemler için gerçek ürünler geliştiren sistemler oluşturmak.</p>
          </div>
          <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-md transition">
            <div className="w-12 h-12 bg-orange-50 text-brandOrange flex items-center justify-center rounded-xl text-2xl mb-6">👁️</div>
            <h3 className="text-xl font-bold text-brandDark mb-3">Vizyonumuz</h3>
            <p className="text-gray-500 text-sm leading-relaxed">Mobil uygulama, yapay zeka ve web tabanlı yazılım denince akla gelen, üretim odaklı en güçlü teknoloji stüdyolarından biri olmak.</p>
          </div>
          <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-md transition">
            <div className="w-12 h-12 bg-orange-50 text-brandOrange flex items-center justify-center rounded-xl text-2xl mb-6">📐</div>
            <h3 className="text-xl font-bold text-brandDark mb-3">Yaklaşımımız</h3>
            <p className="text-gray-500 text-sm leading-relaxed">Teoriden pratiğe, prototipten yayına. Clean Code mimarisinden asla taviz vermeden ölçeklenebilir çözümler sunmak.</p>
          </div>
        </div>
      </section>

      {/* Yolculuğumuz (Timeline - 2. Görsel) */}
      <section className="py-24 container mx-auto px-6 max-w-4xl text-center">
        <h2 className="text-3xl font-bold text-brandDark mb-16">Yolculuğumuz</h2>
        <div className="relative border-l-2 border-brandOrange/30 ml-4 md:ml-1/2 md:translate-x-1/2 flex flex-col space-y-12 pb-8 text-left">
          {journey.map((item, index) => (
            <div key={index} className="relative pl-8 md:w-[400px] md:-ml-[200px]">
              <div className="absolute w-4 h-4 bg-brandOrange rounded-full -left-[9px] top-1 border-4 border-white shadow-sm"></div>
              <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
                <span className="text-brandOrange font-semibold text-sm block mb-1">{item.date}</span>
                <h4 className="font-bold text-brandDark text-lg mb-2">{item.title}</h4>
                <p className="text-gray-500 text-sm">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Teknolojiler (Hap Tasarımlar - 2. Görsel) */}
      <section className="py-16 pb-32 container mx-auto px-6 max-w-6xl text-center">
        <h2 className="text-2xl font-bold text-brandDark mb-10">Kullandığımız Teknolojiler</h2>
        <div className="flex flex-wrap justify-center gap-4">
          {technologies.map((tech, index) => (
            <div key={index} className="bg-white px-6 py-3 rounded-full border border-gray-200 shadow-sm text-gray-700 font-medium text-sm flex items-center hover:border-brandOrange hover:text-brandOrange transition cursor-pointer">
              {tech}
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}