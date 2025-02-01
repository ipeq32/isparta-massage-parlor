import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import NavbarComponent from "@/app/_components/Navbar";
import FooterComponent from "./_components/Footer";
import { ToastContainer } from "react-toastify";
import Script from "next/script";
import SpeedDialButtonComponent from "./_components/SpeedDialButton";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Isparta Masaj Salonu",
  description: "Isparta Masaj Salonu",
};

const NODE_ENV = process.env.NODE_ENV;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <Script
        strategy="afterInteractive"
        src="https://www.googletagmanager.com/gtag/js?id=G-RLKC1XDH1K"
      />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-RLKC1XDH1K');
            `,
        }}
      />
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased ${
          NODE_ENV === "development" ? "debug-screens" : undefined
        }`}
      >
        <NavbarComponent />
        {children}
        <div className="fixed bottom-6 right-2">
          <SpeedDialButtonComponent />
        </div>
        <ToastContainer />
        <FooterComponent />
      </body>
    </html>
  );
}
