import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const ProductShowcase = () => {
  return (
    <section className="py-20 px-4 bg-card">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="glow-text-green">Hoe werkt</span> <span className="text-white">GlowBuddy?</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Simpel, effectief, en gegarandeerd dat je nooit meer je tent kwijtraakt!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Product Image Placeholder */}
          <div className="relative">
            <div className="aspect-square bg-gradient-to-br from-night-blue via-purple-900 to-night-blue rounded-2xl flex items-center justify-center glow-mixed">
              <div className="text-center">
                <div className="w-48 h-48 mx-auto mb-4 bg-glow-green/20 rounded-full flex items-center justify-center glow-border-green">
                  <span className="text-6xl">🏴</span>
                </div>
                <p className="text-glow-green font-bold text-xl">GlowBuddy in actie!</p>
              </div>
            </div>
          </div>

          {/* Steps */}
          <div className="space-y-8">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-glow-green rounded-full flex items-center justify-center text-night-blue font-bold text-xl glow-border-green">
                1
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">Bevestig aan je tent</h3>
                <p className="text-gray-300">Eenvoudig te bevestigen met sterke clips - werkt op elke tent!</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-glow-pink rounded-full flex items-center justify-center text-night-blue font-bold text-xl glow-border-pink">
                2
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">Activeer de LED-lichten</h3>
                <p className="text-gray-300">Druk op de knop en je vlag begint te gloeien - batterij gaat de hele nacht mee!</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-glow-green rounded-full flex items-center justify-center text-night-blue font-bold text-xl glow-border-green">
                3
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">Spot je tent van kilometers ver!</h3>
                <p className="text-gray-300">Geen gedoe meer - loop recht naar je gloeiende GlowBuddy toe!</p>
              </div>
            </div>
          </div>
        </div>

        {/* Custom Design Section */}
        <div className="text-center">
          <h3 className="text-3xl font-bold mb-8">
            <span className="text-white">Maak het </span>
            <span className="glow-text-pink">persoonlijk!</span>
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <Card className="p-6 bg-card border-glow-green/30 glow-border-green">
              <div className="text-4xl mb-4">🎨</div>
              <h4 className="font-bold text-white mb-2">Custom Artwork</h4>
              <p className="text-gray-300">Upload je eigen design of kies uit onze festival templates</p>
            </Card>

            <Card className="p-6 bg-card border-glow-pink/30 glow-border-pink">
              <div className="text-4xl mb-4">📝</div>
              <h4 className="font-bold text-white mb-2">Tekst & Logo's</h4>
              <p className="text-gray-300">Voeg je naam, groepsnaam of favoriete festival toe</p>
            </Card>

            <Card className="p-6 bg-card border-glow-green/30 glow-border-green">
              <div className="text-4xl mb-4">🌈</div>
              <h4 className="font-bold text-white mb-2">Kleur Keuzes</h4>
              <p className="text-gray-300">Verschillende LED-kleuren beschikbaar</p>
            </Card>
          </div>

          <Button variant="glow" size="lg" className="text-lg px-8 py-4">
            🎨 Start je Custom Design
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;