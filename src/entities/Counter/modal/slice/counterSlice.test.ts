import counterSlice, { decr, incr } from "./counterSlice";
import { CounterSchema } from "../types/counterSchema";

describe("counterSlice", () => {
  test("decrement", () => {
    const state: CounterSchema = {
      value: 0,
    };

    expect(counterSlice(state, decr())).toEqual({ value: -1 });
  });
  test("increment", () => {
    const state: CounterSchema = {
      value: 0,
    };

    expect(counterSlice(state, incr())).toEqual({ value: 1 });
  });
});
