import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import rootReducer from "./store/reducers/";
import { createStore } from "redux";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import storage from "redux-persist/lib/storage";
import { persistStore, persistReducer } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";

const persistConfig = {
    key: "root",
    storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);
const store = createStore(persistedReducer);
let persistor = persistStore(store);

ReactDOM.render(
    <Provider store={store}>
        <React.StrictMode>
            <PersistGate loading={null} persistor={persistor}>
                <App />
            </PersistGate>
            <ToastContainer position="top-center" />
        </React.StrictMode>
    </Provider>,
    document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
