"use client";

// app/page.tsx

"use client";

import { useState, useEffect } from "react";
import { Navbar } from "./components/Navbar";
import { Timer } from "./components/Timer";
import { HowItWorks } from "./components/HowItWorks";
import { Settings } from "./components/Settings";
import { Footer } from "./components/Footer";

interface TimerSettings {
  workDuration: number;
  breakDuration: number;
  longBreakDuration: number;
}

export default function Home() {
  const [settings, setSettings] = useState<TimerSettings>(() => {
    if (typeof window !== 'undefined') {
      const savedSettings = localStorage.getItem('pomodoro-settings');
      if (savedSettings) {
        return JSON.parse(savedSettings);
      }
    }
    return {
      workDuration: 25,
      breakDuration: 5,
      longBreakDuration: 15,
    };
  });

  useEffect(() => {
    localStorage.setItem('pomodoro-settings', JSON.stringify(settings));
  }, [settings]);

  const handleSettingsSave = (newSettings: TimerSettings) => {
    setSettings(newSettings);
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#E7F0DC]">
      <Navbar />
      <main className="flex-1">
        <section className="py-8 md:py-16 bg-gradient-to-b from-[#E7F0DC] to-[#D1E0C5]">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="flex flex-col items-center text-center">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl text-[#658147] mb-6">
                Focus and Achieve More
              </h1>
              <p className="max-w-[600px] text-[#729762] md:text-xl mb-10">
                Boost your productivity with our modern Pomodoro Timer. Stay
                focused, manage your time effectively, and accomplish your
                goals.
              </p>
              <Timer {...settings} />
            </div>
          </div>
        </section>
        <HowItWorks />
        <section id="settings" className="py-16 md:py-24 bg-[#E7F0DC]">
          <div className="container px-4 md:px-6 mx-auto">
            <h2 className="text-3xl font-bold text-center mb-10 text-[#658147]">
              Customize Your Focus Sessions
            </h2>
            <div className="max-w-md mx-auto">
              <Settings onSave={handleSettingsSave} initialSettings={settings} />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}