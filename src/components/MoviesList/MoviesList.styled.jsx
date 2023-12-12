import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const List = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

export const ListItem = styled.li`
  margin: 20px;
  width: 200px;
  border: 1px solid #4b0082;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

export const MovieLink = styled(Link)`
  text-decoration: none;
  color: #4b0082;
`;

export const Image = styled.img`
  width: 100%;
  height: auto;
`;

export const Title = styled.h2`
  font-size: 1.2em;
  color: #2c3e50;
  margin: 10px;
`;

export const ReleaseDate = styled.p`
  font-size: 0.8em;
  color: #666;
  margin: 10px;
`;