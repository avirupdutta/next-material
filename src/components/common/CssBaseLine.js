import { CssBaseline as MUICssBaseline, makeStyles } from '@material-ui/core';
import React from 'react';
import { fadeColor, lightenColor } from '../../utils/styles';



const useStyles = makeStyles((theme) => ({
    '@global': {
        '*::-webkit-scrollbar': {
            width: "7px",
            height: "7px",
        },
        '*::-webkit-scrollbar-button': {
            width: "0",
            height: "0",
        },
        '*::-webkit-scrollbar-track': {
            background: lightenColor(theme.palette.primary.main, 0.45),
            border: "0px none #ffffff",
            borderRadius: "0",
            '&:hover,&:active': {
                background: lightenColor(theme.palette.primary.main, 0.45),
            }
        },
        '*::-webkit-scrollbar-track-piece': {

        },
        '*::-webkit-scrollbar-thumb': {
            background: lightenColor(theme.palette.primary.main, 0.15),
            border: "0px none #ffffff",
            borderRadius: "0",
            '&:hover,&:active': {
                background: lightenColor(theme.palette.primary.main, 0),
            }
        },
        '*::-webkit-scrollbar-corner': {
            background: "transparent",
        },
        small: {
            color: "red",
        },
        a: {
            textDecoration: 'none'
        },
        InputBase: {
            color: theme.palette.grey[400],
        },

        '.MuiTouchRipple-child': {
            background: `linear-gradient(45deg, ${theme.palette.primary.main} ,${theme.palette.secondary.main})`,
            opacity: "1 !important",
        },

        '.MuiTouchRipple-root': {
            opacity: "1 !important",
        },

        ".MuiTabs-indicator": {
            background: `linear-gradient(45deg, ${theme.palette.primary.main} 20% ,${theme.palette.secondary.main} 80%)`,
        },

        ".MuiListItem-root.Mui-selected, .MuiListItem-root.Mui-selected:hover": {
            background: `linear-gradient(90deg,${fadeColor(theme.palette.primary.main, 0.6)}, ${fadeColor(theme.palette.secondary.main, 0.4)})`
        },

        ".MuiFormControlLabel-root": {
            color: theme.palette.grey[400],
        },
        ".formGridMarginLeft": {
            marginLeft: theme.spacing(1.5),
        },
        '.sentry-error-embed-wrapper': {
            zIndex: '999999999 !important'
        }
    },
}));


const CssBaseline = ({ ascent = "primary", className, children, ...props }) => {

    const classes = useStyles({ ascent });

    return (
        <MUICssBaseline classes={classes} />
    );
};

CssBaseline.propTypes = {

};

export default CssBaseline;