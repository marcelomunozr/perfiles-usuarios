import React from 'react'
import {
	Col,
	Card,
	Button,
} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import labels from '../constants/labels';

const UserProfile = ({
    user,
}) => {
    const {
        picture,
        name,
        email,
        phone,
        dob,
    } = user;
    return (
        <Col sm={4} md={4}>
            <Card className="mb-4">
                <Card.Img variant="top" src={picture.large} />
                <Card.Body>
                    <Card.Title>{`${name.first} ${name.last}`}</Card.Title>
                    <Card.Text>{`Edad: ${dob.age}`}</Card.Text>
                    <Card.Text>{`Email: ${email}`}</Card.Text>
                    <Card.Text className="mb-4">{`Tel: ${phone}`}</Card.Text>
                    <Button variant="outline-danger" className="full-w">{labels.BUTTONS.ELIMINAR}</Button>
                </Card.Body>
            </Card>
        </Col>
    )
}

export default UserProfile;
