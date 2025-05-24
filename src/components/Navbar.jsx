import React, { useState, useEffect } from "react";
import { HiMenuAlt3, HiX } from "react-icons/hi"; // for mobile menu toggle

const Navbar = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const controlNavbar = () => {
      if (typeof window !== "undefined") {
        if (window.scrollY > lastScrollY && window.scrollY > 80) {
          setIsVisible(false);
        } else {
          setIsVisible(true);
        }
        setLastScrollY(window.scrollY);
      }
    };

    if (typeof window !== "undefined") {
      window.addEventListener("scroll", controlNavbar);
      return () => window.removeEventListener("scroll", controlNavbar);
    }
  }, [lastScrollY]);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false); // close menu on click (mobile)
  };

  return (
    <div
      className={`w-full fixed z-[999] transition-transform duration-500 ease-in-out font-['Neue Montreal'] ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="bg-white/90 backdrop-blur-lg shadow-xl border-b border-gray-200/50">
        <div className="px-5 sm:px-8 py-4 flex justify-between items-center max-w-7xl mx-auto">
          {/* Logo Section */}
          <div className="flex items-center gap-3">
            <img
              className="w-12 h-12 sm:w-16 sm:h-16 object-contain drop-shadow-sm"
              src="src/assets/images/logo.png"
              alt="Scasys Logo"
            />
            <h1 className="font-bold text-xl sm:text-2xl text-blue-900 tracking-tight">
              Scasys
            </h1>
          </div>

          {/* Hamburger Menu (Mobile) */}
          <div className="block lg:hidden">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-3xl text-blue-900"
              aria-label="Toggle Menu"
            >
              {menuOpen ? <HiX /> : <HiMenuAlt3 />}
            </button>
          </div>

          {/* Navigation Links - Desktop */}
          <div className="hidden lg:flex items-center gap-12">
            {["How we work", "Our Services", "Our Projects", "Why Us"].map(
              (item, idx) => (
                <button
                  key={idx}
                  onClick={() => scrollToSection(item)}
                  className="text-gray-700 hover:text-blue-900 font-medium text-base capitalize transition-all duration-300 relative group py-2"
                >
                  {item}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-900 transition-all duration-300 group-hover:w-full"></span>
                </button>
              )
            )}

            <a
              href="#Contact"
              className="ml-8 px-6 py-2 bg-blue-900 text-white font-semibold text-base capitalize rounded-full hover:bg-blue-800 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Contact
            </a>
          </div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="lg:hidden px-6 pt-4 pb-6 flex flex-col gap-4 bg-white shadow-md border-t border-gray-200">
            {["How we work", "Our Services", "Our Projects", "Why Us"].map(
              (item, idx) => (
                <button
                  key={idx}
                  onClick={() => scrollToSection(item)}
                  className="text-gray-700 hover:text-blue-900 font-medium text-lg text-left"
                >
                  {item}
                </button>
              )
            )}

            <a
              href="#Contact"
              onClick={() => setMenuOpen(false)}
              className="w-full mt-2 px-6 py-3 bg-blue-900 text-white text-center font-semibold text-base capitalize rounded-full hover:bg-blue-800 transition-all duration-300 shadow"
            >
              Contact
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
