
import Hero from "./Components/Herosec";
import PromoSection from "./Components/Promo-section-umayma";
import AboutIntroSection from "./Components/AboutIntroSection";
import BeforeAfterSection from "./Components/BefAafter";
import ContactSection from "./Components/Contact";
import Head from "next/head";
import ClinicSchema from "@/components/ClinicSchema";

// مثال لاستخدام الـ component مع بيانات مركز أميمة الطبي

const clinicData = {
  name: "مركز أميمة الطبي / Umaima Medical Center",
  description: "مركز أميمة الطبي هو الوجهة الأولى في الأردن لزراعة الشعر، تجميل الأسنان، الفيلر، البوتوكس، ابتسامة هوليود، علاجات البشرة، الليزر، التخسيس ونحت الجسم، الاستشارات الطبية عن بعد، والرعاية الصحية المنزلية.",
  url: "https://www.umaima-medical-center.com/",
  logo: "https://www.umaima-medical-center.com/favicon.ico",
  image: "https://www.umaima-medical-center.com/favicon.ico",
  telephone: "+962797043538",
  priceRange: "$$",
  address: {
    streetAddress: "ضاحية الرشيد , شارع عاكف الفايز // Rashid Suburb, Akif Al-Fayez Street ",
    addressLocality: "Amman",
    addressRegion: "Amman Governorate",
    addressCountry: "JO"
  },
  geo: {
    latitude: "31.9566",
    longitude: "35.9457"

  },
  openingHours: [
    { dayOfWeek: "Saturday", opens: "10:00", closes: "20:00" },
    { dayOfWeek: "Sunday", opens: "10:00", closes: "20:00" },
    { dayOfWeek: "Monday", opens: "10:00", closes: "20:00" },
    { dayOfWeek: "Tuesday", opens: "10:00", closes: "20:00" },
    { dayOfWeek: "Wednesday", opens: "10:00", closes: "20:00" },
    { dayOfWeek: "Thursday", opens: "10:00", closes: "20:00" }
    // Friday: closed
  ],
  sameAs: [
    "https://www.facebook.com/share/19neRGfzbA/?mibextid=wwXIfr",
    "https://www.instagram.com/umaima_medical_center?igsh=bHlvY2N2dzF4cnV5",
    "https://maps.app.goo.gl/dqWzaiJcFbuSWUWZ6",
  ],
  medicalSpecialty: "Cosmetic dermatology, Aesthetic medicine, Hair transplantation, Dental aesthetics, Hollywood smile, Botox & Fillers, Anti-aging treatments, Skin rejuvenation, Hydrafacial, Microneedling, Mesotherapy, Laser hair removal, Laser skin treatments, Body contouring, Weight loss treatments, General medicine, Home care, Telehealth consultations, Nutritional consultation, Acne treatment, Scar removal, Wrinkle reduction, Facial contouring, Skin tightening, Chemical peels, PRP therapy, Cosmetic injections",
  services: [
    { name: "Hair Transplant (FUE / DHI)", description: "زراعة الشعر بأحدث تقنيات FUE و DHI" },
    { name: "Hollywood Smile (Veneers & Zircon Crowns)", description: "ابتسامة هوليود" },
    { name: "Botox & Fillers", description: "بوتوكس وفيلر لشد الوجه وتجميله" },
    { name: "Hydrafacial", description: "علاج متقدم لتنظيف وتغذية البشرة" },
    { name: "Microneedling", description: "علاج تجديد البشرة باستخدام إبر دقيقة" },
    { name: "Mesotherapy", description: "حقن الفيتامينات والمغذيات لتحسين البشرة" },
    { name: "Laser Hair Removal", description: "إزالة الشعر بالليزر لجميع مناطق الجسم" },
    { name: "Laser Skin Treatments", description: "علاجات الليزر للتصبغات والندبات" },
    { name: "Chemical Peels", description: "تقشير البشرة الكيميائي لتحسين الملمس والبشرة" },
    { name: "PRP Therapy", description: "حقن البلازما الغنية بالصفائح لتجديد البشرة والشعر" },
    { name: "Facial Contouring", description: "تشكيل ملامح الوجه وتحسين شكل الفك والخدين" },
    { name: "Skin Tightening", description: "شد البشرة باستخدام تقنيات حديثة" },
    { name: "Anti-aging Treatments", description: "علاجات مقاومة الشيخوخة للبشرة" },
    { name: "Wrinkle Reduction", description: "تقليل التجاعيد بخدمات تجميلية متقدمة" },
    { name: "Body Contouring & Slimming", description: "نحت الجسم والتخسيس باستخدام تقنيات متطورة" },
    { name: "General Medicine & Home Care", description: "خدمات طب عام ورعاية منزلية" },
    { name: "Telehealth Consultations", description: "استشارات طبية عن بعد" },
    { name: "Nutritional Consultation", description: "استشارات غذائية متخصصة" },
    { name: "Acne & Scar Treatment", description: "علاج حب الشباب وإزالة الندبات" },
    { name: "Dental Implants", description: "زراعة الأسنان بطريقة متقدمة" },
    { name: "Teeth Whitening", description: "تبييض الأسنان للحصول على ابتسامة مشرقة" },
    { name: "Orthodontics (Braces & Aligners)", description: "تقويم الأسنان التقليدي والشفاف" },
    { name: "Veneers & Crowns", description: "تركيبات الأسنان التجميلية لتحسين الابتسامة" },
    { name: "Hair Loss Treatments", description: "علاجات منع تساقط الشعر وتحفيز نموه" },
    { name: "Facial Fillers", description: "حقن الفيلر لتجميل وتحديد ملامح الوجه" },
    { name: "Lip Augmentation", description: "تكبير وتحديد شكل الشفاه" },
    { name: "Chin & Jawline Enhancement", description: "تجميل الذقن والفك" },
    { name: "Eyelid Surgery (Blepharoplasty)", description: "جراحة تجميل الجفون" },
    { name: "Rhinoplasty", description: "تجميل الأنف" },
    { name: "Skin Pigmentation Treatments", description: "علاج تصبغات البشرة" },
    { name: "Tattoo Removal", description: "إزالة الوشوم بالليزر" },
    { name: "Spider Veins & Varicose Veins Treatment", description: "علاج الأوردة البارزة والصغيرة" },
    { name: "Chemical Peels for Pigmentation", description: "تقشير البشرة لعلاج البقع والتصبغات" },
    { name: "Stretch Marks Treatment", description: "علاج علامات التمدد في الجلد" },
    { name: "Fat Reduction Injections", description: "حقن تخسيس موضعية لتقليل الدهون" },
    { name: "Cellulite Treatment", description: "علاج السيلوليت لتحسين مظهر الجلد" },
    { name: "Body Skin Tightening", description: "شد البشرة في مناطق الجسم المختلفة" },
    { name: "Medical Weight Loss Programs", description: "برامج طبية للتخسيس تحت إشراف متخصصين" },
    { name: "Hormonal Balance Consultations", description: "استشارات لعلاج مشاكل هرمونية" },
    { name: "Men’s Aesthetic Treatments", description: "خدمات تجميلية مخصصة للرجال" },
    { name: "Women’s Aesthetic Treatments", description: "خدمات تجميلية مخصصة للنساء" },
    { name: "Scar & Stretch Marks Camouflage", description: "تقنيات لتغطية الندبات وعلامات التمدد" },
    { name: "Facial Rejuvenation", description: "علاجات شاملة لتجديد شباب الوجه" }
  ],

  founder: {
    type: "Person",
    name: "Dr. Suhaib Al-Samadi ,الدكتور صهيب الصمادي ",
    image: "https://www.umaima-medical-center.com/suhaip.png",
  },
  bookingUrl: "https://wa.me/962797043538",
  aggregateRating: {
    ratingValue: 4.8,
    reviewCount: 217
  }
};


export default function Home() {






  return (

    <>
      <Head>
        <title>
          Umaima Medical Center | Hair Transplant, Dental Implants, Botox &
          Fillers in Jordan - Website by Jehad Horani
        </title>
        <Script
          id={id}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: jsonLd }}
          strategy="beforeInteractive" // بدل afterInteractive
        />

        <meta
          name="description"
          content="Umaima Medical Center in Amman, Jordan offers hair transplant, dental aesthetics, Botox, fillers, Hollywood Smile, skin rejuvenation, laser treatments,Dr. Suhaib Al-Samadi, and more. Website developed by Jehad Horani."
        />
        <meta
          name="keywords"
          content="Umaima Medical Center, Hair Transplant Jordan, Dr. Suhaib Al-Samadi, Dental Implants Jordan, Botox Jordan, Fillers Jordan, Hollywood Smile Jordan, Skin Care Amman, Best Hair Transplant in Jordan, Aesthetic Clinic Amman, Jehad Horani Web Developer"
        />

        <meta
          name="description"
          content="مركز أميمة الطبي في عمان، الأردن يقدم خدمات زراعة الشعر، تجميل الأسنان، الفيلر، البوتوكس، ابتسامة هوليود، علاجات البشرة والليزر.دكتور صهيب الصمادي الموقع من تطوير جهاد حوراني - Jehad Horani."
        />
        <meta
          name="keywords"
          content="مركز أميمة الطبي, زراعة شعر الأردن, تجميل الأسنان الأردن, فيلر الأردن, بوتوكس الأردن, ابتسامة هوليود, دكتور صهيب الصمادي, مركز تجميل في عمان, Jehad Horani, جهاد حوراني مطور مواقع"
        />

        <meta
          property="og:title"
          content="Umaima Medical Center | Trusted Hair Transplant & Dental Care in Jordan"
        />
        <meta
          property="og:description"
          content="Leading aesthetic and medical center in Amman, Jordan for hair transplant, dental implants, Botox, fillers, and skin care. Website by Jehad Horani."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.umaima-medical-center.com/" />
        <meta property="og:image" content="/favicon.ico" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Umaima Medical Center | Hair Transplant, Botox & Dental Care - Website by Jehad Horani"
        />
        <meta
          name="twitter:description"
          content="Advanced hair transplant, Botox, fillers, dental aesthetics, and skin care in Jordan. Trusted for 7+ years. Website developed by Jehad Horani."
        />
        <meta name="twitter:image" content="/og-image.jpg" />

        <meta name="robots" content="index, follow" />
        <meta name="author" content="Jehad Horani" />
        <meta name="language" content="English, Arabic" />
        <link rel="canonical" href="https://www.umaima-medical-center.com/" />


      </Head>

      <div className="sr-only">
        <h1> مركز أميمة الطبي – فيلر، بوتوكس، تجميل الأسنان في الأردن </h1>
        <h2>H2: خدمات الفيلر والبوتوكس في عمان
          H2: زراعة الشعر في الأردن
          H2: ابتسامة هوليود وتجميلي الأسنان</h2>
        <p>
          مركز أميمة الطبي هو الوجهة الأولى في الأردن لزراعة الشعر، تجميل
          الأسنان، الفيلر، البوتوكس، ابتسامة هوليود، علاجات البشرة، الليزر،
          التخسيس ونحت الجسم، الاستشارات الطبية عن بعد، والرعاية الصحية
          المنزلية. الموقع تم تصميمه وتطويره بواسطة جهاد حوراني (Jehad Horani) –
          مطور مواقع متخصص في Next.js وTailwind CSS.
        </p>
        <ul>
          <li>زراعة الشعر بأحدث تقنيات FUE و DHI</li>
          <li>ابتسامة هوليود (Veneers & Zircon Crowns)</li>
          <li>بوتوكس وفيلر لشد الوجه وتجميله</li>
          <li>Hydrafacial وMicroneedling وMesotherapy</li>
          <li>خدمات طب عام ورعاية منزلية واستشارات عبر Telehealth</li>
        </ul>
        <p>
          جهاد حوراني – مطور ويب أردني، متخصص في تصميم مواقع احترافية باستخدام
          Next.js, React, Tailwind CSS, GSAP مع خبرة في تحسين محركات البحث (SEO)
          وبناء مواقع للشركات والمطاعم والعيادات الطبية.
        </p>
      </div>
      <main>

        <Hero />
        <PromoSection />
        <BeforeAfterSection />
        <AboutIntroSection />
        <ContactSection />
      </main>
      <ClinicSchema clinic={clinicData} id="umaima-clinic-schema-home-page" />

    </>
  );
}

