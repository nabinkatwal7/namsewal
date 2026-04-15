import { Categories } from "@/data/categoryData";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaLongArrowAltRight } from "react-icons/fa";

const CategoryCard = ({ data }: { data: Categories }) => {
  return (
    <Link
      href={`/${data.slug}`}
      className="group flex flex-col gap-3 rounded-2xl border border-[#f0d8c1] bg-white p-4 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
    >
      <div className="flex flex-row items-center gap-3 border-b border-[#f5e4d4] pb-3">
        <div className="min-w-28 overflow-hidden rounded-xl">
          <Image
            src={data.image}
            alt={data.name}
            width={100}
            height={100}
            className="size-28 rounded-xl object-cover transition-all duration-300 group-hover:scale-110"
          />
        </div>
        <div className="flex flex-col gap-2">
          <p className="text-lg font-bold text-[#3e271b]">{data.name}</p>
          <p className="line-clamp-2 text-sm leading-5 text-[#634737]">
            {data.metadescription}
          </p>
          <p className="text-sm font-semibold text-[#8f5734]">
            Starting from NRS {data.price}
          </p>
        </div>
      </div>
      <div className="flex flex-row items-center justify-between">
        <p className="text-sm font-semibold uppercase tracking-wider text-[#744a34]">
          Explore {data.name}
        </p>
        <p>
          <FaLongArrowAltRight className="text-[#9f643b] transition-all duration-300 group-hover:translate-x-1 group-hover:scale-110" />
        </p>
      </div>
    </Link>
  );
};

export default CategoryCard;
