import { Search, Users, Check, X, MapPin } from "lucide-react";
import { actionRequest } from "../../../global/globalAPI";
import { removeRequestUser } from "@/redux/features/userRequestSlice";
import { useDispatch } from "react-redux";

const RequestFeedUI = ({ requestData }) => {
  const dispatch = useDispatch();

  // API has not returned data / request failed
  if (!requestData) {
    return (
      <div className="mx-auto flex min-h-[450px] w-full max-w-7xl flex-col items-center justify-center px-6 text-center">
        <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-50 to-violet-50">
          <Users className="text-blue-500" size={30} />
        </div>

        <h1 className="mt-5 text-2xl font-bold text-slate-900">
          No requests found
        </h1>

        <p className="mt-2 max-w-md text-sm leading-6 text-slate-500">
          Start discovering developers, connect with them, and build your
          network.
        </p>
      </div>
    );
  }

  const connectionInfo = requestData.connectionInfo || [];

  const requestHandler = async (connectionId, status) => {
    try {
      const connectionResponse = await actionRequest(status, connectionId);

      dispatch(removeRequestUser(connectionId));

      console.log(connectionResponse);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="mx-auto w-full max-w-7xl px-5 py-10">
      {/* ================= HEADER ================= */}
      <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
        <div>
          {/* Label */}
          <div className="mb-3 flex items-center gap-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
              <Users size={19} />
            </div>

            <span className="text-sm font-semibold text-blue-600">
              Your Network
            </span>
          </div>

          <h1 className="text-3xl font-bold tracking-tight text-slate-900">
            Connection Requests
          </h1>

          <p className="mt-2 text-sm leading-6 text-slate-500">
            People who want to connect and collaborate with you.
          </p>
        </div>

        {/* Search */}
        <div className="relative w-full md:w-72">
          <Search
            size={17}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
          />

          <input
            type="text"
            placeholder="Search requests..."
            className="h-11 w-full rounded-xl border border-slate-200 bg-white pl-11 pr-4 text-sm text-slate-700 shadow-sm outline-none transition-all placeholder:text-slate-400 focus:border-blue-400 focus:ring-4 focus:ring-blue-50"
          />
        </div>
      </div>

      {/* ================= COUNT ================= */}
      {connectionInfo.length > 0 && (
        <div className="mt-7">
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-3.5 py-1.5">
            <span className="flex h-5 min-w-5 items-center justify-center rounded-full bg-blue-600 px-1.5 text-[11px] font-bold text-white">
              {connectionInfo.length}
            </span>

            <span className="text-xs font-semibold text-blue-700">
              Pending {connectionInfo.length === 1 ? "Request" : "Requests"}
            </span>
          </div>
        </div>
      )}

      {/* ================= REQUESTS ================= */}
      {connectionInfo.length > 0 ? (
        <div className="mt-7 flex flex-col items-center gap-5">
          {connectionInfo.map((data) => {
            const user = data.fromSenderId;

            return (
              <div
                key={data._id}
                className="group relative w-full max-w-4xl overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl hover:shadow-slate-200/60"
              >
                {/* Top Accent */}
                <div className="absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r from-blue-500 via-violet-500 to-blue-500 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                <div className="p-6">
                  <div className="flex flex-col gap-6 sm:flex-row sm:items-center">
                    {/* ================= PROFILE ================= */}
                    <div className="flex min-w-0 flex-1 items-start gap-5">
                      {/* Avatar */}
                      <div className="relative shrink-0">
                        <div className="rounded-full bg-gradient-to-br from-blue-100 via-violet-100 to-indigo-100 p-[3px]">
                          <img
                            src={
                              user.profileURL ||
                              `https://ui-avatars.com/api/?name=${encodeURIComponent(
                                `${user.firstname} ${user.lastname}`,
                              )}&background=eff6ff&color=2563eb`
                            }
                            alt={`${user.firstname} ${user.lastname}`}
                            className="h-20 w-20 rounded-full border-2 border-white object-cover"
                          />
                        </div>

                        {/* Online */}
                        <span className="absolute bottom-1 right-1 h-4 w-4 rounded-full border-[3px] border-white bg-emerald-500" />
                      </div>

                      {/* User Information */}
                      <div className="min-w-0 flex-1">
                        {/* Name */}
                        <div className="flex items-center gap-2">
                          <h2 className="truncate text-xl font-bold tracking-tight text-slate-900">
                            {user.firstname} {user.lastname}
                          </h2>

                          <span className="hidden rounded-full bg-blue-50 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-blue-600 sm:inline-block">
                            Request
                          </span>
                        </div>

                        {/* Skills */}
                        {user.skills?.length > 0 && (
                          <div className="mt-3 flex flex-wrap gap-2">
                            {user.skills.slice(0, 3).map((skill, index) => (
                              <span
                                key={index}
                                className="rounded-full border border-blue-100 bg-blue-50 px-3 py-1 text-xs font-medium text-blue-600 transition-all duration-200 group-hover:border-blue-200 group-hover:bg-blue-100"
                              >
                                {skill}
                              </span>
                            ))}

                            {user.skills.length > 3 && (
                              <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-500">
                                +{user.skills.length - 3}
                              </span>
                            )}
                          </div>
                        )}

                        {/* Location */}
                        {user.location && (
                          <div className="mt-3 flex items-center gap-1.5 text-xs text-slate-400">
                            <MapPin size={13} />

                            <span>{user.location}</span>
                          </div>
                        )}

                        {/* About */}
                        <p className="mt-3 line-clamp-2 max-w-2xl text-sm leading-6 text-slate-600">
                          {user.about || "No about information available."}
                        </p>
                      </div>
                    </div>

                    {/* ================= ACTIONS ================= */}
                    <div className="flex shrink-0 items-center gap-3 border-t border-slate-100 pt-5 sm:w-36 sm:flex-col sm:border-0 sm:pt-0">
                      <button
                        onClick={() => requestHandler(data._id, "Accepted")}
                        className="flex h-11 w-full items-center justify-center gap-2 rounded-xl bg-blue-600 px-4 text-sm font-semibold text-white shadow-md shadow-blue-100 transition-all duration-200 hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-200 active:scale-[0.98]"
                      >
                        <Check size={16} strokeWidth={2.5} />
                        Accept
                      </button>

                      <button
                        onClick={() => requestHandler(data._id, "Rejected")}
                        className="flex h-11 w-full items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-4 text-sm font-medium text-slate-600 transition-all duration-200 hover:border-red-200 hover:bg-red-50 hover:text-red-600 active:scale-[0.98]"
                      >
                        <X size={16} />
                        Ignore
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        /* ================= EMPTY STATE ================= */
        <div className="flex min-h-[400px] flex-col items-center justify-center text-center">
          <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-50 to-violet-50">
            <Users className="text-blue-600" size={28} />
          </div>

          <h2 className="mt-5 text-xl font-bold text-slate-900">
            No connection requests
          </h2>

          <p className="mt-2 max-w-sm text-sm leading-6 text-slate-500">
            You're all caught up. New connection requests will appear here.
          </p>
        </div>
      )}
    </div>
  );
};

export default RequestFeedUI;
