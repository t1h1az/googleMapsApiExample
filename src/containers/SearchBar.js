import React, { Component } from 'react';

export default class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = { term: '' }
    this.onInputChange = this.onInputChange.bind(this);
  }

  onInputChange(event) {
    console.log(event.target.value);
    this.setState({term: event.target.value});

  }

  render() {
    return (
      <form className="input-group">
        <input
          placeholder="Search for city"
          className="form-control"
          value={this.state.term}
          onChange={this.onInputChange}
          />
        <p>{this.state.term}</p>
        <span className="input-group-btn">
          <button type="submit" className="btn btn-secondary">Submit</button>
        </span>
      </form>
    );
  }

}
