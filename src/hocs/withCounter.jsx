import { useState } from "react";

const withCounter = (OriginalComponent) => {
  const NewComponent = (props) => {
    const [count, setCount] = useState(0);

    const handleCount = () => {
      setCount((prevCount) => prevCount + 1);
    };

    return (
      <OriginalComponent count={count} handleCount={handleCount} {...props} />
    );
  };

  return NewComponent;
};

export default withCounter;
