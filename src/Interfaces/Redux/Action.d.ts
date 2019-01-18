//#region Global Imports
import { Props } from "react";
import { Action as ReduxAction } from "redux";
//#endregion Global Imports

//#region Interface Imports
import { IHomePage } from "@Interfaces";
//#endregion Interface Imports

export interface IAction<T> extends ReduxAction {
  payload?: T;
}
