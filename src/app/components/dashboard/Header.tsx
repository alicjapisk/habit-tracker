import { Text } from "../Text";

const Header = () => {
  return (
    <div className="flex flex-col sm:items-center ">
      <Text
        variant="H1"
        className="bg-white rounded-full pl-[70px] pr-[15px]  shadow-md sm:px-[20px] sm:text-center"
      >
        My habits for today
      </Text>
      <Text
        variant="A1"
        className="ml-[200px] sm:ml-0 p-[15px] bg-white rounded-full shadow-md sm:px-[20px] sm:text-center"
      >
        Build better habits, build a better life.
      </Text>
    </div>
  );
};

export default Header;
