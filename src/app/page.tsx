"use client";
import { useState } from "react";
import Dashboard from "./components/Dashboard";
import { View } from "./types";
import { AddHabit } from "./components/AddHabit";
import { History } from "./components/History";

export default function Home() {
  const [currentView, setCurrentView] = useState<View>("dashboard");

  const handleNavigate = (view: View) => {
    setCurrentView(view);
  };

  const handleBack = () => {
    setCurrentView("dashboard");
  };

  const renderCurrentView = () => {
    switch (currentView) {
      case "dashboard":
        return <Dashboard onNavigate={handleNavigate} />;
      case "add-habit":
        return <AddHabit onBack={handleBack} />;
      case "history":
        return <History onBack={handleBack} />;
      default:
        return <Dashboard onNavigate={handleNavigate} />;
    }
  };
  return <div className="w-full h-full container">{renderCurrentView()}</div>;
}
