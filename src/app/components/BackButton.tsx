import { ChevronLeft } from "@deemlol/next-icons";
import { Text } from "./Text";

interface Props {
  text: string;
  onClick: () => void;
}
const BackButton = ({ text, onClick }: Props) => {
  return (
    <button
      onClick={onClick}
      className="py-[10px] flex items-center gap-[15px]"
    >
      <ChevronLeft className="h-5 w-5" />
      <Text variant="H5" className="font-semibold">
        {text}
      </Text>
    </button>
  );
};

export default BackButton;
