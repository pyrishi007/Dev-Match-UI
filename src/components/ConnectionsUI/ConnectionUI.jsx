import { Search, Users, MessageCircle, MoreHorizontal } from "lucide-react";

const ConnectionUI = ({ connection }) => {
  console.log(connection);

  if (!connection) {
    return (
      <div className="flex min-h-[400px] items-center justify-center">
        <h1 className="text-xl font-semibold text-slate-600">
          No connection found
        </h1>
      </div>
    );
  }

  const connections = connection.connections || [];
  const connectionCount = connection.connectionCount || 0;

  if (connectionCount === 0) {
    return (
      <div className="mx-auto flex min-h-[400px] w-full max-w-7xl flex-col items-center justify-center px-6 text-center">
        <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-50">
          <Users className="text-blue-500" size={30} />
        </div>

        <h1 className="text-2xl font-bold text-slate-900">
          No connections yet
        </h1>

        <p className="mt-2 max-w-md text-sm leading-6 text-slate-500">
          Start discovering developers, connect with them, and build your
          network.
        </p>
      </div>
    );
  }

  return (
    <div className="mx-auto w-full max-w-7xl px-6 py-10">
      {/* Header */}
      <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
        <div>
          <div className="mb-2 flex items-center gap-2 text-blue-600">
            <Users size={20} />

            <span className="text-sm font-semibold">Your Network</span>
          </div>

          <h1 className="text-3xl font-bold text-slate-900">My Connections</h1>

          <p className="mt-2 text-slate-500">
            Connect, collaborate and build something great together.
          </p>
        </div>

        {/* Search */}
        <div className="relative w-full md:w-80">
          <Search
            size={18}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
          />

          <input
            type="text"
            placeholder="Search connections..."
            className="w-full rounded-xl border border-slate-200 bg-white py-3 pl-11 pr-4 text-sm outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
          />
        </div>
      </div>

      {/* Count */}
      <div className="mt-7">
        <span className="inline-flex items-center rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm text-slate-600">
          <span className="font-bold text-slate-900">{connectionCount}</span>

          <span className="ml-2">
            {connectionCount === 1 ? "Connection" : "Connections"}
          </span>
        </span>
      </div>

      {/* Connection Cards */}
      <div className="mt-8 flex flex-wrap justify-center gap-6">
        {connections.map((user) => (
          <div
            key={user._id}
            className="group relative w-full overflow-hidden rounded-2xl border border-slate-200/80 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl hover:shadow-slate-200/50 sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)]"
          >
            {/* Subtle top gradient */}
            <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-blue-500 via-violet-500 to-indigo-500 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

            {/* Profile */}
            <div className="flex items-start justify-between">
              <div className="flex items-center gap-4">
                {/* Avatar */}
                <div className="relative">
                  <img
                    src={user.profileURL}
                    alt={`${user.firstname} ${user.lastname}`}
                    className="h-16 w-16 rounded-full object-cover ring-4 ring-slate-50"
                  />

                  {/* Online indicator */}
                  <span className="absolute bottom-0 right-0 h-4 w-4 rounded-full border-[3px] border-white bg-emerald-500" />
                </div>

                {/* Name */}
                <div className="min-w-0">
                  <h2 className="truncate text-lg font-semibold tracking-tight text-slate-900">
                    {user.firstname} {user.lastname}
                  </h2>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {user.skills?.slice(0, 3).map((skill, index) => (
                      <span
                        key={index}
                        className="rounded-lg border border-blue-100 bg-blue-50 px-2.5 py-1 text-xs font-medium text-blue-600"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* More */}
              <button
                className="rounded-xl p-2 text-slate-400 transition-all hover:bg-slate-100 hover:text-slate-700"
                title="More options"
              >
                <MoreHorizontal size={19} />
              </button>
            </div>

            {/* Divider */}
            <div className="my-5 h-px bg-slate-100" />

            {/* About */}
            <div>
              <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-slate-400">
                About
              </p>

              <p className="line-clamp-2 min-h-[48px] text-sm leading-6 text-slate-600">
                {user.about || "No about information available."}
              </p>
            </div>

            {/* Actions */}
            <div className="mt-6 flex gap-3">
              <button className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-slate-900 px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition-all duration-200 hover:bg-blue-600 hover:shadow-md">
                <MessageCircle size={17} />
                Message
              </button>

              <button
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-500 transition-all duration-200 hover:border-slate-300 hover:bg-slate-50 hover:text-slate-900"
                title="More options"
              >
                <MoreHorizontal size={18} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ConnectionUI;
