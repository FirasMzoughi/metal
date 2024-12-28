"use client";

import React, { useState } from "react";
import { useSearchParams } from "next/navigation";
import Image from "next/image";

const MeasurementPage: React.FC = () => {
  const [width, setWidth] = useState<number>(1);
  const [length, setLength] = useState<number>(0);
  const searchParams = useSearchParams();
  const deviceName = searchParams.get("name") || "Unknown Device";
  const deviceImage = searchParams.get("image");

  // Increase or decrease width and length
  const increaseWidth = () => setWidth((prev) => Math.min(prev + 1, 10));
  const decreaseWidth = () => setWidth((prev) => Math.max(prev - 1, 0));
  const increaseLength = () => setLength((prev) => Math.min(prev + 1, 10));
  const decreaseLength = () => setLength((prev) => Math.max(prev - 1, 0));

  return (
    <div className="min-h-screen bg-blue-900 flex items-center justify-center text-white font-sans">
      <div className="bg-blue-800 rounded-lg shadow-lg p-6 w-full max-w-xl space-y-4">
        {/* Battery and Coil Section */}
        <div className="grid grid-cols-2 gap-4">
          {/* Battery Section */}
          <div className="bg-black p-4 rounded">
            <div className="w-full h-12 bg-green-500 rounded-lg overflow-hidden relative">
              <div className="absolute top-0 left-0 bg-yellow-500 h-full" style={{ width: "25%" }} />
            </div>
            <p className="text-center text-lg font-bold mt-2">%100</p>
          </div>

          {/* Coil Section */}
          <div className="bg-black p-4 rounded">
            <div className="flex items-center justify-center h-12">
              <Image
                src={deviceImage || "/placeholder-image.png"}
                alt={deviceName}
                className="rounded-lg shadow-lg mb-6 h-10"
                width={300}
                height={300}
              />
            </div>
            <p className="text-center text-lg font-bold mt-2">T44</p>
            <p className="text-center text-sm">Search Coil Detected</p>
            <p className="text-center text-sm">36 x 44 cm</p>
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
          <div className="bg-black p-4 rounded text-center">
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
          <div className="bg-black p-4 rounded text-center">
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

          {/* How to Measure */}
          <div className="bg-black p-4 rounded text-center">
            <p className="font-bold text-lg">Enter Dimensions</p>
            <div className="flex items-center justify-center mt-4">
              <div className="w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center text-black text-2xl font-bold">
                ?
              </div>
            </div>
          </div>
        </div>

        {/* Instructions */}
        <p className="text-center text-sm mt-4">
          Measure the dimensions of the target signal. Enter the dimensions by
          using - or + and press "OK".
        </p>
      </div>
    </div>
  );
};

export default MeasurementPage;
