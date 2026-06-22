import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import FooterSection from "@/components/FooterSection";

export default function TermsOfService() {
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
            Foydalanish Shartlari
          </h1>
          
          <div className="prose prose-invert max-w-none space-y-6">
            <p className="text-lg">
              Veb-saytimizga tashrif buyurganingiz va xizmatlarimizdan foydalanganingiz uchun tashakkur. Iltimos, "Malika Ustasi" (keyingi o'rinlarda "Biz") xizmatlaridan foydalanishdan oldin ushbu shartlarni diqqat bilan o'qib chiqing.
            </p>

            <h2 className="text-2xl font-bold text-white mt-10 mb-4">1. Umumiy qoidalar</h2>
            <p>
              Ushbu veb-saytdan foydalanish orqali Siz ushbu Foydalanish shartlariga to'liq rozilik bildirasiz. Agar siz ushbu shartlarning biror qismiga rozi bo'lmasangiz, veb-saytimizdan foydalanmasligingizni so'raymiz.
            </p>

            <h2 className="text-2xl font-bold text-white mt-10 mb-4">2. Xizmatlarni taqdim etish</h2>
            <p>
              Biz mobil qurilmalarni ta'mirlash, ehtiyot qismlarini almashtirish va dasturiy ta'minotni sozlash bo'yicha xizmatlar ko'rsatamiz. Veb-saytda keltirilgan narxlar va muddatlar taxminiy bo'lib, qurilmani bevosita ko'zdan kechirgandan so'ng yakuniy narx belgilanadi.
            </p>

            <h2 className="text-2xl font-bold text-white mt-10 mb-4">3. Kafolat shartlari</h2>
            <p>
              Biz bajargan ishimizga va o'rnatilgan ehtiyot qismlarga (asl nusxadagi detallarga) odatda 6 oygacha kafolat beramiz. Biroq, qurilma mijoz tomonidan tushirib yuborilsa, suvga tushsa yoki boshqa ustaxonada ochilsa kafolat o'z kuchini yo'qotadi.
            </p>

            <h2 className="text-2xl font-bold text-white mt-10 mb-4">4. Sayt mazmunidan foydalanish</h2>
            <p>
              Veb-saytdagi barcha materiallar (matnlar, dizayn, logotiplar) himoyalangan. Ulardan ruxsatsiz tijorat maqsadida nusxa ko'chirish va tarqatish taqiqlanadi.
            </p>

            <h2 className="text-2xl font-bold text-white mt-10 mb-4">5. Ma'suliyatni cheklash</h2>
            <p>
              Biz veb-sayt uzluksiz va xatosiz ishlashiga harakat qilamiz, lekin internet tarmog'idagi uzilishlar yoki uchinchi shaxslarning harakatlari tufayli kelib chiqadigan muammolar uchun javobgar bo'lmaymiz.
            </p>

            <h2 className="text-2xl font-bold text-white mt-10 mb-4">6. O'zgartirishlar</h2>
            <p>
              Ushbu Foydalanish shartlariga istalgan vaqtda o'zgartirishlar kiritish huquqini o'zida saqlab qolamiz. O'zgarishlar veb-saytda e'lon qilingan paytdan boshlab kuchga kiradi.
            </p>
          </div>
        </div>
      </div>
      <FooterSection />
    </main>
  );
}
