import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-black flex flex-col items-center justify-center p-8">
      <h1 className="text-4xl md:text-6xl font-bold text-amber-900 mb-6">
        Umaima Medical Center
      </h1>
      <p className="text-lg md:text-xl text-gray-300 mb-4 text-center max-w-xl">
        Enhance your natural beauty with our expert cosmetic care.
      </p>
      <button className="mt-4 px-6 py-2 bg-amber-900 hover:bg-pink-500 text-white rounded-full transition">
        Book Appointment
      </button>
    </main>
  );
}

