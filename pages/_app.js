import { useRouter } from 'next/dist/client/router';
import NProgress from 'nprogress';
import PropTypes from 'prop-types';
import React from 'react';
import { Provider } from 'react-redux';
import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';
import AppLayout from '../src/components/layout/AppLayout';
import Page from '../src/components/layout/Page';
import { useStore } from '../src/redux';

export default function MyApp({ Component, pageProps }) {
	const router = useRouter()
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

	React.useEffect(() => {
		const handleStart = (url) => {
			console.log(`Loading: ${url}`)
			NProgress.start()
		}
		const handleStop = () => {
			NProgress.done()
		}

		router.events.on('routeChangeStart', handleStart)
		router.events.on('routeChangeComplete', handleStop)
		router.events.on('routeChangeError', handleStop)

		return () => {
			router.events.off('routeChangeStart', handleStart)
			router.events.off('routeChangeComplete', handleStop)
			router.events.off('routeChangeError', handleStop)
		}
	}, [router])

	return (
		<Provider store={store}>
			<PersistGate
				loading={null}
				persistor={persistor}
			>
				<Page
					title='Default Title'
					description='My Next.js default description'
				>
					<AppLayout Component={Component} pageProps={pageProps} />
				</Page>
			</PersistGate>
		</Provider>
	);
}

MyApp.propTypes = {
	Component: PropTypes.elementType.isRequired,
	pageProps: PropTypes.object.isRequired,
};