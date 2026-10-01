// ===============================
// LIBRARY IMPORTS
// ===============================

import { Code2, Mail, ArrowUpRight } from "lucide-react";

import { Link } from "react-router-dom";

// ===============================
// FOOTER
// ===============================

const Footer = () => {
  return (
    <footer className="border-t border-gray-200 bg-white">
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-4 gap-16">
          {/* ===============================
              LOGO
          =============================== */}

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

            {/* ===============================
                SOCIAL
            =============================== */}

            <div className="flex gap-4 mt-8">
              <a
                href="#"
                aria-label="GitHub"
                className="w-11 h-11 rounded-xl bg-gray-100 flex items-center justify-center hover:bg-blue-600 hover:text-white transition"
              >
                {/* <Github size={20} /> */}
              </a>

              <a
                href="#"
                aria-label="LinkedIn"
                className="w-11 h-11 rounded-xl bg-gray-100 flex items-center justify-center hover:bg-blue-600 hover:text-white transition"
              >
                {/* <Linkedin size={20} /> */}
              </a>

              <a
                href="#"
                aria-label="Twitter"
                className="w-11 h-11 rounded-xl bg-gray-100 flex items-center justify-center hover:bg-blue-600 hover:text-white transition"
              >
                {/* <Twitter size={20} /> */}
              </a>

              <a
                href={`mailto:gorai123@gmail.com`}
                aria-label="Email DevMatch"
                className="w-11 h-11 rounded-xl bg-gray-100 flex items-center justify-center hover:bg-blue-600 hover:text-white transition"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>

          {/* ===============================
              PRODUCT
          =============================== */}

          <div>
            <h3 className="font-bold text-lg">Product</h3>

            <div className="mt-6 space-y-4">
              <a href="#" className="block text-gray-500 hover:text-blue-600">
                Features
              </a>

              <a href="#" className="block text-gray-500 hover:text-blue-600">
                Discover Developers
              </a>

              <a href="#" className="block text-gray-500 hover:text-blue-600">
                Community
              </a>

              <a href="#" className="block text-gray-500 hover:text-blue-600">
                Updates
              </a>
            </div>
          </div>

          {/* ===============================
              RESOURCES
          =============================== */}

          <div>
            <h3 className="font-bold text-lg">Resources</h3>

            <div className="mt-6 space-y-4">
              <Link
                to="/contact"
                className="block text-gray-500 hover:text-blue-600"
              >
                Support
              </Link>

              <Link
                to="/contact"
                className="block text-gray-500 hover:text-blue-600"
              >
                Help Center
              </Link>

              <a href="#" className="block text-gray-500 hover:text-blue-600">
                Documentation
              </a>

              <a href="#" className="block text-gray-500 hover:text-blue-600">
                Blog
              </a>
            </div>
          </div>

          {/* ===============================
              CTA CARD
          =============================== */}

          <div>
            <div className="rounded-3xl bg-gradient-to-br from-blue-600 to-indigo-600 p-8 text-white">
              <h3 className="text-2xl font-bold">Ready to build?</h3>

              <p className="mt-4 text-blue-100 leading-7">
                Join thousands of developers building together every day.
              </p>

              <Link
                to="/"
                className="btn bg-white text-blue-600 hover:bg-gray-100 rounded-full mt-8 border-none inline-flex items-center gap-2"
              >
                Get Started
                <ArrowUpRight size={18} />
              </Link>
            </div>
          </div>
        </div>

        {/* ===============================
            BOTTOM
        =============================== */}

        <div className="border-t border-gray-200 mt-16 pt-8 flex flex-col md:flex-row justify-between gap-4">
          <p className="text-gray-500">
            © {new Date().getFullYear()} DevMatch. All rights reserved.
          </p>

          {/* ===============================
              LEGAL LINKS
          =============================== */}

          <div className="flex flex-wrap gap-6">
            <Link to="/privacy" className="text-gray-500 hover:text-blue-600">
              Privacy Policy
            </Link>

            <Link to="/terms" className="text-gray-500 hover:text-blue-600">
              Terms & Conditions
            </Link>

            <Link to="/refund" className="text-gray-500 hover:text-blue-600">
              Refund & Cancellation
            </Link>

            <Link to="/contact" className="text-gray-500 hover:text-blue-600">
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
