"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useTheme } from 'next-themes'; // 🔥 Gece modu sihirbazı

const Navbar = () => {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  // Gece modu ayarları
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Hydration hatasını önlemek için sayfa yüklenene kadar bekle
  useEffect(() => {
    setMounted(true);
  }, []);

  const getLinkClass = (path: string) => {
    return pathname === path 
      ? "text-brandOrange font-semibold" 
      : "text-gray-600 dark:text-gray-300 hover:text-brandOrange transition";
  };

  return (
    <nav className="w-full bg-brandLight/90 dark:bg-gray-900/90 backdrop-blur-md border-b border-gray-100 dark:border-gray-800 sticky top-0 z-50 transition-colors duration-300">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between relative">
        
        {/* Sol: Logo */}
        <Link href="/" className="flex items-center space-x-2 cursor-pointer z-50">
          <div className="w-8 h-8 bg-brandOrange rounded-lg flex items-center justify-center text-white font-bold text-xl">M</div>
          <span className="text-2xl font-extrabold text-brandDark dark:text-white transition-colors">
            Marifetix <span className="text-brandOrange font-medium text-sm ml-1">Soft</span>
          </span>
        </Link>

        {/* Orta: Masaüstü Linkler */}
        <div className="hidden md:flex items-center space-x-8 text-sm font-medium">
          <Link href="/" className={getLinkClass("/")}>Ana Sayfa</Link>
          <Link href="/portfolio" className={getLinkClass("/portfolio")}>Portfolyo</Link>
          <Link href="/team" className={getLinkClass("/team")}>Ekibimiz</Link>
          <Link href="/about" className={getLinkClass("/about")}>Hakkımızda</Link>
          <Link href="/blog" className={getLinkClass("/blog")}>Blog</Link>
          <Link href="/contact" className={getLinkClass("/contact")}>İletişim</Link>
        </div>

        {/* Sağ: Tema, Dil ve Mobil Buton */}
        <div className="flex items-center space-x-4 z-50">
          
          {/* 🔥 ÇALIŞAN GECE/GÜNDÜZ ŞALTERİ */}
          <button 
            aria-label="Karanlık Modu Değiştir" 
            title="Karanlık Modu Değiştir" 
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className="text-gray-500 dark:text-gray-400 hover:text-brandOrange dark:hover:text-brandOrange transition p-2 hidden sm:block"
          >
            {mounted && theme === 'dark' ? (
              // Güneş İkonu (Karanlık Moddaysak görünür)
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="4"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="m6.34 17.66-1.41 1.41"/><path d="m19.07 4.93-1.41 1.41"/></svg>
            ) : (
              // Ay İkonu (Aydınlık Moddaysak görünür)
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path></svg>
            )}
          </button>
          
          <div className="hidden sm:flex items-center text-sm font-medium text-gray-600 dark:text-gray-300 cursor-pointer transition-colors">
            TR 
            <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
          </div>

          {/* Hamburger Menü Butonu */}
          <button 
            aria-label="Mobil Menüyü Aç veya Kapat"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} 
            className="md:hidden text-gray-600 dark:text-gray-300 focus:outline-none p-2"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMobileMenuOpen ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /> : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobil Açılır Menü */}
      <div className={`md:hidden absolute w-full bg-white dark:bg-gray-900 border-b border-gray-100 dark:border-gray-800 transition-all duration-300 ease-in-out shadow-xl ${isMobileMenuOpen ? 'opacity-100 visible top-full' : 'opacity-0 invisible -top-40'}`}>
        <div className="flex flex-col px-6 py-6 space-y-5 text-center shadow-inner">
          <Link href="/" onClick={() => setIsMobileMenuOpen(false)} className={`block text-lg ${getLinkClass("/")}`}>Ana Sayfa</Link>
          <Link href="/portfolio" onClick={() => setIsMobileMenuOpen(false)} className={`block text-lg ${getLinkClass("/portfolio")}`}>Portfolyo</Link>
          <Link href="/team" onClick={() => setIsMobileMenuOpen(false)} className={`block text-lg ${getLinkClass("/team")}`}>Ekibimiz</Link>
          <Link href="/about" onClick={() => setIsMobileMenuOpen(false)} className={`block text-lg ${getLinkClass("/about")}`}>Hakkımızda</Link>
          <Link href="/blog" onClick={() => setIsMobileMenuOpen(false)} className={`block text-lg ${getLinkClass("/blog")}`}>Blog</Link>
          <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)} className={`block text-lg ${getLinkClass("/contact")}`}>İletişim</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;