import { categories } from "@/data/categoryData";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaCartShopping } from "react-icons/fa6";

const DetailPage = ({ params }: { params: { slug: string } }) => {
  const data = categories.find((data) => data.slug === params.slug);

  return (
    <div className="flex flex-col gap-4 px-4 py-8">
      <div className="flex flex-col gap-4 p-4 lg:px-16">
        <p className="text-center text-5xl font-bold">{data?.name}</p>
        <p className="text-center">{data?.description}</p>
      </div>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {data?.cakes?.map((cake) => (
          <div
            className="flex flex-col gap-2 rounded-lg border p-4 shadow-lg"
            key={cake.id}
          >
            <div className="flex items-center justify-center overflow-hidden">
              <Image
                src={cake.image}
                alt={cake.name}
                width={400}
                height={400}
                className="size-64 rounded-lg object-cover transition-all duration-300 hover:scale-110"
              />
            </div>
            <p className="text-lg">{cake.name}</p>
            <div className="flex flex-row items-center justify-between gap-2">
              <div className="flex flex-col">
                <p>
                  NRS {cake.price}{" "}
                  {params.slug === "cup-cakes" ? "per piece" : "per pound"}
                </p>
                <p className="text-xs italic text-gray-500">
                  {params.slug !== "cup-cakes" &&
                    "+NRS 300 for additional customizations"}
                </p>
              </div>
              <Link
                target={"_blank"}
                href={"https://www.facebook.com/namsewalbakery"}
                className="flex flex-row items-center gap-2 text-nowrap rounded-lg px-2 py-1 transition-all duration-300 hover:bg-black hover:text-white"
              >
                <FaCartShopping />
                Buy Now
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DetailPage;
