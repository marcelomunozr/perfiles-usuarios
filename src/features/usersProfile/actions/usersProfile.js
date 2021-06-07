import { getUsersProfile } from '../services/usersProfile';
import {
    SET_USERS_PROFILE,
    SET_IS_LOADING_USERS_PROFILE,
    SET_ERROR_USERS_PROFILE,
    CLEAR_ERROR_USERS_PROFILE,
    CLEAR_ALL_USERS_PROFILE,
} from './types';

const setUsersProfile = users => ({
    type: SET_USERS_PROFILE,
    users,
});

const setIsLoadingUsersProfile = isLoadingUsersProfile => ({
    type: SET_IS_LOADING_USERS_PROFILE,
    isLoadingUsersProfile,
});

const setErrorUsersProfile = errorUsersProfile => ({
    type: SET_ERROR_USERS_PROFILE,
    errorUsersProfile,
});

const clearErrorUsersProfile = () => ({
    type: CLEAR_ERROR_USERS_PROFILE,
});

const clearAllUsersProfile = () => ({
    type: CLEAR_ALL_USERS_PROFILE,
});

/**
 * Invoca servicio para obtener usuarios
 */
const getUsersProfileThunk = () => async (dispatch) => {
    const response = await getUsersProfile();
    const {
        isCancel,
        data,
    } = response;
    if (response.status === 200) {
        const { results } = data;
        dispatch(setUsersProfile(results));
    } else {
        dispatch(setErrorUsersProfile(true));
    }
    dispatch(setIsLoadingUsersProfile(false));
    return isCancel;
};


export {
    setUsersProfile,
    setIsLoadingUsersProfile,
    setErrorUsersProfile,
    clearErrorUsersProfile,
    clearAllUsersProfile,

    getUsersProfileThunk,
};
