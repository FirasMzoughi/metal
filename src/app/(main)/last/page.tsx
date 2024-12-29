"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import p1 from "@/assets/p1.jpg"; // Reusing the image from the previous code

const MeasurementPage: React.FC = () => {
  const [width, setWidth] = useState<number>(1);
  const [length, setLength] = useState<number>(0);
  const [deviceName, setDeviceName] = useState<string>("Unknown Device");
  const [deviceImage, setDeviceImage] = useState<string | null>(null);

  // Extract query parameters on component mount
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    setDeviceName(params.get("name") || "Unknown Device");
    setDeviceImage(params.get("image"));
  }, []);

  // Increase or decrease width and length
  const increaseWidth = () => setWidth((prev) => Math.min(prev + 1, 10));
  const decreaseWidth = () => setWidth((prev) => Math.max(prev - 1, 0));
  const increaseLength = () => setLength((prev) => Math.min(prev + 1, 10));
  const decreaseLength = () => setLength((prev) => Math.max(prev - 1, 0));

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-800 via-gray-900 to-black flex items-center justify-center text-white font-sans">
      <div className="bg-gray-900 rounded-lg shadow-lg p-6 w-full max-w-xl space-y-6">
        {/* Header Section */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-lg font-bold">{deviceName}</h1>
            <p className="text-sm text-gray-400">Dimensions Measurement</p>
          </div>
          <Image
            src={deviceImage || p1}
            alt={deviceName}
            className="rounded-lg shadow-lg"
            width={80}
            height={80}
          />
        </div>

        {/* Battery and Coil Section */}
        <div className="grid grid-cols-2 gap-4">
          {/* Battery Section */}
          <div className="bg-gray-800 p-4 rounded-lg text-center">
            <div className="w-full h-12 bg-green-500 rounded-lg overflow-hidden relative">
              <div className="absolute top-0 left-0 bg-yellow-500 h-full" style={{ width: "25%" }} />
            </div>
            <p className="text-center text-lg font-bold mt-2">%100</p>
          </div>

          {/* Coil Section */}
          <div className="bg-gray-800 p-4 rounded-lg text-center">
            <p className="text-lg font-bold">Search Coil</p>
            <p className="text-sm text-gray-400">36 x 44 cm</p>
          </div>
        </div>

        {/* Bar Graph */}
        <div className="flex items-center justify-center space-x-1">
          {Array.from({ length: 10 }, (_, i) => (
            <div
              key={i}
              className={`h-6 w-6 rounded ${i < 7 ? "bg-green-500" : "bg-gray-700"}`}
            />
          ))}
        </div>

        {/* Measurement Section */}
        <div className="grid grid-cols-3 gap-4">
          {/* Width Control */}
          <div className="bg-gray-800 p-4 rounded-lg text-center">
            <p className="font-bold text-lg">Width</p>
            <p className="text-xl">{width}</p>
            <div className="mt-2 flex justify-center space-x-2">
              <button
                className="bg-blue-500 px-3 py-1 rounded hover:bg-blue-600"
                onClick={decreaseWidth}
                aria-label="Decrease width"
              >
                -
              </button>
              <button
                className="bg-blue-500 px-3 py-1 rounded hover:bg-blue-600"
                onClick={increaseWidth}
                aria-label="Increase width"
              >
                +
              </button>
            </div>
          </div>

          {/* Length Control */}
          <div className="bg-gray-800 p-4 rounded-lg text-center">
            <p className="font-bold text-lg">Length</p>
            <p className="text-xl">{length}</p>
            <div className="mt-2 flex justify-center space-x-2">
              <button
                className="bg-blue-500 px-3 py-1 rounded hover:bg-blue-600"
                onClick={decreaseLength}
                aria-label="Decrease length"
              >
                -
              </button>
              <button
                className="bg-blue-500 px-3 py-1 rounded hover:bg-blue-600"
                onClick={increaseLength}
                aria-label="Increase length"
              >
                +
              </button>
            </div>
          </div>

          {/* Instructions */}
          <div className="bg-gray-800 p-4 rounded-lg text-center">
            <p className="font-bold text-lg">Instructions</p>
            <div className="flex items-center justify-center mt-4">
              <div className="w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center text-black text-2xl font-bold">
                ?
              </div>
            </div>
          </div>
        </div>

        {/* Footer Instructions */}
        <p className="text-center text-sm text-gray-400">
          Use the -/+ buttons to adjust the dimensions. Ensure accurate measurements.
        </p>
      </div>
    </div>
  );
};

export default MeasurementPage;
