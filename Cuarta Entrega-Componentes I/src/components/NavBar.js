/* eslint-disable jsx-a11y/alt-text */
import {Navbar, Nav, NavDropdown, Form, FormControl, Button} from 'react-bootstrap';
import CartWidget from './CartWidget';
import Favorito from './Favorito';

const NavBar = (props) => {

    return(
        <>
        <header id="main-header" className="header">
            <Navbar id="nav" expand="lg">
            <Navbar.Brand href="#" className="mr-4 right" id="brand">
                <img src="/favicon.png" style={{ maxHeight: '60px' }} ></img>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
                <Nav className="mr-auto my-2 my-lg-0" style={{ maxHeight: '100px' }} navbarScroll>
                    <NavDropdown title="MUJER" id="navbarScrollingDropdown">
                        <NavDropdown.Item href="#">Classics</NavDropdown.Item>
                        <NavDropdown.Item href="#">Destacados</NavDropdown.Item>
                        <NavDropdown.Item href="#">Running</NavDropdown.Item>
                        <NavDropdown.Item href="#">Sandalias</NavDropdown.Item>
                        <NavDropdown.Item href="#">Zapatillas</NavDropdown.Item>
                    </NavDropdown>
                    <NavDropdown title="HOMBRE" id="navbarScrollingDropdown">
                    <NavDropdown.Item href="#">Classics</NavDropdown.Item>
                        <NavDropdown.Item href="#">Destacados</NavDropdown.Item>
                        <NavDropdown.Item href="#">Running</NavDropdown.Item>
                        <NavDropdown.Item href="#">Sandalias</NavDropdown.Item>
                        <NavDropdown.Item href="#">Zapatillas</NavDropdown.Item>
                    </NavDropdown>
                    <NavDropdown title="NIÑOS" id="navbarScrollingDropdown">
                    <NavDropdown.Item href="#">Classics</NavDropdown.Item>
                        <NavDropdown.Item href="#">Destacados</NavDropdown.Item>
                        <NavDropdown.Item href="#">Running</NavDropdown.Item>
                        <NavDropdown.Item href="#">Sandalias</NavDropdown.Item>
                        <NavDropdown.Item href="#">Zapatillas</NavDropdown.Item>
                    </NavDropdown>
                    <Nav.Link id="link" href="#">UNISEX</Nav.Link>
                </Nav>
                <Form className="d-flex">
                    <FormControl
                        type="search"
                        placeholder="Buscar zapatillas"
                        className="mr-2"
                        aria-label="Search"
                    />
                    <Button variant="outline-success">Buscar</Button>
                </Form>
                <CartWidget/>
                <Favorito/>
            </Navbar.Collapse>
            <h3>!Bienvenido {props.nombre}!</h3>
            </Navbar>
        </header>
        </>
    )
}

export default NavBar;

