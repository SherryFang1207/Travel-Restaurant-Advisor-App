// Video starting at: 49:00
import axios from 'axios'

const boundURL = 'https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary';

const zfang_gmail_APIKEY = '8decf373c3mshdfd40834006f5f6p1438d3jsnc34f0cd4ce9d';
const zfang_ucsc_APIKEY = '2bdc970c21msh5ab2b6524fc0f46p1ca204jsna4390f05d345';

export const getPlaceData = async (sw, ne) => {
    try{
        const {data: {data:restaurantsData}} = await axios.get(boundURL,{
            params: {
              bl_latitude: sw.lat,
              tr_latitude: ne.lat,
              bl_longitude: sw.lng,
              tr_longitude: ne.lng,
              
            },
            headers: {
              'X-RapidAPI-Key': zfang_ucsc_APIKEY,
              'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
            }
          });
        return restaurantsData;
    }catch(error){
        console.log("Error during fetching Place Data");
        console.log(error);
    }
}