//#region Global Imports
import App, { Container, DefaultAppIProps } from 'next/app';
import * as React from 'react';

import withRedux from 'next-redux-wrapper';
import { Provider } from 'react-redux';
//#endregion Global Imports

//#region Local Imports
import store from '@Redux/store';
//#endregion Local Imports

//#region Interface Imports
import { IApp } from '@Interfaces';
//#endregion Interface Imports

class MyApp extends App<IApp.IProps> {
	public static async getInitialProps(props: any): Promise<DefaultAppIProps> {
	let pageProps = {};

	if (props.Component.getInitialProps) {
		pageProps = await props.Component.getInitialProps(props.ctx);
	}

	return { pageProps };
  }

  public render(): JSX.Element {
	const { Component, pageProps, store: propStore } = this.props;

	return (
		<Container>
		<Provider store={propStore}>
			<Component {...pageProps} />
		</Provider>
		</Container>
	);
  }
}

export default withRedux(store)(MyApp);
