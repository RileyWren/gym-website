import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react"; // optional icons
import gymLogo from "../assets/gym.svg"; // your logo
import Button from "./Button";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = ["Home", "Services", "Pricing", "Contact"];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 text-white  sm:text-2xl md:text-6xl">
      <div className="max-w-7xl mx-auto flex justify-between items-center p-4 ">
        {/* Logo */}
        <a href="#" className="flex items-center space-x-2">
          <img src={gymLogo} alt="Logo" className="h-20" />
        </a>

        {/* Desktop Links */}
        <ul className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <li key={link}>
              <a href="#" cla className="text-base sm:text-2xl md:text-2xl mr-3.5 hover:text-gray-300 transition">{link}</a>
            </li>
          ))}
          <li>
          <Button content='Start 7 day free trial'/>
          </li>
        </ul>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden focus:outline-none"
        >
          {isOpen ? <X size={24} /> : <Menu size={45} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.ul
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="flex flex-col md:hidden px-6 pt-2 pb-4 bg-transparent text-white "
          >
            {navLinks.map((link) => (
              <li key={link} className="py-2 border-b border-white/20 ">
                <a href="#" className="block">{link}</a>
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
