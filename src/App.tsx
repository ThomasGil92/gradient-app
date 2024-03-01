import "./App.css";
import Buttons from "./components/Buttons/Index";
import Gradient from "./components/Gradient";
import {useSelector}from 'react-redux'

function App() {
const nbColors=useSelector((state)=>state.color.nbColors)
  return (
    <div className='app'>
      <div className='nbColors'>{nbColors} couleurs générées</div>
      <Gradient />
      <Buttons />
    </div>
  );
}

export default App;
