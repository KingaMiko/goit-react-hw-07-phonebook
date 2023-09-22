import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addContact, deleteContact, setFilter } from '../redux/slices';
import ContactList from './ContactList/index';
import ContactForm from './ContactForm/index';
import Filter from './Filter/index';
import { getContacts, getFilter } from 'redux/selectors';
import {
  StyledAllContacts,
  StyledTitleContacts,
  Wrapper,
  Header,
} from './StyledApp';

const App = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);

  const handleSubmit = async values => {
    try {
      await dispatch(addContact(values));
    } catch (error) {
      alert(error.message);
    }
  };

  const handleFilterChange = e => {
    dispatch(setFilter(e.target.value));
  };

  const handleDelete = id => {
    dispatch(deleteContact(id));
  };

  const getVisibleContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  const visibleContacts = getVisibleContacts();

  return (
    <Wrapper>
      <Header>Phonebook</Header>
      <ContactForm onSubmit={handleSubmit} />
      <StyledTitleContacts>Contacts</StyledTitleContacts>
      <StyledAllContacts>All contacts: {contacts.length}</StyledAllContacts>
      <Filter value={filter} onChange={handleFilterChange} />
      {visibleContacts.length > 0 ? (
        <ContactList
          contacts={visibleContacts}
          onDeleteContact={handleDelete}
        />
      ) : (
        <p>No contacts available.</p>
      )}
    </Wrapper>
  );
};

export default App;
