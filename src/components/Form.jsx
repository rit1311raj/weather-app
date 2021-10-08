import { Box, Button, TextField, makeStyles } from "@material-ui/core";

import { getData } from "../service/api";
import { useEffect, useState } from "react";
import Information from "./Information";


const useStyles = makeStyles({
    components:{
    padding: 10,
    background: '#445A6F'
    },
    input:{
    color: '#fff',
    marginRight: 15
    },
    button:{
        width: 150,
        height: 40,
        backgroundColor: '#e67e22',
        color: '#fff',
        marginTop: 5
    }
})

const Form = () => {
    const classes = useStyles();


    const [data, getWeatherData] = useState();
    const [city, setCity] = useState('');
    const [country, setCountry] = useState('');
    const [click, handleClick] = useState(false);
        
    

    useEffect(() => {
        const getWeather = async () => {
      city && await getData(city, country).then(response =>{
        getWeatherData(response.data);
         console.log(response.data);
     }) }
     getWeather();
     handleClick(false);
    },[click]);


    const handleCityChange = (value) => {
        setCity(value);
    }
    const handleCountryChange = (value) => {
        setCountry(value);
    }
    

    return(
        <>
     <Box className={classes.components}>
         <TextField
             label="city"
             inputProps={{className:classes.input}}
             onChange={(e) => handleCityChange(e.target.value)}
             className={classes.input}
         />
         <TextField
             label="country"
             onChange={(e) => handleCountryChange(e.target.value)}
             inputProps={{className:classes.input}}
             className={classes.input}
         />
         <Button
         className={classes.button}
         variant="contained"
         onClick={()=>handleClick(true)}
         >GET WEATHER</Button>
     </Box>
     <Information data={data}/>
     </>
    )

}

export default Form;