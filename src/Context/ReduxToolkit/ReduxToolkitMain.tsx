// src/App.js

import * as React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addNumber, minusNumber } from './CountSlice';
import { multiply } from './TodoSlice';

const ReduxTooolkitMain = () => {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter.number);
  const todos = useSelector((state) => state.todos.todos);

  const incrementHandler = () => {
    dispatch(addNumber({ number: 2 }));
  };

  const decreaseHandler = () => {
    dispatch(minusNumber({ number: -2 }));
  };

  const multiplyHandler = () => {
    dispatch(multiply({ todos: 3 }));
  };

  // // Store에 있는 counter 모듈 state 조회하기
  // const counter = useSelector((state) => state.counter.number);

  return (
    <div>
      {counter}
      {todos}
      <br />
      <button onClick={incrementHandler}>Increment</button>
      <button onClick={decreaseHandler}>Decrement</button>
      <button onClick={multiplyHandler}>Multiply</button>
    </div>
  );
};

export default ReduxTooolkitMain;
