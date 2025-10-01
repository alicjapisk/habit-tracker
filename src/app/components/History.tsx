import { useHabits } from "../hooks/useHabits";
import { useCompletions } from "../hooks/useCompletions";
import BackButton from "./BackButton";
import SubHeader from "./SubHeader";
import Statistics from "./history/Statistics";
import NoHabits from "./NoHabits";
import { Chart } from "./history/Chart";

interface HistoryProps {
  onBack: () => void;
  onNavigate: (view: "add-habit" | "history") => void;
}

export const History = ({ onBack, onNavigate }: HistoryProps) => {
  const { habits, deleteHabit } = useHabits();
  const { getHabitCompletion } = useCompletions();

  const getDates = () => {
    const dates = [];
    const today = new Date();
    for (let i = 0; i < 14; i++) {
      const date = new Date(today);
      date.setDate(today.getDate() - i);
      dates.push(date);
    }
    return dates.reverse();
  };

  const dates = getDates();

  return (
    <div className="min-h-screen p-4">
      <BackButton onClick={onBack} text="Back to Habits" />
      <SubHeader text="History" emoji="📊" />

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
          <Statistics
            habits={habits}
            dates={dates}
            getHabitCompletion={getHabitCompletion}
          />
        </div>
      )}
    </div>
  );
};
