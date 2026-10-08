"use client";

import { useState } from "react";
import emailjs from "@emailjs/browser";

const SERVICE_ID = "service_l8n60jr";
const TEMPLATE_ID = "template_kq3u3ze";
const PUBLIC_KEY = "j1DR_3hF1vQrVfJPG";

export default function InstallationLeadForm() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    from_name: "",
    phone: "",
    from_email: "",
    location: "",
    treatment_type: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    setForm((current) => ({
      ...current,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          ...form,
          booking_type: "installation lead",
          window_count: "Not collected yet",
          products_on_site: "Not collected yet",
          preferred_date: "Not collected yet",
          preferred_time: "Not collected yet",
          project_type: "Installation inquiry",
          photos: "No photos collected yet",

          traffic_source:
            sessionStorage.getItem("zp_traffic_source") || "Direct",
          traffic_medium:
            sessionStorage.getItem("zp_traffic_medium") || "none",
          referrer:
            sessionStorage.getItem("zp_referrer") || "",
          landing_page:
            sessionStorage.getItem("zp_landing_page") || window.location.href,
          utm_source:
            sessionStorage.getItem("zp_utm_source") || "",
          utm_medium:
            sessionStorage.getItem("zp_utm_medium") || "",
          utm_campaign:
            sessionStorage.getItem("zp_utm_campaign") || "",
        },
        PUBLIC_KEY
      );

      if (typeof window !== "undefined" && "gtag" in window) {
        (
          window as typeof window & {
            gtag?: (...args: unknown[]) => void;
          }
        ).gtag?.("event", "booking_request_submitted", {
          booking_type: "installation_landing_page",
        });
      }

      if (typeof window !== "undefined" && "oaiq" in window) {
        (
          window as typeof window & {
            oaiq?: (...args: unknown[]) => void;
          }
        ).oaiq?.(
          "measure",
          "lead_created",
          { type: "customer_action" }
        );
      }

      setSubmitted(true);
    } catch (error) {
      console.error("EmailJS error:", error);
      alert(
        "Something went wrong. Please try again or email zpshades@gmail.com."
      );
    } finally {
      setLoading(false);
    }
  };

  const inputClass =
    "w-full rounded-none border border-white/20 bg-white/5 px-4 py-3 text-sm text-white outline-none placeholder:text-gray-500 focus:border-white";

  if (submitted) {
    return (
      <div className="border border-white/20 bg-white/5 p-8 text-center">
        <p className="text-xs uppercase tracking-widest text-gray-400">
          Request Received
        </p>

        <h3 className="mt-3 text-2xl">
          Thank you! We’ll be in touch soon.
        </h3>

        <p className="mt-4 text-sm leading-relaxed text-gray-400">
          We received your installation request and will contact you for any
          additional project details.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-5 border border-white/15 bg-white/[0.04] p-6 md:p-8"
    >
      <div>
        <label className="mb-2 block text-xs uppercase tracking-widest text-gray-400">
          Name
        </label>

        <input
          type="text"
          name="from_name"
          required
          value={form.from_name}
          onChange={handleChange}
          placeholder="Your name"
          className={inputClass}
        />
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label className="mb-2 block text-xs uppercase tracking-widest text-gray-400">
            Phone
          </label>

          <input
            type="tel"
            name="phone"
            required
            value={form.phone}
            onChange={handleChange}
            placeholder="Phone number"
            className={inputClass}
          />
        </div>

        <div>
          <label className="mb-2 block text-xs uppercase tracking-widest text-gray-400">
            Email
          </label>

          <input
            type="email"
            name="from_email"
            required
            value={form.from_email}
            onChange={handleChange}
            placeholder="Email address"
            className={inputClass}
          />
        </div>
      </div>

      <div>
        <label className="mb-2 block text-xs uppercase tracking-widest text-gray-400">
          City / Project Location
        </label>

        <input
          type="text"
          name="location"
          required
          value={form.location}
          onChange={handleChange}
          placeholder="Seattle, Bellevue, Redmond..."
          className={inputClass}
        />
      </div>

      <div>
        <label className="mb-2 block text-xs uppercase tracking-widest text-gray-400">
          What Do You Need Installed?
        </label>

        <select
          name="treatment_type"
          required
          value={form.treatment_type}
          onChange={handleChange}
          className={`${inputClass} bg-black`}
        >
          <option value="" className="bg-white text-black">
            Select
          </option>
          <option className="bg-white text-black">Shades</option>
          <option className="bg-white text-black">Blinds</option>
          <option className="bg-white text-black">Drapery / Curtains</option>
          <option className="bg-white text-black">Motorized Shades</option>
          <option className="bg-white text-black">Shutters</option>
          <option className="bg-white text-black">Curtain Rods / Tracks</option>
          <option className="bg-white text-black">Multiple Types</option>
          <option className="bg-white text-black">Other</option>
        </select>
      </div>

      <div>
        <label className="mb-2 block text-xs uppercase tracking-widest text-gray-400">
          Anything Else?
        </label>

        <textarea
          name="message"
          rows={3}
          value={form.message}
          onChange={handleChange}
          placeholder="Optional project details"
          className={`${inputClass} resize-none`}
        />
      </div>

      <button
        type="submit"
        disabled={loading}
        className="w-full bg-white px-6 py-4 text-xs uppercase tracking-widest text-black transition hover:bg-gray-100 disabled:opacity-50"
      >
        {loading ? "Sending..." : "Request Installation Quote"}
      </button>

      <p className="text-center text-xs leading-relaxed text-gray-500">
        No measurements or product details required yet.
      </p>
    </form>
  );
}