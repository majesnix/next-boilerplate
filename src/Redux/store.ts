//#region Global Imports
import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension/developmentOnly";
import thunkMiddleware from "redux-thunk";
//#endregion Global Imports

//#region Interface Imports
import Reducers from "./Reducers";
//#endregion Interface Imports

export default () =>
  createStore(
    Reducers,
    {},
    composeWithDevTools(applyMiddleware(thunkMiddleware))
  );
