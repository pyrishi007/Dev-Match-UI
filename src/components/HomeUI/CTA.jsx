import { ArrowRight, Sparkles } from "lucide-react";

const CTA = () => {
  return (
    <section className="py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="relative overflow-hidden rounded-[40px]">
          {/* Background */}

          <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600" />

          {/* Blur Effects */}

          <div className="absolute -top-32 -left-20 w-72 h-72 rounded-full bg-white/20 blur-3xl" />

          <div className="absolute -bottom-32 right-0 w-72 h-72 rounded-full bg-cyan-300/20 blur-3xl" />

          {/* Content */}

          <div className="relative z-10 px-8 lg:px-20 py-20">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left */}

              <div>
                <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md rounded-full px-5 py-2 text-white border border-white/20">
                  <Sparkles size={18} />
                  Join the Community
                </div>

                <h2 className="mt-8 text-5xl lg:text-6xl font-black leading-tight text-white">
                  Your Next
                  <br />
                  Coding Partner
                  <br />
                  Is Waiting.
                </h2>

                <p className="mt-6 text-lg text-blue-100 leading-8 max-w-xl">
                  Whether you're looking for teammates, startup co-founders,
                  hackathon partners, or open-source contributors — DevMatch
                  helps you connect with the right people.
                </p>
              </div>

              {/* Right */}

              <div className="flex flex-col lg:items-end gap-5">
                <button className="btn bg-white text-blue-600 hover:bg-gray-100 border-none btn-lg rounded-full w-full lg:w-72">
                  Get Started Free
                  <ArrowRight size={18} />
                </button>

                <button className="btn btn-outline border-white text-white hover:bg-white hover:text-blue-600 btn-lg rounded-full w-full lg:w-72">
                  Explore Developers
                </button>

                <div className="flex gap-8 mt-6 text-white">
                  <div>
                    <h3 className="text-3xl font-black">15K+</h3>

                    <p className="text-blue-100">Developers</p>
                  </div>

                  <div>
                    <h3 className="text-3xl font-black">80K+</h3>

                    <p className="text-blue-100">Connections</p>
                  </div>

                  <div>
                    <h3 className="text-3xl font-black">120+</h3>

                    <p className="text-blue-100">Countries</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
