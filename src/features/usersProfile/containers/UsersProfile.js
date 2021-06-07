import { memo, useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { getUsersProfileThunk } from '../actions/usersProfile';
import UserProfile from '../components/UserProfile';
import InputSearch from '../components/InputSearch';
import {
	Container,
	Row,
    Spinner,
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
        users,
        isLoadingUsersProfile,
        errorUsersProfile,
    };
};

const UsersProfile = ({
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

	useEffect(() => {
        initData();
    }, []);

    const renderFormSearch = () => {
        return (
            <InputSearch
                users={users}
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
                            console.log('user', user);
                            return (<UserProfile user={user} key={index} />)
                        })
                    }
                </Row>
            );
        }
    };

	const renderUsersProfile = () => {
        if (isLoadingUsersProfile) {
            return (
                <Spinner animation="border" variant="primary"/>
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