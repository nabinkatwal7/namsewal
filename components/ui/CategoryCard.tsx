import { Categories } from "@/data/categoryData";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaLongArrowAltRight } from "react-icons/fa";

const CategoryCard = ({ data }: { data: Categories }) => {
  return (
    <Link
      href={`/${data.slug}`}
      className="flex flex-col gap-2 rounded-lg border p-4"
    >
      <div className="flex flex-row gap-2 border-b py-2">
        <div className="overflow-hidden">
          <Image
            src={data.image}
            alt={data.name}
            width={100}
            height={100}
            className="size-32 rounded-lg object-cover transition-all duration-300 hover:scale-110"
          />
        </div>
        <div className="flex flex-col gap-1">
          <p className="text-lg font-bold">{data.name}</p>
          <p>{data.metadescription}</p>
          <p>Starting from NRS {data.price}</p>
        </div>
      </div>
      <div className="flex flex-row items-center justify-between">
        <p className="text-lg">Explore {data.name} Products</p>
        <p>
          <FaLongArrowAltRight className="transition-all duration-300 hover:scale-110" />
        </p>
      </div>
    </Link>
  );
};

export default CategoryCard;
