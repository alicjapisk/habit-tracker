import { Plus } from "@deemlol/next-icons";
import { useHabits } from "../hooks/useHabits";
import { useCompletions } from "../hooks/useCompletions";
import { useTodayProgress } from "../hooks/useTodayProgress";

interface DashboardProps {
  onNavigate: (view: "add-habit" | "history") => void;
}
export default function Dashboard({ onNavigate }: DashboardProps) {
  const { habits } = useHabits();
  const { toggleHabitCompletion, getHabitCompletion, completions } =
    useCompletions();
  const progress = useTodayProgress(habits, completions);

  return (
    <div className="min-h-screen bg-white p-4 pb-20">
      <div className="mb-6">
        <h1 className="mb-4 text-2xl font-medium text-gray-600">My habits</h1>

        {/* Progress Bar */}
        {habits.length > 0 && (
          <div className="space-y-2">
            <div className="flex justify-between">
              <span className="text-sm text-gray-600">
                Today&apos;s progress
              </span>
              <span className="text-sm font-medium text-gray-600">
                {progress}%
              </span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div
                className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                style={{ width: `${progress}%` }}
              ></div>
            </div>
          </div>
        )}
      </div>

      <div className="space-y-4">
        {habits.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-600 mb-4">
              You don&apos;t have any habits yet
            </p>
            <button
              onClick={() => onNavigate("add-habit")}
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg inline-flex items-center"
            >
              <Plus className="h-4 w-4 mr-2" />
              Add your first habit
            </button>
          </div>
        ) : (
          habits.map((habit) => {
            const isCompleted = getHabitCompletion(habit.id);

            return (
              <div
                key={habit.id}
                className="bg-white rounded-xl shadow p-4 flex items-center justify-between border"
              >
                <span className="flex-1 text-gray-600">{habit.name}</span>
                <input
                  type="checkbox"
                  checked={isCompleted}
                  onChange={() => toggleHabitCompletion(habit.id)}
                  className="h-5 w-5"
                />
              </div>
            );
          })
        )}
      </div>
      {habits.length > 0 && (
        <div className="mt-8 flex gap-4">
          <button
            onClick={() => onNavigate("history")}
            className="flex-1 border border-gray-300 bg-white px-4 py-2 rounded-lg hover:bg-gray-50"
          >
            History
          </button>
        </div>
      )}
      <button
        onClick={() => onNavigate("add-habit")}
        className="fixed bottom-6 right-6 h-14 w-14 rounded-full bg-blue-600 hover:bg-blue-700 shadow-lg flex items-center justify-center"
      >
        <Plus className="h-6 w-6 text-white" />
      </button>
    </div>
  );
}
