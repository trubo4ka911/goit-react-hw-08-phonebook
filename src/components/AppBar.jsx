import { Navbar, Container, Nav } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { Outlet } from 'react-router-dom';
import { UserMenu } from './UserMenu';
import { useSelector, useDispatch } from 'react-redux';
import authSelectors from '../redux/auth/authSelectors';
import authOperations from '../redux/auth/authOperations';
import './AppBar.css'

export default function AppBar() {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  const name = useSelector(authSelectors.getUsername);
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(authOperations.logOut());
  };

  return (
    <main>
    <header>
      <Navbar bg="myGreen" variant="light" expand="lg" className="mb-5">
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <LinkContainer to="/">
                <Nav.Link>Home</Nav.Link>
              </LinkContainer>
              {isLoggedIn ? (
                <LinkContainer to="contacts">
                  <Nav.Link>Contacts</Nav.Link>
                </LinkContainer>
              ) : (
                <>
                  <LinkContainer to="register">
                    <Nav.Link>Registration</Nav.Link>
                  </LinkContainer>
                  <LinkContainer to="login">
                    <Nav.Link>Login</Nav.Link>
                  </LinkContainer>
                </>
              )}
            </Nav>
            {isLoggedIn && <UserMenu name={name} onClick={handleClick} />}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
    <Outlet />
  </main>
  );
}