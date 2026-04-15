import Link from "next/link";
import BranchMapEmbed from "@/components/ui/BranchMapEmbed";

const branches = [
  {
    id: 1,
    city: "Bhaktapur",
    tag: "Recommended",
    address: "Dibyashwori Town Planning, Bhaktapur, Nepal",
    phone: "981-4306104",
    email: "namsewal.bakery11@gmail.com",
    hours: "Daily: 7:00 AM - 8:00 PM",
    mapEmbed:
      "https://www.google.com/maps?q=27.6863668,85.3655434&output=embed",
    mapLink:
      "https://www.google.com/maps/place/Namsewal+Bakery+Bhaktapur/@27.1720331,84.9959172,8z/data=!4m10!1m2!2m1!1snamsewal+bakery!3m6!1s0x39eb1b000f1c0ab1:0xbf07ebc69caa06a5!8m2!3d27.6863668!4d85.3655434!15sCg9uYW1zZXdhbCBiYWtlcnmSAQZiYWtlcnngAQA!16s%2Fg%2F11yszjlpph?entry=ttu&g_ep=EgoyMDI2MDQxMi4wIKXMDSoASAFQAw%3D%3D",
  },
  {
    id: 2,
    city: "Itahari",
    tag: "Main Branch",
    address:
      "Itahari-5, DharaToll (On the way of Jyoti School), Itahari, Nepal 56707",
    phone: "981-4306104",
    email: "namsewal.bakery11@gmail.com",
    hours: "Daily: 7:00 AM - 8:00 PM",
    mapEmbed:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3650.560216965123!2d87.2625685!3d26.6700455!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ef6d448e0dde09%3A0xa42751c3b8eb1a24!2sNamsewal%20Bakery!5e0!3m2!1sen!2sin!4v1693688480990!5m2!1sen!2sin",
    mapLink: "https://maps.google.com/?q=Namsewal+Bakery+Itahari",
  },
];

const BranchesPage = () => {
  return (
    <section className="rounded-3xl border border-[#f1dbc7] bg-white/80 p-6 shadow-[0_20px_45px_rgba(92,55,33,0.1)] md:p-8">
      <div className="text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#a0653d]">
          Our Branches
        </p>
        <h1 className="mt-3 text-4xl font-bold text-[#2f1f17] md:text-5xl">
          Find Your Nearest Namsewal Bakery
        </h1>
        <p className="mx-auto mt-4 max-w-3xl text-sm leading-7 text-[#614737] md:text-base">
          This page is dedicated to branch locations, maps, and travel
          directions. For order discussion, use the Contact page.
        </p>
      </div>

      <div className="mt-8 rounded-2xl border border-[#ecd4bf] bg-[#fff8f1] p-5">
        <h2 className="text-lg font-semibold text-[#3d281d]">Travel Notes</h2>
        <ul className="mt-2 grid gap-1 text-sm leading-6 text-[#5f4434] md:grid-cols-2">
          <li>• Use Open Directions for live map navigation.</li>
          <li>• Parking availability may vary by time.</li>
          <li>• For pre-orders, call before visiting.</li>
        </ul>
      </div>

      <div className="mt-6 grid gap-5 lg:grid-cols-2">
        {branches.map((branch) => (
          <article
            key={branch.id}
            className="rounded-2xl border border-[#f2dfce] bg-[#fff9f3] p-6 text-[#563b2c] shadow-sm"
          >
            <div className="flex items-center justify-between gap-3">
              <p className="text-xl font-semibold text-[#3b2519]">
                {branch.city}
              </p>
              <span className="rounded-full bg-[#8f5734] px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-wider text-white">
                {branch.tag}
              </span>
            </div>
            <p className="mt-3 text-sm leading-6">{branch.address}</p>
            <p className="mt-2 text-sm">
              <span className="font-semibold">Phone:</span> {branch.phone}
            </p>
            <p className="mt-1 text-sm">
              <span className="font-semibold">Email:</span> {branch.email}
            </p>
            <p className="mt-1 text-sm">
              <span className="font-semibold">Hours:</span> {branch.hours}
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              <Link
                href={`tel:${branch.phone.replaceAll("-", "")}`}
                className="rounded-full border border-[#d9aa84] px-4 py-2 text-xs font-semibold uppercase tracking-wider text-[#7a4c31] transition-colors duration-300 hover:bg-[#7a4c31] hover:text-white"
              >
                Call Branch
              </Link>
              <Link
                href={branch.mapLink}
                target="_blank"
                rel="noreferrer"
                className="rounded-full bg-[#a0643e] px-4 py-2 text-xs font-semibold uppercase tracking-wider text-white transition-colors duration-300 hover:bg-[#885032]"
              >
                Open Directions
              </Link>
            </div>
          </article>
        ))}
      </div>

      <div className="mt-8 grid gap-5 lg:grid-cols-2">
        {branches.map((branch) => (
          <BranchMapEmbed
            key={branch.id}
            city={branch.city}
            mapEmbed={branch.mapEmbed}
            mapLink={branch.mapLink}
          />
        ))}
      </div>
    </section>
  );
};

export default BranchesPage;
