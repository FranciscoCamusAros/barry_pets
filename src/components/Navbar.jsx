import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';

function Navbars() {
  return (
    <Container>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" className='fixed-top'>
        <Container>
          <Navbar.Brand><Link className='link' to='/'>Barry Pets 🐕‍🦺</Link></Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link><Link className='link' to='/'>Home</Link></Nav.Link>
              <NavDropdown title="Productos" id="collasible-nav-dropdown">
                <NavDropdown.Item><Link className='link_drop' to='/correas'>Correas</Link></NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item><Link className='link_drop' to='/accesorios'>Accesorios</Link></NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item><Link className='link_drop' to='/etologia'>Etología</Link></NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Nav>
              <Nav.Link><Link className='link' to='/preguntas_frecuentes'>Preguntas Frecuentes</Link></Nav.Link>
              <NavDropdown title="Cuenta 🔐" id="collasible-nav-dropdown">
                <NavDropdown.Item><Link className='link_drop' to='/signup'>Sign Up</Link></NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item><Link className='link_drop' to='/login'>Log In </Link></NavDropdown.Item>
              </NavDropdown>
              <Nav.Link><Link className='link' to='/carrito'> Carrito 🛒</Link></Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Container>
  );
};

export default Navbars;