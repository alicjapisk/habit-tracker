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
      <div className="bg-white/70 backdrop-blur-sm rounded-3xl p-6 shadow-xl border border-white/20 overflow-x-auto">
        <div className="min-w-max flex flex-col items-center">
          <div
            className="grid gap-3"
            style={{
              gridTemplateColumns: `270px repeat(${dates.length}, 45px)`,
            }}
          >
            <div className="py-3">
              <Text variant="T1" className="font-semibold">
                Habits
              </Text>
            </div>
            <Dates dates={dates} />

            {habits.map((habit) => {
              return (
                <div key={habit.id} className="contents">
                  <div className="flex items-center justify-between py-4 pr-4 border-r border-gray-200/50">
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

                  {dates.map((date) => (
                    <CompletionCell
                      key={date.toISOString()}
                      date={date}
                      getHabitCompletion={getHabitCompletion}
                      habitId={habit.id}
                    />
                  ))}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
