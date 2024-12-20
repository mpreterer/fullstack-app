import { createSlice } from "@reduxjs/toolkit";
import { CounterSchema } from "../types/counterSchema";

const initialState: CounterSchema = {
  value: 0,
};

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    incr(state) {
      state.value++;
    },
    decr(state) {
      state.value--;
    },
  },
});

export const { incr, decr } = counterSlice.actions;
export default counterSlice.reducer;
