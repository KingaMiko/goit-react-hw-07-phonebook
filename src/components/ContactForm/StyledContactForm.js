import styled from 'styled-components';

export const StyledForm = styled.form`
  background-color: #ba90c6;
  display: flex;
  width: 350px;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0 9px 50px hsla(20, 67%, 75%, 0.31);
`;

export const StyledLabel = styled.label`
  width: 100%;
  margin-bottom: 2px;
  color: black;
  font-size: 15px;
  &:last-child {
    margin-bottom: 0px;
  }
`;

export const StyledInputName = styled.input`
  width: 95%;
  margin: 10px auto;
  text-align: center;
  height: 30px;
`;

export const StyledInputNumber = styled.input`
  width: 95%;
  margin-bottom: 10px;
  text-align: center;
  height: 30px;
`;
