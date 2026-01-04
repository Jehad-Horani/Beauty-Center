
import Hero from "./Components/Herosec";
import PromoSection from "./Components/Promo-section-umayma";
import AboutIntroSection from "./Components/AboutIntroSection";
import BeforeAfterSection from "./Components/BefAafter";
import ContactSection from "./Components/Contact";
import Head from "next/head";
import Script from "next/script";


// مثال لاستخدام الـ component مع بيانات مركز أميمة الطبي




export default function Home() {






  return (

    <>
      <main>
        <Hero />
        <PromoSection />
        <BeforeAfterSection />
        <AboutIntroSection />
        <ContactSection />
      </main>
   </>
  );
}

