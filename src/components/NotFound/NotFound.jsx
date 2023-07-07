import { Container } from '../Container/Container';
import { Main, NotFoundTitle } from './NotFound.styled';

const NotFound = () => {
  return (
    <Main>
      <section style={{ marginTop: '80px', height: '83vh' }}>
        <Container>
          <NotFoundTitle>
            The page you were looking for does not exist
          </NotFoundTitle>
        </Container>
      </section>
    </Main>
  );
};

export default NotFound;
