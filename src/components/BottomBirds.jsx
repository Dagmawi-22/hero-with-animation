export default function BottomBirds({ isVisible }) {
  return (
    <div className="fixed bottom-28 left-0 right-0 z-10 px-12">
      <div className="max-w-7xl mx-auto flex justify-between items-end">
        <img
          className={`w-20 h-20 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"
          }`}
          style={{ transitionDelay: "700ms" }}
          src="/assets/icons/birdwithmessage1.svg"
          alt="Bird with message"
        />

        <img
          className={`w-20 h-20 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"
          }`}
          style={{ transitionDelay: "800ms" }}
          src="/assets/icons/birdwithmessage2.svg"
          alt="Bird with message"
        />

        <img
          className={`w-20 h-20 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"
          }`}
          style={{ transitionDelay: "900ms" }}
          src="/assets/icons/birdwithmessage3.svg"
          alt="Bird with message"
        />

        <img
          className={`w-20 h-20 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"
          }`}
          style={{ transitionDelay: "1000ms" }}
          src="/assets/icons/birdwithmessage4.svg"
          alt="Bird with message"
        />
      </div>
    </div>
  );
}
