import Map from "react-map-gl";

export function App() {
  return (
    <Map
      mapboxAccessToken="pk.eyJ1IjoibWFpbGZhcnVxaSIsImEiOiJjbHgwMmw1MWUwY2FtMmpxdWEzZzZuaGxtIn0.y1WITnIkcAoNet2MZEL5jQ"
      initialViewState={{
        longitude: -122.4,
        latitude: 37.8,
        zoom: 14,
      }}
      style={{ width: 600, height: 400 }}
      mapStyle="mapbox://styles/mapbox/streets-v9"
    />
  );
}
