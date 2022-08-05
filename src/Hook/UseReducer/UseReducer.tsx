import * as React from 'react';
import Click from '../../Hook/UseReducer/Click';
import { AppContext } from './AppContext';

export default function UseReducer() {
  const [state, dispatch] = React.useReducer(reducer, 0);

  function reducer(oldState, action) {
    if (action === 'up') {
      return oldState + 1;
    }
  }

  return (
    <AppContext.Provider value={dispatch}>
      <Click />
      <br />
      {state}
    </AppContext.Provider>
  );
}
