import { useEffect, useState, Suspense } from 'react';
import { useLocation, useParams, Outlet } from 'react-router-dom';

import { toast } from 'react-hot-toast';

import * as API from '../../services/api';

import { Container } from '../../components/Container/Container';

import {
  Loading,
  ButtonLink,
  Main,
  MovieCard,
  MovieImage,
  MovieInformation,
  MovieTitle,
  MovieSubTitle,
  Text,
  TextAccent,
  TextScore,
  AdditionalList,
  AdditionalItem,
  AdditionalItemLink,
} from '../MovieDetails/MovieDetails.styled';
import defaultPosterImage from '../../images/poster.jpg';

const MovieDetails = () => {
  const [details, setDetails] = useState([]);
  const { id } = useParams();
  const location = useLocation();
  const from = location.state?.from ?? '/';
  const baseURL = 'https://image.tmdb.org/t/p/w400';

  useEffect(() => {
    const renderMovieDetails = async () => {
      try {
        const results = await API.getDetails(id);
        setDetails(results);
      } catch (error) {
        toast.error('Something went wrong, please try again');
      }
    };
    renderMovieDetails();
  }, [id]);

  if (!details) return;

  const { title, poster_path, release_date, vote_average, overview, genres } =
    details;
  const releaseYear = (release_date || '').slice(0, 4);
  const score = Math.round(vote_average * 10);

  return (
    <Main>
      <section style={{ marginTop: '80px' }}>
        <Container>
          <ButtonLink type="button" to={from}>
            Go back
          </ButtonLink>
          <MovieCard>
            <MovieImage
              src={
                poster_path ? `${baseURL}${poster_path}` : defaultPosterImage
              }
              alt={title}
            />
            <MovieInformation>
              <MovieTitle>
                <span>{title}</span> {releaseYear}
              </MovieTitle>
              <Text>
                <TextAccent>User Score |</TextAccent>
                <TextScore>{score}%</TextScore>
              </Text>
              <MovieSubTitle>Overview</MovieSubTitle>
              <Text>{overview}</Text>
              <MovieSubTitle>Genres</MovieSubTitle>
              <Text>
                {genres && genres.map(genre => genre.name).join(', ')}
              </Text>
              <MovieSubTitle>Additional Information</MovieSubTitle>
              <AdditionalList>
                <AdditionalItem>
                  <AdditionalItemLink to="cast" state={{ from }}>
                    Cast
                  </AdditionalItemLink>
                </AdditionalItem>
                <AdditionalItem>
                  <AdditionalItemLink to="reviews" state={{ from }}>
                    Reviews
                  </AdditionalItemLink>
                </AdditionalItem>
              </AdditionalList>
            </MovieInformation>
          </MovieCard>
          <Suspense
            color={'#301934'}
            loading={true}
            fallback={
              <Loading aria-label="Loading Spinner" data-testid="loader" />
            }
          >
            <Outlet />
          </Suspense>
        </Container>
      </section>
    </Main>
  );
};

export default MovieDetails;
