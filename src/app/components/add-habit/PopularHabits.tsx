import { Dispatch, SetStateAction } from "react";
import { Text } from "../Text";
import Label from "./Label";

interface Props {
  setHabitName: Dispatch<SetStateAction<string>>;
  setSelectedColor: Dispatch<SetStateAction<string>>;
  setSelectedEmoji: Dispatch<SetStateAction<string>>;
}
export default function PopularHabits({
  setHabitName,
  setSelectedColor,
  setSelectedEmoji,
}: Props) {
  const defaultHabitsList = [
    {
      text: "Drink 2L of water",
      emoji: "💧",
      color: "from-blue-500 to-cyan-500",
    },
    {
      text: "30-minute walk",
      emoji: "🚶‍♂️",
      color: "from-green-500 to-emerald-500",
    },
    {
      text: "Read 10 pages of a book",
      emoji: "📚",
      color: "from-purple-500 to-indigo-500",
    },
    {
      text: "5 minutes of meditation",
      emoji: "🧘‍♀️",
      color: "from-pink-500 to-rose-500",
    },
    {
      text: "Eat 5 servings of fruits and vegetables",
      emoji: "🥗",
      color: "from-orange-500 to-amber-500",
    },
    {
      text: "Go to bed before 11:00 PM",
      emoji: "😴",
      color: "from-indigo-500 to-purple-500",
    },
  ];
  return (
    <div className="mt-8">
      <Label
        text="Popular habits:"
        htmlFor="popular-habits"
        fromColor="orange-500"
        toColor="amber-500"
      />
      <div className="grid gap-3 mt-[16px]">
        {defaultHabitsList.map((example, index) => (
          <button
            key={index}
            onClick={() => {
              setHabitName(example.text);
              setSelectedEmoji(example.emoji);
              setSelectedColor(example.color);
            }}
            className="group w-full text-left p-4 bg-white/50 backdrop-blur-sm hover:bg-white/80 rounded-2xl border border-white/20 shadow-sm hover:shadow-lg transform hover:scale-105 transition-all duration-200"
          >
            <div className="flex items-center">
              <div
                className={`w-10 h-10 bg-gradient-to-r ${example.color} rounded-xl flex items-center justify-center mr-4 shadow-lg`}
              >
                {example.emoji}
              </div>
              <Text variant="T1" htmlFor="habit-example">
                {example.text}
              </Text>
              <span className="font-medium"></span>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}
