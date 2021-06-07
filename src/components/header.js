import React from 'react'
import {
    Navbar,
    Container,
    Nav,
    NavDropdown,
} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const Header = () => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" className="mb-4" >
            <Container>
                <Navbar.Brand href="/">Perfiles de usuario</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="/">Inicio</Nav.Link>
                        <Nav.Link href="#seccion">Sección</Nav.Link>
                        <NavDropdown title="Categorías" id="collasible-nav-dropdown">
                            <NavDropdown.Item href="#categoria/3.1">Categoría 1</NavDropdown.Item>
                            <NavDropdown.Item href="#categoria/3.2">Categoría 2</NavDropdown.Item>
                            <NavDropdown.Item href="#categoria/3.3">Categoría 3</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#categoria/3.4">Otros</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <Nav>
                        <Nav.Link eventKey={2} href="#login">
                            Iniciar sesión
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Header;
