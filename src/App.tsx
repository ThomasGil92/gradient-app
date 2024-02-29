import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Gradient from "./components/Gradient";

function App() {

  return (
    <div className='app'>
      <div className='nbColors'>0 couleurs générées</div>
<Gradient/>
    </div>
  );
}

export default App;
