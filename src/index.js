import { getData } from "./weather";

const searchForm = document.getElementById('searchForm');
const searchItem = document.getElementById('search-bar');
const submitBtn = document.querySelector('.submit-btn');
const mode = document.querySelector('.toggle-input');
let dataType = false; // True -> Fahrenheit ; False -> Celsius

searchForm.addEventListener('submit', (e)=> {
    e.preventDefault();
});

const temperature = document.querySelector('.temperature');
const feelsLike = document.querySelector('.feelsLike');

submitBtn.addEventListener('click', async (e) => {
    if (searchItem.value === "") return;
    const data = await getData(searchItem.value);

    const cityName = document.querySelector('.cityName');
    cityName.innerText = data.cityName;

    if (dataType) {
        temperature.innerText = convertToFahrenheit(data.temperature);
        feelsLike.innerText = convertToFahrenheit(data.feelsLike);
    }
    else {
        temperature.innerText = data.temperature;
        feelsLike.innerText = data.feelsLike;
    }

    const humidity = document.querySelector('.humidity');
    humidity.innerText = data.humidity;
});

mode.addEventListener('click', (e) => {
    dataType = !dataType;

    if (dataType) {
        temperature.innerText = convertToFahrenheit(parseInt(temperature.innerText));
        feelsLike.innerText = convertToFahrenheit(parseInt(feelsLike.innerText));
    }
    else {
        temperature.innerText = convertToCelsius(parseInt(temperature.innerText));
        feelsLike.innerText = convertToCelsius(parseInt(feelsLike.innerText));
    }
});

function convertToFahrenheit(number) {
    return Math.round((number * (9/5) + 32) * 100)/100;
}

function convertToCelsius(number) {
    return Math.round((number - 32) * (5/9) * 100)/100;
}