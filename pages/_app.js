import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/core/styles';
import Head from 'next/head';
import PropTypes from 'prop-types';
import React from 'react';
import { Provider } from 'react-redux';
import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';
import { useStore } from '../src/redux';
import theme from '../src/theme';


export default function MyApp({ Component, pageProps }) {
	const store = useStore(pageProps.initialReduxState)
	const persistor = persistStore(store, {}, function () {
		persistor.persist()
	})

	React.useEffect(() => {
		// Remove the server-side injected CSS.
		const jssStyles = document.querySelector('#jss-server-side');
		if (jssStyles) {
			jssStyles.parentElement.removeChild(jssStyles);
		}
	}, []);

	return (
		<Provider store={store}>
			<PersistGate loading={<div>loading</div>} persistor={persistor}>
				<Head>
					<title>My page</title>
					<meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
				</Head>
				<ThemeProvider theme={theme}>
					{/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
					<CssBaseline />
					<Component {...pageProps} />
				</ThemeProvider>
			</PersistGate>
		</Provider>
	);
}

MyApp.propTypes = {
	Component: PropTypes.elementType.isRequired,
	pageProps: PropTypes.object.isRequired,
};