import { useSelector } from "react-redux";
import "./App.css";
import Counter from "./Counter";

function App() {
  const count = useSelector((state) => state.counter.count);
  return (
    <div className="App">
      <h1>Redux made easy</h1>
      <h3>{`The Count:${count}`}</h3>
      <Counter />
    </div>
  );
}

export default App;
