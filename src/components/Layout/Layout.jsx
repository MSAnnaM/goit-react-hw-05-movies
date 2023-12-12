import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Header, Nav, NavLink } from './Layout.styles';
import Loader from '../../components/Loader/Loader';

const LayoutComponent = () => {
  return (
    <>
      <Header>
        <Nav>
          <NavLink to="/">
            Home
          </NavLink>
          <NavLink to="/movies">
            Movies
          </NavLink>
        </Nav>
      </Header>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default LayoutComponent;