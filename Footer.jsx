
import React from "react";
import { Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-blue-900 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-center md:text-left mb-4 md:mb-0">
            <h3 className="text-xl font-bold mb-2">Tax Pro Services</h3>
            <p className="text-blue-200">Professional Tax Solutions</p>
          </div>
          <div className="flex items-center space-x-4">
            <Phone className="w-5 h-5" />
            <span>1-800-TAX-HELP</span>
          </div>
        </div>
        <div className="text-center mt-8 text-blue-200">
          <p>&copy; 2025 Tax Pro Services. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
