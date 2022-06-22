import { config } from "../config";

function convertData(data) {
    const {
        name: cityName,
        main: { 
            temp: temperature, 
            feels_like: feelsLike, 
            humidity 
        },
        wind: { 
            speed: windSpeed 
        },
      } = data;
      return { cityName, temperature, feelsLike, humidity, windSpeed };
}

async function getData(cityName) {
    let API_URL = `http://api.openweathermap.org/data/2.5/weather?q=${cityName}&APPID=48c0ed550c8325123d9d568b10b6c177`;
    try {
        const response = await fetch(API_URL, {mode: "cors"});
        if (!response.ok) {
            throw new Error(`${city} not found`);
        }
        return convertData(await response.json());
    }
    catch (error) {
        alert(error);
        return null;
    }
}

export { getData };