"use client";

import Link from "next/link";
import { FaPhone, FaWhatsapp } from "react-icons/fa6";

const QuickContactFloat = () => {
  return (
    <div className="fixed bottom-20 right-4 z-50 flex flex-col gap-2 md:bottom-6 md:left-6 md:right-auto">
      <Link
        href="tel:9814306104"
        className="flex items-center gap-2 rounded-full bg-[#7a4c31] px-3 py-2 text-[0.65rem] font-semibold uppercase tracking-wider text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-[#653a22] md:px-4 md:text-xs"
      >
        <FaPhone />
        Call Now
      </Link>
      <Link
        href="https://wa.me/9779814306104"
        target="_blank"
        rel="noreferrer"
        className="flex items-center gap-2 rounded-full bg-[#25D366] px-3 py-2 text-[0.65rem] font-semibold uppercase tracking-wider text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-[#1ba851] md:px-4 md:text-xs"
      >
        <FaWhatsapp />
        WhatsApp
      </Link>
    </div>
  );
};

export default QuickContactFloat;
