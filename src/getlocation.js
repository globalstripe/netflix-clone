import React, {useState, useEffect} from "react";
import MapContainer from './googlemaps.js'
import { Link } from 'react-router-dom';

import './geolocation.css'

function BrowserLocation() {

    const [latitude, setLatitude] = useState([55.24]);
    const [longtitude, setLongtitude] = useState([ -1.76]);
    const [accuracy, setAccuracy] = useState(['Checking ...']);

    useEffect(() => { 
      console.log("UseEffect")

      var options = {
        enableHighAccuracy: true,
        timeout: 15000,
        maximumAge: 0
      };

      function success(pos) {

        var crd = pos.coords;
      
        console.log('Your current position is:');
        console.log(`Latitude : ${crd.latitude}`);
        setLatitude(crd.latitude)
        setLongtitude(crd.longitude)
        setAccuracy(crd.accuracy)
        console.log(`Longitude: ${crd.longitude}`);
        console.log(`More or less ${crd.accuracy} meters.`);
      }
  
      function error(err) {
        console.warn(`ERROR(${err.code}): ${err.message}`);
        setLatitude(55.24)
        setLongtitude( -1.76)
        setAccuracy('Timeout....')
      }

    navigator.geolocation.getCurrentPosition(success, error, options)
    
    }, []);


    return (
      <div className="profile">
        <Link to="/"><h1>Back</h1></Link><a href='/BrowserLocation'><h1>Reload</h1></a>
        <h1>Using geolocation JavaScript API in React</h1>
        <h1><p>Lattitude:   {latitude} </p> </h1>
        <h1><p>Longtitude:   {longtitude} </p></h1>
        <h1><p>Accuracy:   {accuracy} </p></h1>
        <br></br>
        <MapContainer lat={latitude} long={longtitude}></MapContainer>
      </div>
    )

}

export default BrowserLocation