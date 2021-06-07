import { combineReducers } from 'redux';
import {
    SET_USERS_PROFILE,
    SET_IS_LOADING_USERS_PROFILE,
    SET_ERROR_USERS_PROFILE,
    CLEAR_ERROR_USERS_PROFILE,
    CLEAR_ALL_USERS_PROFILE,
} from '../actions/types';

const usersProfileReducers = (state = null, action) => {
    switch (action.type) {
        case SET_USERS_PROFILE:
            return action.users;
        case CLEAR_ERROR_USERS_PROFILE:
            return null;
        case CLEAR_ALL_USERS_PROFILE:
            return null;
        default:
            return state;
    }
};

const isLoadingUsersProfileReducers = (state = true, action) => {
    switch (action.type) {
        case SET_IS_LOADING_USERS_PROFILE:
            return action.isLoadingUsersProfile;
        case CLEAR_ALL_USERS_PROFILE:
            return true;
        default:
            return state;
    }
};

const errorUsersProfileReducers = (state = false, action) => {
    switch (action.type) {
        case SET_ERROR_USERS_PROFILE:
            return action.errorUsersProfile;
        case CLEAR_ALL_USERS_PROFILE:
            return false;
        default:
            return state;
    }
};

export default combineReducers({
    users: usersProfileReducers,
    isLoadingUsersProfile: isLoadingUsersProfileReducers,
    errorUsersProfile: errorUsersProfileReducers,
});
