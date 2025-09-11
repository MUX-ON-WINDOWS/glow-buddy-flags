import { Button } from "@/components/ui/button";

const CTASection = () => {
  return (
    <section className="py-20 px-4 gradient-night">
      <div className="max-w-4xl mx-auto text-center">
        {/* Urgency & Social Proof */}
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 bg-glow-green/20 border border-glow-green/50 rounded-full px-6 py-2 mb-6 glow-border-green">
            <span className="text-glow-green">🔥</span>
            <span className="text-white font-semibold">Beperkte voorraad - Festivalseizoen is begonnen!</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-white">Geen </span>
            <span className="glow-text-pink">gedoe</span>
            <span className="text-white"> meer!</span>
          </h2>
          
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Bestel nu je GlowBuddy en ga nooit meer verloren op een festival. 
            <span className="glow-text-green font-semibold"> Je tent vindt je terug!</span>
          </p>
        </div>

        {/* Pricing */}
        <div className="bg-card/50 border border-glow-green/30 rounded-2xl p-8 mb-8 glow-mixed">
          <div className="text-center mb-6">
            <div className="text-gray-400 line-through text-xl mb-2">€59,99</div>
            <div className="text-5xl font-bold text-white mb-2">
              €39,99
            </div>
            <div className="text-glow-green font-semibold">Launch Aanbieding - 33% Korting!</div>
          </div>
          
          <div className="space-y-3 mb-8">
            <div className="flex items-center justify-center gap-2 text-gray-300">
              <span className="text-glow-green">✓</span>
              <span>Inclusief LED-systeem & batterij</span>
            </div>
            <div className="flex items-center justify-center gap-2 text-gray-300">
              <span className="text-glow-green">✓</span>
              <span>Custom design service</span>
            </div>
            <div className="flex items-center justify-center gap-2 text-gray-300">
              <span className="text-glow-green">✓</span>
              <span>Gratis verzending in Nederland</span>
            </div>
            <div className="flex items-center justify-center gap-2 text-gray-300">
              <span className="text-glow-green">✓</span>
              <span>30 dagen geld-terug-garantie</span>
            </div>
          </div>
        </div>

        {/* Main CTA */}
        <div className="space-y-4">
          <Button variant="glow" size="lg" className="text-xl px-12 py-6 w-full sm:w-auto">
            🛒 Bestel Nu - €39,99
          </Button>
          <p className="text-sm text-gray-400">
            💳 Veilig betalen • 📦 Levering binnen 3 werkdagen • 🔒 SSL beveiligd
          </p>
        </div>

        {/* Testimonial */}
        <div className="mt-16 bg-card/30 rounded-xl p-6 border border-glow-pink/20">
          <div className="flex items-center justify-center gap-1 mb-3">
            {[...Array(5)].map((_, i) => (
              <span key={i} className="text-yellow-400 text-xl">⭐</span>
            ))}
          </div>
          <blockquote className="text-lg text-gray-300 mb-4">
            "Mijn vrienden waren jaloers toen ik als enige meteen mijn tent kon vinden! 
            De GlowBuddy was zo bright dat zelfs mensen uit andere kampeergebieden ernaar vroegen. 
            Best investment ever voor festivals!"
          </blockquote>
          <cite className="text-glow-green font-semibold">- Lisa, Lowlands 2024</cite>
        </div>
      </div>
    </section>
  );
};

export default CTASection;