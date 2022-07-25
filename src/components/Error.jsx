import { ToastContainer, toast } from 'react-toastify';

export default function Error({ message }) {
  switch (message) {
    case 400:
      toast.error('Login error. Please re-login');
      break;
    case 401:
      toast.error('Unauthorized. Please authenticate');
      break;
    case 500:
      toast.error('Server is not available. Please retry your request later');
      break;
    default:
      toast.error(null);
  }
  return <ToastContainer position="top-center" autoClose={3000} limit={1} />;
}