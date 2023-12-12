import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
`;

export const Input = styled.input`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  outline: none;
  margin-right: 10px;
  font-size: 16px;
  color: #333;
  
  &:focus {
    border-color: violet;
    box-shadow: 0 0 5px rgba(128, 0, 128, 0.5);
  }
`;

export const Button = styled.button`
  padding: 10px 15px;
  background-color: #9400D3;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  
  &:hover {
    background-color: #4B0082;
  }
`;