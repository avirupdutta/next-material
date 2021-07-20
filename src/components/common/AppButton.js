import { Button, makeStyles } from '@material-ui/core'
import React from 'react'

const useStyles = makeStyles(theme => ({
    root: {
        borderRadius: '20rem'
    }
}))

const AppButton = ({
    children,
    variant = 'contained',
    color = 'primary'
}) => {
    const classes = useStyles()
    return (
        <Button className={classes.root} variant={variant} color={color}>{children}</Button>
    )
}

export default AppButton
