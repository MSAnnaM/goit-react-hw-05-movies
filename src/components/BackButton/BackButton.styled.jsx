import styled from 'styled-components';
import { Link } from 'react-router-dom';
export const GoBackLink = styled(Link)`
margin-left: 15px;
  display: flex;
  align-items: center;
  text-decoration: none;
  color: #fff;
  font-size: 1em; 
  margin-right: auto; 
  margin-bottom: 5px;
  margin-top: 5px;
  background-color: rgba(138, 43, 226, 0.7); 
  padding: 8px;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;
  width: 60px;  

  &:hover {
    background-color: rgba(72, 61, 139, 0.7); 
  }
`;