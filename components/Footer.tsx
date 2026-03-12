import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#111111] border-t border-[#C9A84C]/20 mt-20">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="mb-4">
              <Image src="/images/logo-ghaas.jpg" alt="GHaas Management" width={200} height={54} className="h-10 w-auto object-contain" />
            </div>
            <p className="text-gray-500 text-sm leading-relaxed">
              Agence suisse de management sportif dédiée à propulser les athlètes talentueux vers de nouveaux sommets.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Navigation</h4>
            <div className="flex flex-col gap-2">
              <Link href="/" className="text-gray-500 hover:text-[#C9A84C] text-sm transition-colors">Accueil</Link>
              <Link href="/athletes" className="text-gray-500 hover:text-[#C9A84C] text-sm transition-colors">Nos Athlètes</Link>
              <Link href="/sponsoring" className="text-gray-500 hover:text-[#C9A84C] text-sm transition-colors">Sponsoring</Link>
              <Link href="/evenements" className="text-gray-500 hover:text-[#C9A84C] text-sm transition-colors">Événements</Link>
              <Link href="/a-propos" className="text-gray-500 hover:text-[#C9A84C] text-sm transition-colors">À propos</Link>
              <Link href="/contact" className="text-gray-500 hover:text-[#C9A84C] text-sm transition-colors">Contact</Link>
            </div>
          </div>

          {/* Athlètes */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Nos Athlètes</h4>
            <div className="flex flex-col gap-2">
              <Link href="/athletes/david-morand" className="text-gray-500 hover:text-[#C9A84C] text-sm transition-colors">David Morand, Golf</Link>
              <Link href="/athletes/lenart-kadriu" className="text-gray-500 hover:text-[#C9A84C] text-sm transition-colors">Lenart Kadriu, Tennis</Link>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Contact</h4>
            <div className="flex flex-col gap-2 text-sm text-gray-500">
              <a href="mailto:contact.ghmanagement@gmail.com" className="hover:text-[#C9A84C] transition-colors">contact.ghmanagement@gmail.com</a>
              <a href="tel:+41795667410" className="hover:text-[#C9A84C] transition-colors">+41 79 566 74 10</a>
              <p className="text-gray-600 text-xs mt-1">Granges-Paccot, Suisse</p>
            </div>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-[#C9A84C]/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-600 text-xs">© 2026 GHaas Management. Tous droits réservés.</p>
          <p className="text-gray-700 text-xs">Management Sportif & Sponsoring, Suisse</p>
        </div>
      </div>
    </footer>
  );
}
