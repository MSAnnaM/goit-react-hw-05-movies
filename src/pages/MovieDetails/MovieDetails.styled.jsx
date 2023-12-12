import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Wrapper = styled.div`
  position: relative;
  padding: 20px;
  background-color: violet; /* Violet background */
  color: #fff; /* White text color */
`;

export const LinksWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-top: 20px;
`;

export const LinkItem = styled(Link)`
  color: #fff;
  font-size: 1.2em;
  text-decoration: none;
  cursor: pointer;
  padding: 10px;
  border-radius: 5px;
  background-color: #8a2be2; 
  transition: background-color 0.3s;

  &:hover {
    background-color: #483d8b; /* Dark Slate Blue on hover */
  }
`;
