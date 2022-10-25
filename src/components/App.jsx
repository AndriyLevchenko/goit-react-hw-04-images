import React from 'react';
import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { fetchPixabay } from './Pixabay/fetchPixabay';
import { Button } from './Button/Button';
// import css from 'components/App.module.css';

export class App extends React.Component {
  state = {
    page: 1,
    totalPage: 1,
    searchQueryInput: '',
    hits: [],
    status: 'idle',
  }
  componentDidUpdate = (prevProps, prevState) => {
    const { searchQueryInput, page } = this.state;
    if (prevState.searchQueryInput !== searchQueryInput || prevState.page !== page) {
      this.setState({ status: 'pending' });
    
      fetchPixabay(searchQueryInput, page)
      .then(res => {
      const currentHits = res.data.hits.map(({ id, webformatURL, largeImageURL, tags }) => {
        return { id, webformatURL, largeImageURL, tags};
      });
      this.setState(prevState => ({
        hits: [...prevState.hits, ...currentHits],
        status: 'resolved',
        totalPages: Math.ceil(res.data.totalHits / 12),
      }));
    })
    .catch(error => {
      this.setState({ status: 'rejected' });
    });
  }}

  handleFormSubmit = query => {
    this.setState({ searchQueryInput: query, page: 1, hits: [] });
  };

  loadMore = () => {
    this.setState(state => ({ page: state.page + 1 }));
  };

  render() {
    const {status, hits, page, totalPages} = this.state;
    return (
      <div>
        <Searchbar onSubmit={this.handleFormSubmit}/>
        {hits.length > 0 && <ImageGallery images={hits}/>}
        {hits.length > 0 && status === 'resolved' && page !== totalPages && (
        <Button onClick={this.loadMore} />)}
      </div>
    )
  }
}

