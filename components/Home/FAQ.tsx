const faqs = [
  {
    question: "How early should I place a custom cake order?",
    answer:
      "For custom designs, we recommend 24-48 hours in advance. For major events, earlier is better.",
  },
  {
    question: "Do you offer eggless or less-sugar options?",
    answer:
      "Yes, availability depends on design and size. Contact us with your preference before ordering.",
  },
  {
    question: "Can I order for same-day pickup?",
    answer:
      "Yes, same-day pickup is available for selected products depending on stock and branch capacity.",
  },
];

const FAQ = () => {
  return (
    <section className="rounded-3xl border border-[#f1dbc7] bg-white/75 p-6 shadow-[0_20px_45px_rgba(92,55,33,0.1)] md:p-8">
      <div className="mb-6 text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#a0653d]">
          FAQ
        </p>
        <h2 className="mt-3 text-3xl font-bold text-[#2f1f17] md:text-4xl">
          Common Questions
        </h2>
      </div>

      <div className="space-y-3">
        {faqs.map((faq) => (
          <details
            key={faq.question}
            className="rounded-xl border border-[#efd9c5] bg-[#fff8f1] p-4"
          >
            <summary className="cursor-pointer font-semibold text-[#3d281d]">
              {faq.question}
            </summary>
            <p className="mt-2 text-sm leading-6 text-[#5f4434]">
              {faq.answer}
            </p>
          </details>
        ))}
      </div>
    </section>
  );
};

export default FAQ;
