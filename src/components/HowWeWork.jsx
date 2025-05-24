import React from 'react';
import { FileText, Figma, Code, Cloud, Settings } from 'lucide-react';

const HowWeWork = () => {
  const steps = [
    {
      id: 1,
      title: "SRS Documentation",
      description: "We start by documenting your requirements in detail to ensure clarity and alignment.",
      icon: FileText,
      color: "bg-blue-900"
    },
    {
      id: 2,
      title: "Figma UI/UX Design",
      description: "Our designers create intuitive, beautiful interfaces that align with your brand.",
      icon: Figma,
      color: "bg-blue-600"
    },
    {
      id: 3,
      title: "Full-stack Development",
      description: "Our engineers build robust, scalable applications using modern technologies.",
      icon: Code,
      color: "bg-blue-500"
    },
    {
      id: 4,
      title: "Cloud Hosting",
      description: "We deploy your application to reliable, high-performance cloud infrastructure.",
      icon: Cloud,
      color: "bg-blue-400"
    },
    {
      id: 5,
      title: "Post-launch Management",
      description: "We provide ongoing support, maintenance, and optimization services.",
      icon: Settings,
      color: "bg-blue-300"
    }
  ];

  const handleGetStarted = () => {
    const element = document.getElementById('Contact');
    console.log(element);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div 
      id="How we work" 
      data-scroll 
      data-scroll-speed="" 
      className="bg-[#F1F1F1] rounded-tl-3xl rounded-tr-3xl  w-full flex items-center justify-center px-3 sm:px-4 md:px-6 lg:px-8 py-8 sm:py-12 md:py-16 lg:py-20"
    >
      <div className="w-full max-w-7xl mx-auto ">
        {/* Header */}
        <div className="text-center mb-10 sm:mb-12 md:mb-16 lg:mb-20">
          <h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-blue-900 mb-3 sm:mb-4 md:mb-6 leading-tight">
            How We Work
          </h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 max-w-xs sm:max-w-md md:max-w-2xl lg:max-w-3xl mx-auto leading-relaxed px-2 sm:px-0">
            Our proven client journey ensures a smooth, transparent process from concept to completion.
          </p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connection Line - Hidden on mobile, visible on larger screens */}
          <div className="absolute top-20 sm:top-24 md:top-28 left-0 right-0 h-0.5 sm:h-1 bg-blue-200 hidden lg:block"></div>
          
          {/* Mobile: Single column, Tablet: 2 columns, Desktop: 5 columns */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 sm:gap-8 md:gap-10 lg:gap-6 xl:gap-8">
            {steps.map((step, index) => (
              <div 
                key={step.id} 
                className={`text-center relative ${
                  // Center the last item on tablets when using 2-column layout
                  steps.length % 2 !== 0 && index === steps.length - 1 
                    ? 'sm:col-span-2 sm:max-w-sm sm:mx-auto lg:col-span-1 lg:max-w-none' 
                    : ''
                }`}
              >
                {/* Icon Circle */}
                <div className="relative mb-4 sm:mb-6 md:mb-8">
                  <div 
                    className={`w-16 h-16 xs:w-18 xs:h-18 sm:w-20 sm:h-20 md:w-24 md:h-24 ${step.color} rounded-full flex items-center justify-center mx-auto relative z-10 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:-translate-y-2 cursor-pointer group`}
                  >
                    <step.icon className="w-6 h-6 xs:w-7 xs:h-7 sm:w-8 sm:h-8 md:w-10 md:h-10 text-white transition-transform duration-300 group-hover:scale-110" />
                  </div>
                  
                  {/* Step Number */}
                  <div className="absolute -top-2 -right-2 xs:-top-2.5 xs:-right-2.5 sm:-top-3 sm:-right-3 w-7 h-7 xs:w-8 xs:h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 bg-blue-900 text-white rounded-full flex items-center justify-center text-xs xs:text-sm sm:text-base font-bold border-2 xs:border-3 sm:border-4 border-gray-50 z-20">
                    {step.id}
                  </div>
                </div>

                {/* Content */}
                <div className="space-y-2 sm:space-y-3 md:space-y-4 px-2 sm:px-0">
                  <h3 className="text-base xs:text-lg sm:text-xl md:text-xl font-semibold text-blue-900 leading-tight">
                    {step.title}
                  </h3>
                  <p className="text-xs xs:text-sm sm:text-base md:text-base text-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-12 sm:mt-16 md:mt-20 mb-6 sm:mb-8 md:mb-10">
          <h3 className="text-xl xs:text-2xl sm:text-3xl md:text-3xl font-semibold text-blue-900 mb-4 sm:mb-6 md:mb-8 leading-tight px-2 sm:px-0">
            Ready to start your journey with us?
          </h3>
          <button 
            onClick={handleGetStarted}
            className="w-full xs:w-auto hover:bg-blue-900 transition-all hover:text-white text-blue-900 px-6 xs:px-8 sm:px-10 py-3 sm:py-4 border-2 border-blue-900 rounded-full font-medium text-sm xs:text-base sm:text-lg duration-500 hover:shadow-lg active:scale-95 focus:outline-none focus:ring-4 focus:ring-blue-200"
          >
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default HowWeWork;