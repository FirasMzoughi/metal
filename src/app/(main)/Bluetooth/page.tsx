"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation"; // Import useRouter for navigation
import Image from "next/image";
import p3 from "@/assets/p3.png";

const BluetoothPage = () => {
  const [isConnected, setIsConnected] = useState(false);
  const [deviceName, setDeviceName] = useState("");
  const [isBluetoothAvailable, setIsBluetoothAvailable] = useState(false); // Track Bluetooth support
  const [isConnecting, setIsConnecting] = useState(false); // Track connection status
  const router = useRouter(); // Initialize router

  // Check if Bluetooth is available on client side
  useEffect(() => {
    if (typeof navigator !== "undefined" && "bluetooth" in navigator) {
      setIsBluetoothAvailable(true); // Bluetooth is available in this browser
    }
  }, []);

  const connectBluetooth = () => {
    if (!isBluetoothAvailable) {
      console.error("Bluetooth is not supported in this environment.");
      return;
    }

    setIsConnecting(true); // Indicate the connection is in progress

    // Add a delay of 3 seconds before connecting
    setTimeout(async () => {
      try {
        const device = await navigator.bluetooth.requestDevice({
          acceptAllDevices: true,
        });
        setDeviceName(device.name || "Unknown Device");
        setIsConnected(true);
      } catch (error) {
        console.error("Bluetooth connection failed:", error);
        setIsConnected(false);
      } finally {
        setIsConnecting(false); // Reset connecting state
      }
    }, 3000);
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
            {isConnecting && (
              <p className="text-white">Attempting to connect...</p>
            )}
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
          disabled={isConnecting} // Disable button while connecting
        >
          {isConnecting ? "Connecting..." : "TRY AGAIN"}
        </button>
      </div>
      {/* Display message if Bluetooth is not supported */}
      {!isBluetoothAvailable && (
        <p className="text-red-500 text-xl mt-4">
          Bluetooth is not supported in this environment.
        </p>
      )}
    </div>
  );
};

export default BluetoothPage;
