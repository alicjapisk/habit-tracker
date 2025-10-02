import { Dispatch, SetStateAction } from "react";
import Label from "./Label";

interface Props {
  setSelectedEmoji: Dispatch<SetStateAction<string>>;
  selectedEmoji: string;
}

const emojis = [
  "✨",
  "💧",
  "🚶‍♂️",
  "📚",
  "🧘‍♀️",
  "🥗",
  "😴",
  "💪",
  "🎯",
  "🌱",
  "☕",
  "🏃‍♂️",
  "🎵",
  "🧠",
  "❤️",
  "🎨",
  "📝",
  "💰",
  "🎮",
  "🎤",
  "🎧",
  "🥃",
  "🚿",
  "🛍️",
  "🛏️",
  "🚭",
  "🦷",
  "🧹",
  "📅",
  "💻",
];

export default function SelectHabitEmoji({
  setSelectedEmoji,
  selectedEmoji,
}: Props) {
  return (
    <div className="space-y-4">
      <Label
        text="Select emoji:"
        htmlFor="select-emoji"
        fromColor="green-500"
        toColor="emerald-500"
      />
      <div className="grid  grid-cols-10 sm:grid-cols-5  gap-3">
        {emojis.map((emoji) => (
          <button
            key={emoji}
            type="button"
            onClick={() => setSelectedEmoji(emoji)}
            className={`w-12 h-12 rounded-xl text-xl transition-all duration-200 border-2 ${
              selectedEmoji === emoji
                ? "border-emerald-500 bg-emerald-50 scale-110"
                : "border-gray-200 bg-white/80 hover:border-emerald-300 hover:scale-125"
            }`}
          >
            {emoji}
          </button>
        ))}
      </div>
    </div>
  );
}
