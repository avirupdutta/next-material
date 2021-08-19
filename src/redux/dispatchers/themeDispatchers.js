import { disableDarkModeAction, enableDarkModeAction } from "../actions/themeActions"

export const darkModeToggleDispatcher = (enableDarkMode = false) => {
    return async (dispatch, getState) => {
        dispatch(enableDarkMode ? enableDarkModeAction() : disableDarkModeAction())
    }
}