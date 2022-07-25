import { useSelector } from 'react-redux';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Register from 'components/Register';
import Loading from 'components/Loading';
import authSelectors from 'redux/auth/authSelectors';
import Error from 'components/Error';

export default function RegisterPage() {
  const isLoading = useSelector(authSelectors.getLoading);
  const error = useSelector(authSelectors.getError);

  return (
    <Container>
      <Register />
      {isLoading && <Loading />}
      {error && <Error message={error} />}
      <p className="ms-3">
        Already registered? <Link to="login">Click me</Link>
      </p>
    </Container>
  );
}