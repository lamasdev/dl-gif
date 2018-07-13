import React, { Component } from 'react';

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.handleInputChange = this.handleInputChange.bind(this);

    this.state = {
      search: '',
      lang: 'EN',
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
        <form className={`${showBar} form-inline w-100 mb-0`}>
          <input name="search" className="form-control mr-md-2 mb-2 mb-md-0 align-self-center flex-sm-fill col-sm-12 col-md-6" maxLength="50" type="search" placeholder="Search" aria-label="Search" value={search} onChange={this.handleInputChange} />
          <input name="limit" className="form-control mr-md-2 mb-2 mb-md-0 align-self-center flex-sm-fill col-sm-12 col-md-1" type="number" max="50" min="1" placeholder="limit" aria-label="limit" value={limit} onChange={this.handleInputChange} />
          <select name="lang" className="form-control mr-md-2 mb-2 mb-md-0 align-self-center flex-sm-fill col-sm-12 col-md-1" id="exampleFormControlSelect1" value={lang} onChange={this.handleInputChange}>
            <option value="EN">
              EN
            </option>
            <option value="ES">
              ES
            </option>
          </select>
          <button className="btn btn-outline-success my-2 my-sm-0 ml-auto" type="submit">
            Search
          </button>
        </form>
      </nav>
    );
  }
}

export default SearchBar;
