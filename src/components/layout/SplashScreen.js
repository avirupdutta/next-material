import { CircularProgress, Paper } from '@material-ui/core'
import React from 'react'

const SplashScreen = ({ handleMakeAppReady }) => {

    return (
        <Paper square elevation={0} style={{
            width: '100vw',
            height: '100vh',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            overflow: 'hidden'
        }}>
            <div style={{ width: '25rem', textAlign: 'center' }}>
                <CircularProgress />
            </div>
        </Paper>
    )
}

export default SplashScreen
