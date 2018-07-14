import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Gif from './Gif';

class Gifs extends Component {
  componentDidMount() {
    return true;
  }

  render() {
    const { gifsList } = this.props;
    return (
      <div className="container">
        <div className="row justify-content-start w-100">
          {
            gifsList.map(gif => (
              <Gif
                key={gif.id}
                gif_url={gif.images.preview_gif.url}
                title={gif.title}
                url={gif.url}
              />
            ))
          }
        </div>
      </div>
    );
  }
}

Gifs.defaultProps = {
  gifsList: [],
};

Gifs.propTypes = {
  gifsList: PropTypes.arrayOf(PropTypes.object),
};

const mapStateToProps = ({ gifs }) => {
  const { error, loading, gifsList } = gifs;

  return { error, loading, gifsList };
};

export default connect(mapStateToProps)(Gifs);
