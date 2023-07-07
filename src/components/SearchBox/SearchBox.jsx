import PropTypes from 'prop-types';

import {
  SearchForm,
  SearchButton,
  SearchInput,
  Search,
} from './SearchBox.styled';

const SearchBox = ({ value, onChange, onSubmit }) => {
  return (
    <SearchForm onSubmit={onSubmit}>
      <SearchInput
        type="text"
        name="searchName"
        value={value}
        onChange={onChange}
        autocomplete="off"
        autoFocus
        placeholder="Watch all you want..."
      />
      <SearchButton type="submit">
        <Search size={20} />
      </SearchButton>
    </SearchForm>
  );
};

SearchBox.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default SearchBox;
