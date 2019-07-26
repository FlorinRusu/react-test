import {userConstants} from '../constants/user.notify';
import {userService} from '../services/user.service';

export const userActions = {
    login,
    logout
};

function login(user, pass) {
    return dispatch => {
        dispatch(request({user}));

        userService.login(user, pass)
            .then(
                user => {
                    dispatch(success(user));
                    window.history.push('/');
                },
                error => {
                    dispatch(failure(error.toString()));
                }
            );
    };

    function request(user) {
        return {type: userConstants.LOG_REQ, user}
    }

    function success(user) {
        return {type: userConstants.LOG_SUCC, user}
    }

    function failure(error) {
        return {type: userConstants.LOG_FAIL, error}
    }
}

function logout() {
    userService.logout();
    return {type: userConstants.LOGOUT};
}