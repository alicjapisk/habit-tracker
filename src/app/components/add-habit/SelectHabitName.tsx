import { Dispatch, SetStateAction } from "react";
import Label from "./Label";

interface Props {
  setHabitName: Dispatch<SetStateAction<string>>;
  habitName: string;
}
export default function SelectHabitName({ setHabitName, habitName }: Props) {
  return (
    <div className="space-y-3">
      <Label
        text="Habit name:"
        htmlFor="habit-name"
        fromColor="purple-500"
        toColor="pink-500"
      />
      <input
        id="habit-name"
        type="text"
        placeholder="ex. Drink 2L of water, 30-minute walk"
        value={habitName}
        onChange={(e) => setHabitName(e.target.value)}
        className={`w-full px-4 py-4 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-transparent   backdrop-blur-sm shadow-sm transition-all duration-200 ${
          habitName ? "bg-purple-50 ring-2 ring-purple-500/50" : "bg-white/80"
        }`}
        autoFocus
      />
    </div>
  );
}
