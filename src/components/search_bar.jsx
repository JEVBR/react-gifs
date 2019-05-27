// search_bar.jsx
import React, { Component } from 'react';

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      term: ""
    };
  }

  handleUpdate = (event) => {
    console.log(event.target.value);
    this.props.searchfunction(event.target.value);
    this.setState({
      term: event.target.value
    })
  }

  render() {
    return (
      <input
        value = {this.state.term}
        type="text"
        className="form-control form-search"
        onChange={this.handleUpdate}
      />
    );
  }
}

export default SearchBar;
