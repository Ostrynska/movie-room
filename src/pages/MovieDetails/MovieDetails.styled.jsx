import styled from 'styled-components';
import { NavLink, Link } from 'react-router-dom';
import BeatLoader from 'react-spinners/BeatLoader';

export const ButtonLink = styled(Link)`
  min-height: 0;
  font-size: 14px;
  padding: 9px 20px;
  background-color: #e50914;
  background-image: linear-gradient(180deg, #e50914, #db0510);
  color: #fff;

  border-radius: 2px;
  border: none;
  display: inline-block;
  font-weight: 400;
  text-align: center;

  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover {
    background: #f40612;
    box-shadow: 0 1px 0 rgba(0, 0, 0, 0.45);
  }
`;

export const Main = styled.main`
  padding: 1rem 2rem;
  display: block;
  min-height: 100vh;
  margin: 0px;
`;

export const MovieCard = styled.div`
  display: flex;
  padding: 2rem 0 3rem 0;
`;

export const MovieImage = styled.img`
  border-radius: 2px;
  ${
    '' /* width: 415px;
  height: auto; */
  }
`;

export const MovieInformation = styled.div`
  margin-left: 5.5rem;
  max-width: 900px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const MovieTitle = styled.h2`
  font-size: 2.5rem;
  line-height: 1;
  margin-bottom: 2rem;
  color: #fff;
  span {
    color: #e50914;
    font-size: 3rem;
  }
`;

export const MovieSubTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: #fff;
`;

export const Text = styled.p`
  font-size: 1.05rem;
  line-height: 1.5;
  margin-bottom: 1rem;
  color: #a3a3a3;
`;

export const TextAccent = styled.span`
  color: #a3a3a3;
`;

export const TextScore = styled.span`
  margin-left: 5px;
  color: #e50914;
`;

export const AdditionalList = styled.ul`
  display: flex;
`;

export const AdditionalItem = styled.li`
  margin-top: 10px;
  &:last-child {
    margin-left: 1rem;
  }
`;

export const AdditionalItemLink = styled(NavLink)`
  color: #000;
  border: 1px solid #888;
  border-radius: 2px;
  color: #fff;
  font-weight: 400;
  padding: 9px 20px;

  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover {
    border: none;
    background-color: #f40612;
  }
  &.active {
    border: none;
    background-color: #f40612;
  }
`;

export const Loading = styled(BeatLoader)`
  margin: 50vh;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  size: 150px;
`;
