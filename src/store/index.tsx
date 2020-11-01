import { configureStore, createAction, createReducer } from "@reduxjs/toolkit";

enum Pig {
  INCREMENT,
  DECREMENT,
}
createAction<number>("");
const increment = createAction<Pig>(Pig.INCREMENT.toString());
const decrement = createAction(Pig.DECREMENT.toString());

const pigReducer = createReducer(
  { capita: 0 },
  {
    [increment.toString()]: (state) => ({ ...state, capita: state.capita - 1 }),
    [decrement.toString()]: (state) => ({ ...state, capita: state.capita + 1 }),
  }
);
const cowReducer = createReducer({ capita: 0 }, (builder) => {
  builder.addCase(Pig.DECREMENT.toString(), (state, action) => {});
});
const store = configureStore({
  reducer: {
    pig: pigReducer,
    cow: cowReducer,
  },
});

export type RootState = typeof store.getState;
