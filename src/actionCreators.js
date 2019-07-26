import {ON_CONFIRMATION_TRIGGER, ON_PASSWORD_TRIGGER, ON_SUBMIT_LOGIN} from "./constants";

export function togglePassword() {
    return {type: ON_PASSWORD_TRIGGER};
}

export function toggleConfirmation() {
    return {type: ON_CONFIRMATION_TRIGGER};
}

export function submitLogin(user, pass) {
    return dispatch => {
        return fetch('login', {
            method: 'POST',
            headers: {
                'Accept': 'application/json'
            },
            body: {user: user, pass: pass}
        })
            .then(response => response.json())
            .then(json => dispatch({type: ON_SUBMIT_LOGIN, data: json}));
    };
}
