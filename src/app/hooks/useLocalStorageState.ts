import { useState, useEffect } from "react";

export const useLocalStorageState = <T>(
  key: string,
  initialValue: T
): [T, (val: T) => void] => {
  const [state, setState] = useState<T>(initialValue);

  useEffect(() => {
    const saved = localStorage.getItem(key);
    if (saved) setState(JSON.parse(saved));
  }, [key]);

  const setAndSave = (val: T) => {
    setState(val);
    localStorage.setItem(key, JSON.stringify(val));
  };

  return [state, setAndSave];
};
