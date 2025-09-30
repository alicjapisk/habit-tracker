import { Text } from "../Text";

const Header = () => {
  return (
    <div className="flex flex-col">
      <Text
        variant="H1"
        className="bg-white rounded-full pl-[70px] pr-[15px] shadow-md"
      >
        My habits for today
      </Text>
      <Text
        variant="A1"
        className="ml-[200px] p-[15px] bg-white rounded-full shadow-md"
      >
        Build better habits, build a better life.
      </Text>
    </div>
  );
};

export default Header;
