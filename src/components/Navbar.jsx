export default function Navbar() {
  return (
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
  );
}
