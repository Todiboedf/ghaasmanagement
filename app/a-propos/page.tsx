import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "À propos | GHaas Management",
  description: "Découvrez l'histoire de GHaas Management, agence suisse de management sportif et sponsoring fondée par Guillaume Haas. Notre mission : propulser les athlètes suisses vers les plus hauts niveaux internationaux.",
  keywords: "GHaas Management, agence management sportif Suisse, Guillaume Haas, sponsoring athlètes Suisse",
};

export default function AProposPage() {
  return (
    <div className="pt-28 pb-24">
      <div className="max-w-5xl mx-auto px-6">

        {/* Header */}
        <div className="mb-16">
          <div className="gold-line" />
          <h1 className="section-title text-white mb-4">
            Notre <span className="gold-gradient">Histoire</span>
          </h1>
          <p className="text-gray-500 max-w-xl">
            GHaas Management est née d&apos;une conviction simple : les athlètes suisses méritent un accompagnement à la hauteur de leur talent.
          </p>
        </div>

        {/* Story */}
        <div className="grid md:grid-cols-2 gap-16 items-start mb-20">
          <div>
            <h2 className="text-2xl font-bold text-white mb-6">Qui sommes-nous ?</h2>
            <div className="space-y-4 text-gray-400 leading-relaxed">
              <p>
                GHaas Management est une agence suisse de management sportif et sponsoring fondée par <span className="text-white font-medium">Guillaume Haas</span>, basée à Granges-Paccot, dans le canton de Fribourg.
              </p>
              <p>
                Née d&apos;une passion profonde pour le sport et d&apos;une volonté de donner aux athlètes suisses les moyens de leurs ambitions, l&apos;agence s&apos;est construite autour d&apos;une idée fondatrice : <span className="text-[#C9A84C]">le talent ne suffit pas — il faut aussi le bon soutien, au bon moment.</span>
              </p>
              <p>
                GHaas Management ne gère pas des dossiers. Elle accompagne des individus. Chaque athlète est unique, chaque projet l&apos;est aussi. C&apos;est pourquoi l&apos;agence adopte une approche personnalisée, terrain, engagée — loin des grandes structures où les athlètes se perdent dans la masse.
              </p>
            </div>
          </div>

          <div className="space-y-4">
            {[
              {
                icon: "🏔️",
                title: "Ancrage suisse",
                desc: "Basés en Suisse, nous comprenons l'écosystème sportif helvétique, ses spécificités, ses opportunités et ses exigences.",
              },
              {
                icon: "🤝",
                title: "Accompagnement terrain",
                desc: "Nous sommes présents là où ça compte. Comme en Égypte lors de l'Alps Tour 2024, où Guillaume a accompagné David Morand en tant que caddy pour ses premiers tournois professionnels.",
              },
              {
                icon: "🔗",
                title: "Mise en relation",
                desc: "Nous connectons des athlètes à fort potentiel avec des sponsors et partenaires qui partagent leurs valeurs.",
              },
              {
                icon: "❤️",
                title: "Engagement social",
                desc: "Une partie de nos recettes est reversée à la Fondation Avenir Plus, car nous croyons que le sport peut transformer des vies.",
              },
            ].map((item) => (
              <div key={item.title} className="card-dark rounded-sm p-5 flex gap-4">
                <span className="text-2xl flex-shrink-0">{item.icon}</span>
                <div>
                  <h3 className="text-white font-semibold mb-1">{item.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Values */}
        <div className="mb-20">
          <div className="gold-line" />
          <h2 className="text-2xl font-bold text-white mb-10">
            Nos <span className="gold-gradient">Valeurs</span>
          </h2>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              {
                value: "Intégrité",
                desc: "Transparence totale envers les athlètes comme envers les sponsors. Pas de promesses en l'air — seulement des engagements tenus.",
              },
              {
                value: "Passion",
                desc: "Le sport, ce n'est pas un business pour nous. C'est une vocation. Cette énergie, elle se ressent dans chaque projet.",
              },
              {
                value: "Dépassement",
                desc: "On pousse les limites. Les nôtres, celles de nos athlètes. Parce que la médiocrité ne nous intéresse pas.",
              },
              {
                value: "Transparence",
                desc: "Chaque partenariat est clair, structuré, documenté. Les sponsors savent exactement où va leur investissement.",
              },
            ].map((item) => (
              <div key={item.value} className="bg-[#111111] border border-[#C9A84C]/15 rounded-sm p-6">
                <h3 className="text-[#C9A84C] font-black text-lg mb-3">{item.value}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Timeline */}
        <div className="mb-20">
          <div className="gold-line" />
          <h2 className="text-2xl font-bold text-white mb-10">Notre parcours</h2>
          <div className="space-y-4">
            {[
              {
                year: "2022",
                title: "Lancement de GHaas Management",
                desc: "Création de l'agence en Suisse avec l'objectif de représenter les talents sportifs suisses méritant un meilleur accès aux sponsors et aux circuits internationaux.",
              },
              {
                year: "2022",
                title: "Premier athlète : David Morand",
                desc: "Signature avec David Morand, golfeur professionnel de Sion. Qualification à la Q-School Alps Tour en statut professionnel. Début du suivi de carrière.",
              },
              {
                year: "2023",
                title: "Expansion tennis : Lenart Kadriu",
                desc: "Intégration de Lenart Kadriu, espoir Swiss Tennis de Vevey. L'agence étend son expertise au tennis et renforce son portefeuille d'athlètes.",
              },
              {
                year: "2024",
                title: "Alps Tour en Égypte",
                desc: "Guillaume accompagne David Morand en Égypte pour ses tournois Alps Tour en tant que caddy — un engagement terrain rare et symbolique de notre philosophie.",
              },
              {
                year: "2024",
                title: "Easy Master Cup",
                desc: "Organisation de l'Easy Master Cup en partenariat avec Easy Gérance SA — premier événement golf caritatif de GHaas Management.",
              },
              {
                year: "2025+",
                title: "Croissance & nouveaux partenariats",
                desc: "Développement du portefeuille d'athlètes, renforcement des partenariats sponsors, et poursuite de l'engagement avec la Fondation Avenir Plus.",
              },
            ].map((item) => (
              <div key={`${item.year}-${item.title}`} className="card-dark rounded-sm p-5 flex items-start gap-6">
                <div className="flex-shrink-0 text-[#C9A84C] font-black text-sm w-12 pt-0.5">{item.year}</div>
                <div>
                  <h3 className="text-white font-semibold mb-1">{item.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Fondation Avenir Plus */}
        <div className="mb-16 bg-[#1A1408] border border-[#C9A84C]/30 rounded-sm p-8">
          <div className="flex items-start gap-6">
            <span className="text-4xl flex-shrink-0">🌱</span>
            <div>
              <h3 className="text-white text-xl font-bold mb-3">Fondation Avenir Plus</h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-4">
                GHaas Management s&apos;engage au-delà du terrain sportif. Une partie des revenus générés par nos activités est reversée à la <span className="text-[#C9A84C]">Fondation Avenir Plus</span>, une fondation suisse dédiée à soutenir des projets sociaux et éducatifs.
              </p>
              <p className="text-gray-500 text-sm">
                Sponsoriser un athlète GHaas Management, c&apos;est aussi contribuer, indirectement, à un impact social positif.
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="bg-[#111111] border border-[#C9A84C]/20 rounded-sm p-8 text-center">
          <h3 className="text-white text-xl font-bold mb-3">Travaillons ensemble</h3>
          <p className="text-gray-500 mb-6 text-sm max-w-md mx-auto">
            Vous êtes une marque, une entreprise ou un organisateur d&apos;événements sportifs ? Discutons de la façon dont GHaas Management peut vous accompagner.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/contact" className="btn-gold inline-block">Nous contacter</Link>
            <Link href="/sponsoring" className="btn-outline inline-block">Voir nos offres sponsors</Link>
          </div>
        </div>

      </div>
    </div>
  );
}
