import { configureStore } from '@reduxjs/toolkit';

import counter from './CountSlice';
import todos from './TodoSlice';

const store = configureStore({
  reducer: { counter: counter, todos: todos },
});

export default store;
