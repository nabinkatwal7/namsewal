import { categories } from "@/data/categoryData";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaCartShopping } from "react-icons/fa6";

const DetailPage = ({ params }: { params: { slug: string } }) => {
  const data = categories.find((data) => data.slug === params.slug);

  if (!data) {
    return (
      <section className="rounded-3xl border border-[#f1dbc7] bg-white/75 p-10 text-center shadow-[0_20px_45px_rgba(92,55,33,0.1)]">
        <h1 className="text-3xl font-bold text-[#2f1f17]">
          Category not found
        </h1>
        <p className="mt-3 text-[#604434]">
          Please choose another category from the homepage.
        </p>
      </section>
    );
  }

  return (
    <section className="flex flex-col gap-8 rounded-3xl border border-[#f1dbc7] bg-white/75 px-4 py-8 shadow-[0_20px_45px_rgba(92,55,33,0.1)] md:px-8">
      <div className="flex flex-col gap-4 p-2 md:px-8">
        <p className="text-center text-4xl font-bold text-[#2f1f17] md:text-5xl">
          {data.name}
        </p>
        <p className="mx-auto max-w-5xl text-center leading-7 text-[#5e4030]">
          {data.description}
        </p>
        <div className="mx-auto mt-2 flex flex-wrap items-center justify-center gap-2">
          <span className="rounded-full bg-[#f8e9db] px-3 py-1 text-xs font-semibold uppercase tracking-wider text-[#8f5734]">
            Starting at NRS {data.price}
          </span>
          <span className="rounded-full bg-[#f8e9db] px-3 py-1 text-xs font-semibold uppercase tracking-wider text-[#8f5734]">
            Customization Available
          </span>
        </div>
      </div>
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {data.cakes?.map((cake) => (
          <div
            className="flex flex-col gap-3 rounded-2xl border border-[#edd4be] bg-white p-4 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            key={cake.id}
          >
            <div className="flex items-center justify-center overflow-hidden rounded-xl">
              <Image
                src={cake.image}
                alt={cake.name}
                width={400}
                height={400}
                className="h-64 w-full rounded-xl object-cover transition-all duration-300 hover:scale-110"
              />
            </div>
            <p className="text-lg font-semibold text-[#3d281d]">{cake.name}</p>
            <div className="flex flex-row items-center justify-between gap-2">
              <div className="flex flex-col">
                <p className="font-semibold text-[#8f5734]">
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
                rel="noreferrer"
                className="flex flex-row items-center gap-2 text-nowrap rounded-full border border-[#dcae89] px-4 py-2 text-sm font-semibold text-[#744a34] transition-all duration-300 hover:bg-[#744a34] hover:text-white"
              >
                <FaCartShopping />
                Buy Now
              </Link>
            </div>
          </div>
        ))}
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        <article className="rounded-2xl border border-[#ecd5bf] bg-[#fff8f1] p-5">
          <h2 className="text-lg font-semibold text-[#3d281d]">
            Need Custom Design?
          </h2>
          <p className="mt-2 text-sm leading-6 text-[#5f4434]">
            Share your theme, event date, and flavor preference. Our team will
            suggest design and pricing options based on your budget.
          </p>
          <Link
            href="/contact"
            className="mt-4 inline-flex rounded-full bg-[#8f5734] px-4 py-2 text-xs font-semibold uppercase tracking-wider text-white transition-colors duration-300 hover:bg-[#754328]"
          >
            Contact for Custom Order
          </Link>
        </article>
        <article className="rounded-2xl border border-[#ecd5bf] bg-[#fff8f1] p-5">
          <h2 className="text-lg font-semibold text-[#3d281d]">
            Ordering Tips
          </h2>
          <ul className="mt-2 space-y-1 text-sm leading-6 text-[#5f4434]">
            <li>• Order 24-48 hours early for custom work.</li>
            <li>• Mention pickup/delivery timing while ordering.</li>
            <li>• Add message text and preferred decoration colors.</li>
          </ul>
        </article>
      </div>
    </section>
  );
};

export default DetailPage;
