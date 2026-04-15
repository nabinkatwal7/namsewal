import moment from "moment";
import Image from "next/image";
import Link from "next/link";
import { FaFacebook, FaInstagram } from "react-icons/fa6";

const helpData = [
  {
    id: 1,
    name: "About Us",
    href: "/about",
  },
  {
    id: 2,
    name: "Order Guide",
    href: "/order-guide",
  },
  {
    id: 3,
    name: "Contact",
    href: "/contact",
  },
  {
    id: 4,
    name: "Menu",
    href: "/menu",
  },
  {
    id: 5,
    name: "Branches",
    href: "/branches",
  },
];

const aboutData = [
  {
    id: 1,
    name: "Custom Cakes",
    href: "/order-guide",
  },
  {
    id: 2,
    name: "Birthday Cakes",
    href: "/menu",
  },
  {
    id: 3,
    name: "Pastries",
    href: "/pastries",
  },
  {
    id: 4,
    name: "Premium Cakes",
    href: "/premium-cakes",
  },
  {
    id: 5,
    name: "Cup Cakes",
    href: "/cup-cakes",
  },
];

const categoryData = [
  {
    id: 1,
    name: "Black Forest",
    href: "/black-forest",
  },
  {
    id: 2,
    name: "Chocolate",
    href: "/chocolate",
  },
  {
    id: 3,
    name: "Fruit Cake",
    href: "/fruit-cake",
  },
  {
    id: 4,
    name: "White Forest",
    href: "/white-forest",
  },
  {
    id: 5,
    name: "Red Velvet",
    href: "/red-velvet",
  },
];

const Footer = () => {
  return (
    <footer className="mx-auto mt-10 w-full max-w-[1600px] px-4 pb-8 md:px-8 lg:px-12">
      <div className="rounded-3xl border border-[#f0d8c1] bg-white/80 p-8 shadow-[0_20px_50px_rgba(97,60,37,0.12)] backdrop-blur-sm">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-4">
          <div className="flex flex-col items-start gap-3">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#9f643b]">
              Namsewal Bakery
            </p>
            <Image
              src="/assets/logo.jpg"
              alt="namsewal bakery"
              width={128}
              height={128}
              className="size-20 rounded-full border-2 border-[#d7a273] object-cover shadow-md"
            />
            <p className="max-w-xs text-sm leading-6 text-[#5e4030]">
              Handcrafted cakes and pastries for birthdays, celebrations, and
              everyday sweet cravings.
            </p>
            <div className="flex flex-row gap-3 text-xl text-[#7b4b2f]">
              <Link
                href="https://www.facebook.com/namsewalbakery"
                target="_blank"
                rel="noreferrer"
                className="transition-transform duration-300 hover:scale-110"
              >
                <FaFacebook />
              </Link>
              <Link
                href="https://www.instagram.com/namsewalbakery/"
                target="_blank"
                rel="noreferrer"
                className="transition-transform duration-300 hover:scale-110"
              >
                <FaInstagram />
              </Link>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <p className="mb-2 text-lg font-semibold text-[#3d281d]">
              Help & Information
            </p>
            {helpData?.map((help) => (
              <Link
                key={help.id}
                href={help.href}
                className="text-sm text-[#5e4030] transition-colors duration-300 hover:text-[#b56f45]"
              >
                {help.name}
              </Link>
            ))}
          </div>
          <div className="flex flex-col gap-2">
            <p className="mb-2 text-lg font-semibold text-[#3d281d]">
              About Us
            </p>
            {aboutData?.map((help) => (
              <Link
                key={help.id}
                href={help.href}
                className="text-sm text-[#5e4030] transition-colors duration-300 hover:text-[#b56f45]"
              >
                {help.name}
              </Link>
            ))}
          </div>
          <div className="flex flex-col gap-2">
            <p className="mb-2 text-lg font-semibold text-[#3d281d]">
              Categories
            </p>
            {categoryData?.map((help) => (
              <Link
                key={help.id}
                href={help.href}
                className="text-sm text-[#5e4030] transition-colors duration-300 hover:text-[#b56f45]"
              >
                {help.name}
              </Link>
            ))}
          </div>
        </div>
        <div className="mt-8 border-t border-[#f2dfcd] pt-4">
          <p className="text-center text-sm text-[#6d4d3a]">
            © {moment().format("YYYY")} Namsewal Bakery. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
