import React, { useEffect, useState } from "react";
import { CssBaseline, Grid } from "@mui/material";

import { getPlacesData } from "./api";

import Header from "./components/Header/Header";
import List from "./components/List/List";
import Map from "./components/Map/map";

const App = () => {
  const [places, setPlaces] = useState([]);

  const [coordinates, setCoordinates] = useState({
    // location of London
    lat: 51.507351,
    lng: 0.127758,
  });
  const [bounds, setBounds] = useState(null);

  // i donw know why it is not working here
  // useEffect(() => {
  //   navigator.geolocation.getCurrentPosition(
  //     ({ coords: { latitude, longitude } }) => {
  //       setCoordinates({ lat: latitude, lng: longitude });
  //     }
  //   );
  // }, []);

  useEffect(() => {
    console.log(coordinates, bounds);
    getPlacesData().then((data) => {
      console.log(data);
      setPlaces(data);
    });
  }, [coordinates, bounds]);

  return (
    <>
      <CssBaseline />
      <Header />
      <Grid container spacing={3} style={{ width: "100%" }}>
        <Grid item xs={12} md={4}>
          <List />
        </Grid>
        <Grid item xs={12} md={8}>
          <Map
            setCoordinates={setCoordinates}
            setBounds={setBounds}
            coordinates={coordinates}
          />
        </Grid>
      </Grid>
    </>
  );
};

export default App;
