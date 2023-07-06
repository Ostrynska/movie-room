import styled from 'styled-components';

export const SearchForm = styled.form`
  margin-bottom: 40px;
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 600px;
  border-bottom: 1px solid #e6e6fa;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 2px 0px;
  border-radius: 3px;
  overflow: hidden;
`;

export const SearchButton = styled.button`
  display: inline-block;
  width: 48px;
  height: 48px;
  border: 0;
  opacity: 0.6;
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  outline: none;
  &:hover {
    opacity: 1;
  }
`;

export const SearchInput = styled.input`
  display: inline-block;
  width: 100%;
  font: inherit;
  font-size: 14px;
  border: none;
  outline: none;
  padding-left: 4px;
  padding-right: 4px;
  &::placeholder {
    font: inherit;
    font-size: 18px;
  }
`;
