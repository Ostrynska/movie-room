import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import { NavLink } from 'react-router-dom';

import { Container } from '../Container/Container';

import logo from '../../images/logo.png';

import { Header, Link, Loading, BtnWrap, Footer } from './SharedLayout.styled';

const SharedLayout = () => {
  return (
    <>
      <Header>
        <Container>
          <nav>
            <NavLink to="/" end>
              <img src={logo} alt="" style={{ height: '40px' }} />
            </NavLink>
            <BtnWrap>
              <Link to="/" end>
                Home
              </Link>
              <Link to="/movies" end>
                Movies
              </Link>
            </BtnWrap>
          </nav>
        </Container>
      </Header>

      <Suspense
        color={'#301934'}
        loading={true}
        fallback={<Loading aria-label="Loading Spinner" data-testid="loader" />}
      >
        <Outlet />
      </Suspense>
      <Footer>
        © 2022-{new Date().getFullYear()} <strong>MovieRoom</strong>. All rigths
        reserved
      </Footer>
    </>
  );
};

export default SharedLayout;
