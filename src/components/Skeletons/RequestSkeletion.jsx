const RequestSkeleton = () => {
  return (
    <div className="mx-auto w-full max-w-7xl space-y-5">
      {[1, 2, 3,].map((item) => (
        <div
          key={item}
          className="w-full rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
        >
          <div className="flex items-center gap-5">
            {/* Profile Image */}
            <div className="h-16 w-16 shrink-0 animate-pulse rounded-full bg-slate-200" />

            {/* User Information */}
            <div className="min-w-0 flex-1">
              {/* Name */}
              <div className="h-5 w-40 animate-pulse rounded-md bg-slate-200" />

              {/* Role */}
              <div className="mt-2 h-3 w-32 animate-pulse rounded bg-slate-200" />

              {/* Location */}
              <div className="mt-2 h-3 w-28 animate-pulse rounded bg-slate-200" />

              {/* Skills */}
              <div className="mt-4 flex gap-2">
                <div className="h-6 w-16 animate-pulse rounded-lg bg-slate-200" />
                <div className="h-6 w-20 animate-pulse rounded-lg bg-slate-200" />
                <div className="h-6 w-14 animate-pulse rounded-lg bg-slate-200" />
              </div>

              {/* About */}
              <div className="mt-4 space-y-2">
                <div className="h-3 w-4/5 animate-pulse rounded bg-slate-200" />
                <div className="h-3 w-3/5 animate-pulse rounded bg-slate-200" />
              </div>
            </div>

            {/* Time + Actions */}
            <div className="hidden w-36 shrink-0 flex-col items-end gap-3 sm:flex">
              {/* Time */}
              <div className="h-3 w-14 animate-pulse rounded bg-slate-200" />

              {/* Accept */}
              <div className="h-10 w-32 animate-pulse rounded-xl bg-slate-200" />

              {/* Ignore */}
              <div className="h-10 w-32 animate-pulse rounded-xl bg-slate-200" />
            </div>
          </div>

          {/* Mobile Actions */}
          <div className="mt-5 flex gap-3 border-t border-slate-100 pt-5 sm:hidden">
            <div className="h-10 flex-1 animate-pulse rounded-xl bg-slate-200" />
            <div className="h-10 flex-1 animate-pulse rounded-xl bg-slate-200" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default RequestSkeleton;
