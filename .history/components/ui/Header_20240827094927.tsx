import Image from "next/image";

const Header = () => {
  return (
    <div className="flex items-center justify-between p-4">
      <Image src="ass/logo.png" alt="logo" width={50} height={50} />
      <p>logo</p>
      <p>links</p>
    </div>
  );
};

export default Header;
