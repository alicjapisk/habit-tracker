import { Text } from "../Text";
import Dates from "./Dates";
import { Habit } from "@/app/types";
import HabitBadge from "../HabitBadge";
import { CompletionCell } from "./CompletionCell";
import DeleteHabit from "./DeleteHabit";

interface HistoryProps {
  habits: Habit[];
  deleteHabit: (habitId: string) => void;
  getHabitCompletion: (habitId: string, date?: string) => boolean;
  dates: Date[];
}

export const Chart = ({
  habits,
  getHabitCompletion,
  deleteHabit,
  dates,
}: HistoryProps) => {
  const handleDeleteHabit = (habitId: string, habitName: string) => {
    if (confirm(`Are you sure you want to remove the habit: "${habitName}"?`)) {
      deleteHabit(habitId);
    }
  };

  return (
    <div>
      <div className="bg-white/70 backdrop-blur-sm rounded-3xl pl-6 py-6 shadow-xl border border-white/20 overflow-x-auto">
        <div className="flex">
          <div className="flex-shrink-0 sticky left-0 z-10 ">
            <Text variant="T1" className="font-semibold mt-[12px]">
              Habits
            </Text>
            <div className="mt-[27px]">
              {habits.map((habit) => (
                <div
                  key={habit.id}
                  className="flex items-center justify-between py-4 pr-4 lg:w-[300px] md:w-[300px] w-[250px] h-[80px] sm:w-[200px] "
                >
                  <HabitBadge
                    text={habit.name}
                    emoji={habit.emoji}
                    color={habit.color}
                    size="sm"
                  />
                  <DeleteHabit
                    habitId={habit.id}
                    habitName={habit.name}
                    handleDeleteHabit={handleDeleteHabit}
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="overflow-x-auto ">
            <div
              className="grid"
              style={{
                gridTemplateColumns: `repeat(${dates.length}, 45px)`,
              }}
            >
              <Dates dates={dates} />
              {habits.map((habit) => (
                <div key={habit.id} className="contents">
                  {dates.map((date) => (
                    <CompletionCell
                      key={date.toISOString()}
                      date={date}
                      getHabitCompletion={getHabitCompletion}
                      habitId={habit.id}
                    />
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
