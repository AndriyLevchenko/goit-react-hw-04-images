import {useEffect} from "react";
import css from 'components/Modal/Modal.module.css'
import PropTypes from 'prop-types';

export const Modal = ({largeImageURL, tags, onClose}) => {
  useEffect(() => {
    document.addEventListener('keydown', onKeydown);
    return () => {
      document.removeEventListener('keydown', onKeydown);
    }
  })
  const onKeydown = e => {
    if (e.code === 'Escape') {
      onClose();
    }
  };
  const onCloseModal = e => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };
  return (
    <div className={css.Overlay} onClick={onCloseModal}>
      <div className={css.Modal}>
        <img src={largeImageURL} alt={tags} />
      </div>
    </div>
  )
}

Modal.propTypes = {
  largeImageURL: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
}