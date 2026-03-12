import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "David Morand — Golfeur Professionnel | GHaas Management",
  description: "David Morand, golfeur professionnel suisse de Sion. Alps Tour, Q-School, Grand Prix de France. Représenté par GHaas Management, agence de management sportif en Suisse.",
  keywords: "David Morand golf, golfeur professionnel Suisse, Alps Tour, Sion Valais, GHaas Management golf",
};

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
              David Morand est un golfeur professionnel suisse basé à Sion, porte-drapeau du Valais et de la Suisse sur la scène internationale. Passionné de golf depuis l'enfance dans sa région valaisanne, il s'est forgé un palmarès solide avant de franchir le cap professionnel en 2022. GHaas Management l'accompagne depuis lors dans son développement de carrière, avec un objectif : lui donner les moyens de ses ambitions sur les circuits européens.
            </p>
          </div>
        </div>

        {/* Palmares détaillé */}
        <div className="mb-16">
          <div className="gold-line" />
          <h2 className="text-2xl font-bold text-white mb-8">Parcours & Résultats</h2>

          <div className="space-y-3">
            {/* 2024 */}
            <div className="card-dark rounded-sm p-5 flex items-start gap-4 border-l-2 border-[#C9A84C]">
              <div className="flex-shrink-0 text-[#C9A84C] font-black text-sm w-12">2024</div>
              <div>
                <h3 className="text-white font-semibold mb-1">Alps Tour 2024 — Égypte</h3>
                <p className="text-gray-500 text-sm">Qualification et participation au circuit européen Alps Tour. GHaas Management présent sur place en Égypte, Guillaume Haas accompagnant David en tant que caddy. Un soutien terrain unique.</p>
              </div>
            </div>

            {/* 2022 */}
            <div className="card-dark rounded-sm p-5 flex items-start gap-4">
              <div className="flex-shrink-0 text-[#C9A84C] font-black text-sm w-12">2022</div>
              <div>
                <h3 className="text-white font-semibold mb-1">Q-School Alps Tour (statut professionnel)</h3>
                <p className="text-gray-500 text-sm">Qualification à la Q-School Alps Tour en tant que professionnel. Passage au statut pro.</p>
              </div>
            </div>
            <div className="card-dark rounded-sm p-5 flex items-start gap-4">
              <div className="flex-shrink-0 text-[#C9A84C] font-black text-sm w-12">2022</div>
              <div>
                <h3 className="text-white font-semibold mb-1">5ème, Stella Pro Série, Golf de Lausanne</h3>
                <p className="text-gray-500 text-sm">5ème place au tournoi Stella Pro Série sur le parcours de Lausanne.</p>
              </div>
            </div>

            {/* 2021 */}
            <div className="card-dark rounded-sm p-5 flex items-start gap-4">
              <div className="flex-shrink-0 text-[#C9A84C] font-black text-sm w-12">2021</div>
              <div>
                <h3 className="text-white font-semibold mb-1">Champion du club, Crans sur Sierre</h3>
                <p className="text-gray-500 text-sm">2ème titre de champion du club consécutif au Golf de Crans sur Sierre.</p>
              </div>
            </div>
            <div className="card-dark rounded-sm p-5 flex items-start gap-4">
              <div className="flex-shrink-0 text-[#C9A84C] font-black text-sm w-12">2021</div>
              <div>
                <h3 className="text-white font-semibold mb-1">Q-School Alps Tour (statut amateur)</h3>
                <p className="text-gray-500 text-sm">Première participation à la Q-School Alps Tour en statut amateur.</p>
              </div>
            </div>

            {/* 2020 */}
            <div className="card-dark rounded-sm p-5 flex items-start gap-4">
              <div className="flex-shrink-0 text-[#C9A84C] font-black text-sm w-12">2020</div>
              <div>
                <h3 className="text-white font-semibold mb-1">Champion du club, Crans sur Sierre</h3>
                <p className="text-gray-500 text-sm">Champion du club au Golf de Crans sur Sierre.</p>
              </div>
            </div>

            {/* 2013 */}
            <div className="card-dark rounded-sm p-5 flex items-start gap-4">
              <div className="flex-shrink-0 text-[#C9A84C] font-black text-sm w-12">2013</div>
              <div>
                <h3 className="text-white font-semibold mb-1">Vice-champion Valaisan, Golf de Sierre</h3>
                <p className="text-gray-500 text-sm">2ème place au Championnat Valaisan, Golf de Sierre.</p>
              </div>
            </div>

            {/* France */}
            <div className="card-dark rounded-sm p-5 flex items-start gap-4">
              <div className="flex-shrink-0 w-12">
                <span className="text-xl">🇫🇷</span>
              </div>
              <div>
                <h3 className="text-white font-semibold mb-1">Grand Prix de France</h3>
                <p className="text-gray-500 text-sm">Grand Prix de la Bresse · Grand Prix de Vaudreuille · Grand Prix de Charmeil · Grand Prix de Grenoble</p>
              </div>
            </div>

            {/* Tournois suisses */}
            <div className="card-dark rounded-sm p-5 flex items-start gap-4">
              <div className="flex-shrink-0 w-12">
                <span className="text-xl">🇨🇭</span>
              </div>
              <div>
                <h3 className="text-white font-semibold mb-1">Tournois suisses</h3>
                <p className="text-gray-500 text-sm">Memorial Barras · Internationaux de Suisse · Stella Pro Série · Championnat Suisse Est/Ouest</p>
              </div>
            </div>
          </div>
        </div>

        {/* Pourquoi le soutenir */}
        <div className="mb-16">
          <div className="gold-line" />
          <h2 className="text-2xl font-bold text-white mb-6">Pourquoi soutenir David ?</h2>
          <div className="grid md:grid-cols-3 gap-4">
            {[
              {
                icon: "❄️",
                title: "S'entraîner en hiver",
                desc: "Les hivers valaisans limitent l'accès aux parcours. Un sponsor permet à David de partir s'entraîner dans des conditions optimales hors saison.",
              },
              {
                icon: "✈️",
                title: "Plus de tournois internationaux",
                desc: "Chaque tournoi Alps Tour représente un coût important (déplacement, hébergement, inscription). Votre soutien élargit son calendrier.",
              },
              {
                icon: "🏆",
                title: "Représenter la Suisse",
                desc: "David est un ambassadeur du sport suisse à l'international. Soutenir David, c'est soutenir le rayonnement du golf helvétique.",
              },
            ].map((item) => (
              <div key={item.title} className="card-dark rounded-sm p-6">
                <span className="text-3xl mb-3 block">{item.icon}</span>
                <h3 className="text-white font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed" dangerouslySetInnerHTML={{ __html: item.desc }} />
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="bg-[#111111] border border-[#C9A84C]/20 rounded-sm p-8 text-center">
          <h3 className="text-white text-xl font-bold mb-3">Soutenir David Morand</h3>
          <p className="text-gray-500 mb-6 text-sm max-w-md mx-auto">
            Devenez partenaire d'un ambassadeur du golf suisse sur la scène internationale.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/sponsoring" className="btn-gold inline-block">Voir les offres de sponsoring</Link>
            <Link href="/contact" className="btn-outline inline-block">Nous contacter</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
