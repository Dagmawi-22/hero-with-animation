export default function ScrollIndicator() {
  return (
    <div className="fixed bottom-8 left-0 right-0 flex flex-col items-center gap-3 z-10">
      <p className="text-slate-500 text-sm font-medium">
        Scroll to learn more
      </p>
      <img
        className="w-6 h-6"
        src="/assets/icons/scroll.svg"
        alt="Scroll"
      />
    </div>
  );
}
