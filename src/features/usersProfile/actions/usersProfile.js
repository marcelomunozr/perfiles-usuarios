import {
    getUsersProfile,
    deleteUser,
} from '../services/usersProfile';
import {
    SET_USERS_PROFILE,
    DELETE_USER_PROFILE,
    SET_IS_LOADING_USERS_PROFILE,
    SET_ERROR_USERS_PROFILE,
    CLEAR_ERROR_USERS_PROFILE,
    CLEAR_ALL_USERS_PROFILE,
} from './types';

const setUsersProfile = users => ({
    type: SET_USERS_PROFILE,
    users,
});

const deleteUserProfile = user => ({
    type: DELETE_USER_PROFILE,
    user,
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
 * Obtiene usuarios
 */
const getUsersProfileThunk = () => async (dispatch) => {
    const response = await getUsersProfile();
    const {
        isCancel,
        data,
    } = response;
    if (response.status === 200) {
        const { results } = data;
        // se agrega idKey por que algunos id.value de los usuarios viene null
        const customResults = results.map((user, index) => ({ ...user, idKey: `${index}-${user.login.username}` }) )
        dispatch(setUsersProfile(customResults));
    } else {
        dispatch(setErrorUsersProfile(true));
    }
    dispatch(setIsLoadingUsersProfile(false));
    return isCancel;
};

/**
 * TODO:
 * Eliminar usuario
 */
const deleteUserProfileThunk = (userData, users) => async (dispatch) => {
    /* TODO: 
     * eliminar dato desde la API
     * controlar respuesta al eliminar
    const response = await deleteUser(userData);
    */
   const { idKey } = userData;
   const usersAfterDelete = users.filter(user => user.idKey !== idKey);
   dispatch(setUsersProfile(usersAfterDelete));
};


export {
    setUsersProfile,
    setIsLoadingUsersProfile,
    setErrorUsersProfile,
    clearErrorUsersProfile,
    clearAllUsersProfile,
    deleteUserProfile,

    getUsersProfileThunk,
    deleteUserProfileThunk,
};
