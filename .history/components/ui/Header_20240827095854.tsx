import Image from "next/image";

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
        
      </div>
    </div>
  );
};

export default Header;
