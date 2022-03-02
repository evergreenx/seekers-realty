/* eslint-disable react/jsx-key */
import * as React from "react";
import Map, {
  Marker,

} from "react-map-gl";

import Pin from "../../public/pin.svg";
import "mapbox-gl/dist/mapbox-gl.css";
import Image from "next/image";

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
          zoom: 3.5,
        }}
        style={{ width: "100%", height: 400 }}
        mapStyle="mapbox://styles/mapbox/streets-v9"
        mapboxAccessToken={TOKEN}
      >
        <Marker longitude={longitude} latitude={latitude} anchor="bottom">
          <Image alt="marker" src={Pin} width={40} height={40} />
        </Marker>
      </Map>
    </>
  );
}

export default Index;
