import Link from "next/link";

const branches = [
  {
    id: 1,
    label: "Branch 1",
    city: "Bhaktapur",
    address: "Dibyashwori Town Planning, Bhaktapur, Nepal",
    serviceArea: "Bhaktapur",
    phone: "981-4306104",
    email: "namsewal.bakery11@gmail.com",
    hours: "Daily: 7:00 AM - 8:00 PM",
    priority: true,
  },
  {
    id: 2,
    label: "Branch 2",
    city: "Itahari",
    address:
      "Itahari-5, DharaToll (On the way of Jyoti School), Itahari, Nepal 56707",
    serviceArea: "Itahari",
    phone: "981-4306104",
    email: "namsewal.bakery11@gmail.com",
    hours: "Daily: 7:00 AM - 8:00 PM",
    priority: false,
  },
];

const services = [
  "Custom Celebration Cakes",
  "Same-Day Pickup",
  "Birthday & Event Orders",
  "Fresh Pastries Daily",
];

const ContactPage = () => {
  return (
    <section className="rounded-3xl border border-[#f1dbc7] bg-white/80 p-6 shadow-[0_20px_45px_rgba(92,55,33,0.1)] md:p-8">
      <div className="mb-8 text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#a0653d]">
          Get In Touch
        </p>
        <h1 className="mt-3 text-4xl font-bold text-[#2f1f17] md:text-5xl">
          Contact Namsewal Bakery
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-sm leading-6 text-[#614737] md:text-base">
          Visit your nearest branch, request custom cake orders, or call us for
          same-day availability and delivery guidance.
        </p>
      </div>

      <div className="mb-8 flex flex-wrap justify-center gap-2">
        {services.map((service) => (
          <span
            key={service}
            className="rounded-full border border-[#e8c8ab] bg-[#fff6ee] px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-[#8b5637]"
          >
            {service}
          </span>
        ))}
      </div>

      <div className="mb-8 grid gap-5 lg:grid-cols-2">
        {branches.map((branch) => (
          <article
            key={branch.id}
            className="rounded-2xl border border-[#f2dfce] bg-[#fff9f3] p-6 text-[#563b2c] shadow-sm"
          >
            <div className="flex items-start justify-between gap-3">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#9f643b]">
                  {branch.label}
                </p>
                <p className="mt-2 text-xl font-semibold text-[#3b2519]">
                  {branch.city}
                </p>
              </div>
              {branch.priority && (
                <span className="rounded-full bg-[#8f5734] px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-wider text-white">
                  Recommended
                </span>
              )}
            </div>
            <p className="mt-4 leading-6">{branch.address}</p>
            <div className="mt-4 space-y-1 text-sm">
              <p>
                <span className="font-semibold">Service Area:</span>{" "}
                {branch.serviceArea}
              </p>
              <p>
                <span className="font-semibold">Phone:</span> {branch.phone}
              </p>
              <p>
                <span className="font-semibold">Email:</span> {branch.email}
              </p>
              <p>
                <span className="font-semibold">Hours:</span> {branch.hours}
              </p>
            </div>
            <div className="mt-5 flex flex-wrap gap-2">
              <a
                href={`tel:${branch.phone.replaceAll("-", "")}`}
                className="rounded-full border border-[#d9aa84] px-4 py-2 text-xs font-semibold uppercase tracking-wider text-[#7a4c31] transition-colors duration-300 hover:bg-[#7a4c31] hover:text-white"
              >
                Call Branch
              </a>
              <a
                href={`mailto:${branch.email}`}
                className="rounded-full border border-[#d9aa84] px-4 py-2 text-xs font-semibold uppercase tracking-wider text-[#7a4c31] transition-colors duration-300 hover:bg-[#7a4c31] hover:text-white"
              >
                Send Email
              </a>
            </div>
          </article>
        ))}
      </div>

      <div className="grid gap-5 lg:grid-cols-2">
        <div className="rounded-2xl border border-[#ecd4bf] bg-[#fff8f1] p-5">
          <h2 className="text-lg font-semibold text-[#3b2519]">
            Send an Inquiry
          </h2>
          <p className="mt-2 text-sm leading-6 text-[#5f4434]">
            Share your order details and we will help you quickly.
          </p>
          <form className="mt-4 space-y-3">
            <input
              type="text"
              placeholder="Your name"
              className="w-full rounded-xl border border-[#ecd8c8] bg-white px-4 py-2.5 text-sm outline-none ring-[#bc7f58] transition focus:ring-2"
            />
            <input
              type="tel"
              placeholder="Phone number"
              className="w-full rounded-xl border border-[#ecd8c8] bg-white px-4 py-2.5 text-sm outline-none ring-[#bc7f58] transition focus:ring-2"
            />
            <select className="w-full rounded-xl border border-[#ecd8c8] bg-white px-4 py-2.5 text-sm outline-none ring-[#bc7f58] transition focus:ring-2">
              <option>Preferred branch</option>
              <option>Bhaktapur</option>
              <option>Itahari</option>
            </select>
            <textarea
              placeholder="Tell us your event date, flavor, and design idea"
              rows={4}
              className="w-full rounded-xl border border-[#ecd8c8] bg-white px-4 py-2.5 text-sm outline-none ring-[#bc7f58] transition focus:ring-2"
            />
            <Link
              href="mailto:namsewal.bakery11@gmail.com?subject=Cake%20Inquiry"
              className="inline-flex rounded-full bg-[#8f5734] px-5 py-2 text-xs font-semibold uppercase tracking-wider text-white transition-colors duration-300 hover:bg-[#754328]"
            >
              Submit by Email
            </Link>
          </form>
        </div>
        <div className="rounded-2xl border border-[#ecd4bf] bg-[#fff8f1] p-5">
          <h2 className="text-lg font-semibold text-[#3b2519]">
            Order Assistance
          </h2>
          <p className="mt-2 text-sm leading-6 text-[#5f4434]">
            For custom designs, message us with your event date, flavor
            preference, and serving size. We recommend ordering 24-48 hours in
            advance for premium customization.
          </p>
        </div>
        <div className="rounded-2xl border border-[#ecd4bf] bg-[#fff8f1] p-5">
          <h2 className="text-lg font-semibold text-[#3b2519]">Quick FAQ</h2>
          <details className="mt-3 rounded-lg border border-[#efd9c5] bg-white p-3 text-sm text-[#5f4434]">
            <summary className="cursor-pointer font-semibold">
              Do you take same-day orders?
            </summary>
            <p className="mt-2">
              Yes, based on daily stock and production capacity. Call your
              preferred branch for instant confirmation.
            </p>
          </details>
          <details className="mt-2 rounded-lg border border-[#efd9c5] bg-white p-3 text-sm text-[#5f4434]">
            <summary className="cursor-pointer font-semibold">
              Can I order custom birthday cakes?
            </summary>
            <p className="mt-2">
              Absolutely. Share your design reference, flavor, and budget and we
              will guide you with available options.
            </p>
          </details>
          <div className="mt-4 rounded-lg border border-[#efd9c5] bg-white p-3 text-sm text-[#5f4434]">
            Need branch locations and maps? Visit the dedicated{" "}
            <Link href="/branches" className="font-semibold text-[#8f5734]">
              Branches page
            </Link>
            .
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;
