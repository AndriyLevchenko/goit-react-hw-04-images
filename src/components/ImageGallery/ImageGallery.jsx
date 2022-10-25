import React from 'react';
import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import css from 'components/ImageGallery/ImageGallery.module.css'
import PropTypes from 'prop-types';

export const ImageGallery = ({images}) => {
    return (
        <ul className={css.ImageGallery}>
            {images.map(image => (
                <ImageGalleryItem
                key={image.id}
                webformatURL={image.webformatURL}
                largeImageURL={image.largeImageURL}
                tags={image.tags}
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
        tags: PropTypes.string.isRequired,
      })
    ),
  };