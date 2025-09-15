const ProblemSolution = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-card to-night-blue/50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-white">Het </span>
            <span className="glow-text-pink">festival probleem</span>
            <span className="text-white"> dat iedereen kent</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Problem Side */}
          <div className="space-y-8">
            <div className="text-center lg:text-left">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">
                😵‍💫 Zonder GlowBuddy...
              </h3>
            </div>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-red-500/20 border border-red-500/50 rounded-full flex items-center justify-center">
                  <span className="text-red-400 text-xl">😰</span>
                </div>
                <div>
                  <h4 className="font-bold text-white mb-2">Eindeloos zoeken</h4>
                  <p className="text-gray-300">Uren rondlopen tussen duizenden identieke tenten</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-red-500/20 border border-red-500/50 rounded-full flex items-center justify-center">
                  <span className="text-red-400 text-xl">😴</span>
                </div>
                <div>
                  <h4 className="font-bold text-white mb-2">Gemiste slaap</h4>
                  <p className="text-gray-300">Te moe van het zoeken om te genieten van de muziek</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-red-500/20 border border-red-500/50 rounded-full flex items-center justify-center">
                  <span className="text-red-400 text-xl">📱</span>
                </div>
                <div>
                  <h4 className="font-bold text-white mb-2">Lege batterij</h4>
                  <p className="text-gray-300">GPS werkt niet, zaklamp is dood, vrienden niet bereikbaar</p>
                </div>
              </div>
            </div>
          </div>

          {/* Solution Side */}
          <div className="space-y-8">
            <div className="text-center lg:text-left">
              <h3 className="text-2xl md:text-3xl font-bold mb-6">
                <span className="glow-text-green">✨ Met GlowBuddy...</span>
              </h3>
            </div>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-glow-green/20 border border-glow-green/50 rounded-full flex items-center justify-center glow-border-green">
                  <span className="text-glow-green text-xl">🎯</span>
                </div>
                <div>
                  <h4 className="font-bold text-white mb-2">Direct gevonden</h4>
                  <p className="text-gray-300">Spot je tent van honderden meters afstand</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-glow-green/20 border border-glow-green/50 rounded-full flex items-center justify-center glow-border-green">
                  <span className="text-glow-green text-xl">⚡</span>
                </div>
                <div>
                  <h4 className="font-bold text-white mb-2">Meer energie</h4>
                  <p className="text-gray-300">Bespaar tijd en kracht voor wat echt telt: feesten!</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-glow-green/20 border border-glow-green/50 rounded-full flex items-center justify-center glow-border-green">
                  <span className="text-glow-green text-xl">🔋</span>
                </div>
                <div>
                  <h4 className="font-bold text-white mb-2">Altijd werkend</h4>
                  <p className="text-gray-300">24+ uur batterijduur, geen smartphone nodig</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div>
            <div className="text-4xl font-bold glow-text-green mb-2">55%</div>
            <p className="text-gray-300">Van festivalgangers raakt hun tent kwijt</p>
          </div>
          <div>
            <div className="text-4xl font-bold glow-text-pink mb-2">30min</div>
            <p className="text-gray-300">Gemiddelde zoektijd per nacht</p>
          </div>
          <div>
            <div className="text-4xl font-bold glow-text-green mb-2">100%</div>
            <p className="text-gray-300">GlowBuddy gebruikers vinden hun tent direct</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSolution;