import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import PropTypes from 'prop-types';
import { toast } from 'react-hot-toast';

import * as API from '../../services/api';

import {
  ReviewsSection,
  ReviewsListWrapp,
  ReviewsListItem,
  ReviewsAuthor,
  Text,
} from './Reviews.styled';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const renderMovieReviews = async () => {
      try {
        const results = await API.getReviews(id);
        setReviews(results);
      } catch (error) {
        toast.error('Something went wrong, please try again');
      }
    };
    renderMovieReviews();
  }, [id]);

  if (!reviews || reviews.length === 0) {
    return (
      <ReviewsSection>
        <h2>There are yet no reviews for this movie</h2>
      </ReviewsSection>
    );
  }

  return (
    <ReviewsSection>
      <ReviewsListWrapp>
        {reviews.map(({ author, content, id }) => {
          return (
            <ReviewsListItem key={id}>
              <ReviewsAuthor>@{author}</ReviewsAuthor>
              <Text>{content}</Text>
            </ReviewsListItem>
          );
        })}
      </ReviewsListWrapp>
    </ReviewsSection>
  );
};

Reviews.propTypes = {
  reviews: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      author: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
    })
  ),
};

export default Reviews;
