import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Movie from "./Movie/Movie";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="bg-neutral-900">
      <Movie />
    </div>
  );
}

export default App;
