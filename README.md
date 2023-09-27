# React homework template

This project was created with
[Create React App](https://github.com/facebook/create-react-app). To get
acquainted and configure additional features
[refer to documentation](https://facebook.github.io/create-react-app/docs/getting-started).

## Contact book

Perform refactoring of the Contact Book application code. Remove the code
responsible for storing and reading contacts from the local storage, and add
communication with the backend for storing contacts.

### Backend

Create your own personal backend for development with the UI service mockapi.io.
Sign up using your GitHub account. Create a resource contacts to get your
handpoint /contacts. Use resource constructor and describe the contact object as
on the picture.

### State Form

Add the load and error indicator handling to the Redux state. To do this, change
the state form.

### Operations

Use createAsyncThunk to declare asynchronous action generators and make HTTP
requests. Do the processing of the actions and change data in Redux state with
createSlice. <br> Declare the following operations: <br>

<ul>
<li>fetchContacts - get an array of contacts (GET method) by GET request. The basic type of action "contacts/fetchAll".</li>
<li>addContact - add contact (POST method). Basic type of action "contacts/addContact". </li>
<li>deleteContact - deletes a contact (DELETE method). Basic type of action "contacts/deleteContact". </li>
</ul>
