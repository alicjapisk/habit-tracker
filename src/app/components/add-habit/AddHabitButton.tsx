interface Props {
  habitName: string;
  selectedColor: string;
  selectedEmoji: string;
}
const AddHabitButton = ({ selectedColor, habitName, selectedEmoji }: Props) => {
  return (
    <button
      type="submit"
      className={`w-full bg-gradient-to-r ${selectedColor} hover:opacity-90 text-white px-6 py-4 rounded-2xl disabled:opacity-50 disabled:hover:scale-100 shadow-lg transform hover:scale-105 transition-all duration-200 font-medium`}
      disabled={!habitName.trim()}
    >
      {selectedEmoji} Add habit
    </button>
  );
};

export default AddHabitButton;
