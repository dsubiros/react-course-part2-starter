import useCounter from "./useCounter";

const Counter = () => {
  const [value, dispatch] = useCounter();

  return (
    <div>
      Counter ({value})
      <button
        // onClick={() => setValue(value + 1)}
        onClick={() => dispatch({type: 'INCREMENT'})}
        className="btn btn-primary mx-1"
      >
        Increment
      </button>
      <button onClick={() => dispatch({type: 'RESET'})} className="btn btn-primary mx-1">
        Reset
      </button>
    </div>
  );
};

export default Counter;
