import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const PageNotFoundWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #8a2be2;
  color: #fff;
`;

export const PageNotFoundMsg = styled.h2`
  font-size: 2em;
  margin-bottom: 20px;
`;

export const HomePageLink = styled(Link)`
  margin-left: 15px;
  color: #fff;
  text-decoration: none;
  font-size: 1.2em;
  padding: 10px;
  background-color: rgba(138, 43, 226, 0.7);
  border-radius: 4px;
  transition: background-color 0.3s;

  &:hover {
    background-color: rgba(72, 61, 139, 0.7);
  }
`;
