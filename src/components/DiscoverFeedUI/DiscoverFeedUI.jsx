import { useState } from "react";
import { Heart, X, MapPin, Briefcase, Cake, User } from "lucide-react";

const DiscoverFeedUI = ({ feedData = [] }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(null);
  const [animating, setAnimating] = useState(false);4
  const age = 45

  const developer = feedData[currentIndex];


  const handleAction = (type) => {
    if (animating || !developer) return;

    setAnimating(true);

    setDirection(type === "Interested" ? "right" : "left");

    setTimeout(() => {
      setCurrentIndex((prev) => prev + 1);
      setDirection(null);
      setAnimating(false);
    }, 300);
  };

  if (!developer) {
    return (
      <div className="flex min-h-[600px] items-center justify-center">
        <div className="rounded-[30px] bg-white p-10 text-center shadow-xl">
          <Heart size={45} className="mx-auto text-pink-500" />

          <h2 className="mt-5 text-2xl font-bold text-slate-900">
            You're all caught up!
          </h2>

          <p className="mt-2 text-slate-500">No more developers to discover.</p>

          <button
            onClick={() => setCurrentIndex(0)}
            className="mt-6 rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white hover:bg-blue-700"
          >
            Start Again
          </button>
        </div>
      </div>
    );
  }



  // Handle skills whether API gives string or array
  const skills = Array.isArray(developer.skills)
    ? developer.skills
    : developer.skills
      ? developer.skills.split(",").map((skill) => skill.trim())
      : [];

  const image =
    developer.profileURL ||
    `https://ui-avatars.com/api/?name=${encodeURIComponent(
      `${developer.firstname} ${developer.lastname}`,
    )}&background=eff6ff&color=2563eb&size=500`;

  return (
    <div className="flex items-center justify-center">
      {/* CARD */}
      <div
        className={`
          w-[440px]
          rounded-[30px]
          bg-white
          p-4
          shadow-[0_25px_60px_rgba(0,0,0,.12)]
          transition-all
          duration-300
          ease-out

          ${
            direction === "right"
              ? "translate-x-[80%] rotate-[5deg] opacity-0"
              : ""
          }

          ${
            direction === "left"
              ? "-translate-x-[80%] -rotate-[5deg] opacity-0"
              : ""
          }
        `}
      >
        {/* IMAGE */}
        <div className="relative overflow-hidden rounded-[24px]">
          <img
            src={image}
            alt={`${developer.firstname} ${developer.lastname}`}
            className="h-[360px] w-full object-cover"
          />

          {/* Gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/10 to-transparent" />

          {/* Online */}
          <div className="absolute right-5 top-5 flex items-center gap-2 rounded-full bg-emerald-500/80 px-3 py-2 text-sm font-semibold text-white backdrop-blur">
            <span className="h-2 w-2 rounded-full bg-white" />
            Online
          </div>

          {/* Profile */}
          <div className="absolute bottom-7 left-7 right-7 text-white">
            <h1 className="text-3xl font-black">
              {developer.firstname} {developer.lastname}
            </h1>

            {/* Age + Gender */}
            <div className="mt-2 flex items-center gap-4 text-sm text-slate-200">
              {age && (
                <div className="flex items-center gap-1.5">
                  <Cake size={15} />
                  <span>23</span>
                </div>
              )}

              {age && developer.gender && (
                <span className="h-1 w-1 rounded-full bg-slate-300" />
              )}

              {developer.gender && (
                <div className="flex items-center gap-1.5">
                  <User size={15} />
                  <span>{developer.gender}</span>
                </div>
              )}
            </div>

            {/* About */}
            <p className="mt-4 line-clamp-3 text-sm leading-6 font-light text-gray-300">
              {developer.about ||
                "No information available about this developer."}
            </p>
          </div>
        </div>

        {/* DETAILS */}
        <div className="mt-6 flex justify-between gap-3">
          {/* Location */}
          <div className="flex flex-1 items-center gap-3 rounded-2xl bg-slate-50 px-5 py-4">
            <MapPin className="shrink-0 text-blue-600" size={20} />

            <div className="min-w-0">
              <p className="text-xs text-slate-500">Location</p>

              <h2 className="truncate text-sm font-semibold text-slate-900">
                {developer.location || "Not specified"}
              </h2>
            </div>
          </div>

          {/* Experience */}
          <div className="flex flex-1 items-center gap-3 rounded-2xl bg-slate-50 px-5 py-4">
            <Briefcase className="shrink-0 text-indigo-600" size={20} />

            <div>
              <p className="text-xs text-slate-500">Experience</p>

              <h2 className="text-sm font-semibold text-slate-900">
                {developer.experience || "Fresher"}
              </h2>
            </div>
          </div>
        </div>

        {/* SKILLS */}
        <div className="mt-7">
          <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-slate-500">
            Skills
          </p>

          <div className="flex flex-wrap gap-2">
            {skills.slice(0, 6).map((skill, index) => (
              <span
                key={index}
                className="rounded-full bg-blue-50 px-4 py-2 text-xs font-semibold text-blue-700 transition hover:bg-blue-600 hover:text-white"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* BUTTONS */}
        <div className="mt-8 grid grid-cols-2 gap-4">
          {/* Ignore */}
          <button
            disabled={animating}
            onClick={() => handleAction("Ignore")}
            className="
              flex
              h-12
              items-center
              justify-center
              gap-2
              rounded-2xl
              border-2
              border-slate-200
              bg-white
              text-sm
              font-semibold
              text-slate-700
              transition-all
              duration-200
              hover:-translate-y-0.5
              hover:border-slate-300
              hover:bg-slate-50
              hover:shadow-md
              active:scale-[0.98]
              disabled:opacity-50
            "
          >
            <X size={21} />
            Ignore
          </button>

          {/* Interested */}
          <button
            disabled={animating}
            onClick={() => handleAction("Interested")}
            className="
              flex
              h-12
              items-center
              justify-center
              gap-2
              rounded-2xl
              bg-gradient-to-r
              from-pink-500
              to-red-500
              text-sm
              font-semibold
              text-white
              shadow-lg
              shadow-pink-200
              transition-all
              duration-200
              hover:-translate-y-0.5
              hover:shadow-xl
              hover:shadow-pink-200
              active:scale-[0.98]
              disabled:opacity-50
            "
          >
            <Heart size={21} />
            Interested
          </button>
        </div>
      </div>
    </div>
  );
};

export default DiscoverFeedUI;
