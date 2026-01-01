export default function Background({ isVisible }) {
  return (
    <div
      className={`fixed md:bottom-40 -bottom-10 left-0 right-0 h-32 pointer-events-none transition-all duration-1000 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"
      }`}
      style={{ transitionDelay: "600ms" }}
    >
      <img className="w-full" src="/assets/icons/bg.svg" alt="Background" />
    </div>
  );
}
