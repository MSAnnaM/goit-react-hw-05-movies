import styled from 'styled-components';
import { NavLink as Link } from 'react-router-dom';

export const Header = styled.header`
  width: 100%;
  padding: 20px;
  background-color: violet; 
  color: white;
  display: flex;
  justify-content: center;
`;

export const Nav = styled.nav`
  display: flex;
  gap: 20px;
`;

export const NavLink = styled(Link)`
  color: white;
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 5px;

  &:hover {
    color: #f1f1f1;
  }
`;