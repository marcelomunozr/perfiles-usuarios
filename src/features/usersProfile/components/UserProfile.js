import React from 'react'
import {
	Col,
	Card,
	Button,
    Row,
} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import labels from '../constants/labels';

const UserProfile = ({
    user,
    handleDeleteUserProfile,
}) => {
    const {
        picture,
        name,
        email,
        phone,
        dob,
        location,
    } = user;
    return (
        <Col sm={6} md={4} lg={3}>
            <Card className="mb-4">
                <Card.Img variant="top" src={picture.large} />
                <Card.Body>
                    <Card.Title>{`${name.first} ${name.last}`}</Card.Title>
                    <Card.Text>{`Edad: ${dob.age}`}</Card.Text>
                    <Card.Text>{`Email: ${email}`}</Card.Text>
                    <Card.Text>{`Tel: ${phone}`}</Card.Text>
                    <Card.Text className="mb-4">{`País: ${location.country}`}</Card.Text>
                    <Row>
                        <Col xs="auto">
                            <Button
                                variant="danger"
                                onClick={handleDeleteUserProfile(user)}
                            >
                                {labels.BUTTONS.DELETE}
                            </Button>
                        </Col>
                    </Row>
                </Card.Body>
            </Card>
        </Col>
    )
}

export default UserProfile;
