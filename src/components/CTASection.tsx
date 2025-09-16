import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";

const CTASection = () => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

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
            <div className="text-5xl font-bold text-white mb-2">
              €39,95
            </div>
          </div>
          
          <div className="space-y-3 mb-8">
            <div className="flex items-center justify-center gap-2 text-gray-300">
              <span className="text-glow-green">✓</span> 
              <span>Inclusief vlaggenpaal</span>
            </div>
            <div className="flex items-center justify-center gap-2 text-gray-300">
              <span className="text-glow-green">✓</span>
              <span>Gepersonaliseerde vlaggen</span>
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
            🛒 Bestel Nu - €39,95
          </Button>
          <p className="text-sm text-gray-400">
            💳 Veilig betalen • 📦 Levering binnen 3 werkdagen • 🔒 SSL beveiligd
          </p>
        </div>

        {/* Nieuwsbrief: 10% korting */}
        <div className="mt-12 bg-card/40 border border-glow-pink/20 rounded-2xl p-6 glow-mixed">
          <h3 className="text-2xl font-semibold text-white mb-2">Ontvang 10% korting</h3>
          <p className="text-gray-300 mb-4">
            Schrijf je in voor onze nieuwsbrief en ontvang direct 10% korting op je eerste aankoop.
          </p>
          {submitted ? (
            <p className="text-glow-green font-semibold">Dankjewel! Check je inbox voor je kortingscode. ✉️</p>
          ) : (
            <form
              className="flex flex-col sm:flex-row gap-3 justify-center"
              onSubmit={(e) => {
                e.preventDefault();
                if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return;
                setSubmitted(true);
              }}
            >
              <Input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Jouw e-mailadres"
                className="bg-background/60 border-glow-pink/30 text-white"
                required
              />
              <Button type="submit" variant="glow" className="whitespace-nowrap">
                Ontvang 10% korting
              </Button>
            </form>
          )}
          <p className="text-xs text-gray-500 mt-3">Geen spam. Je kunt je altijd uitschrijven.</p>
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