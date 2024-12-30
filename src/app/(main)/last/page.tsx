"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import p1 from "@/assets/p1.jpg";
import p2 from "@/assets/p2.jpg";

const MeasurementPage: React.FC = () => {
  const [width, setWidth] = useState<number>(1);
  const [length, setLength] = useState<number>(0);
  const [deviceName, setDeviceName] = useState<string>("Unknown Device");
  const [deviceImage, setDeviceImage] = useState<string | null>(null);
  const [lines, setLines] = useState<number>(5);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    setDeviceName(params.get("name") || "Unknown Device");
    setDeviceImage(params.get("image"));
  }, []);

  const increaseWidth = () => setWidth((prev) => Math.min(prev + 1, 10));
  const decreaseWidth = () => setWidth((prev) => Math.max(prev - 1, 0));
  const increaseLength = () => setLength((prev) => Math.min(prev + 1, 10));
  const decreaseLength = () => setLength((prev) => Math.max(prev - 1, 0));

  const addLine = () => {
    setLines((prev) => Math.min(prev + 2, 20));
  };

  const removeLine = () => {
    setLines((prev) => Math.max(prev - 2, 0));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-800 via-gray-900 to-black flex items-center justify-center text-white font-sans">
      <div className="bg-gray-900 rounded-lg shadow-lg p-6 w-full max-w-xl space-y-6">
        {/* Header Section */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-lg font-bold">{deviceName}</h1>
            <p className="text-sm text-gray-400">Dimensions Measurement</p>
          </div>
          {/* <Image
            src={p1}
            alt={deviceName}
            className="rounded-lg shadow-lg"
            width={80}
            height={80}
          /> */}
        </div>

        {/* Battery and Coil Section */}
        <div className="flex justify-between items-center">
          {/* Second Picture (Left) */}
          <div className="text-center">
            <Image
              src={p2}
              alt="Battery"
              className="rounded-lg shadow-lg"
              width={80}
              height={80}
            />
            <p className="text-center text-lg font-bold mt-2">%100</p>
          </div>

          {/* First Picture (Right) */}
          <Image
            src={deviceImage || p1}
            alt={deviceName}
            className="rounded-lg shadow-lg"
            width={80}
            height={80}
          />
        </div>
        
        {/* Bar Graph Section */}
        {/* Bar Graph Section */}
<div className="flex flex-col items-center space-y-4">
  <div
    className="flex flex-wrap justify-center gap-2"
    style={{ maxWidth: "260px" }} // Adjust the max-width to fit 10 items per row
  >
    {Array.from({ length: lines }, (_, i) => (
      <div
        key={i}
        className={`h-6 w-6 rounded ${
          i < 6
            ? "bg-green-500 hover:bg-green-600" // Green for first 6 lines
            : "bg-red-500 hover:bg-red-600"    // Red for lines beyond 6
        }`}
      />
    ))}
  </div>
  <div className="flex space-x-4">
    <button
      className="px-4 py-2 rounded bg-blue-500 hover:bg-blue-600 text-white font-bold"
      onClick={addLine}
      disabled={lines === 20}
    >
      +
    </button>
    <button
      className="px-4 py-2 rounded bg-blue-500 hover:bg-blue-600 text-white font-bold"
      onClick={removeLine}
      disabled={lines === 0}
    >
      -
    </button>
  </div>
</div>


        {/* Measurement Section */}
        <div className="grid grid-cols-2 gap-4">
          {/* Length Control (Left) */}
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

          {/* Width Control (Right) */}
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
        </div>

        {/* Footer Instructions */}
        <p className="text-center text-sm text-gray-400">
          Use the buttons to adjust the dimensions and add or remove lines.
        </p>
      </div>
    </div>
  );
};

export default MeasurementPage;
