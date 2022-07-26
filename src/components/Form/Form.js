import { useState } from 'react';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';
import SyncLoader from 'react-spinners/SyncLoader';
import { FcDataRecovery } from 'react-icons/fc';
import { useAddContactMutation } from '../../redux/contacts/contactsSlice';
import {
  PhonebookForm,
  PhonebookLabel,
  PhonebookField,
  PhonebookButton,
} from "./Form.styled";
import { MdAccountBox, MdPhoneIphone } from "react-icons/md";

export default function FormContact({ contacts }) {
  const [createContact, { isLoading }] = useAddContactMutation();
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const addContact = (name, number) => {
    const contact = {
      name: name,
      number: number,
    };

    const normalizeName = contact.name.toLowerCase();
    if (contacts.some(item => item.name.toLowerCase() === normalizeName)) {
      return toast.info(`${contact.name} is already in your contacts`, {
        icon: <FcDataRecovery size="30px" />,
      });
    }
    createContact(contact);
  };

  const handleSubmit = e => {
    e.preventDefault();
    addContact(name, number);
    setName('');
    setNumber('');
  };

  return (
    <PhonebookForm className="phonebook-form" onSubmit={handleSubmit}>
          <PhonebookLabel>
          <PhonebookField
            type="text"
            value={name}
            onChange={evt => setName(evt.target.value)}
            name="name"
            placeholder="Enter name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
            <MdAccountBox style={{ verticalAlign: "middle" }} size="42px" />
          </PhonebookLabel>          
          <PhonebookLabel>
          <PhonebookField
            type="tel"
            placeholder="Enter number"
            name="number"
            value={number}
            onChange={evt => setNumber(evt.target.value)}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
            <MdPhoneIphone style={{ verticalAlign: "middle" }} size="42px" />
          </PhonebookLabel> 
      <PhonebookButton type="submit">
        {isLoading ? <SyncLoader color="#ffffff" size={8} /> : 'Add contacts'}
      </PhonebookButton>
    </PhonebookForm>
  );
}
FormContact.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.object),
};
