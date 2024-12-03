import React from "react";
import Image from "next/image";

export function ResultSection() {
  return (
    <section className="flex flex-col items-center px-6 py-12 bg-white mb-24">
      {/* Section Header */}
      <h2 className="text-3xl font-bold text-center text-black mb-6">
        Our results in numbers
      </h2>
      <p className="text-lg text-center text-gray-500 mb-12">
        Lorem ipsum dolor sit amet consectetur adipiscing elit eget quamrutmo.
      </p>

      {/* Card Container */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Card 1 */}
        <div className="flex flex-col items-center text-center bg-orange-100 p-6 rounded-t-[220px]">
          <Image
            src="/result1.svg"
            width={277}
            height={277}
            alt="Recycle image 1"
            className="w-48 h-48 rounded-full mb-4"
          />
          <h3 className="text-xl font-bold text-black mb-2">
            Lorem ipsum dolor sit amet
          </h3>
          <p className="text-gray-500">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore.
          </p>
        </div>

        {/* Card 2 */}
        <div className="flex flex-col items-center text-center bg-green-100 p-6 rounded-b-[220px] ">
          <h3 className="text-xl font-bold text-black mb-2">
            Lorem ipsum dolor sit amet
          </h3>
          <p className="text-gray-500">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore.
          </p>
          <Image
            src="/result2.svg"
            width={277}
            height={277}
            alt="Recycle image 2"
            className="w-48 h-48 rounded-full mb-4"
          />
        </div>

        {/* Card 3 */}
        <div className="flex flex-col items-center text-center bg-yellow-100 p-6 rounded-t-[220px]">
          <Image
            src="/result3.svg"
            width={277}
            height={277}
            alt="Recycle image 2"
            className="w-48 h-48 rounded-full mb-4"
          />
          <h3 className="text-xl font-bold text-black mb-2">
            Lorem ipsum dolor sit amet
          </h3>
          <p className="text-gray-500">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore.
          </p>
        </div>
      </div>
    </section>
  );
}
