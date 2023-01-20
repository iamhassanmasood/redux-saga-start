import React from "react";
import { PropTypes } from "prop-types";

const Counter = ({ value, onIncrement, onDecrement, onIncrementAsync }) => (
  <div>
    <button onClick={onIncrement}>Increment</button>
    <button onClick={onDecrement}>Decrement</button>
    <button onClick={onIncrementAsync}>Increment Async 1 sec delay</button>
    <hr />
    <div>Count is: {value} times</div>
  </div>
);

Counter.propTypes = {
  value: PropTypes.number.isRequired,
  onIncrement: PropTypes.func.isRequired,
  onDecrement: PropTypes.func.isRequired,
  onIncrementAsync: PropTypes.func.isRequired,
};

export default Counter;
