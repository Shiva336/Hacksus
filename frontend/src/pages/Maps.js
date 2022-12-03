import React from "react";
import "./Home.css";
import axios from "axios";
import * as Yup from "yup";

import {useState, useEffect} from "react";
import {useNavigate} from "react-router-dom";

function Server() {
    const Mtruck = [];
    const Gtruck = [];
    const Ptruck = [];

    const [listOfWastes, setListOfWastes] = useState([]);
    let navigate= useNavigate();

    useEffect(() => {
      axios.get("http://localhost:3001/wastes/maps").then( (response) => {
        setListOfWastes(response.data);
      });
    }, []);

    {listOfWastes.map((value,key)=> {
      if(value.m > 0)
        Mtruck.push(value.address);
      if(value.p > 0)
        Ptruck.push(value.address);
      if(value.g > 0)
        Gtruck.push(value.address);
   })} 

  //  console.log(Mtruck);
  //  console.log(Gtruck);
  //  console.log(Ptruck);

  var waypoints = []
    var map

    function optimize() {
      tt.services.calculateRoute({
        key: 'G3n7k1qeeVQBZyftR0uSratebx0VYCQz', // Get one for free at developer.tomtom.com
        locations: waypoints,
        routeType: 'shortest',
        computeBestOrder: true
      })
        .then((result) => {
          console.log(result)
          const summary = document.getElementById('summary-optimize')
          summary.innerHTML = 'Distance optimize ' + result.routes[0].summary.lengthInMeters + ' mts'

          const geojson = result.toGeoJson()
          if (map.getLayer('optimized')) {
            map.removeLayer('optimized')
            map.removeSource('optimized')
          }
          map.addLayer({
            'id': 'optimized',
            'type': 'line',
            'source': {
              'type': 'geojson',
              'data': geojson
            },
            'paint': {
              'line-color': 'green',
              'line-width': 8
            }
          });
        })
    }

    function showMap(center) {
      map = tt.map({
        key: 'G3n7k1qeeVQBZyftR0uSratebx0VYCQz',  // Get on for free at developer.tomtom.com
        container: 'map',
        center: center,
        zoom: 13,
        pitch: 25
      });

      map.on('click', function (event) {
        const coord = event.lngLat
        console.log(coord);
        waypoints.push(coord)
        new tt.Marker().setLngLat(coord).addTo(map)
      })
    }

    function route() {
      tt.services.calculateRoute({
        key: 'G3n7k1qeeVQBZyftR0uSratebx0VYCQz', // Get on for free at developer.tomtom.com
        routeType: 'shortest',
        locations: waypoints
      })
        .then((result) => {
          console.log(result)
          const summary = document.getElementById('summary-route')
          summary.innerHTML = 'Distance route ' + result.routes[0].summary.lengthInMeters + ' mts'
          const geojson = result.toGeoJson()
          if (map.getLayer('route')) {
            map.removeLayer('route')
            map.removeSource('route')
          }

          map.addLayer({
            'id': 'route',
            'type': 'line',
            'source': {
              'type': 'geojson',
              'data': geojson
            },
            'paint': {
              'line-color': 'orange',
              'line-width': 8
            }
          });
        })
    }


    tt.setProductInfo('<your-product-id>', '<your-product-version>')

    tt.services.fuzzySearch({
      key: 'G3n7k1qeeVQBZyftR0uSratebx0VYCQz',  // Get on for free at developer.tomtom.com
      query: 'kakkanad'
    }).then(function (response) {
      showMap(response.results[0].position)
    });

    return (  
      <div className="Mapscontainer"> 
        <button onClick={route}>Route</button> <button onClick={optimize}>Optimize</button>
        <div id='map'></div>
        <div id='summary-route'></div>
        <div id='summary-optimize'></div>
      </div>
      );
}

export default Server