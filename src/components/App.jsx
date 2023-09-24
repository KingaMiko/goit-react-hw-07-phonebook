import React from 'react';
import { useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addContact, deleteContact, fetchContacts } from 'redux/operations';
import { setFilter } from 'redux/filterSlice';
import ContactList from './ContactList/index';
import ContactForm from './ContactForm/index';
import Filter from './Filter/index';
import {
  selectContacts,
  selectFilter,
  selectError,
  selectIsLoading,
  selectVisibleContacts,
} from 'redux/selectors';
import {
  StyledAllContacts,
  StyledTitleContacts,
  Wrapper,
  Header,
} from './StyledApp';

const App = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const visibleContacts = useSelector(selectVisibleContacts);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const handleSubmit = useCallback(
    async values => {
      try {
        await dispatch(addContact(values));
      } catch (error) {
        alert(error.message);
      }
    },
    [dispatch]
  );

  const handleFilterChange = useCallback(
    e => {
      dispatch(setFilter(e.target.value));
    },
    [dispatch]
  );

  const handleDelete = useCallback(
    id => {
      dispatch(deleteContact(id));
    },
    [dispatch]
  );

  return (
    <Wrapper>
      <Header>Phonebook</Header>
      <ContactForm onSubmit={handleSubmit} />
      <StyledTitleContacts>Contacts</StyledTitleContacts>
      <StyledAllContacts>All contacts: {contacts.length}</StyledAllContacts>
      <Filter value={filter} onChange={handleFilterChange} />
      {isLoading && !error && <b>Request in progress...</b>}
      {error && <div style={{ color: 'red' }}>{error.message}</div>}
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
