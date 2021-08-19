import { DISABLE_DARK_MODE, ENABLE_DARK_MODE } from "../constants/themeConstants";

const initialState = {
    isDarkMode: false
}

const themeReducer = (state = initialState, action) => {
    switch (action.type) {
        case ENABLE_DARK_MODE:
            return {
                ...state,
                isDarkMode: action.payload  // true
            }

        case DISABLE_DARK_MODE:
            return {
                ...state,
                isDarkMode: action.payload  // false
            }

        default:
            return state;
    }
}

export default themeReducer