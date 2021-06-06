import { memo, useEffect, useState } from 'react';
import { getUsersProfileThunk } from '../actions/usersProfile';
import {
	Container,
	Row,
	Col,
	Card,
	Button,
} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const UsersProfile = ({
    users,
}) => {
	useEffect(() => {
        console.log('users', users);
    }, [users])
	return (
        <Container className="mb-4">
            <Row>
                <Col>
                    <Card>
                        <Card.Img variant="top" src="holder.js/100px180" />
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>
                </Col>
                
            </Row>
        </Container>
	);
};

export default UsersProfile;
