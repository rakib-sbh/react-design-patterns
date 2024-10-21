import { useState } from "react";

const Counter = ({ children }) => {
  const [count, setCount] = useState(0);

  const handleCount = () => {
    setCount((prevCount) => prevCount + 1);
  };

  return children({ count, handleCount });
};

export default Counter;
