"use client";

import { useState } from "react";
import emailjs from "@emailjs/browser";
import AnimatedSection from "../components/AnimatedSection";

const SERVICE_ID = "service_l8n60jr";
const TEMPLATE_ID = "template_kq3u3ze";
const PUBLIC_KEY = "j1DR_3hF1vQrVfJPG";

const inputClass =
  "w-full bg-transparent border-b border-gray-300 px-0 py-3 text-sm focus:outline-none focus:border-black transition-colors placeholder-gray-400";

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
      await emailjs.send(SERVICE_ID, TEMPLATE_ID, form as Record<string, string>, PUBLIC_KEY);
      setSubmitted(true);
    } catch (error) {
      alert("Something went wrong. Please try again or email zpshades@gmail.com");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      {/* Dark hero header */}
      <div className="bg-black text-white py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <p className="text-xs tracking-widest uppercase text-gray-400 mb-4">
            ZP Shades
          </p>
          <h1 className="text-4xl tracking-wide mb-4">Contact Us</h1>
          <p className="text-gray-400 max-w-md">
            Have a question? Get in touch and we will get back to you as soon as possible.
          </p>
        </div>
      </div>

      <main className="max-w-6xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-16">

          {/* Contact info */}
          <AnimatedSection delay={0}>
            <div>
              <p className="text-xs tracking-widest uppercase text-gray-400 mb-10">
                Get in touch
              </p>
              <div className="space-y-8">
                <div className="border-t border-gray-200 pt-6">
                  <p className="text-xs tracking-widest uppercase text-gray-400 mb-2">
                    Phone
                  </p>
                  <a
                    href="tel:9294712067"
                    className="text-lg font-semibold hover:opacity-60 transition-opacity"
                  >
                    (929) 471-2067
                  </a>
                </div>
                <div className="border-t border-gray-200 pt-6">
                  <p className="text-xs tracking-widest uppercase text-gray-400 mb-2">
                    Email
                  </p>
                  <a
                    href="mailto:zpshades@gmail.com"
                    className="text-lg font-semibold hover:opacity-60 transition-opacity"
                  >
                    zpshades@gmail.com
                  </a>
                </div>
                <div className="border-t border-gray-200 pt-6">
                  <p className="text-xs tracking-widest uppercase text-gray-400 mb-2">
                    Hours
                  </p>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    Monday – Saturday: 8:00 AM – 6:00 PM
                  </p>
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Contact form */}
          <AnimatedSection delay={150}>
            <div>
              <p className="text-xs tracking-widest uppercase text-gray-400 mb-10">
                Send a message
              </p>
              {submitted ? (
                <div className="border-t border-gray-200 pt-6">
                  <h2 className="text-xl font-semibold mb-2">Message received</h2>
                  <p className="text-gray-600 text-sm">
                    Thank you! We will get back to you within 24 hours.
                  </p>
                </div>
              ) : (
                <form id="contact-form" onSubmit={handleSubmit} className="space-y-8">
                  <input
                    type="text"
                    name="from_name"
                    required
                    placeholder="Full name"
                    onChange={handleChange}
                    className={inputClass}
                  />
                  <input
                    type="tel"
                    name="phone"
                    required
                    placeholder="Phone number"
                    onChange={handleChange}
                    className={inputClass}
                  />
                  <input
                    type="email"
                    name="from_email"
                    required
                    placeholder="Email address"
                    onChange={handleChange}
                    className={inputClass}
                  />
                  <textarea
                    name="message"
                    required
                    rows={4}
                    placeholder="Your message"
                    onChange={handleChange}
                    className={`${inputClass} resize-none`}
                  />
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-black text-white py-5 text-xs tracking-widest uppercase hover:bg-gray-900 transition-colors disabled:opacity-50"
                  >
                    {loading ? "Sending..." : "Send Message"}
                  </button>
                </form>
              )}
            </div>
          </AnimatedSection>

        </div>
      </main>
    </div>
  );
}