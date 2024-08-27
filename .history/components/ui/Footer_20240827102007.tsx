import Image from "next/image";
import React from "react";
import { links } from "./Header";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="bg-[#bae8d4] px-32 py-4 flex flex-row justify-around">
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-2 items-center">
          <Image
            src="/assets/logo.jpg"
            alt="namsewal bakery"
            width={128}
            height={128}
            className="size-32 rounded-full"
          />
          <p className="text-2xl">Namsewal Bakery</p>
        </div>
        <div className="" >
          {links?.map((link) => (
            <Link key={link.id} href={link.href} className="hover:underline">
              {link.name}
            </Link>
          ))}
        </div>
      </div>
      <div>socials</div>
    </div>
  );
};

export default Footer;
