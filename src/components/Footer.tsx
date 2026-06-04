"use client";

import React from 'react';
import Link from 'next/link';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brandDark text-white pt-20 pb-10 relative overflow-hidden">
      
      {/* Arka plan dekoratif dokunuş (Subtle Glow) */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-brandOrange/50 to-transparent"></div>
      
      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 mb-16">
          
          {/* 1. Sütun: Marka ve Vizyon */}
          <div className="lg:col-span-4 space-y-6">
            <Link href="/" className="flex items-center space-x-2 group">
              <div className="w-10 h-10 bg-brandOrange rounded-xl flex items-center justify-center font-black text-xl shadow-lg shadow-brandOrange/20 group-hover:scale-110 transition-transform">M</div>
              <span className="text-2xl font-bold tracking-tight">Marifetix<span className="text-brandOrange">Soft</span></span>
            </Link>
            <p className="text-gray-400 leading-relaxed text-sm max-w-sm">
              Biz, dijital dünyada iz bırakan deneyimler tasarlayan bir ekibiz. 
              Clean code prensipleri ve modern tasarım trendlerini harmanlayarak, 
              fikirlerinizi yaşayan projelere dönüştürüyoruz.
            </p>
            {/* Sosyal Medya İkonları (Orijinal, Temiz SVG'ler) */}
            <div className="flex space-x-4 pt-2">
              <a href="https://github.com/hazimablak" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/5 text-gray-300 rounded-xl flex items-center justify-center hover:bg-brandOrange hover:text-white transition-all duration-300 border border-white/10" aria-label="GitHub">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.09.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.379.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.577.688.48C19.138 20.161 22 16.418 22 12c0-5.523-4.477-10-10-10z"/></svg>
              </a>
              <a href="https://www.linkedin.com/in/hazimablak/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/5 text-gray-300 rounded-xl flex items-center justify-center hover:bg-[#0077b5] hover:text-white transition-all duration-300 border border-white/10" aria-label="LinkedIn">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
              </a>
              <a href="https://instagram.com/hazim.ablak" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/5 text-gray-300 rounded-xl flex items-center justify-center hover:bg-[#e1306c] hover:text-white transition-all duration-300 border border-white/10" aria-label="Instagram">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
              </a>
            </div>
          </div>

          {/* 2. Sütun: Hızlı Linkler */}
          <div className="lg:col-span-2 space-y-6">
            <h4 className="text-lg font-bold border-l-4 border-brandOrange pl-3">Kurumsal</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li><Link href="/" className="hover:text-brandOrange transition">Ana Sayfa</Link></li>
              <li><Link href="/portfolio" className="hover:text-brandOrange transition">Portfolyo</Link></li>
              <li><Link href="/team" className="hover:text-brandOrange transition">Ekibimiz</Link></li>
              <li><Link href="/contact" className="hover:text-brandOrange transition">İletişim</Link></li>
            </ul>
          </div>

          {/* 3. Sütun: Hizmetler */}
          <div className="lg:col-span-3 space-y-6">
            <h4 className="text-lg font-bold border-l-4 border-brandOrange pl-3">Hizmetlerimiz</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-brandOrange/50"></span>
                Web Platform Geliştirme
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-brandOrange/50"></span>
                Mobil Uygulama (Flutter)
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-brandOrange/50"></span>
                AI & LLM Entegrasyonları
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-brandOrange/50"></span>
                Sistem Otomasyonları
              </li>
            </ul>
          </div>

          {/* 4. Sütun: İletişim Alanı (Orijinal temiz SVG İkonlar eklendi) */}
          <div className="lg:col-span-3 space-y-6">
            <h4 className="text-lg font-bold border-l-4 border-brandOrange pl-3">Bize Ulaşın</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-brandOrange mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                <a href="mailto:ablakhazim1071@gmail.com" className="hover:text-white transition">ablakhazim1071@gmail.com</a>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-brandOrange mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                <a href="tel:+905303611650" className="hover:text-white transition">+90 530 361 16 50</a>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-brandOrange mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                <span>Hatay / Türkiye</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Alt Çizgi ve Telif Hakları */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500 font-medium">
          <p>© {currentYear} Marifetix Soft. Tüm hakları saklıdır.</p>
          <div className="flex items-center gap-1.5">
            <span>Made by</span>
            {/* Kalp kaldırıldı, sadece Hazım yazıyor ve profile gidiyor */}
            <Link href="/team/hazim-ablak" className="text-brandOrange font-bold hover:text-orange-600 transition tracking-wide">Hazım</Link>
          </div>
        </div>
      </div>
      
    </footer>
  );
};

export default Footer;