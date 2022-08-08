import * as React from 'react';
import { createStore } from 'redux';

const couterReducer = (state = { count: 0 }, action) => {
  if (action.type === 'increment') {
    return {
      count: state.count + 1,
    };
  }

  if (action.type === 'decrement') {
    return {
      count: state.count - 1,
    };
  }

  return state;
};

const store = createStore(couterReducer);

export default store;
