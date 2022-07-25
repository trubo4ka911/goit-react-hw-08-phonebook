import { useDispatch } from 'react-redux';
import FormAuth from './Form/FormAuth';
import authOperations from 'redux/auth/authOperations';

const Login = () => {
  const dispatch = useDispatch();

  const handleSubmitForm = (email, password) => {
    dispatch(authOperations.logIn({ email, password }));
  };

  return (
    <FormAuth
      title="Login Page"
      handleClick={handleSubmitForm}
      isRegister={false}
      buttonName="Log in"
    />
  );
};
export default Login;