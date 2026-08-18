import {
  UserPlus,
  UserCircle2,
  Search,
  HeartHandshake,
  Rocket,
  ArrowDown,
} from "lucide-react";

const steps = [
  {
    icon: UserPlus,
    title: "Create Account",
    desc: "Sign up in seconds using your email and start your developer journey.",
    color: "bg-blue-50 text-blue-600",
  },
  {
    icon: UserCircle2,
    title: "Complete Your Profile",
    desc: "Showcase your skills, tech stack, experience, GitHub and interests.",
    color: "bg-purple-50 text-purple-600",
  },
  {
    icon: Search,
    title: "Discover Developers",
    desc: "Browse developers who match your skills and collaboration goals.",
    color: "bg-emerald-50 text-emerald-600",
  },
  {
    icon: HeartHandshake,
    title: "Send Connection",
    desc: "Send connection requests and build meaningful developer relationships.",
    color: "bg-pink-50 text-pink-600",
  },
  {
    icon: Rocket,
    title: "Build Together",
    desc: "Collaborate on startups, hackathons and open-source projects.",
    color: "bg-orange-50 text-orange-600",
  },
];

const HowItWorks = () => {
  return (
    <section id="how" className="py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}

        <div className="text-center max-w-3xl mx-auto">
          <span className="badge badge-primary badge-outline px-5 py-4">
            HOW IT WORKS
          </span>

          <h2 className="text-5xl font-black mt-6">
            Meet Developers in
            <span className="text-blue-600"> Five Simple Steps</span>
          </h2>

          <p className="mt-6 text-lg text-gray-500 leading-8">
            DevMatch makes networking simple. Discover developers, connect
            instantly, and start building amazing products together.
          </p>
        </div>

        {/* Timeline */}

        <div className="mt-24">
          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <div key={step.title}>
                <div className="grid lg:grid-cols-[100px_1fr] gap-8 items-center">
                  {/* Icon */}

                  <div className="flex justify-center">
                    <div
                      className={`w-20 h-20 rounded-3xl flex items-center justify-center shadow-sm ${step.color}`}
                    >
                      <Icon size={34} />
                    </div>
                  </div>

                  {/* Card */}

                  <div className="bg-white border border-gray-100 rounded-[30px] p-8 shadow-sm hover:shadow-xl transition-all duration-500">
                    <div className="flex items-center justify-between flex-wrap gap-4">
                      <div>
                        <span className="text-blue-600 font-semibold">
                          Step {index + 1}
                        </span>

                        <h3 className="text-3xl font-bold mt-2">
                          {step.title}
                        </h3>

                        <p className="text-gray-500 mt-4 leading-7 max-w-2xl">
                          {step.desc}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Arrow */}

                {index !== steps.length - 1 && (
                  <div className="flex justify-center py-6">
                    <ArrowDown className="text-blue-500" size={28} />
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
