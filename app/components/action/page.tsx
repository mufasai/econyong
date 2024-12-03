import React from "react";

const CallToAction = () => {
  return (
    <section className="bg-[#FFEDD1] py-16 px-6 sm:px-12 lg:px-24 mb-24 mx-4 sm:mx-8 lg:mx-24 rounded-xl">
      <div className="container mx-auto text-center">
        <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-800">
          Ready to Make an <span className="text-[#9C6E24]">Impact</span>?
        </h2>
        <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-800 mb-6">
          <span className="text-[#9C6E24]">Sign up</span> today and start
          earning points!
        </h2>
        <a
          href="/signup"
          className="bg-[#2D701C] text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg shadow-lg hover:bg-green-700 transition-all duration-300 ease-in-out"
        >
          Get Started
        </a>
      </div>
    </section>
  );
};

export default CallToAction;
