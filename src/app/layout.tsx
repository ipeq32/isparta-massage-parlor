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
  title: {
    default:
      "Isparta Gül Şehri Spa & Masaj Salonu | Profesyonel Masaj Hizmetleri",
    template: "%s | Isparta Gül Şehri Spa & Masaj Salonu",
  },
  description:
    "Isparta'nın en profesyonel masaj ve spa merkezi. Aroma terapi, klasik masaj, sıcak taş masajı ve daha fazlası için hemen randevu alın. ✓ Profesyonel terapistler ✓ Steril ortam ✓ Uygun fiyatlar",
  keywords: [
    "Isparta masaj",
    "spa merkezi",
    "masaj salonu",
    "aroma terapi",
    "klasik masaj",
    "sıcak taş masajı",
    "profesyonel masaj",
    "spa hizmetleri",
    "Isparta spa",
  ],
  authors: [{ name: "Isparta Gül Şehri Spa & Masaj Salonu" }],
  creator: "Isparta Gül Şehri Spa & Masaj Salonu",
  publisher: "Isparta Gül Şehri Spa & Masaj Salonu",
  formatDetection: {
    email: false,
    address: true,
    telephone: true,
  },
  // verification: {
  //   google: "G-RLKC1XDH1K", // Google Search Console verification code (https://search.google.com/search-console)
  // },
  openGraph: {
    title:
      "Isparta Gül Şehri Spa & Masaj Salonu | Profesyonel Masaj Hizmetleri",
    description:
      "Isparta'nın en profesyonel masaj ve spa merkezi. Aroma terapi, klasik masaj, sıcak taş masajı ve daha fazlası için hemen randevu alın.",
    url: "https://ispartagulsehrimasaj.com",
    siteName: "Isparta Gül Şehri Spa & Masaj Salonu",
    images: [
      {
        url: "https://ispartagulsehrimasaj.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Isparta Gül Şehri Spa & Masaj Salonu",
      },
    ],
    locale: "tr_TR",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
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
