import { Text } from "./Text";

interface Props {
  text: string;
  emoji: string;
  color: string;
  size?: "sm" | "md" | "lg";
  emojiWidth?: string;
}
const HabitBadge = ({ text, emoji, color, size = "md" }: Props) => {
  const sizeMap = {
    sm: "w-8 h-8",
    md: "w-10 h-10",
    lg: "w-12 h-12",
  };
  return (
    <div className="flex items-center">
      <div>
        <span
          className={`${sizeMap[size]} bg-gradient-to-r ${color} rounded-xl flex items-center justify-center mr-4 shadow-lg`}
        >
          {emoji}
        </span>
      </div>

      <Text variant="T1" htmlFor="habit-example" className="text-wrap">
        {text}
      </Text>
      <span className="font-medium"></span>
    </div>
  );
};

export default HabitBadge;
