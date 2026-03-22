import React from "react";
import { Link } from "react-router-dom";
import {ShoppingCartIcon,} from "@heroicons/react/24/solid";
import {EnvelopeIcon,PhoneIcon,} from "@heroicons/react/24/outline";

const Footer = () => {
  return (
    <footer className="bg-purple-900 text-purple-100 mt-10">
      <div className="max-w-7xl mx-auto px-6 py-10">

        {/* Grid */}
        <div className="grid md:grid-cols-4 gap-8">

          {/* Brand */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <ShoppingCartIcon className="h-7 w-7" />
              <Link to="/" className="text-xl font-bold">
                Soko
              </Link>
            </div>

            <p className="text-sm text-purple-300">
              Soko helps businesses manage products, sales,
              purchases and stock easily in one place.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-semibold mb-3">Navigation</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/products" className="hover:text-white">
                  Products
                </Link>
              </li>
              <li>
                <Link to="/sales" className="hover:text-white">
                  Sales
                </Link>
              </li>
              <li>
                <Link to="/purchases" className="hover:text-white">
                  Purchases
                </Link>
              </li>
              <li>
                <Link to="/stocks" className="hover:text-white">
                  Stocks
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold mb-3">Contact</h3>

            <div className="flex items-center space-x-2 text-sm mb-2">
              <EnvelopeIcon className="h-5 w-5" />
              <span>support@soko.com</span>
            </div>

            <div className="flex items-center space-x-2 text-sm">
              <PhoneIcon className="h-5 w-5" />
              <span>+254 700 000 000</span>
            </div>
          </div>

          {/* Social */}
          <div>
            <h3 className="font-semibold mb-3">Follow Us</h3>

            <div className="flex space-x-4 text-sm">
              <a href="https://www.facebook.com/" className="hover:text-white">
                Facebook
              </a>
              <a href="https://x.com/" className="hover:text-white">
                Twitter
              </a>
              <a href="https://www.instagram.com/" className="hover:text-white">
                Instagram
              </a>
              <a href="https://www.linkedin.com/" className="hover:text-white">
                LinkedIn
              </a>
            </div>
          </div>

        </div>

        {/* Divider */}
        <div className="border-t border-purple-700 mt-8 pt-6 text-center text-sm text-purple-300">
          © {new Date().getFullYear()} Soko. All rights reserved.
        </div>

      </div>
    </footer>
  );
};

export default Footer;
