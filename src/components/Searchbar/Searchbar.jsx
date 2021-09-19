import {
  SearchbarHeader,
  SearchForm,
  SearchFormButton,
  SearchFormButtonLabel,
  SearchFormInput,
} from "../Searchbar/Searchbar.styled";

export const Searchbar = ({ onSearch }) => {
  
  const handleSearch = (e) => {
    e.preventDefault();
    onSearch(e.target.elements.imageName.value);
    e.target.elements.imageName.value=''
  };

  return (
    <SearchbarHeader>
      <SearchForm onSubmit={handleSearch}>
        <SearchFormButton>
          <SearchFormButtonLabel>Search</SearchFormButtonLabel>
        </SearchFormButton>

        <SearchFormInput
          type="text"
          name="imageName"
          autocomplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
      </SearchForm>
    </SearchbarHeader>
  );
};
