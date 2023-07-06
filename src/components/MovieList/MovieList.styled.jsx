import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const MovieListWrapp = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 33px;
  align-items: stretch;
  justify-content: start;
`;

export const MovieListItem = styled.li`
  max-width: 200px;
  transition: transform 0.15s ease-in-out;
  :hover {
    transform: scale(1.05);
    color: #301934;
  }
`;

export const MovieListLink = styled(Link)``;

export const MovieTitle = styled.h2`
  text-transform: uppercase;
  font-size: 14px;
  color: black;
  :hover {
    color: #301934;
  }
`;

export const MoviePoster = styled.img`
  width: 100%;
  height: auto;
  border: 1px solid #797979;
  border-radius: 5px;
  margin-bottom: 5px;
  display: block;
`;
