import { CssBaseline, Paper, Switch, ThemeProvider } from '@material-ui/core'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { darkModeToggleDispatcher } from '../../redux/dispatchers/themeDispatchers'
import { darkTheme, lightTheme } from '../../theme'
import SplashScreen from './SplashScreen'

const AppLayout = ({ Component, pageProps }) => {
    const dispatch = useDispatch()
    const darkMode = useSelector(state => state.theme)
    const [appIsReady, setAppIsReady] = useState(false)

    const handleMakeAppReady = () => setAppIsReady(true)
    const handleDarkModeToggle = () => {
        dispatch(darkModeToggleDispatcher(!darkMode.isDarkMode))
    }

    return (
        <ThemeProvider theme={darkMode.isDarkMode ? darkTheme : lightTheme}>
            {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
            <CssBaseline />
            {
                appIsReady ? (
                    <Paper square elevation={0}>
                        <Switch onChange={handleDarkModeToggle} checked={darkMode.isDarkMode} />
                        <Component {...pageProps} />
                    </Paper>
                ) : <SplashScreen handleMakeAppReady={handleMakeAppReady} />
            }
        </ThemeProvider>
    )
}

export default AppLayout
