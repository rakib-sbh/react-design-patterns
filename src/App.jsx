import ClickCounter from "./components/ClickCounter";
import HoverCounter from "./components/HoverCounter";
import Counter from "./components/Counter";
import CounterWithChildren from "./components/CounterWithChildren";

const App = () => {
  return (
    <>
      <h1>Click and Hover Application</h1>

      <Counter
        render={({ count, handleCount }) => (
          <ClickCounter count={count} handleCount={handleCount} />
        )}
      />
      <Counter
        render={({ count, handleCount }) => (
          <HoverCounter count={count} handleCount={handleCount} />
        )}
      />
      <CounterWithChildren>
        {({ count, handleCount }) => (
          <ClickCounter count={count} handleCount={handleCount} />
        )}
      </CounterWithChildren>

      <CounterWithChildren>
        {({ count, handleCount }) => (
          <HoverCounter count={count} handleCount={handleCount} />
        )}
      </CounterWithChildren>
    </>
  );
};

export default App;
