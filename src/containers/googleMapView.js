import React, { Component } from 'react';

class GoogleMapView extends Component {
  componentDidMount() {
    new google.maps.Map(this.refs.map, {
      zoom: 12,
      center:  {
        lat: this.props.lat,
        lng: this.props.lon
      }
    });
  }

  render() {
    //with this.refs.map ...it is refs not ref...gives you access to
    // the referenced jsx element or html element
    return <div ref="map" />;
  }
}

export default GoogleMapView;
