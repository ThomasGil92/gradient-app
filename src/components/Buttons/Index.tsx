import { useDispatch } from "react-redux";
import { changeDirection } from "../../store/actions/gradient";
const Buttons = () => {
  const dispatch = useDispatch();
  return (
    <div className='buttons group'>
      <button
        className='button'
        id='toLeft'
        onClick={() => dispatch(changeDirection("270deg"))}
      >
        to left
      </button>
      <button
        className='button'
        id='toRight'
        onClick={() => dispatch(changeDirection("90deg"))}
      >
        to right
      </button>
      <button
        className='button'
        id='to45'
        onClick={() => dispatch(changeDirection("45deg"))}
      >
        to 45°
      </button>
      <button
        className='button'
        
        onClick={() => dispatch(changeDirection("10deg"))}
      >
        to 10°
      </button>
    </div>
  );
};
export default Buttons;
