"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import p3 from "@/assets/p3.png";

const BluetoothPage = () => {
  const [isConnected, setIsConnected] = useState(false);
  const [deviceName, setDeviceName] = useState("");
  const [isBluetoothAvailable, setIsBluetoothAvailable] = useState(false);
  const [isMobileUnsupported, setIsMobileUnsupported] = useState(false);
  const [isConnecting, setIsConnecting] = useState(false);
  const router = useRouter();

  useEffect(() => {
    if (typeof navigator !== "undefined" && "bluetooth" in navigator) {
      setIsBluetoothAvailable(true);
    } else {
      const userAgent = typeof navigator !== "undefined" ? navigator.userAgent : "";
      const vendor = typeof navigator !== "undefined" ? navigator.vendor : "";
      const isOpera = typeof window !== "undefined" && "opera" in window;
  
      if (/iPhone|iPad|iPod|Android/i.test(userAgent) || /Opera/i.test(vendor) || isOpera) {
        setIsMobileUnsupported(true);
      }
    }
  }, []);
  

  const connectBluetooth = () => {
    if (!isBluetoothAvailable) {
      console.error("Bluetooth is not supported in this environment.");
      return;
    }

    setIsConnecting(true);

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
        setIsConnecting(false);
      }
    }, 3000);
  };

  const disconnectBluetooth = () => {
    setIsConnected(false);
    setDeviceName("");
  };

  useEffect(() => {
    if (isConnected) {
      router.push("/selected");
    }
  }, [isConnected, router]);

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-black">
      <h1 className="text-4xl font-bold text-white mb-8">Connecting the Device</h1>
      <div className="flex items-center space-x-8">
        <div className="p-4 rounded-full shadow-lg">
          <Image
            src={p3}
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
          disabled={isConnecting}
        >
          {isConnecting ? "Connecting..." : "TRY AGAIN"}
        </button>
      </div>
      {!isBluetoothAvailable && !isMobileUnsupported && (
        <p className="text-red-500 text-xl mt-4">
          Bluetooth is not supported in this environment.
        </p>
      )}
      {isMobileUnsupported && (
        <p className="text-red-500 text-xl mt-4">
          Web Bluetooth is not supported on most mobile devices. Please use a
          compatible browser on desktop.
        </p>
      )}
    </div>
  );
};

export default BluetoothPage;
