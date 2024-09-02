import Link from "next/link";
import React from "react";

const HeroSection = () => {
  return (
    <div className="relative flex h-screen items-center justify-center">
      <video
        className="absolute inset-0 size-full object-cover"
        src="/video.mp4"
        autoPlay
        loop
        muted
      />
      <div className="relative z-10 text-center text-white">
        <h1 className="herofont mb-4 text-5xl font-bold md:text-7xl">
          Namsewal Bakery
        </h1>
        <p className="herofont mb-8 text-xl md:text-4xl">We bake happiness!</p>
        <Link
          href="/contact"
          className="rounded bg-[#603F26] px-6 py-3 font-bold text-white"
        >
          Get Yours
        </Link>
      </div>
    </div>
  );
};

export default HeroSection;
