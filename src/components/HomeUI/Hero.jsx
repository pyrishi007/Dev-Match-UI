import { ArrowRight, CheckCircle2, Sparkles } from "lucide-react";
import FloatingCards from "./FloatingCards";

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-white">
      {/* Background Blur */}
      <div className="absolute top-0\ left-1/2 -translate-x-1/2 w-[700px] h-[700px] rounded-full bg-blue-200/40 blur-[140px] -z-10" />

      <div className="max-w-7xl mx-auto px-6 pt-24 pb-32">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* LEFT */}

          <div className="max-w-2xl">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-700 shadow-sm">
              <Sparkles size={16} />
              <span>Trusted by 15,000+ Developers Worldwide</span>
            </div>

            {/* Heading */}
            <h1 className="mt-8 text-5xl md:text-6xl lg:text-7xl font-extrabold leading-[1.05] tracking-tight text-gray-900">
              Meet Your Next
              <span className="block bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                Coding Partner.
              </span>
            </h1>

            {/* Description */}
            <p className="mt-8 max-w-xl text-lg md:text-xl leading-8 text-gray-600">
              Build faster with developers who match your skills, interests, and
              goals. Whether you're launching a startup, joining a hackathon,
              contributing to open source, or preparing for interviews,
              DevConnect helps you find the right teammates.
            </p>

            {/* CTA */}
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <button className="btn btn-lg rounded-full border-none bg-blue-600 px-8 text-white transition-all duration-300 hover:bg-blue-700 hover:scale-105">
                Get Started Free
                <ArrowRight size={18} />
              </button>
            </div>

            {/* Social Proof */}
            <div className="mt-12 flex flex-wrap items-center gap-8 text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <CheckCircle2 size={18} className="text-green-500" />
                <span>No Credit Card Required</span>
              </div>

              <div className="flex items-center gap-2">
                <CheckCircle2 size={18} className="text-green-500" />
                <span>100% Secure Authentication</span>
              </div>

              <div className="flex items-center gap-2">
                <CheckCircle2 size={18} className="text-green-500" />
                <span>Global Developer Community</span>
              </div>
            </div>
          </div>

          {/* RIGHT */}

          <FloatingCards />
        </div>
      </div>
    </section>
  );
};

export default Hero;
