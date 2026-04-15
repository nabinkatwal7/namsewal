"use client";
import { motion } from "framer-motion";
import React from "react";
import { ImagesSlider } from "../ui/images-slider";

const Carousel = () => {
  const images = ["/assets/slideshow-v1.jpg", "/assets/slideshow-v2.jpg"];

  return (
    <ImagesSlider
      className="h-[420px] overflow-hidden rounded-3xl border border-[#efd6bf] shadow-[0_20px_50px_rgba(85,49,28,0.24)] md:h-[520px]"
      images={images}
      overlayClassName="bg-gradient-to-r from-[#2f1a11]/70 via-[#4a2a1b]/40 to-transparent"
    >
      <motion.div
        initial={{
          opacity: 0,
          y: -80,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.6,
        }}
        className="z-10 flex max-w-3xl flex-col items-center justify-center px-4"
      >
        <motion.p className="bg-gradient-to-b from-[#fff2e3] to-[#f4c89a] bg-clip-text py-2 text-center text-3xl font-bold text-transparent md:text-6xl">
          Celebration-Ready Cakes
        </motion.p>
        <motion.p className="py-4 text-center text-base font-medium leading-7 text-[#f9e5d2] md:text-xl">
          Elegant designs, rich flavors, and handcrafted quality for birthdays,
          weddings, and every unforgettable moment.
        </motion.p>
      </motion.div>
    </ImagesSlider>
  );
};

export default Carousel;
