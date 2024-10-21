import { useState } from "react";

const Counter = ({ render }) => {
  const [count, setCount] = useState(0);
  const handleCount = () => {
    setCount((prevCount) => prevCount + 1);
  };

  return render({ count, handleCount });
};

export default Counter;
