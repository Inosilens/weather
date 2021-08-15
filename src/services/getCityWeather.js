import axios from "axios";
import {API_KEY} from "../helpers/constants";

export const getCityList = ( ) => {
return axios.get(`https://api.openweathermap.org/data/2.5/find?lat=56.5&lon=84.9667&cnt=15&appid=${API_KEY}`).then(r =>r.data )


}