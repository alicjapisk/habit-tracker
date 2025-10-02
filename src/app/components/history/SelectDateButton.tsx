import { Dispatch, SetStateAction } from "react";
import { Text } from "../Text";

interface Props {
  setViewDays: Dispatch<SetStateAction<number>>;
  viewDays: number;
}

const SelectDateButton = ({ setViewDays, viewDays }: Props) => {
  return (
    <div className="flex items-center justify-center space-x-2">
      <Text variant="T1" className="sm:hidden">
        Show:
      </Text>
      {[7, 14, 21, 30].map((days) => (
        <button
          key={days}
          onClick={() => setViewDays(days)}
          className={`px-3 py-1 rounded-lg transition-all duration-200 border-2 text-sm ${
            viewDays === days
              ? "border-blue-500 bg-blue-50 text-blue-700"
              : "border-gray-200 bg-white/80 hover:border-blue-300 hover:bg-blue-50 text-gray-700"
          }`}
        >
          <Text variant="T1">{days} days</Text>
        </button>
      ))}
    </div>
  );
};

export default SelectDateButton;
