export interface Habit {
  id: string;
  name: string;
  emoji: string;
  color: string;
  createdAt: string;
}

export interface HabitCompletion {
  habitId: string;
  date: string;
  completed: boolean;
}

export type View = "dashboard" | "add-habit" | "history";
