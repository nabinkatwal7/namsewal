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
      <div className="flex flex-col content-center items-center justify-center gap-4 p-6">
        <p className="text-3xl font-bold">PASTRIES</p>
        <p className="text-center">
          Treat yourself to our freshly baked pastries! From buttery croissants
          to rich éclairs, every bite is crafted to perfection. Perfect for any
          time of day—grab one today!
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
      <div className="flex flex-col content-center items-center justify-center gap-4 p-6">
        <p className="text-3xl font-bold">FRUIT CAKE</p>
        <p className="text-center">
          Enjoy our delicious fruit cake, baked fresh with the finest
          ingredients! Packed with rich, flavorful fruits and a perfectly moist
          texture, it is the ideal treat for any occasion. Take home a slice of
          sweetness today!
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
      <div className="flex flex-col content-center items-center justify-center gap-4 p-6">
        <p className="text-3xl font-bold">CUP CAKES</p>
        <p className="text-center">
          Satisfy your cravings with our delightful cupcakes! Moist, fluffy, and
          topped with creamy frosting, they are the perfect sweet treat for any
          moment. Pick up your favorite flavor today!
        </p>
      </div>
    </div>
  );
};

export default Grid;
