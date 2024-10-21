import withCounter from "../hocs/withCounter";

const HoverCounter = ({ count, handleCount }) => {
  return <h1 onMouseOver={handleCount}>Hovered for {count} times</h1>;
};

export default withCounter(HoverCounter);
