"use client";

import React, { useState, useEffect } from "react";
import { Button } from "./ui/Button";

interface SettingsProps {
  onSave: (settings: {
    workDuration: number;
    breakDuration: number;
    longBreakDuration: number;
  }) => void;
  initialSettings: {
    workDuration: number;
    breakDuration: number;
    longBreakDuration: number;
  };
}

export function Settings({ onSave, initialSettings }: SettingsProps) {
  const [settings, setSettings] = useState(initialSettings);
  const [errors, setErrors] = useState<Record<string, string>>({});

  useEffect(() => {
    setSettings(initialSettings);
  }, [initialSettings]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setSettings((prev) => ({ ...prev, [name]: Number(value) }));
    validateField(name, Number(value));
  };

  const validateField = (name: string, value: number) => {
    if (value <= 0) {
      setErrors((prev) => ({ ...prev, [name]: "Value must be greater than 0" }));
    } else if (value > 120) {
      setErrors((prev) => ({ ...prev, [name]: "Value must be 120 or less" }));
    } else {
      setErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (Object.keys(errors).length === 0) {
      onSave(settings);
    }
  };

  const isValid = Object.keys(errors).length === 0;

  return (
    <form onSubmit={handleSubmit} className="bg-[#729762] p-8 rounded-lg shadow-lg">
      <h2 className="text-3xl font-bold mb-6 text-[#E7F0DC]">Settings</h2>
      <div className="space-y-6">
        {Object.entries(settings).map(([key, value]) => (
          <div key={key} className="relative">
            <label htmlFor={key} className="block text-[#E7F0DC] text-lg mb-2 capitalize">
              {key.replace(/([A-Z])/g, ' $1').trim()} (minutes)
            </label>
            <input
              type="number"
              id={key}
              name={key}
              value={value}
              onChange={handleInputChange}
              className={`w-full px-4 py-2 bg-[#E7F0DC] text-[#658147] rounded-md 
                         border-2 focus:outline-none focus:ring-2 focus:ring-[#597445] 
                         transition-all duration-200 ease-in-out
                         ${errors[key] ? 'border-red-500 focus:ring-red-500' : 'border-transparent'}`}
              min="1"
              max="120"
            />
            {errors[key] && (
              <p className="absolute -bottom-5 left-0 text-red-500 text-sm">{errors[key]}</p>
            )}
          </div>
        ))}
      </div>
      <Button 
        type="submit" 
        className={`w-full mt-8 py-3 text-lg font-semibold transition-all duration-200 ease-in-out
                    ${isValid 
                      ? 'bg-[#597445] hover:bg-[#4A6238] text-white' 
                      : 'bg-gray-400 cursor-not-allowed'}`}
        disabled={!isValid}
      >
        Save Settings
      </Button>
    </form>
  );
}
