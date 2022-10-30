import {useState} from 'react';
import { Modal } from 'components/Modal/Modal';
import css from 'components/ImageGalleryItem/ImageGalleryItem.module.css'
import PropTypes from 'prop-types';

export const ImageGalleryItem = ({ webformatURL, tags, largeImageURL }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleModal = () => {
    setIsOpen(state => !state);
  };

  return (
    <div >
      <li className={css.ImageGalleryItem} onClick={toggleModal}>
        <img className={css.ImageGalleryItemImage} src={webformatURL} alt={tags} />
      </li>
      {isOpen && (<Modal largeImageURL={largeImageURL} tags={tags} onClose={toggleModal} />)}
    </div>
  
  )
}

ImageGalleryItem.propTypes = {
  webformatURL: PropTypes.string.isRequired,
  largeImageURL: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
};