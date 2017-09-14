import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Sparklines, SparklinesLine } from 'react-sparklines';
import Chart from '../components/chart';

class WeatherList extends Component {
  constructor(props) {
    super(props);
    this.humidityMedian = this.humidityMedian.bind(this);
    this.renderWeatherData = this.renderWeatherData.bind(this);

  }

  renderWeatherData(cityData){
    const name = cityData.city.name;
    const temps = cityData.list.map((weather) => weather.main.temp);

       return (
         <tr key={name}>
           <td>{name}</td>
           <td>
              <Chart data={temps} />
           </td>
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
