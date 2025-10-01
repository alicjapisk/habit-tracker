import { Trash } from "@deemlol/next-icons";

interface Props {
  handleDeleteHabit: (habitId: string, habitName: string) => void;
  habitId: string;
  habitName: string;
}

const DeleteHabit = ({ handleDeleteHabit, habitId, habitName }: Props) => {
  return (
    <button
      onClick={() => handleDeleteHabit(habitId, habitName)}
      className="h-8 w-8 flex items-center justify-center text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-lg transition-all duration-200 flex-shrink-0 ml-2"
    >
      <Trash className="h-4 w-4" />
    </button>
  );
};

export default DeleteHabit;
