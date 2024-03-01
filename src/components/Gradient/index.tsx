import { useSelector, useDispatch } from "react-redux";
import { AppState } from "../../@types";
import {
  changeAllColors,
  changeColorFirst,
  changeColorLast,
} from "../../store/actions/gradient";

const Gradient = () => {
  const dispatch = useDispatch();

  //On récupère les données du state (store) une à une pour éviter de rerender si juste une partie du state est modifiée
  //Si j'importe tout le state d'un coup, un rerender sera déclenché peu importe si j'utilise ou pas la partie modifiée.
  const firstColor = useSelector((state: AppState) => state.color.firstColor);
  const lastColor = useSelector((state: AppState) => state.color.lastColor);
  const direction = useSelector((state: AppState) => state.color.direction);

  return (
    <>
      <div className='buttons group'>
        {/* On appel dans le dispatch notre action creator */}
        <button
          className='button'
          id='randFirst'
          onClick={() => dispatch(changeColorFirst())}
        >
          Random First
        </button>
        <button
          className='button'
          id='randAll'
          onClick={() =>
            dispatch(changeAllColors())
          }
        >
          Random All
        </button>
        <button
          className='button'
          id='randLast'
          onClick={() => dispatch(changeColorLast())}
        >
          Random Last
        </button>
      </div>

      <div className='colors'>
        <span style={{ color: firstColor }}>{firstColor}</span>
        <span style={{ color: lastColor }}>{lastColor}</span>
      </div>

      <div
        className='gradient'
        style={{
          background: `linear-gradient(${direction},${firstColor},${lastColor})`,
        }}
      ></div>
    </>
  );
};
export default Gradient;
