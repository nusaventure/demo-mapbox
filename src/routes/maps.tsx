import Map, { Marker } from "react-map-gl";

import "../mapbox-gl.css";

const mapboxAccessToken = import.meta.env.VITE_MAPBOX_ACCESS_TOKEN;

export function App() {
  const coordinate = {
    latitude: -6.1753924,
    longitude: 106.8271528,
    zoom: 14,
  };

  return (
    <Map
      mapboxAccessToken={mapboxAccessToken}
      initialViewState={coordinate}
      style={{ width: 600, height: 400 }}
      mapStyle="mapbox://styles/mapbox/streets-v9"
    >
      <Marker
        longitude={coordinate.longitude}
        latitude={coordinate.latitude}
        anchor="bottom"
      >
        <img src="/images/pin.png" width={50} height={50} />
      </Marker>
    </Map>
  );
}
