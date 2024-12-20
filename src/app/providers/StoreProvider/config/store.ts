import { configureStore } from "@reduxjs/toolkit";
import { StateSchema } from "./StateSchema";
import counterSlice from "entities/Counter/modal/slice/counterSlice";

export function createReduxStore(initialState?: StateSchema) {
  return configureStore<StateSchema>({
    reducer: {
      counter: counterSlice,
    },
    devTools: __IS_DEV__,
    preloadedState: initialState,
  });
}
