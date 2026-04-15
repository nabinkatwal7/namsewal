const BranchesLoading = () => {
  return (
    <section className="rounded-3xl border border-[#f1dbc7] bg-white/80 p-6 shadow-[0_20px_45px_rgba(92,55,33,0.1)] md:p-8">
      <div className="animate-pulse">
        <div className="mx-auto h-3 w-28 rounded bg-[#edd3bc]" />
        <div className="mx-auto mt-4 h-10 w-72 max-w-full rounded bg-[#f2dcc9]" />
        <div className="mt-8 grid gap-5 lg:grid-cols-2">
          <div className="h-56 rounded-2xl bg-[#f7e7d8]" />
          <div className="h-56 rounded-2xl bg-[#f7e7d8]" />
        </div>
        <div className="mt-6 grid gap-5 lg:grid-cols-2">
          <div className="h-80 rounded-2xl bg-[#f7e7d8]" />
          <div className="h-80 rounded-2xl bg-[#f7e7d8]" />
        </div>
      </div>
    </section>
  );
};

export default BranchesLoading;
