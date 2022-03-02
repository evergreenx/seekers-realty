import * as React from "react";
import Map from "react-map-gl";

import "mapbox-gl/dist/mapbox-gl.css";

interface MapProps {
  latitude: any;
  longitude: any;
}

// @ts-ignore

const TOKEN =
  "pk.eyJ1IjoiZXZlcmdyZWVueCIsImEiOiJjbDA5dW1yZG0wM3ZjM2pwdGFlMjl5NHl4In0.JACydK5Nje9CpSQcpFWGEg";
function Index({ longitude, latitude }: MapProps) {
  return (
    <>
     
      <Map
        initialViewState={{
          longitude: longitude,
          latitude: latitude,
          zoom: 1.5,
        }}
        style={{ width: '100%', height: 400 }}
        mapStyle="mapbox://styles/mapbox/streets-v9"
        mapboxAccessToken={TOKEN}
      />
    </>
  );
}

export default Index;
