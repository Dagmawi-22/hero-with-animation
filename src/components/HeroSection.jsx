export default function HeroSection({ isVisible }) {
  return (
    <div className="max-w-7xl mx-auto px-6 pt-32 pb-20">
      <div className={`flex justify-center items-center text-center mb-8 transition-all duration-1000`}>
        <div
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap shadow-sm"
          style={{ backgroundColor: "#fff", color: "#007AFF" }}
        >
          <img
            className="w-9 h-9"
            src="/assets/icons/message.svg"
            alt="iMessage"
          />
          <p>#1 iMessage Automation Tool</p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto text-center space-y-8 relative">
        <img
          className={`absolute -left-40 top-8 w-16 h-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-40"
          }`}
          style={{ transitionDelay: "200ms" }}
          src="/assets/icons/bird.svg"
          alt="Bird"
        />
        <img
          className="absolute -left-10 top-14 w-12 h-12"
          src="/assets/icons/bird.svg"
          alt="Bird"
        />

        <img
          className={`absolute -right-28 top-14 w-14 h-14 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-40"
          }`}
          style={{ transitionDelay: "300ms" }}
          src="/assets/icons/bird.svg"
          alt="Bird"
        />
        <img
          className="absolute -right-48 top-52 w-16 h-16"
          src="/assets/icons/bird.svg"
          alt="Bird"
        />

        <h1 className="text-xl md:text-xl lg:text-2xl font-bold text-slate-900 leading-tight">
          <span className="block" style={{ color: "#007AFF" }}>
            iMessage Automation
          </span>
          <span className="block">for Teams and AI</span>
          <span className="block">Workflows.</span>
        </h1>

        <p className="text-xs text-slate-600 leading-relaxed max-w-lg mx-auto">
          Coup lets you, your team, or AI workflows send iMessages directly
          from your phone number, running securely on your Mac or Mac Mini.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            className="px-4 py-2 rounded-full text-white font-semibold text-xs transition-all hover:shadow-xl hover:scale-105 active:scale-95"
            style={{ backgroundColor: "#007AFF" }}
          >
            Get Started
          </button>
          <button className="px-8 py-2 rounded-full bg-white text-slate-900 font-semibold text-xs border-2 border-slate-200 transition-all hover:border-slate-300 hover:shadow-lg hover:scale-105 active:scale-95 inline-flex items-center gap-3">
            <img className="w-5 h-5" src="/assets/icons/mac.svg" alt="Mac" />
            <span className="text-slate-400">|</span>
            Download the Mac app
          </button>
        </div>
      </div>
    </div>
  );
}
