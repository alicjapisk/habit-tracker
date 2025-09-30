import { ChevronLeft, Trash, Check, X } from "@deemlol/next-icons";
import { useHabits } from "../hooks/useHabits";
import { useCompletions } from "../hooks/useCompletions";

interface HistoryProps {
  onBack: () => void;
}

export const History = ({ onBack }: HistoryProps) => {
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

  const formatDate = (date: Date) => {
    return date.getDate().toString().padStart(2, "0");
  };

  const formatDayName = (date: Date) => {
    const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
    return days[date.getDay()];
  };

  const dates = getDates();

  const handleDeleteHabit = (habitId: string, habitName: string) => {
    if (confirm(`Are you sure you want to remove the habit: "${habitName}"?`)) {
      deleteHabit(habitId);
    }
  };

  return (
    <div className="min-h-screen p-4">
      <div className="flex items-center mb-6">
        <button onClick={onBack} className="mr-2 p-2 hover:bg-gray-100 rounded">
          <ChevronLeft size={24} color="black" />
        </button>
        <h1 className="text-2xl font-medium">History</h1>
      </div>

      {habits.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-gray-600">No habits to display</p>
        </div>
      ) : (
        <div className="space-y-6">
          <div className="overflow-x-auto">
            <div className="min-w-max">
              <div
                className="grid gap-2"
                style={{
                  gridTemplateColumns: `200px repeat(${dates.length}, 40px)`,
                }}
              >
                <div className="py-2">
                  <span className="text-sm font-medium">Habits</span>
                </div>
                {dates.map((date) => (
                  <div key={date.toISOString()} className="text-center py-2">
                    <div className="text-xs text-gray-600">
                      {formatDate(date)}
                    </div>
                    <div className="text-xs text-gray-600">
                      {formatDayName(date)}
                    </div>
                  </div>
                ))}

                {habits.map((habit) => (
                  <div key={habit.id} className="contents">
                    <div className="flex items-center justify-between py-3 pr-4 border-r border-gray-200">
                      <span className="text-sm truncate">{habit.name}</span>
                      <button
                        onClick={() => handleDeleteHabit(habit.id, habit.name)}
                        className="h-6 w-6 flex items-center justify-center text-gray-400 hover:text-red-500"
                      >
                        <Trash size={12} color="red" />
                      </button>
                    </div>
                    {dates.map((date) => {
                      const dateString = date.toISOString().split("T")[0];
                      const isCompleted = getHabitCompletion(
                        habit.id,
                        dateString
                      );

                      return (
                        <div
                          key={dateString}
                          className="flex justify-center py-3"
                        >
                          {isCompleted ? (
                            <Check size={24} color="green" />
                          ) : (
                            <X size={24} color="red" />
                          )}
                        </div>
                      );
                    })}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-8 space-y-4">
            <h3 className="text-lg font-medium">Statistics</h3>
            {habits.map((habit) => {
              const completedDays = dates.filter((date) => {
                const dateString = date.toISOString().split("T")[0];
                return getHabitCompletion(habit.id, dateString);
              }).length;

              const percentage = Math.round(
                (completedDays / dates.length) * 100
              );

              return (
                <div key={habit.id} className="bg-white rounded-lg p-4 border">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm">{habit.name}</span>
                    <span className="text-sm font-medium">{percentage}%</span>
                  </div>
                  <div className="text-xs text-gray-600">
                    {completedDays} of {dates.length} days
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};
