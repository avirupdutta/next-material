import { createMuiTheme } from '@material-ui/core/styles';

const sharedPalette = {
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
export const lightTheme = createMuiTheme({
    palette: {
        ...sharedPalette
    },
});

export const darkTheme = createMuiTheme({
    palette: {
        ...sharedPalette,
        type: 'dark',
        background: {
            paper: '#110000',
            default: '#110000'
        }
    },
});
