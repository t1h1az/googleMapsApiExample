import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {  fetchWeather } from '../actions/index';



class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = { term: '' }
    this.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  onInputChange(event) {
    this.setState({term: event.target.value});
  }
  onFormSubmit(event) {
    //blocks default behaviour of form
    // if you press enter on your keyboard
    // the form is not submitted
    event.preventDefault();
    this.props.fetchWeather(this.state.term);
    this.setState({term: ''});
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
            >Search</button>
        </span>
      </form>
    );
  }
}


//  hook up actioncreater to container
// call to bindActionCreators
// action creator flows through middleware to reducer
function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchWeather },dispatch);
}

// null container doesnt care about state
// map our dispatch to the props of our container
// first we bind fetchWeather to dispatch and
// by mapping dispatch to props we can access the function fetchWeather
// over our this.props.fetchWeather
export default connect(null, mapDispatchToProps)(SearchBar);
