import "./App.css";
import Buttons from "./components/Buttons/Index";
import Gradient from "./components/Gradient";

function App() {
  return (
    <div className='app'>
      <div className='nbColors'>0 couleurs générées</div>
      <Gradient />
      <Buttons />
    </div>
  );
}

export default App;
