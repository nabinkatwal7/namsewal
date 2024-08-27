import Image from "next/image";

const Header = () => {
  return (
    <div className="flex items-center justify-between p-4">
      <Image
        src="/assets/logo.jpg"
        alt="logo"
        width={80}
        height={80}
        className="rounded-full w-20 h-20"
      />
      <p>logo</p>
      <p>links</p>
    </div>
  );
};

export default Header;
