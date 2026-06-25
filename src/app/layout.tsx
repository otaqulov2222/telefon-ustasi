import type { Metadata, Viewport } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import FloatingContactButton from "@/components/FloatingContactButton";
import { Toaster } from "sonner";

export const metadata: Metadata = {
  title: "Malika Ustasi - Toshkentda №1 Telefon Ta'mirlash Markazi",
  description: "Singan ekranlar, tez tugaydigan batareyalar va dasturiy muammolarni eng tez fursatlarda ta'mirlaymiz. 6 oygacha kafolat. Malika savdo majmuasi.",
  keywords: "telefon tamirlash, iphone ustasi, malika bozor service, ekran almashtirish, batareya almashtirish",
  openGraph: {
    title: "Malika Ustasi - Telefon Ta'mirlash Markazi",
    description: "Toshkentda №1 Telefon Ta'mirlash Markazi. Eng tez va ishonchli xizmat ko'rsatish.",
    url: "https://malikabozorservice.uz",
    siteName: "Malika Ustasi",
    images: [
      {
        url: "/section1-bg.png",
        width: 1200,
        height: 630,
        alt: "Malika Ustasi - Telefon Ta'mirlash",
      },
    ],
    locale: "uz_UZ",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Malika Ustasi - Telefon Ta'mirlash",
    description: "Toshkentda №1 Telefon Ta'mirlash Markazi. 6 oygacha kafolat.",
    images: ["/section1-bg.png"],
  },
};

export const viewport: Viewport = {
  themeColor: "#000000",
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false, // Prevent zoom on mobile
};

import { LanguageProvider } from "@/context/LanguageContext";
import { ModalProvider } from "@/context/ModalContext";
import { ThemeProvider } from "@/context/ThemeContext";
import OrderModal from "@/components/OrderModal";
import { GoogleAnalytics } from "@next/third-parties/google";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased dark" suppressHydrationWarning>
      <body className="min-h-full flex flex-col bg-white dark:bg-[#000000] text-black dark:text-white selection:bg-blue-600 selection:text-white transition-colors duration-500 overflow-x-hidden break-words">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
          <LanguageProvider>
            <ModalProvider>
              <Navbar />
              {children}
              <FloatingContactButton />
              <Toaster position="top-center" richColors theme="system" />
              <OrderModal />
            </ModalProvider>
          </LanguageProvider>
        </ThemeProvider>
        {process.env.NEXT_PUBLIC_GA_ID && (
          <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID} />
        )}
      </body>
    </html>
  );
}
