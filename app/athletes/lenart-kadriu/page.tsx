import Link from "next/link";

export default function LenartKadriuPage() {
  const results = [
    { flag: "🇨🇭", country: "Suisse", events: "Champion Vaudois (1×), Vice-champion Vaudois (3×), victoires nationales" },
    { flag: "🇭🇷", country: "Croatie", events: "Vainqueur à Split, 3ème place à Porec" },
    { flag: "🇦🇱", country: "Albanie", events: "Finaliste à Tirana, Finaliste à Shkodra" },
    { flag: "🇲🇪", country: "Monténégro", events: "Finaliste en doubles à Podgorica, 3ème place à Tirana (doubles)" },
    { flag: "🇫🇷", country: "France", events: "4 victoires catégorie 1 (simple), plusieurs victoires en doubles" },
  ];

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
                <div className="text-6xl mb-3">🎾</div>
                <span className="text-[#C9A84C]/40 text-xs uppercase tracking-widest">Photo à venir</span>
              </div>
            </div>
            {/* Sponsors */}
            <div className="mt-4 card-dark rounded-sm p-4">
              <p className="text-gray-500 text-xs uppercase tracking-wider mb-3">Partenaires</p>
              <div className="flex flex-wrap gap-2">
                <span className="bg-[#111] border border-[#C9A84C]/20 text-gray-400 text-xs px-3 py-1 rounded-sm">COY Garage</span>
                <span className="bg-[#111] border border-[#C9A84C]/20 text-gray-400 text-xs px-3 py-1 rounded-sm">HEAD</span>
              </div>
            </div>
          </div>

          {/* Info */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-2">
              <span className="text-[#C9A84C] text-xs uppercase tracking-[0.3em]">Tennis · Suisse</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-black text-white mb-2">Lenart Kadriu</h1>
            <p className="text-[#C9A84C] text-lg mb-6">Espoir Swiss Tennis</p>

            <div className="grid grid-cols-2 gap-4 mb-8">
              {[
                { label: "Né le", value: "16 janvier 2012" },
                { label: "Nationalité", value: "Suisse" },
                { label: "Ville", value: "Vevey" },
                { label: "Fédération", value: "Swiss Tennis" },
                { label: "Équipe nationale", value: "Cadre suprarégional" },
                { label: "Équipe régionale", value: "Team Vaud" },
              ].map((item) => (
                <div key={item.label} className="bg-[#1A1A1A] p-3 rounded-sm">
                  <div className="text-gray-500 text-xs uppercase tracking-wider mb-1">{item.label}</div>
                  <div className="text-white text-sm font-medium">{item.value}</div>
                </div>
              ))}
            </div>

            <p className="text-gray-400 leading-relaxed">
              Lenart Kadriu est un jeune talent suisse, reconnu comme l&apos;un des meilleurs joueurs nationaux de sa catégorie d&apos;âge. Identifié comme espoir par Swiss Tennis, il fait partie du cadre suprarégional. Son style de jeu résolument offensif, centré sur l&apos;attaque et l&apos;initiative, lui permet de s&apos;imposer face aux meilleurs jeunes joueurs européens.
            </p>
          </div>
        </div>

        {/* Palmares */}
        <div className="mb-16">
          <div className="gold-line" />
          <h2 className="text-2xl font-bold text-white mb-8">Palmarès International</h2>
          <div className="space-y-3">
            {results.map((item) => (
              <div key={item.country} className="card-dark rounded-sm p-5 flex items-start gap-4">
                <span className="text-3xl flex-shrink-0">{item.flag}</span>
                <div>
                  <h3 className="text-white font-semibold mb-1">{item.country}</h3>
                  <p className="text-gray-500 text-sm">{item.events}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Profil du joueur */}
        <div className="mb-16">
          <div className="gold-line" />
          <h2 className="text-2xl font-bold text-white mb-6">Objectifs & Perspectives</h2>
          <div className="grid md:grid-cols-3 gap-4">
            {[
              { title: "Court terme", desc: "Intégrer le circuit ITF Junior et progresser parmi les meilleurs joueurs européens de sa catégorie." },
              { title: "Moyen terme", desc: "Développement global : préparation physique, progression technique, force mentale et coaching spécialisé." },
              { title: "Long terme", desc: "Se positionner parmi les meilleurs joueurs européens et mondiaux, avec le soutien de partenaires engagés." },
            ].map((item) => (
              <div key={item.title} className="card-dark rounded-sm p-6">
                <p className="text-[#C9A84C] text-xs uppercase tracking-wider mb-3">{item.title}</p>
                <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Sponsoring packages */}
        <div className="mb-16">
          <div className="gold-line" />
          <h2 className="text-2xl font-bold text-white mb-3">Offres de Partenariat</h2>
          <p className="text-gray-500 mb-8 text-sm">Soutenir Lenart, c&apos;est associer votre entreprise à un jeune athlète d&apos;élite à fort potentiel, visible sur les circuits suisses et européens.</p>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              {
                name: "Partenaire Principal",
                price: "8'000 CHF",
                highlight: true,
                includes: ["Logo sur le site officiel", "Logo sur le sac de sport", "Logo sur le survêtement"],
                visibility: "Visibilité continue sur tous les supports et compétitions",
              },
              {
                name: "Partenaire Mobilité",
                price: "4'000 CHF",
                highlight: false,
                includes: ["Logo sur le sac de sport"],
                visibility: "Haute visibilité en tournoi et déplacement",
              },
              {
                name: "Partenaire Matériel",
                price: "3'500 CHF",
                highlight: false,
                includes: ["Logo sur le survêtement"],
                visibility: "Visibilité lors des entraînements et déplacements",
              },
              {
                name: "Partenaire Digital",
                price: "2'000 CHF",
                highlight: false,
                includes: ["Logo sur le site officiel"],
                visibility: "Visibilité permanente en ligne",
              },
            ].map((pack) => (
              <div
                key={pack.name}
                className={`rounded-sm p-6 border ${pack.highlight ? "bg-[#1A1408] border-[#C9A84C]/50" : "bg-[#1A1A1A] border-[#C9A84C]/15"}`}
              >
                {pack.highlight && (
                  <span className="text-[#0A0A0A] bg-[#C9A84C] text-xs font-bold uppercase tracking-wider px-2 py-0.5 rounded-sm mb-3 inline-block">
                    Recommandé
                  </span>
                )}
                <h3 className="text-white font-bold text-lg mb-1">{pack.name}</h3>
                <div className="text-[#C9A84C] text-2xl font-black mb-4">{pack.price}<span className="text-sm font-normal text-gray-500">/an</span></div>
                <ul className="space-y-2 mb-4">
                  {pack.includes.map((item) => (
                    <li key={item} className="text-gray-400 text-sm flex items-center gap-2">
                      <span className="text-[#C9A84C]">✓</span> {item}
                    </li>
                  ))}
                </ul>
                <p className="text-gray-600 text-xs italic">{pack.visibility}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="bg-[#111111] border border-[#C9A84C]/20 rounded-sm p-8 text-center">
          <h3 className="text-white text-xl font-bold mb-3">Devenir partenaire de Lenart</h3>
          <p className="text-gray-500 mb-2 text-sm max-w-md mx-auto">
            Soutenez un talent prometteur du tennis suisse et bénéficiez d&apos;une visibilité unique sur la scène européenne.
          </p>
          <p className="text-gray-600 text-sm mb-6">
            Guillaume Haas · <a href="mailto:Ghaasmanagement@gmail.com" className="text-[#C9A84C] hover:text-[#E8C97A]">Ghaasmanagement@gmail.com</a> · <a href="tel:+41795667410" className="text-[#C9A84C] hover:text-[#E8C97A]">+41 79 566 74 10</a>
          </p>
          <Link href="/contact" className="btn-gold inline-block">
            Nous contacter
          </Link>
        </div>
      </div>
    </div>
  );
}
