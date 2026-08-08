import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-black px-6 py-10 text-white">
      <div className="mx-auto max-w-6xl">

        <div className="grid gap-10 md:grid-cols-3">

          {/* Brand */}
          <div>
            <h3 className="text-2xl font-semibold tracking-wide">
              ZP Shades
            </h3>

            <p className="mt-3 text-sm text-gray-500">
              Professional installation, done right.
            </p>
          </div>

          {/* Contact */}
          <div>
            <p className="mb-4 text-xs uppercase tracking-[0.2em] text-gray-500">
              Contact
            </p>

            <div className="space-y-3 text-sm text-gray-400">
              <a
                href="tel:9294712067"
                className="block hover:text-white"
              >
                (929) 471-2067
              </a>

              <a
                href="mailto:zpshades@gmail.com"
                className="block hover:text-white"
              >
                zpshades@gmail.com
              </a>

              <p>Seattle, Washington</p>
            </div>
          </div>

          {/* Instagram */}
          <div>
            <p className="mb-4 text-xs uppercase tracking-[0.2em] text-gray-500">
              Follow Us
            </p>

          <a
  href="https://www.instagram.com/zpshades/"
  target="_blank"
  rel="noopener noreferrer"
  className="inline-flex items-center gap-2 text-sm text-gray-400 transition-colors hover:text-white"
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
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-8 flex flex-col gap-2 border-t border-gray-800 pt-5 text-xs text-gray-500 sm:flex-row sm:justify-between">
          <p>© {new Date().getFullYear()} ZP Shades. All rights reserved.</p>
          <p>Serving Seattle & Puget Sound</p>
        </div>

      </div>
    </footer>
  );
}