// ===============================
// REFUND & CANCELLATION POLICY
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
// REFUND PAGE
// ===============================

const Refund = () => {
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
            Refund & Cancellation Policy
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
            {SITE} sells small digital items. They are delivered to your
            account after successful payment, so this policy explains when you
            can cancel a purchase or request a refund.
          </p>
        </div>

        {/* 1. WHAT THIS COVERS */}

        <Section title="1. What this covers">
          <Products />

          <p>
            All purchases are one-time and digital. Nothing is shipped, and
            there is no subscription or auto-renewal, so there is nothing to
            cancel later.
          </p>
        </Section>

        {/* 2. CANCELLATION */}

        <Section title="2. Cancellation">
          <BulletList
            items={[
              "You can cancel before paying by closing the Razorpay checkout. You are not charged unless the payment succeeds.",
              "Because items are applied immediately after payment, an order cannot be cancelled once it has been delivered to your account.",
            ]}
          />
        </Section>

        {/* 3. WHEN YOU GET A REFUND */}

        <Section title="3. When you get a refund">
          <p>We refund the full amount paid in these cases:</p>

          <BulletList
            items={[
              "Payment succeeded but the item was not applied to your account within 24 hours, and we cannot fix it.",
              "You were charged more than once for the same order (duplicate charge) or charged an incorrect amount.",
              "A technical fault on our side stopped you from using the item, and we cannot resolve it within a reasonable time.",
              "We permanently remove or stop offering the item before you have used it.",
            ]}
          />
        </Section>

        {/* 4. WHEN REFUNDS ARE NOT AVAILABLE */}

        <Section title="4. When refunds are not available">
          <BulletList
            items={[
              "The item has been delivered and used or activated (for example, a Profile Boost that is running or has run, connection requests that were used, or a badge already shown on your profile).",
              "You changed your mind after the item was delivered.",
              "Your account was suspended or terminated for breaking our Terms & Conditions.",
              "The boost did not produce the number of views, requests or matches you hoped for. Results are not guaranteed.",
            ]}
          />
        </Section>

        {/* 5. HOW TO REQUEST A REFUND */}

        <Section title="5. How to request a refund">
          <p>
            Email{" "}
            <a
              href={`mailto:${EMAIL}`}
              className="text-indigo-600 underline underline-offset-2 hover:text-indigo-800"
            >
              {EMAIL}
            </a>{" "}
            within 7 days of the payment with:
          </p>

          <BulletList
            items={[
              "your registered email address;",
              "the Razorpay payment ID or order ID from your payment confirmation;",
              "the item purchased; and",
              "a short description of the problem.",
            ]}
          />

          <p>We reply within 2 business days.</p>
        </Section>

        {/* 6. REFUND TIMELINE AND METHOD */}

        <Section title="6. Refund timeline and method">
          <BulletList
            items={[
              "We review each refund request within 3 business days.",
              "Approved refunds are initiated within 2 business days of approval through Razorpay.",
              "The refund is sent to the original payment method used for the purchase. The time taken for the amount to appear depends on the payment provider, bank or card issuer and may take additional business days.",
              "We do not refund to a different account or payment method.",
            ]}
          />
        </Section>

        {/* 7. FAILED OR PENDING PAYMENTS */}

        <Section title="7. Failed or pending payments">
          <p>
            If money was debited but the payment failed or shows as pending,
            the amount is normally reversed automatically to your account by
            your bank or Razorpay.
          </p>

          <p>
            If the amount is not reversed after the applicable processing
            period, email us with the transaction details and we will follow
            up with Razorpay.
          </p>
        </Section>

        {/* 8. SHIPPING AND DELIVERY */}

        <Section title="8. Shipping and delivery">
          <p>
            We do not sell physical goods, so there is no shipping. Digital
            items are delivered to your {SITE} account after successful
            payment.
          </p>
        </Section>

        {/* 9. CONTACT */}

        <Section title="9. Contact">
          <ContactBlock />
        </Section>

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
            className="font-medium text-indigo-600 underline underline-offset-2 hover:text-indigo-800"
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

export default Refund;