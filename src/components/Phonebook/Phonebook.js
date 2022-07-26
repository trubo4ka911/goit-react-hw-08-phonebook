import React from 'react';
import { useFetchContactsQuery } from '../../redux/contacts/contactsSlice';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Form from '../Form/Form';
import { ContactsView } from '../ContactsView';
import Filter from '../Filter/Filter';
import '../AppBar.css';

const Phonebook = () => {
  const { data } = useFetchContactsQuery();
  const style = { marginLeft: '5em' };
  return (
    <div style={style}>
      <ToastContainer position="top-right" theme="colored" />
      <h1>Phonebook</h1>
      <Form contacts={data} />
      <h2 className="title">Contacts</h2>
      <Filter />
      <ContactsView />
    </div>
  );
};

export default Phonebook;
