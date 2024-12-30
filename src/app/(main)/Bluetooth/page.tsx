"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation"; // For navigation
import Image from "next/image";
import p3 from "@/assets/p3.png";

const BluetoothPage = () => {
  const [status, setStatus] = useState("Scanning for devices...");
  const [fakeDevices] = useState(["Device A"]); // Removed `setFakeDevices`
 
  const [selectedDevice, setSelectedDevice] = useState<string | null>(null);

  const router = useRouter(); // Initialize router

  const handleDeviceSelect = (device: string) => {
    setSelectedDevice(device);
    setStatus(`Connecting to ${device}...`);
    setTimeout(() => {
      setStatus(`Connected to ${device}`);
    }, 2000); // Simulate connection delay
  };
  

  const navigateToSelected = () => {
    router.push("/selected"); // Redirect to /selected
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-black">
      <h1 className="text-4xl font-bold text-white mb-8">Connecting the Device</h1>
      <div className="flex items-center space-x-8">
        <div className="p-4 rounded-full shadow-lg">
          <Image
            src={p3} // Ensure this is the correct path in your project
            alt="Bluetooth Icon"
            className="w-16 h-16"
            width={500}
            height={300}
          />
        </div>
        <div className="text-center">
          <p className="text-xl text-green-500 font-bold">{status}</p>
          {selectedDevice && <p className="text-white">Selected: {selectedDevice}</p>}
        </div>
      </div>

      <div className="mt-8">
        <p className="text-lg text-gray-300 mb-4">Available Devices:</p>
        <ul className="space-y-2">
          {fakeDevices.map((device, index) => (
            <li
              key={index}
              className={`px-4 py-2 bg-gray-700 text-white font-bold rounded-lg cursor-pointer ${
                selectedDevice === device ? "bg-green-500" : "hover:bg-gray-600"
              }`}
              onClick={() => handleDeviceSelect(device)}
            >
              {device}
            </li>
          ))}
        </ul>
      </div>

      <div className="flex space-x-4 mt-8">
        <button
          onClick={navigateToSelected}
          className="px-4 py-2 bg-green-500 text-black font-bold rounded-lg shadow hover:bg-green-600"
        >
          BACK
        </button>
        <button
          onClick={navigateToSelected}
          className="px-4 py-2 bg-green-500 text-black font-bold rounded-lg shadow hover:bg-green-600"
        >
          TRY AGAIN
        </button>
      </div>
    </div>
  );
};

export default BluetoothPage;
