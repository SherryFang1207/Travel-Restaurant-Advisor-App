import React from 'react'

import {Box, Typography, Button, Card, CardMedia, CardContent, CardActions, Chip} from '@material-ui/core'
import LocationOnIcon from '@material-ui/icons/LocationOn'
import PhoneIcon from '@material-ui/icons/Phone'
import Rating from '@material-ui/lab/Rating'

import useStyles from './styles'

// function handleScroll(passed){
//   passed.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
// }

const PlaceDetails = ({place, selected, innerRef}) => {
  
  const classes = useStyles();
  const imageHolder = 'https://static.vecteezy.com/system/resources/thumbnails/023/152/240/original/delivery-break-404-error-animation-fast-food-restaurant-worker-empty-state-4k-concept-footage-with-alpha-channel-transparency-colorful-page-not-found-flash-message-for-ui-ux-web-design-video.jpg';
  // if (selected) {
  //   console.log('A place is selected.');
  //   // console.log({ref});
  //   innerRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
  // }
  
//   if (place.name){
//     return (
//       <Card elevation={6}>
//         <CardMedia
//           style={{height:350}}
//           image={place.photo ? place.photo.images.large.url : imageHolder}
//           title={place.name}
//          />
  
//          <CardContent>
//             <Typography gutterBottom variant='h5'>
//               {place.name}
  
//             </Typography>
//             <Box display="flex" justifyContent="space-between">
//             <Rating value={Number(place.rating)} readOnly/>
//               <Typography gutterBottom variant='subtitle1'>
//                 out of {place.num_reviews}
//               </Typography>
//             </Box>

//             <Box display="flex" justifyContent="space-between">
//               <Typography variant='subtitle1'>
//                 Price
//               </Typography>
//               <Typography gutterBottom variant='subtitle1'>
//                 {place.price_level}
//               </Typography>
//             </Box>
//             <Box display="flex" justifyContent="space-between">
//               <Typography variant='subtitle1'>
//                 Ranking
//               </Typography>
//               <Typography gutterBottom variant='subtitle1'>
//                 {place.ranking}
//               </Typography>
//             </Box>
  
//             {place.award && place.award.map((award) => (
//               <Box my={1} display='flex' justifyContent="space-between" alignItems='center'>
//                 <img src={award.images.small} alt={award.display_name}/>
//                 <Typography variant='subtitle2' color='textSecondary'>
//                   {award.display_name}
//                 </Typography>
//               </Box>
//             ))}
//             {place.cuisine?.map(({name}) => (
//               <Chip key={name} size='small' label={name} className={classes.chip}/>
//             ))}
//             {
//               place.address && (
//                 <Typography gutterBottom variant='subtitle2' color='textSecondary' className={classes.subtitle}>
//                   <LocationOnIcon /> {place.address}
//                 </Typography>
//               )
//             }
//             {
//               place.phone && (
//                 <Typography gutterBottom variant='subtitle2' color='textSecondary' className={classes.spacing}>
//                   <PhoneIcon /> {place.phone}
//                 </Typography>
//               )
//             }

//             <CardActions>
//               <Button size='small' color='primary' onClick={() => window.open(place.web_url, '_blank')}>
//                 Trip Advisor
//               </Button>
//               <Button size='small' color='primary' onClick={() => window.open(place.website, '_blank')}>
//                 Website
//               </Button>
//               <Button size='small' color='primary' onClick={() => window.open(place.write_review, '_blank')}>
//                 Write Review
//               </Button>
//             </CardActions>
//          </CardContent>
  
//       </Card>
//     );
//   }else{
//     console.log('Incomplete Restaurant Information.');
//   }
  
// }

return (
  <div ref={innerRef}>

  {/* {selected && handleScroll(innerRef)} */}
  <Card elevation={6}>
    <CardMedia
      style={{ height: 350 }}
      image={place.photo ? place.photo.images.large.url : 'https://www.foodserviceandhospitality.com/wp-content/uploads/2016/09/Restaurant-Placeholder-001.jpg'}
      title={place.name}
    />
    <CardContent>
      <Typography gutterBottom variant="h5">{place.name}</Typography>
      <Box display="flex" justifyContent="space-between" my={2}>
        <Rating name="read-only" value={Number(place.rating)} readOnly />
        <Typography component="legend">{place.num_reviews} review{place.num_reviews > 1 && 's'}</Typography>
      </Box>
      <Box display="flex" justifyContent="space-between">
        <Typography component="legend">Price</Typography>
        <Typography gutterBottom variant="subtitle1">
          {place.price_level}
        </Typography>
      </Box>
      <Box display="flex" justifyContent="space-between">
        <Typography component="legend">Ranking</Typography>
        <Typography gutterBottom variant="subtitle1">
          {place.ranking}
        </Typography>
      </Box>
      {place?.awards?.map((award) => (
        <Box display="flex" justifyContent="space-between" my={1} alignItems="center">
          <img src={award.images.small} />
          <Typography variant="subtitle2" color="textSecondary">{award.display_name}</Typography>
        </Box>
      ))}
      {place?.cuisine?.map(({ name }) => (
        <Chip key={name} size="small" label={name} className={classes.chip} />
      ))}
      {place.address && (
        <Typography gutterBottom variant="body2" color="textSecondary" className={classes.subtitle}>
          <LocationOnIcon />{place.address}
        </Typography>
      )}
      {place.phone && (
        <Typography variant="body2" color="textSecondary" className={classes.spacing}>
          <PhoneIcon /> {place.phone}
        </Typography>
      )}
    </CardContent>
    <CardActions>
      <Button size="small" color="primary" onClick={() => window.open(place.web_url, '_blank')}>
        Trip Advisor
      </Button>
      <Button size="small" color="primary" onClick={() => window.open(place.website, '_blank')}>
        Website
      </Button>
    </CardActions>
  </Card>

</div>
);
};


export default PlaceDetails