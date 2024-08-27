import Image from "next/image";

const MenuPage = () => {
  return (
    <div className="flex flex-col content-center items-center justify-center gap-4 p-4 text-3xl">
      Menu
      <Image
        src="/assets/menu.jpg"
        alt="namsewal bakery"
        width={2000}
        height={1000}
        className="size-2/3"
      />
    </div>
  );
};

export default MenuPage;
