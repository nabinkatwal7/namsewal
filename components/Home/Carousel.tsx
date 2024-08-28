"use client";
import { motion } from "framer-motion";
import React from "react";
import { ImagesSlider } from "../ui/images-slider";

const Carousel = () => {
  const images = ["/assets/slideshow-v1.jpg", "/assets/slideshow-v2.jpg"];

  return (
    <ImagesSlider className="h-[500px] lg:h-screen" images={images}>
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
        className="z-10 flex flex-col items-center justify-center"
      >
        <motion.p className="bg-gradient-to-b from-neutral-50 to-neutral-400 bg-clip-text py-4 text-center text-xl font-bold text-transparent md:text-6xl">
          Amazing Cakes
        </motion.p>
        <motion.p className="bg-gradient-to-b from-neutral-50 to-neutral-400 bg-clip-text py-4 text-center text-xl font-bold text-transparent md:text-3xl">
          Freshly baked delights made with love! Indulge in our artisanal
          breads, cakes, and pastries—crafted daily to bring you the perfect
          blend of flavor and joy.
        </motion.p>
        {/* <button className="relative mx-auto mt-4 rounded-full border border-emerald-500/20 bg-emerald-300/10 px-4 py-2 text-center text-white backdrop-blur-sm">
          <span>Buy now →</span>
          <div className="absolute inset-x-0  -bottom-px mx-auto h-px w-3/4 bg-gradient-to-r from-transparent via-emerald-500 to-transparent" />
        </button> */}
      </motion.div>
    </ImagesSlider>
  );
};

export default Carousel;
