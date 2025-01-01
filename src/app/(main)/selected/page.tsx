"use client";

import { useRouter } from "next/navigation";
import React, { useState } from "react";
import Image from "next/image"; // Import Image component for optimized image handling

// Import images from assets
import d1 from "@/assets/d1.png";
import d2 from "@/assets/d2.png";

// Define the devices array
const devices = [
  { name: "", id: 1, image: d1 },
  { name: "", id: 2, image: d2 },
];

const DeviceSelector = () => {
  const router = useRouter();
  const [selectedDeviceIndex, setSelectedDeviceIndex] = useState(0);

  // Handlers for device selection
  const handleNextDevice = () => {
    setSelectedDeviceIndex((selectedDeviceIndex + 1) % devices.length);
  };

  const handlePreviousDevice = () => {
    setSelectedDeviceIndex(
      (selectedDeviceIndex - 1 + devices.length) % devices.length
    );
  };

  const handleNavigate = () => {
    router.push(`/last`);
  };

  const currentDevice = devices[selectedDeviceIndex];

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-900">
      <h1 className="text-4xl font-extrabold text-gray-100 mb-8">
        Select Your Device
      </h1>
      <div className="flex flex-col items-center space-y-8">
        {/* Device Image and Name */}
        <div className="relative">
          <Image
            src={currentDevice.image}
            alt={currentDevice.name}
            width={300}
            height={300}
            className="rounded-lg shadow-lg"
            onClick={handleNavigate}
          />
          <p className="absolute bottom-0 left-0 right-0 text-center text-lg font-semibold text-gray-100 bg-gray-800 bg-opacity-75 py-2 rounded-b-lg">
            {currentDevice.name}
          </p>
        </div>

        {/* Navigation Buttons */}
        <div className="flex items-center space-x-6">
          <button
            className="w-12 h-12 text-gray-900 bg-gray-200 hover:bg-gray-300 active:scale-90 transition transform rounded-full shadow-md flex items-center justify-center text-2xl"
            onClick={handlePreviousDevice}
            aria-label="Previous Device"
          >
            &lt;
          </button>
          <button
            className="w-12 h-12 text-gray-900 bg-gray-200 hover:bg-gray-300 active:scale-90 transition transform rounded-full shadow-md flex items-center justify-center text-2xl"
            onClick={handleNextDevice}
            aria-label="Next Device"
          >
            &gt;
          </button>
        </div>

      
      </div>
    </div>
  );
};

export default DeviceSelector;
