import { Target } from "@deemlol/next-icons";
import { Dispatch, SetStateAction } from "react";
import Label from "./Label";
import { Text } from "../Text";

interface Props {
  setGoal: Dispatch<SetStateAction<number>>;
  goal: number;
}
export default function SelectHabitGoal({ goal, setGoal }: Props) {
  return (
    <div className="space-y-4">
      <Label
        text="Target (number of days):"
        htmlFor="select-goal"
        fromColor="orange-500"
        toColor="red-500"
      />
      <div className="flex items-center space-x-4">
        <Target size={24} color="red" />
        <input
          type="number"
          min="1"
          max="365"
          value={goal}
          onChange={(e) =>
            setGoal(Math.max(1, Math.min(365, parseInt(e.target.value) || 1)))
          }
          className="w-24 px-3 py-2 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500/50 focus:border-transparent bg-white/80 backdrop-blur-sm shadow-sm transition-all duration-200 text-center"
        />
        <Text variant="T1">days</Text>
      </div>
      <div className="grid grid-cols-4 gap-2">
        {[7, 14, 21, 30].map((days) => (
          <button
            key={days}
            type="button"
            onClick={() => setGoal(days)}
            className={`px-3 py-2 rounded-lg transition-all duration-200 border-2 ${
              goal === days
                ? "border-orange-500 bg-red-50 text-orange-700"
                : "border-gray-200 bg-white/80 hover:border-orange-300 hover:bg-orange-50 text-gray-700"
            }`}
          >
            <Text variant="T1">{days} days</Text>
          </button>
        ))}
      </div>
    </div>
  );
}
