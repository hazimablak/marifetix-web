import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider"; // 🔥 Gece Modu Sihirbazı Buraya Geldi

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Marifetix Soft",
  description: "Dijital Dünyada Uçtan Uca Marifet",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // 🔥 suppressHydrationWarning'i hem html hem body etiketine ekledik ki gece moduna geçerken ekran titremesin
    <html
      lang="tr"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col bg-white dark:bg-[#0a0a0a] text-brandDark dark:text-gray-100 transition-colors duration-300" suppressHydrationWarning>
        
        {/* 🔥 Bütün siteyi tema sağlayıcısı ile sardık */}
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
        
      </body>
    </html>
  );
}