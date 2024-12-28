"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation"; // Next.js navigation

const languages = [
  { name: "English", code: "en" },
  { name: "French", code: "fr" },
  { name: "Arabic", code: "ar" },
  { name: "Spanish", code: "es" },
];

const LanguageSelector = () => {
  const [currentLanguageIndex, setCurrentLanguageIndex] = useState(0);
  const router = useRouter(); // Initialize Next.js router

  const handleNextLanguage = () => {
    setCurrentLanguageIndex((currentLanguageIndex + 1) % languages.length);
  };

  const handlePreviousLanguage = () => {
    setCurrentLanguageIndex(
      (currentLanguageIndex - 1 + languages.length) % languages.length
    );
  };

  const handleNavigate = () => {
    router.push("/Bluetooth"); // Navigate to /Bluetooth
  };

  const currentLanguage = languages[currentLanguageIndex];

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-900">
      <h1 className="text-4xl font-bold text-gray-100 mb-8">
        Select Your Language
      </h1>
      <div className="flex items-center space-x-6">
        <button
          className="w-12 h-12 text-gray-900 bg-gray-200 hover:bg-gray-300 active:scale-90 transition transform rounded-full shadow-lg flex items-center justify-center text-2xl"
          onClick={handlePreviousLanguage}
          aria-label="Previous Language"
        >
          &lt;
        </button>
        <div
          className="text-3xl font-medium text-gray-100 bg-gray-800 px-8 py-4 rounded-lg shadow-md cursor-pointer"
          onClick={handleNavigate}
        >
          {currentLanguage.name}
        </div>
        <button
          className="w-12 h-12 text-gray-900 bg-gray-200 hover:bg-gray-300 active:scale-90 transition transform rounded-full shadow-lg flex items-center justify-center text-2xl"
          onClick={handleNextLanguage}
          aria-label="Next Language"
        >
          &gt;
        </button>
      </div>
    </div>
  );
};

export default LanguageSelector;
