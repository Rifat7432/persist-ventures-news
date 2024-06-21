import { configureStore } from "@reduxjs/toolkit";
import newsReducer from "../features/newsSlice";
import { baseApi } from "../services/API";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "news",
  storage,
};
const persistedAuthReducer = persistReducer(persistConfig, newsReducer);
// global storage
export const store = configureStore({
  reducer: {
    [baseApi.reducerPath]: baseApi.reducer,
    news: persistedAuthReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(baseApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const persistor = persistStore(store);