import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

import { toast } from 'react-hot-toast';

import * as API from '../../services/api';

import { Container } from '../../components/Container/Container';
import SearchBox from '../../components/SearchBox/SearchBox';
import MovieList from '../../components/MovieList/MovieList';
import { Main, MoviesSection } from './Movie.styled';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState('');
  const [searchParams, setSearchParams] = useSearchParams();

  const movieSearch = searchParams.get('query') ?? '';

  const handleChange = e => {
    setQuery(e.currentTarget.value.toLowerCase());
  };

  const handleSubmit = e => {
    e.preventDefault();
    setSearchParams({ query: query });
    setQuery('');
  };

  useEffect(() => {
    if (!movieSearch) return;

    async function renderMovie() {
      try {
        const { results } = await API.getSearch(movieSearch);
        setMovies(results);
      } catch (error) {
        toast.error('Something went wrong, please try again');
      }
    }
    renderMovie();
  }, [movieSearch]);

  return (
    <Main>
      <MoviesSection style={{ marginTop: '80px' }}>
        <Container>
          <SearchBox
            value={query}
            onChange={handleChange}
            onSubmit={handleSubmit}
          />
          <MovieList movies={movies} />
        </Container>
      </MoviesSection>
    </Main>
  );
};

export default Movies;
