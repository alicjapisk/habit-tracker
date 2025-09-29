import { Habit } from "../types";
import { HabitCompletion } from "../types";

export const useTodayProgress = (
  habits: Habit[],
  completions: HabitCompletion[]
) => {
  const today = new Date().toISOString().split("T")[0];
  const todayCompletions = completions.filter(
    (c) => c.date === today && c.completed
  );

  if (habits.length === 0) return 0;
  return Math.round((todayCompletions.length / habits.length) * 100);
};
