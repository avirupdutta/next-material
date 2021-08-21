import { createTheme } from '@material-ui/core/styles';

export const sharedThemePalette = {
    primary: {
        main: '#F4181C',
    },
    secondary: {
        main: '#ffffff',
    },
    error: {
        main: '#DB524E',
        light: '#F2CACA'
    },
    background: {
        default: '#FFFFFF',
    },
    typography: {
        fontFamily: [
            '-apple-system',
            'BlinkMacSystemFont',
            '"Open Sans"',
            '"Segoe UI"',
            'Roboto',
            '"Helvetica Neue"',
            'Arial',
            'sans-serif',
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"',
        ].join(','),
    },
}

// Create a theme instance.
export const lightTheme = createTheme({
    palette: {
        ...sharedThemePalette
    },
});

export const darkTheme = createTheme({
    palette: {
        ...sharedThemePalette,
        type: 'dark',
        background: {
            paper: '#110000',
            default: '#110000'
        }
    },
});
