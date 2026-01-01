export default function FlyingBirds({ isVisible }) {
  return (
    <>
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
    </>
  );
}
