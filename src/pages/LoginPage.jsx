import { useSelector } from 'react-redux';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import authSelectors from 'redux/auth/authSelectors';
import Login from '../components/Login';
import Loading from 'components/Loading';
import Error from 'components/Error';

export default function LoginPage() {
  const isLoading = useSelector(authSelectors.getLoading);
  const error = useSelector(authSelectors.getError);
  return (
    <Container>
      <Login />
      {isLoading && <Loading className="ms-3" />}
      {error && <Error message={error} />}
      <p className="ms-3">
        Not registered yet? <Link to="register">Click me</Link>
      </p>
    </Container>
  );
}


// import { Container } from 'react-bootstrap';
// import { useSelector } from 'react-redux';
// import { Link } from 'react-router-dom';
// import authSelectors from 'redux/auth/authSelectors';

// export default function HomePage() {
//   const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
//   const name = useSelector(authSelectors.getUsername);
//   return (
//     <Container className="mt-4">
//       {isLoggedIn ? (
//         <h1>
//           Welcome, {name}. To work with contacts go to
//           <Link className="text-decoration-none" to="contacts">
//             {' '}
//             Contacts
//           </Link>
//         </h1>
//       ) : (
//         <>
//           <h1>Hello</h1>
//           <p>
//             To use the application, you must{' '}
//             <Link className="text-decoration-none" to="register">
//               register
//             </Link>{' '}
//             or{' '}
//             <Link className="text-decoration-none" to="login">
//               login
//             </Link>
//           </p>
//         </>
//       )}
//     </Container>
//   );
// }