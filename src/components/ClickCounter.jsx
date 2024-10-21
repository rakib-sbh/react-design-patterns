import withCounter from "../hocs/withCounter";

const ClickCounter = (props) => {
  console.log(props);
  const { count, handleCount } = props;
  return <button onClick={handleCount}>Clicked for {count} times</button>;
};

export default withCounter(ClickCounter);
