import axios from 'axios';

export default {
    search: (query,latitude,longitude) =>
    axios({
        "method":"GET",
        "url":`https://yelp-com.p.rapidapi.com/search/nearby/${latitude}/${longitude}`,
        "headers":{
        "content-type":"application/octet-stream",
        "x-rapidapi-host":"yelp-com.p.rapidapi.com",
        "x-rapidapi-key":`${process.env.REACT_APP_YELP_API_KEY}`, 
        "useQueryString":true
        },"params":{
        "offset":"0",
        "radius":"5",
        "term":`${query}`
        }
    })
}