export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-12 md:py-24 bg-[#729762]">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold text-center mb-12 text-[#E7F0DC]">
          How It Works
        </h2>
        <div className="grid gap-8 md:grid-cols-3">
          {[
            {
              title: "Focus",
              description:
                "Work on your task with intense concentration for 25 minutes.",
              icon: "🎯",
            },
            {
              title: "Break",
              description:
                "Take a short 5-minute break to recharge and refresh.",
              icon: "☕",
            },
            {
              title: "Repeat",
              description:
                "Continue the cycle. After 4 cycles, take a longer 15-30 minute break.",
              icon: "🔁",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center bg-[#E7F0DC] p-6 rounded-lg shadow-lg"
            >
              <div className="text-4xl mb-4">{item.icon}</div>
              <h3 className="text-xl font-bold mb-2 text-[#658147]">
                {item.title}
              </h3>
              <p className="text-[#729762]">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
