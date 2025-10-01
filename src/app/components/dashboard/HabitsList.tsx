import { Habit } from "@/app/types";
import { Check } from "@deemlol/next-icons";
import HabitBadge from "../HabitBadge";

interface Props {
  habits: Habit[];
  getHabitCompletion: (habitId: string, date?: string) => boolean;
  toggleHabitCompletion: (habitId: string, date?: string) => void;
}

const HabitsList = ({
  habits,
  getHabitCompletion,
  toggleHabitCompletion,
}: Props) => {
  return habits.map((habit) => {
    const isCompleted = getHabitCompletion(habit.id);
    return (
      <div
        key={habit.id}
        onClick={() => toggleHabitCompletion(habit.id)}
        className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-white/20 overflow-hidden transform hover:scale-105 transition-all duration-200"
      >
        <div className={`h-2 bg-gradient-to-r ${habit.color}`}></div>
        <div className="p-5 flex items-center justify-between">
          <HabitBadge
            text={habit.name}
            emoji={habit.emoji}
            color={habit.color}
            size="lg"
          />
          <div className="relative ml-4 flex-shrink-0">
            <input
              type="checkbox"
              checked={isCompleted}
              onChange={() => toggleHabitCompletion(habit.id)}
              className="appearance-none h-6 w-6 rounded-lg border-2 border-gray-300 checked:border-transparent checked:bg-gradient-to-r checked:from-green-400 checked:to-emerald-500 focus:outline-none focus:ring-2 focus:ring-green-500/50 transition-all duration-200 cursor-pointer"
            />
            {isCompleted && (
              <Check className="h-4 w-4 text-white absolute top-1 left-1 pointer-events-none" />
            )}
          </div>
        </div>
      </div>
    );
  });
};

export default HabitsList;
