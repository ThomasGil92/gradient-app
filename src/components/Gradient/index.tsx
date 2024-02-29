const Gradient = () => {
  return (
    <>
      <div className='buttons group'>
        <button className='button' id='randFirst'>
          Random First
        </button>
        <button className='button' id='randAll'>
          Random All
        </button>
        <button className='button' id='randLast'>
          Random Last
        </button>
      </div>

      <div className='colors'>
        <span style={{ color: "red" }}>Red</span>
        <span style={{ color: "blue" }}>Blue</span>
      </div>

      <div
        className='gradient'
        style={{ background: `linear-gradient(90deg,red,blue)` }}
      ></div>
    </>
  );
};
export default Gradient;
