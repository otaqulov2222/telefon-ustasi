import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import FooterSection from "@/components/FooterSection";

export default function PrivacyPolicy() {
  return (
    <main className="bg-[#0a101c] min-h-screen">
      <div className="pt-[120px] pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        {/* Background Ambient Glows */}
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-blue-500/10 blur-[150px] rounded-full pointer-events-none mix-blend-screen" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-cyan-500/10 blur-[150px] rounded-full pointer-events-none mix-blend-screen" />
        
        <div className="max-w-4xl mx-auto relative z-10 text-gray-300">
          
          {/* Back Link */}
          <Link href="/" className="group inline-flex items-center gap-3 px-2 py-2 pr-5 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 hover:shadow-[0_0_30px_-5px_rgba(255,255,255,0.1)] transition-all duration-500 mb-12 backdrop-blur-sm relative overflow-hidden w-fit cursor-pointer">
            <div className="absolute inset-0 w-1/2 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-[200%] group-hover:translate-x-[300%] transition-transform duration-1000 ease-in-out" />
            <div className="w-8 h-8 shrink-0 rounded-full bg-blue-600 flex items-center justify-center border border-blue-500/50 relative z-10 group-hover:bg-blue-500 transition-all duration-300 shadow-[0_0_10px_-2px_rgba(37,99,235,0.5)]">
              <ArrowLeft size={16} className="text-white group-hover:-translate-x-0.5 transition-transform duration-300" />
            </div>
            <span className="text-xs font-bold tracking-[0.1em] uppercase text-gray-400 group-hover:text-white relative z-10 transition-colors duration-300">
              Bosh sahifa
            </span>
          </Link>

          <h1 className="text-3xl md:text-5xl font-black text-white mb-8 tracking-tight">
            Maxfiylik Siyosati
          </h1>
          
          <div className="prose prose-invert max-w-none space-y-6">
            <p className="text-lg">
              Ushbu Maxfiylik siyosati "Malika Ustasi" (keyingi o'rinlarda "Biz") foydalanuvchilar (keyingi o'rinlarda "Siz") ma'lumotlarini qanday yig'ishi, foydalanishi va himoya qilishini tushuntiradi. Biz sizning shaxsiy ma'lumotlaringiz xavfsizligiga jiddiy e'tibor qaratamiz.
            </p>

            <h2 className="text-2xl font-bold text-white mt-10 mb-4">1. Qanday ma'lumotlarni yig'amiz?</h2>
            <p>
              Biz xizmatlarimizdan foydalanish jarayonida siz ixtiyoriy ravishda taqdim etgan quyidagi ma'lumotlarni yig'ishimiz mumkin:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Ismingiz (buyurtma berish jarayonida murojaat qilish uchun)</li>
              <li>Telefon raqamingiz (siz bilan bog'lanish va buyurtmani tasdiqlash uchun)</li>
              <li>Siz tanlagan xizmat turi va izohlaringiz</li>
            </ul>

            <h2 className="text-2xl font-bold text-white mt-10 mb-4">2. Ma'lumotlardan qanday foydalanamiz?</h2>
            <p>
              Yig'ilgan shaxsiy ma'lumotlar quyidagi maqsadlarda foydalaniladi:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Sizning so'rovingizga javob berish va xizmat ko'rsatish</li>
              <li>Qurilmangizni ta'mirlash bo'yicha aloqa o'rnatish</li>
              <li>Xizmat sifatini yaxshilash va veb-sayt ishlashini tahlil qilish (masalan, Google Analytics orqali)</li>
            </ul>

            <h2 className="text-2xl font-bold text-white mt-10 mb-4">3. Uchinchi shaxslarga ma'lumotlarni uzatish</h2>
            <p>
              Biz sizning shaxsiy ma'lumotlaringizni uchinchi shaxslarga sotmaymiz, almashtirmaymiz yoki boshqa yo'l bilan uzatmaymiz. Qonunchilikda ko'zda tutilgan holatlar bundan mustasno.
            </p>

            <h2 className="text-2xl font-bold text-white mt-10 mb-4">4. Axborot xavfsizligi</h2>
            <p>
              Biz sizning shaxsiy ma'lumotlaringizni ruxsatsiz kirish, o'zgartirish, oshkor qilish yoki yo'q qilishdan himoya qilish uchun barcha zarur xavfsizlik choralarini ko'ramiz. Sizning ma'lumotlaringiz xavfsiz serverlarda saqlanadi.
            </p>

            <h2 className="text-2xl font-bold text-white mt-10 mb-4">5. O'zgartirishlar</h2>
            <p>
              Biz vaqti-vaqti bilan ushbu Maxfiylik siyosatiga o'zgartirishlar kiritishimiz mumkin. Har qanday o'zgarishlar ushbu sahifada e'lon qilinadi va u nashr etilgan vaqtdan boshlab kuchga kiradi.
            </p>

            <h2 className="text-2xl font-bold text-white mt-10 mb-4">6. Bog'lanish uchun</h2>
            <p>
              Agar ushbu Maxfiylik siyosati bo'yicha savollaringiz bo'lsa, quyidagi manzil orqali biz bilan bog'lanishingiz mumkin:
            </p>
            <ul className="list-none space-y-2">
              <li><strong>Manzil:</strong> Toshkent, Shayxontohur tumani, Malika Savdo Majmuasi, B-blok, 15-do'kon</li>
              <li><strong>Telefon:</strong> +998 90 123 45 67</li>
            </ul>
          </div>
        </div>
      </div>
      <FooterSection />
    </main>
  );
}
