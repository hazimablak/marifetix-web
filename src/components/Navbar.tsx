"use client"; // Menünün dinamik çalışması için bunu ekledik

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation'; // Hangi sayfada olduğumuzu bulacak sihirli alet

const Navbar = () => {
  const pathname = usePathname(); // Şu anki sayfanın linkini alır (örneğin: "/about")

  // Linkin aktif olup olmadığını kontrol eden küçük fonksiyonumuz
  const getLinkClass = (path: string) => {
    return pathname === path 
      ? "text-brandOrange font-semibold" // Aktifse Turuncu ve Kalın
      : "text-gray-600 hover:text-brandOrange transition"; // Değilse Gri ve Hover efektli
  };

  return (
    <nav className="w-full bg-brandLight/80 backdrop-blur-md border-b border-gray-100 sticky top-0 z-50">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        
        {/* Sol: Logo */}
        <Link href="/" className="flex items-center space-x-2 cursor-pointer">
          <div className="w-8 h-8 bg-brandOrange rounded-lg flex items-center justify-center text-white font-bold text-xl">
            M
          </div>
          <span className="text-2xl font-extrabold text-brandDark">
            Marifetix <span className="text-brandOrange font-medium text-sm ml-1">Soft</span>
          </span>
        </Link>

        {/* Orta: Akıllı Linkler (Ayrı Sayfalara Giden Gerçek Linkler) */}
        <div className="hidden md:flex items-center space-x-8 text-sm font-medium">
          <Link href="/" className={getLinkClass("/")}>Ana Sayfa</Link>
          <Link href="/portfolio" className={getLinkClass("/portfolio")}>Portfolyo</Link>
          <Link href="/team" className={getLinkClass("/team")}>Ekibimiz</Link>
          <Link href="/about" className={getLinkClass("/about")}>Hakkımızda</Link>
          <Link href="/blog" className={getLinkClass("/blog")}>Blog</Link>
          <Link href="/contact" className={getLinkClass("/contact")}>İletişim</Link>
        </div>

        {/* Sağ: Tema ve Dil Seçeneği */}
        <div className="flex items-center space-x-4">
          <button aria-label="Karanlık Modu Değiştir" title="Karanlık Modu Değiştir" className="text-gray-500 hover:text-brandOrange transition p-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path>
            </svg>
          </button>
          
          <div className="flex items-center text-sm font-medium text-gray-600 cursor-pointer">
            TR 
            <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
            </svg>
          </div>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;