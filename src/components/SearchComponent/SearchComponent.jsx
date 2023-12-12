import { Form, Input, Button } from './SearchComponent.styled';
import { useSearchParams } from 'react-router-dom';
import { useState } from 'react';

export const SearchComponent = ({ onSearch }) => {
  const [searchParams, updateSearchParams] = useSearchParams();
  const [searchValue, updateSearchValue] = useState('');

  const handleFormSubmit = e => {
    e.preventDefault();
    console.log(searchParams);
    updateSearchParams({ query: searchValue });
    if (searchValue.trim() === '') {
      return;
    }
    onSearch(searchValue);
  };

  const handleInputChange = e => {
    updateSearchValue(e.currentTarget.value);
  };

  return (
    <Form onSubmit={handleFormSubmit}>
      <Input
        type="text"
        autoComplete="off"
        autoFocus
        value={searchValue}
        onChange={handleInputChange}
      ></Input>
      <Button type="submit">Search</Button>
    </Form>
  );
};
export default SearchComponent;