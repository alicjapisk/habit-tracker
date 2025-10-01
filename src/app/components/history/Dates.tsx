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
    <div key={date.toISOString()} className="text-center py-3">
      <div className="text-sm font-medium text-gray-800">
        {formatDate(date)}
      </div>
      <div className="text-xs text-gray-600">{formatDayName(date)}</div>
    </div>
  ));
};

export default Dates;
