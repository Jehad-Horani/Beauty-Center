"use client";

import { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { AnimatePresence, motion } from "framer-motion";


const SERVICES = [
  {
    id: 1,
    title: "General Medicine & Primary Care",
    description:
      "Comprehensive healthcare for chronic disease management, elderly care, routine checkups, wound stitching, IV therapies, and physiotherapy.",
    img: "/MEDE.jpg",
    subServices: [
      "Chronic Disease Follow-up (Diabetes, Hypertension, Heart Conditions)",
      "Elderly & Home Care",
      "Routine Medical Checkups",
      "Stitches (Cosmetic & Standard)",
      "Blood Tests & IV Therapy",
      "Burns Treatment",
      "Physiotherapy Sessions",
    ],
  },
  {
    id: 2,
    title: "Telehealth & Virtual Consultations",
    description:
      "Online medical consultations for chronic patients, elderly, and those seeking convenient healthcare from home.",
    img: "/telem.jpg",
    subServices: [
      "Virtual Follow-ups for Chronic Diseases",
      "Elderly Care via Telehealth",
      "Online Medical Consultation",
      "Prescription Renewals",
      "Remote Health Monitoring",
    ],
  },
  {
    id: 3,
    title: "Dental Aesthetics",
    description:
      "Transform your smile with advanced dental implants, veneers, root canal treatment, braces, and whitening.",
    img: "/teeth.jpg",
    subServices: [
      "Teeth Whitening",
      "Hollywood Smile (Veneers, Zircon Crowns)",
      "Dental Implants",
      "Braces & Invisalign",
      "Root Canal Treatment",
      "Gum Contouring",
      "Smile Makeover Packages",
    ],
  },
  {
    id: 4,
    title: "Facial Rejuvenation & Skin Care",
    description:
      "Professional Botox, fillers, scar & pigmentation treatments, HIFU/Endolift lifting, and advanced weight loss programs.",
    img: "/face.jpg",
    subServices: [
      "Botox for Wrinkles & Face Slimming",
      "Lip Fillers (Russian, Volume Lift)",
      "Scar & Pigmentation Treatments",
      "HIFU & Endolift Face Lifting",
      "Mesotherapy & PRP",
      "Carbon Laser Peel",
      "Skin Tightening RF",
    ],
  },
  {
    id: 5,
    title: "Hair Transplant & Restoration",
    description:
      "Cutting-edge solutions for hair loss: advanced hair transplant, Regenera injection, exosome therapy, and hair fillers.",
    img: "/hear.jpg",
    subServices: [
      "FUE Hair Transplant",
      "DHI Hair Transplant",
      "Beard & Eyebrow Transplant",
      "PRP Hair Therapy",
      "Hair Filler Treatments",
      "Regenera Injection",
      "Exosome Therapy",
    ],
  },
  {
    id: 6,
    title: "Body Contouring & Slimming",
    description:
      "Non-surgical body shaping treatments for fat reduction and muscle toning.",
    img: "/body.jpg",
    subServices: [
      "Cryolipolysis (Fat Freezing)",
      "RF Body Tightening",
      "Cellulite Reduction",
      "Ultrasound Cavitation",
      "EMSculpt Muscle Toning",
      "Weight Loss Programs",
    ],
  },
  {
    id: 7,
    title: "Laser Treatments",
    description:
      "Safe and effective laser solutions for hair removal, skin rejuvenation, and more.",
    img: "/laser.jpg",
    subServices: [
      "Full Body Laser Hair Removal",
      "Facial Laser Hair Removal",
      "Carbon Laser Peel",
      "Tattoo Removal",
      "Pigmentation Removal",
      "Skin Resurfacing Laser",
    ],
  },
  {
    id: 8,
    title: "Cupping Therapy (Hijama)",
    description:
      "Improve blood circulation, detoxify your body, and enhance recovery naturally.",
    img: "/Hijama.jpg",
    subServices: [
      "Dry Cupping",
      "Wet Cupping",
      "Facial Cupping",
      "Sports Recovery Cupping",
      "Detox Cupping Therapy",
    ],
  },
    {
    id: 9,
    title: "Botox & Fillers",
    description:
      "Enhance your natural beauty with safe and professional Botox and filler treatments.",
    img: "/feeler.jpg",
    subServices: [
      "Lip Fillers",
      "Cheek Fillers",
      "Jawline Contouring",
      "Under-eye Fillers",
      "Botox for Wrinkles",
      "Masseter Botox (Jaw Slimming)",
      "Forehead & Frown Lines Botox",
    ],
  },
];




export default function ServicesPage() {

  const [query, setQuery] = useState("");
  const [expandedId, setExpandedId] = useState(null);
  const [filtered, setFiltered] = useState(SERVICES);








  useEffect(() => {
    AOS.init({ duration: 500, once: true });
  }, []);

  useEffect(() => {
    const q = query.toLowerCase();
    setFiltered(
      SERVICES.filter(
        (service) =>
          service.title.toLowerCase().includes(q) ||
          service.description.toLowerCase().includes(q) ||
          service.subServices.some((sub) => sub.toLowerCase().includes(q))
      )
    );
  }, [query]);

  const toggleExpand = (id) => {
    setExpandedId((prev) => (prev === id ? null : id));
  };
  return (
    <main className="bg-gradient-to-b from-[#2e1c11] via-[#1f1410] to-[#0c0907] min-h-screen text-white pb-24">

      <div className="sr-only">
        🌟 مركز أميمة الطبي – الوجهة المتكاملة للرعاية الطبية والتجميل في الأردن 🌟

        7 سنوات من التميّز تحت إشراف الدكتور صهيب الصمادي، طبيب جراحة عظام ذو خبرة واسعة في وزارة الصحة، مع فريق طبي متخصص لتلبية كل احتياجاتك الصحية والتجميلية.

        🔹 قسم الطب العام والرعاية الأولية: متابعة الأمراض المزمنة، كبار السن، الفحوصات الدورية، العلاج الطبيعي، خياطة جراحية، خدمات عن بُعد.

        🔹 قسم الأسنان: زراعة الأسنان، تلبيسات زيركون وبنيرز، علاج العصب، تقويم وتبييض الأسنان.

        🔹 قسم التجميل والعناية بالبشرة: بوتوكس وفيلر، رفع وتكبير الشفاه، شد الوجه بأحدث الأجهزة، علاج التصبغات والندبات، برامج نحت الجسم.

        🔹 قسم زراعة الشعر: زراعة دقيقة، حقن الريجينيرا والإكزوسوم، فيلر الشعر، علاج التساقط.

        🔹 الاستشارات عن بُعد (Telehealth): لمتابعة الأمراض المزمنة وكبار السن بكل سهولة.

        أميمة الطبي... لأن صحتك وجمالك في أيدٍ أمينة.
      </div>


      {/* Header */}
      <section className="text-center py-20 relative z-10">
        <h1
          className="text-5xl md:text-6xl font-extrabold text-[#EFE37A] mb-4"
          data-aos="fade-down"
        >
          Our Services
        </h1>
        <p
          className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto"
          data-aos="fade-up"
        >
          Elevate your beauty with world-class treatments designed for confidence & natural elegance.
        </p>
      </section>

      {/* Search */}
      <div className="max-w-2xl mx-auto px-6 mb-12" data-aos="fade-up">
        <input
          type="text"
          placeholder="Search for a service..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="w-full px-5 py-3 rounded-full bg-[#1f1410] border border-[#D89F43]/40 text-white placeholder-gray-400 focus:ring-2 focus:ring-[#D89F43]"
        />
      </div>

      {/* Services Flex */}
      <section className="max-w-6xl mx-auto px-6 flex flex-wrap gap-6 justify-center">
        {filtered.length > 0 ? (
          filtered.map((service, i) => (
            <div
              key={service.id}
              data-aos="fade-up"
              data-aos-delay={i * 50}
              className="bg-[#3c2a14] rounded-xl shadow-lg border border-[#D89F43]/30 w-[320px]  flex-shrink-0 overflow-hidden"
            >
              <div
                className="cursor-pointer"
                onClick={() => toggleExpand(service.id)}
              >
                <img
                  src={service.img}
                  alt={service.title}
                  className="w-full h-60 object-cover"
                  loading="lazy"
                />
                <div className="p-6 flex justify-between items-center">
                  <div>
                    <h3 className="text-xl font-semibold text-[#EFE37A] mb-1">
                      {service.title}
                    </h3>
                    <p className="text-gray-300 text-sm">{service.description}</p>
                  </div>
                  {expandedId === service.id ? (
                    <FaChevronUp className="text-[#D89F43] text-lg" />
                  ) : (
                    <FaChevronDown className="text-[#D89F43] text-lg" />
                  )}
                </div>
              </div>

              <AnimatePresence>
                {expandedId === service.id && (
                  <motion.ul
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="px-6 pb-4 space-y-2"
                  >
                    {service.subServices.map((sub, idx) => (
                      <li
                        key={idx}
                        className="bg-[#1f1410] border border-[#D89F43]/30 rounded-lg px-4 py-2 text-gray-300"
                      >
                        {sub}
                      </li>
                    ))}
                  </motion.ul>
                )}
              </AnimatePresence>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-400 text-lg">No services found.</p>
        )}
      </section>
    </main>
  );
}
