"use client";

import { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { AnimatePresence, motion } from "framer-motion";

const SERVICES = [
  {
    id: 1,
    title: "Hair Transplant & Restoration",
    description:
      "State-of-the-art hair transplant and restoration solutions for natural, lasting results.",
    img: "/hear.jpg",
    subServices: [
      "FUE Hair Transplant",
      "DHI Hair Transplant",
      "Beard Transplant",
      "Eyebrow Transplant",
      "PRP Hair Therapy",
      "Scalp Micropigmentation",
    ],
  },
  {
    id: 2,
    title: "Facial Rejuvenation & Skin Care",
    description:
      "Advanced treatments to achieve youthful, glowing, and healthy skin.",
    img: "/face.jpg",
    subServices: [
      "HydraFacial",
      "Microneedling",
      "Chemical Peels",
      "Carbon Laser Peel",
      "Mesotherapy",
      "Skin Tightening RF",
      "Dark Circle Treatment",
    ],
  },
  {
    id: 3,
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
  {
    id: 4,
    title: "Laser Treatments",
    description:
      "Effective and safe laser treatments for hair removal, skin improvement, and more.",
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
    id: 5,
    title: "Dental Aesthetics",
    description:
      "Transform your smile with advanced cosmetic and restorative dental treatments.",
    img: "/teeth.jpg",
    subServices: [
      "Teeth Whitening",
      "Hollywood Smile (Veneers)",
      "Dental Implants",
      "Braces & Invisalign",
      "Gum Contouring",
      "Smile Makeover",
    ],
  },
  {
    id: 6,
    title: "Cupping Therapy (Hijama)",
    description:
      "Improve circulation, detoxify your body, and relieve pain naturally.",
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
    id: 7,
    title: "Body Contouring & Slimming",
    description:
      "Non-surgical body shaping treatments for a toned and sculpted figure.",
    img: "/body.jpg",
    subServices: [
      "Cryolipolysis (Fat Freezing)",
      "RF Body Tightening",
      "Cellulite Reduction",
      "Ultrasound Cavitation",
      "EMSculpt Muscle Toning",
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
