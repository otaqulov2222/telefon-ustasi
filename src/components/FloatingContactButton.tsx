"use client";

const TelegramIcon = () => (
  <svg viewBox="0 0 448 512" fill="currentColor" className="w-8 h-8 relative right-[2px]">
    <path d="M446.7 98.6l-67.6 318.8c-5.1 22.5-18.4 28.1-37.3 17.5l-103-75.9-49.7 47.8c-5.5 5.5-10.1 10.1-20.7 10.1l7.4-104.9 190.9-172.5c8.3-7.4-1.8-11.5-12.9-4.1L117.8 284 16.2 252.2c-22.1-6.9-22.5-22.1 4.6-32.7L418.2 66.4c18.4-6.9 34.5 4.1 28.5 32.2z" />
  </svg>
);

const WhatsAppIcon = () => (
  <svg viewBox="0 0 448 512" fill="currentColor" className="w-8 h-8 relative">
    <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157.1zM223.9 438.3c-33.1 0-65.5-8.9-94-25.8l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.2-186.6 184.2zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7 .9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" />
  </svg>
);

export default function FloatingContactButton() {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-4">
      {/* WhatsApp FAB */}
      <a
        href="https://wa.me/998901234567"
        target="_blank"
        rel="noopener noreferrer"
        className="relative group w-16 h-16 bg-[#25D366] hover:bg-[#20bd5a] text-white rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(37,211,102,0.4)] transition-all duration-300 hover:scale-110 focus:outline-none"
      >
        <div className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-20 pointer-events-none" />
        <div className="relative flex items-center justify-center transition-transform group-hover:scale-110">
          <WhatsAppIcon />
        </div>
      </a>

      {/* Main Telegram FAB */}
      <a
        href="https://t.me/malikabozorservice"
        target="_blank"
        rel="noopener noreferrer"
        className="relative group w-16 h-16 bg-[#229ED9] hover:bg-[#1f8ec3] text-white rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(34,158,217,0.4)] transition-all duration-300 hover:scale-110 focus:outline-none"
      >
        {/* Pulsing ring */}
        <div className="absolute inset-0 rounded-full bg-[#229ED9] animate-ping opacity-20 pointer-events-none" />
        
        {/* Telegram Icon */}
        <div className="relative flex items-center justify-center transition-transform group-hover:scale-110">
          <TelegramIcon />
        </div>
      </a>
    </div>
  );
}
