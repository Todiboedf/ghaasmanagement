"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0A0A0A]/95 backdrop-blur-sm border-b border-[#C9A84C]/20">
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src="/images/logo-ghaas.jpg"
            alt="GHaas Management"
            width={220}
            height={60}
            className="h-12 w-auto object-contain"
            priority
          />
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          <Link href="/" className="text-gray-400 hover:text-white text-sm font-medium transition-colors uppercase tracking-wider">
            Accueil
          </Link>
          <Link href="/athletes" className="text-gray-400 hover:text-white text-sm font-medium transition-colors uppercase tracking-wider">
            Athlètes
          </Link>
          <Link href="/evenements" className="text-gray-400 hover:text-white text-sm font-medium transition-colors uppercase tracking-wider">
            Événements
          </Link>
          <Link href="/contact" className="btn-gold text-sm">
            Contact
          </Link>
        </div>

        {/* Mobile menu btn */}
        <button
          className="md:hidden text-gray-400 hover:text-white"
          onClick={() => setOpen(!open)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {open ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-[#111111] border-t border-[#C9A84C]/20 px-6 py-4 flex flex-col gap-4">
          <Link href="/" onClick={() => setOpen(false)} className="text-gray-300 hover:text-white py-2 text-sm uppercase tracking-wider">Accueil</Link>
          <Link href="/athletes" onClick={() => setOpen(false)} className="text-gray-300 hover:text-white py-2 text-sm uppercase tracking-wider">Athlètes</Link>
          <Link href="/evenements" onClick={() => setOpen(false)} className="text-gray-300 hover:text-white py-2 text-sm uppercase tracking-wider">Événements</Link>
          <Link href="/contact" onClick={() => setOpen(false)} className="btn-gold text-center">Contact</Link>
        </div>
      )}
    </nav>
  );
}
