import React from "react";

const MissionSection = () => {
  return (
    <div className="bg-white my-24">
      <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center gap-8">
        {/* Kolom Kiri */}
        <div className="flex-1 text-center lg:text-left">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-800">
            <span
              style={{
                background:
                  "linear-gradient(90deg, #9C6E24 73.09%, #2D701C 86.79%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              EcoNyong: On Mission, On Target, On Impact.
            </span>
          </h2>
        </div>

        {/* Kolom Kanan */}
        <div className="flex-1">
          <p className="text-gray-600 leading-relaxed">
            Specializing in waste-to-reward programs for individuals and
            communities, with a focus on sustainability and environmental
            impact. Whether it’s recycling for homes, schools, businesses, or
            community projects, our streamlined process and dedicated approach
            ensure we deliver meaningful results, on mission, on target, and on
            impact.
          </p>
        </div>
      </div>
    </div>
  );
};

export default MissionSection;
