import React from "react";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-gray-500 text-sm">
              CS396 Project - Text-to-Image Generative AI
            </p>
          </div>
          <div className="flex space-x-6">
            <Link
              to="/introduction"
              className="text-gray-400 hover:text-gray-500"
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
