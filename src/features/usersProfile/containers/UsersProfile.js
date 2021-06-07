import { memo, useEffect, useState } from 'react';
import { connect } from 'react-redux';
import {
    getUsersProfileThunk,
    deleteUserProfileThunk,
} from '../actions/usersProfile';
import UserProfile from '../components/UserProfile';
import InputSearch from '../components/InputSearch';
import {
	Container,
	Row,
    Spinner,
    Alert,
    Button,
} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export const mapStateToProps = (state) => {
    const {
        usersProfile: {
            users,
            isLoadingUsersProfile,
            errorUsersProfile,
        },
    } = state;
    return {
        state,
        users,
        isLoadingUsersProfile,
        errorUsersProfile,
    };
};

const UsersProfile = ({
    state,
    dispatch,
    users,
    isLoadingUsersProfile,
    errorUsersProfile,
}) => {
    const [searchUser, setSearchUser] = useState('');

    const initData = () => {
        dispatch(getUsersProfileThunk());
    }

    const filteredUsers = () => {
        if (users.length && searchUser) {
            const userFilter = users.filter(user => {
                return user.name.first.toLowerCase().includes( searchUser.toLowerCase() );
            })
            return userFilter;
        }
        return users;
    };

    const handleDeleteUserProfile = (userToDelete) => () => {
        dispatch(deleteUserProfileThunk(userToDelete, users));
    };

	useEffect(() => {
        initData();
    }, []);

    const renderFormSearch = () => {
        return (
            <InputSearch
                searchUser={searchUser}
                setSearchUser={setSearchUser}
            />
        );
    };

    const renderUsersList = () => {
        if (users?.length) {
            const filterUsers = filteredUsers();
            return (
                <Row>
                    {
                        filterUsers.map((user, index) => {
                            return (
                                <UserProfile
                                    user={user}
                                    key={index}
                                    handleDeleteUserProfile={handleDeleteUserProfile}
                                />)
                        })
                    }
                </Row>
            );
        }
    };

	const renderUsersProfile = () => {
        /* TODO:
         * controlar error al obtener datos
        if (errorUsersProfile) {
            <Container className="App-content">
                <Alert variant="danger" onClose={() => initData()} dismissible>
                    <Alert.Heading>Error al buscar datos</Alert.Heading>
                    <p>
                        Puede que los servicios esten presentando intermitencia. Por favor, intente nuevamente
                    </p>
                    <hr />
                    <div className="d-flex justify-content-end">
                        <Button onClick={() => initData()} variant="success">
                            Reintentar
                        </Button>
                    </div>
                </Alert>
            </Container>
        }
        */
        if (isLoadingUsersProfile) {
            return (
                <Container className="App-content">
                    <Spinner animation="border" variant="primary"/>
                </Container>
            );
        }
        return (
            <Container className="mb-4">
                {renderFormSearch()}
                {renderUsersList()}
            </Container>
        );
    };

    return renderUsersProfile();
};

export default connect(mapStateToProps)(memo(UsersProfile));