import { Habit } from "@/app/types";
import HabitBadge from "../HabitBadge";
import { Text } from "../Text";

interface Props {
  habits: Habit[];
  getHabitCompletion: (habitId: string, date?: string) => boolean;
}
const Statistics = ({ habits, getHabitCompletion }: Props) => {
  const getHabitProgress = (habit: Habit) => {
    const today = new Date();
    const createdAt = new Date(habit.createdAt);
    const daysSinceCreation =
      Math.floor(
        (today.getTime() - createdAt.getTime()) / (1000 * 60 * 60 * 24)
      ) + 1;

    const allDates = [];
    for (let i = 0; i < daysSinceCreation; i++) {
      const date = new Date(createdAt);
      date.setDate(createdAt.getDate() + i);
      if (date <= today) {
        allDates.push(date);
      }
    }

    const completedDays = allDates.filter((date) => {
      const dateString = date.toISOString().split("T")[0];
      return getHabitCompletion(habit.id, dateString);
    }).length;

    return {
      completed: completedDays,
      total: habit.goal,
      percentage: Math.round((completedDays / habit.goal) * 100),
      isGoalAchieved: completedDays >= habit.goal,
    };
  };
  return (
    <div className="space-y-4">
      <h3 className="text-xl font-semibold text-gray-700 flex items-center">
        <span className="w-2 h-2 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full mr-2"></span>
        Statistics
      </h3>
      <div className="grid gap-4">
        {habits.map((habit) => {
          const progress = getHabitProgress(habit);

          return (
            <div
              key={habit.id}
              className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 border border-white/20 shadow-lg"
            >
              <div className="flex justify-between items-center mb-4">
                <HabitBadge
                  text={habit.name}
                  emoji={habit.emoji}
                  color={habit.color}
                  size="md"
                />
                <div className="text-right">
                  <div
                    className={`text-xl font-bold bg-gradient-to-r ${habit.color} bg-clip-text text-transparent`}
                  >
                    {progress.percentage}%
                  </div>
                  <div className="text-xs text-gray-600">
                    {progress.completed} of {progress.total} days
                  </div>
                  {progress.isGoalAchieved && (
                    <div className="mt-1">
                      <Text variant="S1" className="text-green-600">
                        🎉 Goal achieved!
                      </Text>
                    </div>
                  )}
                </div>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
                <div
                  className={`bg-gradient-to-r ${
                    habit.color
                  } h-2 rounded-full transition-all duration-500 shadow-sm ${
                    progress.isGoalAchieved ? "animate-pulse" : ""
                  }`}
                  style={{ width: `${Math.min(progress.percentage, 100)}%` }}
                ></div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Statistics;
