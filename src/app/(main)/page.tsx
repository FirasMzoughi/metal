"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image"; // Import Image component for optimized image handling in Next.js
import p1 from "@/assets/en.png";
import p2 from "@/assets/ger.png";
import p3 from "@/assets/ru.png";

// Define the languages array with proper paths for images in the assets folder
const languages = [
  { name: "English", code: "en", flag: p1 },
  { name: "German", code: "de", flag: p2},
  { name: "Russian", code: "ru", flag: p3 },
];

const LanguageSelector = () => {
  const [currentLanguageIndex, setCurrentLanguageIndex] = useState(0);
  const router = useRouter();

  // Handlers for changing the current language
  const handleNextLanguage = () => {
    setCurrentLanguageIndex((currentLanguageIndex + 1) % languages.length);
  };

  const handlePreviousLanguage = () => {
    setCurrentLanguageIndex(
      (currentLanguageIndex - 1 + languages.length) % languages.length
    );
  };

  const handleNavigate = () => {
    router.push("/Bluetooth");
  };

  const currentLanguage = languages[currentLanguageIndex];

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white">
      
      <div className="flex items-center gap-4">
        {/* Previous Language Button */}
        <button
          onClick={handlePreviousLanguage}
          className="w-12 h-12 flex items-center justify-center rounded-full bg-white text-black shadow-md hover:bg-gray-300 transition"
        >
          «
        </button>

        {/* Current Language Display */}
        <div
          onClick={handleNavigate}
          className="bg-[#8B4513] rounded-xl p-6 flex flex-col items-center shadow-lg cursor-pointer hover:scale-105 transition transform"
        >
          <Image
            src={currentLanguage.flag}
            alt={`${currentLanguage.name} Flag`}
            width={96}
            height={96}
            className="rounded-full mb-4"
          />
          <p className="text-xl font-semibold uppercase">
            {currentLanguage.name}
          </p>
        </div>

        {/* Next Language Button */}
        <button
          onClick={handleNextLanguage}
          className="w-12 h-12 flex items-center justify-center rounded-full bg-white text-black shadow-md hover:bg-gray-300 transition"
        >
          »
        </button>
      </div>
    </div>
  );
};

export default LanguageSelector;
