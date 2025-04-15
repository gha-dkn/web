
import React from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";

const Navbar = () => {
  const location = useLocation();

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <nav className="bg-white shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="text-xl font-bold text-blue-900">
            Tax Pro Services
          </Link>
          <div className="hidden md:flex space-x-8">
            <Link
              to="/"
              className={`${
                isActive("/") ? "text-blue-600" : "text-gray-600"
              } hover:text-blue-600 transition-colors relative`}
            >
              {isActive("/") && (
                <motion.div
                  layoutId="underline"
                  className="absolute left-0 right-0 h-0.5 bg-blue-600 bottom-[-4px]"
                />
              )}
              Home
            </Link>
            <Link
              to="/services"
              className={`${
                isActive("/services") ? "text-blue-600" : "text-gray-600"
              } hover:text-blue-600 transition-colors relative`}
            >
              {isActive("/services") && (
                <motion.div
                  layoutId="underline"
                  className="absolute left-0 right-0 h-0.5 bg-blue-600 bottom-[-4px]"
                />
              )}
              Our Services
            </Link>
            <Link
              to="/about"
              className={`${
                isActive("/about") ? "text-blue-600" : "text-gray-600"
              } hover:text-blue-600 transition-colors relative`}
            >
              {isActive("/about") && (
                <motion.div
                  layoutId="underline"
                  className="absolute left-0 right-0 h-0.5 bg-blue-600 bottom-[-4px]"
                />
              )}
              About Us
            </Link>
            <Link
              to="/contact"
              className={`${
                isActive("/contact") ? "text-blue-600" : "text-gray-600"
              } hover:text-blue-600 transition-colors relative`}
            >
              {isActive("/contact") && (
                <motion.div
                  layoutId="underline"
                  className="absolute left-0 right-0 h-0.5 bg-blue-600 bottom-[-4px]"
                />
              )}
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
