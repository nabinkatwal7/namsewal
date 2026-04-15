import Image from "next/image";
import React from "react";

const Grid = () => {
  const featuredItems = [
    {
      title: "Pastries",
      description:
        "Flaky, buttery, and baked throughout the day for fresh flavor in every bite.",
      image: "/assets/pastries.jpg",
    },
    {
      title: "Fruit Cakes",
      description:
        "Light sponge, seasonal fruits, and elegant finishes perfect for special gatherings.",
      image: "/assets/fruits_cake.jpg",
    },
    {
      title: "Cup Cakes",
      description:
        "Soft, creamy, and colorful mini treats made for gifting, parties, and sweet cravings.",
      image: "/assets/cup_cakes_1.jpg",
    },
  ];

  return (
    <section className="rounded-3xl border border-[#f1dbc7] bg-white/70 p-5 shadow-[0_20px_45px_rgba(92,55,33,0.1)] md:p-7">
      <div className="mb-6 text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#a0653d]">
          Featured Selection
        </p>
        <h2 className="mt-3 text-3xl font-bold text-[#2f1f17] md:text-4xl">
          Freshly Crafted Favorites
        </h2>
      </div>
      <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
        {featuredItems.map((item) => (
          <article
            key={item.title}
            className="group overflow-hidden rounded-2xl border border-[#f3dfcd] bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
          >
            <div className="overflow-hidden">
              <Image
                src={item.image}
                alt={item.title}
                width={1000}
                height={800}
                className="h-56 w-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>
            <div className="space-y-3 p-5">
              <h3 className="text-2xl font-bold text-[#3e271b]">
                {item.title}
              </h3>
              <p className="text-sm leading-6 text-[#624636]">
                {item.description}
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Grid;
