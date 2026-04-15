import { Categories, categories } from "@/data/categoryData";
import React from "react";
import CategoryCard from "../ui/CategoryCard";

const Category = () => {
  return (
    <section className="rounded-3xl border border-[#f1dbc7] bg-white/70 px-4 py-10 shadow-[0_20px_45px_rgba(92,55,33,0.1)] md:px-8">
      <div className="mb-8 text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#a0653d]">
          Signature Offerings
        </p>
        <h2 className="mt-3 text-3xl font-bold text-[#2f1f17] md:text-5xl">
          Our Cake Categories
        </h2>
      </div>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {categories?.map((category: Categories) => (
          <CategoryCard key={category.id} data={category} />
        ))}
      </div>
    </section>
  );
};

export default Category;
