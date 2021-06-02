import React from "react";
import ReactMapboxGl, { Marker } from "react-mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import axios from "axios";

const Map = ReactMapboxGl({
  accessToken: process.env.REACT_APP_MAPBOX_TOKEN,
});

class Home extends React.Component {
  state = {
    items: [],
  };
  componentDidMount() {
    axios
      .get(process.env.REACT_APP_BACKEND_URL + "/api/items")
      .then((res) => {
        console.log(res.data);
        this.setState({ items: res.data });
      })
      .catch((err) => console.log(err));
  }

  render() {
    {
      console.log(this.state.items);
    }
    return (
      <div>
        <h1>MAPBOX MAP HERE</h1>
        <p>On home /</p>
        <Map
          center={[2.3522, 48.8566]}
          style="mapbox://styles/mapbox/streets-v9"
          containerStyle={{
            height: "100vh",
            width: "100vw",
          }}
        >
          {this.state.items.map((item, index) => {
            console.log(item.image)
            return (
                <Marker
                  key={index}
                  coordinates={[
                    item.location.coordinates[1],
                    item.location.coordinates[0],
                  ]}
                  anchor="bottom"
                >
                  <img
                  style={{width:80}}
                    className="icon2"
                    src={item.image}
                    alt=""
                  />
                </Marker>
              
            );
          })}
        </Map>
      </div>
    );
  }
}

export default Home;
