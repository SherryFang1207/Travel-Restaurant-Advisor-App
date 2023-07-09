import React from 'react'
import { CircularProgress, Grid, Typography, InputLabel, MenuItem, FormControl, Select } from '@material-ui/core'
import { useState, useEffect, createRef, useRef } from 'react'
import useStyles from './styles'
import PlaceDetails from '../PlaceDetails/PlaceDetails.jsx'

const List = ({places, childClicked, isLoading}) => {
  const classes = useStyles();
  const [type, setType] = useState('restaurants');
  const [rating, setRating] = useState('');
  const [elRefs, setElRefs] = useState([]);

  // Use React Ref to make List component scroll to the childClicked position
  // console.log({childClicked});
  // useEffect(() => {
  //     const refs = Array(places?.length).fill().map((_, i) => useRef(null));

  //     setElRefs(refs);
  // }, [places])
//   useEffect(() => {
//     const refs = Array(places?.length);
//     let i = 0;
//     while (i < places.length){
//       refs[i] = useRef(null);
//     }

//     setElRefs(refs);
// }, [places])
  
//   function makeRef(){

//   }
  // useEffect(() => {
  //   setElRefs((refs) => Array(places?.length).fill().map((_, i) => refs[i] || createRef()));
  // }, [places]);


  useEffect(() => {
    // add or remove refs
    setElRefs((elRefs) =>
      Array(places.length)
        .fill()
        .map((_, i) => elRefs[i] || createRef()),
    );
  }, [places]);
  return (
    <div className={classes.container}>
    <Typography variant='h4'>
      Restaurants, Hotels & Attractions around you
    </Typography>
    {
      isLoading ? (
        <div className={classes.loading}>
          <CircularProgress size='5rem' />
        </div>
      ) : (
        <>
        <FormControl className={classes.formControl}>
      <InputLabel>
        Type
      </InputLabel>
      <Select value={type} onChange={(e) => setType(e.target.value)}>
        <MenuItem value="restaurants"> Restaurants</MenuItem>
        <MenuItem value="hotels"> Hotels</MenuItem>
        <MenuItem value="attractions"> Attractions</MenuItem>
      </Select>
    </FormControl>
    <FormControl className={classes.formControl}>
      <InputLabel>
        Rating
      </InputLabel>
      <Select value={rating} onChange={(e) => setRating(e.target.value)}>
        <MenuItem value={0}> All</MenuItem>
        <MenuItem value={3}> Above 3.0</MenuItem>
        <MenuItem value={4}> Above 4.0</MenuItem>
        <MenuItem value={4.5}> Above 4.5</MenuItem>
      </Select>
    </FormControl>
    
    <Grid container spacing={3} className={classes.list}>
            {places && places.map((place, i) => (
              <Grid item xs={12} key={i}>
                <PlaceDetails place={place} 
                  selected={Number(childClicked) === i}
                  innerRef={elRefs[i]}
                />
                {Number(childClicked === i) && 
              elRefs[i].current.scrollIntoView({ behavior: 'smooth', block: 'start' })}
              </Grid>
            ))}
            
          </Grid>
          </>
      )
    }
    
    
    </div>
  )
}

export default List