import { useEffect, useRef, useState } from "react";

const Time = () => {
  const [data, setDate] = useState(new Date());
  const intervalRef = useRef(null);

  const tick = () => {
    setDate(new Date());
  };

  useEffect(() => {
    intervalRef.current = setInterval(tick, 1000);

    return () => {
      clearInterval(intervalRef.current);
    };
  }, []);

  return (
    <div>
      <p>Time: {data.toLocaleTimeString()}</p>
      <p>
        <button
          type="button"
          onClick={() => clearInterval(intervalRef.current)}
        >
          Cleanup
        </button>
      </p>
    </div>
  );
};

export default Time;
