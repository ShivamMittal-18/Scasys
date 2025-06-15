import React from "react";
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className="w-full flex justify-center items-center min-h-screen bg-blue-500 p-6 md:p-10 md:items-center">
      <div className="flex flex-col lg:flex-row justify-between w-full max-w-7xl">
        {/* Left side */}
        <div className="flex flex-col justify-between w-full lg:w-1/3 mb-10 lg:mb-0 px-4 lg:px-0">
          <div className="text">
            <h1 className="text-[8vw] lg:text-[6vw] uppercase font-semibold leading-none">
              Scalable
            </h1>
            <h1 className="text-[8vw] lg:text-[6vw] uppercase font-semibold leading-none ">
              Systems
            </h1>
          </div>
          <div>
            <p className="text-2xl h-full text-"></p>
          </div>
          <div>
            <h1 className="start font-black text-3xl">Scasys</h1>
            <h1 className="start font-semibold text-sm">scasys Technologies</h1>
            <div className="w-full h-[10vh] mb-10 start py-8">
              <h1>&copy;All Rights Reserved</h1>
            </div>
          </div>
        </div>

        {/* Right side - structure unchanged, but responsive stacking inside */}
        <div className="w-full lg:w-2/3 h-full">
          {/* Top row of right side */}
          <div className="flex flex-col md:flex-row gap-6 md:gap-10 p-6 md:p-10 justify-center">
            <div className="w-full md:w-1/2 bg-[#3d8aff]">
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-white text-center py-3">Services</h3>
                <ul className="space-y-3 px-6 md:px-10 py-2 text-center">
                  <li>
                    <a href="#" className="text-blue-200 hover:text-white transition-colors">
                      Web & App Design
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-blue-200 hover:text-white transition-colors">
                      Full-stack Development
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-blue-200 hover:text-white transition-colors">
                      Hosting & DevOps
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-blue-200 hover:text-white transition-colors">
                      API Integration
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="w-full md:w-1/2 bg-[#3d8aff]">
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-white text-center py-3">Company</h3>
                <ul className="space-y-3 px-6 md:px-10 py-2 text-center">
                  <li>
                    <a href="#" className="text-blue-200 hover:text-white transition-colors">
                      About Us
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-blue-200 hover:text-white transition-colors">
                      Projects
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-blue-200 hover:text-white transition-colors">
                      Careers
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-blue-200 hover:text-white transition-colors">
                      Contact
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Bottom row of right side */}
          <div className="flex flex-col md:flex-row gap-6 md:gap-10 p-6 md:p-10 justify-center">
            <div className="w-full md:w-1/2 bg-[#3d8aff]">
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-white text-center py-3">Legal</h3>
                <ul className="space-y-3 px-6 md:px-10 py-2 text-center">
                  <li>
                    <Link to="/privacy-policy" className="text-blue-200 hover:text-white">Privacy Policy</Link>

                  </li>
                  <li>
                    <Link to="/terms-of-service" className="text-blue-200 hover:text-white">Terms of Service</Link>

                  </li>
                  <li>
                      <Link to="/cookie-policy" className="text-blue-200 hover:text-white">Cookie Policy</Link>

                  </li>
                  <li>
                   <Link to="/security-policy" className="text-blue-200 hover:text-white">Security Policy</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="w-full md:w-1/2 bg-blue-500"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
