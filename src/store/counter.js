import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  initialState: { value: 0, showCounter: true },
  reducers: {
    increment(state) {
      state.value++;
    },

    decrement(state) {
      state.value--;
    },

    toggleCounter(state) {
      state.showCounter = !state.showCounter;
    },
  },
});

export const counterActions = counterSlice.actions;
export default counterSlice;
