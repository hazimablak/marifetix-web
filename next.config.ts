import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Senin telefon/diğer bilgisayardan bağlanabilmen ve kodların güncellenmesi için:
  allowedDevOrigins: ["10.38.0.246", "localhost"],
  
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "Access-Control-Allow-Origin", value: "*" },
          { key: "Access-Control-Allow-Methods", value: "GET,OPTIONS,PATCH,DELETE,POST,PUT" },
        ],
      },
    ];
  },
};

export default nextConfig;