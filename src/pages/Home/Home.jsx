import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import { toast } from 'react-hot-toast';

import * as API from '../../services/api';

import { Container } from '../../components/Container/Container';
import MovieList from '../../components/MovieList/MovieList';
import { Main, SectionTitle, SectionText, Title } from '../Home/Home.styled';

const Home = () => {
  const [trending, setTrending] = useState([]);
  const location = useLocation();

  useEffect(() => {
    renderTrending();
  }, []);

  const renderTrending = async () => {
    try {
      const { results } = await API.getTrending();
      setTrending(results);
    } catch (error) {
      toast.error('Something went wrong, please try again');
    }
  };

  return (
    <Main>
      <section style={{ marginTop: '80px' }}>
        <Container>
          <SectionTitle>Movies</SectionTitle>
          <SectionText>
            Movies move us like nothing else can, whether they’re scary, funny,
            dramatic, romantic or anywhere in-between. So many titles, so much
            to experience.
          </SectionText>
          <Title>Popular on Movie Room</Title>
          {trending?.length > 0 && (
            <MovieList movies={trending} location={location} />
          )}
        </Container>
      </section>
    </Main>
  );
};

export default Home;
