// ===============================
// CONTACT US
// ===============================

import { Link } from "react-router-dom";

// ===============================
// CONSTANTS
// ===============================

const SITE = "DevMatch";
const DOMAIN = "devsmatch.in";
const OWNER = "Rohit Gorain";
const EMAIL = "gorai123@gmail.com";
const PHONE = "8210874695";

const ADDRESS =
  "Gorai Villa, Near Hanuman Mandir, Rajpalli, Post Jamtara, Jamtara, Jharkhand – 815351, India";

const UPDATED = "1 October 2026";

// ===============================
// REUSABLE SECTION
// ===============================

const Section = ({ title, children }) => {
  return (
    <section className="mb-10">
      <h2 className="mb-3 text-xl font-semibold tracking-tight text-slate-900">
        {title}
      </h2>

      <div className="space-y-4 text-[15px] leading-7 text-slate-600">
        {children}
      </div>
    </section>
  );
};

// ===============================
// BULLET LIST
// ===============================

const BulletList = ({ items }) => {
  return (
    <ul className="list-disc space-y-2 pl-6">
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
};

// ===============================
// CONTACT INFORMATION
// ===============================

const ContactBlock = () => {
  return (
    <address className="not-italic rounded-xl border border-slate-200 bg-slate-50 p-5 text-[15px] leading-7 text-slate-600">
      <p className="font-semibold text-slate-900">
        {OWNER} (sole owner and operator of {SITE})
      </p>

      <p>{ADDRESS}</p>

      <p>
        Email:{" "}
        <a
          href={`mailto:${EMAIL}`}
          className="text-indigo-600 underline underline-offset-2 hover:text-indigo-800"
        >
          {EMAIL}
        </a>
      </p>

      <p>Phone: {PHONE}</p>

      <p>
        Website:{" "}
        <a
          href={`https://${DOMAIN}`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-indigo-600 underline underline-offset-2 hover:text-indigo-800"
        >
          {DOMAIN}
        </a>
      </p>
    </address>
  );
};

// ===============================
// CONTACT PAGE
// ===============================

const Contact = () => {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-800">
      {/* ===============================
          HEADER
      =============================== */}

      <header className="bg-gradient-to-r from-indigo-600 to-violet-600 text-white">
        <div className="mx-auto max-w-4xl px-5 py-12">
          <Link
            to="/"
            className="text-sm text-indigo-100 transition hover:text-white"
          >
            ← Back to DevMatch
          </Link>

          <h1 className="mt-5 text-3xl font-bold tracking-tight sm:text-4xl">
            Contact Us
          </h1>

          <p className="mt-2 text-sm text-indigo-100">
            Last updated: {UPDATED}
          </p>
        </div>
      </header>

      {/* ===============================
          CONTENT
      =============================== */}

      <article className="mx-auto max-w-4xl px-5 py-12">
        {/* INTRODUCTION */}

        <div className="mb-10 rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
          <p className="text-[15px] leading-7 text-slate-600">
            Questions about {SITE}, a payment, a refund or your data? Reach us
            using the contact details below.
          </p>
        </div>

        {/* 1. BUSINESS DETAILS */}

        <Section title="1. Business details">
          <ContactBlock />
        </Section>

        {/* 2. WHAT TO INCLUDE */}

        <Section title="2. What to include when you write">
          <p>
            To help us respond to your request as quickly as possible, please
            include:
          </p>

          <BulletList
            items={[
              "The email address you registered with.",
              "For payment or refund queries: the Razorpay payment ID or order ID and the item you bought.",
              "A short description of the problem, and a screenshot if it helps.",
            ]}
          />
        </Section>

        {/* 3. RESPONSE TIMES */}

        <Section title="3. Response times">
          <BulletList
            items={[
              "General and payment queries: we reply within 2 business days.",
              "Refund requests: see the Refund & Cancellation Policy for the full timeline.",
              "Privacy requests and complaints: acknowledged within 2 business days, resolved within 15 days.",
            ]}
          />
        </Section>

        {/* ===============================
            EMAIL SUPPORT
        =============================== */}

        <div className="mb-10 rounded-xl border border-indigo-100 bg-indigo-50 p-6">
          <h2 className="mb-2 text-lg font-semibold text-slate-900">
            Email us
          </h2>

          <p className="text-[15px] leading-7 text-slate-600">
            For general support, payment questions, refund requests or privacy
            concerns, contact us at{" "}
            <a
              href={`mailto:${EMAIL}`}
              className="font-medium text-indigo-600 underline underline-offset-2 hover:text-indigo-800"
            >
              {EMAIL}
            </a>
            .
          </p>
        </div>

        {/* ===============================
            LEGAL PAGE NAVIGATION
        =============================== */}

        <nav className="mt-12 flex flex-wrap gap-x-6 gap-y-3 border-t border-slate-200 pt-8 text-sm">
          <Link
            to="/terms"
            className="text-indigo-600 underline underline-offset-2 hover:text-indigo-800"
          >
            Terms & Conditions
          </Link>

          <Link
            to="/privacy"
            className="text-indigo-600 underline underline-offset-2 hover:text-indigo-800"
          >
            Privacy Policy
          </Link>

          <Link
            to="/refund"
            className="text-indigo-600 underline underline-offset-2 hover:text-indigo-800"
          >
            Refund & Cancellation
          </Link>

          <Link
            to="/contact"
            className="font-medium text-indigo-600 underline underline-offset-2 hover:text-indigo-800"
          >
            Contact Us
          </Link>
        </nav>

        {/* COPYRIGHT */}

        <p className="mt-8 text-center text-sm text-slate-400">
          © {new Date().getFullYear()} {SITE}. All rights reserved.
        </p>
      </article>
    </main>
  );
};

export default Contact;