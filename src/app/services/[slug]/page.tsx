import ServiceDetailsClient, { ServiceDetails } from "@/components/ServiceDetailsClient";
import FooterSection from "@/components/FooterSection";

const serviceData: Record<string, ServiceDetails> = {
  "ekran-almashtirish": {
    title: "Ekran almashtirish",
    description: "Telefoningiz ekrani singan, yorilgan yoki umuman ishlamay qoldimi? Biz uni atigi 30 daqiqada yangi va sifatli ekranga almashtirib beramiz. Sizning xohishingizga qarab original yoki yuqori sifatli (AAA) nusxa o'rnatishimiz mumkin.",
    price: "80,000 so'mdan boshlab",
    warranty: "6 oygacha kafolat",
    time: "30 - 60 daqiqa",
    process: [
      "Bepul diagnostika",
      "Ekran turini tanlash",
      "Ta'mirlash (30 daqiqa)",
      "Sifat nazorati",
      "Mijozga topshirish"
    ]
  },
  "batareya-almashtirish": {
    title: "Batareya almashtirish",
    description: "Telefoningiz quvvati tez tugab qolyaptimi yoki sovuqda o'chib qolyaptimi? Eski va eskirgan batareyangizni yangi, original sig'imli batareyaga atigi 15-20 daqiqada almashtiramiz.",
    price: "50,000 so'mdan boshlab",
    warranty: "6 oy kafolat",
    time: "15 - 30 daqiqa",
    process: [
      "Batareya sig'imini tekshirish",
      "Eski batareyani xavfsiz ajratib olish",
      "Yangi batareya o'rnatish",
      "To'liq zaryad/razryad testi",
      "Mijozga topshirish"
    ]
  },
  "suvdan-tozalash": {
    title: "Suv ta'siri",
    description: "Qurilmangiz suvga yoki boshqa suyuqlikka tushib ketgan bo'lsa, darhol o'chiring va bizga olib keling! Maxsus quritish uskunalari va kimyoviy tozalash vositalarida platadagi zanglash jarayonini to'xtatamiz va telefonni hayotga qaytaramiz.",
    price: "70,000 so'mdan boshlab",
    warranty: "Plata holatiga qarab",
    time: "1 - 3 kun",
    process: [
      "Telefonni to'liq qismlarga ajratish",
      "Ultratovushli vanna orqali tozalash",
      "Mikroskop ostida diagnostika",
      "Buzuq qismlarni almashtirish",
      "Yig'ish va to'liq test"
    ]
  },
  "dasturiy-taminot": {
    title: "Dasturiy muammolar",
    description: "Telefon logotipda qotib qoldimi, qayta-qayta o'chib yonyaptimi yoki parolingizni unutdingizmi? Eng so'nggi dasturlash apparatlari yordamida proshivka qilamiz, FRP (Google/FRP/Mi Account) bloklardan ochamiz.",
    price: "40,000 so'mdan boshlab",
    warranty: "Dastur ishlashiga kafolat",
    time: "30 - 60 daqiqa",
    process: [
      "Muammoni diagnostika qilish",
      "Dasturiy tahlil",
      "Kerakli proshivka faylini yuklash",
      "Dasturlash / Blokdan ochish",
      "Tizim barqarorligini tekshirish"
    ]
  },
  "plata-tamiri": {
    title: "Plata ta'miri",
    description: "Telefon qizib ketyaptimi yoki umuman yonmayaptimi? Murakkab mikrosxema va plata qismlarini (Power IC, CPU, Audio IC, h.k.) professional uskunalar yordamida yuqori aniqlikda ta'mirlaymiz.",
    price: "Kelishuv asosida",
    warranty: "Ta'mirlangan qismga qarab",
    time: "1 - 5 kun",
    process: [
      "To'liq va chuqur diagnostika",
      "Muammoli qismni aniqlash",
      "Nuqtali kavlash va soldering",
      "Elektr zanjirini tekshirish",
      "Yakuniy test sinovlari"
    ]
  },
  "barcha-brendlar": {
    title: "Barcha brendlar",
    description: "Biz deyarli barcha turdagi smartfon brendlariga xizmat ko'rsatamiz: Apple iPhone, Samsung Galaxy, Xiaomi, Redmi, Poco, Huawei, Honor, Oppo, Vivo va boshqalar. Har bir brend uchun maxsus original ehtiyot qismlardan foydalanamiz.",
    price: "Kelishuv asosida",
    warranty: "Qism turiga qarab kafolat",
    time: "Kelishuv asosida",
    process: [
      "Qurilma modeli va brendini aniqlash",
      "Muammoni tahlil qilish",
      "Zaruriy ehtiyot qismini ombordan topish",
      "Mutaxassis tomonidan ta'mirlash",
      "To'liq testdan o'tkazish"
    ]
  }
};

export function generateStaticParams() {
  return [
    { slug: "ekran-almashtirish" },
    { slug: "batareya-almashtirish" },
    { slug: "suvdan-tozalash" },
    { slug: "plata-tamiri" },
    { slug: "dasturiy-taminot" },
    { slug: "barcha-brendlar" },
  ];
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const data = serviceData[resolvedParams.slug];

  return (
    <main className="bg-black min-h-screen">
      <ServiceDetailsClient data={data} />
      <FooterSection />
    </main>
  );
}
