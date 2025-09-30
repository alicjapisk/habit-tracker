import { Habit } from "../types";
import { useLocalStorageState } from "./useLocalStorageState";

export const useHabits = () => {
  const [habits, setHabits] = useLocalStorageState<Habit[]>("habits", []);

  const addHabit = (
    name: string,
    emoji: string = "✨",
    color: string = "from-purple-500 to-pink-500"
  ) => {
    const newHabit: Habit = {
      id: Date.now().toString(),
      name,
      emoji,
      color,
      createdAt: new Date().toISOString(),
    };
    setHabits([...habits, newHabit]);
  };

  const deleteHabit = (habitId: string) => {
    setHabits(habits.filter((h) => h.id !== habitId));
  };

  return { habits, addHabit, deleteHabit };
};
