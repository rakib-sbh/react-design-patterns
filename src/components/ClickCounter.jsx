const ClickCounter = ({ count, handleCount }) => {
  return <button onClick={handleCount}>Clicked for {count} times</button>;
};

export default ClickCounter;
