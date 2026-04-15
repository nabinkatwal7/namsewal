import Link from "next/link";

const steps = [
  {
    title: "Pick a Category",
    description:
      "Choose from menu categories like chocolate, premium, or pastries.",
  },
  {
    title: "Share Event Details",
    description: "Tell us date, serving size, flavor, and theme preferences.",
  },
  {
    title: "Confirm Design & Price",
    description:
      "We confirm available options and finalize your order details.",
  },
  {
    title: "Pickup or Delivery",
    description:
      "Collect from your nearest branch or coordinate delivery support.",
  },
];

const policies = [
  "Order 24-48 hours early for custom designs.",
  "Same-day orders are subject to stock and branch capacity.",
  "Custom modifications may include additional charges.",
  "Please recheck spellings for name/message text before confirmation.",
];

const OrderGuidePage = () => {
  return (
    <section className="rounded-3xl border border-[#f1dbc7] bg-white/80 p-6 shadow-[0_20px_45px_rgba(92,55,33,0.1)] md:p-8">
      <div className="text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#a0653d]">
          Order Guide
        </p>
        <h1 className="mt-3 text-4xl font-bold text-[#2f1f17] md:text-5xl">
          How to Order Smoothly
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-[#614737] md:text-base">
          Follow these simple steps for a faster ordering process and better
          custom cake planning experience.
        </p>
      </div>

      <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {steps.map((step, index) => (
          <article
            key={step.title}
            className="rounded-2xl border border-[#eed7c2] bg-[#fff8f1] p-5"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#9a603c]">
              Step {index + 1}
            </p>
            <h2 className="mt-2 text-lg font-semibold text-[#3d281d]">
              {step.title}
            </h2>
            <p className="mt-2 text-sm leading-6 text-[#5f4434]">
              {step.description}
            </p>
          </article>
        ))}
      </div>

      <div className="mt-8 grid gap-5 lg:grid-cols-2">
        <article className="rounded-2xl border border-[#ecd4bf] bg-[#fff8f1] p-5">
          <h3 className="text-xl font-semibold text-[#3d281d]">
            Order Checklist
          </h3>
          <ul className="mt-3 space-y-1 text-sm leading-6 text-[#5f4434]">
            <li>• Event Date and Time</li>
            <li>• Flavor Preference</li>
            <li>• Required Serving Size</li>
            <li>• Design Reference (if custom)</li>
            <li>• Pickup / Delivery Preference</li>
          </ul>
        </article>

        <article className="rounded-2xl border border-[#ecd4bf] bg-[#fff8f1] p-5">
          <h3 className="text-xl font-semibold text-[#3d281d]">Policies</h3>
          <ul className="mt-3 space-y-1 text-sm leading-6 text-[#5f4434]">
            {policies.map((item) => (
              <li key={item}>• {item}</li>
            ))}
          </ul>
        </article>
      </div>

      <div className="mt-8 rounded-2xl border border-[#ecd4bf] bg-[#fff2e4] p-6 text-center">
        <h3 className="text-2xl font-bold text-[#2f1f17]">Ready to order?</h3>
        <p className="mt-2 text-sm leading-7 text-[#5f4434]">
          Contact your preferred branch and our team will guide you immediately.
        </p>
        <div className="mt-4 flex flex-wrap items-center justify-center gap-2">
          <Link
            href="/contact"
            className="rounded-full bg-[#8f5734] px-5 py-2 text-xs font-semibold uppercase tracking-wider text-white transition-colors duration-300 hover:bg-[#754328]"
          >
            Contact Branches
          </Link>
          <Link
            href="/menu"
            className="rounded-full border border-[#d6a987] px-5 py-2 text-xs font-semibold uppercase tracking-wider text-[#7a4c31] transition-colors duration-300 hover:bg-[#7a4c31] hover:text-white"
          >
            Browse Menu
          </Link>
        </div>
      </div>
    </section>
  );
};

export default OrderGuidePage;
