import { Users, HeartHandshake, Globe2, Star } from "lucide-react";

const stats = [
  {
    icon: Users,
    number: "15K+",
    label: "Active Developers",
    description: "Growing every day",
    color: "bg-blue-50 text-blue-600",
  },
  {
    icon: HeartHandshake,
    number: "80K+",
    label: "Connections Made",
    description: "Meaningful collaborations",
    color: "bg-emerald-50 text-emerald-600",
  },
  {
    icon: Globe2,
    number: "120+",
    label: "Countries",
    description: "Worldwide community",
    color: "bg-purple-50 text-purple-600",
  },
  {
    icon: Star,
    number: "4.9",
    label: "Average Rating",
    description: "Loved by developers",
    color: "bg-yellow-50 text-yellow-600",
  },
];

const Stats = () => {
  return (
    <section className="py-10 bg-gradient-to-b from-white to-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}

        <div className="text-center mb-20">
          <span className="badge badge-primary badge-outline px-5 py-4">
            COMMUNITY
          </span>

          <h2 className="mt-6 text-5xl font-black tracking-tight">
            Trusted by Developers
            <span className="text-blue-600"> Worldwide</span>
          </h2>

          <p className="mt-5 text-lg text-gray-500 max-w-2xl mx-auto">
            Thousands of developers are already networking, collaborating and
            building amazing products together.
          </p>
        </div>

        {/* Cards */}

        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8">
          {stats.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.label}
                className="group bg-white rounded-[30px] border border-gray-100 p-8 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500"
              >
                <div
                  className={`w-16 h-16 rounded-2xl flex items-center justify-center ${item.color}`}
                >
                  <Icon size={30} />
                </div>

                <h2 className="text-5xl font-black mt-8">{item.number}</h2>

                <h3 className="mt-3 font-bold text-xl">{item.label}</h3>

                <p className="mt-2 text-gray-500">{item.description}</p>

                {/* Bottom Line */}

                <div className="mt-8 h-1 w-12 rounded-full bg-blue-600 group-hover:w-full transition-all duration-500" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Stats;
