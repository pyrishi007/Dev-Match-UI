import {
  MapPin,
  Briefcase,
  // Github,
  Heart,
  Code2,
  Star,
} from "lucide-react";

const developers = [
  {
    name: "Rahul Sharma",
    role: "MERN Stack Developer",
    location: "Bangalore, India",
    experience: "3+ Years",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80",
    skills: ["React", "Node.js", "MongoDB"],
    available: true,
  },
  {
    name: "Emily Johnson",
    role: "Frontend Engineer",
    location: "Toronto, Canada",
    experience: "5+ Years",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80",
    skills: ["Next.js", "React", "TypeScript"],
    available: false,
  },
];

const FloatingCards = () => {
  return (
    <div className="relative hidden h-[650px] items-center justify-center lg:flex">
      {/* Background Glow */}
      <div className="absolute h-[540px] w-[540px] rounded-full bg-gradient-to-r from-blue-100 via-sky-100 to-indigo-100 opacity-60 blur-[90px]" />

      {/* Main Profile Card */}
      <div className="relative z-20 w-[380px] rounded-[30px] border border-gray-100 bg-white p-7 shadow-[0_30px_70px_rgba(15,23,42,0.14)] transition-all duration-500 hover:-translate-y-2">
        {/* Header */}
        <div className="flex items-center gap-4">
          <img
            src={developers[0].image}
            alt={developers[0].name}
            className="h-20 w-20 rounded-2xl object-cover ring-4 ring-blue-50"
          />

          <div className="flex-1">
            <h2 className="text-xl font-bold text-gray-900">
              {developers[0].name}
            </h2>

            <p className="mt-1 text-sm text-gray-500">{developers[0].role}</p>
          </div>
        </div>

        {/* Info */}
        <div className="mt-8 space-y-5">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-gray-500">
              <MapPin size={16} />

              <span className="text-sm">{developers[0].location}</span>
            </div>

            <span className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold text-emerald-700">
              ● Available
            </span>
          </div>

          <div className="flex items-center gap-2 text-gray-500">
            <Briefcase size={16} />

            <span className="text-sm">{developers[0].experience}</span>
          </div>

          <div className="flex items-center gap-2">
            {/* <Github size={16} className="text-gray-400" /> */}

            <span className="text-sm text-blue-600 hover:underline cursor-pointer">
              github.com/rahul
            </span>
          </div>
        </div>

        {/* Skills */}
        <div className="mt-8 flex flex-wrap gap-2">
          {developers[0].skills.map((skill) => (
            <span
              key={skill}
              className="rounded-full border border-blue-100 bg-blue-50 px-4 py-2 text-sm font-medium text-blue-700 transition-colors hover:bg-blue-100"
            >
              {skill}
            </span>
          ))}
        </div>

        {/* Buttons */}
        <div className="mt-10 flex gap-3">
          <button className="btn flex-1 rounded-full border-0 bg-gray-900 text-white hover:bg-black">
            Ignore
          </button>

          <button className="btn flex-1 rounded-full border-0 bg-gradient-to-r from-blue-600 to-indigo-500 text-white hover:from-blue-700 hover:to-indigo-600">
            Interested ❤️
          </button>
        </div>
      </div>
      {/* Floating Profile Card */}
      <div className="absolute top-4 -right-8 w-72 rounded-3xl border border-gray-100 bg-white p-5 shadow-[0_20px_50px_rgba(15,23,42,0.12)] transition-all duration-500 hover:-translate-y-1">
        <div className="flex items-center gap-3">
          <img
            src={developers[1].image}
            alt={developers[1].name}
            className="h-14 w-14 rounded-xl object-cover"
          />

          <div>
            <h3 className="font-semibold text-gray-900">
              {developers[1].name}
            </h3>

            <p className="text-sm text-gray-500">{developers[1].role}</p>
          </div>
        </div>

        <div className="mt-5 flex flex-wrap gap-2">
          {developers[1].skills.map((skill) => (
            <span
              key={skill}
              className="rounded-full border border-gray-200 bg-gray-50 px-3 py-1 text-xs font-medium text-gray-700"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>

      {/* Floating Stats Card */}
      <div className="absolute bottom-8 left-0 rounded-3xl border border-gray-100 bg-white p-6 shadow-[0_20px_50px_rgba(15,23,42,0.12)]">
        <div className="flex items-center gap-8">
          <div>
            <h2 className="text-3xl font-black text-blue-600">15K+</h2>

            <p className="mt-1 text-sm text-gray-500">Developers</p>
          </div>

          <div>
            <h2 className="text-3xl font-black text-pink-500">80K+</h2>

            <p className="mt-1 text-sm text-gray-500">Successful Matches</p>
          </div>
        </div>
      </div>

      {/* Floating Heart */}
      <div className="absolute left-0 top-24 rounded-full border border-pink-100 bg-white p-4 shadow-xl transition-transform duration-300 hover:scale-110">
        <Heart size={22} className="text-pink-500" fill="currentColor" />
      </div>

      {/* Floating Code */}
      <div className="absolute bottom-28 right-0 rounded-full border border-blue-100 bg-white p-4 shadow-xl transition-transform duration-300 hover:scale-110">
        <Code2 size={22} className="text-blue-600" />
      </div>

      {/* Rating */}
      <div className="absolute left-8 top-56 flex items-center gap-2 rounded-full border border-gray-100 bg-white px-5 py-3 shadow-xl">
        <Star size={18} className="text-yellow-400" fill="currentColor" />

        <span className="font-semibold text-gray-700">4.9 Rating</span>
      </div>
    </div>
  );
};

export default FloatingCards;
