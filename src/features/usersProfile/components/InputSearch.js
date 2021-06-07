import {
    Row,
    Button,
    Form,
    Col,
} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const InputSearch = ({
    users,
    searchUser,
    setSearchUser,
}) => {

    return (
        <Row className="mb-4">
            <Col sm={4}>
                <Button variant="primary" size="lg">Buscar</Button>
            </Col>
            <Col sm={8}>
                <Form.Control
                    size="lg"
                    type="text"
                    placeholder="Buscar usuarios"
                    onChange={e => setSearchUser(e.target.value)}
                />
            </Col>
        </Row>
    );
};

export default InputSearch;
