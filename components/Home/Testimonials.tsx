const testimonials = [
  {
    name: "Sushmita R.",
    quote:
      "Ordered a birthday cake and it looked premium, tasted amazing, and was delivered on time.",
  },
  {
    name: "Rabin K.",
    quote:
      "Great service and very professional communication. The custom design matched exactly what we wanted.",
  },
  {
    name: "Anusha T.",
    quote:
      "Best pastries in town. Fresh, balanced sweetness, and consistent quality every time.",
  },
];

const Testimonials = () => {
  return (
    <section className="rounded-3xl border border-[#f1dbc7] bg-white/75 p-6 shadow-[0_20px_45px_rgba(92,55,33,0.1)] md:p-8">
      <div className="mb-7 text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#a0653d]">
          Testimonials
        </p>
        <h2 className="mt-3 text-3xl font-bold text-[#2f1f17] md:text-4xl">
          Loved by Our Customers
        </h2>
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        {testimonials.map((item) => (
          <blockquote
            key={item.name}
            className="rounded-2xl border border-[#efdac8] bg-[#fff8f2] p-5 shadow-sm"
          >
            <p className="text-sm leading-7 text-[#5f4333]">
              &ldquo;{item.quote}&rdquo;
            </p>
            <footer className="mt-4 text-sm font-semibold text-[#8c5634]">
              {item.name}
            </footer>
          </blockquote>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
