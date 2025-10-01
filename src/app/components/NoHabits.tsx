import ButtonPrimary from "./ButtonPrimary";
import { Text } from "./Text";
import { Plus } from "@deemlol/next-icons";

interface Props {
  onNavigate: (view: "add-habit" | "history") => void;
}
const NoHabits = ({ onNavigate }: Props) => {
  return (
    <div className="text-center py-12">
      <Text variant="A1" className="mb-4">
        You don&apos;t have any habits yet
      </Text>
      <ButtonPrimary
        text="Add your first habit"
        onClick={() => onNavigate("add-habit")}
        icon={Plus}
      />
    </div>
  );
};

export default NoHabits;
