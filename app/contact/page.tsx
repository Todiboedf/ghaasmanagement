export default function ContactPage() {
  return (
    <div className="pt-28 pb-24">
      <div className="max-w-4xl mx-auto px-6">
        {/* Header */}
        <div className="mb-16">
          <div className="gold-line" />
          <h1 className="section-title text-white mb-4">
            Travaillons <span className="gold-gradient">ensemble</span>
          </h1>
          <p className="text-gray-500 max-w-lg">
            Vous êtes un athlète, une marque ou une organisation sportive ? Discutons de la façon dont GHaas Management peut vous accompagner.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Form */}
          <div>
            <form className="space-y-5">
              <div>
                <label className="block text-gray-500 text-xs uppercase tracking-wider mb-2">Nom complet *</label>
                <input
                  type="text"
                  className="w-full bg-[#1A1A1A] border border-[#C9A84C]/20 rounded-sm px-4 py-3 text-white text-sm focus:outline-none focus:border-[#C9A84C] transition-colors"
                  placeholder="Jean Dupont"
                />
              </div>
              <div>
                <label className="block text-gray-500 text-xs uppercase tracking-wider mb-2">Email *</label>
                <input
                  type="email"
                  className="w-full bg-[#1A1A1A] border border-[#C9A84C]/20 rounded-sm px-4 py-3 text-white text-sm focus:outline-none focus:border-[#C9A84C] transition-colors"
                  placeholder="jean@email.com"
                />
              </div>
              <div>
                <label className="block text-gray-500 text-xs uppercase tracking-wider mb-2">Objet</label>
                <select className="w-full bg-[#1A1A1A] border border-[#C9A84C]/20 rounded-sm px-4 py-3 text-white text-sm focus:outline-none focus:border-[#C9A84C] transition-colors">
                  <option value="">Sélectionner...</option>
                  <option value="sponsoring">Proposition de sponsoring</option>
                  <option value="athlete">Représentation d'athlète</option>
                  <option value="evenement">Easy Master Cup</option>
                  <option value="partenariat">Partenariat</option>
                  <option value="autre">Autre</option>
                </select>
              </div>
              <div>
                <label className="block text-gray-500 text-xs uppercase tracking-wider mb-2">Message *</label>
                <textarea
                  rows={5}
                  className="w-full bg-[#1A1A1A] border border-[#C9A84C]/20 rounded-sm px-4 py-3 text-white text-sm focus:outline-none focus:border-[#C9A84C] transition-colors resize-none"
                  placeholder="Décrivez votre projet ou votre demande..."
                />
              </div>
              <button type="submit" className="btn-gold w-full">
                Envoyer le message
              </button>
            </form>
          </div>

          {/* Info */}
          <div className="space-y-6">
            <div className="card-dark rounded-sm p-6">
              <h3 className="text-white font-semibold mb-4">GHaas Management</h3>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <span className="text-[#C9A84C] mt-1">✉️</span>
                  <div>
                    <p className="text-gray-500 text-xs uppercase tracking-wider mb-1">Email</p>
                    <a href="mailto:ghaasmanagement@gmail.com" className="text-white text-sm hover:text-[#C9A84C] transition-colors">
                      ghaasmanagement@gmail.com
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-[#C9A84C] mt-1">📞</span>
                  <div>
                    <p className="text-gray-500 text-xs uppercase tracking-wider mb-1">Téléphone</p>
                    <a href="tel:+41795667410" className="text-white text-sm hover:text-[#C9A84C] transition-colors">
                      +41 79 566 74 10
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-[#C9A84C] mt-1">🌐</span>
                  <div>
                    <p className="text-gray-500 text-xs uppercase tracking-wider mb-1">Site web</p>
                    <a href="https://www.ghaasmanagement.ch" className="text-white text-sm hover:text-[#C9A84C] transition-colors">
                      ghaasmanagement.ch
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-[#C9A84C] mt-1">📍</span>
                  <div>
                    <p className="text-gray-500 text-xs uppercase tracking-wider mb-1">Localisation</p>
                    <p className="text-white text-sm">Suisse</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="card-dark rounded-sm p-6">
              <h3 className="text-white font-semibold mb-4">Nous travaillons avec</h3>
              <div className="space-y-3">
                {[
                  { type: "Athlètes", desc: "Jeunes talents et professionnels" },
                  { type: "Sponsors", desc: "Marques et entreprises" },
                  { type: "Clubs / Fédérations", desc: "Organisations sportives" },
                  { type: "Organisateurs", desc: "Événements sportifs" },
                ].map((item) => (
                  <div key={item.type} className="flex items-center gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#C9A84C] flex-shrink-0" />
                    <div>
                      <span className="text-white text-sm font-medium">{item.type}</span>
                      <span className="text-gray-600 text-sm"> : {item.desc}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
