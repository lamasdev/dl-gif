import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Gif from './Gif';

export const NoResultsComponent = () => (
  <div className="flex-row align-items-center p-5">
    <h1 className="text-center">
      No Results.
    </h1>
  </div>
);

export const LoadingComponent = () => (
  <div className="flex-row align-items-center p-5">
    <h1 className="text-center">
      Loading...
    </h1>
  </div>
);

export const Gifs = (props) => {
  const { gifsList, loading } = props;
  const gifs = (
    <div className="row justify-content-start w-100">
      {
        gifsList.map(gif => (
          <div key={gif.id} className="col-xs-12 col-sm-12 col-md-6 col-lg-4 d-flex align-items-center justify-content-center p-3 p-md-2">
            <Gif
              gif_url={gif.images.preview_gif.url}
              title={gif.title}
              url={gif.url}
            />
          </div>
        ))
      }
    </div>
  );

  let component = <LoadingComponent />;
  if (!loading) {
    component = gifsList.length > 0 ? gifs : <NoResultsComponent />;
  }

  return (
    <div className="container">
      { component }
    </div>
  );
};

Gifs.defaultProps = {
  gifsList: [],
  loading: null,
};

Gifs.propTypes = {
  gifsList: PropTypes.arrayOf(PropTypes.object),
  loading: PropTypes.bool,
};

const mapStateToProps = ({ gifs }) => {
  const { error, loading, gifsList } = gifs;

  return { error, loading, gifsList };
};

export default connect(mapStateToProps)(Gifs);
