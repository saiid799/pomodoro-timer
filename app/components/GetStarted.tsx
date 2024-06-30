import Link from "next/link";
import { Button } from "./ui/Button";

export function GetStarted() {
  return (
    <section
      id="get-started"
      className="w-full py-12 md:py-24 lg:py-32 border-t bg-[#E7F0DC]"
    >
      <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6">
        <div className="space-y-3">
          <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight text-[#597445]">
            Get Started with Pomodoro Timer
          </h2>
          <p className="mx-auto max-w-[600px] text-[#729762] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Download the app, set your work and break intervals, and start
            boosting your productivity today.
          </p>
        </div>
        <div className="mx-auto w-full max-w-sm space-y-2">
          <div className="flex justify-center">
            <Button asChild size="lg">
              <Link href="#download">Get the App</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
