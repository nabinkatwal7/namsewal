import { categories } from "@/data/categoryData";
import Image from "next/image";
import React from "react";

const DetailPage = ({ params }: { params: { slug: string } }) => {
  const data = categories.find((data) => data.slug === params.slug);

  return (
    <div className="flex flex-col gap-4 px-4 py-8">
      <div>
        <p className="text-center text-5xl font-bold">{data?.name}</p>
        <p className="text-center">{data?.description}</p>
      </div>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
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
            <p>NRS {cake.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DetailPage;
