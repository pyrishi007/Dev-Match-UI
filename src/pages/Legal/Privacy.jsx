// ===============================
// PRIVACY POLICY
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
// PRIVACY POLICY PAGE
// ===============================

const Privacy = () => {
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
            Privacy Policy
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
            This Privacy Policy explains what personal data {SITE} collects,
            why it is collected, who it may be shared with, and the choices you
            have regarding your personal data.
          </p>

          <p className="mt-4 text-[15px] leading-7 text-slate-600">
            This policy is intended to operate in accordance with applicable
            Indian data-protection and privacy laws.
          </p>
        </div>

        {/* 1. WHO IS RESPONSIBLE */}

        <Section title="1. Who is responsible">
          <p>
            {OWNER}, an individual, operates {SITE} and decides how your
            personal data is used (the “data fiduciary”). Contact details are
            provided in section 12.
          </p>
        </Section>

        {/* 2. DATA WE COLLECT */}

        <Section title="2. Data we collect">
          <BulletList
            items={[
              "Account details: first name, last name, email address, phone number, date of birth, age and gender.",
              "Password: stored only as a one-way hash, never in readable form.",
              "Profile details: skills and profile picture link, and any edits you make.",
              "Activity on the platform: connection requests you send, receive, accept or reject, and their status.",
              "Password reset: a short-lived reset code that we generate and email to you.",
              "Session data: an authentication cookie that keeps you logged in for up to one day.",
              "Purchase records: which item you bought, the amount, date, and Razorpay order and payment reference IDs.",
              "Messages you send us (for example support or refund emails).",
            ]}
          />
        </Section>

        {/* 3. WHY WE USE IT */}

        <Section title="3. Why we use it">
          <BulletList
            items={[
              "To create your account, log you in and run the service (profiles, feed, connection requests).",
              "To send you service emails such as password reset codes.",
              "To process purchases, apply the items you bought, handle refunds and keep records.",
              "To keep the platform safe: prevent fraud, abuse and fake accounts, and enforce our terms.",
              "To respond to your questions and requests.",
              "To meet legal obligations, such as accounting and tax record-keeping.",
            ]}
          />

          <p>
            We do not sell your personal data and do not use it for third-party
            advertising.
          </p>
        </Section>

        {/* 4. WHAT OTHER USERS CAN SEE */}

        <Section title="4. What other users can see">
          <p>
            Your name, age, gender, skills and profile picture can be seen by
            other {SITE} users. Your email address, phone number, date of birth
            and password are not shown to other users.
          </p>
        </Section>

        {/* 5. PAYMENTS */}

        <Section title="5. Payments">
          <p>
            Payments are handled by Razorpay. When you pay, you enter your
            payment details on Razorpay’s checkout, and Razorpay processes them
            under its own privacy policy.
          </p>

          <p>
            We never see or store your full card number, CVV, UPI PIN or net
            banking credentials. We receive from Razorpay only the result of
            the payment (success or failure), the amount, and reference IDs.
            Razorpay may also share your name, email and phone number so the
            payment can be matched to your account.
          </p>
        </Section>

        {/* 6. WHO WE SHARE DATA WITH */}

        <Section title="6. Who we share data with">
          <p>
            We share data only with service providers who help us run {SITE},
            and only as needed:
          </p>

          <BulletList
            items={[
              "Razorpay – payment processing and refunds.",
              "Amazon Web Services – hosting of the website and servers.",
              "Our database hosting provider – storage of account and activity data.",
              "Google (Gmail) – delivery of service emails such as password reset codes.",
              "Authorities, courts or regulators – when required by law or to protect rights and safety.",
            ]}
          />

          <p>
            Some of these providers may process data on servers outside India.
          </p>
        </Section>

        {/* 7. COOKIES */}

        <Section title="7. Cookies">
          <p>
            {SITE} uses one essential cookie that stores your login session. It
            is needed for the service to work and expires after one day or when
            you log out.
          </p>

          <p>
            We do not use advertising cookies. If we add analytics later, we
            will update this policy first.
          </p>
        </Section>

        {/* 8. SECURITY */}

        <Section title="8. Security">
          <p>
            We protect your data with measures such as password hashing,
            authenticated access to account data and limiting who can reach
            our systems.
          </p>

          <p>
            No online service is completely secure, so please use a strong,
            unique password. If a breach affecting your data occurs, we will
            notify you and the authorities as the law requires.
          </p>
        </Section>

        {/* 9. HOW LONG WE KEEP DATA */}

        <Section title="9. How long we keep data">
          <p>
            We keep account data while your account is active. When you delete
            your account, we delete or anonymise your profile and activity data
            within 30 days.
          </p>

          <p>
            We may keep purchase and payment records for as long as tax,
            accounting and dispute-resolution rules require.
          </p>
        </Section>

        {/* 10. YOUR RIGHTS */}

        <Section title="10. Your rights">
          <p>Under applicable Indian law you can:</p>

          <BulletList
            items={[
              "ask for a summary of the personal data we hold about you and how it is used;",
              "correct inaccurate data (most profile details can be edited in the app);",
              "ask us to erase your data and delete your account;",
              "withdraw consent for processing that depends on it (this may mean we can no longer provide the service);",
              "nominate someone to exercise your rights if you die or become incapacitated;",
              "complain to us, and if unresolved, to the Data Protection Board of India.",
            ]}
          />

          <p>
            Email us from your registered address and we will respond within 15
            days.
          </p>
        </Section>

        {/* 11. CHILDREN */}

        <Section title="11. Children">
          <p>
            {SITE} is for people aged 18 and over. We do not knowingly collect
            data from anyone under 18, and we delete such accounts when we
            find them.
          </p>
        </Section>

        {/* 12. CONTACT AND GRIEVANCE OFFICER */}

        <Section title="12. Contact and grievance officer">
          <p>
            For privacy questions, requests or complaints, contact our
            Grievance Officer. We acknowledge complaints within 2 business days
            and aim to resolve them within 15 days.
          </p>

          <ContactBlock />

          <p className="mt-4">
            <span className="font-medium text-slate-900">
              Grievance Officer:
            </span>{" "}
            {OWNER}
          </p>
        </Section>

        {/* 13. CHANGES */}

        <Section title="13. Changes">
          <p>
            We may update this policy and will change the date above. For
            significant changes we will inform you through the service or by
            email.
          </p>
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
            className="font-medium text-indigo-600 underline underline-offset-2 hover:text-indigo-800"
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

export default Privacy;