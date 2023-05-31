import { useState } from "react";

export const useCounter = (initialValue = 1) => {
  const [counter, setCounter] = useState(initialValue);

  const increment = (value = 1) => {
    console.log(value);
    const actualValue = parseInt(counter)+ (value);
    setCounter(actualValue);
  };

  const decrement = (value = 1) => {
    if (counter - value <= 0) {
      setCounter(1);
    } else {
      setCounter(counter - value);
    }
  };
  const searchId = (value) => {
    setCounter(value);
  };

  const reset = () => {
    setCounter(initialValue);
  };

  return {
    counter,
    increment,
    decrement,
    reset,
    searchId,
    setCounter,
  };
};
