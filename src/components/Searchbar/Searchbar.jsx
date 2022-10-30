import {useState} from 'react';
import {ImSearch} from 'react-icons/im'
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import css from 'components/Searchbar/Searchbar.module.css'
import PropTypes from 'prop-types';

export const Searchbar = ({onSubmit}) => {
    const [searchQueryInput, setSearchQueryInput] = useState('');
    
    const handleSubmit = event => {
        event.preventDefault();
        if (searchQueryInput.trim() === '') {
          return Notify.failure('Enter your query, please');
        }
        onSubmit(searchQueryInput);
        setSearchQueryInput('');
    };

    const handleNameChange = event => {
        setSearchQueryInput(event.currentTarget.value.toLowerCase());
    };

    return (
        <header className={css.Searchbar}>
        <form className={css.SearchForm} onSubmit={handleSubmit}>
            <button type="submit" className={css.SearchFormButton}>
            <ImSearch />
            </button>

            <input
                onChange={handleNameChange}
                value={searchQueryInput}
                className={css.SearchFormInput}
                type="text"
                autoComplete="off"
                autoFocus
                placeholder="Search images and photos"
            />
        </form>
        </header>
    )
}

Searchbar.propTypes = {
    onSubmit: PropTypes.func.isRequired,
};