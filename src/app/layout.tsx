import "./globals.css";
import type { Metadata } from "next";
import { Inter, Playfair_Display, Quicksand, Baloo_2 } from "next/font/google";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import AnimationProvider from "@/components/AnimationProvider";

// Mantidas as fontes para evitar quebras de compilação em outros componentes do app
const baloo2 = Baloo_2({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-baloo2-var",
  display: "swap",
});

const quicksand = Quicksand({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-quicksand-var",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? "https://smartphonestore.vercel.app/", // Corrigido para a URL correta da marca
  ),

  title: {
    default: "Style Tech | Smartphones, Acessórios e Assistência Técnica em Campo Grande - MS",
    template: "%s | Style Tech",
  },

  description:
    "Sua loja especializada em smartphones novos e seminovos originais, acessórios premium e assistência técnica ágil com garantia em Campo Grande - MS.",

  applicationName: "Style Tech",

  keywords: [
    "smartphone campo grande",
    "loja de celulares campo grande ms",
    "capinha para celular",
    "assistência técnica de celular",
    "película para smartphone",
    "comprar iphone campo grande",
    "acessórios premium celular",
    "conserto de smartphone ms",
    "troca de tela celular",
    "troca de bateria smartphone",
    "style tech",
  ],

  authors: [
    {
      name: "Style Tech",
    },
  ],

  creator: "Style Tech",

  publisher: "Style Tech",

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  icons: {
    icon: "/brand/phone.svg",
    shortcut: "/brand/phone.svg",
    apple: "/brand/phone.svg",
  },

  openGraph: {
    title: "Style Tech | Smartphones, Acessórios e Assistência Técnica",

    description:
      "Venda de aparelhos celulares originais com garantia, capas e fones premium, além de laboratório de assistência técnica ágil.",

    url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://smartphonestore.vercel.app/",

    siteName: "Style Tech", // Corrigido para o nome oficial

    locale: "pt_BR",

    type: "website",

    images: [
      {
        url: "/hero/phones-icon.jpg",
        width: 1200,
        height: 630,
        alt: "Showroom e Smartphones Premium da Style Tech", // Alt textual descritivo para SEO
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title: "Style Tech | Smartphones e Acessórios",

    description:
      "Venda de aparelhos originais, acessórios premium e assistência técnica especializada em Campo Grande - MS.",

    images: ["/hero/phones-icon.jpg"],
  },

  category: "technology", // Categoria alterada de 'health' para 'technology'
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="pt-BR"
      data-scroll-behavior="smooth" // Corrigido: Evita o aviso do console e gerencia transições do Next.js
      className={`${inter.variable} ${playfair.variable} ${quicksand.variable} ${baloo2.variable}`}
    >
      <body className="bg-brand-black font-sans antialiased text-gray-100">
        <AnimationProvider />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
