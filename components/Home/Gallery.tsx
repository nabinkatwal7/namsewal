import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaFacebook } from "react-icons/fa6";

const images = [
  "/assets/pastries.jpg",
  "/assets/fruits_cake.jpg",
  "/assets/black_forest.jpg",
  "/assets/chocolate_1.jpg",
  "/assets/chocolate_2.jpg",
  "/assets/chocolate_4.jpg",
  "/assets/chocolate.jpg",
  "/assets/cup_cakes_1.jpg",
  "/assets/cup_cakes.jpg",
  "/assets/white_forest.jpg",
];

const Gallery = () => {
  return (
    <section className="rounded-3xl border border-[#f1dbc7] bg-white/70 p-5 shadow-[0_20px_45px_rgba(92,55,33,0.1)]">
      <div className="mb-6 flex items-end justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#a0653d]">
            Gallery
          </p>
          <h2 className="mt-2 text-3xl font-bold text-[#2f1f17] md:text-4xl">
            Fresh From Our Kitchen
          </h2>
        </div>
      </div>
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
        {images?.map((image) => (
          <div
            className="group relative overflow-hidden rounded-xl"
            key={image}
          >
            <Image
              src={image}
              alt="bakery"
              width={1000}
              height={800}
              className="h-64 w-full object-cover transition-all duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-[#24140d]/60 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              <Link
                href="https://www.facebook.com/namsewalbakery/"
                target="_blank"
                rel="noreferrer"
                className="flex flex-col items-center gap-2 text-lg font-semibold text-white"
              >
                <FaFacebook className="text-xl" />
                Shop Now
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Gallery;
