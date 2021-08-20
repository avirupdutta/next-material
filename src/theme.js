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
