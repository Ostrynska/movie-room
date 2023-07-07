import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const MovieListWrapp = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 15px 28px;
  align-items: stretch;
  justify-content: center;
`;

export const MovieListItem = styled.li`
  max-width: 148px;
  transition: transform 0.15s ease-in-out;
  :hover {
    transform: scale(1.05);
    color: #e50914;
  }
`;

export const MovieListLink = styled(Link)`
  color: #fff;
  :hover {
    color: #e50914;
  }
`;

export const MovieTitle = styled.h2`
  font-size: 14px;
`;

export const MoviePoster = styled.img`
  width: 100%;
  height: auto;
  border: 1px solid #797979;
  border-radius: 5px;
  margin-bottom: 10px;
  display: block;
`;
