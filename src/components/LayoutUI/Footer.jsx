import {
  Code2,
  Mail,
  ArrowUpRight,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-gray-200 bg-white">
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-4 gap-16">
          {/* Logo */}

          <div>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center shadow-lg">
                <Code2 className="text-white" size={24} />
              </div>

              <div>
                <h2 className="text-2xl font-black">DevMatch</h2>

                <p className="text-sm text-gray-500">
                  Connect. Collaborate. Code.
                </p>
              </div>
            </div>

            <p className="mt-6 text-gray-500 leading-8">
              DevMatch helps developers meet, collaborate, build projects, join
              hackathons and grow together.
            </p>

            {/* Social */}

            <div className="flex gap-4 mt-8">
              <a className="w-11 h-11 rounded-xl bg-gray-100 flex items-center justify-center hover:bg-blue-600 hover:text-white transition">
                {/* <Github size={20} /> */}
              </a>

              <a className="w-11 h-11 rounded-xl bg-gray-100 flex items-center justify-center hover:bg-blue-600 hover:text-white transition">
                {/* <Linkedin size={20} /> */}
              </a>

              <a className="w-11 h-11 rounded-xl bg-gray-100 flex items-center justify-center hover:bg-blue-600 hover:text-white transition">
                {/* <Twitter size={20} /> */}
              </a>

              <a className="w-11 h-11 rounded-xl bg-gray-100 flex items-center justify-center hover:bg-blue-600 hover:text-white transition">
                <Mail size={20} />
              </a>
            </div>
          </div>

          {/* Product */}

          <div>
            <h3 className="font-bold text-lg">Product</h3>

            <div className="mt-6 space-y-4">
              <a className="block text-gray-500 hover:text-blue-600">
                Features
              </a>

              <a className="block text-gray-500 hover:text-blue-600">
                Discover Developers
              </a>

              <a className="block text-gray-500 hover:text-blue-600">
                Community
              </a>

              <a className="block text-gray-500 hover:text-blue-600">Updates</a>
            </div>
          </div>

          {/* Resources */}

          <div>
            <h3 className="font-bold text-lg">Resources</h3>

            <div className="mt-6 space-y-4">
              <a className="block text-gray-500 hover:text-blue-600">
                Documentation
              </a>

              <a className="block text-gray-500 hover:text-blue-600">Blog</a>

              <a className="block text-gray-500 hover:text-blue-600">Support</a>

              <a className="block text-gray-500 hover:text-blue-600">
                Help Center
              </a>
            </div>
          </div>

          {/* CTA Card */}

          <div>
            <div className="rounded-3xl bg-gradient-to-br from-blue-600 to-indigo-600 p-8 text-white">
              <h3 className="text-2xl font-bold">Ready to build?</h3>

              <p className="mt-4 text-blue-100 leading-7">
                Join thousands of developers building together every day.
              </p>

              <button className="btn bg-white text-blue-600 hover:bg-gray-100 rounded-full mt-8 border-none">
                Get Started
                <ArrowUpRight size={18} />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom */}

        <div className="border-t border-gray-200 mt-16 pt-8 flex flex-col md:flex-row justify-between gap-4">
          <p className="text-gray-500">
            © {new Date().getFullYear()} DevMatch. All rights reserved.
          </p>

          <div className="flex gap-8">
            <a className="text-gray-500 hover:text-blue-600">Privacy Policy</a>

            <a className="text-gray-500 hover:text-blue-600">Terms</a>

            <a className="text-gray-500 hover:text-blue-600">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
