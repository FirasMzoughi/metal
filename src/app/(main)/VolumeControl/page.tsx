"use client";

import { useState } from "react";
import { useRouter } from "next/navigation"; // For navigation
import Image from "next/image"; // Import Image component for better optimization
import p1 from "@/assets/p1.jpg"; // Ensure correct path

const ControlPanel: React.FC = () => {
  const [volume, setVolume] = useState<number>(3);
  const [light, setLight] = useState<number>(7);
  const [sensitivity, setSensitivity] = useState<number>(8);
  const [ferrous, setFerrous] = useState<string>("OFF");
  const router = useRouter();

  // Handlers
  const increaseVolume = () => volume < 20 && setVolume(volume + 2);
  const decreaseVolume = () => volume > 1 && setVolume(volume - 2);
  const increaseLight = () => light < 9 && setLight(light + 2);
  const decreaseLight = () => light > 1 && setLight(light - 2);
  const increaseSensitivity = () =>
    sensitivity < 9 && setSensitivity(sensitivity + 2);
  const decreaseSensitivity = () =>
    sensitivity > 1 && setSensitivity(sensitivity - 2);
  const toggleFerrous = () => setFerrous(ferrous === "OFF" ? "ON" : "OFF");

  const navigateToSelected = () => {
    router.push("/last"); // Redirect to /last
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-800 via-gray-900 to-black p-4 flex items-center justify-center">
      <div className="relative w-full max-w-sm sm:max-w-md bg-gray-900 text-white p-6 rounded-lg shadow-lg space-y-6">
        {/* Top Image */}
        <div className="absolute -top-14 -right-8 w-24 h-16 sm:w-32 sm:h-20">
          <Image
            src={p1}
            alt="Device Icon"
            className="rounded-lg shadow-lg object-cover"
            width={128}
            height={80}
          />
        </div>

        {/* Header Controls */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
          {[
            { label: "VOLUME", value: volume },
            { label: "LIGHT", value: light },
            { label: "SENSITIVITY", value: sensitivity },
            { label: "FERROUS", value: ferrous },
          ].map(({ label, value }) => (
            <div key={label}>
              <p className="text-xs font-semibold tracking-widest text-gray-400">{label}</p>
              <p className="text-xl sm:text-2xl font-bold">{value}</p>
            </div>
          ))}
        </div>

        {/* Volume Bars */}
        <div className="flex space-x-1 justify-center flex-wrap">
          {Array.from({ length: 20 }, (_, i) => (
            <div
              key={i}
              className={`h-3 w-3 sm:h-4 sm:w-4 rounded-md transition-all duration-200 ${
                i < volume
                  ? i < 6
                    ? "bg-green-400"
                    : "bg-red-400"
                  : "bg-gray-700"
              }`}
            />
          ))}
        </div>

        {/* Controls */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
          {[
            { label: "Volume", onIncrease: increaseVolume, onDecrease: decreaseVolume },
            { label: "Light", onIncrease: increaseLight, onDecrease: decreaseLight },
            {
              label: "Sensitivity",
              onIncrease: increaseSensitivity,
              onDecrease: decreaseSensitivity,
            },
          ].map(({ label, onIncrease, onDecrease }) => (
            <div key={label} className="flex justify-center space-x-2">
              <button
                onClick={onDecrease}
                className="px-3 py-1 bg-blue-600 text-white rounded-lg hover:bg-blue-700 shadow-sm"
              >
                -
              </button>
              <button
                onClick={onIncrease}
                className="px-3 py-1 bg-blue-600 text-white rounded-lg hover:bg-blue-700 shadow-sm"
              >
                +
              </button>
            </div>
          ))}
          <div>
            {/* Ferrous Toggle */}
            <button
              onClick={toggleFerrous}
              className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 shadow-sm w-full"
            >
              {ferrous === "OFF" ? "Turn On" : "Turn Off"}
            </button>
          </div>
        </div>

        {/* Enter Button */}
        <button
          onClick={navigateToSelected}
          className="mt-4 px-8 py-3 bg-green-500 text-white rounded-lg shadow-lg hover:bg-green-600 w-full text-center"
        >
          Enter
        </button>
      </div>
    </div>
  );
};

export default ControlPanel;
