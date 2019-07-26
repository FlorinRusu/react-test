import {ON_CONFIRMATION_TRIGGER, ON_PASSWORD_TRIGGER, ON_SUBMIT_LOGIN} from "../constants";
import {initialState} from "./initialState";

export default function appReducer(state = initialState.app, action) {
    console.log('reducer', action, state);
    switch (action.type) {
        case ON_SUBMIT_LOGIN:
            return action;
        case ON_PASSWORD_TRIGGER:
            return Object.assign({}, state, {
                isResetDisplayed: !state.isResetDisplayed,

            });
        case ON_CONFIRMATION_TRIGGER:
            return Object.assign({}, state, {
                isConfirmationDisplayed: !state.isConfirmationDisplayed,

            });
        default:
            return state;
    }
}
