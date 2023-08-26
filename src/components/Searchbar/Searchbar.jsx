import toast, { Toaster } from 'react-hot-toast';
import {
  StyledSearchButton,
  StyledSearchForm,
  StyledSearchbar,
  StyledSerchFormInput,
} from './Searchbar.styled';

export const Searchbar = ({ onSubmit }) => {
  return (
    <StyledSearchbar>
      <StyledSearchForm
        onSubmit={event => {
          event.preventDefault();

          if (event.target.elements.query.value.trim() === '') {
            toast.error('Input something please ...');
            return;
          }

          onSubmit(event.target.elements.query.value);
          event.target.reset();
        }}
      >
        <StyledSearchButton type="submit">
          <span>Search</span>
        </StyledSearchButton>
        <Toaster position="top-right" reverseOrder={false} />
        <StyledSerchFormInput
          type="text"
          name="query"
          placeholder="Search images and photos"
        />
      </StyledSearchForm>
    </StyledSearchbar>
  );
};
