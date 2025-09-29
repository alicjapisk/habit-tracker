import { Plus } from "@deemlol/next-icons";

interface DashboardProps {
  onNavigate: (view: "add-habit" | "history") => void;
}
export default function Dashboard({ onNavigate }: DashboardProps) {
  return (
    <div>
      <p>My habits</p>
      <button
        onClick={() => onNavigate("add-habit")}
        className="fixed bottom-6 right-6 h-14 w-14 rounded-full bg-blue-600 hover:bg-blue-700 shadow-lg flex items-center justify-center"
      >
        <Plus className="h-6 w-6 text-white" />
      </button>
    </div>
  );
}
