import {
    Button,
    Form,
    Jumbotron,
} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import labels from '../constants/labels';

const InputSearch = ({
    searchUser,
    setSearchUser,
}) => {

    return (
        <Jumbotron>
            <h1>{labels.USERS_PROFILE.TITLE}</h1>
            <p>{labels.USERS_PROFILE.MSG}</p>
            <Form.Control
                size="lg"
                type="text"
                placeholder={labels.USERS_PROFILE.INPUT_SEARCH}
                onChange={e => setSearchUser(e.target.value)}
                className="mb-4"
                value={searchUser}
            />
            <Button
                variant="success"
                disabled={!searchUser}
                onClick={() => setSearchUser('')}
            >
                {labels.BUTTONS.CLEAN_SEARCH}
            </Button>
        </Jumbotron>
    );
};

export default InputSearch;
