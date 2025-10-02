"use client";
import { useState } from "react";
import { View } from "./types";
import { History } from "./components/history/History";
import Dashboard from "./components/dashboard/Dashboard";
import { AddHabit } from "./components/add-habit/AddHabit";

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
        return <History onBack={handleBack} onNavigate={handleNavigate} />;
      default:
        return <Dashboard onNavigate={handleNavigate} />;
    }
  };
  return <div className="w-full h-full container ">{renderCurrentView()}</div>;
}
