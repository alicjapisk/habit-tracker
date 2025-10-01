import { Habit } from "@/app/types";
import HabitBadge from "../HabitBadge";

interface Props {
  habits: Habit[];
  dates: Date[];
  getHabitCompletion: (habitId: string, date?: string) => boolean;
}
const Statistics = ({ habits, dates, getHabitCompletion }: Props) => {
  return (
    <div className="space-y-4">
      <h3 className="text-xl font-semibold text-gray-700 flex items-center">
        <span className="w-2 h-2 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full mr-2"></span>
        Statistics
      </h3>
      <div className="grid gap-4">
        {habits.map((habit) => {
          const completedDays = dates.filter((date) => {
            const dateString = date.toISOString().split("T")[0];
            return getHabitCompletion(habit.id, dateString);
          }).length;

          const percentage = Math.round((completedDays / dates.length) * 100);

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
                    {percentage}%
                  </div>
                  <div className="text-xs text-gray-600">
                    {completedDays} of {dates.length} days
                  </div>
                </div>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
                <div
                  className={`bg-gradient-to-r ${habit.color} h-2 rounded-full transition-all duration-500 shadow-sm`}
                  style={{ width: `${percentage}%` }}
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
