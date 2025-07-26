
import Hero from "./Components/Herosec";
import PromoSection from "./Components/Promo-section-umayma";
import AboutIntroSection from "./Components/AboutIntroSection";
import BeforeAfterSection from "./Components/BefAafter";
import ContactSection from "./Components/Contact";
import Head from "next/head";


export default function Home() {
   

      


    
  return (

<>
    <Head>
        <title>
          Umayma Medical Center | Hair Transplant, Dental Implants, Botox &
          Fillers in Jordan - Website by Jehad Horani
        </title>

        <meta
          name="description"
          content="Umayma Medical Center in Amman, Jordan offers hair transplant, dental aesthetics, Botox, fillers, Hollywood Smile, skin rejuvenation, laser treatments,Dr. Suhaib Al-Samadi, and more. Website developed by Jehad Horani."
        />
        <meta
          name="keywords"
          content="Umayma Medical Center, Hair Transplant Jordan, Dr. Suhaib Al-Samadi, Dental Implants Jordan, Botox Jordan, Fillers Jordan, Hollywood Smile Jordan, Skin Care Amman, Best Hair Transplant in Jordan, Aesthetic Clinic Amman, Jehad Horani Web Developer"
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
          content="Umayma Medical Center | Trusted Hair Transplant & Dental Care in Jordan"
        />
        <meta
          property="og:description"
          content="Leading aesthetic and medical center in Amman, Jordan for hair transplant, dental implants, Botox, fillers, and skin care. Website by Jehad Horani."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://your-website-url.com" />
        <meta property="og:image" content="/white-logo.png" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Umayma Medical Center | Hair Transplant, Botox & Dental Care - Website by Jehad Horani"
        />
        <meta
          name="twitter:description"
          content="Advanced hair transplant, Botox, fillers, dental aesthetics, and skin care in Jordan. Trusted for 7+ years. Website developed by Jehad Horani."
        />
        <meta name="twitter:image" content="/og-image.jpg" />

        <meta name="robots" content="index, follow" />
        <meta name="author" content="Jehad Horani" />
        <meta name="language" content="English, Arabic" />
        <link rel="canonical" href="https://your-website-url.com" />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "MedicalBusiness",
            name: "Umayma Medical Center",
            url: "https://your-website-url.com",
            image: "https://your-website-url.com/og-image.jpg",
            description:
              "Umayma Medical Center in Amman, Jordan offers advanced hair transplant, dental implants, Botox, fillers, Hollywood Smile, and skin treatments. Website developed by Jehad Horani.",
            address: {
              "@type": "PostalAddress",
              streetAddress: "Amman, Jordan",
              addressLocality: "Amman",
              addressCountry: "JO",
            },
            telephone: "+962-7-97043538",
            priceRange: "$$",
            aggregateRating: {
              "@type": "AggregateRating",
              ratingValue: "4.9",
              reviewCount: "250",
            },
            sameAs: [
              "https://www.facebook.com/share/19neRGfzbA/?mibextid=wwXIfr",
              "https://www.instagram.com/umaima_medical_center?igsh=bHlvY2N2dzF4cnV5",
              "https://maps.app.goo.gl/dqWzaiJcFbuSWUWZ6",
            ],
          })}
        </script>
      </Head>

      <div className="sr-only">
        <h1>مركز أميمة الطبي -  </h1>
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
      
     <Hero/>
    <PromoSection/>
    <BeforeAfterSection/>
    <AboutIntroSection/>
    <ContactSection/>
    </main>
    </>
  );
}

