import Head from 'next/head';
import PropTypes from 'prop-types';
import React from 'react';
import { Provider } from 'react-redux';
import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';
import AppLayout from '../src/components/layout/AppLayout';
import { useStore } from '../src/redux';


export default function MyApp({ Component, pageProps }) {
	const [gateLifted, setGateLifted] = React.useState(false)
	const store = useStore(pageProps.initialReduxState)
	const persistor = persistStore(store, {}, function () {
		persistor.persist()
	})

	const onBeforeLift = () => {
		// Take an action before the gate lifts
		setTimeout(() => {
			setGateLifted(true)
		}, 2000);
	}

	React.useEffect(() => {
		// Remove the server-side injected CSS.
		const jssStyles = document.querySelector('#jss-server-side');
		if (jssStyles) {
			jssStyles.parentElement.removeChild(jssStyles);
		}
	}, []);

	return (
		<Provider store={store}>
			<PersistGate
				onBeforeLift={onBeforeLift}
				persistor={persistor}
			>
				<Head>
					<title>My page</title>
					<meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
				</Head>
				<AppLayout Component={Component} pageProps={pageProps} gateLifted={gateLifted} />
			</PersistGate>
		</Provider>
	);
}

MyApp.propTypes = {
	Component: PropTypes.elementType.isRequired,
	pageProps: PropTypes.object.isRequired,
};