import { Container } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import authSelectors from 'redux/auth/authSelectors';

export default function HomePage() {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  const name = useSelector(authSelectors.getUsername);
  const style = {"textAlign": "center"}
  return (
    <Container className="mt-4" style={style}>
      {isLoggedIn ? (
        <h1>
          Welcome, {name}. <br /> To work with contacts go to
          <Link className="text-decoration-none" to="contacts">
            {' '}
            Contacts
          </Link>
        </h1>
      ) : (
        <>
          <h1>Create your own Phonebook!</h1>
          <p>
            To use the application, you must{' '}
            <Link className="text-decoration-none" to="register">
              register
            </Link>{' '}
            or{' '}
            <Link className="text-decoration-none" to="login">
              login
            </Link>
          </p>
        </>
      )}
    </Container>
  );
}
