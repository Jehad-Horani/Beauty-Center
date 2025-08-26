"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function AboutPage() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <main className="bg-gradient-to-b from-[#2e1c11] via-[#1f1410] to-[#0c0907] text-white min-h-screen pb-24 px-6">

      {/* Hidden Arabic SEO Text */}
      <div className="sr-only">
        مركز أميمة الطبي – خبرة ثقة نتائج. منذ أكثر من سبع سنوات، تأسس مركز أميمة الطبي بإدارة الدكتور صهيب الصمادي، طبيب جراحة العظام والمقيم الجراحي السابق في وزارة الصحة الأردنية، ليكون وجهة متكاملة للرعاية الطبية المتخصصة والتجميلية. يضم المركز عدة أقسام تقدم خدمات طبية عالية الجودة: قسم الطب العام، قسم الأسنان، قسم التجميل والعناية بالبشرة، قسم زراعة الشعر.
      </div>

      {/* Header */}
      <section className="max-w-6xl mx-auto text-center py-20">
        <h1
          data-aos="fade-down"
          className="text-5xl md:text-6xl font-extrabold tracking-wide text-[#EFE37A] mb-6"
        >
          About Umaima Medical Center
        </h1>
        <p
          data-aos="fade-up"
          className="max-w-3xl mx-auto text-gray-300 text-lg md:text-xl leading-relaxed"
        >
          For over 7 years, Umaima Medical Center has been a trusted destination
          for advanced medical and aesthetic care. Founded and led by{" "}
          <span className="text-[#D89F43] font-semibold">Dr. Suhaib Al-Samadi</span>,
          a former orthopedic surgeon and MOH surgical resident in Jordan, our
          center combines expertise, innovation, and care to provide outstanding
          results.
        </p>
      </section>

      {/* Mission */}
      <section className="max-w-5xl mx-auto my-16 md:my-24">
        <div
          data-aos="fade-right"
          className="bg-[#3c2a14] rounded-xl p-12 shadow-lg border border-[#D89F43]/30"
        >
          <h2 className="text-3xl md:text-4xl font-semibold text-[#D89F43] mb-6">
            Our Mission
          </h2>
          <p className="text-gray-300 text-lg md:text-xl leading-relaxed">
            At Umaima Medical Center, our mission is to deliver top-quality
            healthcare and aesthetic treatments while ensuring the trust, comfort,
            and satisfaction of every patient. We provide specialized services in
            general medicine, dental care, advanced cosmetic procedures, and
            hair restoration.
          </p>
        </div>
      </section>

      {/* Departments */}
      <section className="max-w-6xl mx-auto my-16 md:my-24">
        <h2
          data-aos="fade-up"
          className="text-3xl md:text-4xl font-semibold text-[#EFE37A] text-center mb-12"
        >
          Our Main Departments
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {[
            {
              title: "General Medicine",
              description:
                "Comprehensive care for elderly and chronic patients: routine checkups, wound stitching (cosmetic & standard), IV therapies, burns treatment, and physiotherapy.",
              icon: (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-12 w-12 text-[#D89F43] mb-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v8m-4-4h8M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              ),
            },
            {
              title: "Dental Care",
              description:
                "Advanced dental services including veneers, crowns (Zircon), root canal treatment, dental implants, braces, and teeth whitening.",
              icon: (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-12 w-12 text-[#D89F43] mb-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 2a10 10 0 100 20 10 10 0 000-20z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8 14s1-2 4-2 4 2 4 2v4H8v-4z" />
                </svg>
              ),
            },
            {
              title: "Aesthetic & Skin Care",
              description:
                "Professional cosmetic treatments including Botox, fillers, lip enhancement, pigmentation & scar treatments, weight loss programs, and facial lifting (HIFU, Endolift).",
              icon: (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-12 w-12 text-[#D89F43] mb-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 12c2.28 0 4-1.72 4-4s-1.72-4-4-4-4 1.72-4 4 1.72 4 4 4z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 20v-1a6 6 0 0112 0v1" />
                </svg>
              ),
            },
            {
              title: "Hair Transplant & Regeneration",
              description:
                "Innovative solutions for hair loss: advanced hair transplant, Regenera injection, hair fillers, and exosome therapy.",
              icon: (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-12 w-12 text-[#D89F43] mb-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 20c4.418 0 8-4 8-9 0-2.21-1.343-4-3-4s-3 1.79-3 4c0 1.104-.896 2-2 2s-2-.896-2-2c0-2.21-1.343-4-3-4s-3 1.79-3 4c0 5 3.582 9 8 9z" />
                </svg>
              ),
            },
          ].map(({ title, description, icon }, i) => (
            <div
              key={i}
              data-aos="fade-up"
              data-aos-delay={i * 150}
              className="bg-[#3c2a14] rounded-xl p-8 shadow-md border border-[#D89F43]/30 flex flex-col items-center text-center"
            >
              {icon}
              <h3 className="text-2xl font-semibold text-[#EFE37A] mb-3">
                {title}
              </h3>
              <p className="text-gray-300 leading-relaxed">{description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Team */}
      <section className="max-w-6xl mx-auto my-16 md:my-24">
        <h2
          data-aos="fade-up"
          className="text-3xl md:text-4xl font-semibold text-[#EFE37A] text-center mb-12"
        >
          Meet Our Experts
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
          {[
            {
              name: "Dr. Mohammed Al-Samadi",
              role: "General and Plastic Surgeon",
              img: "/moh.png",
              bio: "Expert in both general and plastic surgery to enhance patient care.",
            },
            {
              name: "Dr. Suhaib Al-Samadi",
              role: "Orthopedic and General Surgeon",
              img: "/suhaip.png",
              bio: "Experienced in orthopedic and general surgical procedures.",
            },
            {
              name: "Dr. Ashraf Al-Baoul",
              role: "Anesthesia Resident",
              img: "/ashraf.png",
              bio: "Specialized in anesthesia to ensure patient comfort and safety.",
            },
            {
              name: "Dr. Abdul Rahman Hashem",
              role: "Dentist",
              img: "/abed.png",
              bio: "Providing comprehensive dental care for healthy, confident smiles.",
            },
       
            {
              name: "Zain Roro",
              role: "Nurse",
              img: "/zain.png",
              bio: "Dedicated nurse providing compassionate and professional patient care.",
            },
            {
              name: "Farah Mustafa",
              role: "Nurse",
              img: "/farah.png",
              bio: "Committed to supporting patients with care and empathy in every step.",
            },
          ].map(({ name, role, img, bio }, i) => (
            <div
              key={i}
              data-aos="zoom-in"
              data-aos-delay={i * 200}
              className="bg-[#3c2a14] rounded-xl p-6 shadow-lg border border-[#D89F43]/30 flex flex-col items-center text-center"
            >
              <img
                src={img}
                alt={name}
                className="w-32 h-[200px] object-cover mb-4"
                loading="lazy"
              />
              <h3 className="text-xl font-semibold text-[#EFE37A]">{name}</h3>
              <p className="text-sm text-[#D89F43] italic mb-3">{role}</p>
              <p className="text-gray-300 text-sm">{bio}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="max-w-5xl mx-auto my-16 md:my-24">
        <h2
          data-aos="fade-up"
          className="text-3xl md:text-4xl font-semibold text-[#EFE37A] text-center mb-12"
        >
          What Our Clients Say
        </h2>
        <div className="space-y-10">
          {[
            {
              name: "Fatima Al-Masri",
              feedback:
                "The staff at Umaima Medical Center made me feel so comfortable. My skin has never looked better!",
              rating: 5,
            },
            {
              name: "Omar Al-Hussein",
              feedback:
                "Professional and caring team. My hair treatment results exceeded my expectations.",
              rating: 5,
            },
            {
              name: "Lina Abu Khalil",
              feedback:
                "Friendly atmosphere and excellent dental care. Highly recommended!",
              rating: 5,
            },
          ].map(({ name, feedback, rating }, i) => (
            <blockquote
              key={i}
              data-aos="fade-up"
              data-aos-delay={i * 150}
              className="bg-[#3c2a14] rounded-xl p-8 border border-[#D89F43]/30 shadow-md"
            >
              <p className="text-gray-300 italic mb-4">"{feedback}"</p>
              <footer className="text-[#D89F43] font-semibold flex items-center space-x-2">
                <span>{name}</span>
                <span className="flex">
                  {Array.from({ length: rating }).map((_, idx) => (
                    <svg
                      key={idx}
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-yellow-400"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.955a1 1 0 00.95.69h4.166c.969 0 1.371 1.24.588 1.81l-3.37 2.448a1 1 0 00-.364 1.118l1.287 3.956c.3.922-.755 1.688-1.54 1.118l-3.37-2.448a1 1 0 00-1.176 0l-3.37 2.448c-.784.57-1.838-.196-1.539-1.118l1.287-3.956a1 1 0 00-.364-1.118L2.03 9.382c-.783-.57-.38-1.81.588-1.81h4.166a1 1 0 00.95-.69l1.286-3.955z" />
                    </svg>
                  ))}
                </span>
              </footer>
            </blockquote>
          ))}
        </div>
      </section>
    </main>
  );
}
