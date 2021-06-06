import axios from 'axios';

const getUsers = axios.create({
    baseURL: `https://randomuser.me/api/?results=15`
});

const getUsersProfile = async () => {
    const resp = await getUsers.get();
    return resp;
}

const deleteUserProfile = async (userID) => {
    const resp = await getUsers.delete('', { headers: userID });
    return resp;
}

export {
    getUsersProfile,
    deleteUserProfile,
};