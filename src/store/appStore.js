import {observable, action} from 'mobx';
import {authenticated, authSuccess, logout} from '../util/authUtils';

class AppStore {
    @observable authenticated = !!authenticated();
    @observable currentUser = {};

    @action toggleLogin(authenticated, data = {}) {
        this.currentUser = data.user;
        if (authenticated) {
            authSuccess(data.accessToken);
        } else {
            logout();
        }

        this.authenticated = authenticated;
    }
}

export default new AppStore();
