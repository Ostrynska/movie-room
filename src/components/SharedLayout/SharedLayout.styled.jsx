import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import BeatLoader from 'react-spinners/BeatLoader';

export const Header = styled.header`
  left: 0;
  right: 0;
  top: 0;
  z-index: 20;
  background-color: #000;
  display: flex;
  justify-content: space-between;
  padding: 16px 2%;
  position: fixed;
  nav {
    display: flex;
  }
`;

export const Link = styled(NavLink)`
  border: 1px solid #888;
  border-radius: 2px;
  color: #fff;
  font-weight: 400;
  white-space: nowrap;
  font-size: 14px;
  margin: 0 0 0 8px;
  padding: 9px 20px;
  &.active {
    min-height: 0;
    font-size: 14px;
    margin: 0 0 0 8px;
    padding: 9px 20px;
    background-color: #e50914;
    background-image: linear-gradient(180deg, #e50914, #db0510);
    box-shadow: 0 1px 0 rgba(0, 0, 0, 0.45);
    color: #fff;

    border-radius: 2px;
    border: none;
    display: inline-block;
    font-weight: 400;
    text-align: center;
    &:hover {
      background: #f40612;
      box-shadow: 0 1px 0 rgba(0, 0, 0, 0.45);
    }
  }
`;

export const BtnWrap = styled.div`
  display: flex;
  margin-left: auto;
  gap: 8px;
`;

export const Loading = styled(BeatLoader)`
  margin: 50vh;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  size: 150px;
`;

export const Footer = styled.footer`
  background-color: #000;
  color: #fff;
  width: 100%;
  padding: 10px 0;
  text-align: center;
  font-size: 12px;
  font-weight: 400;
  line-height: 1.5;
`;
