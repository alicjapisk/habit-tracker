import { Dispatch, SetStateAction } from "react";
import Label from "./Label";

interface Props {
  setSelectedColor: Dispatch<SetStateAction<string>>;
  selectedColor: string;
}

const colors = [
  { name: "Purple-Pink", value: "from-purple-500 to-pink-500" },
  { name: "Blue-Cyan", value: "from-blue-500 to-cyan-500" },
  { name: "Green-Emerald", value: "from-green-500 to-emerald-500" },
  { name: "Orange-Red", value: "from-orange-500 to-red-500" },
  { name: "Indigo-Purple", value: "from-indigo-500 to-purple-500" },
  { name: "Teal-Blue", value: "from-teal-500 to-blue-500" },
  { name: "Stone-Gray", value: "from-stone-400 to-gray-600" },
  { name: "Pink-Rose", value: "from-pink-500 to-rose-500" },
  { name: "Pink-Sky", value: "from-pink-400 to-sky-500" },
  { name: "Sky-Blue", value: "from-sky-400 to-blue-600" },
  { name: "Fuchsia-Pink", value: "from-fuchsia-500 to-pink-600" },
  { name: "Rose-Red", value: "from-rose-400 to-red-600" },
  { name: "Lime-Green", value: "from-lime-400 to-green-600" },
  { name: "Emerald-Teal", value: "from-emerald-400 to-teal-600" },
  { name: "Cyan-Sky", value: "from-cyan-400 to-sky-600" },
  { name: "Yellow-Orange", value: "from-yellow-400 to-orange-500" },
  { name: "Violet-Indigo", value: "from-violet-500 to-indigo-700" },
  { name: "Slate-Zinc", value: "from-slate-500 to-zinc-700" },
  { name: "Purple-Fuchsia", value: "from-purple-600 to-fuchsia-500" },
  { name: "Teal-Cyan", value: "from-teal-400 to-cyan-500" },
];
export default function SelectHabitColor({
  setSelectedColor,
  selectedColor,
}: Props) {
  return (
    <div className="space-y-4">
      <Label
        text="Select color:"
        htmlFor="select-color"
        fromColor="blue-500"
        toColor="cyan-500"
      />
      <div className="grid grid-cols-4 gap-3">
        {colors.map((color) => (
          <button
            key={color.value}
            type="button"
            onClick={() => setSelectedColor(color.value)}
            className={`h-12 rounded-xl transition-all duration-200 border-4 bg-gradient-to-r ${
              color.value
            } ${
              selectedColor === color.value
                ? "border-cyan-500"
                : "border-gray-200 hover:border-gray-400 hover:scale-105"
            }`}
            title={color.name}
          ></button>
        ))}
      </div>
    </div>
  );
}
