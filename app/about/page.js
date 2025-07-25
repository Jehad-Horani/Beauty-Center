"use client";

import { useState, useEffect } from "react";

import AOS from "aos";
import "aos/dist/aos.css";

export default function AboutPage() {

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  
    
  return (
    <main className="bg-gradient-to-b from-[#2e1c11] via-[#1f1410] to-[#0c0907] text-white min-h-screen pb-24 px-6">
      {/* Background blur circles */}
      <div className="absolute top-[-120px] left-[8%] w-80 h-80 bg-[#D89F43] opacity-20 blur-3xl rounded-full -z-10"></div>
      <div className="absolute bottom-[-140px] right-[7%] w-[28rem] h-[28rem] bg-[#EFE37A] opacity-10 blur-2xl rounded-full -z-10"></div>

      {/* Page Header */}
      <section className="max-w-6xl mx-auto text-center py-20">
        <h1
          data-aos="fade-down"
          className="text-5xl md:text-6xl font-extrabold tracking-wide text-[#EFE37A] mb-6"
        >
          About Umayma Medical Center
        </h1>
        <p
          data-aos="fade-up"
          className="max-w-3xl mx-auto text-gray-300 text-lg md:text-xl leading-relaxed"
        >
          Where modern aesthetic innovation meets timeless elegance. Our
          mission is to enhance your natural beauty while prioritizing your
          health, confidence, and well-being.
        </p>
      </section>

      {/* Our Mission Section */}
      <section className="max-w-5xl mx-auto my-16 md:my-24">
        <div
          data-aos="fade-right"
          className="bg-[#3c2a14] rounded-xl p-12 shadow-lg border border-[#D89F43]/30"
        >
          <h2 className="text-3xl md:text-4xl font-semibold text-[#D89F43] mb-6">
            Our Mission
          </h2>
          <p className="text-gray-300 text-lg md:text-xl leading-relaxed">
            At Umayma Medical Center, our mission is to empower every client to
            shine with confidence and grace. We combine cutting-edge medical
            techniques with personalized care, ensuring a unique and transformative
            experience tailored just for you.
          </p>
        </div>
      </section>

      {/* Our Services Section */}
      <section className="max-w-6xl mx-auto my-16 md:my-24">
        <h2
          data-aos="fade-up"
          className="text-3xl md:text-4xl font-semibold text-[#EFE37A] text-center mb-12"
        >
          Our Services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {[
            {
              title: "Advanced Hair Treatments",
              description:
                "From hair restoration to revitalization, our expert team offers cutting-edge solutions tailored to your needs.",
              icon: (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-12 w-12 text-[#D89F43] mb-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 20c4.418 0 8-4 8-9 0-2.21-1.343-4-3-4s-3 1.79-3 4c0 1.104-.896 2-2 2s-2-.896-2-2c0-2.21-1.343-4-3-4s-3 1.79-3 4c0 5 3.582 9 8 9z"
                  />
                </svg>
              ),
            },
            {
              title: "Facial Rejuvenation",
              description:
                "Experience natural, youthful skin with our range of aesthetic facial treatments and therapies.",
              icon: (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-12 w-12 text-[#D89F43] mb-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 12c2.28 0 4-1.72 4-4s-1.72-4-4-4-4 1.72-4 4 1.72 4 4 4z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 20v-1a6 6 0 0112 0v1"
                  />
                </svg>
              ),
            },
            {
              title: "Dental Aesthetics",
              description:
                "Brighten your smile with our comprehensive dental care and cosmetic treatments.",
              icon: (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-12 w-12 text-[#D89F43] mb-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8 14s1-2 4-2 4 2 4 2v4H8v-4z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 10h6v4H9z"
                  />
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
              <h3 className="text-2xl font-semibold mb-3">{title}</h3>
              <p className="text-gray-300 leading-relaxed">{description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Team Section */}
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
              name: "Dr. Lina Al-Salem",
              role: "Chief Aesthetician",
              img: "/jehad.png", // استبدل الصور بملفاتك داخل مجلد public/team
              bio: "Specializing in facial rejuvenation with over 10 years of experience.",
            },
            {
              name: "Dr. Ahmad Khatib",
              role: "Hair Specialist",
              img: "/jehad.png",
              bio: "Expert in hair restoration and scalp treatments.",
            },
            {
              name: "Dr. Sara Mansour",
              role: "Dental Care Expert",
              img: "/jehad.png",
              bio: "Dedicated to creating beautiful and healthy smiles.",
            },
            {
              name: "Dr. Omar Hamdan",
              role: "Medical Consultant",
              img: "/jehad.png",
              bio: "Ensuring the highest standards of medical safety and care.",
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
                className="w-32   object-cover mb-4 "
                loading="lazy"
              />
              <h3 className="text-xl font-semibold text-[#EFE37A]">{name}</h3>
              <p className="text-sm text-[#D89F43] italic mb-3">{role}</p>
              <p className="text-gray-300 text-sm">{bio}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials Section */}
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
                "The staff at Umayma Medical Center made me feel so comfortable. My skin has never looked better!",
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
