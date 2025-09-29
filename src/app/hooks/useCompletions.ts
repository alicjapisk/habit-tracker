import { HabitCompletion } from "../types";
import { useLocalStorageState } from "./useLocalStorageState";

export const useCompletions = () => {
  const [completions, setCompletions] = useLocalStorageState<HabitCompletion[]>(
    "habit-completions",
    []
  );

  const toggleHabitCompletion = (
    habitId: string,
    date: string = new Date().toISOString().split("T")[0]
  ) => {
    const existing = completions.find(
      (c) => c.habitId === habitId && c.date === date
    );

    if (existing) {
      setCompletions(
        completions.map((c) =>
          c.habitId === habitId && c.date === date
            ? { ...c, completed: !c.completed }
            : c
        )
      );
    } else {
      setCompletions([...completions, { habitId, date, completed: true }]);
    }
  };

  const getHabitCompletion = (
    habitId: string,
    date: string = new Date().toISOString().split("T")[0]
  ) => {
    return (
      completions.find((c) => c.habitId === habitId && c.date === date)
        ?.completed || false
    );
  };

  const clearHabitCompletions = (habitId: string) => {
    setCompletions(completions.filter((c) => c.habitId !== habitId));
  };

  return {
    completions,
    toggleHabitCompletion,
    getHabitCompletion,
    clearHabitCompletions,
  };
};
