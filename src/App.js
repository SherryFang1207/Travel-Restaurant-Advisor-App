import React from 'react'
import { useEffect, useState } from 'react'
import { CssBaseline, Grid } from '@material-ui/core'

import Header from './components/Header/Header'
import List from './components/List/List'
import Map from './components/Map/Map'

//API
import { getPlaceData } from './api';
const App = () => {
  const [places, setPlaces] = useState([]);

  const [coordinates, setCoordinates] = useState({});
  const [bounds, setBounds] = useState(null);

  const [childClicked, setChildClicked] = useState(null);

  const [isLoading, setIsLoading] = useState(false);


  useEffect(() => {
    
    navigator.geolocation.getCurrentPosition(({coords: {latitude, longitude}})=> {
      console.log("You are currently at: " + latitude + longitude);
      setCoordinates({lat: latitude, lng: longitude});
    })
  }, []);



  useEffect(() => {
    
    if (bounds){
      setIsLoading(true);
      getPlaceData(bounds.sw, bounds.ne)
      .then((data) => {
        // console.log(data);
        setPlaces(data);
        setIsLoading(false);
      })
    }
    
  },[coordinates, bounds]);
  return (
    <>
        <CssBaseline />
        {/* <h1>Testing Home Page</h1> */}
        <Header />
        <Grid container spacing={3} style={{width:'100%'}}>
            <Grid item xs={12} md={4}>
                <List places={places}
                  childClicked={childClicked}
                  isLoading={isLoading}
                />
            </Grid>
            <Grid item xs={12} md={8}>
                <Map 
                  setCoordinates={setCoordinates}
                  setBounds={setBounds}
                  coordinates={coordinates}
                  places={places}
                  setChildClicked={setChildClicked}

                />
            </Grid>
        </Grid>
    </>
    
  )
}

export default App