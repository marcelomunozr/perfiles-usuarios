import axios from 'axios';

const getUsers = axios.create({
    baseURL: `https://randomuser.me/api`
});

const getUsersProfile = async () => {
    const resp = await getUsers.get('/?results=15');
    return resp;
}

const deleteUser = async (user) => {
    const { id } = user;
    const resp = await getUsers.delete(`/${id.value}`);
    return resp;
}

export {
    getUsersProfile,
    deleteUser,
};