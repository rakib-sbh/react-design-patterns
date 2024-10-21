import { useState } from "react";
import ClickCounter from "./components/ClickCounter";
import Counter from "./components/Counter";
import Section from "./components/Section";

// import ThemeContext from "./contexts/CustomThemeContext";
import ThemeContext from "./contexts/ThemeContext";

const App = () => {
  const [theme, setTheme] = useState("dark");

  const switchTheme = () => {
    setTheme((prevState) => (prevState === "dark" ? "light" : "dark"));
  };
  return (
    <>
      <h1>Click and Hover Application</h1>

      <Counter>
        {({ count, handleCount }) => (
          <ClickCounter count={count} handleCount={handleCount} />
        )}
      </Counter>
      <ThemeContext.Provider value={{ theme, switchTheme }}>
        <Section />
      </ThemeContext.Provider>
    </>
  );
};

export default App;
