import React from "react";
import ReactMapboxGl from "react-mapbox-gl";

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
      ></Map>
    </div>
  );
};

export default Home;
