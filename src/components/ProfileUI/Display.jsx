import { MapPin, Heart, X, FileStack, UserRoundPen } from "lucide-react";

const Display = ({ user }) => {
  console.log(user);
  
  return (
    <div className="flex h-full w-full">
      <div className="flex flex-1 flex-col overflow-hidden rounded-[32px] border border-white/70 bg-white/90 shadow-xl">
        {/* IMAGE */}
        <div className="relative flex-1 min-h-[430px] overflow-hidden">
          <img
            src={user.photo}
            alt="Profile"
            className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 hover:scale-105"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent" />

          <div className="absolute bottom-6 left-6 text-white">
            <h1 className="text-4xl font-extrabold tracking-tight drop-shadow-lg">
              {user.firstname || "firstname"} {user.lastname || "lastname"}
            </h1>

            <p className="mt-2 text-sm font-medium text-slate-200">
              {user.age || "age"} • {user.gender || "Gender"}
            </p>
          </div>
        </div>

        {/* BODY */}
        <div className="space-y-5 p-7">
          <div className="flex items-start gap-4 rounded-2xl p-5 shadow-sm">
            <div className="rounded-xl p-2">
              <UserRoundPen className="text-blue-600" size={20} />
            </div>

            <div className="flex-1">
              <h3 className="text-sm font-bold uppercase tracking-wide text-slate-500">
                About
              </h3>

              <p className="text-[15px] leading-6 text-slate-700 line-clamp-4 mt-3">
                {user.about || "Tell developers something about yourself."}
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4 rounded-2xl border border-indigo-100 p-5 shadow-sm">
            <div className="rounded-xl bg-white p-2">
              <FileStack className="text-indigo-600" size={20} />
            </div>

            <div className="flex-1">
              <h3 className="text-sm font-bold uppercase tracking-wide text-slate-500">
                Skills
              </h3>

              <div className="mt-3 flex flex-wrap gap-2">
                <p className="text-sm text-slate-700">
                  {user.skills || "React, JS, Node"}
                </p>
              </div>
            </div>
          </div>

          <div className="flex items-start gap-4 rounded-2xl border border-indigo-100 p-5 shadow-sm">
            <div className="rounded-xl bg-white p-2">
              <MapPin className="text-blue-600" size={20} />
            </div>

            <div>
              <p className="text-sm font-semibold text-slate-500">LOCATION</p>
              <p className="text-sm mt-3 text-slate-700">Bangalore, India</p>
            </div>
          </div>

          <div className="flex gap-3 pt-2">
            <button className="flex-1 rounded-2xl border border-slate-200 bg-white py-3 font-semibold text-slate-700 transition-all duration-300 hover:-translate-y-1 hover:bg-slate-50 hover:shadow-md">
              <div className="flex items-center justify-center gap-2">
                <X size={18} />
                Ignore
              </div>
            </button>

            <button className="flex-1 rounded-2xl bg-gradient-to-r from-pink-500 via-rose-500 to-red-500 py-3 font-semibold text-white shadow-lg shadow-rose-500/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-rose-500/40">
              <div className="flex items-center justify-center gap-2">
                <Heart size={18} />
                Interested
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Display;
