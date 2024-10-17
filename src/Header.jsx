import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {Link} from 'react-router-dom'
function Header ()
{
    return(
        <div>
     <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">E-Commerence</Navbar.Brand>
          <Nav className="me-auto navbar-wrapper" >
            <Link to="add">Add Products</Link>
            <Link to="update">Update Products</Link>
            <Link to="login">Login</Link>
            <Link to="register">Register</Link>
            
          </Nav>
        </Container>
      </Navbar>

        </div>
    )
}

export default Header