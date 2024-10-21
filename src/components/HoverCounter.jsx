const HoverCounter = ({ count, handleCount, theme }) => {
  const style =
    theme === "dark" ? { backgroundColor: "black", color: "white" } : {};
  return (
    <h1 onMouseOver={handleCount} style={style}>
      Hovered for {count} times
    </h1>
  );
};

export default HoverCounter;
