import React from 'react';
import PropTypes from 'prop-types';

const Gif = (props) => {
  const { gif_url: gifUrl, title } = props;
  return (
    <div className="col-xs-12 col-sm-12 col-md-6 col-lg-4 d-flex align-items-center justify-content-center p-3 p-md-2">
      <img src={gifUrl} alt={title} className="img-thumbnail rounded" style={{ objectFit: 'contain' }} />
    </div>
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
