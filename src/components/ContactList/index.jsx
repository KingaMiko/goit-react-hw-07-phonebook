import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from '../../redux/slices';
import { getContacts, getFilter } from '../../redux/selectors';
import {
  StyledList,
  StyledItem,
  StyledContact,
  StyledName,
} from './StyledContactList';

const ContactList = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);
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
