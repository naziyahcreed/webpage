import React from "react";
import { FaPhone, FaEnvelope, FaGlobe, FaMapMarkerAlt, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[var(--bg-primary)] text-[var(--text-primary)] py-12 px-6 sm:px-12 border-t border-[var(--bg-secondary)]">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">

        {/* Contact Info */}
        <div>
          <h3 className="text-2xl font-bold text-[var(--accent)] mb-6">Contact Us</h3>
          <ul className="space-y-4 text-[var(--text-secondary)]">
            <li className="flex items-center gap-3">
              <FaPhone className="text-[var(--accent)]" />
              <span>+91 8925205509</span>
            </li>
            <li className="flex items-center gap-3">
              <FaEnvelope className="text-[var(--accent)]" />
              <span>aravindhaarya246@gmail.com</span>
            </li>
            <li className="flex items-center gap-3">
              <FaLinkedin className="text-[var(--accent)]" />
              <a
                href="https://www.linkedin.com/company/naziyah-creed-groups/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                LinkedIn Profile
              </a>
            </li>
            <li className="flex items-start gap-3">
              <FaMapMarkerAlt className="text-[var(--accent)] mt-1" />
              <span>3/39 Mariamman Kovil Street, Meenatchipuram-626111.</span>
            </li>
          </ul>
        </div>

        {/* Optional: Add some company info / logo */}
        <div className="flex flex-col justify-center">
          <h3 className="text-2xl font-bold text-[var(--accent)] mb-4">Naziyah Creed</h3>
          <p className="text-[var(--text-secondary)]">
            Not Today but Tommorrow yes we can reach our goal so we are doing it Today.
          </p>
        </div>
      </div>

      <div className="mt-12 text-center text-[var(--text-secondary)] text-sm">
        &copy; {new Date().getFullYear()} NaziyahCreed. All rights reserved.
      </div>
    </footer>
  );
}



