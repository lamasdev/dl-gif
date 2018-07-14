import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { retrieveGifs } from '../actions';
import langOptions from '../lang-options';

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    this.state = {
      search: '',
      lang: 'en',
      limit: 10,
      showBar: 'd-none d-md-flex',
    };
  }

  componentDidMount() {
    const { lang, limit } = this.state;
    const { retrieveGifs: retrieveGifsList } = this.props;
    retrieveGifsList('goku', lang, limit);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value,
    });
  }

  handleSubmit(event) {
    this.preventDefault = event.preventDefault();
    const { retrieveGifs: retrieveGifsList } = this.props;
    const { search, lang, limit } = this.state;
    retrieveGifsList(search, lang, limit);
  }

  render() {
    const { place } = this.props;
    const {
      search, lang, limit, showBar,
    } = this.state;

    return (
      <nav className={`navbar navbar-dark bg-dark ${place}`}>

        <div className="container">
          <button
            className="navbar-toggler d-md-none mb-2 mb-md-0"
            type="button"
            data-toggle="collapse"
            data-target="#navbarToggleExternalContent"
            onClick={() => {
              this.setState({ showBar: showBar === 'd-flex d-md-flex' ? 'd-none d-md-flex' : 'd-flex d-md-flex' });
            }}
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <form onSubmit={this.handleSubmit} className={`${showBar} form-inline w-100 mb-0`}>
            <input name="search" className="form-control mr-md-2 mb-2 mb-md-0 align-self-center flex-sm-fill col-sm-12 col-md-6" maxLength="50" type="search" placeholder="Search" aria-label="Search" value={search} onChange={this.handleInputChange} required />
            <select name="lang" className="form-control mr-md-2 mb-2 mb-md-0 align-self-center flex-sm-fill col-sm-12 col-md-2" id="exampleFormControlSelect1" value={lang} onChange={this.handleInputChange}>
              {
                langOptions.map(item => (
                  <option key={item.value} value={item.value}>
                    {item.name}
                  </option>
                ))
              }
            </select>
            <input name="limit" className="form-control mr-md-2 mb-2 mb-md-0 align-self-center flex-sm-fill col-sm-12 col-md-1" type="number" max="25" min="1" placeholder="limit" aria-label="limit" value={limit} onChange={this.handleInputChange} required />
            <button className="btn btn-success my-2 my-sm-0 ml-auto" type="submit">
              Search
            </button>
          </form>
        </div>
      </nav>
    );
  }
}

SearchBar.defaultProps = {
  retrieveGifs: () => [],
  place: 'sticky-top',
};

SearchBar.propTypes = {
  retrieveGifs: PropTypes.func,
  place: PropTypes.string,
};

const mapStateToProps = ({ gifs }) => {
  const { error, loading, gifsList } = gifs;

  return { error, loading, gifsList };
};

export default connect(mapStateToProps,
  {
    retrieveGifs,
  })(SearchBar);
