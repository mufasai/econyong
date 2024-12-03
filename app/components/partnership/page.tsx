import React from "react";
import Image from "next/image";

const Partnership = () => {
  return (
    <section className="bg-white  py-16 ">
      <div className="container lg:flex lg:flex-row mx-auto px-4">
        {/* Judul */}
        <div className="text-center mb-12 flex flex-col">
          <h2 className="text-2xl lg:text-3xl font-bold text-[#818181] mx-auto">
            Proudly Partnering with{" "}
            <span className="text-[#2D701C]">
              Bank Sampah <span className="text-[#FFA822]">Inyong</span>
            </span>
          </h2>
          <div className="w-full my-4">
            <Image
              src="/proudly.svg"
              alt="Partnership"
              width={500}
              height={281}
            />
          </div>
        </div>

        {/* Konten */}
        <div className="my-auto lg:max-w-[50%]">
          {/* Deskripsi */}
          <div className="text-gray-700 mx-auto">
            <p className="mb-4">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo.
            </p>
            <p>
              Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit
              aut fugit, sed quia consequuntur magni dolores eos qui ratione
              voluptatem sequi nesciunt.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partnership;
