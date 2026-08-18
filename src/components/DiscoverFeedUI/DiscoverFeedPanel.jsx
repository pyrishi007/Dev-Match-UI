import { Users, Sparkles, TrendingUp } from "lucide-react";

const DiscoverFeedPanel = () => {
  return (
    <div className="relative flex h-full flex-col justify-center">
      {/* Decorative Blur */}
      <div className="absolute -left-24 top-0 h-72 w-72 rounded-full bg-blue-400/20 blur-3xl"></div>

      <div className="absolute bottom-20 left-48 h-60 w-60 rounded-full bg-purple-400/20 blur-3xl"></div>

      {/* Badge */}

      <div className="mb-6 inline-flex w-fit items-center gap-2 rounded-full bg-blue-100 px-5 py-3 text-blue-700 shadow-sm">
        <Users size={18} />

        <span className="font-semibold">2,431 Developers Online</span>
      </div>

      {/* Heading */}

      <h1 className="max-w-xl text-6xl font-black leading-tight text-slate-900">
        Discover
        <br />
        Developers
      </h1>

      {/* Subtitle */}

      <p className="mt-6 max-w-xl text-lg leading-9 text-slate-600">
        Find developers that match your skills, interests and startup ideas.
        <br />
        Build something amazing together.
      </p>

      {/* Stats */}

      <div className="mt-8 flex items-center gap-8">
        <div>
          <h2 className="text-3xl font-bold text-slate-900">24</h2>

          <p className="text-slate-500">Today's Picks</p>
        </div>

        <div className="h-10 w-px bg-slate-300"></div>

        <div>
          <h2 className="text-3xl font-bold text-blue-600">96%</h2>

          <p className="text-slate-500">Best Match</p>
        </div>
      </div>

      <p className="mt-5 font-medium text-slate-500">
        Showing
        <span className="font-bold text-slate-900"> 1 </span>
        of
        <span className="font-bold text-slate-900"> 24 </span>
        Developers
      </p>

      {/* Floating Cards */}

      <div className="mt-14 grid max-w-lg gap-5">
        {/* Card */}

        <div className="rounded-3xl bg-white p-6 shadow-xl transition hover:-translate-y-2">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-slate-500">Today's Matches</p>

              <h2 className="mt-2 text-4xl font-black">24</h2>
            </div>

            <Sparkles size={34} className="text-blue-600" />
          </div>
        </div>

        {/* Card */}

        <div className="rounded-3xl bg-white p-6 shadow-xl transition hover:-translate-y-2">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-slate-500">Trending Skills</p>

              <div className="mt-4 flex flex-wrap gap-2">
                {["React", "Node", "AI", "Next.js"].map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full bg-blue-50 px-3 py-1 text-sm font-semibold text-blue-700"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <TrendingUp size={34} className="text-green-600" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DiscoverFeedPanel;
