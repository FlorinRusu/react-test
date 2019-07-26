import {userConstants} from '../constants/user.notify';

let user = JSON.parse(localStorage.getItem('user'));
const initialState = user ? {loggedIn: true, user} : {};

export function auth(state = initialState, action) {
    switch (action.type) {
        case userConstants.LOG_REQ:
            return {
                loggingIn: true,
                user: action.user
            };
        case userConstants.LOG_SUCC:
            return {
                loggedIn: true,
                user: action.user
            };
        case userConstants.LOG_FAIL:
            return {};
        case userConstants.LOGOUT:
            return {};
        default:
            return state
    }
}