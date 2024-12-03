import React from "react";

const ResultsSectionx: React.FC = () => {
  return (
    <section className="bg-gray-50 py-16 px-6 md:px-20">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
          Our results in numbers
        </h2>
        <p className="text-gray-600 text-lg mb-12">
          Lorem ipsum dolor sit amet consectetur adipiscing elit eget quamrunto.
        </p>

        {/* Results Numbers */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          <div className="text-center">
            <p className="text-4xl md:text-5xl font-bold text-green-600">
              000+
            </p>
            <p className="text-gray-600 mt-2">Volunteers</p>
          </div>
          <div className="text-center">
            <p className="text-4xl md:text-5xl font-bold text-green-600">0</p>
            <p className="text-gray-600 mt-2">Years experiences</p>
          </div>
          <div className="text-center">
            <p className="text-4xl md:text-5xl font-bold text-green-600">
              000+
            </p>
            <p className="text-gray-600 mt-2">Team members</p>
          </div>
          <div className="text-center">
            <p className="text-4xl md:text-5xl font-bold text-green-600">0M</p>
            <p className="text-gray-600 mt-2">Company growth</p>
          </div>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="flex flex-col items-center p-6 rounded-3xl bg-amber-100 shadow-lg">
            <div className="relative w-28 h-28 bg-white rounded-full shadow-md -mt-16 flex items-center justify-center overflow-hidden">
              <img
                src="/result1.svg"
                alt="Card 1"
                className="w-full h-full object-cover rounded-full"
              />
            </div>
            <p className="text-gray-600 mt-8 text-center">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>

          {/* Card 2 */}
          <div className="flex flex-col items-center p-6 rounded-3xl bg-green-100 shadow-lg">
            <div className="relative w-28 h-28 bg-white rounded-full shadow-md -mt-16 flex items-center justify-center overflow-hidden">
              <img
                src="/path/to/image2.jpg"
                alt="Card 2"
                className="w-full h-full object-cover rounded-full"
              />
            </div>
            <p className="text-gray-600 mt-8 text-center">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>

          {/* Card 3 */}
          <div className="flex flex-col items-center p-6 rounded-3xl bg-emerald-100 shadow-lg">
            <div className="relative w-28 h-28 bg-white rounded-full shadow-md -mt-16 flex items-center justify-center overflow-hidden">
              <img
                src="/path/to/image3.jpg"
                alt="Card 3"
                className="w-full h-full object-cover rounded-full"
              />
            </div>
            <p className="text-gray-600 mt-8 text-center">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResultsSectionx;
