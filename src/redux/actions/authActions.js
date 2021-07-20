import { userConstants } from "../constants/users"


export const authenticateAction = payload => {
    return {
        type: userConstants.LOGIN_SUCCESS,
        payload
    }
}