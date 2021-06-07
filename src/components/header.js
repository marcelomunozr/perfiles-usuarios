import React from 'react'
import {
    Navbar,
    Container,
    Nav,
    NavDropdown,
} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import labels from '../constants/labels';

const Header = () => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" className="mb-4" >
            <Container>
                <Navbar.Brand href="/">{labels.NAVBAR.TITULO}</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="/">{labels.NAVBAR.INICIO}</Nav.Link>
                        <Nav.Link href="#seccion">{labels.NAVBAR.SECCION}</Nav.Link>
                        <NavDropdown title={labels.NAVBAR.CATEGORIAS} id="collasible-nav-dropdown">
                            <NavDropdown.Item href="#categoria/3.1">{labels.NAVBAR.CATEGORIA_1}</NavDropdown.Item>
                            <NavDropdown.Item href="#categoria/3.2">{labels.NAVBAR.CATEGORIA_2}</NavDropdown.Item>
                            <NavDropdown.Item href="#categoria/3.3">{labels.NAVBAR.CATEGORIA_3}</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#categoria/3.4">{labels.NAVBAR.OTROS}</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <Nav>
                        <Nav.Link eventKey={2} href="#login">
                            {labels.NAVBAR.INICIAR_SESION}
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Header;
