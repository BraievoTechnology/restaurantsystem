"use client";

import React from "react";
import Image from "next/image";
import { FaFacebookF, FaInstagram, FaTripadvisor } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer: React.FC = () => {
  return (
    <footer className="relative bg-[#0d2e34] text-gray-300 font-sans pt-50">
      {/* Background Image with Overlay */}
      <div className="absolute bottom-0 left-0 z-10 hidden pointer-events-none lg:block">
        <Image
          src="/Images/bgfooter.png" // Replace with your actual image path
          alt="Left decorative image"
          width={778}
          height={778}
          className="opacity-45"
        />
      </div>

      <div className="absolute top-0 z-10 hidden -mt-0 pointer-events-none lg:block -right-0">
        <Image
          src="/Images/pngtree.png"
          alt="Decorative leaves"
          width={382}
          height={382}
          className="opacity-60"
        />
      </div>

      {/* Main Content */}
      <div className="container relative z-20 px-10 mx-auto lg:px-8">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Column 1: Logo & Socials */}
          <div className="flex flex-col -mt-10 ">
            <div className="flex items-center mb-2">
              <Image
                src="/Images/logoIcon.png"
                alt="Just Meal Logo"
                width={120}
                height={120}
              />
              <span
                className="ml-3 font-serif text-4xl text-white"
                style={{ fontFamily: "cursive" }}
              >
                Just Meal
              </span>
            </div>
            <p className="mb-6 text-sm leading-relaxed text-gray-400">
              Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit. Etiam
              Quis Felis Malesuada Felis Suscipit Posuere.
            </p>
            <div className="flex gap-3">
              <a
                href="#"
                aria-label="Facebook"
                className="text-white hover:text-[#B08D57] transition-colors duration-300"
              >
                <FaFacebookF size={20} />
              </a>
              <a
                href="#"
                aria-label="Instagram"
                className="text-white hover:text-[#B08D57] transition-colors duration-300"
              >
                <FaInstagram size={20} />
              </a>
              <a
                href="#"
                aria-label="X"
                className="text-white hover:text-[#B08D57] transition-colors duration-300"
              >
                <FaXTwitter size={20} />
              </a>
              <a
                href="#"
                aria-label="Tripadvisor"
                className="text-white hover:text-[#B08D57] transition-colors duration-300"
              >
                <FaTripadvisor size={20} />
              </a>
            </div>
          </div>

          {/* Column 2: Contact Info */}
          <div className="ml-20">
            <h3 className="mb-6 font-serif text-2xl text-white">
              Contact Info
            </h3>
            <ul className="space-y-3 text-sm text-gray-400">
              <li>HelloMeal Restaurant</li>
              <li>(123)-432-4564</li>
              <li>info@gmail.com</li>
              <li>23, 4th Street, Kaluthara, Srilanka</li>
            </ul>
          </div>

          {/* Column 3: Quick Links */}
          <div className="ml-20">
            <h3 className="mb-6 font-serif text-2xl text-white">Quick Links</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-[#B08D57] transition-colors duration-300"
                >
                  Reservations
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-[#B08D57] transition-colors duration-300"
                >
                  Who Are We
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-[#B08D57] transition-colors duration-300"
                >
                  Meals
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-[#B08D57] transition-colors duration-300"
                >
                  FAQ's
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Opening Hours */}
          <div className="lg:pl-8">
            <h3 className="mb-6 font-serif text-2xl text-white">
              Opening Hours
            </h3>
            <ul className="space-y-3 text-sm text-gray-400">
              <li>Monday - Friday : 8AM - 10PM</li>
              <li>Saturday : 8AM - 4PM</li>
              <li>Sunday & Public Holidays : Closed</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="relative z-20 mt-16 border-t border-white/10">
        <div className="container flex flex-col items-center justify-between px-6 py-6 mx-auto text-xs text-gray-500 lg:px-8 sm:flex-row">
          <p>Justhotels BraiEvo Themes © 2025. All Rights Reserved.</p>
          <p className="mt-4 sm:mt-0">
            Developed By{" "}
            <a href="#" className="transition-colors hover:text-white">
              barievo.com
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
