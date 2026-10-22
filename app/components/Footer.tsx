
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#252725] text-white">
      <div className="mx-auto max-w-6xl px-5 pb-6 pt-12 sm:px-8 sm:pt-14">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-12">
          {/* Brand */}
          <div>
            <Link href="/" className="inline-block">
              <span className="text-2xl font-semibold tracking-wide">
                ZP SHADES
              </span>
            </Link>

            <p className="mt-4 max-w-xs text-sm leading-relaxed text-[#B7B9B5]">
              Professional window treatment installation.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="mb-5 text-xs font-semibold uppercase tracking-[0.18em] text-[#C5A26D]">
              Explore
            </h3>

            <nav aria-label="Footer navigation" className="flex flex-col gap-3">
              <Link href="/" className="text-sm text-[#D3D4D0] hover:text-white">
                Home
              </Link>

              <Link href="/services" className="text-sm text-[#D3D4D0] hover:text-white">
                Installation Services
              </Link>

              <Link href="/gallery" className="text-sm text-[#D3D4D0] hover:text-white">
                Our Gallery
              </Link>

              <Link href="/service-areas" className="text-sm text-[#D3D4D0] hover:text-white">
                Service Areas
              </Link>

              <Link href="/book" className="text-sm text-[#D3D4D0] hover:text-white">
                Request a Quote
              </Link>
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-5 text-xs font-semibold uppercase tracking-[0.18em] text-[#C5A26D]">
              Contact
            </h3>

            <div className="flex flex-col gap-3 text-sm text-[#D3D4D0]">
              <a href="tel:+14259001524" className="hover:text-white">
                (425) 900-1524
              </a>

              <a
                href="mailto:zpshades@gmail.com"
                className="break-all hover:text-white"
              >
                zpshades@gmail.com
              </a>

              <p>Seattle & Puget Sound, WA</p>
            </div>
          </div>

          {/* Social */}
          <div>
            <h3 className="mb-5 text-xs font-semibold uppercase tracking-[0.18em] text-[#C5A26D]">
              Follow Us
            </h3>

            <a
              href="https://www.instagram.com/zpshades/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 text-sm text-[#D3D4D0] hover:text-white"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-5 w-5"
                aria-hidden="true"
              >
                <path d="M7.75 2C4.57 2 2 4.57 2 7.75v8.5C2 19.43 4.57 22 7.75 22h8.5C19.43 22 22 19.43 22 16.25v-8.5C22 4.57 19.43 2 16.25 2h-8.5zm9.6 2.15a.9.9 0 110 1.8.9.9 0 010-1.8zM12 6.5A5.5 5.5 0 1112 17.5 5.5 5.5 0 0112 6.5zm0 2A3.5 3.5 0 1012 15.5 3.5 3.5 0 0012 8.5z" />
              </svg>

              Instagram
            </a>

            <Link
              href="/book"
              className="mt-7 inline-flex items-center justify-center border border-[#C5A26D] px-5 py-3 text-xs font-medium uppercase tracking-wider text-[#E6D0AD] transition-colors hover:bg-[#C5A26D] hover:text-[#252725]"
            >
              Book Installation →
            </Link>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-10 flex flex-col gap-3 border-t border-[#454945] pt-5 text-xs text-[#9EA39E] sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} ZP Shades. All rights reserved.
          </p>

          <Link
            href="/privacy-policy"
            className="hover:text-white"
          >
            Privacy Policy
          </Link>
        </div>
      </div>
    </footer>
  );
}
