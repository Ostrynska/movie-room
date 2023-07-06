import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import { Container, Logo, Header, Link, Loading } from './SharedLayout.styled';

const SharedLayout = () => {
  return (
    <Container>
      <Header>
        <nav>
          <Link to="/" end>
            Home
          </Link>
          <Link to="/movies">Movies</Link>
        </nav>
        <Logo>
          <span role="img" aria-label="movie icon">
            🎬
          </span>
          MOVIE ROOM
        </Logo>
      </Header>
      <Suspense
        color={'#301934'}
        loading={true}
        fallback={<Loading aria-label="Loading Spinner" data-testid="loader" />}
      >
        <Outlet />
      </Suspense>
    </Container>
  );
};

export default SharedLayout;
