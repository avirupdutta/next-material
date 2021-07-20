import { userConstants } from '../constants/users';

// let user = JSON.parse(localStorage.getItem('id_token'));
// const initialState = user ? { loggedIn: true, user } : {};
const initialState = {
    user: null,
    token: null,
    refreshToken: null
};

function authReducer(state = initialState, action) {
    switch (action.type) {
        case userConstants.LOGIN_REQUEST:
            return {
                loggingIn: true,
                user: action.user
            };
        case userConstants.LOGIN_SUCCESS:
            return {
                ...action.payload
            };
        case userConstants.LOGIN_FAILURE:
            return {};
        case userConstants.LOGOUT:
            return {};
        default:
            return state
    }
}

export default authReducer