"use client";
import Image from "next/image";
import Link from "next/link";

import { RxHamburgerMenu } from "react-icons/rx";

export const links = [
  {
    id: 1,
    name: "Home",
    href: "/",
  },
  {
    id: 2,
    name: "Gallery",
    href: "/gallery",
  },
  {
    id: 3,
    name: "Contact",
    href: "/contact",
  },
];

const Header = () => {
  return (
    <>
      <div className="sticky top-0 z-50 hidden items-center justify-between bg-black/75 px-4 py-1 text-white shadow-md backdrop-blur-lg lg:flex">
        <Image
          src="/assets/logo.jpg"
          alt="namsewal bakery"
          width={80}
          height={80}
          className="size-16 rounded-full"
        />
        <div className="flex flex-row items-center gap-4 text-lg uppercase">
          {links?.map((link) => (
            <Link key={link.id} href={link.href} className="hover:underline">
              {link.name}
            </Link>
          ))}
        </div>
        <p className="text-lg">Namsewal Bakery</p>
      </div>
      <div className="sticky top-0 flex items-center justify-between bg-white/50 p-4 backdrop-blur-sm lg:hidden">
        <Image
          src="/assets/logo.jpg"
          alt="namsewal bakery"
          width={80}
          height={80}
          className="size-16 rounded-full"
        />
        <button className="text-lg">
          <RxHamburgerMenu />
        </button>
      </div>
    </>
  );
};

export default Header;
