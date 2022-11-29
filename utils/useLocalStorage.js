import { useEffect, useState } from "react";

export default function useLocalStorage(key, initialValue) {
  const [value, setValue] = useState();
  useEffect(() => {
    const data = localStorage.getItem(key);
    if (data === null) {
      if (typeof initialValue === "function") {
        setValue(initialValue());
      } else {
        setValue(initialValue);
      }
    } else {
      setValue(JSON.parse(data));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [value]);
  return [value, setValue];
}
