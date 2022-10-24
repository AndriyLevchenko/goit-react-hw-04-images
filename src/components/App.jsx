import React from 'react';
import axios from 'axios';
import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
// import PropTypes from 'prop-types';

const API_KEY = `29781488-c1f8f32b8cf0d06ff300c84b0`;
const OPTIONS = `image_type=photo&orientation=horizontal&safesearch=true&lang=en&lang=uk&per_page=12`;

export class App extends React.Component {
  state = {
    page: 1,
    totalPage: null,
    searchQueryInput: '',
    hits: [],
    status: 'idle',
  }
  componentDidMount = (prevProps, prevState) => {
    const { searchQueryInput, page } = this.state;
    axios.get(`https://pixabay.com/api/?key=${API_KEY}&q=${searchQueryInput}&${OPTIONS}&page=${page}`)
    .then(res => {
      const hits = res.data;
      this.setState({ hits });
      console.log(hits)
    })
  }

  handleFormSubmit = searchQueryInput => {
    this.setState({ searchQueryInput });
  };


  render() {
    return (

      <div>
        <Searchbar onSubmit={this.handleFormSubmit}/>
        <ImageGallery images={this.state.hits}/>
      </div>
    )
  }
}

