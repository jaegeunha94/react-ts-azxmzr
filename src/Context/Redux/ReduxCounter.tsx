import * as React from 'react';
import { useSelector, useDispatch } from 'react-redux';

const ReduxCounter = () => {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.count);
  const incrementHandler = () => {
    dispatch({ type: 'increment' });
  };

  const decrementHandler = () => {
    dispatch({ type: 'decrement' });
  };

  return (
    <div>
      {counter}
      <br />
      <button onClick={incrementHandler}>Increment</button>
      <button onClick={decrementHandler}>Decrement</button>)
    </div>
  );
};

export default ReduxCounter;
