import { configureStore, createAction, createReducer } from "@reduxjs/toolkit";

enum Pig {
  INCREMENT = "INCREMENT",
  DECREMENT = "DECREMENT",
}

const increment = createAction(Pig.INCREMENT);
const decrement = createAction(Pig.DECREMENT);

const pigReducer = createReducer(
  { capita: 0 },
  {
    [increment.toString()]: (state) => ({ ...state, capita: state.capita - 1 }),
    [decrement.toString()]: (state) => ({ ...state, capita: state.capita + 1 }),
  }
);
const cowReducer = createReducer({ capita: 0 }, {});
const store = configureStore({
  reducer: {
    pig: pigReducer,
    cow: cowReducer,
  },
});

export type RootState = typeof store.getState;
