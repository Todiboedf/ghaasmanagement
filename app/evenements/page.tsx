import Link from "next/link";

export default function EvenementsPage() {
  return (
    <div className="pt-28 pb-24">
      <div className="max-w-5xl mx-auto px-6">
        {/* Header */}
        <div className="mb-16">
          <div className="gold-line" />
          <h1 className="section-title text-white mb-4">
            Nos <span className="gold-gradient">Événements</span>
          </h1>
          <p className="text-gray-500 max-w-lg">
            GHaas Management organise des événements sportifs d&apos;exception, alliant compétition de haut niveau et engagement social.
          </p>
        </div>

        {/* Easy Master Cup */}
        <div className="card-dark rounded-sm overflow-hidden mb-8">
          <div className="h-48 bg-gradient-to-br from-[#1A1A1A] via-[#111] to-[#0A0A0A] flex items-center justify-center border-b border-[#C9A84C]/10 relative">
            <div className="text-center relative z-10">
              <div className="text-6xl mb-2">🏆</div>
              <h2 className="text-white text-2xl font-black">Easy Master Cup</h2>
              <p className="text-[#C9A84C] text-sm uppercase tracking-wider mt-1">Événement Golf · Suisse</p>
            </div>
            <div className="absolute inset-0 opacity-5">
              <div className="absolute inset-0 bg-[#C9A84C]" style={{ mask: "radial-gradient(circle at center, black, transparent)" }} />
            </div>
          </div>

          <div className="p-8">
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div>
                <p className="text-gray-500 text-xs uppercase tracking-wider mb-2">À propos</p>
                <p className="text-gray-400 leading-relaxed">
                  L&apos;Easy Master Cup est l&apos;événement golf signature de GHaas Management, organisé en partenariat avec Easy Gérance SA. Une compétition caritative qui réunit des passionnés de golf pour une journée alliant sport d&apos;excellence et engagement solidaire.
                </p>
              </div>
              <div className="space-y-3">
                <div className="flex justify-between text-sm border-b border-[#C9A84C]/10 pb-2">
                  <span className="text-gray-500">Type</span>
                  <span className="text-white">Compétition golf caritatif</span>
                </div>
                <div className="flex justify-between text-sm border-b border-[#C9A84C]/10 pb-2">
                  <span className="text-gray-500">Partenaire</span>
                  <span className="text-white">Easy Gérance SA</span>
                </div>
                <div className="flex justify-between text-sm border-b border-[#C9A84C]/10 pb-2">
                  <span className="text-gray-500">Lieu</span>
                  <span className="text-white">Suisse</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Prochaine édition</span>
                  <span className="text-[#C9A84C]">À venir</span>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-4 mb-8">
              {[
                { icon: "⛳", title: "Compétition", desc: "Format stroke play sur parcours de championnat" },
                { icon: "🤝", title: "Partenariat", desc: "En collaboration avec Easy Gérance SA" },
                { icon: "❤️", title: "Engagement", desc: "Dimension caritative au cœur de l&apos;événement" },
              ].map((item) => (
                <div key={item.title} className="bg-[#1A1A1A] rounded-sm p-4 text-center">
                  <div className="text-2xl mb-2">{item.icon}</div>
                  <div className="text-white text-sm font-semibold mb-1">{item.title}</div>
                  <div className="text-gray-500 text-xs">{item.desc}</div>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-4">
              <Link href="/contact" className="btn-gold">
                Participer / Sponsoriser
              </Link>
              <a href="https://www.easymastercup.ch" target="_blank" rel="noopener noreferrer" className="btn-outline">
                Site officiel
              </a>
            </div>
          </div>
        </div>

        {/* More events coming */}
        <div className="bg-[#111111] border border-dashed border-[#C9A84C]/20 rounded-sm p-8 text-center">
          <p className="text-gray-600 text-sm uppercase tracking-wider mb-2">Prochainement</p>
          <h3 className="text-white text-xl font-bold mb-2">Nouveaux événements en préparation</h3>
          <p className="text-gray-500 text-sm">
            GHaas Management développe de nouveaux formats d&apos;événements sportifs. Restez connectés.
          </p>
        </div>
      </div>
    </div>
  );
}
