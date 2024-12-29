"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation"; // For navigation
import Image from "next/image";
import p3 from "@/assets/p3.png";

const BluetoothPage = () => {
  const [isConnected, setIsConnected] = useState(false);
  const [deviceName, setDeviceName] = useState("");
  const [isBluetoothAvailable, setIsBluetoothAvailable] = useState(false); // Track Bluetooth support
  const [errorMessage, setErrorMessage] = useState(""); // Track errors
  const router = useRouter(); // Initialize router

  // Check Bluetooth availability
  useEffect(() => {
    if (navigator?.bluetooth) {
      setIsBluetoothAvailable(true);
    } else {
      setErrorMessage("Bluetooth is not supported in this environment.");
    }
  }, []);

  const connectBluetooth = async () => {
    if (!isBluetoothAvailable) {
      setErrorMessage("Bluetooth is not supported on this device or browser.");
      return;
    }

    setErrorMessage(""); // Clear any previous error messages
    setTimeout(async () => {
      try {
        const device = await navigator.bluetooth.requestDevice({
          acceptAllDevices: true,
        });
        setDeviceName(device.name || "Unknown Device");
        setIsConnected(true);
      } catch (error) {
        setErrorMessage("Failed to connect to Bluetooth device. Please try again.");
        setIsConnected(false);
      }
    }, 3000); // Add 3-second delay
  };

  const disconnectBluetooth = () => {
    setIsConnected(false);
    setDeviceName("");
    setErrorMessage("");
  };

  // Redirect after connection
  useEffect(() => {
    if (isConnected) {
      router.push("/selected"); // Replace with your actual route
    }
  }, [isConnected, router]);

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-black">
      <h1 className="text-4xl font-bold text-white mb-8">Connecting the Device2</h1>
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
      {/* Display error message */}
      {errorMessage && (
        <p className="text-red-500 text-xl mt-4">
          {errorMessage}
        </p>
      )}
    </div>
  );
};

export default BluetoothPage;
