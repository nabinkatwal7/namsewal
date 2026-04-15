"use client";
import Image from "next/image";
import Link from "next/link";
import { FaFacebook, FaInstagram } from "react-icons/fa6";

export const links = [
  {
    id: 1,
    name: "Home",
    href: "/",
  },
  {
    id: 2,
    name: "Menu",
    href: "/menu",
  },
  {
    id: 3,
    name: "Contact",
    href: "/contact",
  },
  {
    id: 4,
    name: "About",
    href: "/about",
  },
  {
    id: 5,
    name: "Branches",
    href: "/branches",
  },
  {
    id: 6,
    name: "Order Guide",
    href: "/order-guide",
  },
];

const Header = () => {
  return (
    <>
      <div className="mb-2 rounded-2xl border border-[#f4d9c0] bg-[#fff4e8] px-3 py-2 text-center text-[0.65rem] font-semibold uppercase tracking-[0.14em] text-[#8c5634] md:px-4 md:text-xs">
        Freshly Baked Daily • Custom Cakes • Call Now: 981-4306104
      </div>
      <div className="sticky top-0 z-50 hidden items-center justify-between rounded-2xl border border-[#f5dbc2] bg-white/80 px-6 py-3 text-[#3d281d] shadow-[0_14px_38px_rgba(98,57,35,0.12)] backdrop-blur-xl lg:flex">
        <Image
          src="/assets/logo.jpg"
          alt="namsewal bakery"
          width={80}
          height={80}
          className="size-14 rounded-full border-2 border-[#d7a273] object-cover shadow-sm"
        />
        <div className="flex flex-row items-center gap-8 text-[0.95rem] font-semibold uppercase tracking-[0.18em]">
          {links?.map((link) => (
            <Link
              key={link.id}
              href={link.href}
              className="transition-colors duration-300 hover:text-[#b56f45]"
            >
              {link.name}
            </Link>
          ))}
        </div>
        <div className="flex flex-row items-center gap-4 text-xl text-[#7b4b2f]">
          <Link
            href="/contact"
            className="rounded-full bg-[#8f5734] px-4 py-2 text-xs font-semibold uppercase tracking-[0.12em] text-white transition-colors duration-300 hover:bg-[#734026]"
          >
            Order Now
          </Link>
          <Link
            href="https://www.facebook.com/namsewalbakery"
            target="_blank"
            rel="noreferrer"
            className="transition-all duration-300 hover:scale-110 hover:text-[#b56f45]"
          >
            <FaFacebook />
          </Link>
          <Link
            href="https://www.instagram.com/namsewalbakery/"
            target="_blank"
            rel="noreferrer"
            className="transition-all duration-300 hover:scale-110 hover:text-[#b56f45]"
          >
            <FaInstagram />
          </Link>
        </div>
      </div>
      <div className="sticky top-0 z-50 flex flex-col gap-3 rounded-2xl border border-[#f5dbc2] bg-white/90 px-4 py-3 shadow-md backdrop-blur-sm lg:hidden">
        <div className="flex items-center justify-between">
          <Image
            src="/assets/logo.jpg"
            alt="namsewal bakery"
            width={80}
            height={80}
            className="size-11 rounded-full border border-[#d7a273] object-cover"
          />
          <Link
            href="/contact"
            className="rounded-full bg-[#8f5734] px-3 py-1.5 text-[0.65rem] font-semibold uppercase tracking-[0.12em] text-white"
          >
            Order Now
          </Link>
        </div>
        <div className="flex gap-2 overflow-x-auto pb-1 text-[0.65rem] font-semibold uppercase tracking-wider text-[#3d281d]">
          {links?.map((link) => (
            <Link
              key={link.id}
              href={link.href}
              className="whitespace-nowrap rounded-full border border-[#f1d9c3] bg-[#fff7ef] px-3 py-1.5 transition-colors duration-300 hover:text-[#b56f45]"
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default Header;
