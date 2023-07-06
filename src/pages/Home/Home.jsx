import { useState, useEffect } from 'react';

import { toast } from 'react-hot-toast';

import * as API from '../../services/api';

import MovieList from '../../components/MovieList/MovieList';
import { Main, SectionTitle } from '../Home/Home.styled';

const Home = () => {
  const [trending, setTrending] = useState([]);

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
      <SectionTitle>Trending movies</SectionTitle>
      <MovieList movies={trending} />
    </Main>
  );
};

export default Home;
