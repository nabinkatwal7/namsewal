import moment from "moment";
import Image from "next/image";
import Link from "next/link";
import { FaFacebook, FaInstagram } from "react-icons/fa6";

const helpData = [
  {
    id: 1,
    name: "About Us",
    href: "/",
  },
  {
    id: 2,
    name: "Privacy Policy",
    href: "/",
  },
  {
    id: 3,
    name: "Terms & Conditions",
    href: "/",
  },
  {
    id: 4,
    name: "Products Return",
    href: "/",
  },
  {
    id: 5,
    name: "Wholesale Policy",
    href: "/",
  },
];

const aboutData = [
  {
    id: 1,
    name: "Pagination",
    href: "/",
  },
  {
    id: 2,
    name: "Terms & Conditions",
    href: "/",
  },
  {
    id: 3,
    name: "Contact",
    href: "/",
  },
  {
    id: 4,
    name: "Accessories",
    href: "/",
  },
  {
    id: 5,
    name: "Terms of use",
    href: "/",
  },
];

const categoryData = [
  {
    id: 1,
    name: "Help Center",
    href: "/",
  },
  {
    id: 2,
    name: "Home Page",
    href: "/",
  },
  {
    id: 3,
    name: "Privacy Policy",
    href: "/",
  },
  {
    id: 4,
    name: "Receivers & Amplifiers",
    href: "/",
  },
  {
    id: 5,
    name: "Delivery & Returns",
    href: "/",
  },
];

const Footer = () => {
  return (
    <div className="relative min-h-[250px] p-4">
      <div className="flex flex-col gap-4 lg:flex-row lg:justify-around">
        <div className="flex flex-col items-center gap-2">
          <Image
            src="/assets/logo.jpg"
            alt="namsewal bakery"
            width={128}
            height={128}
            className="size-32 rounded-full"
          />
          <p className="text-sm">Where Every Bite Feels Like Home</p>
          <div className="flex flex-row gap-2">
            <Link href="https://www.facebook.com/namsewalbakery">
              <FaFacebook />
            </Link>
            <Link href="https://www.instagram.com/namsewalbakery/">
              <FaInstagram />
            </Link>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <p className="mb-2 text-lg">Help & Information</p>
          {helpData?.map((help) => (
            <Link key={help.id} href={help.href} className="hover:underline">
              {help.name}
            </Link>
          ))}
        </div>
        <div className="flex flex-col gap-2">
          <p className="mb-2 text-lg">About Us</p>
          {aboutData?.map((help) => (
            <Link key={help.id} href={help.href} className="hover:underline">
              {help.name}
            </Link>
          ))}
        </div>
        <div className="flex flex-col gap-2">
          <p className="mb-2 text-lg">About Us</p>
          {categoryData?.map((help) => (
            <Link key={help.id} href={help.href} className="hover:underline">
              {help.name}
            </Link>
          ))}
        </div>
      </div>
      <div className="absolute bottom-0 mt-12 w-full">
        <p className="text-center text-sm">
          © {moment().format("YYYY")} Namsewal Bakery. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
