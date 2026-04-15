import Link from "next/link";
import { FaAward, FaCakeCandles, FaHeart, FaUsers } from "react-icons/fa6";

const values = [
  {
    title: "Handcrafted Quality",
    description: "Every product is prepared with careful baking standards.",
    icon: FaCakeCandles,
  },
  {
    title: "Customer First",
    description: "We prioritize smooth ordering and reliable communication.",
    icon: FaUsers,
  },
  {
    title: "Trusted Experience",
    description: "Years of serving birthdays, weddings, and daily cravings.",
    icon: FaAward,
  },
  {
    title: "Made with Heart",
    description: "From flavor to finishing, we create desserts that delight.",
    icon: FaHeart,
  },
];

const milestones = [
  {
    year: "2011",
    detail: "Namsewal Bakery started with a focus on fresh, handcrafted cakes.",
  },
  {
    year: "Growth",
    detail:
      "Expanded our product range to pastries, premium cakes, and events.",
  },
  {
    year: "Today",
    detail:
      "Serving customers through multiple branches with improved service.",
  },
];

const AboutPage = () => {
  return (
    <section className="rounded-3xl border border-[#f1dbc7] bg-white/80 p-6 shadow-[0_20px_45px_rgba(92,55,33,0.1)] md:p-8">
      <div className="text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#a0653d]">
          About Us
        </p>
        <h1 className="mt-3 text-4xl font-bold text-[#2f1f17] md:text-5xl">
          The Story of Namsewal Bakery
        </h1>
        <p className="mx-auto mt-4 max-w-3xl text-sm leading-7 text-[#614737] md:text-base">
          Namsewal Bakery is built around one promise: deliver fresh, beautiful,
          and flavorful bakery products with a professional customer experience.
          We serve families, events, and celebrations across our branches with
          quality you can trust.
        </p>
      </div>

      <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {values.map((value) => {
          const Icon = value.icon;
          return (
            <article
              key={value.title}
              className="rounded-2xl border border-[#eed7c2] bg-[#fff8f1] p-5"
            >
              <div className="mb-3 inline-flex rounded-full bg-[#f2d3bb] p-3 text-[#8f5734]">
                <Icon />
              </div>
              <h2 className="text-lg font-semibold text-[#3d281d]">
                {value.title}
              </h2>
              <p className="mt-2 text-sm leading-6 text-[#5f4434]">
                {value.description}
              </p>
            </article>
          );
        })}
      </div>

      <div className="mt-8 grid gap-4 md:grid-cols-2">
        <div className="rounded-2xl border border-[#ecd4bf] bg-[#fff8f1] p-5">
          <h2 className="text-xl font-semibold text-[#3d281d]">Our Mission</h2>
          <p className="mt-2 text-sm leading-7 text-[#5f4434]">
            To bring handcrafted bakery products to every celebration while
            maintaining consistent quality, timely service, and warm customer
            support.
          </p>
        </div>
        <div className="rounded-2xl border border-[#ecd4bf] bg-[#fff8f1] p-5">
          <h2 className="text-xl font-semibold text-[#3d281d]">Our Vision</h2>
          <p className="mt-2 text-sm leading-7 text-[#5f4434]">
            To be the most trusted neighborhood bakery brand known for premium
            taste, thoughtful design, and dependable service.
          </p>
        </div>
      </div>

      <div className="mt-8 rounded-2xl border border-[#ecd4bf] bg-[#fff8f1] p-5">
        <h2 className="text-xl font-semibold text-[#3d281d]">Our Journey</h2>
        <div className="mt-4 grid gap-3 md:grid-cols-3">
          {milestones.map((milestone) => (
            <article
              key={milestone.year}
              className="rounded-xl border border-[#efd9c5] bg-white p-4"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#9f643b]">
                {milestone.year}
              </p>
              <p className="mt-2 text-sm leading-6 text-[#5f4434]">
                {milestone.detail}
              </p>
            </article>
          ))}
        </div>
      </div>

      <div className="mt-8 rounded-2xl border border-[#ecd4bf] bg-[#fff2e4] p-6 text-center">
        <h3 className="text-2xl font-bold text-[#2f1f17]">
          Planning a celebration soon?
        </h3>
        <p className="mx-auto mt-2 max-w-2xl text-sm leading-7 text-[#5f4434]">
          Explore our menu or contact our team to reserve your preferred date
          and custom design.
        </p>
        <div className="mt-4 flex flex-wrap items-center justify-center gap-2">
          <Link
            href="/menu"
            className="rounded-full bg-[#8f5734] px-5 py-2 text-xs font-semibold uppercase tracking-wider text-white transition-colors duration-300 hover:bg-[#754328]"
          >
            View Menu
          </Link>
          <Link
            href="/contact"
            className="rounded-full border border-[#d6a987] px-5 py-2 text-xs font-semibold uppercase tracking-wider text-[#7a4c31] transition-colors duration-300 hover:bg-[#7a4c31] hover:text-white"
          >
            Contact Team
          </Link>
        </div>
      </div>
    </section>
  );
};

export default AboutPage;
