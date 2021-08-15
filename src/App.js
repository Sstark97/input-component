import "./App.css";
import { Input } from "./components/Input";
import React from "react";

function App() {
  return (
    <div className="App">
      <Input text="fsdf" startIcon="battery_20" helperText="911" row={3} />
    </div>
  );
}

export default App;
