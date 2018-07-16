import React from 'react';
import PropTypes from 'prop-types';

const Gif = (props) => {
  const { gif_url: gifUrl, title } = props;
  return (
    <img src={gifUrl} alt={title} className="img-thumbnail rounded" style={{ objectFit: 'contain' }} />
  );
};

Gif.defaultProps = {
  gif_url: '/images/notfound.png',
  title: 'Gif not found',
};

Gif.propTypes = {
  gif_url: PropTypes.string,
  title: PropTypes.string,
};

export default Gif;
