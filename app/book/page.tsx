"use client";

import { useState } from "react";
import emailjs from "@emailjs/browser";
import AnimatedSection from "../components/AnimatedSection";

const SERVICE_ID = "service_l8n60jr";
const INSTALLATION_TEMPLATE_ID = "template_kq3u3ze";
const CONSULTATION_TEMPLATE_ID = "template_kcxv7ea";
const PUBLIC_KEY = "j1DR_3hF1vQrVfJPG";

type BookingType = "installation" | "consultation" | null;

const inputClass =
  "w-full bg-transparent border-b border-gray-300 px-0 py-3 text-sm focus:outline-none focus:border-black transition-colors placeholder-gray-400";

const selectClass =
  "w-full bg-transparent border-b border-gray-300 px-0 py-3 text-sm focus:outline-none focus:border-black transition-colors text-gray-800 appearance-none";

export default function Book() {
  const [bookingType, setBookingType] = useState<BookingType>(null);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    from_name: "",
    phone: "",
    from_email: "",
    window_count: "",
    treatment_type: "",
    products_on_site: "",
    project_type: "",
    location: "",
    preferred_date: "",
    preferred_time: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    const templateId =
      bookingType === "installation"
        ? INSTALLATION_TEMPLATE_ID
        : CONSULTATION_TEMPLATE_ID;
    try {
      await emailjs.send(SERVICE_ID, templateId, form as Record<string, string>, PUBLIC_KEY);
      setSubmitted(true);
    } catch (error) {
      alert("Something went wrong. Please try again or email zpshades@gmail.com");
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <div>
        <div className="bg-black text-white py-20 px-4 text-center">
          <p className="text-xs tracking-widest uppercase text-gray-400 mb-4">ZP Shades</p>
          <h1 className="text-3xl tracking-wide mb-4">Request Received</h1>
          <p className="text-gray-400 max-w-sm mx-auto">
            Thank you, we will get back to you within 24 hours.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div>
      {/* Dark hero header */}
      <div className="bg-black text-white py-20 px-4">
        <div className="max-w-2xl mx-auto">
          <p className="text-xs tracking-widest uppercase text-gray-400 mb-4">ZP Shades</p>
          <h1 className="text-4xl tracking-wide mb-4">Book a Service</h1>
          <p className="text-gray-400 max-w-md">
            Choose the service you need and we will get back to you to confirm your appointment.
          </p>
        </div>
      </div>
      

      <main className="max-w-2xl mx-auto px-4 py-16">

        {/* Service selector */}
        {!bookingType && (
          <div className="grid sm:grid-cols-2 gap-6">
            <AnimatedSection delay={0} className="h-full">
      <button
        onClick={() => setBookingType("installation")}
        className="border border-gray-200 p-8 text-left hover:border-black transition-all duration-200 group w-full h-full"
              >
                <p className="text-xs tracking-widest uppercase text-gray-400 mb-3">Service</p>
                <h2 className="text-xl font-semibold mb-3 group-hover:text-gray-700 transition-colors">
                  Book Installation
                </h2>
                <p className="text-gray-500 text-sm leading-relaxed mb-6">
                  You already have your shades or drapes and need a professional to install them.
                </p>
                <span className="text-xs tracking-widest uppercase border-b border-black pb-0.5 group-hover:opacity-60 transition-opacity">
                  Select
                </span>
              </button>
            </AnimatedSection>

            <AnimatedSection delay={150} className="h-full">
      <button
        onClick={() => setBookingType("consultation")}
        className="border border-black bg-black text-white p-8 text-left hover:bg-gray-900 transition-all duration-200 group w-full h-full"
              >
                <p className="text-xs tracking-widest uppercase text-gray-400 mb-3">Service</p>
                <h2 className="text-xl font-semibold mb-3">
                  Book Consultation & Measurement
                </h2>
                <p className="text-gray-400 text-sm leading-relaxed mb-6">
                  Not sure what to buy yet. We visit your home, measure your windows, and recommend the right product.
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-xs tracking-widest uppercase border-b border-white pb-0.5 group-hover:opacity-60 transition-opacity">
                    Select
                  </span>
                  <span className="text-xs bg-white text-black px-3 py-1 font-medium">
                    $99
                  </span>
                </div>
              </button>
            </AnimatedSection>
          </div>
        )}

        {/* Form */}
        {bookingType && (
          <form onSubmit={handleSubmit} className="space-y-10">

            {/* Form header */}
            <div className="flex items-center justify-between border-b border-gray-200 pb-6">
              <div>
                <p className="text-xs tracking-widest uppercase text-gray-400 mb-1">
                  {bookingType === "installation" ? "Service 01" : "Service 02"}
                </p>
                <h2 className="text-2xl font-semibold">
                  {bookingType === "installation"
                    ? "Book Installation"
                    : "Book Consultation & Measurement"}
                </h2>
              </div>
              <button
                type="button"
                onClick={() => setBookingType(null)}
                className="text-xs tracking-widest uppercase text-gray-400 hover:text-black transition-colors"
              >
                Change
              </button>
            </div>

            {/* Windows */}
            <div>
              <label className="block text-xs tracking-widest uppercase text-gray-400 mb-3">
                {bookingType === "installation"
                  ? "How many windows need installation?"
                  : "How many windows need measurements?"}
              </label>
              <select name="window_count" required onChange={handleChange} className={selectClass}>
                <option value="">Select</option>
                <option>1-5</option>
                <option>6-10</option>
                <option>11-15</option>
                <option>16-20</option>
                <option>21+</option>
              </select>
            </div>

            {/* Treatment type */}
            <div>
              <label className="block text-xs tracking-widest uppercase text-gray-400 mb-3">
                {bookingType === "installation"
                  ? "Type of window treatments being installed"
                  : "Type of window treatments you are interested in"}
              </label>
              <select name="treatment_type" required onChange={handleChange} className={selectClass}>
                <option value="">Select</option>
                <option>Roller Shades</option>
                <option>Roman Shades</option>
                <option>Drapery / Curtains</option>
                <option>Blinds</option>
                <option>Motorized Shades</option>
                {bookingType === "consultation" && (
                  <option>Not sure - need recommendation</option>
                )}
                {bookingType === "installation" && <option>Other</option>}
              </select>
            </div>

            {/* Installation only */}
            {bookingType === "installation" && (
              <div>
                <label className="block text-xs tracking-widest uppercase text-gray-400 mb-3">
                  Are the products already on site?
                </label>
                <select name="products_on_site" required onChange={handleChange} className={selectClass}>
                  <option value="">Select</option>
                  <option>Yes</option>
                  <option>Not yet delivered</option>
                </select>
              </div>
            )}

            {/* Consultation only */}
            {bookingType === "consultation" && (
              <div>
                <label className="block text-xs tracking-widest uppercase text-gray-400 mb-3">
                  Type of project
                </label>
                <select name="project_type" required onChange={handleChange} className={selectClass}>
                  <option value="">Select</option>
                  <option>Residential</option>
                  <option>Commercial</option>
                </select>
              </div>
            )}

            {/* Location */}
            <div>
              <label className="block text-xs tracking-widest uppercase text-gray-400 mb-3">
                Project location
              </label>
              <input
                type="text"
                name="location"
                required
                placeholder="City or address"
                onChange={handleChange}
                className={inputClass}
              />
            </div>

            {/* Date & Time */}
            <div className="grid sm:grid-cols-2 gap-8">
              <div>
                <label className="block text-xs tracking-widest uppercase text-gray-400 mb-3">
                  Preferred date
                </label>
                <input
                  type="date"
                  name="preferred_date"
                  required
                  onChange={handleChange}
                  className={inputClass}
                />
              </div>
              <div>
                <label className="block text-xs tracking-widest uppercase text-gray-400 mb-3">
                  Preferred time
                </label>
                <select name="preferred_time" required onChange={handleChange} className={selectClass}>
                  <option value="">Select</option>
                  <option>8:00 AM - 10:00 AM</option>
                  <option>10:00 AM - 12:00 PM</option>
                  <option>12:00 PM - 2:00 PM</option>
                  <option>2:00 PM - 4:00 PM</option>
                  <option>4:00 PM - 6:00 PM</option>
                </select>
              </div>
            </div>

            {/* Contact info */}
            <div className="space-y-6 pt-4 border-t border-gray-100">
              <p className="text-xs tracking-widest uppercase text-gray-400">
                Your contact information
              </p>
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
                rows={3}
                placeholder="Any additional notes (optional)"
                onChange={handleChange}
                className={`${inputClass} resize-none`}
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-black text-white py-5 text-xs tracking-widest uppercase hover:bg-gray-900 transition-colors disabled:opacity-50"
            >
              {loading ? "Sending..." : "Submit Request"}
            </button>
          </form>
        )}
      </main>
    </div>
  );
}