
"use client";

import { useState } from "react";
import emailjs from "@emailjs/browser";
import AnimatedSection from "../components/AnimatedSection";
import Link from "next/link";

const SERVICE_ID = "service_l8n60jr";
const TEMPLATE_ID = "template_kq3u3ze";
const PUBLIC_KEY = "j1DR_3hF1vQrVfJPG";

const inputClass =
  "w-full border border-[#DEDEDE] bg-white px-4 py-3 text-sm text-[#171717] placeholder:text-[#888] focus:border-[#58707C] focus:outline-none transition-colors";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    from_name: "",
    phone: "",
    from_email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        form as Record<string, string>,
        PUBLIC_KEY
      );

      setSubmitted(true);
    } catch (error) {
      alert(
        "Something went wrong. Please try again or email zpshades@gmail.com"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="bg-white text-[#171717]">
      {/* Hero */}
      <section className="bg-[#F5F3EF]">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-20">
          <p className="mb-4 text-xs uppercase tracking-[0.2em] text-[#A8864A]">
            ZP SHADES / CONTACT
          </p>

          <h1 className="mb-5 text-3xl font-medium leading-tight sm:text-4xl">
            Contact Us
          </h1>

          <p className="max-w-2xl text-sm leading-relaxed text-[#59616A]">
            Have a question about your window treatment installation?
            Get in touch with ZP Shades. We can help with installation
            inquiries, quotes, and scheduling throughout Seattle and
            the Puget Sound area.
          </p>
        </div>
      </section>

      {/* Contact content */}
      <section className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-20">
        <div className="grid gap-12 md:grid-cols-2 lg:gap-20">
          {/* Contact details */}
          <AnimatedSection delay={0}>
            <div>
              <p className="mb-3 text-xs uppercase tracking-[0.18em] text-[#A8864A]">
                GET IN TOUCH
              </p>

              <h2 className="mb-5 text-2xl font-medium sm:text-3xl">
                Let's talk about your project
              </h2>

              <p className="mb-10 max-w-md text-sm leading-relaxed text-[#59616A]">
                Already purchased your blinds, shades, or drapery?
                Contact us to discuss your installation or ask any
                questions before booking.
              </p>

              <div className="space-y-7">
                <div className="border-t border-[#E6E6E6] pt-5">
                  <p className="mb-2 text-xs uppercase tracking-[0.16em] text-[#58707C]">
                    Phone
                  </p>

                  <a
                    href="tel:+14259001524"
                    className="text-lg font-medium transition-opacity hover:opacity-60"
                  >
                    (425) 900-1524
                  </a>
                </div>

                <div className="border-t border-[#E6E6E6] pt-5">
                  <p className="mb-2 text-xs uppercase tracking-[0.16em] text-[#58707C]">
                    Email
                  </p>

                  <a
                    href="mailto:zpshades@gmail.com"
                    className="text-lg font-medium transition-opacity hover:opacity-60"
                  >
                    zpshades@gmail.com
                  </a>
                </div>

                <div className="border-t border-[#E6E6E6] pt-5">
                  <p className="mb-2 text-xs uppercase tracking-[0.16em] text-[#58707C]">
                    Business Hours
                  </p>

                  <p className="text-sm leading-relaxed text-[#59616A]">
                    Monday – Saturday
                    <br />
                    8:00 AM – 6:00 PM
                  </p>
                </div>

                <div className="border-t border-[#E6E6E6] pt-5">
                  <p className="mb-2 text-xs uppercase tracking-[0.16em] text-[#58707C]">
                    Service Area
                  </p>

                  <p className="mb-3 text-sm leading-relaxed text-[#59616A]">
                    Seattle, Bellevue, Kirkland, Redmond, and
                    surrounding Puget Sound communities.
                  </p>

                  <Link
                    href="/service-areas"
                    className="inline-block border-b border-black pb-1 text-xs uppercase tracking-wider"
                  >
                    View All Service Areas →
                  </Link>
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Contact form */}
          <AnimatedSection delay={150}>
            <div className="border border-[#E6E6E6] bg-[#F8FAFB] p-6 sm:p-8">
              <p className="mb-3 text-xs uppercase tracking-[0.18em] text-[#58707C]">
                SEND A MESSAGE
              </p>

              <h2 className="mb-4 text-2xl font-medium">
                How can we help?
              </h2>

              <p className="mb-8 text-sm leading-relaxed text-[#59616A]">
                Fill out the form below and we'll get back to you
                about your inquiry.
              </p>

              {submitted ? (
                <div
                  role="status"
                  className="border-t border-[#D7DFE3] pt-6"
                >
                  <h3 className="mb-3 text-xl font-medium">
                    Message received!
                  </h3>

                  <p className="text-sm leading-relaxed text-[#59616A]">
                    Thank you for contacting ZP Shades. We'll get
                    back to you as soon as possible.
                  </p>
                </div>
              ) : (
                <form
                  id="contact-form"
                  onSubmit={handleSubmit}
                  className="space-y-5"
                >
                  <div>
                    <label
                      htmlFor="from_name"
                      className="mb-2 block text-sm font-medium"
                    >
                      Full Name
                    </label>

                    <input
                      id="from_name"
                      type="text"
                      name="from_name"
                      autoComplete="name"
                      required
                      value={form.from_name}
                      onChange={handleChange}
                      placeholder="Your full name"
                      className={inputClass}
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="phone"
                      className="mb-2 block text-sm font-medium"
                    >
                      Phone Number
                    </label>

                    <input
                      id="phone"
                      type="tel"
                      name="phone"
                      autoComplete="tel"
                      required
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="Your phone number"
                      className={inputClass}
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="from_email"
                      className="mb-2 block text-sm font-medium"
                    >
                      Email Address
                    </label>

                    <input
                      id="from_email"
                      type="email"
                      name="from_email"
                      autoComplete="email"
                      required
                      value={form.from_email}
                      onChange={handleChange}
                      placeholder="Your email address"
                      className={inputClass}
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="mb-2 block text-sm font-medium"
                    >
                      Your Message
                    </label>

                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      required
                      value={form.message}
                      onChange={handleChange}
                      placeholder="Tell us about your installation or ask a question..."
                      className={`${inputClass} resize-none`}
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-black px-6 py-4 text-xs uppercase tracking-wider text-white transition-colors hover:bg-[#333] disabled:cursor-not-allowed disabled:opacity-50"
                  >
                    {loading ? "Sending..." : "Send Message"}
                  </button>

                  <p className="text-xs leading-relaxed text-[#737C82]">
                    Your information is used only to respond to your
                    inquiry. See our{" "}
                    <Link
                      href="/privacy-policy"
                      className="underline hover:text-black"
                    >
                      Privacy Policy
                    </Link>
                    .
                  </p>
                </form>
              )}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="bg-[#E1ECF1]">
        <div className="mx-auto flex max-w-6xl flex-col justify-between gap-6 px-5 py-14 sm:px-8 md:flex-row md:items-center">
          <div className="max-w-xl">
            <p className="mb-3 text-xs uppercase tracking-[0.18em] text-[#58707C]">
              READY TO GET STARTED?
            </p>

            <h2 className="mb-3 text-2xl font-medium">
              Ready to schedule an installation?
            </h2>

            <p className="text-sm leading-relaxed text-[#495864]">
              Already have your window treatments? Send us the
              details and request an installation quote.
            </p>
          </div>

          <Link
            href="/book"
            className="inline-flex shrink-0 items-center justify-center self-start bg-black px-7 py-4 text-xs uppercase tracking-wider text-white transition-colors hover:bg-[#333] md:self-auto"
          >
            Book Installation
          </Link>
        </div>
      </section>
    </main>
  );
}
