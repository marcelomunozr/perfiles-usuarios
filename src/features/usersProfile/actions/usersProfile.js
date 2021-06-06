import { getUsersProfile } from '../services/usersProfile';
import {
    SET_USERS_PROFILE,
    SET_IS_LOADING_USERS_PROFILE,
    SET_ERROR_USERS_PROFILE,
    CLEAR_ERROR_USERS_PROFILE,
    CLEAR_ALL_USERS_PROFILE,
} from './types';

const setUsersProfile = usersProfile => ({
    type: SET_USERS_PROFILE,
    usersProfile,
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
 * Invoca servicio para obtener configuracion taller
 */
const getUsersProfileThunk = () => async (dispatch) => {
    const response = await getUsersProfile();
    const {
        error,
        isCancel,
        data,
    } = response;
    console.log('responseTHUNK', response);
    // if (!error) {
    //     const { body: { listaProductos } } = data;
    //     dispatch(setDataTaller(listaProductos));
    // } else {
    //     dispatch(setErrorDataTaller(true));
    // }
    // dispatch(setIsLoadingTaller(false));
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
