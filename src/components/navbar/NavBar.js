import { Container, Nav, Navbar } from "react-bootstrap";
import { Link , NavLink } from "react-router-dom";
import CartIcon from "../icon/CartIcon";




const NavBar = () => {
    return (
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand href="#home"><Link to="/">Roxx Commerce</Link></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link >
                <NavLink to={"category/alcohol"}>
                Bebidas Alcohólicas
                </NavLink>
              </Nav.Link>
              <Nav.Link >
                <NavLink to={"category/soft-drink"}>
                  Refrescos
                </NavLink>
              </Nav.Link>
              <Nav.Link >
                <NavLink to={"category/energy-drink"}>
                Bebidas Energéticas
                </NavLink>
              </Nav.Link>
              
            </Nav>
          </Navbar.Collapse>
        </Container>
        <CartIcon/>
      </Navbar>
    );
  };
  
  export default NavBar;