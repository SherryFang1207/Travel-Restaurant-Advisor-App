import React, { useState } from 'react'
import GoogleMapReact from 'google-map-react'
import { Paper, Typography, useMediaQuery } from '@material-ui/core'
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined'
import Rating from '@material-ui/lab/Rating';

// use material ui as a hook
import useStyles from './styles'
// Google Map API key: AIzaSyBz_4e-duFtLFLRw2TOoNT3tXk1tu-0xIA


const Map = ({setCoordinates,setBounds, coordinates, places, setChildClicked}) => {
  const imageHolder = 'https://static.vecteezy.com/system/resources/thumbnails/023/152/240/original/delivery-break-404-error-animation-fast-food-restaurant-worker-empty-state-4k-concept-footage-with-alpha-channel-transparency-colorful-page-not-found-flash-message-for-ui-ux-web-design-video.jpg';
  const classes = useStyles();
  const isDesktop = useMediaQuery('(min-width: 600px)');
  const googleKey = 'AIzaSyBz_4e-duFtLFLRw2TOoNT3tXk1tu-0xIA';
  
  // const coordinates = {lat: 0, lng: 0};
  return (
    <div className={classes.mapContainer}>
      <GoogleMapReact
        bootstrapURLKeys={{key: googleKey}}
        defaultCenter={coordinates}
        center={coordinates}
        defaultZoom={14}
        margin={[50, 50, 50, 50]}
        options={''}
        onChange={(e) => {
          setCoordinates({lat:e.center.lat, lng: e.center.lng});
          
          setBounds({ne: e.marginBounds.ne, sw: e.marginBounds.sw});
          // console.log(e);
        }}
        onChildClick={(child) => setChildClicked(child)}
      >
        {places?.map((place, i) => (
          <div
            className={classes.markerContainer}
            lat={Number(place.latitude)}
            lng={Number(place.longitude)}
            key={i}
            >
          {
            place.name && (
            !isDesktop ? (
              <LocationOnOutlinedIcon color='primary' fontSize='large'/>
            ) : (
              <Paper elevation={3} className={classes.paper}>
                <Typography className={classes.typography} variant='subtitle2' gutterBottom>
                  {place.name}
                </Typography>
                <img 
                  className={classes.pointer}
                  src={place.photo ? place.photo.images.large.url : imageHolder}
                  alt={place.name}

                />
                <Rating size='small' value={Number(place.rating)} readOnly/>
              </Paper>
            )
            )
          }
          </div>
        ))}
      </GoogleMapReact>
    </div>
    
  )
}

export default Map