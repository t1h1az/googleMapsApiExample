import React, { Component } from 'react';
import { connect } from 'react-redux';

class WeatherList extends Component {
  renderWeatherData(cityData){
       return (
         <tr key={cityData.city.name}>
           <td >{cityData.city.name}</td>
         </tr>
       );
  }

  render() {
    return (
      <table className="table table-hover">
        <thead>
          <tr>
            <th>City</th>
            <th>Temperatur</th>
            <th>Pressure</th>
            <th>Humidity</th>
          </tr>
        </thead>
        <tbody>
          {this.props.weather.map(this.renderWeatherData)}
        </tbody>
      </table>
    );
  }
}

function mapStateToProps(state) {
  return {weather: state.weather};
}

export default connect(mapStateToProps)(WeatherList);
