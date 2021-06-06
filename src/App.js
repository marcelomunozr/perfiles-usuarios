import { useEffect, useState } from 'react';
import './App.css';
import {
	Alert,
} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import UsersProfile from './features/usersProfile/containers/UsersProfile';

const App = () => {
	const [users, setUsers] = useState([]);
	const api = axios.create({
		baseURL: `https://randomuser.me/api/?results=15`
	});

	const getUsersProfile = async () => {
		try {
			const resp = await api.get();
			setUsers(resp.data.results);
		}
		catch (err) {
			console.error(err);
		}
	}

	const handleSetUsersProfile = () => {
		if (users.length) {
			console.log('users', users);
		}
	}

	useEffect(() => {
		getUsersProfile();
	}, [])

	useEffect(() => {
		handleSetUsersProfile();
	}, [users]);
	
	return (
			<div className="App-header">
				<UsersProfile users={users} />
				{/* Alerta eliminar usuario  */}
				{true && <Alert variant="danger">usuario eliminado</Alert>}
				{/* <Button>Holi</Button> */}

			</div>
	);
};

export default App;
