import { FaCakeCandles, FaClock, FaMedal, FaTruckFast } from "react-icons/fa6";

const highlights = [
  {
    title: "Fresh Daily",
    description: "Baked every morning using quality ingredients.",
    icon: FaCakeCandles,
  },
  {
    title: "On-Time Orders",
    description: "Reliable preparation for birthdays and events.",
    icon: FaClock,
  },
  {
    title: "Premium Craft",
    description: "Elegant designs and rich flavor combinations.",
    icon: FaMedal,
  },
  {
    title: "Delivery Support",
    description: "Easy pickup and local delivery guidance.",
    icon: FaTruckFast,
  },
];

const WhyChooseUs = () => {
  return (
    <section className="rounded-3xl border border-[#f1dbc7] bg-white/75 p-6 shadow-[0_20px_45px_rgba(92,55,33,0.1)] md:p-8">
      <div className="mb-7 text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#a0653d]">
          Why Customers Choose Us
        </p>
        <h2 className="mt-3 text-3xl font-bold text-[#2f1f17] md:text-4xl">
          Professional Service, Exceptional Taste
        </h2>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {highlights.map((item) => {
          const Icon = item.icon;
          return (
            <article
              key={item.title}
              className="rounded-2xl border border-[#efdac8] bg-[#fff8f2] p-5 shadow-sm"
            >
              <div className="mb-3 inline-flex rounded-full bg-[#f2d3bb] p-3 text-[#8c5634]">
                <Icon />
              </div>
              <h3 className="text-lg font-semibold text-[#3c271b]">
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-6 text-[#5f4333]">
                {item.description}
              </p>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default WhyChooseUs;
