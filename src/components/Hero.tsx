import { Button } from "@/components/ui/button";
import festivalTentFlag from "@/assets/FestivalMetVriendenGroep.png";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center px-4 gradient-night overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-glow-green rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-glow-pink rounded-full blur-3xl"></div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            {/* Logo */}
            <div className="mb-8">
              <h1 className="text-5xl md:text-6xl font-black tracking-tight">
                <span className="glow-text-green">GLOW</span>
                <span className="glow-text-pink">BUDDY</span>
              </h1>
              <p className="text-lg md:text-xl font-semibold mt-2 text-white/80">
                JE MAAT DIE ER ALTIJD STAAT
              </p>
            </div>

            {/* GlowBuddy is dé glow-in-the-dark vlag die je festivalervaring makkelijker én leuker maakt. 
            Ontwerp je eigen vlag, zodat je jouw tent altijd terugvindt in het donker en samen met vrienden een unieke festivalcommunity creëert. */}

            {/* Problem Statement */}
            {/* <div className="mb-8">
              <h2 className="text-2xl md:text-3xl font-bold mb-4 text-white">
                "Waar is mijn tent?!"
              </h2>
              <p className="text-base md:text-lg text-gray-300 mb-6 max-w-lg mx-auto lg:mx-0">
                Het is 3 uur 's nachts, je komt terug van het podium, en alle tenten zien er hetzelfde uit.
              </p>
            </div> */}

            {/* Solution */}
            <div className="mb-8">
              <h3 className="text-xl md:text-2xl font-semibold mb-4 text-white">
                <span className="glow-text-green">GlowBuddy</span> is dé glow-in-the-dark vlag die je festivalervaring makkelijker én leuker maakt.
                {/* Meet je nieuwe <span className="glow-text-green">GlowBuddy</span> */}
              </h3>
              <p className="text-base md:text-lg text-gray-300 mb-6 max-w-lg mx-auto lg:mx-0">
                Ontwerp je eigen vlag, zodat je jouw tent altijd terugvindt in het donker en samen met vrienden een unieke festivalcommunity creëert.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button variant="glow" size="lg" className="px-6 py-3">
                Bestel Nu & Glow Op!
              </Button>
              <Button variant="outline-glow" size="lg" className="px-6 py-3">
                Bekijk Voorbeelden
              </Button>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden glow-mixed">
              <img 
                src={festivalTentFlag} 
                alt="GlowBuddy lichtgevende vlag op tent tijdens festival"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>

        {/* Features Quick Preview
        // <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
        //   <div className="text-center">
        //     <div className="text-3xl mb-2">🌟</div>
        //     <h4 className="font-semibold text-white mb-2">Zichtbaar in het Donker</h4>
        //     <p className="text-gray-400 text-sm">LED-licht dat de hele nacht brandt</p>
        //   </div>
        //   <div className="text-center">
        //     <div className="text-3xl mb-2">🎨</div>
        //     <h4 className="font-semibold text-white mb-2">Custom Design</h4>
        //     <p className="text-gray-400 text-sm">Jouw eigen unieke stijl</p>
        //   </div>
        //   <div className="text-center">
        //     <div className="text-3xl mb-2">⚡</div>
        //     <h4 className="font-semibold text-white mb-2">Festival-Proof</h4>
        //     <p className="text-gray-400 text-sm">Waterdicht & stormbestendig</p>
        //   </div>
        // </div> */}
      </div>
    </section>
  );
};

export default Hero;