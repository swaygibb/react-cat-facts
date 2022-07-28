import { FC, useState } from "react";
import "./App.css";
import CatFact from "./components/CatFact";
import RandomPerson from "./components/RandomPerson";

interface AppProps {}

const App: FC<AppProps> = (props) => {
  const [showCatFacts, setShowCatFacts] = useState(true);

  const toggleCatFacts = () => {
    setShowCatFacts(!showCatFacts);
  };

  return (
    <div className="App">
      <header className="App-header">
        {showCatFacts ? (
          <>
            <h1>Cat Facts</h1>

            <CatFact count={1} />
            <CatFact count={2} />
            <CatFact count={3} />
            <button onClick={toggleCatFacts}>Random People</button>
          </>
        ) : (
          <>
            <h1>Random People</h1>

            <RandomPerson count={1} />
            <RandomPerson count={2} />
            <RandomPerson count={3} />
            <button onClick={toggleCatFacts}>Cat Facts</button>
          </>
        )}
      </header>
    </div>
  );
};

export default App;
