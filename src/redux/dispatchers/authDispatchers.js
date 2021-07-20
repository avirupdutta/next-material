import { authenticateAction } from "../actions/authActions"

export const authenticateDispatcher = (payload) => {
    return async (dispatch, getState) => {
        dispatch(authenticateAction(payload))
    }
}