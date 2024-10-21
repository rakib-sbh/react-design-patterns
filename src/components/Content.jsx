import Counter from "./Counter";
import HoverCounter from "./HoverCounter";
// import ThemeContext from "../contexts/CustomThemeContext";
import ThemeContext from "../contexts/ThemeContext";

const Content = () => {
  return (
    <>
      <h1>This is a content</h1>
      <Counter>
        {({ count, handleCount }) => (
          <ThemeContext.Consumer>
            {({ theme }) => (
              <HoverCounter
                count={count}
                handleCount={handleCount}
                theme={theme}
              />
            )}
          </ThemeContext.Consumer>
        )}
      </Counter>
    </>
  );
};

export default Content;
