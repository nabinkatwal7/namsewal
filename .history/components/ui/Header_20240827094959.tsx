import Image from "next/image";

const Header = () => {
  return (
    <div className="flex items-center justify-between p-4">
      <Image src="/assets/logo.jpg" alt="logo" width={50} height={50} className="r" />
      <p>logo</p>
      <p>links</p>
    </div>
  );
};

export default Header;
