import withCounter from "../hocs/withCounter";

const ClickCounter = ({ count, handleCount }) => {
  return <button onClick={handleCount}>Clicked for {count} times</button>;
};

export default withCounter(ClickCounter);
