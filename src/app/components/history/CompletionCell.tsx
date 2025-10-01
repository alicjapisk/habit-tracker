import { Check, X } from "@deemlol/next-icons";

interface Props {
  habitId: string;
  getHabitCompletion: (habitId: string, date?: string) => boolean;
  date: Date;
}

export const CompletionCell = ({
  date,
  getHabitCompletion,
  habitId,
}: Props) => {
  const dateString = date.toISOString().split("T")[0];
  const isCompleted = getHabitCompletion(habitId, dateString);

  return (
    <div key={dateString} className="flex justify-center py-4">
      {isCompleted ? (
        <div className="w-7 h-7 bg-gradient-to-r from-green-400 to-emerald-500 rounded-lg flex items-center justify-center shadow-md">
          <Check className="h-4 w-4 text-white" />
        </div>
      ) : (
        <div className="w-7 h-7 bg-gray-200 rounded-lg flex items-center justify-center">
          <X className="h-4 w-4 text-gray-400" />
        </div>
      )}
    </div>
  );
};
