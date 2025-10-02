import { Text } from "./Text";

interface Props {
  text: string;
  emoji: string;
}
const SubHeader = ({ text, emoji }: Props) => {
  return (
    <div className="flex flex-col items-center pb-[16px] sm:pt-[16px]">
      <Text variant="H2" htmlFor="add-habit-header">
        {emoji} {text} {emoji}
      </Text>
    </div>
  );
};

export default SubHeader;
