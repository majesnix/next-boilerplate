//#region Global Imports
import { Props } from 'react';
//#endregion Global Imports

declare module IApp {
  export interface IProps extends Props<{}> {
	tore: any;
  }

  export interface IState {}
}
