const ACCESS_TOKEN_KEY = 'Access-Token';

export function authenticated() {
    return _get(ACCESS_TOKEN_KEY);
}

export function authSuccess(token) {
    _set(ACCESS_TOKEN_KEY, token);
}

export function logout() {
    sessionStorage.clear();
}

function _set(key, value) {
    sessionStorage.setItem(key, value);
}

function _get(key) {
    return sessionStorage.getItem(key);
}
