import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
import CartWidget from './CartWidget';
import './Comp.css';

function NavBar() {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
      <Link to='/' style={{textDecoration: 'none'}}><Navbar.Brand href="#home" className='clonas'>Clonas</Navbar.Brand></Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Novedades</Nav.Link>
            <Nav.Link href="#link">Rebajas</Nav.Link>
            <NavDropdown title="Ropa" id="basic-nav-dropdown">
              <Link style={{textDecoration: 'none'}} to='/category/1'><NavDropdown.Item href="#action/3.1">Tops</NavDropdown.Item></Link>
              <Link style={{textDecoration: 'none'}} to='/category/2'><NavDropdown.Item href="#action/3.2">
                Bottoms
              </NavDropdown.Item></Link>
              <Link style={{textDecoration: 'none'}} to='/category/3'><NavDropdown.Item href="#action/3.3">Conjuntos</NavDropdown.Item>
              </Link> <NavDropdown.Divider />
              <Link style={{textDecoration: 'none'}} to='/category/4'><NavDropdown.Item href="#action/3.4">
                Accesorios
              </NavDropdown.Item></Link> 
            </NavDropdown>
            <Nav.Item className="me-auto"><CartWidget/></Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );

}

export default NavBar;





