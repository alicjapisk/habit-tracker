import { Plus, Activity } from "@deemlol/next-icons";
import { useHabits } from "../../hooks/useHabits";
import { useCompletions } from "../../hooks/useCompletions";
import { useTodayProgress } from "../../hooks/useTodayProgress";
import ProgressBar from "./ProgressBar";
import HabitsList from "./HabitsList";
import NoHabits from "../NoHabits";
import Header from "./Header";
import ButtonPrimary from "../ButtonPrimary";
import CongratulationsMessage from "./CongratulationsMessage";

interface DashboardProps {
  onNavigate: (view: "add-habit" | "history") => void;
}
export default function Dashboard({ onNavigate }: DashboardProps) {
  const { habits } = useHabits();
  const { toggleHabitCompletion, getHabitCompletion, completions } =
    useCompletions();
  const progress = useTodayProgress(habits, completions);

  return (
    <div className="min-h-screen p-4 pb-20 pt-7">
      <div className="mb-6 flex flex-row sm:flex-col sm:items-center sm:gap-[20px] justify-between">
        <Header />
        <div className="flex flex-col justify-between sm:gap-[16px]">
          <div className="flex flex-row gap-[10px] justify-end sm:justify-center">
            <div>
              <ButtonPrimary
                text="History"
                icon={Activity}
                onClick={() => onNavigate("history")}
              />
            </div>
            <div>
              <ButtonPrimary
                icon={Plus}
                onClick={() => onNavigate("add-habit")}
              />
            </div>
          </div>
          <div className="self-end ">
            <CongratulationsMessage progress={progress} />
          </div>
        </div>
      </div>
      <div className="pb-[16px]">
        {habits.length > 0 && <ProgressBar progress={progress} />}
      </div>

      <div className="space-y-4">
        {habits.length === 0 ? (
          <NoHabits onNavigate={onNavigate} />
        ) : (
          <HabitsList
            habits={habits}
            getHabitCompletion={getHabitCompletion}
            toggleHabitCompletion={toggleHabitCompletion}
          />
        )}
      </div>
    </div>
  );
}
