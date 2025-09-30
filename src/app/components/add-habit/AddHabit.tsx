import { useState } from "react";
import { useHabits } from "../../hooks/useHabits";

import PopularHabits from "./PopularHabits";
import SelectHabitName from "./SelectHabitName";
import SelectHabitEmoji from "./SelectHabitEmoji";
import SelectHabitColor from "./SelectHabitColor";
import HabitPreview from "./HabitPreview";
import BackButton from "../BackButton";
import AddHabitButton from "./AddHabitButton";
import { Text } from "../Text";

interface AddHabitProps {
  onBack: () => void;
}

export const AddHabit = ({ onBack }: AddHabitProps) => {
  const [habitName, setHabitName] = useState("");
  const { addHabit } = useHabits();
  const [selectedEmoji, setSelectedEmoji] = useState("✨");
  const [selectedColor, setSelectedColor] = useState(
    "from-purple-500 to-pink-500"
  );

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (habitName.trim()) {
      addHabit(habitName.trim());
      setHabitName("");
      onBack();
    }
  };

  return (
    <div className={`min-h-screen  p-4`}>
      <BackButton onClick={onBack} text="Back to Habits" />
      <div className="flex flex-col items-center pb-[16px]">
        <Text variant="H2" htmlFor="add-habit-header">
          ✨ Create new habits ✨
        </Text>
      </div>
      <form onSubmit={handleSubmit} className="space-y-6">
        <SelectHabitName habitName={habitName} setHabitName={setHabitName} />
        <SelectHabitEmoji
          selectedEmoji={selectedEmoji}
          setSelectedEmoji={setSelectedEmoji}
        />
        <SelectHabitColor
          selectedColor={selectedColor}
          setSelectedColor={setSelectedColor}
        />
        <HabitPreview
          habitName={habitName}
          selectedColor={selectedColor}
          selectedEmoji={selectedEmoji}
        />
        <AddHabitButton
          selectedColor={selectedColor}
          habitName={habitName}
          selectedEmoji={selectedEmoji}
        />
      </form>
      <PopularHabits
        setHabitName={setHabitName}
        setSelectedColor={setSelectedColor}
        setSelectedEmoji={setSelectedEmoji}
      />
    </div>
  );
};
