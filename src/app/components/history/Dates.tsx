import { Text } from "../Text";

interface Props {
  dates: Date[];
}
const Dates = ({ dates }: Props) => {
  const formatDate = (date: Date) => {
    return date.getDate().toString().padStart(2, "0");
  };

  const formatDayName = (date: Date) => {
    const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
    return days[date.getDay()];
  };
  return dates.map((date) => (
    <div key={date.toISOString()} className="text-center py-3  ">
      <Text variant="S1">{formatDate(date)}</Text>
      <Text variant="S1">{formatDayName(date)}</Text>
    </div>
  ));
};

export default Dates;
