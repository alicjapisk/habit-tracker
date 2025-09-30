interface Props {
  selectedColor: string;
  habitName: string;
  selectedEmoji: string;
}

export default function HabitPreview({
  selectedColor,
  habitName,
  selectedEmoji,
}: Props) {
  return (
    <div className="bg-white/50 rounded-2xl p-4 border border-gray-200">
      <p className="text-sm text-gray-600 mb-3">Preview:</p>
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
        <div className={`h-2 bg-gradient-to-r ${selectedColor}`}></div>
        <div className="p-4 flex items-center">
          <div
            className={`w-10 h-10 bg-gradient-to-r ${selectedColor} rounded-xl flex items-center justify-center mr-4 text-white text-lg shadow-lg`}
          >
            {selectedEmoji}
          </div>
          <span className="text-gray-800 font-medium">
            {habitName || "Habit name"}
          </span>
        </div>
      </div>
    </div>
  );
}
