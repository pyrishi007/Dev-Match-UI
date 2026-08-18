const ConnectionSkeleton = () => {
  return (
    <div className="flex w-full flex-row flex-wrap gap-5">
      {[1, 2, 3, 4, 5, 6].map((item) => (
        <div
          key={item}
          className="w-full rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:w-[calc(50%-10px)] lg:w-[calc(33.333%-14px)]"
        >
          <div className="flex flex-row items-center gap-4">
            <div className="h-14 w-14 shrink-0 animate-pulse rounded-full bg-slate-200" />

            <div className="flex-1">
              <div className="h-4 w-32 animate-pulse rounded bg-slate-200" />
              <div className="mt-2 h-3 w-24 animate-pulse rounded bg-slate-200" />
            </div>
          </div>

          <div className="mt-5 space-y-2">
            <div className="h-3 w-full animate-pulse rounded bg-slate-200" />
            <div className="h-3 w-4/5 animate-pulse rounded bg-slate-200" />
          </div>

          <div className="mt-5 h-10 w-full animate-pulse rounded-xl bg-slate-200" />
        </div>
      ))}
    </div>
  );
};

export default ConnectionSkeleton;