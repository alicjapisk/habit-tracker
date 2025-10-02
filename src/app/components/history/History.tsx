import { useHabits } from "@/app/hooks/useHabits";
import BackButton from "../BackButton";
import NoHabits from "../NoHabits";
import SubHeader from "../SubHeader";
import CalendarNavigation from "./CalendarNavigation";
import { useCompletions } from "@/app/hooks/useCompletions";
import { Chart } from "./Chart";
import Statistics from "./Statistics";
import { useState } from "react";

interface HistoryProps {
  onBack: () => void;
  onNavigate: (view: "add-habit" | "history") => void;
}

export const History = ({ onBack, onNavigate }: HistoryProps) => {
  const { habits, deleteHabit } = useHabits();
  const { getHabitCompletion } = useCompletions();
  const [currentDate, setCurrentDate] = useState(new Date());
  const [viewDays, setViewDays] = useState(14);

  const getDates = () => {
    const dates = [];
    const endDate = new Date(currentDate);
    for (let i = 0; i < viewDays; i++) {
      const date = new Date(endDate);
      date.setDate(endDate.getDate() - i);
      dates.push(date);
    }
    return dates.reverse();
  };

  const dates = getDates();

  return (
    <div className="min-h-screen p-4 mb-10">
      <BackButton onClick={onBack} text="Back to Habits" />
      <SubHeader text="History" emoji="📊" />
      <CalendarNavigation
        currentDate={currentDate}
        setCurrentDate={setCurrentDate}
        setViewDays={setViewDays}
        viewDays={viewDays}
      />
      {habits.length === 0 ? (
        <NoHabits onNavigate={onNavigate} />
      ) : (
        <div className="space-y-6">
          <Chart
            habits={habits}
            deleteHabit={deleteHabit}
            getHabitCompletion={getHabitCompletion}
            dates={dates}
          />
          <Statistics habits={habits} getHabitCompletion={getHabitCompletion} />
        </div>
      )}
    </div>
  );
};
