import { useState } from "react";
import { useHabits } from "../hooks/useHabits";
import { ChevronLeft } from "@deemlol/next-icons";
import { Text } from "./Text";

interface AddHabitProps {
  onBack: () => void;
}

export const AddHabit = ({ onBack }: AddHabitProps) => {
  const [habitName, setHabitName] = useState("");
  const { addHabit } = useHabits();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (habitName.trim()) {
      addHabit(habitName.trim());
      setHabitName("");
      onBack();
    }
  };

  const defaultHabitsList = [
    "Drink 2L of water",
    "30-minute walk",
    "Read 10 pages of a book",
    "5 minutes of meditation",
    "Eat 5 servings of fruits and vegetables",
    "Go to bed before 11:00 PM",
  ];
  return (
    <div className="min-h-screen bg-white p-4">
      <div className="flex items-center mb-8">
        <button
          onClick={onBack}
          className="mr-2 p-2 hover:bg-gray-100 rounded text-gray-600"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>
        <Text variant="H4" className="font-semibold">
          Add habit
        </Text>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="space-y-2">
          <label htmlFor="habit-name" className="font-medium text-gray-600">
            Habit name
          </label>
          <input
            id="habit-name"
            type="text"
            placeholder="ex. Drink 2L of water, 30 min walk"
            value={habitName}
            onChange={(e) => setHabitName(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300  text-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            autoFocus
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-gray-600px-4 py-2 rounded-lg disabled:opacity-50"
          disabled={!habitName.trim()}
        >
          Add habit
        </button>
      </form>

      <div className="mt-8">
        <h3 className="mb-4 text-gray-600">Example of habit</h3>
        <div className="space-y-2">
          {defaultHabitsList.map((example, index) => (
            <button
              key={index}
              onClick={() => setHabitName(example)}
              className="w-full text-left p-3 text-sm text-gray-600 hover:text-gray-800 hover:bg-gray-50 rounded"
            >
              {example}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};
