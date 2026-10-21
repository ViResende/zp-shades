
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | ZP Shades",
  description:
    "Learn how ZP Shades collects, uses, and protects customer information.",
  alternates: {
    canonical: "https://www.zpshades.com/privacy-policy",
  },
};

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-[#FAF7F2] px-5 py-16 text-[#242424]">
      <article className="mx-auto max-w-3xl">
        <h1 className="mb-3 text-4xl font-semibold">
          Privacy Policy
        </h1>

        <p className="mb-10 text-sm text-gray-500">
          Last updated: October 20, 2026
        </p>

        <div className="space-y-8 leading-7">
          <section>
            <p>
              ZP Shades respects your privacy. This policy explains
              how we collect, use, and protect information you share
              when requesting our window treatment installation
              services.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold">
              Information We Collect
            </h2>
            <p>
              When you contact ZP Shades through our website, Google
              Ads lead forms, phone, or email, we may collect your
              name, email address, phone number, ZIP code, service
              address, and details about your installation request.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold">
              How We Use Your Information
            </h2>
            <p>
              We use your information to respond to inquiries,
              prepare quotes, communicate about requested services,
              and coordinate installations. We do not use customer
              contact information for promotional emails or
              marketing text messages.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold">
              Sharing Information
            </h2>
            <p>
              We do not sell customer personal information. We may
              share information with service providers that help
              operate our website, process inquiries, and deliver
              requested services.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold">
              Cookies and Analytics
            </h2>
            <p>
              Our website uses analytics and advertising technologies,
              including Google Analytics and Google Ads, to understand
              website activity and measure advertising performance.
              These services may collect technical information such
              as device, browser, and website usage data.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold">
              Data Security
            </h2>
            <p>
              We take reasonable steps to protect personal information.
              However, no method of online transmission or storage
              is completely secure.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold">
              Your Privacy Choices
            </h2>
            <p>
              You may contact us to request access to, correction of,
              or deletion of your personal information, subject to
              applicable legal and recordkeeping requirements.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold">
              Contact Us
            </h2>
            <p>
              ZP Shades
              <br />
              Email:{" "}
              <a
                href="mailto:zpshades@gmail.com"
                className="text-[#A8864A] underline"
              >
                zpshades@gmail.com
              </a>
              <br />
              Website: https://www.zpshades.com
            </p>
          </section>
        </div>
      </article>
    </main>
  );
}
