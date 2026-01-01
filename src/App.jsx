import { useState, useEffect } from 'react'

function App() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <nav className="absolute top-6 left-0 right-0 z-10 px-6">
        <div className="max-w-7xl mx-auto bg-white rounded-4xl shadow-lg px-6 py-4 grid grid-cols-3 items-center">
          <div className="text-2xl font-bold text-slate-900">Logo</div>
          <div className="hidden md:flex items-center justify-center gap-8">
            <a
              href="#"
              className="text-slate-600 hover:text-slate-900 transition-colors"
            >
              Features
            </a>
            <a
              href="#"
              className="text-slate-600 hover:text-slate-900 transition-colors"
            >
              About
            </a>
            <a
              href="#"
              className="text-slate-600 hover:text-slate-900 transition-colors"
            >
              Contact
            </a>
          </div>
          <div className="flex justify-end">
            <button
              className="px-6 py-2.5 rounded-full text-white font-medium transition-all hover:shadow-lg hover:scale-105 active:scale-95"
              style={{ backgroundColor: "#007AFF" }}
            >
              Contact Sales
            </button>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-6 pt-32 pb-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div
            className={`space-y-8 transition-all duration-1000 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-12"
            }`}
          >
            <div
              className="inline-block px-4 py-2 rounded-full text-sm font-medium"
              style={{ backgroundColor: "#fff", color: "#007AFF" }}
            >
              #1 iMessage Automation Tool
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-slate-900 leading-tight">
              Build Amazing
              <span className="block mt-2" style={{ color: "#007AFF" }}>
                Experiences
              </span>
            </h1>

            <p className="text-xl text-slate-600 leading-relaxed">
              Create stunning digital products with our powerful platform.
              Simple, fast, and designed for modern teams.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                className="px-8 py-4 rounded-full text-white font-semibold text-lg transition-all hover:shadow-xl hover:scale-105 active:scale-95"
                style={{ backgroundColor: "#007AFF" }}
              >
                Start Free Trial
              </button>
              <button className="px-8 py-4 rounded-full bg-white text-slate-900 font-semibold text-lg border-2 border-slate-200 transition-all hover:border-slate-300 hover:shadow-lg hover:scale-105 active:scale-95">
                Watch Demo
              </button>
            </div>

            <div className="flex items-center gap-12 pt-8">
              <div>
                <div className="text-3xl font-bold text-slate-900">50K+</div>
                <div className="text-slate-600">Active Users</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-slate-900">4.9/5</div>
                <div className="text-slate-600">Rating</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-slate-900">99%</div>
                <div className="text-slate-600">Satisfaction</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { icon: "🚀", title: "Fast" },
            { icon: "🎨", title: "Beautiful" },
            { icon: "🔒", title: "Secure" },
            { icon: "📱", title: "Responsive" },
          ].map((feature, index) => (
            <div
              key={index}
              className={`text-center p-6 rounded-2xl bg-white shadow-lg transition-all duration-700 hover:shadow-xl hover:scale-105 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${600 + index * 100}ms` }}
            >
              <div className="text-4xl mb-3">{feature.icon}</div>
              <div className="font-semibold text-slate-900">
                {feature.title}
              </div>
            </div>
          ))}
        </div>
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

export default App
