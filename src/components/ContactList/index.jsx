import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'redux/operations';
import { selectContacts, selectFilter } from '../../redux/selectors';
import {
  StyledList,
  StyledItem,
  StyledContact,
  StyledName,
} from './StyledContactList';

const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  const handleDelete = id => {
    dispatch(deleteContact(id));
  };

  return (
    <StyledList>
      {filteredContacts.map(({ id, name, number }) => (
        <StyledItem key={id}>
          <StyledContact>
            <StyledName>{name}</StyledName>
            <span>{number}</span>
          </StyledContact>
          <button type="button" onClick={() => handleDelete(id)}>
            Delete
          </button>
        </StyledItem>
      ))}
    </StyledList>
  );
};

export default ContactList;
