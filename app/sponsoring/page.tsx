import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Sponsoring | GHaas Management",
  description: "Sponsorisez des athlètes suisses d'élite avec GHaas Management. Packages Bronze, Silver et Gold pour associer votre marque au sport de haut niveau en Suisse.",
  keywords: "sponsoring athlètes Suisse, sponsoring sport, GHaas Management, partenariat sportif, visibilité marque sport",
};

export default function SponsoringPage() {
  return (
    <div className="pt-28 pb-24">
      <div className="max-w-5xl mx-auto px-6">

        {/* Header */}
        <div className="mb-16">
          <div className="gold-line" />
          <h1 className="section-title text-white mb-4">
            Devenir <span className="gold-gradient">Sponsor</span>
          </h1>
          <p className="text-gray-500 max-w-xl">
            Associez votre marque à l'excellence sportive suisse. Investissez dans des athlètes à fort potentiel et bénéficiez d'une visibilité unique sur les circuits nationaux et internationaux.
          </p>
        </div>

        {/* Why sponsor */}
        <div className="mb-20">
          <div className="gold-line" />
          <h2 className="text-2xl font-bold text-white mb-10">
            Pourquoi sponsoriser un athlète <span className="gold-gradient">GHaas Management</span> ?
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: "🏆",
                title: "Des athlètes sélectionnés",
                desc: "Nous ne représentons que des athlètes à fort potentiel, engagés et professionnels. Votre image est associée à l'excellence.",
              },
              {
                icon: "🌍",
                title: "Visibilité internationale",
                desc: "Nos athlètes concourent en Suisse, en France, en Croatie, en Albanie, en Égypte... Votre logo voyage avec eux.",
              },
              {
                icon: "🤝",
                title: "Partenariat transparent",
                desc: "Contrats clairs, reporting régulier, contacts directs avec l'agence. Pas d'intermédiaires superflus.",
              },
              {
                icon: "🌱",
                title: "Impact social",
                desc: "Une partie de nos revenus est reversée à la Fondation Avenir Plus. Votre sponsoring a un double impact positif.",
              },
              {
                icon: "📱",
                title: "Présence digitale",
                desc: "Logo sur le site officiel, mentions sur les réseaux sociaux, présence dans nos communications.",
              },
              {
                icon: "🇨🇭",
                title: "Ancrage suisse",
                desc: "Soutenir des athlètes suisses, c'est valoriser un imaginaire d'excellence, de rigueur et de précision ; des valeurs fortes pour votre marque.",
              },
            ].map((item) => (
              <div key={item.title} className="card-dark rounded-sm p-6">
                <span className="text-3xl mb-3 block">{item.icon}</span>
                <h3 className="text-white font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Packages */}
        <div className="mb-20">
          <div className="gold-line" />
          <h2 className="text-2xl font-bold text-white mb-4">
            Nos <span className="gold-gradient">packages</span>
          </h2>
          <p className="text-gray-500 mb-10 text-sm">
            Trois niveaux de partenariat pour s'adapter à vos objectifs et votre budget.
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Bronze */}
            <div className="card-dark rounded-sm p-7 border border-[#C9A84C]/15 flex flex-col">
              <div className="mb-6">
                <p className="text-[#CD7F32] text-xs font-bold uppercase tracking-[0.3em] mb-2">Bronze</p>
                <h3 className="text-white text-2xl font-black mb-1">Partenaire</h3>
                <p className="text-gray-500 text-sm">Visibilité digitale</p>
              </div>
              <div className="text-[#CD7F32] text-3xl font-black mb-6">
                Sur mesure<span className="text-sm font-normal text-gray-500 ml-1">/an</span>
              </div>
              <ul className="space-y-3 mb-8 flex-grow">
                {[
                  "Logo sur le site ghaasmanagement.ch",
                  "Mention sur les réseaux sociaux de l'agence",
                  "Votre nom dans nos communications officielles",
                  "Mise en avant lors des événements GHaas",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-gray-400 text-sm">
                    <span className="text-[#CD7F32] mt-0.5 flex-shrink-0">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
              <Link href="/contact" className="btn-outline block text-center text-sm">
                Nous contacter
              </Link>
            </div>

            {/* Silver */}
            <div className="rounded-sm p-7 border border-[#C9A84C]/40 bg-[#1A1A1A] flex flex-col relative">
              <div className="mb-6">
                <p className="text-[#C0C0C0] text-xs font-bold uppercase tracking-[0.3em] mb-2">Silver</p>
                <h3 className="text-white text-2xl font-black mb-1">Partenaire Officiel</h3>
                <p className="text-gray-500 text-sm">Visibilité terrain & digitale</p>
              </div>
              <div className="text-[#C0C0C0] text-3xl font-black mb-6">
                Sur mesure<span className="text-sm font-normal text-gray-500 ml-1">/an</span>
              </div>
              <ul className="space-y-3 mb-8 flex-grow">
                {[
                  "Tout le package Bronze",
                  "Logo sur l'équipement de l'athlète (sac, survêtement)",
                  "Logo sur les tenues de compétition",
                  "Mentions dans les publications tournois",
                  "Photos et contenus co-brandés",
                  "Présence aux événements GHaas Management",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-gray-400 text-sm">
                    <span className="text-[#C0C0C0] mt-0.5 flex-shrink-0">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
              <Link href="/contact" className="btn-outline block text-center text-sm">
                Nous contacter
              </Link>
            </div>

            {/* Gold */}
            <div className="rounded-sm p-7 border border-[#C9A84C]/60 bg-[#1A1408] flex flex-col relative">
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#C9A84C] text-[#0A0A0A] text-xs font-black uppercase tracking-wider px-4 py-1 rounded-sm">
                Recommandé
              </span>
              <div className="mb-6">
                <p className="text-[#C9A84C] text-xs font-bold uppercase tracking-[0.3em] mb-2">Gold</p>
                <h3 className="text-white text-2xl font-black mb-1">Partenaire Principal</h3>
                <p className="text-gray-500 text-sm">Visibilité maximale</p>
              </div>
              <div className="text-[#C9A84C] text-3xl font-black mb-6">
                Sur mesure<span className="text-sm font-normal text-gray-500 ml-1">/an</span>
              </div>
              <ul className="space-y-3 mb-8 flex-grow">
                {[
                  "Tout le package Silver",
                  "Logo en position principale sur tous les supports",
                  "Accès VIP aux événements sportifs",
                  "Rencontres exclusives avec les athlètes",
                  "Droits d'utilisation des images pour vos supports marketing",
                  "Co-branding sur les campagnes réseaux sociaux",
                  "Rapport de visibilité annuel personnalisé",
                  "Accès à la communauté GHaas Management",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-gray-400 text-sm">
                    <span className="text-[#C9A84C] mt-0.5 flex-shrink-0">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
              <Link href="/contact" className="btn-gold block text-center text-sm">
                Nous contacter
              </Link>
            </div>
          </div>
        </div>

        {/* Avenir Plus */}
        <div className="mb-16 bg-[#111111] border border-[#C9A84C]/20 rounded-sm p-8">
          <div className="flex items-start gap-6">
            <span className="text-4xl flex-shrink-0">🌱</span>
            <div>
              <h3 className="text-white text-xl font-bold mb-3">Un sponsoring à impact positif</h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-4">
                GHaas Management reverse une partie de ses revenus à la <span className="text-[#C9A84C] font-medium">Fondation Avenir Plus</span>. En devenant sponsor, votre entreprise contribue non seulement à la carrière d'un athlète de haut niveau, mais aussi, indirectement, à un projet social et solidaire en Suisse.
              </p>
              <p className="text-gray-500 text-sm italic">
                Deux impacts pour un seul investissement.
              </p>
            </div>
          </div>
        </div>

        {/* Coordonnées bancaires */}
        <div className="mb-16 card-dark rounded-sm p-8">
          <h3 className="text-white text-xl font-bold mb-6">Coordonnées pour les virements</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-3">
              <div>
                <p className="text-gray-500 text-xs uppercase tracking-wider mb-1">Société</p>
                <p className="text-white text-sm font-medium">Ghaas Management SA</p>
              </div>
              <div>
                <p className="text-gray-500 text-xs uppercase tracking-wider mb-1">Adresse</p>
                <p className="text-white text-sm font-medium">Rte de Chantemerle 58<br />1763 Granges-Paccot, Suisse</p>
              </div>
            </div>
            <div className="space-y-3">
              <div>
                <p className="text-gray-500 text-xs uppercase tracking-wider mb-1">IBAN</p>
                <p className="text-[#C9A84C] text-sm font-mono font-bold tracking-wider">CH96 8080 8006 7893 8436 6</p>
              </div>
              <div>
                <p className="text-gray-500 text-xs uppercase tracking-wider mb-1">Référence à indiquer</p>
                <p className="text-white text-sm">Votre nom / société + objet du sponsoring</p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="bg-[#111111] border border-[#C9A84C]/20 rounded-sm p-8 text-center">
          <h3 className="text-white text-xl font-bold mb-3">Une question ? Un projet ?</h3>
          <p className="text-gray-500 mb-6 text-sm max-w-md mx-auto">
            Contactez-nous directement ; Guillaume vous répondra personnellement pour discuter de vos objectifs.
          </p>
          <div className="flex flex-wrap gap-4 justify-center mb-4">
            <Link href="/contact" className="btn-gold inline-block">Nous contacter</Link>
          </div>
          <div className="flex flex-col items-center gap-1 text-sm">
            <a href="mailto:ghaasmanagement@gmail.com" className="text-[#C9A84C] hover:text-[#E8C97A] transition-colors">
              ghaasmanagement@gmail.com
            </a>
            <a href="tel:+41795667410" className="text-gray-500 hover:text-[#C9A84C] transition-colors">
              +41 79 566 74 10
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}
