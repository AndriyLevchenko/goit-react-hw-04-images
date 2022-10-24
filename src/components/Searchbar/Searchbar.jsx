import React from 'react';
import {ImSearch} from 'react-icons/im'
import { Notify } from 'notiflix/build/notiflix-notify-aio';
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
            <header className="searchbar">
            <form className="form" onSubmit={this.handleSubmit}>
                <button type="submit" className="button">
                <ImSearch className="button-label" />
                </button>

                <input
                    onChange={this.handleNameChange}
                    value={this.state.searchQueryInput}
                    className="input"
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