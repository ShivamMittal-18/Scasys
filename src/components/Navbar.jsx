import React, { useState, useEffect } from "react";
// Removed react-icons import as it's causing resolution issues in this environment.
// import { HiMenuAlt3, HiX } from "react-icons/hi"; // This line was removed

const Navbar = ({ loading }) => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    // Function to control the visibility of the navbar based on scroll direction
    const controlNavbar = () => {
      // Hide navbar if scrolling down and past 80px from top
      if (window.scrollY > lastScrollY && window.scrollY > 80) {
        setIsVisible(false);
      } else {
        // Show navbar if scrolling up or near the top
        setIsVisible(true);
      }
      // Update the last scroll position
      setLastScrollY(window.scrollY);
    };

    // Add scroll event listener when component mounts
    window.addEventListener("scroll", controlNavbar);
    // Clean up event listener when component unmounts
    return () => window.removeEventListener("scroll", controlNavbar);
  }, [lastScrollY]); // Re-run effect if lastScrollY changes

  // Function to scroll to a specific section by ID
  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" }); // Smooth scroll
    setMenuOpen(false); // Close the mobile menu after clicking a link
  };

  // Inline SVG for Hamburger icon (HiMenuAlt3 equivalent)
  const HamburgerIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      className="w-8 h-8"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
      />
    </svg>
  );

  // Inline SVG for Close icon (HiX equivalent)
  const CloseIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      className="w-8 h-8"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M6 18L18 6M6 6l12 12"
      />
    </svg>
  );

  return (
    <>
      {/* Tailwind CSS and custom animation styles */}
      <style>
  {`
    @keyframes slideIn {
      from {
        transform: translateY(-100%);
        opacity: 0;
      }
      to {
        transform: translateY(0);
        opacity: 1;
      }
    }
    .animate-slide-in {
      animation: slideIn 0.5s ease-out forwards;
    }
  `}
</style>


      {/* Main Navbar Container */}
    <div className={`w-full start fixed z-[999] transition-transform duration-500 ease-in-out ${isVisible ? "translate-y-0 animate-slide-in" : "-translate-y-full"}`}>

        <div className={`${loading ? "bg-transparent" : "backdrop-blur-lg bg-white/60"} transition-colors duration-500`}>

          <div className="px-5 sm:px-8 py-4 flex justify-between items-center max-w-7xl mx-auto">
            {/* Logo Section */}
            <div className="flex items-center gap-3">
              <img
                className="w-12 h-12 sm:w-16 sm:h-16 object-contain drop-shadow-sm"
                src="\assets\images\logo.png"
                alt="Scasys Logo"
              />
              <h1 className="font-bold text-xl sm:text-2xl text-blue-900 tracking-tight">
                Scasys
              </h1>
            </div>

            {/* Hamburger Icon for Mobile */}
            <div className="block lg:hidden">
              <button
                onClick={() => setMenuOpen(!menuOpen)} // Toggles mobile menu visibility
                className="text-3xl text-blue-900 focus:outline-none" // Focus outline removed for better UX
                aria-label="Toggle Menu"
              >
                {menuOpen ? <CloseIcon /> : <HamburgerIcon />} {/* Changes icon based on menu state */}
              </button>
            </div>

            {/* Desktop Menu Navigation */}
            <div className="hidden lg:flex items-center gap-12">
              {["How we work", "Our Services", "Our Projects", "Why Us"].map(
                (item, idx) => (
                  <button
                    key={idx}
                    onClick={() => scrollToSection(item)} // Scrolls to section on click
                    className="text-gray-700 hover:text-blue-900 font-semibold text-base capitalize transition-all duration-300 relative group py-2"
                  >
                    {item}
                    {/* Underline animation on hover */}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-900 transition-all duration-300 group-hover:w-full"></span>
                  </button>
                )
              )}

              {/* Contact Button for Desktop */}
              <a
                href="#Contact"
                className="ml-8 px-6 py-2 bg-blue-900 text-white font-semibold text-base capitalize rounded-full hover:bg-blue-800 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Contact
              </a>
            </div>
          </div>

          {/* Mobile Menu with Slide-in Animation */}
          {menuOpen && (
            <div className="lg:hidden px-6 pt-4 pb-6 flex flex-col gap-4 bg-white shadow-md border-t border-gray-200 animate-slide-in">
              {["How we work", "Our Services", "Our Projects", "Why Us"].map(
                (item, idx) => (
                  <button
                    key={idx}
                    onClick={() => scrollToSection(item)} // Scrolls to section on click
                    className="text-gray-700 hover:text-blue-900 font-semibold text-lg text-left py-2" // Added padding for better touch target
                  >
                    {item}
                  </button>
                )
              )}

              {/* Contact Button for Mobile */}
              <a
                href="#Contact"
                onClick={() => setMenuOpen(false)} // Closes menu on click
                className="w-full mt-2 px-6 py-3 bg-blue-900 text-white text-center font-semibold text-base capitalize rounded-full hover:bg-blue-800 transition-all duration-300 shadow"
              >
                Contact
              </a>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Navbar;
