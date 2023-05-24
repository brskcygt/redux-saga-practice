import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Provider } from "react-redux";
import store from "./Components/Products/Store/slice.js";
import createSagaMiddleware from "redux-saga";
import { configureStore } from "@reduxjs/toolkit";
import saga from './Components/Products/Store/saga.js';

// console.log(store.getState());

let sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer:{
      products:productSlice.reducer
  },
  middleware:(getDefaultMiddleware)=>getDefaultMiddleware({thunk:false,serializeableCheck:false}).concat(sagaMiddleware)
});

sagaMiddleware.run(saga);


ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <App />
  </Provider>
);
