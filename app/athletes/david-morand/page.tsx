import Link from "next/link";

export default function DavidMorandPage() {
  return (
    <div className="pt-28 pb-24">
      <div className="max-w-5xl mx-auto px-6">
        {/* Back */}
        <Link href="/athletes" className="text-[#C9A84C] text-sm flex items-center gap-2 mb-10 hover:text-[#E8C97A] transition-colors">
          ← Tous les athlètes
        </Link>

        {/* Header */}
        <div className="grid md:grid-cols-3 gap-10 mb-16">
          {/* Photo placeholder */}
          <div className="md:col-span-1">
            <div className="aspect-[3/4] bg-gradient-to-br from-[#1A1A1A] to-[#0A0A0A] border border-[#C9A84C]/20 rounded-sm flex items-center justify-center">
              <div className="text-center">
                <div className="text-6xl mb-3">⛳</div>
                <span className="text-[#C9A84C]/40 text-xs uppercase tracking-widest">Photo à venir</span>
              </div>
            </div>
          </div>

          {/* Info */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-2">
              <span className="text-[#C9A84C] text-xs uppercase tracking-[0.3em]">Golf · Suisse</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-black text-white mb-2">David Morand</h1>
            <p className="text-[#C9A84C] text-lg mb-6">Golfeur Professionnel · Alps Tour</p>

            <div className="grid grid-cols-2 gap-4 mb-8">
              {[
                { label: "Statut", value: "Professionnel" },
                { label: "Ville", value: "Sion, Valais" },
                { label: "Circuit", value: "Alps Tour 2024" },
                { label: "Entraînement", value: "Golf de Sion & Crans Montana" },
              ].map((item) => (
                <div key={item.label} className="bg-[#1A1A1A] p-3 rounded-sm">
                  <div className="text-gray-500 text-xs uppercase tracking-wider mb-1">{item.label}</div>
                  <div className="text-white text-sm font-medium">{item.value}</div>
                </div>
              ))}
            </div>

            <p className="text-gray-400 leading-relaxed">
              David Morand est un golfeur professionnel suisse basé à Sion, porte-drapeau du Valais et de la Suisse sur la scène internationale. Déterminé à représenter fièrement sa région lors de l&apos;Alps Tour, il s&apos;entraîne au golf de Sion et au golf de Crans Montana.
            </p>
          </div>
        </div>

        {/* Palmares */}
        <div className="mb-16">
          <div className="gold-line" />
          <h2 className="text-2xl font-bold text-white mb-8">Parcours & Résultats</h2>
          <div className="space-y-3">
            {[
              { year: "2024", event: "Alps Tour 2024", detail: "Participation au circuit européen de golf prestigieux" },
              { year: "2022", event: "Q-School Alps Tour", detail: "Qualification en statut professionnel" },
              { year: "2021", event: "Q-School Alps Tour", detail: "Participation en statut amateur" },
              { year: "", event: "Grand Prix de France", detail: "Grand Prix de la Bresse · Grand Prix de Vaudreuille · Grand Prix de Charmes" },
            ].map((item, i) => (
              <div key={i} className="card-dark rounded-sm p-5 flex items-start gap-4">
                {item.year && (
                  <div className="flex-shrink-0 text-[#C9A84C] font-bold text-sm w-12">{item.year}</div>
                )}
                {!item.year && <div className="flex-shrink-0 w-12" />}
                <div>
                  <h3 className="text-white font-semibold mb-1">{item.event}</h3>
                  <p className="text-gray-500 text-sm">{item.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="bg-[#111111] border border-[#C9A84C]/20 rounded-sm p-8 text-center">
          <h3 className="text-white text-xl font-bold mb-3">Soutenir David Morand</h3>
          <p className="text-gray-500 mb-6 text-sm max-w-md mx-auto">
            Devenez partenaire d&apos;un ambassadeur du golf suisse sur la scène internationale.
          </p>
          <Link href="/contact" className="btn-gold inline-block">
            Nous contacter
          </Link>
        </div>
      </div>
    </div>
  );
}
