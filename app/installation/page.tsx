import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import InstallationLeadForm from "./InstallationLeadForm";

export const metadata: Metadata = {
    title: "Professional Window Treatment Installation | ZP Shades",
    description:
        "Professional installation for customer-provided shades, blinds, drapery, shutters, curtain tracks, and motorized window treatments in the Seattle area.",
    alternates: {
        canonical: "https://www.zpshades.com/installation",
    },
    robots: {
        index: true,
        follow: true,
    },
};

const services = [
    "Shades & Cellular Shades",
    "Blinds",
    "Drapery & Curtains",
    "Motorized Shades",
    "Shutters",
    "Curtain Rods & Tracks",
];

const serviceAreas = [
    {
        name: "Seattle",
        href: "/shade-installation/seattle",
    },
    {
        name: "Bellevue",
        href: "/shade-installation/bellevue",
    },
    {
        name: "Redmond",
        href: "/shade-installation/redmond",
    },
    {
        name: "Kirkland",
        href: "/shade-installation/kirkland",
    },
    {
        name: "Mercer Island",
        href: "/shade-installation/mercer-island",
    },
];

export default function InstallationLandingPage() {
    return (
        <main className="bg-white text-black">

            {/* HERO */}
            <section className="relative min-h-[560px] overflow-hidden text-white">
                <Image
                    src="/images/booking-hero.webp"
                    alt="Professional window treatment installation by ZP Shades"
                    fill
                    priority
                    fetchPriority="high"
                    sizes="100vw"
                    className="object-cover object-center"
                />

                <div className="absolute inset-0 bg-black/60" />

                <div className="relative z-10 mx-auto flex min-h-[560px] max-w-6xl items-center px-6 py-20">
                    <div className="max-w-2xl">
                        <p className="mb-4 text-xs uppercase tracking-[0.3em] text-white/70">
                            Professional Installation · Seattle Area
                        </p>

                        <h1 className="text-4xl leading-tight tracking-tight md:text-6xl">
                            Already Bought Your Window Treatments?
                        </h1>

                        <p className="mt-4 text-3xl font-light md:text-4xl">
                            We Install Them.
                        </p>

                        <p className="mt-6 max-w-xl text-base leading-relaxed text-white/85 md:text-lg">
                            ZP Shades professionally installs customer-provided shades,
                            blinds, drapery, shutters, curtain tracks, and motorized window
                            treatments.
                        </p>

                        <div className="mt-8 flex flex-wrap gap-4">
                            <a
                                href="#quote"
                                className="bg-white px-8 py-4 text-xs font-medium uppercase tracking-[0.18em] text-black transition hover:bg-gray-100"
                            >
                                Get an Installation Quote
                            </a>

                            <a
                                href="tel:4259001524"
                                className="border border-white/60 px-8 py-4 text-xs font-medium uppercase tracking-[0.18em] text-white transition hover:bg-white hover:text-black"
                            >
                                Call (425) 900-1524
                            </a>
                        </div>

                        <p className="mt-6 text-xs text-white/60">
                            Residential & commercial installation throughout Seattle and the
                            Eastside.
                        </p>
                    </div>
                </div>
            </section>

            {/* QUICK TRUST */}
            <section className="border-b border-gray-200 bg-white">
                <div className="mx-auto grid max-w-6xl gap-8 px-6 py-9 text-center sm:grid-cols-3">
                    <div>
                        <p className="font-medium">Installation Only</p>
                        <p className="mt-1 text-sm text-gray-500">
                            You choose and purchase the products.
                        </p>
                    </div>

                    <div>
                        <p className="font-medium">Professional Installation</p>
                        <p className="mt-1 text-sm text-gray-500">
                            Precise mounting, alignment, and setup.
                        </p>
                    </div>

                    <div>
                        <p className="font-medium">Residential & Commercial</p>
                        <p className="mt-1 text-sm text-gray-500">
                            Homes, apartments, offices, and businesses.
                        </p>
                    </div>
                </div>
            </section>

            {/* RECENT INSTALLATIONS */}
            <section className="bg-white px-6 pt-12 pb-20">
                <div className="mx-auto max-w-6xl">
                    <div className="mb-10 text-center">
                        <p className="text-xs uppercase tracking-[0.25em] text-gray-400">
                            Our Work
                        </p>

                        <h2 className="mt-4 text-3xl tracking-tight md:text-4xl">
                            Recent Installations
                        </h2>

                        <p className="mx-auto mt-4 max-w-xl text-sm leading-6 text-gray-600">
                            A look at window treatment installations completed by ZP Shades.
                        </p>
                    </div>

                    <div className="grid gap-4 md:grid-cols-3">
                        <div className="relative aspect-[4/5] overflow-hidden bg-gray-100">
                            <Image
                                src="/images/installation-4.webp"
                                alt="Window shade installation completed by ZP Shades"
                                fill
                                sizes="(max-width: 768px) 100vw, 33vw"
                                className="object-cover transition duration-500 hover:scale-[1.03]"
                            />
                        </div>

                        <div className="relative aspect-[4/5] overflow-hidden bg-gray-100">
                            <Image
                                src="/images/installation-6.webp"
                                alt="Professional window treatment installation by ZP Shades"
                                fill
                                sizes="(max-width: 768px) 100vw, 33vw"
                                className="object-cover transition duration-500 hover:scale-[1.03]"
                            />
                        </div>

                        <div className="relative aspect-[4/5] overflow-hidden bg-gray-100">
                            <Image
                                src="/images/installation-5.webp"
                                alt="Completed window treatment project by ZP Shades"
                                fill
                                sizes="(max-width: 768px) 100vw, 33vw"
                                className="object-cover transition duration-500 hover:scale-[1.03]"
                            />
                        </div>
                    </div>

                    <div className="mt-8 text-center">
                        <Link
                            href="/gallery"
                            className="inline-block border-b border-black pb-1 text-xs uppercase tracking-[0.18em]"
                        >
                            View More Projects
                        </Link>
                    </div>
                </div>
            </section>

            {/* QUOTE FORM */}
            <section id="quote" className="bg-black px-6 py-20 text-white">
                <div className="mx-auto max-w-5xl">
                    <div className="mx-auto max-w-2xl text-center">
                        <p className="text-xs uppercase tracking-[0.25em] text-gray-500">
                            Quick Quote Request
                        </p>

                        <h2 className="mt-4 text-3xl tracking-tight md:text-4xl">
                            Tell Us What You Need Installed
                        </h2>

                        <p className="mx-auto mt-4 max-w-xl text-sm leading-6 text-gray-400">
                            No measurements or photos required yet. Start with the basics and
                            we&apos;ll contact you for the rest.
                        </p>
                    </div>

                    <div className="mx-auto mt-10 max-w-xl">
                        <InstallationLeadForm />
                    </div>
                </div>
            </section>

            {/* WHAT WE INSTALL */}
            <section className="px-6 py-20">
                <div className="mx-auto max-w-5xl">
                    <div className="text-center">
                        <p className="text-xs uppercase tracking-[0.25em] text-gray-400">
                            What We Install
                        </p>

                        <h2 className="mt-4 text-3xl tracking-tight md:text-4xl">
                            You Buy It. We Install It.
                        </h2>

                        <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-gray-600 md:text-base">
                            Skip the stress of installation. ZP Shades handles the mounting,
                            alignment, and setup of your customer-provided window treatments.
                        </p>
                    </div>

                    <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                        {services.map((service) => (
                            <div
                                key={service}
                                className="group border border-[#E7DDCF] bg-[#FAF7F2] px-6 py-8 text-center transition duration-300 hover:-translate-y-1 hover:shadow-md"
                            >
                                <div className="mx-auto mb-4 h-px w-8 bg-[#A8864A]" />

                                <p className="text-sm font-medium tracking-wide text-gray-900">
                                    {service}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* WHY ZP SHADES */}
            <section className="bg-[#FAF7F2] px-6 py-14">
                <div className="mx-auto grid max-w-5xl gap-12 md:grid-cols-2 md:items-center">
                    <div>
                        <p className="text-xs uppercase tracking-[0.25em] text-gray-400">
                            Why ZP Shades
                        </p>

                        <h2 className="mt-4 text-3xl leading-tight tracking-tight md:text-4xl">
                            Your Products.
                            <br />
                            Professionally Installed.
                        </h2>
                    </div>

                    <div className="space-y-5">
                        <div className="border-b border-[#DDD2C3] pb-5">
                            <p className="font-medium">Multiple Window Treatment Types</p>
                            <p className="mt-2 text-sm leading-6 text-gray-600">
                                Shades, blinds, drapery, curtain tracks, shutters, and motorized systems.
                            </p>
                        </div>

                        <div>
                            <p className="font-medium">Projects Big or Small</p>
                            <p className="mt-2 text-sm leading-6 text-gray-600">
                                From a few windows to larger residential and commercial installation projects.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* SMALL TRUST FOOTER */}
            <section className="border-b border-gray-200 bg-white px-6 py-10">
                <div className="mx-auto max-w-5xl text-center">
                    <p className="text-xs uppercase tracking-[0.25em] text-gray-400">
                        Products From Major Brands & Retailers
                    </p>

                    <p className="mx-auto mt-5 max-w-3xl text-sm leading-7 text-gray-600">
                        Hunter Douglas · Lutron · Somfy · Bali · Graber · Levolor ·
                        SelectBlinds · Blinds.com · The Shade Store · IKEA · Costco ·
                        Amazon
                    </p>
                </div>
            </section>

            {/* SECOND CTA */}
            <section className="bg-[#FAF7F2] px-6 py-16 text-center">
                <div className="mx-auto max-w-2xl">
                    <h2 className="text-2xl tracking-tight md:text-3xl">
                        Ready to Get Your Window Treatments Installed?
                    </h2>

                    <p className="mt-4 text-sm leading-6 text-gray-600">
                        Send us the basic project information first. We&apos;ll follow up
                        for photos, measurements, scheduling, and any additional details.
                    </p>

                    <a
                        href="#quote"
                        className="mt-7 inline-block bg-black px-8 py-4 text-xs uppercase tracking-[0.18em] text-white transition hover:bg-gray-800"
                    >
                        Request a Quote
                    </a>
                </div>
            </section>

            {/* SERVICE AREAS */}
            <section className="px-6 py-12">
                <div className="mx-auto max-w-5xl text-center">
                    <p className="text-xs uppercase tracking-[0.25em] text-gray-400">
                        Serving the Seattle Area
                    </p>

                    <div className="mt-5 flex flex-wrap justify-center gap-x-6 gap-y-3">
                        {serviceAreas.map((area) => (
                            <Link
                                key={area.name}
                                href={area.href}
                                className="text-sm text-gray-600 underline-offset-4 transition hover:text-black hover:underline"
                            >
                                {area.name}
                            </Link>
                        ))}

                        <Link
                            href="/service-areas"
                            className="text-sm font-medium text-black underline underline-offset-4"
                        >
                            More Service Areas
                        </Link>
                    </div>
                </div>
            </section>

        </main>
    );
}