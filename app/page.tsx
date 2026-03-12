import Link from "next/link";

export default function Home() {
  return (
    <div className="pt-16">
      {/* HERO */}
      <section className="min-h-screen flex items-center relative overflow-hidden bg-[#0A0A0A]">
        {/* Background decoration */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full bg-[#C9A84C] blur-3xl" />
          <div className="absolute bottom-1/4 left-1/4 w-64 h-64 rounded-full bg-[#C9A84C] blur-3xl" />
        </div>

        <div className="max-w-7xl mx-auto px-6 py-20 relative z-10">
          <div className="max-w-3xl">
            <p className="text-[#C9A84C] text-sm font-semibold uppercase tracking-[0.3em] mb-6">
              Management Sportif & Sponsoring
            </p>
            <h1 className="text-5xl md:text-7xl font-black text-white leading-[1.05] mb-6">
              Investissez dans{" "}
              <span className="gold-gradient">l&apos;excellence</span>
            </h1>
            <p className="text-gray-400 text-xl leading-relaxed mb-10 max-w-xl">
              GHaas Management propulse des athlètes suisses d&apos;exception vers de nouveaux sommets. Nous sommes les architectes de carrières, les facilitateurs de rêves.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/athletes" className="btn-gold">
                Nos Athlètes
              </Link>
              <Link href="/sponsoring" className="btn-outline">
                Devenir sponsor
              </Link>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
          <div className="w-px h-12 bg-gradient-to-b from-[#C9A84C] to-transparent" />
        </div>
      </section>

      {/* STATS */}
      <section className="bg-[#111111] border-y border-[#C9A84C]/15 py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { number: "2", label: "Athlètes représentés" },
              { number: "10+", label: "Pays de compétition" },
              { number: "1", label: "Événement signature" },
              { number: "2025", label: "En pleine croissance" },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="text-3xl font-black text-[#C9A84C] mb-1">{stat.number}</div>
                <div className="text-gray-500 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MISSION */}
      <section className="py-24 max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <div className="gold-line" />
            <h2 className="section-title text-white mb-6">
              Notre <span className="gold-gradient">Mission</span>
            </h2>
            <p className="text-gray-400 leading-relaxed mb-6">
              GHaas Management n&apos;est pas simplement une agence — c&apos;est une communauté où les rêves des athlètes prennent vie, où le talent rencontre l&apos;opportunité, et où chaque victoire devient une célébration collective.
            </p>
            <p className="text-gray-400 leading-relaxed mb-8">
              Nous comprenons que la réussite d&apos;un athlète ne se mesure pas seulement sur le terrain. C&apos;est pourquoi nous créons des partenariats solides avec des sponsors qui partagent notre vision d&apos;intégrité et de dépassement de soi.
            </p>
            <Link href="/contact" className="btn-outline inline-block">
              En savoir plus
            </Link>
          </div>

          <div className="grid grid-cols-1 gap-4">
            {[
              { title: "Gestion de carrière", desc: "Stratégie, planification et suivi personnalisé pour chaque athlète." },
              { title: "Prospection sponsors", desc: "Ciblage, mise en contact et négociation de partenariats adaptés." },
              { title: "Communication digitale", desc: "Image, présence médiatique et stratégie réseaux sociaux." },
              { title: "Événements sportifs", desc: "Organisation et coordination d'événements sportifs d'exception." },
            ].map((item) => (
              <div key={item.title} className="card-dark p-5 rounded-sm flex gap-4">
                <div className="w-1 bg-gradient-to-b from-[#C9A84C] to-[#E8C97A] flex-shrink-0 rounded-full" />
                <div>
                  <h3 className="text-white font-semibold mb-1">{item.title}</h3>
                  <p className="text-gray-500 text-sm">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ATHLETES PREVIEW */}
      <section className="py-24 bg-[#111111]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="gold-line mx-auto" />
            <h2 className="section-title text-white mb-4">
              Nos <span className="gold-gradient">Athlètes</span>
            </h2>
            <p className="text-gray-500 max-w-lg mx-auto">
              Des talents suisses d&apos;exception que nous accompagnons vers les plus hauts niveaux internationaux.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {/* Lenart Kadriu */}
            <div className="card-dark rounded-sm overflow-hidden">
              <div className="h-48 bg-gradient-to-br from-[#1A1A1A] to-[#0A0A0A] flex items-center justify-center border-b border-[#C9A84C]/10">
                <div className="text-center">
                  <div className="text-6xl mb-2">🎾</div>
                  <span className="text-[#C9A84C]/50 text-xs uppercase tracking-widest">Photo à venir</span>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-white text-xl font-bold">Lenart Kadriu</h3>
                  <span className="text-[#C9A84C] text-xs uppercase tracking-wider border border-[#C9A84C]/30 px-2 py-1">Tennis</span>
                </div>
                <p className="text-gray-400 text-sm mb-1">🇨🇭 Vevey, Suisse · Né le 16.01.2012</p>
                <p className="text-gray-500 text-sm mb-4">Espoir Swiss Tennis — Team Vaud — Cadre suprarégional</p>
                <Link href="/athletes/lenart-kadriu" className="text-[#C9A84C] text-sm font-medium hover:text-[#E8C97A] transition-colors">
                  Voir le profil →
                </Link>
              </div>
            </div>

            {/* David Morand */}
            <div className="card-dark rounded-sm overflow-hidden">
              <div className="h-48 bg-gradient-to-br from-[#1A1A1A] to-[#0A0A0A] flex items-center justify-center border-b border-[#C9A84C]/10">
                <div className="text-center">
                  <div className="text-6xl mb-2">⛳</div>
                  <span className="text-[#C9A84C]/50 text-xs uppercase tracking-widest">Photo à venir</span>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-white text-xl font-bold">David Morand</h3>
                  <span className="text-[#C9A84C] text-xs uppercase tracking-wider border border-[#C9A84C]/30 px-2 py-1">Golf</span>
                </div>
                <p className="text-gray-400 text-sm mb-1">🇨🇭 Sion, Valais · Professionnel</p>
                <p className="text-gray-500 text-sm mb-4">Alps Tour 2024 — Porte-drapeau du Valais et de la Suisse</p>
                <Link href="/athletes/david-morand" className="text-[#C9A84C] text-sm font-medium hover:text-[#E8C97A] transition-colors">
                  Voir le profil →
                </Link>
              </div>
            </div>
          </div>

          <div className="text-center mt-10">
            <Link href="/athletes" className="btn-outline inline-block">
              Tous nos athlètes
            </Link>
          </div>
        </div>
      </section>

      {/* EVENT PREVIEW */}
      <section className="py-24 max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="gold-line" />
            <h2 className="section-title text-white mb-4">
              Easy <span className="gold-gradient">Master Cup</span>
            </h2>
            <p className="text-gray-400 leading-relaxed mb-6">
              L&apos;événement golf signature de GHaas Management, organisé en partenariat avec Easy Gérance SA. Une compétition caritative alliant sport d&apos;excellence et engagement social.
            </p>
            <Link href="/evenements" className="btn-gold inline-block">
              Découvrir l&apos;événement
            </Link>
          </div>
          <div className="card-dark rounded-sm p-10 text-center">
            <div className="text-7xl mb-4">🏆</div>
            <h3 className="text-white text-2xl font-bold mb-2">Easy Master Cup</h3>
            <p className="text-[#C9A84C] text-sm uppercase tracking-wider mb-4">Événement Golf Caritatif</p>
            <p className="text-gray-500 text-sm">En partenariat avec Easy Gérance SA</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-[#111111] border-t border-[#C9A84C]/15">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="section-title text-white mb-6">
            Prêt à écrire votre{" "}
            <span className="gold-gradient">success story</span> ?
          </h2>
          <p className="text-gray-400 mb-10">
            Vous êtes une marque à la recherche de visibilité sportive ? Un athlète qui veut franchir un cap ? Une organisation cherchant un partenaire fiable ? GHaas Management construit des partenariats sur le long terme — avec des résultats concrets, en Suisse et à l&apos;international.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/sponsoring" className="btn-gold inline-block text-base">
              Devenir sponsor
            </Link>
            <Link href="/contact" className="btn-outline inline-block text-base">
              Nous contacter
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
