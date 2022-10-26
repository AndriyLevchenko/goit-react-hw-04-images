import React from "react";
import css from 'components/Modal/Modal.module.css'
import PropTypes from 'prop-types';

export class Modal extends React.Component {
  componentDidMount = () => {
    document.addEventListener('keydown', this.onKeydown);
  };
  componentWillUnmount = () => {
    document.removeEventListener('keydown', this.onKeydown);
  };
  onKeydown = e => {
    if (e.code === 'Escape') {
      this.props.onClose();
    }
  };
  onClose = e => {
    if (e.target === e.currentTarget) {
      this.props.onClose();
    }
  };
  render () {
    const {largeImageURL, tags} = this.props;
    return (
      <div className={css.Overlay} onClick={this.onClose}>
        <div className={css.Modal}>
          <img src={largeImageURL} alt={tags} />
        </div>
      </div>
    )
  }
}

Modal.propTypes = {
  largeImageURL: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
}