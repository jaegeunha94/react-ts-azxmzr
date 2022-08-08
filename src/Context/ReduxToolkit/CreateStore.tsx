import { configureStore } from '@reduxjs/toolkit';

import counter from './CountSlice';
import todos from './TodoSlice';
import bucket from './BucketSlice';

const store = configureStore({
  reducer: { counter: counter, todos: todos, bucket: bucket },
});

export default store;
