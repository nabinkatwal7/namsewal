import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <div className="bg-[#bae8d4] px-32 py-4 flex flex-row justify-around">
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-2 items-center">
          <Image
            src="/assets/logo.jpg"
            alt="namsewal bakery"
            width={80}
            height={80}
            className="size-16 rounded-full"
          />
          <p>Namsewal Bakery</p>
        </div>
        logo section and links
      </div>
      <div>socials</div>
    </div>
  );
};

export default Footer;
