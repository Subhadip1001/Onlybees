import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaWhatsapp,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="w-full bg-black text-white px-6 md:px-16">
      {/* Top Divider */}
      <div className="border-t border-gray-700 pt-16 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-start">
          {/* Logo */}
          <div>
            <h1 className="text-4xl font-bold tracking-wide">ONLYBEES.</h1>
          </div>

          {/* Explore */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Explore</h3>
            <ul className="space-y-3 text-gray-400">
              <li className="hover:text-white cursor-pointer">About</li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Support</h3>
            <ul className="space-y-3 text-gray-400">
              <li className="hover:text-white cursor-pointer">Contact us</li>
              <li className="hover:text-white cursor-pointer">Refund</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Divider */}
      <div className="border-t border-gray-700 py-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-sm text-gray-400">
          {/* Copyright */}
          <p className="text-center md:text-left">
            Copyright © Onlybees 2025, KL & Sons - ONLYBEES
          </p>

          {/* Links */}
          <div className="flex gap-6">
            <span className="hover:text-white cursor-pointer">
              Privacy Policy
            </span>
            <span className="hover:text-white cursor-pointer">
              Terms and Conditions
            </span>
          </div>

          {/* Social Icons */}
          <div className="flex gap-4 text-white">
            <a className="hover:text-gray-400 cursor-pointer">
              <FaFacebookF />
            </a>
            <a className="hover:text-gray-400 cursor-pointer">
              <FaInstagram />
            </a>
            <a className="hover:text-gray-400 cursor-pointer">
              <FaLinkedinIn />
            </a>
            <a className="hover:text-gray-400 cursor-pointer">
              <FaWhatsapp />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Thin Line */}
      <div className="border-t border-gray-700 mt-6"></div>
    </footer>
  );
};

export default Footer;
