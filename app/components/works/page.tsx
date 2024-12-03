import React from "react";
import Image from "next/image";

const HowItWorks = () => {
  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-2xl lg:text-3xl font-bold text-gray-800 mb-6">
          How{" "}
          <span
            className="text-green-600"
            style={{
              background:
                "linear-gradient(90deg, #9C6E24 73.09%, #2D701C 86.79%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            EcoNyong
          </span>{" "}
          Works?
        </h2>
        <p className="text-gray-600 mb-12">
          Recycle your waste by dropping it off at our partner bank sampah, earn
          points, and redeem rewards!
        </p>
        <div className="mx-auto">
          <div className="flex flex-wrap justify-center">
            <Image src="/works.svg" width={1200} height={300} alt="works" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
