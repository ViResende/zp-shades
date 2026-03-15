import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-black text-white px-6 py-12">
      <div className="max-w-6xl mx-auto">

        {/* Top row — links and contact */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-10 pb-10 border-b border-gray-800">

          {/* Quick links */}
          <div>
            <p className="text-xs tracking-widest uppercase text-gray-500 mb-4">Menu</p>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
              <li><Link href="/services" className="hover:text-white transition-colors">Services</Link></li>
              <li><Link href="/gallery" className="hover:text-white transition-colors">Gallery</Link></li>
              <li><Link href="/about" className="hover:text-white transition-colors">About</Link></li>
              <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
              <li><Link href="/book" className="hover:text-white transition-colors">Book a Service</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="text-xs tracking-widest uppercase text-gray-500 mb-4">Contact</p>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <a href="tel:9294712067" className="hover:text-white transition-colors">
                  (929) 471-2067
                </a>
              </li>
              <li>
                <a href="mailto:zpshades@gmail.com" className="hover:text-white transition-colors">
                  zpshades@gmail.com
                </a>
              </li>
              <li>
                <a href="/contact#contact-form" className="hover:text-white transition-colors">
                  Send a message
                </a>
              </li>
            </ul>
          </div>

         {/* Brand */}
          <div className="hidden md:flex items-start justify-end">
            <p className="text-4xl font-semibold tracking-widest uppercase text-white opacity-20">
              ZP Shades
            </p>
          </div>

        </div>

        {/* Bottom copyright */}
          <p className="text-xs text-gray-500">
            © {new Date().getFullYear()} ZP Shades. All rights reserved.
          </p>
        </div>

    </footer>
  );
}