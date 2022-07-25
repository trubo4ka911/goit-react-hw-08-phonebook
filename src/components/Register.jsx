import { useDispatch } from 'react-redux';
import FormAuth from './Form/FormAuth';
import authOperations from 'redux/auth/authOperations';

const Register = () => {
  const dispatch = useDispatch();

  const handleSubmitForm = (email, password, name) => {
    dispatch(authOperations.register({ email, password, name }));
  };

  return (
    <FormAuth
      title="Registration Page"
      handleClick={handleSubmitForm}
      isRegister={true}
      buttonName="Sign in"
    />
  );
};

export default Register;