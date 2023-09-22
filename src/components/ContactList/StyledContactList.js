import styled from 'styled-components';

export const StyledList = styled.ul`
  background-color: #ba90c6;
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 350px;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0 9px 50px hsla(20, 67%, 75%, 0.31);
`;

export const StyledItem = styled.li`
  background-color: #fdf4f5;
  border-radius: 5px;
  box-shadow: 0 9px 50px hsla(20, 67%, 75%, 0.31);
  padding: 10px;
  margin-bottom: 5px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const StyledContact = styled.div`
  margin-right: 30px;
`;

export const StyledName = styled.span`
  margin-right: 1em;
`;
