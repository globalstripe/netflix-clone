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
      <div className="container">
       
        <div className="geo_buttons">
                <Link to="/">
                    <button className="geo_button">Back</button>
                </Link>

                <Link to="/BrowserLocation">
                    <button className="geo_button">Reload</button>
                </Link>
              </div>
         <br></br>
         <div className="geo_text">
        <h2>Using geolocation JavaScript API in React</h2>
        <h3><p>Lattitude:   {latitude} </p> </h3>
        <h3><p>Longtitude:   {longtitude} </p></h3>
        <h3><p>Accuracy:   {accuracy} </p></h3>
        <br></br>
        </div>
        <div className="gmap">
        <MapContainer className="gmap" lat={latitude} long={longtitude}></MapContainer>
      </div>
      </div>
 
    )

}

export default BrowserLocation