import { Dispatch, SetStateAction } from "react";
import { ChevronLeft, ChevronRight } from "@deemlol/next-icons";
import ButtonPrimary from "../ButtonPrimary";
import SelectDateButton from "./SelectDateButton";

interface Props {
  currentDate: Date;
  setCurrentDate: Dispatch<SetStateAction<Date>>;
  viewDays: number;
  setViewDays: Dispatch<SetStateAction<number>>;
}
export default function CalendarNavigation({
  currentDate,
  setCurrentDate,
  viewDays,
  setViewDays,
}: Props) {
  const formatMonthYear = (date: Date) => {
    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];

    return `${months[date.getMonth()]} ${date.getFullYear()}`;
  };
  const navigateDate = (direction: "prev" | "next") => {
    const newDate = new Date(currentDate);
    newDate.setDate(
      currentDate.getDate() + (direction === "next" ? viewDays : -viewDays)
    );
    setCurrentDate(newDate);
  };

  const goToToday = () => {
    setCurrentDate(new Date());
  };

  return (
    <div className="mb-6 bg-white/70 backdrop-blur-sm rounded-2xl p-4 shadow-lg border border-white/20">
      <div className="flex items-center justify-between mb-4">
        <ButtonPrimary
          icon={ChevronLeft}
          onClick={() => navigateDate("prev")}
        />

        <div className="text-center">
          <h2 className="font-semibold text-gray-700">
            {formatMonthYear(currentDate)}
          </h2>
          <button
            onClick={goToToday}
            className="text-sm text-blue-600 hover:text-blue-800 transition-colors duration-200"
          >
            Go to today
          </button>
        </div>
        <ButtonPrimary
          icon={ChevronRight}
          onClick={() => navigateDate("next")}
        />
      </div>

      <SelectDateButton setViewDays={setViewDays} viewDays={viewDays} />
    </div>
  );
}
