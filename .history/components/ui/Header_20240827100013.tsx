import Image from "next/image";
import Link from "next/link";

const links = [
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
    <div className="sticky top-0 z-50 flex items-center justify-between bg-white px-4 py-1 shadow-md">
      <Image
        src="/assets/logo.jpg"
        alt="namsewal bakery"
        width={80}
        height={80}
        className="size-16 rounded-full"
      />
      <div className="flex flex-row items-center gap-2">
        {links?.map((link) => (
          
        ))}
        <Link href="/">Home</Link>
      </div>
    </div>
  );
};

export default Header;
