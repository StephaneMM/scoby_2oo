import React from "react";
import ReactMapboxGl, { Marker, Layer } from "react-mapbox-gl";

const Map = ReactMapboxGl({
  accessToken:
    "pk.eyJ1IjoiZGV2YXVyZWxpZSIsImEiOiJja3BmM2hjNXUwMW54Mm9tczFsbWEzNXlrIn0.WhPNPl8dybTnqtnKkjCbsQ",
});

const Home = (props) => {
  return (
    <div>
      <h1>MAPBOX MAP HERE</h1>
      <p>On home /</p>
      <Map
        style="mapbox://styles/mapbox/streets-v9"
        containerStyle={{
          height: "100vh",
          width: "100vw",
        }}
      >
        <Layer type="symbol" id="marker" layout={{ 'icon-image': 'marker-15' }}></Layer>
        <Marker coordinates={[2.333333, 48.866667]} anchor="bottom">
          <img
            className="icon2"
            src="https://image.flaticon.com/icons/png/512/740/740922.png"
          />
        </Marker>
      </Map>
    </div>
  );
};

export default Home;
