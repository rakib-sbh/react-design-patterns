const HoverCounter = ({ count, handleCount, theme, switchTheme }) => {
  return (
    <div>
      <h1
        onMouseOver={handleCount}
        style={
          theme === "dark"
            ? { backgroundColor: "black", color: "white" }
            : { backgroundColor: "white", color: "black" }
        }
      >
        Hovered for {count} times
      </h1>
      <button onClick={switchTheme}>Change Theme</button>
    </div>
  );
};

export default HoverCounter;
