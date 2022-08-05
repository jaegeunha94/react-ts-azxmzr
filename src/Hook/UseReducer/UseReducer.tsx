import * as React from 'react';

export default function UseReducer() {
  const [state, dispatch] = React.useReducer(reducer, 0);

  function reducer(oldState, action) {
    if (action === 'up') {
      return oldState + 1;
    }
  }

  function handleIncreseNumber() {
    dispatch('up');
  }

  return <button onClick={handleIncreseNumber}>{state}</button>;
}
