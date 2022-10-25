import React from 'react';
import { Modal } from 'components/Modal/Modal';
import css from 'components/ImageGalleryItem/ImageGalleryItem.module.css'
import PropTypes from 'prop-types';

export class ImageGalleryItem extends React.Component {
  state = {
    isOpen: false,
  };

  toggleModal = () => {
    this.setState(state => ({ isOpen: !state.isOpen }));
  };

  render () {
    const { webformatURL, tags, largeImageURL } = this.props;
    return (
      <div>
        <li className={css.ImageGalleryItem} onClick={this.toggleModal}>
          <img className={css.ImageGalleryItemImage} src={webformatURL} alt={tags} />
        </li>
        {this.state.isOpen && (<Modal largeImageURL={largeImageURL} tags={tags} onClose={this.toggleModal} />)}
      </div>
    
    )
  }
}

ImageGalleryItem.propTypes = {
  webformatURL: PropTypes.string.isRequired,
  largeImageURL: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
};