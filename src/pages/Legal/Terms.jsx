// ===============================
// TERMS & CONDITIONS
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
// PAID PRODUCTS
// ===============================

const PRODUCTS = [
  {
    name: "Profile Boost",
    description:
      "Priority placement of your profile in other developers’ feeds for 24 hours from activation",
    price: "₹49",
  },
  {
    name: "Connection Pack",
    description:
      "20 additional connection requests added to your account (no expiry while your account is active)",
    price: "₹79",
  },
  {
    name: "Verified Dev Badge",
    description:
      "A badge shown on your profile for as long as your account is active",
    price: "₹149",
  },
];

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
// PRODUCTS TABLE
// ===============================

const Products = () => {
  return (
    <div className="overflow-x-auto rounded-xl border border-slate-200">
      <table className="w-full min-w-[650px] text-left text-sm">
        <thead className="bg-indigo-50 text-slate-700">
          <tr>
            <th className="px-4 py-3 font-semibold">Item</th>

            <th className="px-4 py-3 font-semibold">
              What you get
            </th>

            <th className="whitespace-nowrap px-4 py-3 font-semibold">
              Price (INR)
            </th>
          </tr>
        </thead>

        <tbody className="bg-white">
          {PRODUCTS.map((product) => (
            <tr
              key={product.name}
              className="border-t border-slate-100"
            >
              <td className="px-4 py-3 font-medium text-slate-900">
                {product.name}
              </td>

              <td className="px-4 py-3 text-slate-600">
                {product.description}
              </td>

              <td className="whitespace-nowrap px-4 py-3 font-medium text-slate-900">
                {product.price}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

// ===============================
// TERMS PAGE
// ===============================

const Terms = () => {
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
            Terms & Conditions
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
            These terms govern your use of {SITE} ({DOMAIN}), a platform where
            developers create profiles, discover each other and send
            connection requests. By creating an account or using {SITE}, you
            agree to these Terms & Conditions.
          </p>
        </div>

        {/* 1. WHO RUNS DEVMATCH */}

        <Section title="1. Who runs DevMatch">
          <p>
            {SITE} is owned and operated by {OWNER}, an individual, at the
            address given in section 15. In these terms, “we”, “us” and “our”
            mean {OWNER}.
          </p>
        </Section>

        {/* 2. ELIGIBILITY */}

        <Section title="2. Eligibility">
          <p>
            You must be at least 18 years old and legally able to enter into a
            contract under Indian law. We may ask you to confirm your age and
            may remove accounts that appear to belong to anyone under 18.
          </p>
        </Section>

        {/* 3. YOUR ACCOUNT */}

        <Section title="3. Your account">
          <BulletList
            items={[
              "Give accurate details when you register (name, email, phone number, age, gender and skills).",
              "Keep your password confidential. You are responsible for activity on your account.",
              "Keep one account per person. Do not create accounts for someone else or share yours.",
              "Tell us promptly if you suspect unauthorised access.",
            ]}
          />
        </Section>

        {/* 4. ACCEPTABLE USE */}

        <Section title="4. Acceptable use">
          <p>You agree not to:</p>

          <BulletList
            items={[
              "impersonate any person or post false, misleading or fake profile information;",
              "harass, threaten, abuse or discriminate against other users, or send unwanted or repeated requests (spam);",
              "post unlawful, obscene, hateful or infringing content, including in your profile picture URL or skills;",
              "scrape, copy or collect other users’ data, or use it for marketing, recruiting or any purpose other than connecting on DevMatch;",
              "attempt to break, probe or overload the service, bypass limits, or access accounts or data that are not yours;",
              "use DevMatch for any purpose that is illegal in India.",
            ]}
          />
        </Section>

        {/* 5. PROFILES, CONNECTIONS AND CONTENT */}

        <Section title="5. Profiles, connections and content">
          <p>
            You own the content you submit. You give us a non-exclusive,
            royalty-free licence to store and display it within {SITE} so the
            service can work (for example, showing your name, age, gender,
            skills and profile picture to other users). A connection request is
            only a signal of interest between two users; we do not guarantee
            that any request is accepted or that you will find a match.
          </p>

          <p>
            Any interaction you have with other users, online or offline, is
            between you and them. Use reasonable care and do not share
            sensitive personal or financial information with people you have
            just met.
          </p>
        </Section>

        {/* 6. PAID FEATURES AND PAYMENTS */}

        <Section title="6. Paid features and payments">
          <p>
            Some optional features are sold as one-time digital purchases.
            There is no recurring billing and nothing renews automatically.
          </p>

          <Products />

          <BulletList
            items={[
              "All prices are in Indian Rupees (INR) and are shown before you pay. Any applicable taxes are included in the price shown.",
              "Payments are processed by Razorpay Software Private Limited using the methods it offers (such as UPI, cards, net banking and wallets). We do not receive or store your card, UPI or bank credentials.",
              "Purchased items are applied to your account automatically after a successful payment. You will see the result in your account; if it does not appear within 24 hours, write to us.",
              "A Profile Boost improves visibility but does not guarantee views, requests or matches. The Verified Dev Badge is a profile feature only; it is not an identity check or a certification of your skills.",
              "We may change prices or items for future purchases. Changes never affect a purchase you have already completed.",
              "Refunds and cancellations are handled under our Refund & Cancellation Policy, which forms part of these terms.",
            ]}
          />
        </Section>

        {/* 7. INTELLECTUAL PROPERTY */}

        <Section title="7. Intellectual property">
          <p>
            The {SITE} name, logo, design and software belong to {OWNER}. You
            may not copy, modify or resell them without written permission.
            Third-party names and marks belong to their owners.
          </p>
        </Section>

        {/* 8. THIRD-PARTY SERVICES */}

        <Section title="8. Third-party services">
          <p>
            {SITE} relies on third-party providers (for example Razorpay for
            payments, AWS for hosting and Google for sending emails). Their
            services are governed by their own terms, and we are not
            responsible for their outages or acts.
          </p>
        </Section>

        {/* 9. AVAILABILITY AND CHANGES */}

        <Section title="9. Availability and changes to the service">
          <p>
            We work to keep {SITE} available but do not promise uninterrupted
            or error-free service. We may add, change or remove features. If we
            permanently remove a feature you have paid for and not yet used, we
            will refund the unused part.
          </p>
        </Section>

        {/* 10. DISCLAIMER */}

        <Section title="10. Disclaimer">
          <p>
            Except where the law says otherwise, {SITE} is provided “as is”.
            We do not verify users’ claims about their skills, identity or
            intentions, and we make no promise about the conduct of any user.
          </p>
        </Section>

        {/* 11. LIMITATION OF LIABILITY */}

        <Section title="11. Limitation of liability">
          <p>
            To the extent permitted by law, we are not liable for indirect,
            incidental or consequential losses, or for loss of data, profits or
            opportunities arising from your use of {SITE}. Our total liability
            for any claim is limited to the amount you paid us in the 12 months
            before the claim arose. Nothing in these terms limits liability
            that cannot be limited under Indian law.
          </p>
        </Section>

        {/* 12. SUSPENSION AND TERMINATION */}

        <Section title="12. Suspension and termination">
          <p>
            You can stop using {SITE} and ask us to delete your account at any
            time by emailing us. We may suspend or terminate accounts that
            break these terms or the law. Where we terminate an account for a
            violation, purchases made on it are not refundable, except as the
            law requires.
          </p>
        </Section>

        {/* 13. CHANGES TO THESE TERMS */}

        <Section title="13. Changes to these terms">
          <p>
            We may update these terms. The “last updated” date above will
            change, and for material changes we will notify you through the
            service or by email. Continuing to use {SITE} after an update means
            you accept them.
          </p>
        </Section>

        {/* 14. GOVERNING LAW */}

        <Section title="14. Governing law and disputes">
          <p>
            These terms are governed by the laws of India. Please contact us
            first so we can try to resolve any concern informally. Any dispute
            that cannot be resolved will be subject to the exclusive
            jurisdiction of the courts at Jamtara, Jharkhand.
          </p>
        </Section>

        {/* 15. CONTACT */}

        <Section title="15. Contact">
          <ContactBlock />
        </Section>

        {/* ===============================
            FOOTER NAVIGATION
        =============================== */}

        <nav className="mt-12 flex flex-wrap gap-x-6 gap-y-3 border-t border-slate-200 pt-8 text-sm">
          <Link
            to="/terms"
            className="font-medium text-indigo-600 underline underline-offset-2 hover:text-indigo-800"
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
            className="text-indigo-600 underline underline-offset-2 hover:text-indigo-800"
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

export default Terms;