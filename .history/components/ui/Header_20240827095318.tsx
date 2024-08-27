import Image from "next/image";

const Header = () => {
  return (
    <div className="flex items-center justify-between p-2 sticky top-0 shadow-md bg-white z-50">
      <Image
        src="/assets/logo.jpg"
        alt="namsewal bakery"
        width={80}
        height={80}
        className="rounded-full w-16 h-16"
      />
      <p>links</p>
    </div>
  );
};

export default Header;
