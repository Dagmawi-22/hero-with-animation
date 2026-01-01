import { useState, useEffect } from "react";

function App() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsVisible(true);
    }, 100);
  }, []);

  return (
    <div
      className="min-h-screen"
      style={{
        background:
          "linear-gradient(0deg, rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.9)), linear-gradient(0deg, #007AFF, #007AFF)",
      }}
    >
      <nav className="absolute top-6 left-0 right-0 z-10 px-6">
        <div className="max-w-7xl mx-auto bg-white rounded-4xl shadow-lg px-6 py-1 grid grid-cols-3 items-center">
          <div className="text-xs font-bold text-slate-900">
            <img
              src="/assets/icons/logo.svg"
              alt="Logo"
              className="w-20 h-14"
            />
          </div>
          <div className="hidden md:flex items-center justify-center gap-8">
            <a
              href="#"
              className="text-xs text-slate-500 hover:text-slate-900 transition-colors"
            >
              How it Works
            </a>
            <a
              href="#"
              className="text-xs text-slate-500 hover:text-slate-900 transition-colors"
            >
              Pricing
            </a>
            <a
              href="#"
              className="text-xs text-slate-500 hover:text-slate-900 transition-colors"
            >
              Use Case
            </a>
            <a
              href="#"
              className="text-xs text-slate-500 hover:text-slate-900 transition-colors"
            >
              FAQ
            </a>
          </div>
          <div className="flex justify-end">
            <button
              className="px-6 py-1.5 rounded-full text-white text-sm font-medium transition-all hover:shadow-lg hover:scale-105 active:scale-95 relative overflow-hidden group"
              style={{ backgroundColor: "#007AFF" }}
            >
              <span className="absolute inset-0 bg-white transform translate-x-full transition-transform duration-300 ease-out group-hover:translate-x-0"></span>
              <span className="relative group-hover:text-slate-900 transition-colors duration-300">
                Contact Sales
              </span>
            </button>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-6 pt-32 pb-20">
        <div
          className={`flex justify-center items-center text-center mb-8 transition-all duration-1000`}
        >
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
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-40"
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
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-40"
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

      <div
        className={`fixed md:bottom-40 -bottom-10 left-0 right-0 h-32 pointer-events-none transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"
        }`}
        style={{ transitionDelay: "600ms" }}
      >
        <img className="w-full" src="/assets/icons/bg.svg" alt="Background" />
      </div>

      <div className="fixed bottom-28 left-0 right-0 z-10 px-12">
        <div className="max-w-7xl mx-auto flex justify-between items-end">
          <img
            className={`w-20 h-20 transition-all duration-1000 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-20"
            }`}
            style={{ transitionDelay: "700ms" }}
            src="/assets/icons/birdwithmessage1.svg"
            alt="Bird with message"
          />

          <img
            className={`w-20 h-20 transition-all duration-1000 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-20"
            }`}
            style={{ transitionDelay: "800ms" }}
            src="/assets/icons/birdwithmessage2.svg"
            alt="Bird with message"
          />

          <img
            className={`w-20 h-20 transition-all duration-1000 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-20"
            }`}
            style={{ transitionDelay: "900ms" }}
            src="/assets/icons/birdwithmessage3.svg"
            alt="Bird with message"
          />

          <img
            className={`w-20 h-20 transition-all duration-1000 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-20"
            }`}
            style={{ transitionDelay: "1000ms" }}
            src="/assets/icons/birdwithmessage4.svg"
            alt="Bird with message"
          />
        </div>
      </div>

      <img
        className={`fixed top-1/2 w-24 h-24 transition-all duration-[3000ms] ease-linear`}
        style={{
          transitionDelay: "1500ms",
          left: isVisible ? "110%" : "-10%",
          transform: isVisible ? "translateY(-200px)" : "translateY(0)",
        }}
        src="/assets/icons/birdwithmessage1.svg"
        alt="Flying bird"
      />

      <img
        className={`fixed top-[60%] w-24 h-24 transition-all duration-[3000ms] ease-linear`}
        style={{
          transitionDelay: "2000ms",
          left: isVisible ? "-10%" : "110%",
          transform: isVisible
            ? "translateY(-200px) scaleX(-1)"
            : "translateY(0) scaleX(-1)",
        }}
        src="/assets/icons/birdwithmessage3.svg"
        alt="Flying bird"
      />

      <div className="fixed bottom-8 left-0 right-0 flex flex-col items-center gap-3 z-10">
        <p className="text-slate-500 text-sm font-medium">
          Scroll to learn more
        </p>
        <img
          className="w-6 h-6 animate-bounce"
          src="/assets/icons/scroll.svg"
          alt="Scroll"
        />
      </div>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}

export default App;
