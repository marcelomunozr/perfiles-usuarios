import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import UsersProfile from './features/usersProfile/containers/UsersProfile';
import Header from './components/Header';

const App = () => (
	<div>
		<Header />
		<div>
			<UsersProfile />
		</div>
	</div>
);

export default App;
