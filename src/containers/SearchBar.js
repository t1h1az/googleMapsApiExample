import React, { Component } from 'react';

export default class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = { term: '' }
    this.onInputChange = this.onInputChange.bind(this);
  }

  onInputChange(event) {
    this.setState({term: event.target.value});

  }
  onFormSubmit(event) {
    //blocks default behaviour of form
    // if you press enter on your keyboard
    // the form is not submitted
    event.preventDefault();
  }
  onButtonSubmit(event) {
    
  }

  render() {
    return (
      <form
        onSubmit={this.onFormSubmit}
        className="input-group">
        <input
          placeholder="Search for city"
          className="form-control"
          value={this.state.term}
          onChange={this.onInputChange}
          />
        <span className="input-group-btn">
          <button
            type="submit"
            className="btn btn-secondary"
            onSubmit={this.onButtonSubmit}>Submit</button>
        </span>
      </form>
    );
  }

}
