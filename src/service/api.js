import axios from 'axios';

const URL = 'https://api.openweathermap.org/data/2.5/weather';
const API_KEY = '84a70e4130fd508392a269abdbe301ed'

export const getData = async(city, country) => {
    return  await axios.get(`${URL}?q=${city},${country}&appid=${API_KEY}&units=metric`)
}