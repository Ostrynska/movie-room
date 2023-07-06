import styled from 'styled-components';
import { Link } from 'react-router-dom';
import BeatLoader from 'react-spinners/BeatLoader';

export const ButtonLink = styled(Link)`
  padding: 0;
  border: none;
  font: inherit;
  color: inherit;
  background-color: transparent;
  cursor: pointer;
  color: white;
  border-radius: 7px;
  padding: 0.375rem;
  height: 1.5rem;
  width: auto;
  font-size: 0.75rem;
  background-color: #301934;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  :hover {
    color: #000;
    background-color: #f5f4fa;
    box-shadow: 0px 3px 1px rgb(0 0 0 / 10%), 0px 1px 2px rgb(0 0 0 / 8%),
      0px 2px 2px rgb(0 0 0 / 12%);
  }
`;

export const Main = styled.main`
  padding: 1rem 2rem;
  display: block;
  min-height: 100vh;
  margin: 0px;
`;

export const MovieCard = styled.div`
  margin-top: 1rem;
  display: flex;
  padding: 3rem 15rem;
  flex-grow: 1;
  justify-content: center;
  box-shadow: rgba(17, 12, 46, 0.15) 0px 48px 100px 0px;
`;

export const MovieImage = styled.img`
  border-radius: 10px;
  width: 350px;
  height: auto;
`;

export const MovieInformation = styled.div`
  display: block;
  margin-left: 3.5rem;
`;

export const MovieTitle = styled.h2`
  font-size: 3.5rem;
  line-height: 1;
  margin-bottom: 2rem;
  color: #301934;
`;

export const MovieSubTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: #301934;
`;

export const Text = styled.p`
  font-size: 1.05rem;
  line-height: 1.5;
  margin-bottom: 1rem;
`;

export const TextAccent = styled.span`
  color: white;
  background-color: #301934;
  text-transform: uppercase;
  padding: 0.3rem;
  border-radius: 10px;
`;

export const TextScore = styled.span`
  margin-left: 10px;
  font-weight: 700;
`;

export const AdditionalList = styled.ul`
  display: flex;
`;

export const AdditionalItem = styled.li`
  width: 80px;
  text-align: center;
  border: 1px solid #301934;
  padding: 0.3rem;
  border-radius: 10px;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  :last-child {
    margin-left: 1rem;
  }
  :hover {
    border: none;
    background-color: #e6e6fa;
    box-shadow: 0px 3px 1px rgb(0 0 0 / 10%), 0px 1px 2px rgb(0 0 0 / 8%),
      0px 2px 2px rgb(0 0 0 / 12%);
  }
`;

export const AdditionalItemLink = styled(Link)`
  color: #301934;
  font-weight: 500;
  :hover {
    font-weight: 600;
    color: #301934;
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
