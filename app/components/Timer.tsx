"use client";

import React, { useState, useEffect, useCallback } from "react";
import { Button } from "./ui/Button";
import { Progress } from "./ui/Progress";
import { playBeep } from "@/utils/sound";

interface TimerProps {
  workDuration: number;
  breakDuration: number;
  longBreakDuration: number;
}

export function Timer({
  workDuration,
  breakDuration,
  longBreakDuration,
}: TimerProps) {
  const [mounted, setMounted] = useState(false);
  const [time, setTime] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const [type, setType] = useState<"work" | "break" | "longBreak">("work");
  const [cycles, setCycles] = useState(0);
  const [isSoundEnabled, setIsSoundEnabled] = useState(false);

  useEffect(() => {
    setMounted(true);
    setTime(workDuration * 60);
  }, [workDuration]);

  const formatTime = useCallback((seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, "0")}:${secs
      .toString()
      .padStart(2, "0")}`;
  }, []);

  const getCurrentDuration = useCallback(() => {
    switch (type) {
      case "work":
        return workDuration * 60;
      case "break":
        return breakDuration * 60;
      case "longBreak":
        return longBreakDuration * 60;
    }
  }, [type, workDuration, breakDuration, longBreakDuration]);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isActive && time > 0) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime - 1);
      }, 1000);
    } else if (time === 0) {
      setIsActive(false);
      if (isSoundEnabled) {
        playBeep();
      }
      if (type === "work") {
        setCycles((prevCycles) => prevCycles + 1);
        if (cycles % 4 === 3) {
          setType("longBreak");
          setTime(longBreakDuration * 60);
        } else {
          setType("break");
          setTime(breakDuration * 60);
        }
      } else {
        setType("work");
        setTime(workDuration * 60);
      }
      // Send browser notification
      if (Notification.permission === "granted") {
        new Notification("Pomodoro Timer", {
          body: `${
            type.charAt(0).toUpperCase() + type.slice(1)
          } session ended!`,
        });
      }
    }
    return () => clearInterval(interval);
  }, [
    isActive,
    time,
    type,
    cycles,
    workDuration,
    breakDuration,
    longBreakDuration,
    isSoundEnabled,
  ]);

  const toggleTimer = () => {
    setIsActive(!isActive);
  };

  const resetTimer = () => {
    setTime(workDuration * 60);
    setIsActive(false);
    setType("work");
    setCycles(0);
  };

  const toggleSound = () => {
    setIsSoundEnabled(!isSoundEnabled);
    if (!isSoundEnabled) {
      playBeep();
    }
  };

  const progress = (time / getCurrentDuration()) * 100;

  if (!mounted) {
    return <div>Loading...</div>; // or any loading indicator
  }

  return (
    <div className="bg-primary rounded-lg p-8 flex flex-col items-center justify-center shadow-lg transition-all duration-300 hover:shadow-xl">
      <div className="text-8xl font-bold text-primary-foreground mb-4">
        {formatTime(time)}
      </div>
      <div className="text-primary-foreground text-2xl mb-2 capitalize">
        {type}
      </div>
      <div className="text-primary-foreground mb-4">Cycles: {cycles}</div>
      <Progress value={progress} className="w-full mb-4" />
      <div className="flex gap-4 mb-4">
        <Button
          variant={isActive ? "destructive" : "secondary"}
          onClick={toggleTimer}
          className="text-lg px-6 py-3 transition-all duration-300 hover:scale-105"
        >
          {isActive ? "Pause" : "Start"}
        </Button>
        <Button
          variant="outline"
          onClick={resetTimer}
          className="text-lg px-6 py-3 transition-all duration-300 hover:scale-105"
        >
          Reset
        </Button>
      </div>
      <Button
        variant="outline"
        onClick={toggleSound}
        className="text-lg px-6 py-3 transition-all duration-300 hover:scale-105"
      >
        {isSoundEnabled ? "Disable Sound" : "Enable Sound"}
      </Button>
    </div>
  );
}
