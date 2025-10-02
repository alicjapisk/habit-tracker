import { Text } from "./Text";

interface Props {
  onClick: () => void;
  text?: string;
  icon: React.ElementType;
}

const ButtonPrimary = ({ onClick, text, icon: Icon }: Props) => {
  return (
    <button
      onClick={onClick}
      className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-xl inline-flex items-center gap-[10px]"
    >
      <div className="py-[5px]">
        <Icon size="20" color="white" />
      </div>
      {text && (
        <Text variant="T1" className="text-white">
          {text}
        </Text>
      )}
    </button>
  );
};

export default ButtonPrimary;
