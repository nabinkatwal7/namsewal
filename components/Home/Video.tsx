import Link from "next/link";
import React from "react";

const HeroSection = () => {
  return (
    <section className="relative flex min-h-[78vh] items-center justify-center overflow-hidden rounded-3xl shadow-[0_24px_70px_rgba(88,47,26,0.25)]">
      <video
        className="absolute inset-0 size-full object-cover"
        src="/video.mp4"
        autoPlay
        loop
        muted
        playsInline
      />
      <div className="absolute inset-0 bg-gradient-to-r from-[#2e1a12]/80 via-[#472717]/50 to-[#8e5538]/40" />
      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center text-white">
        <p className="mb-4 text-xs font-semibold uppercase tracking-[0.35em] text-[#ffd9b5]">
          Since 2011
        </p>
        <h1 className="herofont mb-4 text-4xl font-bold leading-tight md:text-7xl">
          Namsewal Bakery
        </h1>
        <p className="mx-auto mb-8 max-w-2xl text-base leading-7 text-[#fce7d5] md:text-xl">
          Premium cakes, pastries, and custom celebration desserts crafted fresh
          every day with quality ingredients and a lot of heart.
        </p>
        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            href="/menu"
            className="rounded-full bg-[#d38756] px-8 py-3 text-sm font-semibold uppercase tracking-wider text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#be7041]"
          >
            Explore Menu
          </Link>
          <Link
            href="/contact"
            className="rounded-full border border-[#f0c39d] bg-white/10 px-8 py-3 text-sm font-semibold uppercase tracking-wider text-white transition-all duration-300 hover:-translate-y-1 hover:bg-white/20"
          >
            Order Custom Cake
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
