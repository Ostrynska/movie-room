import styled from 'styled-components';

import { BsSearch } from 'react-icons/bs';

export const SearchForm = styled.form`
  margin-bottom: 40px;
  display: flex;
  align-items: center;
  width: 100%;
  box-shadow: 8px 5px 16px 0 rgba(0, 0, 0, 0.37);
  padding: 20px;
  background-image: linear-gradient(90deg, #333 5%, #181818 95%);
`;

export const SearchButton = styled.button``;

export const Search = styled(BsSearch)`
  color: #e50914;
`;

export const SearchInput = styled.input`
  color: #fff;
  display: inline-block;
  width: 100%;
  font: inherit;
  font-size: 18px;
  &::placeholder {
    font: inherit;
    color: #fff;
    font-weight: 700;
    font-size: 18px;
  }
`;
