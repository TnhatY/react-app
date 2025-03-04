import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container>
                <NavLink to='/' className='navbar-brand'>React</NavLink>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <NavLink to='/' className='nav-link'>Home</NavLink>
                        <NavLink to='/admins/manage-user' className='nav-link'>Admin</NavLink>
                        <NavLink to='/users' className='nav-link'>User</NavLink>
                        {/*                     
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#link">Link</Nav.Link> */}

                    </Nav>
                    <Nav>
                        <button className='btn-login'>Log in</button>
                        <button className='btn-signup'>Sign up</button>
                        <NavDropdown title="Setting" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.2">
                                Profile
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Log In</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">
                                Log Out
                            </NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Header;