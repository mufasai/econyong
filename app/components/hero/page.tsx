import React from "react";
import Image from "next/image";

const HeroSection: React.FC = () => {
  return (
    <section className="bg-white py-16 px-6 md:px-20">
      <div className="max-w-7xl mx-auto text-center">
        <h1 className="text-3xl md:text-5xl font-bold text-gray-800 mb-4">
          Turn Your Scraps into Snaps with{" "}
          <span
            className="font-bold"
            style={{
              background:
                "linear-gradient(90deg, #9C6E24 73.09%, #2D701C 86.79%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            EcoNyong
          </span>
          .
        </h1>
        <p className="text-gray-600 text-lg mb-8">
          Join the movement for a cleaner planet. Earn points by recycling and
          redeem them for exciting rewards!
        </p>
        <div className="flex flex-col md:flex-row justify-center gap-6 mt-24">
          <Image src="/hero.svg" width={1296} height={343} alt="hero" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
