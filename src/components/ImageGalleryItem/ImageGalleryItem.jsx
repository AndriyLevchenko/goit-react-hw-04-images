import React from 'react';
import PropTypes from 'prop-types';

export class ImageGalleryItem extends React.Component {

  render () {
    const { webformatURL } = this.props;
    return (
    <li className="gallery-item">
      <img src={webformatURL} alt="" />
    </li>
    )
  }
}

ImageGalleryItem.propTypes = {
  webformatURL: PropTypes.string.isRequired,
  largeImageURL: PropTypes.string.isRequired,
};