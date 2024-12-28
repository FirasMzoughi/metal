"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation"; // Import useRouter for navigation
import Image from "next/image";
import p3 from "@/assets/p3.png";


const BluetoothPage = () => {
  const [isConnected, setIsConnected] = useState(false);
  const [deviceName, setDeviceName] = useState("");
  const router = useRouter(); // Initialize router

  const connectBluetooth = async () => {
    try {
      const device = await navigator.bluetooth.requestDevice({
        acceptAllDevices: true,
      });
      setDeviceName(device.name || "Unknown Device");
      setIsConnected(true);
    } catch (error) {
      console.error("Bluetooth connection failed:", error);
      setIsConnected(false);
    }
  };

  const disconnectBluetooth = () => {
    setIsConnected(false);
    setDeviceName("");
  };

  // Redirect when connected
  useEffect(() => {
    if (isConnected) {
      router.push("/selected"); // Replace "/selected" with your target route
    }
  }, [isConnected, router]);

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-black">
      <h1 className="text-4xl font-bold text-white mb-8">Connecting the Device</h1>
      <div className="flex items-center space-x-8">
        <div className="p-4 rounded-full shadow-lg">
          <Image
            src={p3} // Ensure this is the correct path in your public folder
            alt="Bluetooth Icon"
            className="w-16 h-16"
            width={500}
            height={300}
          />
        </div>
        {isConnected ? (
          <div className="text-center">
            <p className="text-xl text-green-500 font-bold">Connected</p>
            <p className="text-white">Device: {deviceName}</p>
          </div>
        ) : (
          <div className="text-center">
            <p className="text-xl text-red-500 font-bold">Not Connected</p>
          </div>
        )}
      </div>
      <div className="flex space-x-4 mt-8">
        <button
          onClick={disconnectBluetooth}
          className="px-4 py-2 bg-green-500 text-black font-bold rounded-lg shadow hover:bg-green-600"
        >
          BACK
        </button>
        <button
          onClick={connectBluetooth}
          className="px-4 py-2 bg-green-500 text-black font-bold rounded-lg shadow hover:bg-green-600"
        >
          TRY AGAIN
        </button>
      </div>
    </div>
  );
};

export default BluetoothPage;
