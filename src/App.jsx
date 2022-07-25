import { lazy, Suspense } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import CircleLoader from 'react-spinners/CircleLoader';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import authOperation from 'redux/auth/authOperations';
import PrivatRoute from 'components/PrivatRoute';
import PublicRoute from 'components/PublicRoute';

const AppBar = lazy(() =>
  import('./components/AppBar' /* webpackChunkName: "appBar-page" */)
);
const HomePage = lazy(() =>
  import('./pages/HomePage' /* webpackChunkName: "home-page" */)
);
const LoginPage = lazy(() =>
  import('./pages/LoginPage' /* webpackChunkName: "login-page" */)
);
const RegisterPage = lazy(() =>
  import('./pages/RegisterPage' /* webpackChunkName: "register-page" */)
);
const ContactsPage = lazy(() =>
  import('pages/ContactsPage' /* webpackChunkName: "contacts-page" */)
);

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authOperation.fetchCurrentUser());
  }, [dispatch]);
const style = { position: "fixed", top: "50%", left: "50%", transform: "translate(-50%, -50%)" };
  return (
    <Suspense
      fallback={
        <div style={style}>
          <CircleLoader
            color={'#45d583'}
            size={100}
          />
        </div>
      }
    >
      <Routes>
        <Route path="/" element={<AppBar />}>
          <Route
            path="register"
            element={
              <PublicRoute restricted>
                <RegisterPage />
              </PublicRoute>
            }
          />
          <Route
            path="login"
            element={
              <PublicRoute navigateTo="contacts" restricted>
                <LoginPage />
              </PublicRoute>
            }
          />
          <Route
            path="contacts"
            element={
              <PrivatRoute>
                <ContactsPage />
              </PrivatRoute>
            }
          />
          <Route
            index
            element={
              <PublicRoute>
                <HomePage />
              </PublicRoute>
            }
          />
        </Route>
        <Route
          path="*"
          element={
            <PublicRoute>
              <Navigate to="/" />
            </PublicRoute>
          }
        />
      </Routes>
    </Suspense>
  );
}