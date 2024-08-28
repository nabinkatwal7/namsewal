import { Categories, categories } from "@/data/categoryData";
import React from "react";
import CategoryCard from "../ui/CategoryCard";

const Category = () => {
  return (
    <div className="flex flex-col gap-4 px-4 py-16">
      <p className="text-center text-5xl font-bold">Our Categories</p>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {categories?.map((category: Categories) => (
          <CategoryCard key={category.id} data={category} />
        ))}
      </div>
    </div>
  );
};

export default Category;
