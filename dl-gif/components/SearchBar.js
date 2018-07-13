import React, { Component } from 'react';
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
    // const props = this.props;
    const { retrieveGifs } = this.props;
    const { search, lang, limit } = this.state;
    console.log(search, lang, limit);
    retrieveGifs(search, lang, limit);
  }

  render() {
    const {
      search, lang, limit, showBar,
    } = this.state;

    return (
      <nav className="navbar navbar-dark bg-dark sticky-top">
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
          <input name="search" className="form-control mr-md-2 mb-2 mb-md-0 align-self-center flex-sm-fill col-sm-12 col-md-6" maxLength="50" type="search" placeholder="Search" aria-label="Search" value={search} onChange={this.handleInputChange} />
          <select name="lang" className="form-control mr-md-2 mb-2 mb-md-0 align-self-center flex-sm-fill col-sm-12 col-md-2" id="exampleFormControlSelect1" value={lang} onChange={this.handleInputChange}>
            {
              langOptions.map(item => (
                <option key={item.value} value={item.value}>
                  {item.name}
                </option>
              ))
            }
          </select>
          <input name="limit" className="form-control mr-md-2 mb-2 mb-md-0 align-self-center flex-sm-fill col-sm-12 col-md-1" type="number" max="25" min="1" placeholder="limit" aria-label="limit" value={limit} onChange={this.handleInputChange} />
          <button className="btn btn-outline-success my-2 my-sm-0 ml-auto" type="submit">
            Search
          </button>
        </form>
      </nav>
    );
  }
}

const mapStateToProps = ({ gifs }) => {
  const { error, loading, gifsList } = gifs;

  return { error, loading, gifsList };
};

export default connect(mapStateToProps,
  {
    retrieveGifs,
  })(SearchBar);
