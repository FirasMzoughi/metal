"use client";

import React, { useState, useEffect } from "react";

const MovingInterface = () => {
  const [graphPosition, setGraphPosition] = useState(0);
  const [percentages, setPercentages] = useState({
    cavity: 0,
    metal: 90,
    ferrus: 0,
    nonFerrus: 60,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setGraphPosition((prev) => (prev + 5) % 100);

      setPercentages({
        cavity: Math.floor(Math.random() * 100),
        metal: Math.floor(Math.random() * 100),
        ferrus: Math.floor(Math.random() * 100),
        nonFerrus: Math.floor(Math.random() * 100),
      });
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-blue-900 flex items-center justify-center text-white font-mono">
      <div className="bg-blue-700 rounded-xl shadow-lg p-4 w-full max-w-4xl space-y-4 border border-blue-500">
        {/* Header Section */}
        <div className="grid grid-cols-4 gap-2 text-center text-sm font-bold">
          <div className="p-2 bg-blue-600 rounded-lg">VOLUME<br />3</div>
          <div className="p-2 bg-blue-600 rounded-lg">LIGHT<br />7</div>
          <div className="p-2 bg-blue-600 rounded-lg">SENSITIVITY<br />8</div>
          <div className="p-2 bg-blue-600 rounded-lg">FERROUS<br />OFF</div>
        </div>

        {/* Graph Section */}
        <div className="relative bg-black h-16 rounded-lg border border-gray-500 overflow-hidden">
          <div className="absolute bg-red-600 h-8 w-1/4 rounded-full transform -translate-y-1/2" 
            style={{
              left: `${graphPosition}%`,
              top: "50%",
              transition: "left 0.5s ease",
            }}
          ></div>
        </div>

        {/* Labels Section */}
        <div className="flex justify-between text-sm font-bold">
          <div className="bg-blue-600 text-center py-1 px-2 rounded">METAL</div>
          <div className="bg-blue-600 text-center py-1 px-2 rounded">CAVITY</div>
        </div>

        {/* Bar Section */}
        <div className="grid grid-cols-4 gap-2 text-center">
          {Object.entries(percentages).map(([key, value]) => (
            <div key={key} className="space-y-1">
              <div className="h-32 bg-black rounded-lg border border-gray-500 relative flex items-end">
                <div
                  style={{
                    height: `${value}%`,
                    backgroundColor:
                      key === "cavity"
                        ? "blue"
                        : key === "metal"
                        ? "red"
                        : key === "ferrus"
                        ? "gray"
                        : "yellow",
                  }}
                  className="w-full rounded-t-lg transition-all"
                ></div>
              </div>
              <span className="text-white text-xs">{value}%</span>
              <span className="uppercase text-xs">{key}</span>
            </div>
          ))}
        </div>

        {/* Battery Section */}
        <div className="flex justify-center items-center mt-4">
          <div className="relative bg-green-500 w-32 h-8 rounded-lg border border-gray-500">
            <span className="absolute inset-0 flex items-center justify-center font-bold text-black">
              100%
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovingInterface;
