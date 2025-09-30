import { useMemo } from "react";
import { Habit, HabitCompletion } from "../types";

export const useTodayProgress = (
  habits: Habit[],
  completions: HabitCompletion[]
) => {
  return useMemo(() => {
    if (habits.length === 0) return 0;
    const today = new Date().toISOString().split("T")[0];
    const habitIds = new Set(habits.map((h) => h.id));
    const doneToday = completions.filter(
      (c) => c.date === today && c.completed && habitIds.has(c.habitId)
    ).length;
    return Math.round((doneToday / habits.length) * 100);
  }, [habits, completions]);
};
