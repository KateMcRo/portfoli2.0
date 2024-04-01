import "./App.css";
import React, { useState } from "react";
import View from "./components/view/View";

function App() {
  const [view, setView] = useState("about");
  return (
    <div className="App">
      <View view={view} setView={setView} />
    </div>
  );
}

export default App;
