import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 gradient-night overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-glow-green rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-glow-pink rounded-full blur-3xl"></div>
      </div>
      
      <div className="relative z-10 text-center max-w-4xl mx-auto">
        {/* Logo */}
        <div className="mb-8">
          <h1 className="text-6xl md:text-8xl font-black tracking-tight">
            <span className="glow-text-green">GLOW</span>
            <span className="glow-text-pink">BUDDY</span>
          </h1>
          <p className="text-xl md:text-2xl font-bold mt-2 glow-text-green pulse-glow">
            JE MAAT DIE ER ALTIJD STAAT
          </p>
        </div>

        {/* Problem Statement */}
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
            🏕️ "Waar is mijn tent?!" 😵‍💫
          </h2>
          <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Het is 3 uur 's nachts, je komt terug van het podium, en alle tenten zien er hetzelfde uit. 
            Tijd om rond te dwalen zoals een verloren zombie...
          </p>
        </div>

        {/* Solution */}
        <div className="mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-white">Tot nu! Meet je nieuwe </span>
            <span className="glow-text-green">GlowBuddy</span> ✨
          </h2>
          <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Een lichtgevende vlag die je tent onmiskenbaar maakt. Custom design, 
            nachtzichtbaarheid, en 100% festival-proof!
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button variant="glow" size="lg" className="text-lg px-8 py-4">
            🔥 Bestel Nu & Glow Op!
          </Button>
          <Button variant="outline-glow" size="lg" className="text-lg px-8 py-4">
            👀 Bekijk Voorbeelden
          </Button>
        </div>

        {/* Features Quick Preview */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center">
            <div className="text-4xl mb-2">🌟</div>
            <h3 className="font-bold text-white mb-2">Zichtbaar in het Donker</h3>
            <p className="text-gray-400">LED-licht dat de hele nacht brandt</p>
          </div>
          <div className="text-center">
            <div className="text-4xl mb-2">🎨</div>
            <h3 className="font-bold text-white mb-2">Custom Design</h3>
            <p className="text-gray-400">Jouw eigen unieke stijl</p>
          </div>
          <div className="text-center">
            <div className="text-4xl mb-2">⚡</div>
            <h3 className="font-bold text-white mb-2">Festival-Proof</h3>
            <p className="text-gray-400">Waterdicht & stormbestendig</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;