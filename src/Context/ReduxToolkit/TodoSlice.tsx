// src/redux/modules/todosSlice.js

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  todos: 1,
};

export const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    multiply: (state, action) => {
      state.todos *= action.payload.todos;
    },
  },
});

export const { multiply } = todosSlice.actions;
export default todosSlice.reducer;
