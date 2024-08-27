import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaInstagram } from "react-icons/fa6";

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
    <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
      {images?.map((image) => (
        <div className="relative overflow-hidden" key={image}>
          <Image
            src={image}
            alt="bakery"
            width={1000}
            height={800}
            className="h-[400px] w-full transition-all duration-300 hover:scale-110"
          />
          {/* eslint-disable-next-line tailwindcss/migration-from-tailwind-2 */}
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 transition-opacity duration-300 hover:opacity-100">
            <Link
              href="https://www.instagram.com/namsewalbakery/"
              target="_blank"
              className="flex flex-col items-center gap-2 text-lg font-semibold text-white"
            >
              <FaInstagram className="text-xl" />
              Shop Now
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Gallery;
