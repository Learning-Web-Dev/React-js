import { configureStore } from "@reduxjs/toolkit";
import contentSlice from "./slice/contentSlice";
import colorSlice from "./slice/backgroundColorSlice";

export const store = configureStore({
  reducer: {
    content: contentSlice,
    changeColor: colorSlice,
  },
});
