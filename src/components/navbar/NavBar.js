import { Container, Nav, Navbar } from "react-bootstrap";
import CartIcon from "../icon/CartIcon";




const NavBar = () => {
    return (
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand href="#home">Roxx Commerce</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Inicio</Nav.Link>
              <Nav.Link href="#link">Acerca de</Nav.Link>
              <Nav.Link href="#link">Contacto</Nav.Link>
              
            </Nav>
          </Navbar.Collapse>
        </Container>
        <CartIcon/>
      </Navbar>
    );
  };
  
  export default NavBar;