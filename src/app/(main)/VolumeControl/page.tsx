"use client";

import { useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import Image from "next/image";

const ControlPanel: React.FC = () => {
  const [volume, setVolume] = useState<number>(3);
  const [light, setLight] = useState<number>(7);
  const [sensitivity, setSensitivity] = useState<number>(8);
  const [ferrous, setFerrous] = useState<string>("OFF");

  const searchParams = useSearchParams();
  const deviceName = searchParams.get("name") || "Unknown Device";
  const deviceImage = searchParams.get("image");

  const router = useRouter();

  // Handlers for Volume
  const increaseVolume = () => volume < 20 && setVolume(volume + 2);
  const decreaseVolume = () => volume > 1 && setVolume(volume - 2);

  // Handlers for Light
  const increaseLight = () => light < 9 && setLight(light + 2);
  const decreaseLight = () => light > 1 && setLight(light - 2);

  // Handlers for Sensitivity
  const increaseSensitivity = () =>
    sensitivity < 9 && setSensitivity(sensitivity + 2);
  const decreaseSensitivity = () =>
    sensitivity > 1 && setSensitivity(sensitivity - 2);

  // Toggle Ferrous
  const toggleFerrous = () => setFerrous(ferrous === "OFF" ? "ON" : "OFF");

  // Navigate to `/last` with query params
  const handleEnter = () => {
    const query = new URLSearchParams({
      name: deviceName,
      image: deviceImage || "", // Fallback if image is not available
    }).toString();
    router.push(`/last?${query}`);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-800 via-gray-900 to-black p-4">
      <div className="flex flex-col items-center bg-gray-900 text-white p-4 rounded-lg shadow-lg space-y-6 w-full max-w-sm sm:max-w-md">
        {/* Header Controls */}
        <div className="grid grid-cols-2 gap-4 w-full text-center sm:grid-cols-1">
          {[{ label: "VOLUME", value: volume }, { label: "LIGHT", value: light }, { label: "SENSITIVITY", value: sensitivity }, { label: "FERROUS", value: ferrous }].map(({ label, value }) => (
            <div key={label}>
              <p className="text-xs font-semibold tracking-widest">{label}</p>
              <p className="text-2xl font-bold">{value}</p>
            </div>
          ))}
        </div>

        {/* Display Device Image */}
        <div className="relative">
          <Image
            src={deviceImage || "/placeholder-image.png"}
            alt={deviceName}
            className="rounded-lg shadow-lg mb-6"
            width={300}
            height={300}
          />
          <h2 className="text-xl font-semibold text-center">{deviceName}</h2>
        </div>

        {/* Volume Bars */}
        <div className="flex space-x-1 justify-center flex-wrap">
          {Array.from({ length: 20 }, (_, i) => (
            <div
              key={i}
              className={`h-5 w-5 rounded-md ${i < volume ? (i < 6 ? "bg-green-400" : "bg-red-400") : "bg-gray-700"}`}
            />
          ))}
        </div>

        {/* Buttons */}
        <div className="grid grid-cols-2 gap-4 w-full text-center sm:grid-cols-1">
          {[{ label: "Volume", onIncrease: increaseVolume, onDecrease: decreaseVolume }, { label: "Light", onIncrease: increaseLight, onDecrease: decreaseLight }, { label: "Sensitivity", onIncrease: increaseSensitivity, onDecrease: decreaseSensitivity }].map(({ label, onIncrease, onDecrease }) => (
            <div key={label} className="flex justify-center space-x-2">
              <button
                onClick={onDecrease}
                className="px-3 py-1 bg-blue-600 text-white rounded hover:bg-blue-700"
                aria-label={`Decrease ${label}`}
              >
                -
              </button>
              <button
                onClick={onIncrease}
                className="px-3 py-1 bg-blue-600 text-white rounded hover:bg-blue-700"
                aria-label={`Increase ${label}`}
              >
                +
              </button>
            </div>
          ))}

          {/* Ferrous Toggle */}
          <div>
            <button
              onClick={toggleFerrous}
              className="px-6 py-1 bg-blue-600 text-white rounded hover:bg-blue-700 w-full"
              aria-label={`Turn Ferrous ${ferrous === "OFF" ? "On" : "Off"}`}
            >
              {ferrous === "OFF" ? "Turn On" : "Turn Off"}
            </button>
          </div>
        </div>

        {/* Enter Button */}
        <button
          onClick={handleEnter}
          className="mt-4 px-8 py-2 bg-green-500 text-white rounded hover:bg-green-600 shadow-lg"
        >
          Enter
        </button>
      </div>
    </div>
  );
};

export default ControlPanel;
