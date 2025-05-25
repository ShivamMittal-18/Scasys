import React from 'react';
import { Layout, Code, Server, Link, FileText, BarChart3 } from 'lucide-react';

const OurServices = () => {
  const services = [
    {
      icon: Layout,
      title: "Web & App Design",
      description: "User-centered design that balances aesthetics with functionality for optimal user experience."
    },
    {
      icon: Code,
      title: "Full-stack Development",
      description: "End-to-end development using modern frameworks and best practices for scalable applications."
    },
    {
      icon: Server,
      title: "Hosting & DevOps",
      description: "Reliable cloud infrastructure with CI/CD pipelines for seamless deployment and scaling."
    },
    {
      icon: Link,
      title: "API Integration",
      description: "Seamless integration with third-party services and APIs to extend your application's capabilities."
    },
    {
      icon: FileText,
      title: "CMS & Admin Panels",
      description: "Custom content management systems and admin dashboards for efficient content and data management."
    },
    {
      icon: BarChart3,
      title: "Performance Optimization",
      description: "Speed and performance tuning to ensure your application loads quickly and runs smoothly."
    }
  ];

  return (
    <div 
      id="Our Services" 
      className="bg-gray-50 min-h-screen w-full flex items-center justify-center px-3 sm:px-4 md:px-6 lg:px-8 py-8 sm:py-12 md:py-16 lg:py-20"
    >
      <div className="w-full max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12 md:mb-16 lg:mb-20">
          <h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-blue-900 mb-3 sm:mb-4 md:mb-6 leading-tight px-2 sm:px-0">
            Our Services
          </h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 max-w-xs sm:max-w-md md:max-w-2xl lg:max-w-3xl mx-auto leading-relaxed px-2 sm:px-0">
            Comprehensive web solutions tailored to your business needs.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-white rounded-lg sm:rounded-xl p-4 xs:p-5 sm:p-6 md:p-8 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 sm:hover:-translate-y-2 cursor-pointer group border border-gray-100 h-full flex flex-col"
            >
              {/* Icon */}
              <div className="mb-4 sm:mb-5 md:mb-6">
                <div className="w-12 h-12 xs:w-14 xs:h-14 sm:w-16 sm:h-16 bg-blue-100 rounded-lg flex items-center justify-center group-hover:bg-blue-600 transition-all duration-300 group-hover:scale-105">
                  <service.icon className="w-6 h-6 xs:w-7 xs:h-7 sm:w-8 sm:h-8 text-blue-600 group-hover:text-white transition-colors duration-300" />
                </div>
              </div>

              {/* Content */}
              <div className="space-y-2 sm:space-y-3 md:space-y-4 flex-grow flex flex-col">
                <h3 className="text-base xs:text-lg sm:text-xl font-semibold text-blue-900 group-hover:text-blue-700 transition-colors duration-300 leading-tight">
                  {service.title}
                </h3>
                <p className="text-xs xs:text-sm sm:text-base text-gray-600 leading-relaxed flex-grow">
                  {service.description}
                </p>
              </div>

              {/* Hover indicator */}
              <div className="mt-4 sm:mt-5 md:mt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="w-full h-1 bg-gradient-to-r from-blue-600 to-blue-400 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurServices;