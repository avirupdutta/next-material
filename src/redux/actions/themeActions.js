import { DISABLE_DARK_MODE, ENABLE_DARK_MODE } from "../constants/themeConstants"

export const enableDarkModeAction = () => {
    return {
        type: ENABLE_DARK_MODE,
        payload: true
    }
}

export const disableDarkModeAction = () => {
    return {
        type: DISABLE_DARK_MODE,
        payload: false
    }
}