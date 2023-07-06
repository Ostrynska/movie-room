import { useLocation } from 'react-router-dom';

import PropTypes from 'prop-types';

import {
  MovieListWrapp,
  MovieListItem,
  MovieListLink,
  MoviePoster,
  MovieTitle,
} from '../MovieList/MovieList.styled';
import defaultPosterImage from '../../images/poster.jpg';

const MovieList = ({ movies }) => {
  const location = useLocation();
  const baseURL = 'https://image.tmdb.org/t/p/w200';

  return (
    <MovieListWrapp>
      {movies.map(({ title, id, poster_path }) => (
        <MovieListItem key={id}>
          <MovieListLink to={`/movies/${id}`} state={{ from: location }}>
            <MoviePoster
              src={
                poster_path ? `${baseURL}${poster_path}` : defaultPosterImage
              }
              alt={title}
            />
            <MovieTitle>{title}</MovieTitle>
          </MovieListLink>
        </MovieListItem>
      ))}
    </MovieListWrapp>
  );
};

MovieList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      poster_path: PropTypes.string,
    })
  ),
};

export default MovieList;
