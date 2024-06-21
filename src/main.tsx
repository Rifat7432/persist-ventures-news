import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { Provider } from "react-redux";
import { RouterProvider } from "react-router-dom";
import { persistor, store } from "./redux/store/store.ts";
import router from "./routes/routes.tsx";
import { PersistGate } from "redux-persist/integration/react";
import { Toaster } from "react-hot-toast";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <PersistGate loading={null} persistor={persistor}>
      <Provider store={store}>
        <Toaster position="bottom-right" reverseOrder={false} />
        <RouterProvider router={router}></RouterProvider>
      </Provider>
    </PersistGate>
  </React.StrictMode>
);
