export const config = {
    url: JSON.stringify('http://localhost:3000')
};

export const userService = {
    login,
    logout
};

function login(user, pass) {
    const requestOptions = {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({user, pass})
    };

    return fetch(`${config.url}/users/auth`, requestOptions)
        .then(handleResponse)
        .then(user => {
            //keep user logged between pages
            localStorage.setItem('user', JSON.stringify(user));
            return user;
        });
}

function logout() {
    //forget user
    localStorage.removeItem('user');
}

function handleResponse(res) {
    return res.text().then(text => {
        const data = text && JSON.parse(text);
        if (!res.ok) {
            if (res.status === 401) {
                // auto logout
                logout();
                window.location.reload(true);
            }
            const error = (data && data.message) || res.statusText;
            return Promise.reject(error);
        }
        return data;
    });
}