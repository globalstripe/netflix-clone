
import React, {Component} from "react";
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
 
export class MapContainer extends Component {

  render() {
    return (
      <Map google={this.props.google} zoom={14}
      initialCenter={{
        lat: this.props.lat,
        lng: this.props.long
        }}>
 
        <Marker onClick={this.onMarkerClick}
                name={'Current location'} />

        <InfoWindow onClose={this.onInfoWindowClose}>
            <div><h1>Clos</h1>
            </div>
        </InfoWindow>
        {console.log('MAPS LAT',this.props.lat)}
        {console.log('MAPS LON',this.props.long)}
      </Map>
    );
  }
}
 
export default GoogleApiWrapper({
  apiKey: 'AIzaSyA-6fPhj7m-tLVvPoRLXF8TfnwoljJmOXI'
})(MapContainer)