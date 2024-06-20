import { configureStore } from "@reduxjs/toolkit";
import newsReducer from "../features/newsSlice";

import { baseApi } from "../services/API";
// global storage
export const store = configureStore({
  reducer: {
    [baseApi.reducerPath]: baseApi.reducer,
    news: newsReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(baseApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
