import React from 'react';
import {ImSearch} from 'react-icons/im'
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import css from 'components/Searchbar/Searchbar.module.css'
import PropTypes from 'prop-types';

export class Searchbar extends React.Component {
    state = {
        searchQueryInput: '',
    };

    handleSubmit = event => {
        event.preventDefault();
        if (this.state.searchQueryInput.trim() === '') {
          return Notify.failure('Enter your query, please');
        }
        this.props.onSubmit(this.state.searchQueryInput);
        this.setState({ searchQueryInput: '' });
    };

    handleNameChange = event => {
        this.setState({ searchQueryInput: event.currentTarget.value.toLowerCase() });
    };

    render() {
        return (
            <header className={css.Searchbar}>
            <form className={css.SearchForm} onSubmit={this.handleSubmit}>
                <button type="submit" className={css.SearchFormButton}>
                <ImSearch />
                </button>

                <input
                    onChange={this.handleNameChange}
                    value={this.state.searchQueryInput}
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
}

Searchbar.propTypes = {
    onSubmit: PropTypes.func.isRequired,
};