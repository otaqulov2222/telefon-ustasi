import type { Metadata, Viewport } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "Malika Ustasi - Toshkentda №1 Telefon Ta'mirlash Markazi",
  description: "Singan ekranlar, tez tugaydigan batareyalar va dasturiy muammolarni eng tez fursatlarda ta'mirlaymiz. 6 oygacha kafolat. Malika savdo majmuasi.",
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
import OrderModal from "@/components/OrderModal";
import { GoogleAnalytics } from "@next/third-parties/google";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col bg-[#000000] text-white selection:bg-blue-600 selection:text-white">
        <LanguageProvider>
          <ModalProvider>
            <Navbar />
            {children}
            <OrderModal />
          </ModalProvider>
        </LanguageProvider>
        {process.env.NEXT_PUBLIC_GA_ID && (
          <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID} />
        )}
      </body>
    </html>
  );
}
