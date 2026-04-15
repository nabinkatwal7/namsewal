import Image from "next/image";
import Link from "next/link";
import { categories } from "@/data/categoryData";

const MenuPage = () => {
  return (
    <section className="rounded-3xl border border-[#f1dbc7] bg-white/75 p-6 shadow-[0_20px_45px_rgba(92,55,33,0.1)] md:p-8">
      <div className="mb-6 text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#a0653d]">
          Full Selection
        </p>
        <h1 className="mt-3 text-4xl font-bold text-[#2f1f17] md:text-5xl">
          Bakery Menu
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-sm leading-6 text-[#624636] md:text-base">
          Explore our full menu and jump directly to your favorite category for
          pricing and design options.
        </p>
      </div>

      <div className="mb-8 grid grid-cols-2 gap-2 md:grid-cols-3 lg:grid-cols-5">
        {categories.slice(0, 10).map((category) => (
          <Link
            key={category.id}
            href={`/${category.slug}`}
            className="rounded-xl border border-[#eed5bf] bg-[#fff7ef] px-3 py-2 text-center text-xs font-semibold uppercase tracking-wider text-[#7f4d32] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#f8e8db]"
          >
            {category.name}
          </Link>
        ))}
      </div>

      <Image
        src="/assets/menu.jpg"
        alt="namsewal bakery"
        width={2000}
        height={1000}
        className="mx-auto w-full max-w-5xl rounded-2xl border border-[#efd8c2] object-cover shadow-md"
      />

      <div className="mt-8 grid gap-4 md:grid-cols-3">
        <article className="rounded-2xl border border-[#ecd5bf] bg-[#fff8f1] p-4">
          <h2 className="font-semibold text-[#3d281d]">Custom Cake Orders</h2>
          <p className="mt-2 text-sm text-[#5f4434]">
            Share theme, flavor, and date. We help with size and design
            planning.
          </p>
        </article>
        <article className="rounded-2xl border border-[#ecd5bf] bg-[#fff8f1] p-4">
          <h2 className="font-semibold text-[#3d281d]">Bulk Event Support</h2>
          <p className="mt-2 text-sm text-[#5f4434]">
            For parties and events, contact us early for smoother scheduling.
          </p>
        </article>
        <article className="rounded-2xl border border-[#ecd5bf] bg-[#fff8f1] p-4">
          <h2 className="font-semibold text-[#3d281d]">Need Help Fast?</h2>
          <p className="mt-2 text-sm text-[#5f4434]">
            Use the floating Call/WhatsApp buttons for instant assistance.
          </p>
        </article>
      </div>
    </section>
  );
};

export default MenuPage;
