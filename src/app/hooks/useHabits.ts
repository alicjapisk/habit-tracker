import { Habit } from "../types";
import { useLocalStorageState } from "./useLocalStorageState";

export const useHabits = () => {
  const [habits, setHabits] = useLocalStorageState<Habit[]>("habits", []);

  const addHabit = (name: string) => {
    const newHabit: Habit = {
      id: Date.now().toString(),
      name,
      createdAt: new Date().toISOString(),
    };
    setHabits([...habits, newHabit]);
  };

  const deleteHabit = (habitId: string) => {
    setHabits(habits.filter((h) => h.id !== habitId));
  };

  return { habits, addHabit, deleteHabit };
};
