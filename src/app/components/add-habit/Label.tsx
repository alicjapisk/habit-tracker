import { Text } from "../Text";

interface Props {
  fromColor: string;
  toColor: string;
  text: string;
  htmlFor: string;
}
export default function Label({ fromColor, toColor, text, htmlFor }: Props) {
  return (
    <div className="flex items-center">
      <span
        className={`w-3 h-3 bg-gradient-to-r from-${fromColor} to-${toColor} rounded-full mr-2`}
      ></span>
      <Text variant="A1" className="font-semibold" htmlFor={htmlFor}>
        {text}
      </Text>
    </div>
  );
}
