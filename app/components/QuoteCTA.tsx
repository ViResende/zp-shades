import Link from "next/link";

export default function QuoteCTA() {
    return(
        <section className="mt-16 p-8 border border-gray-200 rounded-sm">
            <h2 className="text-2x1 font-light mb-2">
                 Ready to upgrade your space?
            </h2>
            <p className="text-gray-600 mb-6">
            Professional shades & drapery installation in Seattle.
            </p>

                <Link href="/contact"
                className="inline-block bg-black text-white px-6 py-3 text-sm tracking-wide hover:bg-gray-900 transitions"
                >
                Request a Quote
                </Link>
        </section>
    );
}