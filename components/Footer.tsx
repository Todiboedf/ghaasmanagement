import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#111111] border-t border-[#C9A84C]/20 mt-20">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-[#C9A84C] to-[#E8C97A] flex items-center justify-center">
                <span className="text-black font-black text-sm">GH</span>
              </div>
              <span className="text-white font-bold text-lg">GH <span className="text-[#C9A84C]">Management</span></span>
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
              <Link href="/evenements" className="text-gray-500 hover:text-[#C9A84C] text-sm transition-colors">Événements</Link>
              <Link href="/contact" className="text-gray-500 hover:text-[#C9A84C] text-sm transition-colors">Contact</Link>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Contact</h4>
            <div className="flex flex-col gap-2 text-sm text-gray-500">
              <p>Suisse</p>
              <a href="https://www.ghaasmanagement.ch" className="hover:text-[#C9A84C] transition-colors">ghaasmanagement.ch</a>
            </div>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-[#C9A84C]/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-600 text-xs">© 2025 GH Management. Tous droits réservés.</p>
          <p className="text-gray-700 text-xs">Management Sportif & Sponsoring — Suisse</p>
        </div>
      </div>
    </footer>
  );
}
