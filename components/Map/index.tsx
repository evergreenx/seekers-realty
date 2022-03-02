
import * as React from 'react';
import Map from 'react-map-gl';

import 'mapbox-gl/dist/mapbox-gl.css';

// interface MapProps {
//     latitude: any;
//     longitude: any;
// }


// @ts-ignore


function Index( { longitude , latitude } ) {
  return (
    <Map
    initialViewState={{
      longitude: -100,
      latitude: 40,
      zoom: 3.5
    }}
    style={{width: 600, height: 400}}
    mapStyle="mapbox://styles/mapbox/streets-v9"
    mapboxAccessToken={'pk.eyJ1IjoiZXZlcmdyZWVueCIsImEiOiJjbDA5dW1yZG0wM3ZjM2pwdGFlMjl5NHl4In0.JACydK5Nje9CpSQcpFWGEg'}
    
  />
  );
}

export default Map;