import React from "react";
import { Link } from "react-router-dom";
import { ShoppingCartIcon } from "@heroicons/react/24/solid";

const Navbar = () => {
  return (
    <nav className="bg-purple-900 text-white shadow-md fixed-bottom">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">

          {/* Logo */}
          <div className="flex items-center space-x-2">
            <ShoppingCartIcon className="h-7 w-7" />
            <Link to="/" className="text-xl font-bold hover:text-purple-200">
              Soko
            </Link>
          </div>

          {/* Navigation Links */}
          <div className="flex space-x-8">
            <Link to="/products" className="hover:text-purple-200">
              Products
            </Link>

            <Link to="/sales" className="hover:text-purple-200">
              Sales
            </Link>

            <Link  to="/purchases" className="hover:text-purple-200">
              Purchases
            </Link>

            <Link  to="/stocks" className="hover:text-purple-200">
              Stocks
            </Link>
          </div>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;
