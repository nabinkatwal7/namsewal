import Image from "next/image";
import React from "react";

const Grid = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      <div className="overflow-hidden">
        <Image
          src="/assets/pastries.jpg"
          alt="black_forest"
          width={1000}
          height={800}
          className="h-[400px] w-full transition-all duration-300 hover:scale-110 lg:h-[600px]"
        />
      </div>
      <div className="flex flex-col content-center items-center justify-center gap-4 p-2">
        <p className="text-3xl font-bold">PASTRIES</p>
        <p>
          Irresistibly fresh, handcrafted pastries that bring joy to every bite!
        </p>
      </div>
      <div className="overflow-hidden">
        <Image
          src="/assets/fruits_cake.jpg"
          alt="black_forest"
          width={1000}
          height={800}
          className="h-[400px] w-full transition-all duration-300 hover:scale-110 lg:h-[600px]"
        />
      </div>
      <div className="flex flex-col content-center items-center justify-center gap-4 p-2">
        <p className="text-3xl font-bold">FRUIT CAKE</p>
        <p>
          Moist, rich, and loaded with fruits and nuts—our fruit cake is a
          timeless treat for any occasion!
        </p>
      </div>
      <div className="overflow-hidden">
        <Image
          src="/assets/cup_cakes_1.jpg"
          alt="black_forest"
          width={1000}
          height={800}
          className="h-[400px] w-full transition-all duration-300 hover:scale-110 lg:h-[600px]"
        />
      </div>
      <div className="flex flex-col content-center items-center justify-center gap-4 p-2">
        <p className="text-3xl font-bold">CUP CAKES</p>
        <p>
          Deliciously moist cupcakes topped with creamy frosting—perfect little
          bites of happiness for any occasion!
        </p>
      </div>
    </div>
  );
};

export default Grid;
