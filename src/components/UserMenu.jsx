import { Button } from 'react-bootstrap';

export const UserMenu = ({ name, onClick }) => {
  return (
    <>
      <Button variant="outline-light" onClick={onClick}>
        Logout
      </Button>
    </>
  );
};