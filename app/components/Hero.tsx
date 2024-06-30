import { Timer } from "./Timer";

export function Hero() {
  return (
    <section className="w-full py-8 md:py-16 lg:py-8 bg-[#E7F0DC]">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center text-center">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-[#658147]">
            Focus and Productivity
          </h1>
          <p className="mt-4 max-w-[600px] text-[#729762] md:text-xl">
            Use the Pomodoro Technique to boost your productivity and manage
            your time effectively.
          </p>
          <div className="mt-8">
            <Timer workDuration={25} breakDuration={5} longBreakDuration={15} />
          </div>
        </div>
      </div>
    </section>
  );
}
