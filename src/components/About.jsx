import React from "react";

const About = () => {
  return (
    <div 
    
    
      className="w-full bg-[#CEEA68] rounded-tl-3xl rounded-tr-3xl py-10 relative z-30"
    >
      <h1 className="start text-[3vw] leading-[3vw] p-[3vw]">
        Ochi is a strategic presentation agency for forward-thinking businesses
        that need to raise funds, sell prod­ucts, ex­plain com­plex ideas, and
        hire great peo­ple.
      </h1>
      <div className="w-full flex border-t-1 border-[#99AE53] px-[3vw] py-[2vw] mt-[1vw]">
        <div className="w-1/2">
          <h1 className="text-5xl">Our Approach</h1>
          <button className="flex uppercase mt-[1vw] justify-center items-center bg-black text-white px-4 py-4 rounded-full text-sm">
            Read More <div className="w-2 h-2 rounded-full ml-7 bg-white"></div>
          </button>
        </div>
        <div className="w-1/2 bg-[#99ae53] h-[70vh] rounded-3xl"></div>
      </div>
    </div>
  );
};

export default About;