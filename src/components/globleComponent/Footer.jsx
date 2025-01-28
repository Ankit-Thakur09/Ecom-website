"use client"
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import Link from "next/link";
const links = [
  { name: "Home", link: "/" },
  { name: "Shop", link: "/shop" },
  { name: "About Us", link: "/about" },
  { name: "Contact", link: "/contact" },
  { name: "FAQ", link: "/faq" }
 
];

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-10 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Logo & Description */}
        <div>
          <h2 className="text-2xl font-bold">ShopEase</h2>
          <p className="text-gray-400 mt-2">
            Your one-stop shop for all things amazing. Quality, affordability,
            and convenience in one place.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold">Quick Links</h3>
          <ul className="mt-2 space-y-2">
            {links.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.link}
                  className="text-gray-400 hover:text-white transition duration-200"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-lg font-semibold">Follow Us</h3>
          <div className="flex space-x-4 mt-2">
            {[
              { name: "Facebook", icon: <Facebook size={24} /> },
              { name: "Twitter", icon: <Twitter size={24} /> },
              { name: "Instagram", icon: <Instagram size={24} /> },
              { name: "LinkedIn", icon: <Linkedin size={24} /> },
            ].map((social) => (
              <a
                key={social.name}
                href="#"
                className="text-gray-400 hover:text-white transition duration-200"
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="text-center text-gray-500 text-sm mt-8 border-t border-gray-700 pt-4">
        © {new Date().getFullYear()} ShopEase. All rights reserved.
      </div>
    </footer>
  );
}
