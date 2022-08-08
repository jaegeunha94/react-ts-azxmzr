// src/App.js

import * as React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addNumber, minusNumber } from './CountSlice';
import { multiply } from './TodoSlice';
import { loadBucket } from './BucketSlice';

const ReduxTooolkitMain = () => {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter.number);
  const todos = useSelector((state) => state.todos.todos);
  const bucket_list = useSelector((state) => state.bucket.list);
  const incrementHandler = () => {
    dispatch(addNumber({ number: 2 }));
  };

  const decreaseHandler = () => {
    dispatch(minusNumber({ number: -2 }));
  };

  const multiplyHandler = () => {
    dispatch(multiply({ todos: 3 }));
  };

  React.useEffect(() => {
    // 서버에서 데이터를 불러오는 createAsyncThunk 호출
    dispatch(loadBucket());
  }, []);

  // // Store에 있는 counter 모듈 state 조회하기
  // const counter = useSelector((state) => state.counter.number);

  return (
    <div>
      {counter}
      {todos}
      {bucket_list}
      <br />
      <button onClick={incrementHandler}>Increment</button>
      <button onClick={decreaseHandler}>Decrement</button>
      <button onClick={multiplyHandler}>Multiply</button>
    </div>
  );
};

export default ReduxTooolkitMain;
