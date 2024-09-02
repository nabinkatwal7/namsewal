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
        <div className="flex flex-row gap-4 text-xl">
          <Link href="https://www.facebook.com/namsewalbakery">
            <FaFacebook />
          </Link>
          <Link href="https://www.instagram.com/namsewalbakery/">
            <FaInstagram />
          </Link>
        </div>
      </div>
      <div className="sticky top-0 flex items-center justify-between bg-white/50 p-4 backdrop-blur-sm lg:hidden">
        <Image
          src="/assets/logo.jpg"
          alt="namsewal bakery"
          width={80}
          height={80}
          className="size-16 rounded-full"
        />
        <div className="flex flex-row items-center gap-4 text-sm uppercase">
          {links?.map((link) => (
            <Link key={link.id} href={link.href} className="hover:underline">
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default Header;
