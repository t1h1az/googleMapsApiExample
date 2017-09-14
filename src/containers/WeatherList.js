import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Sparklines, SparklinesLine } from 'react-sparklines';
import Chart from '../components/chart';
import GoogleMapView from './googleMapView';

class WeatherList extends Component {
  constructor(props) {
    super(props);
    this.humidityMedian = this.humidityMedian.bind(this);
    this.renderWeatherData = this.renderWeatherData.bind(this);

  }

  renderWeatherData(cityData){
    const name = cityData.city.name;
    const temps = _.map(cityData.list.map((weather) => weather.main.temp), temp => temp - 273);
    const pressures = cityData.list.map((weather) => weather.main.pressure);
    const wind = cityData.list.map((weather) => weather.wind.speed);
    const { lat, lon } = cityData.city.coord;
    console.log(lat);
       return (
         <tr key={name}>
           <td><GoogleMapView lat={lat} lon={lon} /></td>
           <td><Chart data={temps} color="red" units="°C"/></td>
           <td><Chart data={pressures} color="blue" units="hPa"/></td>
           <td><Chart data={wind} color="green" units="mph"/></td>
         </tr>
       );
  }

  humidityMedian(cityData) {
    console.log(cityData);
    let cummulatedHumidity = 0;
    cityData.list.map((item) => {
      cummulatedHumidity = (cummulatedHumidity + item.main.humidity);
    });
    return Math.round(cummulatedHumidity/cityData.list.length*100)/100;
  }

  temperatureMedian(cityData) {
    console.log(cityData);
    let cummulatedTemperature = 0;
    cityData.list.map((item) => {
      cummulatedTemperature = (cummulatedTemperature + item.main.temp);
    });
    return Math.round(cummulatedTemperature/cityData.list.length*100)/100;
  }


    pressureMedian(cityData) {
      console.log(cityData);
      let cummuluatedPressure = 0;
      cityData.list.map((item) => {
        cummuluatedPressure = (cummuluatedPressure + item.main.pressure);
      });
      return Math.round(cummuluatedPressure/cityData.list.length*100)/100;
    }


  fetchTemperatur(cityData){
    cityData.list.map((item) => {
      cummulatedHumidity = (cummulatedHumidity + item.main.humidity);
    });
  }


  render() {
    return (
      <table className="table table-hover">
        <thead>
          <tr>
            <th>City</th>
            <th>Temperatur (°C)</th>
            <th>Pressure (hPa)</th>
            <th>Windspeed (mph)</th>
            <th>Humidity (%)</th>
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
