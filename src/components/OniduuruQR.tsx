import React from "react";
import { ImageProps } from "../utils/models/stores";

const OniduuruQR = ({ isOpen, onClose }:any) => {
  if (!isOpen) return null;
  // https://www.qrcode-monkey.com/

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60 transition-opacity duration-300">
      <div className="relative bg-white rounded-2xl shadow-2xl w-[90%] max-w-sm p-6 animate-fade-in transform scale-95 sm:scale-100 transition-all">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-4 text-gray-400 hover:text-gray-600 text-2xl"
        >
          &times;
        </button>

        {/* Modal Content */}
        <div className="flex flex-col items-center text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-2">Scan to Connect</h2>
          <p className="text-sm text-gray-500 mb-4">Open your camera or QR scanner to connect instantly.</p>
          
          <div className="bg-gray-100 p-4 rounded-xl shadow-inner">
            <img
              src={ImageProps.OniduuruQR}
              alt="Oniduuru QR Code"
              className="w-48 h-48 object-contain rounded-md"
            />
          </div>

          <p className="mt-4 text-xs text-gray-400">Powered by Shoft Africa</p>
        </div>
      </div>
    </div>
  );
};

export default OniduuruQR;
