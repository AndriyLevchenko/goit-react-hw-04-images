import {useState, useEffect} from 'react';
import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { fetchPixabay } from './js/fetchPixabay';
import { Button } from './Button/Button';
import { LoaderSpiner } from './Loader/Loader';

export const App = () => {
  const [page, setPage] = useState(1);
  const [totalPage, setTotalPage] = useState(1);
  const [searchQueryInput, setSearchQueryInput] = useState('');
  const [hits, setHits] = useState([]);
  const [status, setStatus] = useState('idle');

  useEffect (() => {
      if (searchQueryInput && page) {
        setStatus('pending');
        fetchPixabay(searchQueryInput, page)
        .then(res => {
        const currentHits = res.data.hits.map(({ id, webformatURL, largeImageURL, tags }) => {
          return { id, webformatURL, largeImageURL, tags};
        });
        setHits(prevState => [...prevState, ...currentHits])
        setStatus('resolved')
        setTotalPage(Math.ceil(res.data.totalHits / 12))
        })
      .catch(error => {
        setStatus('rejected');
      });
    }
  }, [searchQueryInput, page]);

  const handleFormSubmit = query => {
    setSearchQueryInput(query)
    setPage(1)
    setHits([])
  };

  const loadMore = () => {
    setPage(state => state + 1);
  };

  return (
    <div>
      <Searchbar onSubmit={handleFormSubmit}/>
      {hits.length > 0 && <ImageGallery images={hits}/>}
      {status === 'pending' && <LoaderSpiner />}
      {hits.length > 0 && status === 'resolved' && page !== totalPage && (
      <Button onClick={loadMore} />)}
    </div>
  )
}

