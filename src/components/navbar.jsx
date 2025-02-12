import { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
  
    return (
      <nav className="bg-[#500000] fixed top-0 left-0 w-full shadow-md z-50">
        <div className="container mx-auto flex justify-between items-center p-4">
          {/* Logo */}
          <Link to="/" className="text-white text-2xl font-bold">
            MyApp
          </Link>
  
          {/* Hamburger Menu (for mobile) */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white md:hidden focus:outline-none"
          >
            ☰ {/* Hamburger icon */}
          </button>
  
          {/* Links (Desktop: Always visible | Mobile: Hidden until clicked) */}
          <ul
            className={`absolute md:relative top-16 left-0 w-full bg-blue-600 md:bg-transparent md:flex md:space-x-6 text-white text-center md:text-left ${
              isOpen ? "block" : "hidden"
            } md:block`}
          >
            <li>
              <Link to="/login" className="block py-2 px-4 hover:bg-blue-700 md:hover:bg-transparent">
                Login
              </Link>
            </li>
            <li>
              <Link to="/dashboard" className="block py-2 px-4 hover:bg-blue-700 md:hover:bg-transparent">
                Dashboard
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    );
}

export default Navbar;
