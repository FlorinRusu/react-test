import {initialState} from './initialState';
import {ON_CONFIRMATION_TRIGGER, ON_PASSWORD_TRIGGER, ON_SUBMIT_LOGIN} from "../constants";

export default function appReducer(state = initialState.app, action) {
    switch (action.type) {
        case ON_SUBMIT_LOGIN:
            console.log('FETCH_STUFF Action');
            return action;
       case ON_PASSWORD_TRIGGER:
           return {isResetDisplayed: !state.isResetDisplayed,
               ...state};
        case ON_CONFIRMATION_TRIGGER:
            return {isConfirmationDisplayed: !state.isConfirmationDisplayed,
                ...state};
        default:
            return state;
    }
}
