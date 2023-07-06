import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import PropTypes from 'prop-types';
import { toast } from 'react-hot-toast';

import * as API from '../../services/api';

import {
  CastSection,
  CastListWrapp,
  CastListItem,
  CastImageWrapp,
  CastImage,
  TextWrapp,
  Text,
  TextAccent,
} from '../Cast/Cast.styled';
import defaultCastImage from '../../images/cast.jpg';

const Cast = () => {
  const [cast, setCast] = useState([]);
  const { id } = useParams();
  const baseURL = 'https://image.tmdb.org/t/p/w200';

  useEffect(() => {
    const renderMovieCast = async () => {
      try {
        const results = await API.getCast(id);
        setCast(results);
      } catch (error) {
        toast.error('Something went wrong, please try again');
      }
    };
    renderMovieCast();
  }, [id]);

  if (!cast || cast.length === 0) {
    return (
      <CastSection>
        <h2>There are yet no cast information for this movie</h2>
      </CastSection>
    );
  }

  return (
    <CastSection>
      <CastListWrapp>
        {cast.map(({ profile_path, name, character, id }) => {
          return (
            <CastListItem key={id}>
              <CastImageWrapp>
                <CastImage
                  src={
                    profile_path
                      ? `${baseURL}${profile_path}`
                      : defaultCastImage
                  }
                  alt={name}
                />
              </CastImageWrapp>
              <TextWrapp>
                <TextAccent>{name}</TextAccent>
                <Text>Character: {character}</Text>
              </TextWrapp>
            </CastListItem>
          );
        })}
      </CastListWrapp>
    </CastSection>
  );
};

Cast.propTypes = {
  cast: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      character: PropTypes.string.isRequired,
      poster_path: PropTypes.string,
    })
  ),
};

export default Cast;
