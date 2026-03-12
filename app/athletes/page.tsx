import Link from "next/link";

export default function AthletesPage() {
  return (
    <div className="pt-28 pb-24">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="mb-16">
          <div className="gold-line" />
          <h1 className="section-title text-white mb-4">
            Nos <span className="gold-gradient">Athlètes</span>
          </h1>
          <p className="text-gray-500 max-w-lg">
            GH Management représente des athlètes suisses d&apos;exception, accompagnés avec passion et expertise vers les plus hauts niveaux.
          </p>
        </div>

        {/* Athletes grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Lenart Kadriu */}
          <div className="card-dark rounded-sm overflow-hidden group">
            <div className="h-64 bg-gradient-to-br from-[#1A1A1A] via-[#111] to-[#0A0A0A] flex items-center justify-center relative overflow-hidden">
              <div className="text-8xl">🎾</div>
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-transparent" />
            </div>
            <div className="p-8">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h2 className="text-white text-2xl font-bold mb-1">Lenart Kadriu</h2>
                  <p className="text-[#C9A84C] text-sm uppercase tracking-wider">Tennis</p>
                </div>
                <div className="text-right">
                  <div className="text-white font-bold">🇨🇭</div>
                  <div className="text-gray-500 text-xs">Suisse</div>
                </div>
              </div>

              <div className="space-y-3 mb-6">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Date de naissance</span>
                  <span className="text-white">16 janvier 2012</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Ville</span>
                  <span className="text-white">Vevey, Suisse</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Fédération</span>
                  <span className="text-white">Swiss Tennis</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Équipe</span>
                  <span className="text-white">Team Vaud</span>
                </div>
              </div>

              <div className="border-t border-[#C9A84C]/10 pt-4 mb-6">
                <p className="text-gray-500 text-xs uppercase tracking-wider mb-2">Faits marquants</p>
                <ul className="space-y-1">
                  {["Champion Vaudois", "4× Cat.1 France", "Compétitions en 5 pays"].map((item) => (
                    <li key={item} className="text-gray-400 text-sm flex items-center gap-2">
                      <span className="w-1 h-1 rounded-full bg-[#C9A84C] flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <Link href="/athletes/lenart-kadriu" className="btn-gold block text-center">
                Voir le profil complet
              </Link>
            </div>
          </div>

          {/* David Morand */}
          <div className="card-dark rounded-sm overflow-hidden group">
            <div className="h-64 bg-gradient-to-br from-[#1A1A1A] via-[#111] to-[#0A0A0A] flex items-center justify-center relative overflow-hidden">
              <div className="text-8xl">⛳</div>
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-transparent" />
            </div>
            <div className="p-8">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h2 className="text-white text-2xl font-bold mb-1">David Morand</h2>
                  <p className="text-[#C9A84C] text-sm uppercase tracking-wider">Golf</p>
                </div>
                <div className="text-right">
                  <div className="text-white font-bold">🇨🇭</div>
                  <div className="text-gray-500 text-xs">Suisse</div>
                </div>
              </div>

              <div className="space-y-3 mb-6">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Statut</span>
                  <span className="text-white">Professionnel</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Ville</span>
                  <span className="text-white">Sion, Valais</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Circuit</span>
                  <span className="text-white">Alps Tour</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Entraînement</span>
                  <span className="text-white">Sion & Crans Montana</span>
                </div>
              </div>

              <div className="border-t border-[#C9A84C]/10 pt-4 mb-6">
                <p className="text-gray-500 text-xs uppercase tracking-wider mb-2">Faits marquants</p>
                <ul className="space-y-1">
                  {["Alps Tour 2024", "Q-School Alps Tour (Pro)", "Grand Prix France"].map((item) => (
                    <li key={item} className="text-gray-400 text-sm flex items-center gap-2">
                      <span className="w-1 h-1 rounded-full bg-[#C9A84C] flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <Link href="/athletes/david-morand" className="btn-gold block text-center">
                Voir le profil complet
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
