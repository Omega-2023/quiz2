import { createReducer } from "@reduxjs/toolkit";
const initialTime = 8100;
const initialState = {
  currentTime: initialTime,
};

export const TimeReducer = createReducer(initialState, {
  timeOut: (state) => {
    state.currentTime = 0;
  },
  startOver: (state) => {
    state.currentTime = initialTime;
  },
});
