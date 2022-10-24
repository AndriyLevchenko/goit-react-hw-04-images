import React from 'react';
import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import PropTypes from 'prop-types';

export const ImageGallery = ({images}) => {
    return (
        <ul className="gallery">
            {images.map(image => (
                <ImageGalleryItem
                key={image.id}
                webformatURL={image.webformatURL}
                largeImageURL={image.largeImageURL}
                />
            ))}
        </ul>
    )
}

ImageGallery.propTypes = {
    results: PropTypes.arrayOf(
      PropTypes.exact({
        id: PropTypes.number.isRequired,
        webformatURL: PropTypes.string.isRequired,
        largeImageURL: PropTypes.string.isRequired,
      })
    ),
  };