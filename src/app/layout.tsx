import type { Metadata } from "next";
import { Plus_Jakarta_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const jetbrains = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: "Muhammad Ariq Azzaki — Full-stack Developer",
  description: "Portfolio of Muhammad Ariq Azzaki — Full-stack Developer, S1 Teknologi Informasi Universitas Telkom.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${jakarta.variable} ${jetbrains.variable} scroll-smooth antialiased`}>
      <body className="min-h-screen font-sans">
        {children}
      </body>
    </html>
  );
}
