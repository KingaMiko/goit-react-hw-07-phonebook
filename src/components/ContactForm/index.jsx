import { useDispatch } from 'react-redux';
import { addContact } from '../../redux/slices';
import { useForm } from '../hooks/useForm';
import {
  StyledForm,
  StyledLabel,
  StyledInputName,
  StyledInputNumber,
} from './StyledContactForm';

const ContactForm = () => {
  const [values, handleChange, resetForm] = useForm({ name: '', number: '' });
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(addContact(values.name, values.number));
    resetForm();
  };

  return (
    <StyledForm onSubmit={handleSubmit}>
      <StyledLabel>
        <StyledInputName
          value={values.name}
          onChange={handleChange}
          type="text"
          name="name"
          placeholder="Name"
          pattern="^[a-zA-ZąćęłńóśźżĄĆĘŁŃÓŚŹŻ]+(\s[a-zA-ZąćęłńóśźżĄĆĘŁŃÓŚŹŻ]+)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </StyledLabel>
      <StyledLabel>
        <StyledInputNumber
          value={values.number}
          onChange={handleChange}
          type="tel"
          name="number"
          placeholder="Number"
          pattern="(\+48)?\s?(\d{3}-\d{3}-\d{3}|\d{3}\s\d{3}\s\d{3}|\d{9,11})"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </StyledLabel>

      <button type="submit">Add contact</button>
    </StyledForm>
  );
};

export default ContactForm;
