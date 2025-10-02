import { useEffect, useState } from "react";
import { Text } from "../Text";

interface Props {
  progress: number;
}

const CongratulationsMessage = ({ progress }: Props) => {
  const [showCongrats, setShowCongrats] = useState(false);
  const [animation, setAnimation] = useState("");

  useEffect(() => {
    if (progress === 100) {
      setShowCongrats(true);
      setAnimation("animate-bounce");
      const timer = setTimeout(() => setAnimation(""), 3000);
      return () => clearTimeout(timer);
    } else {
      setShowCongrats(false);
    }
  }, [progress]);

  return (
    showCongrats && (
      <div className={animation}>
        <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-6 py-3 rounded-full shadow-xl backdrop-blur-sm">
          <div className="flex items-center space-x-2">
            <span>🎉</span>
            <Text variant="A1" className="text-white">
              Congratulations! 100% today!
            </Text>
            <span>🎉</span>
          </div>
        </div>
      </div>
    )
  );
};

export default CongratulationsMessage;
